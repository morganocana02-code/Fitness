# Refonte WhisperWalk — tout le code

Chaque bloc ci-dessous correspond à un fichier. Le chemin indique le dossier Shopify (voir LISEZMOI.md).

## assets/ww-premium.css

```css
/* ==========================================================================
   WhisperWalk — Refonte premium
   Feuille de style commune à toutes les sections « ww-… ».
   Tout est limité à la classe .ww pour ne pas modifier le reste du thème
   (en-tête, pied de page, panier, paiement restent ceux de Horizon).
   ========================================================================== */

.ww {
  /* Couleurs */
  --ww-violet: #4a53ff;
  --ww-violet-hover: #3a42e6;
  --ww-black: #000000;
  --ww-carbon: #191919;
  --ww-white: #ffffff;
  --ww-mist: #f3f5f9;
  --ww-hairline: #e5e7eb;
  --ww-fog: #808080;
  --ww-ash: #999999;

  /* Bouton principal (violet par défaut, voir l'option « noir et blanc » en fin de fichier) */
  --ww-cta: var(--ww-violet);
  --ww-cta-hover: var(--ww-violet-hover);
  --ww-cta-text: var(--ww-white);

  /* Typographie : on réutilise la police déjà chargée par le thème (Inter) */
  --ww-font: var(--font-body--family, "Inter"), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Formes */
  --ww-radius-card: 24px;
  --ww-radius-pill: 300px;

  /* Mise en page */
  --ww-max: 1200px;
  --ww-gutter: 20px;
  --ww-section: 72px;

  font-family: var(--ww-font);
  color: var(--ww-black);
  background: var(--ww-white);
  -webkit-font-smoothing: antialiased;
}

.ww *,
.ww *::before,
.ww *::after { box-sizing: border-box; }

/* :where() garde ces règles de base faibles, pour que les boutons et liens stylés gardent leurs couleurs */
:where(.ww) img { display: block; max-width: 100%; height: auto; }
:where(.ww) a { color: inherit; }

.ww-visually-hidden { position: absolute !important; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

@media (min-width: 750px) {
  .ww { --ww-gutter: 32px; --ww-section: 104px; }
}

/* ---------- Structure ---------- */

.ww-section { padding: var(--ww-section) 0; background: var(--ww-white); color: var(--ww-black); }
.ww-section--mist { background: var(--ww-mist); }
.ww-section--dark { background: var(--ww-black); color: var(--ww-white); }
.ww-section--carbon { background: var(--ww-carbon); color: var(--ww-white); }

.ww-container { width: 100%; max-width: calc(var(--ww-max) + 2 * var(--ww-gutter)); margin: 0 auto; padding: 0 var(--ww-gutter); }

.ww-head { max-width: 760px; margin-bottom: 40px; }
.ww-head--center { margin-left: auto; margin-right: auto; text-align: center; }

/* ---------- Typographie ---------- */

.ww-eyebrow {
  display: inline-block;
  margin: 0 0 16px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ww-fog);
}
.ww-section--dark .ww-eyebrow,
.ww-section--carbon .ww-eyebrow { color: var(--ww-ash); }

.ww-display {
  margin: 0;
  font-size: clamp(44px, 11vw, 120px);
  font-weight: 500;
  line-height: 0.88;
  letter-spacing: -0.045em;
}
.ww-display--md { font-size: clamp(40px, 5.6vw, 80px); }
/* Sur mobile, le texte revient à la ligne de lui-même */
@media (max-width: 749px) { .ww-display br { display: none; } }

.ww-h2 {
  margin: 0;
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.ww-h3 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.13;
  letter-spacing: -0.03em;
}

.ww-lead {
  margin: 20px 0 0;
  max-width: 560px;
  font-size: clamp(17px, 1.6vw, 20px);
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: var(--ww-fog);
}
.ww-section--dark .ww-lead,
.ww-section--carbon .ww-lead { color: #b3b3b3; }

.ww-text { margin: 0; font-size: 16px; line-height: 1.55; color: var(--ww-fog); }

/* Retours à la ligne plus harmonieux (navigateurs récents, sans effet ailleurs) */
.ww-display, .ww-h2, .ww-h3, .ww-pack__title, .ww-product__title { text-wrap: balance; }
.ww-lead, .ww-text, .ww-pack__pitch { text-wrap: pretty; }
.ww-section--dark .ww-text,
.ww-section--carbon .ww-text { color: #b3b3b3; }

.ww-rte { font-size: 17px; line-height: 1.65; color: #333; }
.ww-rte h2, .ww-rte h3 { color: var(--ww-black); letter-spacing: -0.03em; line-height: 1.15; margin: 1.6em 0 0.5em; }
.ww-rte h2 { font-size: 28px; font-weight: 600; }
.ww-rte h3 { font-size: 21px; font-weight: 600; }
.ww-rte ul { padding-left: 1.2em; }
.ww-rte li { margin: 0.35em 0; }
.ww-rte table { width: 100%; border-collapse: collapse; margin: 1em 0; font-size: 16px; }
.ww-rte td { padding: 12px 0; border-bottom: 1px solid var(--ww-hairline); vertical-align: top; }
.ww-rte td:first-child { color: var(--ww-fog); width: 45%; padding-right: 16px; }
.ww-rte a { color: var(--ww-violet); }

/* ---------- Boutons (toujours en pilule) ---------- */

.ww-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 16px 32px;
  border: 1.5px solid transparent;
  border-radius: var(--ww-radius-pill);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
}
.ww-btn:focus-visible { outline: 2px solid var(--ww-violet); outline-offset: 3px; }
.ww-btn:active { transform: scale(0.98); }

.ww-btn--primary { background: var(--ww-cta); color: var(--ww-cta-text); }
.ww-btn--primary:hover { background: var(--ww-cta-hover); }

.ww-btn--light { background: var(--ww-white); color: var(--ww-black); }
.ww-btn--light:hover { background: #e9e9e9; }

.ww-btn--dark { background: var(--ww-black); color: var(--ww-white); }
.ww-btn--dark:hover { background: var(--ww-carbon); }

.ww-btn--outline { background: transparent; color: var(--ww-black); border-color: var(--ww-hairline); }
.ww-btn--outline:hover { border-color: var(--ww-black); }
.ww-section--dark .ww-btn--outline,
.ww-section--carbon .ww-btn--outline { color: var(--ww-white); border-color: #4d4d4d; }
.ww-section--dark .ww-btn--outline:hover,
.ww-section--carbon .ww-btn--outline:hover { border-color: var(--ww-white); }

.ww-btn--block { width: 100%; }

.ww-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }

/* ---------- Hero ---------- */

/* Sans image : grande affiche noire. Avec image : photo du pack puis texte sur mobile, côte à côte sur ordinateur. */
.ww-hero { position: relative; display: flex; align-items: flex-end; min-height: 88vh; padding: 120px 0 64px; overflow: hidden; }
.ww-hero--media { min-height: 0; padding: 20px 0 56px; }
.ww-hero__grid { display: grid; gap: 32px; align-items: end; width: 100%; }
/* La photo garde ses proportions : rien n'est coupé */
.ww-hero__media { display: block; order: -1; border-radius: var(--ww-radius-card); overflow: hidden; background: var(--ww-carbon); }
.ww-hero__media img { width: 100%; height: auto; max-height: 80vh; object-fit: cover; }
.ww-hero__note { margin-top: 28px; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-ash); }

@media (min-width: 990px) {
  .ww-hero--media { padding: 72px 0; align-items: center; }
  .ww-hero__grid--media { grid-template-columns: 1.2fr 1fr; gap: 64px; align-items: center; }
  .ww-hero__grid--media .ww-display { font-size: clamp(56px, 5.8vw, 96px); }
  .ww-hero__media { order: 0; }
}

/* ---------- Bandeau d'engagements ---------- */

.ww-assurances { padding: 0; background: var(--ww-white); border-bottom: 1px solid var(--ww-hairline); }
.ww-assurances__list { display: grid; grid-template-columns: 1fr 1fr; margin: 0; padding: 0; list-style: none; }
.ww-assurances__item { padding: 24px 16px 24px 0; border-top: 1px solid var(--ww-hairline); }
.ww-assurances__item:nth-child(-n+2) { border-top: 0; }
.ww-assurances__title { display: block; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
.ww-assurances__sub { display: block; margin-top: 4px; font-size: 14px; color: var(--ww-fog); }

@media (min-width: 990px) {
  .ww-assurances__list { grid-template-columns: repeat(4, 1fr); }
  .ww-assurances__item { border-top: 0; padding: 32px 24px; border-left: 1px solid var(--ww-hairline); }
  .ww-assurances__item:first-child { border-left: 0; padding-left: 0; }
}

/* ---------- Grilles et cartes ---------- */

.ww-grid { display: grid; gap: 20px; }
@media (min-width: 750px) { .ww-grid--3 { grid-template-columns: repeat(3, 1fr); gap: 24px; } }
@media (min-width: 750px) { .ww-grid--2 { grid-template-columns: repeat(2, 1fr); gap: 24px; } }

.ww-card { background: var(--ww-mist); border-radius: var(--ww-radius-card); padding: 28px; }
.ww-grid__item { display: flex; min-width: 0; }
.ww-grid__item > * { flex: 1 1 auto; min-width: 0; }

/* Carte pack */
.ww-pack { display: flex; flex-direction: column; background: var(--ww-white); border: 1px solid var(--ww-hairline); border-radius: var(--ww-radius-card); overflow: hidden; }
.ww-section--mist .ww-pack { border-color: transparent; }
.ww-pack__media { position: relative; display: block; aspect-ratio: 1 / 1; background: var(--ww-mist); overflow: hidden; }
/* contain : la photo entière reste visible, même si elle n'est pas carrée */
.ww-pack__media img { width: 100%; height: 100%; object-fit: contain; transition: transform .6s ease; }
.ww-pack:hover .ww-pack__media img { transform: scale(1.03); }
.ww-pack__badge { position: absolute; top: 16px; left: 16px; padding: 8px 14px; border-radius: var(--ww-radius-pill); background: var(--ww-black); color: var(--ww-white); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.ww-pack__body { display: flex; flex: 1; flex-direction: column; gap: 14px; padding: 28px; }
.ww-pack__moment { font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-violet); }
.ww-pack__title { margin: 0; font-size: 26px; font-weight: 600; line-height: 1.1; letter-spacing: -0.03em; }
.ww-pack__title a { text-decoration: none; }
.ww-pack__pitch { margin: 0; font-size: 16px; line-height: 1.5; color: var(--ww-fog); }
.ww-pack__list { margin: 0; padding: 18px 0 0; list-style: none; border-top: 1px solid var(--ww-hairline); font-size: 15px; line-height: 1.45; }
.ww-pack__list ul { margin: 0; padding: 0; list-style: none; }
.ww-pack__list li { position: relative; padding-left: 22px; margin: 8px 0; }
.ww-pack__list li::before { content: ""; position: absolute; left: 0; top: 0.55em; width: 10px; height: 2px; background: var(--ww-black); }
.ww-pack__list p { margin: 0; }
.ww-pack__footer { margin-top: auto; padding-top: 12px; }
.ww-pack__price { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
.ww-pack__amount { font-size: 34px; font-weight: 500; letter-spacing: -0.04em; }
.ww-pack__shipping { font-size: 13px; color: var(--ww-fog); }

/* Moments */
.ww-moment { display: flex; flex-direction: column; border-radius: var(--ww-radius-card); overflow: hidden; background: #262626; color: var(--ww-white); text-decoration: none; }
.ww-moment__media { aspect-ratio: 4 / 3; background: #2e2e2e; overflow: hidden; }
.ww-moment__media img { width: 100%; height: 100%; object-fit: cover; }
.ww-moment__body { display: flex; flex: 1; flex-direction: column; gap: 12px; padding: 28px; }
.ww-moment__label { font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-ash); }
.ww-moment__link { margin-top: auto; padding-top: 12px; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.ww-moment__link::after { content: " →"; }
.ww-moment:hover .ww-moment__link { text-decoration: underline; text-underline-offset: 4px; }

/* Chiffres clés */
.ww-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--ww-hairline); border: 1px solid var(--ww-hairline); border-radius: var(--ww-radius-card); overflow: hidden; }
.ww-metric { background: var(--ww-white); padding: 28px 24px; }
.ww-metric:last-child:nth-child(odd) { grid-column: 1 / -1; }
.ww-metric__value { display: block; white-space: nowrap; font-size: clamp(34px, 3.6vw, 52px); font-weight: 500; line-height: 1; letter-spacing: -0.045em; }
.ww-metric__unit { margin-left: 0.14em; font-size: 0.42em; font-weight: 500; letter-spacing: -0.01em; }
.ww-metric__label { display: block; margin-top: 12px; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-fog); }
.ww-metric__detail { display: block; margin-top: 6px; font-size: 15px; color: var(--ww-fog); }
.ww-footnote { margin: 20px 0 0; font-size: 14px; color: var(--ww-fog); }
@media (min-width: 990px) {
  .ww-metrics { grid-template-columns: repeat(var(--ww-cols, 5), minmax(0, 1fr)); }
  .ww-metric:last-child:nth-child(odd) { grid-column: auto; }
}

/* FAQ */
.ww-faq { max-width: 860px; margin: 0 auto; border-top: 1px solid var(--ww-hairline); }
.ww-faq__item { border-bottom: 1px solid var(--ww-hairline); }
.ww-faq__q { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 24px 0; font-size: clamp(18px, 2vw, 21px); font-weight: 600; letter-spacing: -0.02em; cursor: pointer; list-style: none; }
.ww-faq__q::-webkit-details-marker { display: none; }
.ww-faq__q::after { content: "+"; flex: 0 0 auto; display: grid; place-items: center; width: 36px; height: 36px; border: 1px solid var(--ww-hairline); border-radius: 50%; font-weight: 400; font-size: 20px; transition: transform .2s ease; }
.ww-faq__item[open] .ww-faq__q::after { transform: rotate(45deg); }
.ww-faq__a { padding: 0 52px 24px 0; font-size: 16px; line-height: 1.6; color: #4d4d4d; }
.ww-faq__a p { margin: 0 0 0.8em; }
.ww-faq__a a { color: var(--ww-violet); }
.ww-section--mist .ww-faq__q::after { background: var(--ww-white); }

/* Bande d'appel final */
.ww-cta { text-align: left; }
.ww-cta__facts { display: flex; flex-wrap: wrap; gap: 8px 24px; margin: 28px 0 0; padding: 0; list-style: none; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-ash); }

/* ---------- Page produit ---------- */

.ww-product { padding: 32px 0 var(--ww-section); }
.ww-product__grid { display: grid; gap: 32px; }
@media (min-width: 990px) {
  .ww-product { padding-top: 56px; }
  .ww-product__grid { grid-template-columns: 1.15fr 1fr; gap: 64px; align-items: start; }
  .ww-product__info { position: sticky; top: calc(var(--header-height, 0px) + 24px); }
}

.ww-gallery { display: grid; grid-auto-flow: column; grid-auto-columns: 88%; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
.ww-gallery::-webkit-scrollbar { display: none; }
.ww-gallery__item { scroll-snap-align: start; border-radius: var(--ww-radius-card); overflow: hidden; background: var(--ww-mist); aspect-ratio: 1 / 1; }
.ww-gallery__item img { width: 100%; height: 100%; object-fit: contain; }
@media (min-width: 990px) {
  .ww-gallery { grid-auto-flow: row; grid-auto-columns: auto; grid-template-columns: 1fr 1fr; overflow: visible; }
  .ww-gallery__item:first-child,
  .ww-gallery__item:nth-child(even):last-child { grid-column: 1 / -1; }
}
.ww-gallery__hint { margin: 10px 0 0; font-size: 13px; color: var(--ww-fog); }
@media (min-width: 990px) { .ww-gallery__hint { display: none; } }

.ww-product__title { margin: 0; font-size: clamp(34px, 4.4vw, 52px); font-weight: 500; line-height: 0.98; letter-spacing: -0.04em; }
.ww-product__subtitle { margin: 14px 0 0; font-size: 18px; line-height: 1.4; color: var(--ww-fog); }
.ww-product__price { margin: 28px 0 4px; font-size: clamp(36px, 4vw, 48px); font-weight: 500; letter-spacing: -0.045em; line-height: 1; }
.ww-product__tax { margin: 0; font-size: 14px; color: var(--ww-fog); }
.ww-product__stock { display: inline-flex; align-items: center; gap: 8px; margin: 0; font-size: 14px; font-weight: 500; }
.ww-product__stock::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #1f9d55; }
.ww-product__stock--out::before { background: var(--ww-ash); }

.ww-form { display: grid; gap: 12px; margin-top: 28px; }
.ww-field { display: grid; gap: 8px; }
.ww-field label { font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-fog); }
.ww-select,
.ww-qty input { width: 100%; min-height: 52px; padding: 0 20px; border: 1.5px solid var(--ww-hairline); border-radius: var(--ww-radius-pill); background: var(--ww-white); font: inherit; font-size: 16px; color: var(--ww-black); }
.ww-qty { display: grid; grid-template-columns: 44px 1fr 44px; align-items: center; width: 148px; border: 1.5px solid var(--ww-hairline); border-radius: var(--ww-radius-pill); }
.ww-qty input { border: 0; min-height: 48px; padding: 0; text-align: center; -moz-appearance: textfield; }
.ww-qty input::-webkit-outer-spin-button,
.ww-qty input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.ww-qty button { height: 44px; border: 0; background: none; font-size: 20px; cursor: pointer; color: var(--ww-black); }
.ww-form__row { display: flex; gap: 12px; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-bottom: 4px; }
.ww-form .shopify-payment-button__button { border-radius: var(--ww-radius-pill) !important; min-height: 52px; overflow: hidden; }
.ww-form .shopify-payment-button__more-options { font-size: 14px; color: var(--ww-fog); }

.ww-promises { margin: 28px 0 0; padding: 0; list-style: none; border-top: 1px solid var(--ww-hairline); }
.ww-promises li { display: flex; justify-content: space-between; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--ww-hairline); font-size: 15px; }
.ww-promises span:last-child { color: var(--ww-fog); text-align: right; }

.ww-accordion { margin-top: 28px; border-top: 1px solid var(--ww-hairline); }
.ww-accordion details { border-bottom: 1px solid var(--ww-hairline); }
.ww-accordion summary { display: flex; justify-content: space-between; align-items: center; padding: 18px 0; font-size: 16px; font-weight: 600; cursor: pointer; list-style: none; }
.ww-accordion summary::-webkit-details-marker { display: none; }
.ww-accordion summary::after { content: "+"; font-weight: 400; font-size: 20px; }
.ww-accordion details[open] summary::after { content: "–"; }
.ww-accordion__body { padding: 0 0 20px; font-size: 15px; line-height: 1.6; color: #4d4d4d; }
.ww-accordion__body p { margin: 0 0 0.7em; }
.ww-accordion__body a { color: var(--ww-violet); }

.ww-contact { margin: 24px 0 0; font-size: 15px; color: var(--ww-fog); }
.ww-contact a { color: var(--ww-black); font-weight: 600; white-space: nowrap; }

.ww-details { max-width: 760px; }
.ww-app-block { margin-top: 24px; }

/* Accessibilité : réduire les animations si demandé */
@media (prefers-reduced-motion: reduce) {
  .ww *, .ww *::before, .ww *::after { transition: none !important; }
}

/* ---------- Option « noir et blanc » ----------
   Boutons principaux noirs (blancs sur les fonds noirs) au lieu du violet.
   Pour l'activer : supprimez les deux lignes marquées [SUPPRIMER POUR ACTIVER]. */
/* [SUPPRIMER POUR ACTIVER]
.ww { --ww-cta: #000000; --ww-cta-hover: #191919; --ww-cta-text: #ffffff; }
.ww-section--dark, .ww-section--carbon { --ww-cta: #ffffff; --ww-cta-hover: #e9e9e9; --ww-cta-text: #000000; }
[SUPPRIMER POUR ACTIVER] */
```

## snippets/ww-pack-card.liquid

```liquid
{%- comment -%}
  Carte d'un pack.
  Paramètres : p (produit), moment, pitch, contents (texte enrichi), badge, button_label
  Le prix, le nom et l'image viennent directement du produit Shopify.
{%- endcomment -%}
{%- assign title_parts = p.title | split: ' | ' -%}
{%- assign pack_name = title_parts | first -%}
{%- assign image = p.featured_media.preview_image | default: p.featured_image -%}

<article class="ww-pack">
  <a class="ww-pack__media" href="{{ p.url }}" tabindex="-1" aria-hidden="true">
    {%- if image != blank -%}
      {{
        image
        | image_url: width: 900
        | image_tag:
          loading: 'lazy',
          widths: '400, 600, 900',
          sizes: '(min-width: 750px) 33vw, 92vw',
          alt: image.alt
      }}
    {%- endif -%}
    {%- if badge != blank -%}
      <span class="ww-pack__badge">{{ badge | escape }}</span>
    {%- endif -%}
  </a>

  <div class="ww-pack__body">
    {%- if moment != blank -%}
      <span class="ww-pack__moment">{{ moment | escape }}</span>
    {%- endif -%}
    <h3 class="ww-pack__title"><a href="{{ p.url }}">{{ pack_name | escape }}</a></h3>
    {%- if pitch != blank -%}
      <p class="ww-pack__pitch">{{ pitch | escape }}</p>
    {%- endif -%}
    {%- if contents != blank -%}
      <div class="ww-pack__list">{{ contents }}</div>
    {%- endif -%}

    <div class="ww-pack__footer">
      <div class="ww-pack__price">
        <span class="ww-pack__amount">{{ p.price | money }}</span>
        <span class="ww-pack__shipping">Livraison offerte</span>
      </div>
      {%- if p.available -%}
        <a class="ww-btn ww-btn--dark ww-btn--block" href="{{ p.url }}">{{ button_label | default: 'Découvrir le pack' | escape }}</a>
      {%- else -%}
        <a class="ww-btn ww-btn--outline ww-btn--block" href="{{ p.url }}">Épuisé</a>
      {%- endif -%}
    </div>
  </div>
</article>
```

## sections/ww-hero.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

{%- liquid
  assign featured = section.settings.product
  assign hero_image = section.settings.image
  if hero_image == blank and featured != blank
    assign hero_image = featured.featured_media.preview_image | default: featured.featured_image
  endif
-%}

<section class="ww ww-section--dark ww-hero{% if hero_image != blank %} ww-hero--media{% endif %}" aria-labelledby="ww-hero-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-hero__grid{% if hero_image != blank %} ww-hero__grid--media{% endif %}">
      <div>
        {%- if section.settings.eyebrow != blank -%}
          <p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>
        {%- endif -%}
        <h1 class="ww-display" id="ww-hero-{{ section.id }}">{{ section.settings.title | escape | newline_to_br }}</h1>
        {%- if section.settings.text != blank -%}
          <p class="ww-lead">{{ section.settings.text | escape }}</p>
        {%- endif -%}
        <div class="ww-actions">
          {%- if section.settings.button_label != blank -%}
            <a class="ww-btn ww-btn--primary" href="{{ section.settings.button_link | default: routes.all_products_collection_url }}">{{ section.settings.button_label | escape }}</a>
          {%- endif -%}
          {%- if section.settings.button2_label != blank -%}
            <a class="ww-btn ww-btn--outline" href="{{ section.settings.button2_link | default: '#ww-packs' }}">{{ section.settings.button2_label | escape }}</a>
          {%- endif -%}
        </div>
        {%- if section.settings.note != blank -%}
          <p class="ww-hero__note">{{ section.settings.note | escape }}</p>
        {%- endif -%}
      </div>

      {%- if hero_image != blank -%}
        {%- capture hero_img -%}
          {{
            hero_image
            | image_url: width: 1400
            | image_tag:
              loading: 'eager',
              preload: true,
              widths: '600, 900, 1200, 1400',
              sizes: '(min-width: 990px) 45vw, 92vw',
              alt: hero_image.alt
          }}
        {%- endcapture -%}
        {%- if featured != blank -%}
          <a class="ww-hero__media" href="{{ featured.url }}" tabindex="-1" aria-hidden="true">{{ hero_img }}</a>
        {%- else -%}
          <div class="ww-hero__media">{{ hero_img }}</div>
        {%- endif -%}
      {%- endif -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "WW · Accroche",
  "tag": "div",
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "WhisperWalk · Fitness à la maison" },
    { "type": "textarea", "id": "title", "label": "Titre", "default": "Bougez pendant\nvotre journée." },
    { "type": "textarea", "id": "text", "label": "Texte", "default": "Un tapis de marche discret qui se glisse sous votre bureau ou sous votre lit. Trois packs, un pour chaque moment de la journée." },
    { "type": "text", "id": "button_label", "label": "Bouton principal", "default": "Choisir mon pack" },
    { "type": "url", "id": "button_link", "label": "Lien du bouton principal" },
    { "type": "text", "id": "button2_label", "label": "Bouton secondaire", "default": "Comparer les packs" },
    { "type": "url", "id": "button2_link", "label": "Lien du bouton secondaire (vide = section des packs)" },
    { "type": "text", "id": "note", "label": "Mention sous les boutons", "default": "Expédié depuis la France · Livraison offerte" },
    { "type": "product", "id": "product", "label": "Pack mis en avant", "info": "Sa photo principale s'affiche si aucune image n'est choisie ci-dessous. Un clic sur la photo ouvre le pack." },
    { "type": "image_picker", "id": "image", "label": "Image (facultative, remplace la photo du pack)" }
  ],
  "presets": [{ "name": "WW · Accroche" }]
}
{% endschema %}
```

## sections/ww-assurances.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-assurances" aria-label="{{ section.settings.aria_label | escape }}">
  <div class="ww-container">
    <ul class="ww-assurances__list">
      {%- for block in section.blocks -%}
        <li class="ww-assurances__item" {{ block.shopify_attributes }}>
          {%- if block.settings.link != blank -%}<a href="{{ block.settings.link }}" style="text-decoration:none">{%- endif -%}
          <span class="ww-assurances__title">{{ block.settings.title | escape }}</span>
          {%- if block.settings.subtitle != blank -%}
            <span class="ww-assurances__sub">{{ block.settings.subtitle | escape }}</span>
          {%- endif -%}
          {%- if block.settings.link != blank -%}</a>{%- endif -%}
        </li>
      {%- endfor -%}
    </ul>
  </div>
</section>

{% schema %}
{
  "name": "WW · Engagements",
  "tag": "div",
  "max_blocks": 4,
  "settings": [
    { "type": "text", "id": "aria_label", "label": "Libellé d'accessibilité", "default": "Nos engagements" }
  ],
  "blocks": [
    {
      "type": "item",
      "name": "Engagement",
      "settings": [
        { "type": "text", "id": "title", "label": "Titre", "default": "Livraison offerte" },
        { "type": "text", "id": "subtitle", "label": "Détail" },
        { "type": "url", "id": "link", "label": "Lien (facultatif)" }
      ]
    }
  ],
  "presets": [
    {
      "name": "WW · Engagements",
      "blocks": [
        { "type": "item", "settings": { "title": "Livraison offerte", "subtitle": "En 5 à 7 jours ouvrés" } },
        { "type": "item", "settings": { "title": "Expédié depuis la France", "subtitle": "France métropolitaine et Corse" } },
        { "type": "item", "settings": { "title": "14 jours pour changer d'avis", "subtitle": "Après réception" } },
        { "type": "item", "settings": { "title": "Garantie légale de 2 ans", "subtitle": "Sur tout le pack" } }
      ]
    }
  ]
}
{% endschema %}
```

## sections/ww-packs.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-section{% if section.settings.mist %} ww-section--mist{% endif %}" id="ww-packs" aria-labelledby="ww-packs-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-head">
      {%- if section.settings.eyebrow != blank -%}<p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>{%- endif -%}
      <h2 class="ww-h2" id="ww-packs-{{ section.id }}">{{ section.settings.title | escape }}</h2>
      {%- if section.settings.text != blank -%}<p class="ww-lead">{{ section.settings.text | escape }}</p>{%- endif -%}
    </div>

    <div class="ww-grid ww-grid--3">
      {%- for block in section.blocks -%}
        {%- assign p = block.settings.product -%}
        {%- if p != blank -%}
          <div class="ww-grid__item" {{ block.shopify_attributes }}>
            {%- render 'ww-pack-card',
              p: p,
              moment: block.settings.moment,
              pitch: block.settings.pitch,
              contents: block.settings.contents,
              badge: block.settings.badge,
              button_label: section.settings.button_label
            -%}
          </div>
        {%- endif -%}
      {%- endfor -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "WW · Packs",
  "tag": "div",
  "max_blocks": 3,
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "Les packs" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Un pack pour chaque moment." },
    { "type": "text", "id": "text", "label": "Texte", "default": "Un tapis de marche pliable au cœur de chaque pack. Choisissez ce qui l'accompagne selon votre façon de bouger." },
    { "type": "text", "id": "button_label", "label": "Texte du bouton", "default": "Découvrir le pack" },
    { "type": "checkbox", "id": "mist", "label": "Fond gris clair", "default": false }
  ],
  "blocks": [
    {
      "type": "pack",
      "name": "Pack",
      "settings": [
        { "type": "product", "id": "product", "label": "Produit" },
        { "type": "text", "id": "moment", "label": "Moment", "default": "Le soir" },
        { "type": "text", "id": "pitch", "label": "Phrase d'accroche" },
        { "type": "richtext", "id": "contents", "label": "Contenu du pack" },
        { "type": "text", "id": "badge", "label": "Étiquette sur l'image (facultative)" }
      ]
    }
  ],
  "presets": [
    {
      "name": "WW · Packs",
      "blocks": [
        { "type": "pack" },
        { "type": "pack" },
        { "type": "pack" }
      ]
    }
  ]
}
{% endschema %}
```

## sections/ww-moments.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-section ww-section--dark" aria-labelledby="ww-moments-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-head">
      {%- if section.settings.eyebrow != blank -%}<p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>{%- endif -%}
      <h2 class="ww-h2" id="ww-moments-{{ section.id }}">{{ section.settings.title | escape }}</h2>
      {%- if section.settings.text != blank -%}<p class="ww-lead">{{ section.settings.text | escape }}</p>{%- endif -%}
    </div>

    <div class="ww-grid ww-grid--3">
      {%- for block in section.blocks -%}
        {%- assign p = block.settings.product -%}
        {%- capture moment_inner -%}
          {%- if block.settings.image != blank -%}
            <div class="ww-moment__media">
              {{
                block.settings.image
                | image_url: width: 900
                | image_tag: loading: 'lazy', widths: '400, 600, 900', sizes: '(min-width: 750px) 33vw, 92vw', alt: block.settings.image.alt
              }}
            </div>
          {%- endif -%}
          <div class="ww-moment__body">
            <span class="ww-moment__label">{{ block.settings.label | escape }}</span>
            <h3 class="ww-h3">{{ block.settings.title | escape }}</h3>
            <p class="ww-text">{{ block.settings.text | escape }}</p>
            {%- if p != blank -%}
              <span class="ww-moment__link">{{ block.settings.link_label | default: 'Voir le pack' | escape }}</span>
            {%- endif -%}
          </div>
        {%- endcapture -%}
        {%- if p != blank -%}
          <a class="ww-moment" href="{{ p.url }}" {{ block.shopify_attributes }}>{{ moment_inner }}</a>
        {%- else -%}
          <div class="ww-moment" {{ block.shopify_attributes }}>{{ moment_inner }}</div>
        {%- endif -%}
      {%- endfor -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "WW · Moments",
  "tag": "div",
  "max_blocks": 3,
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "Votre journée" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Le mouvement, là où vous êtes déjà." },
    { "type": "text", "id": "text", "label": "Texte", "default": "Pas de temps en plus à trouver : le tapis s'installe dans votre bureau, votre salon ou votre chambre, puis se range." }
  ],
  "blocks": [
    {
      "type": "moment",
      "name": "Moment",
      "settings": [
        { "type": "image_picker", "id": "image", "label": "Image (facultative)" },
        { "type": "text", "id": "label", "label": "Moment", "default": "En journée" },
        { "type": "text", "id": "title", "label": "Titre", "default": "Marchez pendant vos réunions." },
        { "type": "textarea", "id": "text", "label": "Texte" },
        { "type": "product", "id": "product", "label": "Pack associé" },
        { "type": "text", "id": "link_label", "label": "Texte du lien", "default": "Voir le pack" }
      ]
    }
  ],
  "presets": [
    { "name": "WW · Moments", "blocks": [{ "type": "moment" }, { "type": "moment" }, { "type": "moment" }] }
  ]
}
{% endschema %}
```

## sections/ww-tapis.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-section" aria-labelledby="ww-tapis-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-head">
      {%- if section.settings.eyebrow != blank -%}<p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>{%- endif -%}
      <h2 class="ww-h2" id="ww-tapis-{{ section.id }}">{{ section.settings.title | escape }}</h2>
      {%- if section.settings.text != blank -%}<p class="ww-lead">{{ section.settings.text | escape }}</p>{%- endif -%}
    </div>

    <div class="ww-metrics" style="--ww-cols: {{ section.blocks.size }}">
      {%- for block in section.blocks -%}
        <div class="ww-metric" {{ block.shopify_attributes }}>
          <span class="ww-metric__value">
            {{- block.settings.value | escape -}}
            {%- if block.settings.unit != blank -%}<span class="ww-metric__unit">{{ block.settings.unit | escape }}</span>{%- endif -%}
          </span>
          <span class="ww-metric__label">{{ block.settings.label | escape }}</span>
          {%- if block.settings.detail != blank -%}
            <span class="ww-metric__detail">{{ block.settings.detail | escape }}</span>
          {%- endif -%}
        </div>
      {%- endfor -%}
    </div>

    {%- if section.settings.footnote != blank -%}
      <p class="ww-footnote">{{ section.settings.footnote | escape }}</p>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "WW · Le tapis en chiffres",
  "tag": "div",
  "max_blocks": 5,
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "Le tapis de marche" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Fin, discret, rangé en quelques secondes." },
    { "type": "text", "id": "text", "label": "Texte", "default": "Inclus dans les trois packs, avec les mêmes caractéristiques." },
    { "type": "text", "id": "footnote", "label": "Note sous les chiffres (facultative)" }
  ],
  "blocks": [
    {
      "type": "metric",
      "name": "Chiffre",
      "settings": [
        { "type": "text", "id": "value", "label": "Valeur", "default": "1–10" },
        { "type": "text", "id": "unit", "label": "Unité (en petit, facultative)", "default": "km/h" },
        { "type": "text", "id": "label", "label": "Libellé", "default": "Vitesse" },
        { "type": "text", "id": "detail", "label": "Précision" }
      ]
    }
  ],
  "presets": [
    {
      "name": "WW · Le tapis en chiffres",
      "blocks": [
        { "type": "metric", "settings": { "value": "1–10", "unit": "km/h", "label": "Vitesse", "detail": "Lent pour écrire, plus vite au téléphone" } },
        { "type": "metric", "settings": { "value": "15", "unit": "%", "label": "Inclinaison", "detail": "Réglable sans arrêter le tapis" } },
        { "type": "metric", "settings": { "value": "136", "unit": "kg", "label": "Poids maximal", "detail": "Poids de l'utilisateur" } },
        { "type": "metric", "settings": { "value": "×3", "unit": "", "label": "Amortissement", "detail": "Triple système" } },
        { "type": "metric", "settings": { "value": "À plat", "unit": "", "label": "Rangement", "detail": "Sous un lit, un canapé ou un bureau" } }
      ]
    }
  ]
}
{% endschema %}
```

## sections/ww-faq.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-section{% if section.settings.mist %} ww-section--mist{% endif %}" aria-labelledby="ww-faq-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-head ww-head--center">
      {%- if section.settings.eyebrow != blank -%}<p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>{%- endif -%}
      <h2 class="ww-h2" id="ww-faq-{{ section.id }}">{{ section.settings.title | escape }}</h2>
    </div>

    <div class="ww-faq">
      {%- for block in section.blocks -%}
        <details class="ww-faq__item" {{ block.shopify_attributes }}>
          <summary class="ww-faq__q">{{ block.settings.question | escape }}</summary>
          <div class="ww-faq__a">{{ block.settings.answer }}</div>
        </details>
      {%- endfor -%}
    </div>

    {%- if section.settings.contact_text != blank -%}
      <p class="ww-contact" style="text-align:center">{{ section.settings.contact_text }}</p>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "WW · Questions",
  "tag": "div",
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "Questions fréquentes" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Avant de vous lancer." },
    { "type": "inline_richtext", "id": "contact_text", "label": "Texte de contact", "default": "Une autre question ? <a href=\"/pages/contact\">Écrivez-nous</a>, nous répondons sous 24 à 48 heures ouvrées." },
    { "type": "checkbox", "id": "mist", "label": "Fond gris clair", "default": true }
  ],
  "blocks": [
    {
      "type": "question",
      "name": "Question",
      "settings": [
        { "type": "text", "id": "question", "label": "Question", "default": "Quel est le délai de livraison ?" },
        { "type": "richtext", "id": "answer", "label": "Réponse", "default": "<p>Réponse.</p>" }
      ]
    }
  ],
  "presets": [{ "name": "WW · Questions", "blocks": [{ "type": "question" }] }]
}
{% endschema %}
```

## sections/ww-cta.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-section ww-section--dark ww-cta" aria-labelledby="ww-cta-{{ section.id }}">
  <div class="ww-container">
    {%- if section.settings.eyebrow != blank -%}<p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>{%- endif -%}
    <h2 class="ww-display ww-display--md" id="ww-cta-{{ section.id }}">{{ section.settings.title | escape | newline_to_br }}</h2>
    {%- if section.settings.text != blank -%}<p class="ww-lead">{{ section.settings.text | escape }}</p>{%- endif -%}
    <div class="ww-actions">
      <a class="ww-btn ww-btn--primary" href="{{ section.settings.button_link | default: routes.all_products_collection_url }}">{{ section.settings.button_label | escape }}</a>
    </div>
    {%- assign facts = section.settings.facts | split: '|' -%}
    {%- if section.settings.facts != blank -%}
      <ul class="ww-cta__facts">
        {%- for fact in facts -%}<li>{{ fact | strip | escape }}</li>{%- endfor -%}
      </ul>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "WW · Appel final",
  "tag": "div",
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre" },
    { "type": "textarea", "id": "title", "label": "Titre", "default": "Votre prochaine réunion peut être votre première séance." },
    { "type": "text", "id": "text", "label": "Texte" },
    { "type": "text", "id": "button_label", "label": "Texte du bouton", "default": "Choisir mon pack" },
    { "type": "url", "id": "button_link", "label": "Lien du bouton" },
    { "type": "text", "id": "facts", "label": "Engagements (séparés par |)", "default": "Livraison offerte | Expédié depuis la France | 14 jours pour changer d'avis | Garantie légale de 2 ans" }
  ],
  "presets": [{ "name": "WW · Appel final" }]
}
{% endschema %}
```

## sections/ww-produit.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

{%- assign title_parts = product.title | split: ' | ' -%}
{%- assign pack_name = title_parts | first -%}
{%- assign pack_sub = '' -%}
{%- if title_parts.size > 1 -%}{%- assign pack_sub = title_parts | last -%}{%- endif -%}
{%- assign current_variant = product.selected_or_first_available_variant -%}

<script type="application/ld+json">{{ product | structured_data }}</script>

<section class="ww ww-product" aria-labelledby="ww-product-title-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-product__grid">

      {%- comment -%} Galerie : défilement horizontal sur mobile, grille sur ordinateur {%- endcomment -%}
      <div>
        <div class="ww-gallery" aria-label="Photos du produit">
          {%- for media in product.media -%}
            {%- if media.media_type == 'image' -%}
              {%- assign img_loading = 'lazy' -%}
              {%- if forloop.first -%}{%- assign img_loading = 'eager' -%}{%- endif -%}
              <div class="ww-gallery__item">
                {{
                  media.preview_image
                  | image_url: width: 1400
                  | image_tag:
                    loading: img_loading,
                    widths: '500, 800, 1100, 1400',
                    sizes: '(min-width: 990px) 55vw, 88vw',
                    alt: media.alt
                }}
              </div>
            {%- endif -%}
          {%- else -%}
            {%- if product.featured_image != blank -%}
              <div class="ww-gallery__item">
                {{ product.featured_image | image_url: width: 1400 | image_tag: loading: 'eager', alt: product.featured_image.alt }}
              </div>
            {%- endif -%}
          {%- endfor -%}
        </div>
        {%- if product.media.size > 1 -%}
          <p class="ww-gallery__hint">Faites glisser pour voir les autres photos</p>
        {%- endif -%}
      </div>

      {%- comment -%} Informations et achat {%- endcomment -%}
      <div class="ww-product__info">
        {%- if section.settings.eyebrow != blank -%}
          <p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>
        {%- endif -%}
        <h1 class="ww-product__title" id="ww-product-title-{{ section.id }}">{{ pack_name | escape }}</h1>
        {%- if pack_sub != blank -%}
          <p class="ww-product__subtitle">{{ pack_sub | escape }}</p>
        {%- endif -%}

        <p class="ww-product__price" data-ww-price>{{ current_variant.price | money }}</p>
        <p class="ww-product__tax">{{ section.settings.tax_note | escape }}</p>

        {%- form 'product', product, class: 'ww-form', id: 'ww-product-form', novalidate: 'novalidate' -%}
          {%- if product.has_only_default_variant -%}
            <input type="hidden" name="id" value="{{ current_variant.id }}">
          {%- else -%}
            <div class="ww-field">
              <label for="ww-variant-{{ section.id }}">Choix</label>
              <select class="ww-select" id="ww-variant-{{ section.id }}" name="id" data-ww-variant>
                {%- for variant in product.variants -%}
                  <option
                    value="{{ variant.id }}"
                    data-price="{{ variant.price | money | escape }}"
                    {% if variant == current_variant %}selected{% endif %}
                    {% unless variant.available %}disabled{% endunless %}
                  >{{ variant.title | escape }}{% unless variant.available %} — épuisé{% endunless %}</option>
                {%- endfor -%}
              </select>
            </div>
          {%- endif -%}

          <div class="ww-form__row">
            {%- if current_variant.available -%}
              <p class="ww-product__stock">Disponible</p>
            {%- else -%}
              <p class="ww-product__stock ww-product__stock--out">Momentanément épuisé</p>
            {%- endif -%}
            <div class="ww-qty">
              <label class="ww-visually-hidden" for="ww-qty-{{ section.id }}">Quantité</label>
              <button type="button" aria-label="Diminuer la quantité" data-ww-qty="-1">−</button>
              <input id="ww-qty-{{ section.id }}" type="number" name="quantity" value="1" min="1" inputmode="numeric">
              <button type="button" aria-label="Augmenter la quantité" data-ww-qty="1">+</button>
            </div>
          </div>

          <button type="submit" name="add" class="ww-btn ww-btn--primary ww-btn--block" {% unless current_variant.available %}disabled{% endunless %}>
            {%- if current_variant.available -%}Ajouter au panier{%- else -%}Épuisé{%- endif -%}
          </button>
          {%- if section.settings.show_dynamic_checkout -%}
            {{ form | payment_button }}
          {%- endif -%}
        {%- endform -%}

        <ul class="ww-promises">
          <li><span>Livraison</span><span>Offerte · 5 à 7 jours ouvrés</span></li>
          <li><span>Expédition</span><span>Depuis la France</span></li>
          <li><span>Retours</span><span>14 jours pour changer d'avis</span></li>
          <li><span>Garantie</span><span>Légale de conformité · 2 ans</span></li>
        </ul>

        <div class="ww-accordion">
          <details>
            <summary>Livraison</summary>
            <div class="ww-accordion__body">
              <p>Livraison offerte en France métropolitaine, Corse incluse. Les colis sont expédiés depuis la France.</p>
              <p>Préparation en 3 jours ouvrés, puis 2 à 4 jours ouvrés de transport, soit 5 à 7 jours ouvrés au total. Toute commande passée avant 23h59 (heure de Paris) est prise en compte le jour même. Un numéro de suivi vous est envoyé par e-mail dès l'expédition.</p>
              {%- if shop.shipping_policy != blank -%}<p><a href="{{ shop.shipping_policy.url }}">Politique d'expédition</a></p>{%- endif -%}
            </div>
          </details>
          <details>
            <summary>Retours et remboursement</summary>
            <div class="ww-accordion__body">
              <p>Vous disposez de 14 jours après réception pour changer d'avis, sans avoir à vous justifier. Les frais de retour sont à votre charge, sans frais de réapprovisionnement.</p>
              <p>Le remboursement est effectué sous 7 jours après réception et contrôle du retour, et au plus tard 14 jours après votre demande, sur votre moyen de paiement d'origine. Un article abîmé ou non conforme est repris à nos frais.</p>
              {%- if shop.refund_policy != blank -%}<p><a href="{{ shop.refund_policy.url }}">Politique de remboursement</a></p>{%- endif -%}
            </div>
          </details>
          <details>
            <summary>Garantie</summary>
            <div class="ww-accordion__body">
              <p>Tous les éléments du pack bénéficient de la garantie légale de conformité de 2 ans à compter de la livraison, et de la garantie contre les vices cachés.</p>
              <p>En cas de problème, écrivez-nous avec votre numéro de commande et une photo : nous vous répondons sous 24 à 48 heures ouvrées.</p>
            </div>
          </details>
          <details>
            <summary>Paiement</summary>
            <div class="ww-accordion__body">
              <p>Paiement en ligne sécurisé par carte bancaire, PayPal, Apple Pay, Google Pay ou Shop Pay. Le prix affiché est le prix total : TVA non applicable (article 293 B du CGI), livraison offerte.</p>
            </div>
          </details>
        </div>

        {%- comment -%} Blocs d'applications (par exemple un widget d'avis), ajoutables depuis l'éditeur de thème {%- endcomment -%}
        {%- for block in section.blocks -%}
          {%- if block.type == '@app' -%}
            <div class="ww-app-block">{% render block %}</div>
          {%- endif -%}
        {%- endfor -%}

        <p class="ww-contact">Une question avant de commander ? <a href="{{ section.settings.contact_url | default: '/pages/contact' }}">Contactez-nous</a></p>
      </div>
    </div>
  </div>
</section>

{%- if product.description != blank -%}
  <section class="ww ww-section ww-section--mist" aria-labelledby="ww-details-{{ section.id }}">
    <div class="ww-container">
      <div class="ww-details">
        <p class="ww-eyebrow">En détail</p>
        <h2 class="ww-h2" id="ww-details-{{ section.id }}">{{ pack_name | escape }}</h2>
        <div class="ww-rte">{{ product.description }}</div>
      </div>
    </div>
  </section>
{%- endif -%}

<script>
  (function () {
    var root = document.getElementById('ww-product-form');
    if (!root) return;

    // Boutons + / − de la quantité
    root.querySelectorAll('[data-ww-qty]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = root.querySelector('input[name="quantity"]');
        var next = (parseInt(input.value, 10) || 1) + parseInt(btn.getAttribute('data-ww-qty'), 10);
        input.value = Math.max(1, next);
      });
    });

    // Mise à jour du prix si le produit a plusieurs variantes
    var select = root.querySelector('[data-ww-variant]');
    var price = document.querySelector('[data-ww-price]');
    if (select && price) {
      select.addEventListener('change', function () {
        var option = select.options[select.selectedIndex];
        if (option && option.dataset.price) price.textContent = option.dataset.price;
      });
    }
  })();
</script>

{% schema %}
{
  "name": "WW · Fiche produit",
  "tag": "div",
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre au-dessus du nom (facultatif)" },
    { "type": "text", "id": "tax_note", "label": "Mention sous le prix", "default": "Prix total · TVA non applicable, art. 293 B du CGI · Livraison offerte" },
    { "type": "checkbox", "id": "show_dynamic_checkout", "label": "Afficher le bouton de paiement rapide", "default": true },
    { "type": "url", "id": "contact_url", "label": "Lien de contact" }
  ],
  "blocks": [{ "type": "@app" }]
}
{% endschema %}
```

## templates/index.json

```json
{
  "sections": {
    "hero": {
      "type": "ww-hero",
      "settings": {
        "eyebrow": "WhisperWalk · Fitness à la maison",
        "title": "Bougez pendant\nvotre journée.",
        "text": "Un tapis de marche discret qui se glisse sous votre bureau ou sous votre lit. Trois packs, un pour chaque moment de la journée.",
        "button_label": "Choisir mon pack",
        "button_link": "shopify://collections/tapis-de-course-pliable",
        "button2_label": "Comparer les packs",
        "button2_link": "",
        "note": "Expédié depuis la France · Livraison offerte",
        "product": "pack-essentiel-home-gym"
      }
    },
    "assurances": {
      "type": "ww-assurances",
      "settings": {
        "aria_label": "Nos engagements"
      },
      "blocks": {
        "a1": {
          "type": "item",
          "settings": {
            "title": "Livraison offerte",
            "subtitle": "En 5 à 7 jours ouvrés",
            "link": "/policies/shipping-policy"
          }
        },
        "a2": {
          "type": "item",
          "settings": {
            "title": "Expédié depuis la France",
            "subtitle": "France métropolitaine et Corse",
            "link": ""
          }
        },
        "a3": {
          "type": "item",
          "settings": {
            "title": "14 jours pour changer d'avis",
            "subtitle": "Après réception",
            "link": "/policies/refund-policy"
          }
        },
        "a4": {
          "type": "item",
          "settings": {
            "title": "Garantie légale de 2 ans",
            "subtitle": "Sur tout le pack",
            "link": ""
          }
        }
      },
      "block_order": [
        "a1",
        "a2",
        "a3",
        "a4"
      ]
    },
    "packs": {
      "type": "ww-packs",
      "settings": {
        "eyebrow": "Les packs",
        "title": "Un pack pour chaque moment.",
        "text": "Un tapis de marche pliable au cœur de chaque pack. Choisissez ce qui l'accompagne selon votre façon de bouger.",
        "button_label": "Découvrir le pack",
        "mist": false
      },
      "blocks": {
        "pack_essentiel": {
          "type": "pack",
          "settings": {
            "product": "pack-essentiel-home-gym",
            "moment": "Le soir",
            "pitch": "Peu de place et des voisins en dessous ? Le tapis anti-bruit limite les vibrations, et le tapis de marche se range à plat sous le lit.",
            "contents": "<ul><li>Tapis de marche pliable</li><li>Tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "badge": ""
          }
        },
        "pack_teletravail": {
          "type": "pack",
          "settings": {
            "product": "pack-performance-connectee",
            "moment": "En journée",
            "pitch": "Votre bureau actuel devient un poste de marche : le réhausseur le met à hauteur debout, le tapis se glisse dessous.",
            "contents": "<ul><li>Tapis de marche pliable</li><li>Réhausseur de bureau assis-debout</li><li>Tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "badge": ""
          }
        },
        "pack_ultimate": {
          "type": "pack",
          "settings": {
            "product": "pack-ultimate-home-gym",
            "moment": "Le week-end",
            "pitch": "Cardio en pente et renforcement, sans abonnement ni trajet. Après la séance, tout se range.",
            "contents": "<ul><li>Tapis de marche pliable</li><li>Tapis Fitness Pro anti-bruit</li><li>Paire d'haltères réglables</li><li>Banc pliable</li><li>Programme 30 jours (PDF) inclus</li></ul>",
            "badge": "Le plus complet"
          }
        }
      },
      "block_order": [
        "pack_essentiel",
        "pack_teletravail",
        "pack_ultimate"
      ]
    },
    "moments": {
      "type": "ww-moments",
      "settings": {
        "eyebrow": "Votre journée",
        "title": "Le mouvement, là où vous êtes déjà.",
        "text": "Pas de temps en plus à trouver : le tapis s'installe dans votre bureau, votre salon ou votre chambre, puis se range."
      },
      "blocks": {
        "m1": {
          "type": "moment",
          "settings": {
            "label": "En journée",
            "title": "Marchez pendant vos réunions.",
            "text": "Le réhausseur met votre bureau à hauteur debout et le tapis se glisse dessous. Vous avancez à votre rythme, de 1 à 10 km/h.",
            "product": "pack-performance-connectee",
            "link_label": "Voir le Pack Télétravail"
          }
        },
        "m2": {
          "type": "moment",
          "settings": {
            "label": "Le soir",
            "title": "Dix minutes, sans déranger.",
            "text": "Dépliez le tapis sur le tapis anti-bruit, marchez, puis rangez-le à plat sous le lit ou le canapé.",
            "product": "pack-essentiel-home-gym",
            "link_label": "Voir le Pack Essentiel"
          }
        },
        "m3": {
          "type": "moment",
          "settings": {
            "label": "Le week-end",
            "title": "Une vraie séance, sans salle.",
            "text": "Marche en pente jusqu'à 15 %, haltères réglables et banc pliable. Puis tout se range.",
            "product": "pack-ultimate-home-gym",
            "link_label": "Voir le Pack Ultimate"
          }
        }
      },
      "block_order": [
        "m1",
        "m2",
        "m3"
      ]
    },
    "tapis": {
      "type": "ww-tapis",
      "settings": {
        "eyebrow": "Le tapis de marche",
        "title": "Fin, discret, rangé en quelques secondes.",
        "text": "Inclus dans les trois packs, avec les mêmes caractéristiques.",
        "footnote": ""
      },
      "blocks": {
        "t1": {
          "type": "metric",
          "settings": {
            "value": "1–10",
            "unit": "km/h",
            "label": "Vitesse",
            "detail": "Lent pour écrire, plus vite au téléphone"
          }
        },
        "t2": {
          "type": "metric",
          "settings": {
            "value": "15",
            "unit": "%",
            "label": "Inclinaison",
            "detail": "Réglable sans arrêter le tapis"
          }
        },
        "t3": {
          "type": "metric",
          "settings": {
            "value": "136",
            "unit": "kg",
            "label": "Poids maximal",
            "detail": "Poids de l'utilisateur"
          }
        },
        "t4": {
          "type": "metric",
          "settings": {
            "value": "×3",
            "unit": "",
            "label": "Amortissement",
            "detail": "Triple système"
          }
        },
        "t5": {
          "type": "metric",
          "settings": {
            "value": "À plat",
            "unit": "",
            "label": "Rangement",
            "detail": "Sous un lit, un canapé ou un bureau"
          }
        }
      },
      "block_order": [
        "t1",
        "t2",
        "t3",
        "t4",
        "t5"
      ]
    },
    "faq": {
      "type": "ww-faq",
      "settings": {
        "eyebrow": "Questions fréquentes",
        "title": "Avant de vous lancer.",
        "contact_text": "Une autre question ? <a href=\"/pages/contact\">Écrivez-nous</a>, nous répondons sous 24 à 48 heures ouvrées.",
        "mist": true
      },
      "blocks": {
        "q1": {
          "type": "question",
          "settings": {
            "question": "Quel est le délai de livraison ?",
            "answer": "<p>Comptez 5 à 7 jours ouvrés en France métropolitaine, Corse incluse : 3 jours ouvrés de préparation, puis 2 à 4 jours ouvrés de transport. Les colis sont expédiés depuis la France et la livraison est offerte. <a href=\"/policies/shipping-policy\">Politique d'expédition</a></p>"
          }
        },
        "q2": {
          "type": "question",
          "settings": {
            "question": "Puis-je retourner mon pack ?",
            "answer": "<p>Oui, vous avez 14 jours après réception pour changer d'avis, sans vous justifier. Les frais de retour sont à votre charge, sans frais de réapprovisionnement. Le remboursement intervient sous 7 jours après réception et contrôle du retour. <a href=\"/policies/refund-policy\">Politique de remboursement</a></p>"
          }
        },
        "q3": {
          "type": "question",
          "settings": {
            "question": "Quelle garantie couvre le pack ?",
            "answer": "<p>Tous les éléments du pack bénéficient de la garantie légale de conformité de 2 ans à compter de la livraison, et de la garantie contre les vices cachés.</p>"
          }
        },
        "q4": {
          "type": "question",
          "settings": {
            "question": "Le tapis est-il adapté au télétravail et à l'appartement ?",
            "answer": "<p>Oui : moteur discret, triple amortissement et, dans chaque pack, un tapis Fitness Pro anti-bruit qui limite les vibrations transmises au sol. Après la séance, le tapis de marche se range à plat, sous un lit, un canapé ou un bureau.</p>"
          }
        },
        "q5": {
          "type": "question",
          "settings": {
            "question": "Que contient chaque pack ?",
            "answer": "<p><strong>Pack Essentiel Appartement</strong> : tapis de marche pliable et tapis Fitness Pro anti-bruit 200 × 90 cm.</p><p><strong>Pack Télétravail</strong> : tapis de marche pliable, réhausseur de bureau assis-debout et tapis Fitness Pro anti-bruit 200 × 90 cm.</p><p><strong>Pack Ultimate Home Gym</strong> : tapis de marche pliable, tapis Fitness Pro anti-bruit, paire d'haltères réglables et banc pliable, avec le programme 30 jours (PDF) offert.</p>"
          }
        },
        "q6": {
          "type": "question",
          "settings": {
            "question": "Quels moyens de paiement acceptez-vous ?",
            "answer": "<p>Carte bancaire, PayPal, Apple Pay, Google Pay et Shop Pay, via une connexion chiffrée. Le prix affiché est le prix total, livraison offerte. <a href=\"/pages/moyens-de-paiement\">Moyens de paiement</a></p>"
          }
        }
      },
      "block_order": [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5",
        "q6"
      ]
    },
    "cta": {
      "type": "ww-cta",
      "settings": {
        "eyebrow": "",
        "title": "Votre prochaine réunion peut être votre première séance.",
        "text": "",
        "button_label": "Choisir mon pack",
        "button_link": "shopify://collections/tapis-de-course-pliable",
        "facts": "Livraison offerte | Expédié depuis la France | 14 jours pour changer d'avis | Garantie légale de 2 ans"
      }
    }
  },
  "order": [
    "hero",
    "assurances",
    "packs",
    "moments",
    "tapis",
    "faq",
    "cta"
  ]
}
```

## templates/product.ww-premium.json

```json
{
  "sections": {
    "main": {
      "type": "ww-produit",
      "settings": {
        "eyebrow": "",
        "tax_note": "Prix total · TVA non applicable, art. 293 B du CGI · Livraison offerte",
        "show_dynamic_checkout": true,
        "contact_url": "shopify://pages/contact"
      }
    },
    "packs": {
      "type": "ww-packs",
      "settings": {
        "eyebrow": "Comparer",
        "title": "Les trois packs.",
        "text": "Un tapis de marche pliable, trois façons de l'accompagner.",
        "button_label": "Découvrir le pack",
        "mist": false
      },
      "blocks": {
        "pack_essentiel": {
          "type": "pack",
          "settings": {
            "product": "pack-essentiel-home-gym",
            "moment": "Le soir",
            "pitch": "Peu de place et des voisins en dessous ? Le tapis anti-bruit limite les vibrations, et le tapis de marche se range à plat sous le lit.",
            "contents": "<ul><li>Tapis de marche pliable</li><li>Tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "badge": ""
          }
        },
        "pack_teletravail": {
          "type": "pack",
          "settings": {
            "product": "pack-performance-connectee",
            "moment": "En journée",
            "pitch": "Votre bureau actuel devient un poste de marche : le réhausseur le met à hauteur debout, le tapis se glisse dessous.",
            "contents": "<ul><li>Tapis de marche pliable</li><li>Réhausseur de bureau assis-debout</li><li>Tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "badge": ""
          }
        },
        "pack_ultimate": {
          "type": "pack",
          "settings": {
            "product": "pack-ultimate-home-gym",
            "moment": "Le week-end",
            "pitch": "Cardio en pente et renforcement, sans abonnement ni trajet. Après la séance, tout se range.",
            "contents": "<ul><li>Tapis de marche pliable</li><li>Tapis Fitness Pro anti-bruit</li><li>Paire d'haltères réglables</li><li>Banc pliable</li><li>Programme 30 jours (PDF) inclus</li></ul>",
            "badge": "Le plus complet"
          }
        }
      },
      "block_order": [
        "pack_essentiel",
        "pack_teletravail",
        "pack_ultimate"
      ]
    }
  },
  "order": [
    "main",
    "packs"
  ]
}
```
