# Refonte WhisperWalk « confiance » — guide d'installation

Ces fichiers s'ajoutent à votre thème Horizon. Ils ne remplacent ni l'en-tête, ni le pied de page,
ni le panier, ni le paiement : le fonctionnement e-commerce reste celui de Shopify.
Rien n'a été installé sur votre boutique : c'est vous qui choisissez quand le faire.

## L'idée

Chaque section répond, dans l'ordre, à une question qu'un client se pose avant d'acheter :

1. Qu'est-ce que c'est, combien ça coûte, puis-je vous joindre ? (WW · Accroche)
2. Quel pack choisir, que contient le carton ? (WW · Packs)
3. Est-ce que ça trouve sa place dans ma journée ? (WW · Moments)
4. Que vaut le tapis ? (WW · Le tapis en chiffres)
5. Que se passe-t-il après ma commande ? (WW · Étapes de commande)
6. Et si ça ne va pas ? (WW · Engagements, avec les moyens de paiement)
7. Qui êtes-vous ? (WW · Qui sommes-nous : identité, adresse, téléphone, e-mail, politiques)
8. Mes dernières questions (WW · Questions)
9. J'y vais (WW · Appel final)

Chaque phrase reprend une information de vos politiques publiées (mises à jour le 22 octobre 2026)
ou de vos fiches produits. Aucun avis, note, badge, certification, compte à rebours ni promotion.

Fiche produit (modèle « ww-premium ») : galerie, nom, « Vendu par WhisperWalk – Morgan OCANA (EI), à Dijon »,
prix total, bouton d'achat et paiement rapide, date de livraison estimée, contenu exact du carton,
moyens de paiement, engagements, détails dépliables, contact direct, description, étapes de commande,
comparaison des 3 packs.

## Où placer chaque fichier

Dans Shopify : Boutique en ligne › Thèmes › sur une COPIE du thème : ⋯ › Modifier le code.

| Fichier | Dossier dans Shopify | Action |
|---|---|---|
| assets/ww-premium.css | Assets | « Ajouter un fichier » › créer `ww-premium.css` |
| snippets/ww-icon.liquid | Snippets | « Ajouter un snippet » › `ww-icon` |
| snippets/ww-coordonnees.liquid | Snippets | `ww-coordonnees` |
| snippets/ww-pack-card.liquid | Snippets | `ww-pack-card` |
| sections/ww-hero.liquid | Sections | « Ajouter une section » › `ww-hero` |
| sections/ww-packs.liquid | Sections | `ww-packs` |
| sections/ww-moments.liquid | Sections | `ww-moments` |
| sections/ww-tapis.liquid | Sections | `ww-tapis` |
| sections/ww-etapes.liquid | Sections | `ww-etapes` |
| sections/ww-garanties.liquid | Sections | `ww-garanties` |
| sections/ww-vendeur.liquid | Sections | `ww-vendeur` |
| sections/ww-faq.liquid | Sections | `ww-faq` |
| sections/ww-cta.liquid | Sections | `ww-cta` |
| sections/ww-produit.liquid | Sections | `ww-produit` |
| templates/product.ww-premium.json | Templates | « Ajouter un modèle » › produit › JSON › nom `ww-premium` |
| templates/index.json | Templates | Remplacer tout le contenu de `index.json` existant |

Pour chaque fichier : créer le fichier vide avec le bon nom, coller tout le contenu, puis Enregistrer.
Ordre conseillé : le CSS, les 3 snippets, les 10 sections, puis les 2 modèles (ils utilisent les sections).

## Mise en ligne en toute sécurité

1. Dupliquer le thème en ligne et travailler UNIQUEMENT sur la copie.
2. Ajouter les fichiers, puis cliquer sur « Aperçu » de la copie.
3. Fiche produit : sur chaque pack (Produits › le pack › Modèle de thème), choisir `ww-premium`.
   Attention : ce choix vaut aussi pour le thème en ligne. Faites-le juste avant de publier la copie,
   sinon le thème actuel affichera sa fiche produit par défaut en attendant.
4. Vérifier sur mobile et sur ordinateur : accueil, 3 fiches, ajout au panier, paiement, liens des politiques.
5. Publier la copie.

## Vos coordonnées : un seul fichier

`snippets/ww-coordonnees.liquid` contient le nom commercial, l'exploitant, le SIREN, l'adresse,
le téléphone, l'e-mail et les horaires. Toutes les sections s'en servent, pour que ces informations
restent identiques partout, comme l'exige Google Merchant Center.
Si l'une change : modifiez-la dans ce fichier, puis dans vos politiques et dans Merchant Center.
Seule exception : la réponse « Qui se cache derrière WhisperWalk ? » de la FAQ cite le SIREN et Dijon
(modifiable dans l'éditeur de thème).

## Réglages dans l'éditeur de thème

- Accroche : « Pack mis en avant » (Pack Essentiel par défaut), « Collection des packs » (sert au prix
  « à partir de », calculé automatiquement), 4 garanties cochées, téléphone et e-mail affichés.
- Fiche produit : un bloc « Contenu du carton » par pack. Si le contenu d'un pack change,
  modifiez ce bloc en même temps que la description du produit.
- Fiche produit : la date de livraison estimée se calcule seule à partir de vos délais
  (5 à 7 jours ouvrés, sans les week-ends ni les jours fériés).
- Qui sommes-nous : un « mot personnel » facultatif (votre photo et quelques phrases avec vos mots).
  Rien ne s'affiche tant qu'il est vide.
- Avis clients plus tard : la section « WW · Fiche produit » accepte les blocs d'applications
  (« Ajouter un bloc » › Applications), uniquement avec de vrais avis.
- Barre d'annonce (réglages Horizon) : fond violet #4a53ff, texte blanc.

## Photos : le point le plus important pour la confiance

Chaque photo doit montrer exactement ce qui est livré, avec les mêmes caractéristiques que la fiche
(inclinaison, éléments du pack). Une photo qui montre autre chose fait perdre la confiance du client
et peut être sanctionnée par Google comme « déclaration trompeuse ».
Format conseillé : carré (par exemple 2048 × 2048). Les photos ne sont jamais coupées.

## Couleur des boutons principaux

Par défaut, les boutons principaux (« Choisir mon pack », « Ajouter au panier ») sont violets (#4a53ff).
Une option « noir et blanc » est prête à la fin de `ww-premium.css` : il suffit de supprimer
les deux lignes marquées [SUPPRIMER POUR ACTIVER].

## Bon à savoir

- « Ajouter au panier » mène à la page panier (au lieu d'ouvrir le tiroir panier d'Horizon).
  Le paiement rapide (Shop Pay, etc.) reste disponible juste en dessous.
- Les logos des moyens de paiement sont fournis par Shopify, selon les moyens activés sur la boutique.
- Les prix, noms, photos et descriptions viennent directement de vos produits Shopify.
- Le gris des textes secondaires est un peu plus foncé que dans la référence de style, pour la lisibilité.
