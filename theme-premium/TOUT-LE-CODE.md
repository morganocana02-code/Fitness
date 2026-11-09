# Refonte WhisperWalk « confiance » — tout le code

Chaque bloc ci-dessous correspond à un fichier. Le chemin indique le dossier Shopify (voir LISEZMOI.md).

## assets/ww-premium.css

```css
/* ==========================================================================
   WhisperWalk — Refonte « confiance »
   Feuille de style commune à toutes les sections « ww-… ».
   Tout est limité à la classe .ww : l'en-tête, le pied de page, le panier
   et le paiement restent ceux du thème Horizon.
   ========================================================================== */

.ww {
  /* Couleurs */
  --ww-violet: #4a53ff;
  --ww-violet-hover: #3a42e6;
  --ww-violet-soft: #eceeff;
  --ww-black: #000000;
  --ww-carbon: #191919;
  --ww-white: #ffffff;
  --ww-mist: #f3f5f9;
  --ww-hairline: #e3e6ec;
  --ww-fog: #5f6673;      /* texte secondaire, plus contrasté pour rester lisible */
  --ww-ash: #a6a6a6;      /* texte secondaire sur fond noir */
  --ww-success: #1f9d55;

  /* Bouton principal (violet par défaut, voir l'option « noir et blanc » en fin de fichier) */
  --ww-cta: var(--ww-violet);
  --ww-cta-hover: var(--ww-violet-hover);
  --ww-cta-text: var(--ww-white);

  /* Typographie : la police déjà chargée par le thème (Inter) */
  --ww-font: var(--font-body--family, "Inter"), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Formes et mise en page */
  --ww-radius-card: 24px;
  --ww-radius-pill: 300px;
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
.ww-head--center .ww-lead { margin-left: auto; margin-right: auto; }

/* ---------- Typographie ---------- */

.ww-eyebrow {
  display: inline-block;
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ww-violet);
}
.ww-section--dark .ww-eyebrow,
.ww-section--carbon .ww-eyebrow { color: var(--ww-ash); }

.ww-display { margin: 0; font-size: clamp(40px, 5.6vw, 80px); font-weight: 600; line-height: 0.98; letter-spacing: -0.04em; }
.ww-display--md { font-size: clamp(36px, 5vw, 72px); }
/* Sur mobile, le texte revient à la ligne de lui-même */
@media (max-width: 749px) { .ww-display br { display: none; } }

.ww-h2 { margin: 0; font-size: clamp(30px, 4.2vw, 50px); font-weight: 600; line-height: 1.04; letter-spacing: -0.035em; }
.ww-h3 { margin: 0; font-size: 22px; font-weight: 600; line-height: 1.18; letter-spacing: -0.025em; }

.ww-lead { margin: 18px 0 0; max-width: 580px; font-size: clamp(17px, 1.5vw, 19px); line-height: 1.55; color: var(--ww-fog); }
.ww-section--dark .ww-lead,
.ww-section--carbon .ww-lead { color: #b8b8b8; }

.ww-text { margin: 0; font-size: 16px; line-height: 1.55; color: var(--ww-fog); }
.ww-section--dark .ww-text,
.ww-section--carbon .ww-text { color: #b8b8b8; }

/* Retours à la ligne plus harmonieux (navigateurs récents, sans effet ailleurs) */
.ww-display, .ww-h2, .ww-h3, .ww-hero__title, .ww-pack__title, .ww-product__title, .ww-step__title, .ww-guarantee__title { text-wrap: balance; }
.ww-lead, .ww-text, .ww-pack__pitch { text-wrap: pretty; }

.ww-rte { font-size: 17px; line-height: 1.65; color: #2f333a; }
.ww-rte h2, .ww-rte h3 { color: var(--ww-black); letter-spacing: -0.03em; line-height: 1.15; margin: 1.6em 0 0.5em; }
.ww-rte h2 { font-size: 28px; font-weight: 600; }
.ww-rte h3 { font-size: 21px; font-weight: 600; }
.ww-rte ul { padding-left: 1.2em; }
.ww-rte li { margin: 0.35em 0; }
.ww-rte table { width: 100%; border-collapse: collapse; margin: 1em 0; font-size: 16px; }
.ww-rte td { padding: 12px 0; border-bottom: 1px solid var(--ww-hairline); vertical-align: top; }
.ww-rte td:first-child { color: var(--ww-fog); width: 45%; padding-right: 16px; }
.ww-rte a { color: var(--ww-violet); }

/* ---------- Icônes ---------- */

.ww-icon { display: inline-block; width: 20px; height: 20px; flex: none; vertical-align: middle; }

/* ---------- Boutons et liens ---------- */

.ww-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 16px 30px;
  border: 1.5px solid transparent;
  border-radius: var(--ww-radius-pill);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
}
.ww-btn:focus-visible { outline: 2px solid var(--ww-violet); outline-offset: 3px; }
.ww-btn:active { transform: scale(0.98); }
.ww-btn .ww-icon { width: 18px; height: 18px; }

.ww-btn--primary { background: var(--ww-cta); color: var(--ww-cta-text); }
.ww-btn--primary:hover { background: var(--ww-cta-hover); }
.ww-btn--light { background: var(--ww-white); color: var(--ww-black); }
.ww-btn--light:hover { background: #e9e9e9; }
.ww-btn--dark { background: var(--ww-black); color: var(--ww-white); }
.ww-btn--dark:hover { background: var(--ww-carbon); }
.ww-btn--outline { background: var(--ww-white); color: var(--ww-black); border-color: var(--ww-hairline); }
.ww-btn--outline:hover { border-color: var(--ww-black); }
.ww-section--dark .ww-btn--outline,
.ww-section--carbon .ww-btn--outline { background: transparent; color: var(--ww-white); border-color: #4d4d4d; }
.ww-section--dark .ww-btn--outline:hover,
.ww-section--carbon .ww-btn--outline:hover { border-color: var(--ww-white); }
.ww-btn--block { width: 100%; }

.ww-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

.ww-link { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: var(--ww-violet); text-decoration: none; }
.ww-link:hover { text-decoration: underline; text-underline-offset: 3px; }
.ww-link .ww-icon { width: 16px; height: 16px; }

/* Pastille d'information */
.ww-pill { display: inline-flex; align-items: center; gap: 8px; margin: 0; padding: 7px 14px; border: 1px solid var(--ww-hairline); border-radius: var(--ww-radius-pill); background: var(--ww-white); font-size: 13px; font-weight: 600; line-height: 1.3; }
.ww-pill .ww-icon { width: 16px; height: 16px; color: var(--ww-violet); }

/* ---------- Accroche ---------- */

.ww-hero { padding: 28px 0 56px; background: var(--ww-mist); }
.ww-hero__grid { display: grid; gap: 28px; grid-template-areas: "text" "media" "trust"; }
.ww-hero__text { grid-area: text; }
.ww-hero__trust { grid-area: trust; display: grid; gap: 16px; align-content: start; }
.ww-hero__title { margin: 18px 0 0; font-size: clamp(33px, 4.3vw, 58px); font-weight: 600; line-height: 1.04; letter-spacing: -0.035em; }
.ww-hero .ww-lead { margin-top: 18px; }
.ww-hero .ww-actions { margin-top: 24px; }

.ww-hero__price { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px; margin: 22px 0 0; font-size: 16px; color: var(--ww-fog); }
.ww-hero__price strong { font-size: 30px; font-weight: 600; letter-spacing: -0.03em; color: var(--ww-black); }

.ww-hero__media { grid-area: media; margin: 0; border: 1px solid var(--ww-hairline); border-radius: var(--ww-radius-card); overflow: hidden; background: var(--ww-white); }
.ww-hero__img { display: block; }
.ww-hero__img img { width: 100%; height: auto; max-height: 78vh; object-fit: cover; }
.ww-hero__caption { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; padding: 16px 20px; border-top: 1px solid var(--ww-hairline); }
.ww-hero__caption-name { flex: 1 1 auto; font-size: 15px; font-weight: 600; }
.ww-hero__caption-price { font-size: 15px; font-weight: 600; }

.ww-hero__contact { display: flex; align-items: flex-start; gap: 12px; margin: 0; padding: 14px 16px; border: 1px solid var(--ww-hairline); border-radius: 16px; background: var(--ww-white); font-size: 14px; line-height: 1.5; color: var(--ww-fog); }
.ww-hero__contact .ww-icon { margin-top: 1px; color: var(--ww-violet); }
.ww-hero__contact a { color: var(--ww-black); font-weight: 600; white-space: nowrap; }

@media (min-width: 990px) {
  .ww-hero { padding: 64px 0 80px; }
  .ww-hero__grid--media { grid-template-columns: 1.15fr 1fr; grid-template-areas: "text media" "trust media"; column-gap: 64px; row-gap: 28px; align-items: start; }
}

/* Liste de garanties cochées */
.ww-checks { display: grid; gap: 12px 24px; margin: 0; padding: 0; list-style: none; }
.ww-checks li { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 500; line-height: 1.35; }
.ww-checks .ww-icon { width: 28px; height: 28px; padding: 6px; border-radius: 50%; background: var(--ww-violet-soft); color: var(--ww-violet); stroke-width: 2.4; }
@media (min-width: 600px) { .ww-checks { grid-template-columns: 1fr 1fr; } }

/* ---------- Grilles et cartes ---------- */

.ww-grid { display: grid; gap: 20px; }
@media (min-width: 750px) { .ww-grid--3 { grid-template-columns: repeat(3, 1fr); gap: 24px; } }
@media (min-width: 750px) { .ww-grid--2 { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
.ww-grid__item { display: flex; min-width: 0; }
.ww-grid__item > * { flex: 1 1 auto; min-width: 0; }

.ww-note { display: flex; align-items: flex-start; gap: 10px; margin: 28px 0 0; font-size: 15px; line-height: 1.5; color: var(--ww-fog); }
.ww-note .ww-icon { margin-top: 1px; color: var(--ww-violet); }

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
.ww-pack__title { margin: 0; font-size: 25px; font-weight: 600; line-height: 1.12; letter-spacing: -0.03em; }
.ww-pack__title a { text-decoration: none; }
.ww-pack__pitch { margin: 0; font-size: 16px; line-height: 1.5; color: var(--ww-fog); }
.ww-pack__label { margin: 0; padding-top: 16px; border-top: 1px solid var(--ww-hairline); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-fog); }
.ww-pack__list { margin: 0; padding: 0; list-style: none; font-size: 15px; line-height: 1.45; }
.ww-pack__list ul { margin: 0; padding: 0; list-style: none; }
.ww-pack__list li { position: relative; padding-left: 26px; margin: 8px 0; }
.ww-pack__list li::before { content: ""; position: absolute; left: 0; top: 0.2em; width: 16px; height: 16px; border-radius: 50%; background: var(--ww-violet-soft) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a53ff' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E") center / 10px 10px no-repeat; }
.ww-pack__list p { margin: 0; }
.ww-pack__footer { margin-top: auto; padding-top: 12px; }
.ww-pack__price { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
.ww-pack__amount { font-size: 32px; font-weight: 600; letter-spacing: -0.04em; }
.ww-pack__shipping { font-size: 13px; color: var(--ww-fog); text-align: right; }

/* ---------- Moments ---------- */

.ww-moment { display: flex; flex-direction: column; border-radius: var(--ww-radius-card); overflow: hidden; background: #262626; color: var(--ww-white); text-decoration: none; }
.ww-moment__media { aspect-ratio: 4 / 3; background: #2e2e2e; overflow: hidden; }
.ww-moment__media img { width: 100%; height: 100%; object-fit: cover; }
.ww-moment__body { display: flex; flex: 1; flex-direction: column; gap: 12px; padding: 28px; }
.ww-moment__label { font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-ash); }
.ww-moment__link { margin-top: auto; padding-top: 12px; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.ww-moment__link::after { content: " →"; }
.ww-moment:hover .ww-moment__link { text-decoration: underline; text-underline-offset: 4px; }

/* ---------- Chiffres clés ---------- */

.ww-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--ww-hairline); border: 1px solid var(--ww-hairline); border-radius: var(--ww-radius-card); overflow: hidden; }
.ww-metric { background: var(--ww-white); padding: 28px 24px; }
.ww-metric:last-child:nth-child(odd) { grid-column: 1 / -1; }
.ww-metric__value { display: block; white-space: nowrap; font-size: clamp(34px, 3.6vw, 52px); font-weight: 500; line-height: 1; letter-spacing: -0.045em; }
.ww-metric__unit { margin-left: 0.14em; font-size: 0.42em; font-weight: 500; letter-spacing: -0.01em; }
.ww-metric__label { display: block; margin-top: 12px; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-fog); }
.ww-metric__detail { display: block; margin-top: 6px; font-size: 15px; color: var(--ww-fog); }
.ww-footnote { margin: 20px 0 0; font-size: 14px; line-height: 1.5; color: var(--ww-fog); }
.ww-footnote a { color: var(--ww-violet); font-weight: 600; }
@media (min-width: 990px) {
  .ww-metrics { grid-template-columns: repeat(var(--ww-cols, 5), minmax(0, 1fr)); }
  .ww-metric:last-child:nth-child(odd) { grid-column: auto; }
}

/* ---------- Étapes de commande ---------- */

.ww-steps { display: grid; margin: 0; padding: 0; list-style: none; }
.ww-step { position: relative; display: grid; grid-template-columns: 48px 1fr; column-gap: 16px; padding-bottom: 28px; }
.ww-step::before { content: ""; position: absolute; left: 23px; top: 52px; bottom: 4px; width: 2px; background: var(--ww-hairline); }
.ww-step:last-child { padding-bottom: 0; }
.ww-step:last-child::before { display: none; }
.ww-step__icon { grid-row: 1 / span 3; display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid var(--ww-hairline); border-radius: 50%; background: var(--ww-white); color: var(--ww-violet); }
.ww-step__num { padding-top: 2px; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-fog); }
.ww-step__title { margin: 4px 0 0; font-size: 18px; font-weight: 600; line-height: 1.25; letter-spacing: -0.02em; }
.ww-step__text { margin: 6px 0 0; font-size: 15px; line-height: 1.55; color: var(--ww-fog); }
@media (min-width: 990px) {
  .ww-steps { grid-template-columns: repeat(var(--ww-cols, 5), minmax(0, 1fr)); gap: 24px; }
  .ww-step { grid-template-columns: 1fr; padding-bottom: 0; }
  .ww-step::before { left: 60px; right: -12px; top: 23px; bottom: auto; width: auto; height: 2px; }
  .ww-step__icon { grid-row: auto; margin-bottom: 16px; }
}

/* ---------- Engagements ---------- */

.ww-guarantees { display: grid; gap: 16px; }
@media (min-width: 750px) { .ww-guarantees { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 990px) { .ww-guarantees { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; } }
.ww-guarantee { display: flex; flex-direction: column; gap: 12px; padding: 28px; border: 1px solid var(--ww-hairline); border-radius: 20px; background: var(--ww-white); }
.ww-guarantee__icon { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: var(--ww-violet-soft); color: var(--ww-violet); }
.ww-guarantee__title { margin: 4px 0 0; font-size: 19px; font-weight: 600; line-height: 1.25; letter-spacing: -0.02em; }
.ww-guarantee__text { font-size: 15px; line-height: 1.6; color: var(--ww-fog); }
.ww-guarantee__text p { margin: 0 0 0.6em; }
.ww-guarantee__text p:last-child { margin-bottom: 0; }
.ww-guarantee__text strong { color: var(--ww-black); font-weight: 600; }
.ww-guarantee .ww-link { margin-top: auto; padding-top: 4px; }

/* Moyens de paiement (icônes officielles fournies par Shopify) */
.ww-paybar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px 24px; margin-top: 24px; padding: 18px 22px; border-radius: 20px; background: var(--ww-mist); }
.ww-paybar__label { display: flex; align-items: center; gap: 10px; margin: 0; font-size: 15px; font-weight: 600; }
.ww-paybar__label .ww-icon { color: var(--ww-success); }
.ww-pay { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
.ww-pay__icon { display: block; width: 38px; height: 24px; }

/* ---------- Qui sommes-nous ---------- */

.ww-seller { display: grid; gap: 32px; }
@media (min-width: 990px) { .ww-seller { grid-template-columns: 1fr 1.05fr; gap: 64px; align-items: start; } }
.ww-seller__note { display: flex; align-items: flex-start; gap: 16px; margin: 28px 0 0; padding: 20px; border-radius: 20px; background: var(--ww-white); }
.ww-seller__photo { width: 64px; height: 64px; flex: none; border-radius: 50%; overflow: hidden; }
.ww-seller__photo img { width: 100%; height: 100%; object-fit: cover; }
.ww-seller__quote { margin: 0; font-size: 16px; line-height: 1.6; }
.ww-seller__sign { display: block; margin-top: 8px; font-size: 14px; font-weight: 600; color: var(--ww-fog); }
.ww-seller__card { padding: 8px 24px 24px; border: 1px solid var(--ww-hairline); border-radius: var(--ww-radius-card); background: var(--ww-white); }
.ww-facts { margin: 0; }
.ww-facts > div { padding: 16px 0; border-bottom: 1px solid var(--ww-hairline); }
.ww-facts dt { display: flex; align-items: center; gap: 10px; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ww-fog); }
.ww-facts dt .ww-icon { width: 18px; height: 18px; color: var(--ww-violet); }
.ww-facts dd { margin: 6px 0 0 28px; font-size: 16px; line-height: 1.45; overflow-wrap: anywhere; }
.ww-facts dd a { font-weight: 600; }
.ww-seller__policies { padding-top: 18px; }
.ww-seller__policies-title { margin: 0 0 10px; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ww-fog); }
.ww-seller__policies ul { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.ww-seller__policies a { display: inline-block; padding: 8px 14px; border: 1px solid var(--ww-hairline); border-radius: var(--ww-radius-pill); font-size: 14px; text-decoration: none; }
.ww-seller__policies a:hover { border-color: var(--ww-black); }

/* ---------- Questions fréquentes ---------- */

.ww-faq { max-width: 860px; margin: 0 auto; border-top: 1px solid var(--ww-hairline); }
.ww-faq__item { border-bottom: 1px solid var(--ww-hairline); }
.ww-faq__q { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 22px 0; font-size: clamp(17px, 2vw, 20px); font-weight: 600; letter-spacing: -0.02em; cursor: pointer; list-style: none; }
.ww-faq__q::-webkit-details-marker { display: none; }
.ww-faq__q::after { content: "+"; flex: 0 0 auto; display: grid; place-items: center; width: 36px; height: 36px; border: 1px solid var(--ww-hairline); border-radius: 50%; font-weight: 400; font-size: 20px; transition: transform .2s ease; }
.ww-faq__item[open] .ww-faq__q::after { transform: rotate(45deg); }
.ww-faq__a { padding: 0 52px 22px 0; font-size: 16px; line-height: 1.6; color: #3d424b; }
.ww-faq__a p { margin: 0 0 0.8em; }
.ww-faq__a a { color: var(--ww-violet); font-weight: 600; }
.ww-section--mist .ww-faq__q::after { background: var(--ww-white); }

/* ---------- Appel final ---------- */

.ww-cta__facts { display: flex; flex-wrap: wrap; gap: 10px 24px; margin: 28px 0 0; padding: 0; list-style: none; font-size: 14px; font-weight: 500; color: #d0d0d0; }
.ww-cta__facts li { display: flex; align-items: center; gap: 8px; }
.ww-cta__facts .ww-icon { width: 18px; height: 18px; color: var(--ww-white); }
.ww-cta__contact { margin: 24px 0 0; font-size: 15px; line-height: 1.6; color: var(--ww-ash); }
.ww-cta__contact a { color: var(--ww-white); font-weight: 600; white-space: nowrap; }

/* ---------- Page produit ---------- */

.ww-product { padding: 32px 0 var(--ww-section); }
.ww-product__grid { display: grid; gap: 32px; }
@media (min-width: 990px) {
  .ww-product { padding-top: 56px; }
  .ww-product__grid { grid-template-columns: 1.15fr 1fr; gap: 64px; align-items: start; }
  .ww-product__info { position: sticky; top: calc(var(--header-height, 0px) + 24px); }
}

.ww-gallery { display: grid; grid-auto-flow: column; grid-auto-columns: 86%; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
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

.ww-product__title { margin: 0; font-size: clamp(32px, 4vw, 48px); font-weight: 600; line-height: 1.02; letter-spacing: -0.035em; }
.ww-product__subtitle { margin: 12px 0 0; font-size: 18px; line-height: 1.4; color: var(--ww-fog); }
.ww-product__seller { display: flex; align-items: flex-start; gap: 8px; margin: 14px 0 0; font-size: 14px; line-height: 1.45; color: var(--ww-fog); }
.ww-product__seller .ww-icon { width: 18px; height: 18px; margin-top: 1px; color: var(--ww-violet); }
.ww-product__price { margin: 24px 0 4px; font-size: clamp(34px, 3.8vw, 44px); font-weight: 600; letter-spacing: -0.04em; line-height: 1; }
.ww-product__tax { margin: 0; font-size: 14px; line-height: 1.45; color: var(--ww-fog); }
.ww-product__stock { display: inline-flex; align-items: center; gap: 8px; margin: 0; font-size: 14px; font-weight: 500; }
.ww-product__stock::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--ww-success); }
.ww-product__stock--out::before { background: var(--ww-ash); }

/* Contenu du carton */
.ww-box { margin: 22px 0 0; padding: 18px 20px; border-radius: 18px; background: var(--ww-mist); }
.ww-box__title { display: flex; align-items: center; gap: 8px; margin: 0 0 10px; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-fog); }
.ww-box__title .ww-icon { width: 18px; height: 18px; color: var(--ww-violet); }
.ww-box ul { display: grid; gap: 6px; margin: 0; padding: 0; list-style: none; }
.ww-box li { display: flex; gap: 10px; font-size: 15px; line-height: 1.45; }
.ww-box li::before { content: ""; flex: none; width: 6px; height: 6px; margin-top: 0.55em; border-radius: 50%; background: var(--ww-violet); }
.ww-box p { margin: 10px 0 0; font-size: 14px; color: var(--ww-fog); }

.ww-form { display: grid; gap: 12px; margin-top: 22px; }
.ww-field { display: grid; gap: 8px; }
.ww-field label { font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ww-fog); }
.ww-select,
.ww-qty input { width: 100%; min-height: 52px; padding: 0 20px; border: 1.5px solid var(--ww-hairline); border-radius: var(--ww-radius-pill); background: var(--ww-white); font: inherit; font-size: 16px; color: var(--ww-black); }
.ww-qty { display: grid; grid-template-columns: 44px 1fr 44px; align-items: center; width: 148px; border: 1.5px solid var(--ww-hairline); border-radius: var(--ww-radius-pill); }
.ww-qty input { border: 0; min-height: 44px; padding: 0; text-align: center; -moz-appearance: textfield; }
.ww-qty input::-webkit-outer-spin-button,
.ww-qty input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.ww-qty button { height: 44px; border: 0; background: none; font-size: 20px; cursor: pointer; color: var(--ww-black); }
.ww-form__row { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 4px; }
.ww-form .shopify-payment-button__button { border-radius: var(--ww-radius-pill) !important; min-height: 52px; overflow: hidden; }
.ww-form .shopify-payment-button__more-options { font-size: 14px; color: var(--ww-fog); }

/* Livraison estimée */
.ww-eta { display: flex; align-items: flex-start; gap: 12px; margin: 14px 0 0; padding: 14px 16px; border: 1px solid var(--ww-hairline); border-radius: 16px; font-size: 14px; line-height: 1.45; color: var(--ww-fog); }
.ww-eta .ww-icon { width: 22px; height: 22px; color: var(--ww-success); }
.ww-eta strong { display: block; color: var(--ww-black); font-size: 15px; font-weight: 600; }

.ww-product__pay { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; margin: 16px 0 0; font-size: 13px; color: var(--ww-fog); }
.ww-product__pay > span { display: inline-flex; align-items: center; gap: 6px; }
.ww-product__pay .ww-icon { width: 16px; height: 16px; color: var(--ww-success); }

.ww-promises { display: grid; gap: 0; margin: 24px 0 0; padding: 0; list-style: none; border-top: 1px solid var(--ww-hairline); }
.ww-promises li { display: flex; align-items: center; gap: 12px; padding: 13px 0; border-bottom: 1px solid var(--ww-hairline); font-size: 15px; line-height: 1.4; }
.ww-promises .ww-icon { color: var(--ww-violet); }

.ww-accordion { margin-top: 24px; border-top: 1px solid var(--ww-hairline); }
.ww-accordion details { border-bottom: 1px solid var(--ww-hairline); }
.ww-accordion summary { display: flex; justify-content: space-between; align-items: center; padding: 18px 0; font-size: 16px; font-weight: 600; cursor: pointer; list-style: none; }
.ww-accordion summary::-webkit-details-marker { display: none; }
.ww-accordion summary::after { content: "+"; font-weight: 400; font-size: 20px; }
.ww-accordion details[open] summary::after { content: "–"; }
.ww-accordion__body { padding: 0 0 20px; font-size: 15px; line-height: 1.6; color: #3d424b; }
.ww-accordion__body p { margin: 0 0 0.7em; }
.ww-accordion__body a { color: var(--ww-violet); font-weight: 600; }

/* Carte de contact */
.ww-contact-card { margin-top: 24px; padding: 20px; border-radius: 18px; background: var(--ww-mist); }
.ww-contact-card__title { margin: 0 0 12px; font-size: 16px; font-weight: 600; }
.ww-contact-card ul { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
.ww-contact-card li { display: flex; align-items: flex-start; gap: 10px; font-size: 15px; line-height: 1.45; color: var(--ww-fog); }
.ww-contact-card .ww-icon { width: 18px; height: 18px; margin-top: 1px; color: var(--ww-violet); }
.ww-contact-card a { color: var(--ww-black); font-weight: 600; overflow-wrap: anywhere; }

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

## snippets/ww-icon.liquid

```liquid
{%- comment -%}
  Icônes au trait, dessinées en SVG (style Lucide, licence ISC).
  Paramètre : name (truck, return, refund, shield, lock, check, bag, package, home,
  mail, phone, clock, pin, card, chat, building, arrow)
{%- endcomment -%}
<svg class="ww-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
  {%- case name -%}
    {%- when 'truck' -%}
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
    {%- when 'return' -%}
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
    {%- when 'refund' -%}
      <rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>
    {%- when 'shield' -%}
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
    {%- when 'lock' -%}
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    {%- when 'check' -%}
      <path d="M20 6 9 17l-5-5"/>
    {%- when 'bag' -%}
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
    {%- when 'package' -%}
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.7 4.73a2 2 0 0 0 2 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>
    {%- when 'home' -%}
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    {%- when 'mail' -%}
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    {%- when 'phone' -%}
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    {%- when 'clock' -%}
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    {%- when 'pin' -%}
      <path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
    {%- when 'card' -%}
      <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
    {%- when 'chat' -%}
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    {%- when 'building' -%}
      <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
    {%- when 'arrow' -%}
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    {%- else -%}
      <circle cx="12" cy="12" r="9"/>
  {%- endcase -%}
</svg>
```

## snippets/ww-coordonnees.liquid

```liquid
{%- comment -%}
  Coordonnées de la boutique, réunies en un seul endroit.
  Elles doivent rester identiques à vos politiques et à Google Merchant Center :
  si l'une change, modifiez-la ici, puis dans vos politiques et dans Merchant Center.

  Paramètre « part » :
  email, phone, hours, hours_short, response, address, ville, siren, exploitant, vendeur, nom, expedition
{%- endcomment -%}
{%- liquid
  assign ww_nom = 'WhisperWalk'
  assign ww_exploitant = 'Morgan OCANA, entrepreneur individuel'
  assign ww_vendeur = 'WhisperWalk – Morgan OCANA (EI)'
  assign ww_siren = '914 877 022'
  assign ww_address = '6 ter rue Michelet, 21000 Dijon, France'
  assign ww_ville = 'Dijon'
  assign ww_email = 'morganocana02@gmail.com'
  assign ww_phone = '+33 6 69 22 41 42'
  assign ww_phone_href = '+33669224142'
  assign ww_hours = 'Du lundi au vendredi, de 9h à 18h (heure de Paris), hors jours fériés'
  assign ww_hours_short = 'lun.–ven., 9h–18h'
  assign ww_response = 'Réponse sous 24 à 48 heures ouvrées'
  assign ww_expedition = 'Depuis la France'

  case part
    when 'email'
      echo '<a href="mailto:' | append: ww_email | append: '">' | append: ww_email | append: '</a>'
    when 'phone'
      echo '<a href="tel:' | append: ww_phone_href | append: '">' | append: ww_phone | append: '</a>'
    when 'hours'
      echo ww_hours
    when 'hours_short'
      echo ww_hours_short
    when 'response'
      echo ww_response
    when 'address'
      echo ww_address
    when 'ville'
      echo ww_ville
    when 'siren'
      echo ww_siren
    when 'exploitant'
      echo ww_exploitant
    when 'vendeur'
      echo ww_vendeur
    when 'nom'
      echo ww_nom
    when 'expedition'
      echo ww_expedition
  endcase
-%}
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
      <p class="ww-pack__label">Dans le carton</p>
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
  assign cheapest = blank
  if section.settings.collection != blank
    assign cheapest = section.settings.collection.products | sort: 'price' | first
  endif
-%}

<section class="ww ww-hero" aria-labelledby="ww-hero-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-hero__grid{% if hero_image != blank %} ww-hero__grid--media{% endif %}">

      <div class="ww-hero__text">
        {%- if section.settings.eyebrow != blank -%}
          <p class="ww-pill">{% render 'ww-icon', name: 'pin' %}{{ section.settings.eyebrow | escape }}</p>
        {%- endif -%}
        <h1 class="ww-hero__title" id="ww-hero-{{ section.id }}">{{ section.settings.title | escape | newline_to_br }}</h1>
        {%- if section.settings.text != blank -%}
          <p class="ww-lead">{{ section.settings.text | escape }}</p>
        {%- endif -%}

        {%- if cheapest != blank -%}
          <p class="ww-hero__price">
            <span>{{ section.settings.price_prefix | escape }}</span>
            <strong>{{ cheapest.price | money }}</strong>
            {%- if section.settings.price_note != blank -%}<span>{{ section.settings.price_note | escape }}</span>{%- endif -%}
          </p>
        {%- endif -%}

        <div class="ww-actions">
          {%- if section.settings.button_label != blank -%}
            <a class="ww-btn ww-btn--primary" href="{{ section.settings.button_link | default: '#ww-packs' }}">{{ section.settings.button_label | escape }}</a>
          {%- endif -%}
          {%- if section.settings.button2_label != blank -%}
            <a class="ww-btn ww-btn--outline" href="{{ section.settings.button2_link | default: '#ww-etapes' }}">{{ section.settings.button2_label | escape }}</a>
          {%- endif -%}
        </div>
      </div>

      <div class="ww-hero__trust">
        {%- if section.blocks.size > 0 -%}
          <ul class="ww-checks">
            {%- for block in section.blocks -%}
              <li {{ block.shopify_attributes }}>{% render 'ww-icon', name: 'check' %}<span>{{ block.settings.text | escape }}</span></li>
            {%- endfor -%}
          </ul>
        {%- endif -%}
        {%- if section.settings.show_contact -%}
          <p class="ww-hero__contact">
            {% render 'ww-icon', name: 'chat' %}
            <span>{{ section.settings.contact_intro | escape }} {% render 'ww-coordonnees', part: 'phone' %} ou écrivez à {% render 'ww-coordonnees', part: 'email' %} ({% render 'ww-coordonnees', part: 'hours_short' %}).</span>
          </p>
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
        <figure class="ww-hero__media">
          {%- if featured != blank -%}
            <a class="ww-hero__img" href="{{ featured.url }}" tabindex="-1" aria-hidden="true">{{ hero_img }}</a>
            <figcaption class="ww-hero__caption">
              <span class="ww-hero__caption-name">{{ featured.title | split: ' | ' | first | escape }}</span>
              <span class="ww-hero__caption-price">{{ featured.price | money }}</span>
              <a class="ww-link" href="{{ featured.url }}">Voir le pack {% render 'ww-icon', name: 'arrow' %}</a>
            </figcaption>
          {%- else -%}
            <div class="ww-hero__img">{{ hero_img }}</div>
          {%- endif -%}
        </figure>
      {%- endif -%}

    </div>
  </div>
</section>

{% schema %}
{
  "name": "WW · Accroche",
  "tag": "div",
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Pastille", "default": "Entreprise française · Expédition depuis la France" },
    { "type": "textarea", "id": "title", "label": "Titre", "default": "Marchez chez vous.\nCommandez l'esprit tranquille." },
    { "type": "textarea", "id": "text", "label": "Texte" },
    { "type": "collection", "id": "collection", "label": "Collection des packs", "info": "Sert à afficher le prix du pack le moins cher." },
    { "type": "text", "id": "price_prefix", "label": "Texte avant le prix", "default": "Packs à partir de" },
    { "type": "text", "id": "price_note", "label": "Texte après le prix", "default": "livraison offerte" },
    { "type": "text", "id": "button_label", "label": "Bouton principal", "default": "Choisir mon pack" },
    { "type": "url", "id": "button_link", "label": "Lien du bouton principal (vide = section des packs)" },
    { "type": "text", "id": "button2_label", "label": "Bouton secondaire", "default": "Comment se passe la commande" },
    { "type": "url", "id": "button2_link", "label": "Lien du bouton secondaire (vide = étapes de commande)" },
    { "type": "checkbox", "id": "show_contact", "label": "Afficher le téléphone et l'e-mail", "default": true },
    { "type": "text", "id": "contact_intro", "label": "Texte avant les coordonnées", "default": "Une question avant d'acheter ? Appelez le" },
    { "type": "product", "id": "product", "label": "Pack mis en avant", "info": "Sa photo principale, son nom et son prix s'affichent à côté du texte." },
    { "type": "image_picker", "id": "image", "label": "Image (facultative, remplace la photo du pack)" }
  ],
  "blocks": [
    {
      "type": "check",
      "name": "Garantie cochée",
      "settings": [
        { "type": "text", "id": "text", "label": "Texte", "default": "Livraison offerte en 5 à 7 jours ouvrés" }
      ]
    }
  ],
  "max_blocks": 4,
  "presets": [
    {
      "name": "WW · Accroche",
      "blocks": [
        { "type": "check", "settings": { "text": "Livraison offerte en 5 à 7 jours ouvrés" } },
        { "type": "check", "settings": { "text": "14 jours pour changer d'avis" } },
        { "type": "check", "settings": { "text": "Garantie légale de 2 ans" } },
        { "type": "check", "settings": { "text": "Paiement sécurisé" } }
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

    {%- if section.settings.note != blank -%}
      <p class="ww-note">{% render 'ww-icon', name: 'shield' %}<span>{{ section.settings.note | escape }}</span></p>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "WW · Packs",
  "tag": "div",
  "max_blocks": 3,
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "Les packs" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Choisissez votre pack." },
    { "type": "text", "id": "text", "label": "Texte", "default": "Un tapis de marche pliable au cœur de chaque pack. Choisissez ce qui l'accompagne selon votre façon de bouger." },
    { "type": "text", "id": "button_label", "label": "Texte du bouton", "default": "Découvrir le pack" },
    { "type": "text", "id": "note", "label": "Phrase sous les packs", "default": "Pour les trois packs : livraison offerte en 5 à 7 jours ouvrés, 14 jours pour changer d'avis et garantie légale de 2 ans." },
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

## sections/ww-etapes.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-section{% if section.settings.mist %} ww-section--mist{% endif %}" id="ww-etapes" aria-labelledby="ww-etapes-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-head">
      {%- if section.settings.eyebrow != blank -%}<p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>{%- endif -%}
      <h2 class="ww-h2" id="ww-etapes-{{ section.id }}">{{ section.settings.title | escape }}</h2>
      {%- if section.settings.text != blank -%}<p class="ww-lead">{{ section.settings.text | escape }}</p>{%- endif -%}
    </div>

    <ol class="ww-steps" style="--ww-cols: {{ section.blocks.size }}">
      {%- for block in section.blocks -%}
        <li class="ww-step" {{ block.shopify_attributes }}>
          <span class="ww-step__icon">{% render 'ww-icon', name: block.settings.icon %}</span>
          <span class="ww-step__num">Étape {{ forloop.index }}</span>
          <h3 class="ww-step__title">{{ block.settings.title | escape }}</h3>
          <p class="ww-step__text">{{ block.settings.text | escape }}</p>
        </li>
      {%- endfor -%}
    </ol>

    {%- if section.settings.note != blank -%}
      <p class="ww-footnote">
        {{ section.settings.note | escape }}
        {%- if section.settings.link != blank %} <a href="{{ section.settings.link }}">{{ section.settings.link_label | escape }}</a>{%- endif -%}
      </p>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "WW · Étapes de commande",
  "tag": "div",
  "max_blocks": 6,
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "Après votre commande" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Ce qui se passe, étape par étape." },
    { "type": "text", "id": "text", "label": "Texte" },
    { "type": "text", "id": "note", "label": "Note sous les étapes" },
    { "type": "text", "id": "link_label", "label": "Texte du lien", "default": "Politique d'expédition" },
    { "type": "url", "id": "link", "label": "Lien" },
    { "type": "checkbox", "id": "mist", "label": "Fond gris clair", "default": true }
  ],
  "blocks": [
    {
      "type": "step",
      "name": "Étape",
      "settings": [
        {
          "type": "select",
          "id": "icon",
          "label": "Icône",
          "default": "bag",
          "options": [
            { "value": "bag", "label": "Commande" },
            { "value": "package", "label": "Colis" },
            { "value": "truck", "label": "Camion" },
            { "value": "home", "label": "Maison" },
            { "value": "return", "label": "Retour" },
            { "value": "shield", "label": "Bouclier" },
            { "value": "mail", "label": "E-mail" }
          ]
        },
        { "type": "text", "id": "title", "label": "Titre", "default": "Vous commandez" },
        { "type": "textarea", "id": "text", "label": "Texte" }
      ]
    }
  ],
  "presets": [{ "name": "WW · Étapes de commande", "blocks": [{ "type": "step" }, { "type": "step" }, { "type": "step" }] }]
}
{% endschema %}
```

## sections/ww-garanties.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-section{% if section.settings.mist %} ww-section--mist{% endif %}" id="ww-garanties" aria-labelledby="ww-garanties-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-head">
      {%- if section.settings.eyebrow != blank -%}<p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>{%- endif -%}
      <h2 class="ww-h2" id="ww-garanties-{{ section.id }}">{{ section.settings.title | escape }}</h2>
      {%- if section.settings.text != blank -%}<p class="ww-lead">{{ section.settings.text | escape }}</p>{%- endif -%}
    </div>

    <div class="ww-guarantees">
      {%- for block in section.blocks -%}
        <article class="ww-guarantee" {{ block.shopify_attributes }}>
          <span class="ww-guarantee__icon">{% render 'ww-icon', name: block.settings.icon %}</span>
          <h3 class="ww-guarantee__title">{{ block.settings.title | escape }}</h3>
          <div class="ww-guarantee__text">{{ block.settings.text }}</div>
          {%- if block.settings.link != blank -%}
            <a class="ww-link" href="{{ block.settings.link }}">{{ block.settings.link_label | default: 'En savoir plus' | escape }} {% render 'ww-icon', name: 'arrow' %}</a>
          {%- endif -%}
        </article>
      {%- endfor -%}
    </div>

    {%- if section.settings.show_payment_icons -%}
      <div class="ww-paybar">
        <p class="ww-paybar__label">{% render 'ww-icon', name: 'lock' %}{{ section.settings.payment_label | escape }}</p>
        <ul class="ww-pay" role="list">
          {%- for type in shop.enabled_payment_types -%}
            <li>{{ type | payment_type_svg_tag: class: 'ww-pay__icon' }}</li>
          {%- endfor -%}
        </ul>
      </div>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "WW · Engagements",
  "tag": "div",
  "max_blocks": 6,
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "Nos engagements" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Tout est écrit noir sur blanc." },
    { "type": "text", "id": "text", "label": "Texte" },
    { "type": "checkbox", "id": "show_payment_icons", "label": "Afficher les moyens de paiement", "default": true },
    { "type": "text", "id": "payment_label", "label": "Texte à côté des moyens de paiement", "default": "Paiement sécurisé, connexion chiffrée" },
    { "type": "checkbox", "id": "mist", "label": "Fond gris clair", "default": false }
  ],
  "blocks": [
    {
      "type": "item",
      "name": "Engagement",
      "settings": [
        {
          "type": "select",
          "id": "icon",
          "label": "Icône",
          "default": "truck",
          "options": [
            { "value": "truck", "label": "Livraison" },
            { "value": "return", "label": "Retour" },
            { "value": "refund", "label": "Remboursement" },
            { "value": "shield", "label": "Garantie" },
            { "value": "lock", "label": "Paiement" },
            { "value": "chat", "label": "Service client" }
          ]
        },
        { "type": "text", "id": "title", "label": "Titre", "default": "Livraison offerte" },
        { "type": "richtext", "id": "text", "label": "Texte" },
        { "type": "text", "id": "link_label", "label": "Texte du lien", "default": "Lire la politique" },
        { "type": "url", "id": "link", "label": "Lien" }
      ]
    }
  ],
  "presets": [{ "name": "WW · Engagements", "blocks": [{ "type": "item" }, { "type": "item" }, { "type": "item" }] }]
}
{% endschema %}
```

## sections/ww-vendeur.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

<section class="ww ww-section{% if section.settings.mist %} ww-section--mist{% endif %}" id="ww-vendeur" aria-labelledby="ww-vendeur-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-seller">

      <div>
        {%- if section.settings.eyebrow != blank -%}<p class="ww-eyebrow">{{ section.settings.eyebrow | escape }}</p>{%- endif -%}
        <h2 class="ww-h2" id="ww-vendeur-{{ section.id }}">{{ section.settings.title | escape }}</h2>
        {%- if section.settings.text != blank -%}<div class="ww-lead">{{ section.settings.text }}</div>{%- endif -%}

        {%- comment -%} Mot personnel : affiché seulement si vous le remplissez (votre photo, vos mots) {%- endcomment -%}
        {%- if section.settings.message != blank -%}
          <figure class="ww-seller__note">
            {%- if section.settings.photo != blank -%}
              <div class="ww-seller__photo">
                {{ section.settings.photo | image_url: width: 160 | image_tag: loading: 'lazy', alt: section.settings.signature }}
              </div>
            {%- endif -%}
            <div>
              <blockquote class="ww-seller__quote">{{ section.settings.message | escape }}</blockquote>
              {%- if section.settings.signature != blank -%}<figcaption class="ww-seller__sign">{{ section.settings.signature | escape }}</figcaption>{%- endif -%}
            </div>
          </figure>
        {%- endif -%}

        <div class="ww-actions">
          {%- if section.settings.button_label != blank -%}
            <a class="ww-btn ww-btn--dark" href="{{ section.settings.button_link | default: '/pages/contact' }}">{{ section.settings.button_label | escape }}</a>
          {%- endif -%}
        </div>
      </div>

      <div class="ww-seller__card">
        <dl class="ww-facts">
          <div><dt>{% render 'ww-icon', name: 'building' %}Nom commercial</dt><dd>{% render 'ww-coordonnees', part: 'nom' %}</dd></div>
          <div><dt>{% render 'ww-icon', name: 'shield' %}Exploitant</dt><dd>{% render 'ww-coordonnees', part: 'exploitant' %} · SIREN {% render 'ww-coordonnees', part: 'siren' %}</dd></div>
          <div><dt>{% render 'ww-icon', name: 'pin' %}Adresse</dt><dd>{% render 'ww-coordonnees', part: 'address' %}</dd></div>
          <div><dt>{% render 'ww-icon', name: 'phone' %}Téléphone</dt><dd>{% render 'ww-coordonnees', part: 'phone' %}</dd></div>
          <div><dt>{% render 'ww-icon', name: 'mail' %}E-mail</dt><dd>{% render 'ww-coordonnees', part: 'email' %}</dd></div>
          <div><dt>{% render 'ww-icon', name: 'clock' %}Horaires</dt><dd>{% render 'ww-coordonnees', part: 'hours' %}. {% render 'ww-coordonnees', part: 'response' %}.</dd></div>
          <div><dt>{% render 'ww-icon', name: 'truck' %}Expédition</dt><dd>{% render 'ww-coordonnees', part: 'expedition' %}</dd></div>
        </dl>

        {%- if shop.policies.size > 0 -%}
          <div class="ww-seller__policies">
            <p class="ww-seller__policies-title">Nos politiques</p>
            <ul role="list">
              {%- for policy in shop.policies -%}
                <li><a href="{{ policy.url }}">{{ policy.title | escape }}</a></li>
              {%- endfor -%}
            </ul>
          </div>
        {%- endif -%}
      </div>

    </div>
  </div>
</section>

{% schema %}
{
  "name": "WW · Qui sommes-nous",
  "tag": "div",
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre", "default": "Qui sommes-nous" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Qui se cache derrière WhisperWalk ?" },
    { "type": "richtext", "id": "text", "label": "Texte" },
    { "type": "header", "content": "Mot personnel (facultatif)" },
    { "type": "paragraph", "content": "Une photo de vous et quelques phrases avec vos propres mots. Rien ne s'affiche tant que le message est vide." },
    { "type": "image_picker", "id": "photo", "label": "Votre photo" },
    { "type": "textarea", "id": "message", "label": "Votre message" },
    { "type": "text", "id": "signature", "label": "Signature", "default": "Morgan OCANA, WhisperWalk" },
    { "type": "header", "content": "Bouton" },
    { "type": "text", "id": "button_label", "label": "Texte du bouton", "default": "Nous contacter" },
    { "type": "url", "id": "button_link", "label": "Lien du bouton (vide = page contact)" },
    { "type": "checkbox", "id": "mist", "label": "Fond gris clair", "default": true }
  ],
  "presets": [{ "name": "WW · Qui sommes-nous" }]
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
      <a class="ww-btn ww-btn--primary" href="{{ section.settings.button_link | default: '#ww-packs' }}">{{ section.settings.button_label | escape }}</a>
    </div>
    {%- if section.settings.facts != blank -%}
      {%- assign facts = section.settings.facts | split: '|' -%}
      <ul class="ww-cta__facts">
        {%- for fact in facts -%}<li>{% render 'ww-icon', name: 'check' %}{{ fact | strip | escape }}</li>{%- endfor -%}
      </ul>
    {%- endif -%}
    {%- if section.settings.show_contact -%}
      <p class="ww-cta__contact">
        {{ section.settings.contact_intro | escape }}
        {% render 'ww-coordonnees', part: 'phone' %} · {% render 'ww-coordonnees', part: 'email' %} · {% render 'ww-coordonnees', part: 'response' %}.
      </p>
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
    { "type": "url", "id": "button_link", "label": "Lien du bouton (vide = section des packs)" },
    { "type": "text", "id": "facts", "label": "Engagements (séparés par |)", "default": "Livraison offerte | Expédié depuis la France | 14 jours pour changer d'avis | Garantie légale de 2 ans" },
    { "type": "checkbox", "id": "show_contact", "label": "Afficher le téléphone et l'e-mail", "default": true },
    { "type": "text", "id": "contact_intro", "label": "Texte avant les coordonnées", "default": "Une question ?" }
  ],
  "presets": [{ "name": "WW · Appel final" }]
}
{% endschema %}
```

## sections/ww-produit.liquid

```liquid
{{ 'ww-premium.css' | asset_url | stylesheet_tag }}

{%- liquid
  assign title_parts = product.title | split: ' | '
  assign pack_name = title_parts | first
  assign pack_sub = ''
  if title_parts.size > 1
    assign pack_sub = title_parts | last
  endif
  assign current_variant = product.selected_or_first_available_variant
-%}

<script type="application/ld+json">{{ product | structured_data }}</script>

<section class="ww ww-product" aria-labelledby="ww-product-title-{{ section.id }}">
  <div class="ww-container">
    <div class="ww-product__grid">

      {%- comment -%} Galerie : défilement horizontal sur mobile, grille sur ordinateur {%- endcomment -%}
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
        {%- if section.settings.show_seller -%}
          <p class="ww-product__seller">{% render 'ww-icon', name: 'building' %}<span>Vendu par {% render 'ww-coordonnees', part: 'vendeur' %}, à {% render 'ww-coordonnees', part: 'ville' %} · Expédié depuis la France</span></p>
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

        {%- if section.settings.show_eta -%}
          {%- comment -%} Date estimée calculée dans le navigateur à partir des délais de la politique d'expédition {%- endcomment -%}
          <p class="ww-eta" data-ww-eta data-min="{{ section.settings.eta_min }}" data-max="{{ section.settings.eta_max }}">
            {% render 'ww-icon', name: 'truck' %}
            <span>
              <strong data-ww-eta-range>Livraison offerte en {{ section.settings.eta_min }} à {{ section.settings.eta_max }} jours ouvrés</strong>
              Commande validée avant 23h59 (heure de Paris) : préparation dès le jour ouvré suivant, envoi depuis la France avec numéro de suivi par e-mail.
            </span>
          </p>
        {%- endif -%}

        {%- comment -%} Contenu exact du carton, défini par pack dans l'éditeur (blocs « Contenu du carton ») {%- endcomment -%}
        {%- for block in section.blocks -%}
          {%- if block.type == 'contents' and block.settings.product != blank and block.settings.product.id == product.id -%}
            <div class="ww-box" {{ block.shopify_attributes }}>
              <p class="ww-box__title">{% render 'ww-icon', name: 'package' %}{{ section.settings.contents_title | escape }}</p>
              {{ block.settings.items }}
              {%- if block.settings.note != blank -%}<p>{{ block.settings.note | escape }}</p>{%- endif -%}
            </div>
          {%- endif -%}
        {%- endfor -%}

        <div class="ww-product__pay">
          <span>{% render 'ww-icon', name: 'lock' %}Paiement sécurisé</span>
          <ul class="ww-pay" role="list">
            {%- for type in shop.enabled_payment_types -%}
              <li>{{ type | payment_type_svg_tag: class: 'ww-pay__icon' }}</li>
            {%- endfor -%}
          </ul>
        </div>

        <ul class="ww-promises">
          <li>{% render 'ww-icon', name: 'return' %}<span>14 jours pour changer d'avis</span></li>
          <li>{% render 'ww-icon', name: 'shield' %}<span>Garantie légale de conformité de 2 ans</span></li>
          <li>{% render 'ww-icon', name: 'package' %}<span>Article abîmé ou non conforme : retour à nos frais</span></li>
        </ul>

        <div class="ww-accordion">
          <details>
            <summary>Livraison</summary>
            <div class="ww-accordion__body">
              <p>Livraison offerte en France métropolitaine, Corse incluse, sans minimum d'achat. Les colis partent de France.</p>
              <p>Toute commande validée avant 23h59 (heure de Paris) est prise en compte le jour même, et sa préparation démarre le jour ouvré suivant. Préparation en 3 jours ouvrés, puis 2 à 4 jours ouvrés de transport, soit 5 à 7 jours ouvrés au total (du lundi au vendredi, hors jours fériés).</p>
              <p>Vous recevez un e-mail de confirmation, puis un second e-mail avec votre numéro de suivi dès l'expédition. Selon votre adresse et la taille du colis, la livraison se fait à domicile ou en point relais.</p>
              {%- if shop.shipping_policy != blank -%}<p><a href="{{ shop.shipping_policy.url }}">Lire la politique d'expédition</a></p>{%- endif -%}
            </div>
          </details>
          <details>
            <summary>Retours et remboursement</summary>
            <div class="ww-accordion__body">
              <p>Vous avez 14 jours après réception pour changer d'avis, sans avoir à vous justifier. Les frais de retour sont à votre charge, sans frais de réapprovisionnement.</p>
              <p>Le remboursement est effectué sous 7 jours après réception et contrôle du retour, et au plus tard 14 jours après votre demande, sur le moyen de paiement utilisé pour la commande.</p>
              <p>Article abîmé, défectueux ou non conforme : le retour est entièrement à nos frais. Tant que votre commande n'est pas expédiée, vous pouvez l'annuler par e-mail.</p>
              {%- if shop.refund_policy != blank -%}<p><a href="{{ shop.refund_policy.url }}">Lire la politique de remboursement</a></p>{%- endif -%}
            </div>
          </details>
          <details>
            <summary>Garantie</summary>
            <div class="ww-accordion__body">
              <p>Tous les produits bénéficient de la garantie légale de conformité pendant 2 ans à compter de la livraison, et de la garantie contre les vices cachés.</p>
              <p>En cas de problème, écrivez-nous avec votre numéro de commande et des photos : nous vous répondons sous 24 à 48 heures ouvrées.</p>
            </div>
          </details>
          <details>
            <summary>Paiement</summary>
            <div class="ww-accordion__body">
              <p>Paiement en ligne sécurisé (connexion chiffrée) par carte bancaire (CB, Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay ou Shop Pay. Nous ne conservons aucune donnée bancaire complète.</p>
              <p>Le prix affiché est le prix total : TVA non applicable (article 293 B du CGI), livraison offerte.</p>
            </div>
          </details>
        </div>

        {%- comment -%} Blocs d'applications (par exemple un widget d'avis), ajoutables depuis l'éditeur de thème {%- endcomment -%}
        {%- for block in section.blocks -%}
          {%- if block.type == '@app' -%}
            <div class="ww-app-block">{% render block %}</div>
          {%- endif -%}
        {%- endfor -%}

        <div class="ww-contact-card">
          <p class="ww-contact-card__title">Une question avant de commander ?</p>
          <ul role="list">
            <li>{% render 'ww-icon', name: 'phone' %}<span>{% render 'ww-coordonnees', part: 'phone' %}</span></li>
            <li>{% render 'ww-icon', name: 'mail' %}<span>{% render 'ww-coordonnees', part: 'email' %}</span></li>
            <li>{% render 'ww-icon', name: 'clock' %}<span>{% render 'ww-coordonnees', part: 'hours' %}. {% render 'ww-coordonnees', part: 'response' %}.</span></li>
          </ul>
        </div>
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
    if (root) {
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
    }

    // Livraison estimée : jours ouvrés (lundi-vendredi, hors jours fériés en France), à partir de la date du jour à Paris
    document.querySelectorAll('[data-ww-eta]').forEach(function (box) {
      var out = box.querySelector('[data-ww-eta-range]');
      var minDays = parseInt(box.getAttribute('data-min'), 10);
      var maxDays = parseInt(box.getAttribute('data-max'), 10);
      if (!out || !minDays || !maxDays || !window.Intl) return;
      var DAY = 86400000;
      function easter(y) {
        var a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4,
            f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
            i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
            month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
        return Date.UTC(y, month - 1, day);
      }
      var holidays = {};
      function isHoliday(t) {
        var y = new Date(t).getUTCFullYear();
        if (!holidays[y]) {
          var e = easter(y);
          holidays[y] = [[1, 1], [5, 1], [5, 8], [7, 14], [8, 15], [11, 1], [11, 11], [12, 25]]
            .map(function (md) { return Date.UTC(y, md[0] - 1, md[1]); })
            .concat([e + DAY, e + 39 * DAY, e + 50 * DAY]);
        }
        return holidays[y].indexOf(t) !== -1;
      }
      function addBusinessDays(t, n) {
        while (n > 0) {
          t += DAY;
          var w = new Date(t).getUTCDay();
          if (w !== 0 && w !== 6 && !isHoliday(t)) n--;
        }
        return t;
      }
      var p = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()).split('-');
      var today = Date.UTC(+p[0], +p[1] - 1, +p[2]);
      var from = new Date(addBusinessDays(today, minDays));
      var to = new Date(addBusinessDays(today, maxDays));
      var full = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });
      var short = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', timeZone: 'UTC' });
      var sameMonth = from.getUTCMonth() === to.getUTCMonth();
      out.textContent = 'Livraison offerte, estimée entre le ' + (sameMonth ? short.format(from) : full.format(from)) + ' et le ' + full.format(to);
    });
  })();
</script>

{% schema %}
{
  "name": "WW · Fiche produit",
  "tag": "div",
  "settings": [
    { "type": "text", "id": "eyebrow", "label": "Surtitre au-dessus du nom (facultatif)" },
    { "type": "checkbox", "id": "show_seller", "label": "Afficher « Vendu par… »", "default": true },
    { "type": "text", "id": "tax_note", "label": "Mention sous le prix", "default": "Prix final · TVA non applicable, art. 293 B du CGI · Livraison offerte" },
    { "type": "text", "id": "contents_title", "label": "Titre du contenu du carton", "default": "Dans le carton" },
    { "type": "checkbox", "id": "show_dynamic_checkout", "label": "Afficher le bouton de paiement rapide", "default": true },
    { "type": "checkbox", "id": "show_eta", "label": "Afficher la date de livraison estimée", "default": true },
    { "type": "number", "id": "eta_min", "label": "Délai minimal (jours ouvrés)", "default": 5 },
    { "type": "number", "id": "eta_max", "label": "Délai maximal (jours ouvrés)", "default": 7 }
  ],
  "blocks": [
    {
      "type": "contents",
      "name": "Contenu du carton",
      "settings": [
        { "type": "product", "id": "product", "label": "Pack concerné" },
        { "type": "richtext", "id": "items", "label": "Éléments livrés" },
        { "type": "text", "id": "note", "label": "Précision (facultative)" }
      ]
    },
    { "type": "@app" }
  ]
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
        "eyebrow": "Entreprise française · Expédition depuis la France",
        "title": "Marchez chez vous.\nCommandez l'esprit tranquille.",
        "text": "Un tapis de marche pliable et discret, qui se range sous le lit ou le bureau. Le prix affiché est le prix total, la livraison est offerte, et chaque question reçoit une réponse sous 24 à 48 heures ouvrées.",
        "collection": "tapis-de-course-pliable",
        "price_prefix": "Packs à partir de",
        "price_note": "livraison offerte",
        "button_label": "Choisir mon pack",
        "button_link": "",
        "button2_label": "Comment se passe la commande",
        "button2_link": "",
        "show_contact": true,
        "contact_intro": "Une question avant d'acheter ? Appelez le",
        "product": "pack-essentiel-home-gym"
      },
      "blocks": {
        "c1": {
          "type": "check",
          "settings": {
            "text": "Livraison offerte en 5 à 7 jours ouvrés"
          }
        },
        "c2": {
          "type": "check",
          "settings": {
            "text": "14 jours pour changer d'avis"
          }
        },
        "c3": {
          "type": "check",
          "settings": {
            "text": "Garantie légale de 2 ans"
          }
        },
        "c4": {
          "type": "check",
          "settings": {
            "text": "Paiement sécurisé"
          }
        }
      },
      "block_order": [
        "c1",
        "c2",
        "c3",
        "c4"
      ]
    },
    "packs": {
      "type": "ww-packs",
      "settings": {
        "eyebrow": "Les packs",
        "title": "Choisissez votre pack.",
        "text": "Un tapis de marche pliable au cœur de chaque pack. Le contenu du carton et le prix total sont indiqués clairement.",
        "button_label": "Découvrir le pack",
        "note": "Pour les trois packs : livraison offerte en 5 à 7 jours ouvrés, 14 jours pour changer d'avis et garantie légale de 2 ans.",
        "mist": false
      },
      "blocks": {
        "pack_essentiel": {
          "type": "pack",
          "settings": {
            "product": "pack-essentiel-home-gym",
            "moment": "Le soir",
            "pitch": "Peu de place et des voisins en dessous ? Le tapis anti-bruit limite les vibrations, et le tapis de marche se range à plat sous le lit.",
            "contents": "<ul><li>1 tapis de marche pliable</li><li>1 tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "badge": ""
          }
        },
        "pack_teletravail": {
          "type": "pack",
          "settings": {
            "product": "pack-performance-connectee",
            "moment": "En journée",
            "pitch": "Votre bureau actuel devient un poste de marche : le réhausseur le met à hauteur debout, le tapis se glisse dessous.",
            "contents": "<ul><li>1 tapis de marche pliable</li><li>1 réhausseur de bureau assis-debout</li><li>1 tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "badge": ""
          }
        },
        "pack_ultimate": {
          "type": "pack",
          "settings": {
            "product": "pack-ultimate-home-gym",
            "moment": "Le week-end",
            "pitch": "Cardio en pente et renforcement, sans abonnement ni trajet. Après la séance, tout se range.",
            "contents": "<ul><li>1 tapis de marche pliable</li><li>1 tapis Fitness Pro anti-bruit</li><li>1 paire d'haltères réglables</li><li>1 banc pliable</li><li>Offert : le programme 30 jours (PDF)</li></ul>",
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
    "etapes": {
      "type": "ww-etapes",
      "settings": {
        "eyebrow": "Après votre commande",
        "title": "Ce qui se passe, étape par étape.",
        "text": "Du paiement à la livraison, vous savez à chaque étape où en est votre pack.",
        "note": "Délai total estimé : 5 à 7 jours ouvrés (du lundi au vendredi, hors jours fériés).",
        "link_label": "Politique d'expédition",
        "link": "/policies/shipping-policy",
        "mist": true
      },
      "blocks": {
        "s1": {
          "type": "step",
          "settings": {
            "icon": "bag",
            "title": "Vous commandez",
            "text": "Paiement sécurisé. Une commande validée avant 23h59 (heure de Paris) est prise en compte le jour même, et un e-mail de confirmation vous est envoyé."
          }
        },
        "s2": {
          "type": "step",
          "settings": {
            "icon": "package",
            "title": "Nous préparons votre colis",
            "text": "Préparation en 3 jours ouvrés à partir du jour ouvré suivant : contrôle, emballage et remise au transporteur."
          }
        },
        "s3": {
          "type": "step",
          "settings": {
            "icon": "truck",
            "title": "Il part de France",
            "text": "Dès l'expédition, un second e-mail vous donne votre numéro de suivi."
          }
        },
        "s4": {
          "type": "step",
          "settings": {
            "icon": "home",
            "title": "Livraison chez vous",
            "text": "2 à 4 jours ouvrés de transport, à domicile ou en point relais selon votre adresse et la taille du colis. Livraison offerte."
          }
        },
        "s5": {
          "type": "step",
          "settings": {
            "icon": "return",
            "title": "14 jours pour changer d'avis",
            "text": "Le pack ne vous convient pas ? Vous avez 14 jours après réception pour nous le retourner, sans vous justifier."
          }
        }
      },
      "block_order": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5"
      ]
    },
    "garanties": {
      "type": "ww-garanties",
      "settings": {
        "eyebrow": "Nos engagements",
        "title": "Tout est écrit noir sur blanc.",
        "text": "Les mêmes règles pour chaque commande, détaillées dans nos politiques.",
        "show_payment_icons": true,
        "payment_label": "Paiement sécurisé, connexion chiffrée",
        "mist": false
      },
      "blocks": {
        "g1": {
          "type": "item",
          "settings": {
            "icon": "truck",
            "title": "Livraison offerte",
            "text": "<p>En France métropolitaine, Corse incluse, sans minimum d'achat. <strong>5 à 7 jours ouvrés</strong>, avec numéro de suivi par e-mail.</p>",
            "link_label": "Politique d'expédition",
            "link": "/policies/shipping-policy"
          }
        },
        "g2": {
          "type": "item",
          "settings": {
            "icon": "return",
            "title": "14 jours pour changer d'avis",
            "text": "<p>Sans avoir à vous justifier. Les frais de retour sont à votre charge, <strong>sans frais de réapprovisionnement</strong>.</p>",
            "link_label": "Politique de remboursement",
            "link": "/policies/refund-policy"
          }
        },
        "g3": {
          "type": "item",
          "settings": {
            "icon": "refund",
            "title": "Remboursement sous 7 jours",
            "text": "<p>Après réception et contrôle du retour, et <strong>au plus tard 14 jours</strong> après votre demande, sur le moyen de paiement utilisé.</p>",
            "link_label": "Politique de remboursement",
            "link": "/policies/refund-policy"
          }
        },
        "g4": {
          "type": "item",
          "settings": {
            "icon": "shield",
            "title": "Garantie légale de 2 ans",
            "text": "<p>Garantie légale de conformité et garantie contre les vices cachés. <strong>Article abîmé ou non conforme : retour entièrement à nos frais.</strong></p>",
            "link_label": "Politique de remboursement",
            "link": "/policies/refund-policy"
          }
        },
        "g5": {
          "type": "item",
          "settings": {
            "icon": "lock",
            "title": "Paiement sécurisé",
            "text": "<p>Carte bancaire, PayPal, Apple Pay, Google Pay ou Shop Pay, via une connexion chiffrée. <strong>Nous ne conservons aucune donnée bancaire complète.</strong></p>",
            "link_label": "Moyens de paiement",
            "link": "/pages/moyens-de-paiement"
          }
        },
        "g6": {
          "type": "item",
          "settings": {
            "icon": "chat",
            "title": "Un service client joignable",
            "text": "<p>Par téléphone ou par e-mail, du lundi au vendredi de 9h à 18h. <strong>Réponse sous 24 à 48 heures ouvrées.</strong></p>",
            "link_label": "Nous contacter",
            "link": "/pages/contact"
          }
        }
      },
      "block_order": [
        "g1",
        "g2",
        "g3",
        "g4",
        "g5",
        "g6"
      ]
    },
    "vendeur": {
      "type": "ww-vendeur",
      "settings": {
        "eyebrow": "Qui sommes-nous",
        "title": "Qui se cache derrière WhisperWalk ?",
        "text": "<p>WhisperWalk est une boutique en ligne française, exploitée par Morgan OCANA, entrepreneur individuel installé à Dijon. Ces informations figurent aussi dans nos mentions légales et nos conditions générales de vente.</p>",
        "message": "",
        "signature": "Morgan OCANA, WhisperWalk",
        "button_label": "Nous contacter",
        "button_link": "",
        "mist": true
      }
    },
    "faq": {
      "type": "ww-faq",
      "settings": {
        "eyebrow": "Questions fréquentes",
        "title": "Avant de vous lancer.",
        "contact_text": "Une autre question ? <a href=\"/pages/contact\">Écrivez-nous</a> : réponse sous 24 à 48 heures ouvrées.",
        "mist": false
      },
      "blocks": {
        "q1": {
          "type": "question",
          "settings": {
            "question": "Qui se cache derrière WhisperWalk ?",
            "answer": "<p>Morgan OCANA, entrepreneur individuel installé à Dijon (SIREN 914 877 022), qui exploite la boutique sous la marque WhisperWalk. Toutes nos coordonnées figurent dans nos <a href=\"/policies/contact-information\">informations de contact</a> et nos <a href=\"/policies/legal-notice\">mentions légales</a>.</p>"
          }
        },
        "q2": {
          "type": "question",
          "settings": {
            "question": "Quand vais-je recevoir mon pack ?",
            "answer": "<p>Comptez 5 à 7 jours ouvrés en France métropolitaine, Corse incluse : 3 jours ouvrés de préparation à partir du jour ouvré qui suit votre commande, puis 2 à 4 jours ouvrés de transport. Votre numéro de suivi vous est envoyé par e-mail dès l'expédition. <a href=\"/policies/shipping-policy\">Politique d'expédition</a></p>"
          }
        },
        "q3": {
          "type": "question",
          "settings": {
            "question": "La livraison est-elle vraiment offerte ?",
            "answer": "<p>Oui, pour toutes les commandes, sans minimum d'achat. Le prix affiché est le prix total : TVA non applicable (article 293 B du CGI), livraison comprise.</p>"
          }
        },
        "q4": {
          "type": "question",
          "settings": {
            "question": "Et si le pack ne me convient pas ?",
            "answer": "<p>Vous avez 14 jours après réception pour changer d'avis, sans vous justifier. Écrivez-nous avec votre numéro de commande : nous vous envoyons l'adresse de retour. Les frais de retour sont à votre charge, sans frais de réapprovisionnement, et le remboursement intervient sous 7 jours après réception et contrôle du retour. <a href=\"/policies/refund-policy\">Politique de remboursement</a></p>"
          }
        },
        "q5": {
          "type": "question",
          "settings": {
            "question": "Et s'il arrive abîmé ou ne fonctionne pas ?",
            "answer": "<p>Contactez-nous, si possible sous 48 heures, avec des photos. Le retour et le remboursement, ou l'échange, sont alors entièrement à nos frais. Vous gardez dans tous les cas la garantie légale de conformité de 2 ans et la garantie contre les vices cachés.</p>"
          }
        },
        "q6": {
          "type": "question",
          "settings": {
            "question": "Le paiement est-il sécurisé ?",
            "answer": "<p>Oui. Le paiement se fait en ligne via une connexion chiffrée, par carte bancaire (CB, Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay ou Shop Pay. Nous ne conservons aucune donnée bancaire complète. <a href=\"/pages/moyens-de-paiement\">Moyens de paiement</a></p>"
          }
        },
        "q7": {
          "type": "question",
          "settings": {
            "question": "Que contient chaque pack ?",
            "answer": "<p><strong>Pack Essentiel Appartement</strong> : 1 tapis de marche pliable et 1 tapis Fitness Pro anti-bruit 200 × 90 cm.</p><p><strong>Pack Télétravail</strong> : 1 tapis de marche pliable, 1 réhausseur de bureau assis-debout et 1 tapis Fitness Pro anti-bruit 200 × 90 cm.</p><p><strong>Pack Ultimate Home Gym</strong> : 1 tapis de marche pliable, 1 tapis Fitness Pro anti-bruit, 1 paire d'haltères réglables et 1 banc pliable, avec le programme 30 jours (PDF) offert.</p>"
          }
        },
        "q8": {
          "type": "question",
          "settings": {
            "question": "Puis-je annuler ma commande ?",
            "answer": "<p>Oui, par e-mail, tant qu'elle n'a pas été expédiée. Si elle est déjà partie, il suffit de suivre la procédure de retour.</p>"
          }
        }
      },
      "block_order": [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5",
        "q6",
        "q7",
        "q8"
      ]
    },
    "cta": {
      "type": "ww-cta",
      "settings": {
        "eyebrow": "",
        "title": "Votre prochaine réunion peut être votre première séance.",
        "text": "",
        "button_label": "Choisir mon pack",
        "button_link": "",
        "facts": "Livraison offerte | Expédié depuis la France | 14 jours pour changer d'avis | Garantie légale de 2 ans",
        "show_contact": true,
        "contact_intro": "Une question ?"
      }
    }
  },
  "order": [
    "hero",
    "packs",
    "moments",
    "tapis",
    "etapes",
    "garanties",
    "vendeur",
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
        "show_seller": true,
        "tax_note": "Prix total · TVA non applicable, art. 293 B du CGI · Livraison offerte",
        "contents_title": "Dans le carton",
        "show_dynamic_checkout": true,
        "show_eta": true,
        "eta_min": 5,
        "eta_max": 7
      },
      "blocks": {
        "contents_essentiel": {
          "type": "contents",
          "settings": {
            "product": "pack-essentiel-home-gym",
            "items": "<ul><li>1 tapis de marche pliable</li><li>1 tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "note": ""
          }
        },
        "contents_teletravail": {
          "type": "contents",
          "settings": {
            "product": "pack-performance-connectee",
            "items": "<ul><li>1 tapis de marche pliable</li><li>1 réhausseur de bureau assis-debout</li><li>1 tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "note": ""
          }
        },
        "contents_ultimate": {
          "type": "contents",
          "settings": {
            "product": "pack-ultimate-home-gym",
            "items": "<ul><li>1 tapis de marche pliable</li><li>1 tapis Fitness Pro anti-bruit</li><li>1 paire d'haltères réglables</li><li>1 banc pliable</li></ul>",
            "note": "Offert : le programme 30 jours (PDF), 5 séances de 35 minutes maximum par semaine, conçu pour ce pack."
          }
        }
      },
      "block_order": [
        "contents_essentiel",
        "contents_teletravail",
        "contents_ultimate"
      ]
    },
    "etapes": {
      "type": "ww-etapes",
      "settings": {
        "eyebrow": "Après votre commande",
        "title": "Ce qui se passe, étape par étape.",
        "text": "Du paiement à la livraison, vous savez à chaque étape où en est votre pack.",
        "note": "Délai total estimé : 5 à 7 jours ouvrés (du lundi au vendredi, hors jours fériés).",
        "link_label": "Politique d'expédition",
        "link": "/policies/shipping-policy",
        "mist": false
      },
      "blocks": {
        "s1": {
          "type": "step",
          "settings": {
            "icon": "bag",
            "title": "Vous commandez",
            "text": "Paiement sécurisé. Une commande validée avant 23h59 (heure de Paris) est prise en compte le jour même, et un e-mail de confirmation vous est envoyé."
          }
        },
        "s2": {
          "type": "step",
          "settings": {
            "icon": "package",
            "title": "Nous préparons votre colis",
            "text": "Préparation en 3 jours ouvrés à partir du jour ouvré suivant : contrôle, emballage et remise au transporteur."
          }
        },
        "s3": {
          "type": "step",
          "settings": {
            "icon": "truck",
            "title": "Il part de France",
            "text": "Dès l'expédition, un second e-mail vous donne votre numéro de suivi."
          }
        },
        "s4": {
          "type": "step",
          "settings": {
            "icon": "home",
            "title": "Livraison chez vous",
            "text": "2 à 4 jours ouvrés de transport, à domicile ou en point relais selon votre adresse et la taille du colis. Livraison offerte."
          }
        },
        "s5": {
          "type": "step",
          "settings": {
            "icon": "return",
            "title": "14 jours pour changer d'avis",
            "text": "Le pack ne vous convient pas ? Vous avez 14 jours après réception pour nous le retourner, sans vous justifier."
          }
        }
      },
      "block_order": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5"
      ]
    },
    "packs": {
      "type": "ww-packs",
      "settings": {
        "eyebrow": "Comparer",
        "title": "Les trois packs.",
        "text": "Un tapis de marche pliable, trois façons de l'accompagner.",
        "button_label": "Découvrir le pack",
        "note": "Pour les trois packs : livraison offerte en 5 à 7 jours ouvrés, 14 jours pour changer d'avis et garantie légale de 2 ans.",
        "mist": true
      },
      "blocks": {
        "pack_essentiel": {
          "type": "pack",
          "settings": {
            "product": "pack-essentiel-home-gym",
            "moment": "Le soir",
            "pitch": "Peu de place et des voisins en dessous ? Le tapis anti-bruit limite les vibrations, et le tapis de marche se range à plat sous le lit.",
            "contents": "<ul><li>1 tapis de marche pliable</li><li>1 tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "badge": ""
          }
        },
        "pack_teletravail": {
          "type": "pack",
          "settings": {
            "product": "pack-performance-connectee",
            "moment": "En journée",
            "pitch": "Votre bureau actuel devient un poste de marche : le réhausseur le met à hauteur debout, le tapis se glisse dessous.",
            "contents": "<ul><li>1 tapis de marche pliable</li><li>1 réhausseur de bureau assis-debout</li><li>1 tapis Fitness Pro anti-bruit 200 × 90 cm</li></ul>",
            "badge": ""
          }
        },
        "pack_ultimate": {
          "type": "pack",
          "settings": {
            "product": "pack-ultimate-home-gym",
            "moment": "Le week-end",
            "pitch": "Cardio en pente et renforcement, sans abonnement ni trajet. Après la séance, tout se range.",
            "contents": "<ul><li>1 tapis de marche pliable</li><li>1 tapis Fitness Pro anti-bruit</li><li>1 paire d'haltères réglables</li><li>1 banc pliable</li><li>Offert : le programme 30 jours (PDF)</li></ul>",
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
    "etapes",
    "packs"
  ]
}
```
