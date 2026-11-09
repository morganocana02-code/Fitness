# Refonte premium WhisperWalk — guide d'installation

Ces fichiers s'ajoutent à votre thème Horizon. Ils ne remplacent ni l'en-tête, ni le pied de page,
ni le panier, ni le paiement : tout le fonctionnement e-commerce reste celui de Shopify.

## Où placer chaque fichier

Dans Shopify : Boutique en ligne › Thèmes › (sur une COPIE du thème) ⋯ › Modifier le code.

| Fichier | Dossier dans Shopify | Action |
|---|---|---|
| assets/ww-premium.css | Assets | « Ajouter un fichier » › nommer `ww-premium.css` |
| snippets/ww-pack-card.liquid | Snippets | « Ajouter un snippet » › `ww-pack-card` |
| sections/ww-hero.liquid | Sections | « Ajouter une section » › `ww-hero` |
| sections/ww-assurances.liquid | Sections | `ww-assurances` |
| sections/ww-packs.liquid | Sections | `ww-packs` |
| sections/ww-moments.liquid | Sections | `ww-moments` |
| sections/ww-tapis.liquid | Sections | `ww-tapis` |
| sections/ww-faq.liquid | Sections | `ww-faq` |
| sections/ww-cta.liquid | Sections | `ww-cta` |
| sections/ww-produit.liquid | Sections | `ww-produit` |
| templates/product.ww-premium.json | Templates | « Ajouter un modèle » › produit › JSON › nom `ww-premium` |
| templates/index.json | Templates | Remplacer le contenu de `index.json` existant |

Pour chaque fichier : créer le fichier vide avec le bon nom, coller tout le contenu, Enregistrer.
Créer les fichiers dans cet ordre : CSS, snippet, sections, puis templates.

## Mise en ligne en toute sécurité

1. Dupliquer le thème en ligne et travailler UNIQUEMENT sur la copie.
2. Ajouter les fichiers, puis « Aperçu » de la copie.
3. Pour la fiche produit : sur chaque pack (Produits › pack › Modèle de thème) choisir `ww-premium`.
   Attention : ce réglage s'applique aussi au thème en ligne, à faire juste avant de publier la copie.
4. Vérifier sur mobile et ordinateur : accueil, 3 fiches, ajout au panier, paiement, liens des politiques.
5. Publier la copie.

## Réglages conseillés dans l'éditeur

- Barre d'annonce (en-tête) : fond #4a53ff, texte blanc.
- En-tête : fond noir, texte blanc, pour enchaîner avec l'accroche noire.
- Images : ajouter de vraies photos dans « WW · Accroche » et « WW · Moments » (facultatif).

## Ce qui n'a PAS été inventé

Tous les textes reprennent les informations déjà présentes sur la boutique : contenu des packs,
caractéristiques du tapis (1–10 km/h, 15 %, 136 kg, triple amortissement, rangement à plat),
livraison offerte en 5 à 7 jours ouvrés depuis la France, 14 jours pour changer d'avis,
garantie légale de 2 ans, moyens de paiement. Les prix, noms et photos viennent directement
des produits Shopify. Aucun avis, note, badge, compte à rebours ni promotion.
