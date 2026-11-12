/*
 * WhisperWalk : ajout au panier sans rechargement.
 * - Formulaires des packs (cartes, comparatif, fiche produit) et accessoires « Complétez votre pack ».
 * - Après l'ajout, le tiroir panier du thème s'ouvre et se met à jour (événement standard
 *   CartLinesUpdateEvent, écouté par le tiroir, la liste du panier et l'icône panier).
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

function isAjaxForm(form) {
  if (!(form instanceof HTMLFormElement)) return false;
  if (!document.querySelector('cart-items-component[data-drawer]')) return false; // pas de tiroir : comportement normal
  if (form.hasAttribute('data-ww-ajax-add')) return true;
  const action = form.getAttribute('action') || '';
  return action.indexOf('/cart/add') !== -1 && form.closest('.ww') !== null;
}

async function addToCart(form, submitter) {
  const data = new FormData(form);
  const id = parseInt(String(data.get('id') || ''), 10);
  const quantity = Math.max(1, parseInt(String(data.get('quantity') || '1'), 10) || 1);
  if (!id) throw new Error('Variante introuvable');

  const deferred = CartLinesUpdateEvent.createPromise();
  form.dispatchEvent(
    new CartLinesUpdateEvent({
      action: 'add',
      context: 'product',
      lines: [{ merchandiseId: id, quantity }],
      promise: deferred.promise,
    })
  );

  try {
    const addResponse = await fetch(CART_ADD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({
        items: [{ id, quantity }],
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
  } catch (error) {
    console.warn('[ww-cart] Ajout sans rechargement impossible, envoi classique.', error);
    HTMLFormElement.prototype.submit.call(form);
  } finally {
    if (button) button.removeAttribute('aria-busy');
  }
});
