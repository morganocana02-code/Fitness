/*
 * WhisperWalk : ajout au panier sans rechargement.
 * - Formulaires des packs (cartes, comparatif, fiche produit) et accessoires « Complétez votre pack ».
 * - Après l'ajout, le tiroir panier du thème s'ouvre et se met à jour (événement standard
 *   CartLinesUpdateEvent, écouté par le tiroir, la liste du panier et l'icône panier).
 * - Fiche produit : formule « Pack + accessoire » (fieldset [data-ww-bundle]) : les deux articles
 *   sont ajoutés ensemble, et « Passer à l'action » envoie les deux au paiement.
 * - En cas d'erreur, le formulaire est envoyé normalement (page panier).
 */
import { CartLinesUpdateEvent } from '@shopify/events';

const CART_ADD = (window.Theme && window.Theme.routes && window.Theme.routes.cart_add_url) || '/cart/add.js';
const CART_URL = (window.Theme && window.Theme.routes && window.Theme.routes.cart_url) || '/cart';

function sectionIds() {
  const ids = new Set();
  document.querySelectorAll('cart-items-component[data-section-id]').forEach((el) => {
    if (el.dataset.sectionId) ids.add(el.dataset.sectionId);
  });
  return Array.from(ids);
}

/** Variante de l'accessoire si la formule « Pack + accessoire » est choisie, sinon null. */
function bundleAddonId(form) {
  const radio = form.querySelector('[data-ww-bundle] [data-ww-bundle-addon]');
  if (!radio || !radio.checked) return null;
  const field = form.querySelector('[data-ww-addon-id]');
  const id = field ? parseInt(field.value, 10) : 0;
  return id || null;
}

function hasDrawer() {
  return document.querySelector('cart-items-component[data-drawer]') !== null;
}

function isAjaxForm(form) {
  if (!(form instanceof HTMLFormElement)) return false;
  if (bundleAddonId(form)) return true; // pack + accessoire : toujours les deux articles ensemble
  if (!hasDrawer()) return false; // pas de tiroir : comportement normal
  if (form.hasAttribute('data-ww-ajax-add')) return true;
  const action = form.getAttribute('action') || '';
  return action.indexOf('/cart/add') !== -1 && form.closest('.ww') !== null;
}

async function addToCart(form, submitter) {
  const data = new FormData(form);
  const id = parseInt(String(data.get('id') || ''), 10);
  const quantity = Math.max(1, parseInt(String(data.get('quantity') || '1'), 10) || 1);
  if (!id) throw new Error('Variante introuvable');
  const items = [{ id, quantity }];
  const addonId = bundleAddonId(form);
  if (addonId) items.push({ id: addonId, quantity });

  const deferred = CartLinesUpdateEvent.createPromise();
  form.dispatchEvent(
    new CartLinesUpdateEvent({
      action: 'add',
      context: 'product',
      lines: items.map((item) => ({ merchandiseId: item.id, quantity: item.quantity })),
      promise: deferred.promise,
    })
  );

  try {
    const addResponse = await fetch(CART_ADD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({
        items,
        sections: sectionIds().join(','),
        sections_url: window.location.pathname,
      }),
    });
    const added = await addResponse.json();
    if (!addResponse.ok || added.status) throw new Error(added.description || added.message || 'Ajout impossible');

    const cartResponse = await fetch(CART_URL + '.js', { headers: { Accept: 'application/json' }, credentials: 'same-origin' });
    const cart = await cartResponse.json();

    deferred.resolve({
      cart: CartLinesUpdateEvent.createCartFromAjaxResponse(cart),
      detail: {
        sections: added.sections || {},
        itemCount: cart.item_count,
        source: 'ww-cart',
        didError: false,
      },
    });
  } catch (error) {
    deferred.reject(error);
    throw error;
  }
}

document.addEventListener('submit', async (event) => {
  const form = event.target;
  if (!isAjaxForm(form)) return;
  event.preventDefault();

  const button = event.submitter || form.querySelector('[type="submit"]');
  if (button) button.setAttribute('aria-busy', 'true');

  try {
    await addToCart(form, button);
    if (!hasDrawer()) window.location.href = CART_URL;
  } catch (error) {
    console.warn('[ww-cart] Ajout sans rechargement impossible, envoi classique.', error);
    HTMLFormElement.prototype.submit.call(form);
  } finally {
    if (button) button.removeAttribute('aria-busy');
  }
});

/* « Passer à l'action » avec la formule « Pack + accessoire » : paiement direct des deux articles.
   Écouteur en phase de capture, avant celui de ww-premium.js qui ne connaît que le pack. */
document.addEventListener(
  'click',
  (event) => {
    const link = event.target instanceof Element ? event.target.closest('[data-ww-buy-now]') : null;
    const form = link && link.closest('form');
    if (!form) return;
    const addonId = bundleAddonId(form);
    if (!addonId) return;
    const id = form.querySelector('[name="id"]');
    const qtyField = form.querySelector('input[name="quantity"]');
    if (!id || !id.value) return;
    const qty = Math.max(1, parseInt(qtyField && qtyField.value, 10) || 1);
    event.preventDefault();
    window.location.href = (link.getAttribute('data-ww-cart-url') || CART_URL) + '/' + id.value + ':' + qty + ',' + addonId + ':' + qty;
  },
  true
);

/* Choisir une taille de l'accessoire sélectionne la formule « Pack + accessoire ». */
document.addEventListener('change', (event) => {
  const field = event.target instanceof Element ? event.target.closest('[data-ww-bundle] [data-ww-addon-id]') : null;
  if (!field) return;
  const radio = field.closest('[data-ww-bundle]').querySelector('[data-ww-bundle-addon]');
  if (radio) radio.checked = true;
});
