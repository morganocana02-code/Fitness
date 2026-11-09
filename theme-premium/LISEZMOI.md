# Refonte premium WhisperWalk — guide d'installation

Ces fichiers s'ajoutent à votre thème Horizon. Ils ne remplacent ni l'en-tête, ni le pied de page,
ni le panier, ni le paiement : le fonctionnement e-commerce reste celui de Shopify.
Rien n'a été installé sur votre boutique : c'est vous qui choisissez quand le faire.

## Ce que contient la refonte

Page d'accueil (7 sections, dans cet ordre) :
1. WW · Accroche : grand titre sur fond noir et photo du pack mis en avant (Pack Télétravail par défaut).
2. WW · Engagements : livraison offerte, expédition depuis la France, 14 jours, garantie légale de 2 ans.
3. WW · Packs : les 3 packs côte à côte, avec prix et contenu.
4. WW · Moments : en journée, le soir, le week-end, chacun relié à son pack.
5. WW · Le tapis en chiffres : 1–10 km/h, 15 %, 136 kg, triple amortissement, rangement à plat.
6. WW · Questions : 6 questions fréquentes, réponses tirées de vos politiques.
7. WW · Appel final.

Fiche produit (modèle « ww-premium ») : galerie, nom du pack, prix, stock, quantité,
« Ajouter au panier », paiement rapide (Shop Pay, etc.), engagements, détails dépliables
(livraison, retours, garantie, paiement), description du produit, puis comparaison des 3 packs.

## Où placer chaque fichier

Dans Shopify : Boutique en ligne › Thèmes › sur une COPIE du thème : ⋯ › Modifier le code.

| Fichier | Dossier dans Shopify | Action |
|---|---|---|
| assets/ww-premium.css | Assets | « Ajouter un fichier » › créer `ww-premium.css` |
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
| templates/index.json | Templates | Remplacer tout le contenu de `index.json` existant |

Pour chaque fichier : créer le fichier vide avec le bon nom, coller tout le contenu, puis Enregistrer.
Ordre conseillé : le CSS, le snippet, les 8 sections, puis les 2 modèles (ils utilisent les sections).

## Mise en ligne en toute sécurité

1. Dupliquer le thème en ligne et travailler UNIQUEMENT sur la copie.
2. Ajouter les fichiers, puis cliquer sur « Aperçu » de la copie.
3. Fiche produit : sur chaque pack (Produits › le pack › Modèle de thème), choisir `ww-premium`.
   Attention : ce choix vaut aussi pour le thème en ligne. Faites-le juste avant de publier la copie,
   sinon le thème actuel affichera sa fiche produit par défaut en attendant.
4. Vérifier sur mobile et sur ordinateur : accueil, 3 fiches, ajout au panier, paiement, liens des politiques.
5. Publier la copie.

## Réglages dans l'éditeur de thème

- Accroche : « Pack mis en avant » affiche la photo principale de ce pack. « Image » la remplace
  par une autre photo si vous le souhaitez.
- Moments : les images sont facultatives. Sans image, les cartes restent en texte sur fond sombre.
- Barre d'annonce (réglages Horizon) : fond violet #4a53ff, texte blanc, comme le prévoit votre référence de style.
- En-tête (réglages Horizon) : fond noir, texte blanc, pour enchaîner avec l'accroche noire.
- Avis clients plus tard : la section « WW · Fiche produit » accepte les blocs d'applications
  (« Ajouter un bloc » › Applications), par exemple un widget d'avis, uniquement avec de vrais avis.

## Couleur des boutons principaux

Par défaut, les boutons principaux (« Choisir mon pack », « Ajouter au panier ») sont violets (#4a53ff).
Une option « noir et blanc » est prête à la fin de `ww-premium.css` : il suffit de supprimer
les deux lignes marquées [SUPPRIMER POUR ACTIVER].

## Bon à savoir

- « Ajouter au panier » mène à la page panier (au lieu d'ouvrir le tiroir panier d'Horizon).
  Le paiement rapide (Shop Pay, etc.) reste disponible juste en dessous.
- Les prix, noms, photos et descriptions viennent directement de vos produits Shopify :
  si vous les modifiez dans l'administration, la page suit automatiquement.
- Si un délai ou une condition change (livraison, retours…), changez-le partout :
  politiques, textes de ces sections et Google Merchant Center.

## Ce qui n'a PAS été inventé

Tous les textes reprennent les informations déjà présentes sur la boutique : contenu des packs,
caractéristiques du tapis (1–10 km/h, 15 %, 136 kg, triple amortissement, rangement à plat),
livraison offerte en 5 à 7 jours ouvrés depuis la France, 14 jours pour changer d'avis,
garantie légale de 2 ans, moyens de paiement, programme 30 jours (PDF) du Pack Ultimate.
Aucun avis, note, badge de confiance, certification, compte à rebours ni promotion.
