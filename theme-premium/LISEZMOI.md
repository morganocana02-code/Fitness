# Refonte WhisperWalk « confiance et achat » — guide d'installation

Ces fichiers s'ajoutent à votre thème Horizon. Ils ne remplacent ni l'en-tête, ni le pied de page,
ni le panier, ni le paiement : le fonctionnement e-commerce reste celui de Shopify.
Rien n'a été installé sur votre boutique : c'est vous qui choisissez quand le faire.

## L'idée

Chaque section répond, dans l'ordre, à une question qu'un client se pose avant d'acheter :

1. Qu'est-ce que c'est, combien ça coûte, quand vais-je le recevoir, puis-je vous joindre ? (WW · Accroche)
2. Quel pack choisir, que contient le carton ? (WW · Packs, avec achat direct)
3. Qu'est-ce qui change d'un pack à l'autre ? (WW · Comparatif, avec achat direct)
4. Est-ce que ça trouve sa place dans ma journée ? (WW · Moments)
5. Que vaut le tapis ? (WW · Le tapis en chiffres)
6. Que se passe-t-il après ma commande ? (WW · Étapes de commande)
7. Et si ça ne va pas ? (WW · Engagements, avec les moyens de paiement)
8. Qui êtes-vous ? (WW · Qui sommes-nous : identité, adresse, téléphone, e-mail, politiques)
9. Mes dernières questions (WW · Questions)
10. J'y vais (WW · Appel final, avec un accès direct à chaque pack)

Pour vendre davantage sans abîmer la confiance :
- un bouton « Ajouter au panier » sur chaque carte et dans le comparatif, avec « Paiement sécurisé ·
  14 jours pour changer d'avis » juste en dessous ;
- une date de livraison estimée et concrète (« Commandez aujourd'hui : livraison estimée entre le…
  et le… »), calculée à partir de vos délais, sans les week-ends ni les jours fériés ;
- une barre fixe en bas de l'écran sur mobile (« Voir les packs » sur l'accueil, « Ajouter au panier »
  sur la fiche) ;
- aucune fausse urgence, aucun compte à rebours, aucune promotion ni aucun avis inventé.

La confiance, partout, à partir de faits vérifiables :
- Accroche : drapeau français, « Vendu par WhisperWalk – Morgan OCANA (EI), à Dijon · SIREN », logos des
  moyens de paiement, et état du service client en temps réel (« ouvert · jusqu'à 18h » ou
  « fermé · réouverture demain à 9h »), calculé d'après vos horaires publiés et les jours fériés.
- Comparatif : « 14 jours pour changer d'avis » et « Garantie légale de 2 ans » pour chaque pack.
- Après votre commande : la procédure de retour en 4 étapes, telle qu'écrite dans votre politique.
- Engagements (9) : livraison, rétractation, remboursement, garantie, colis perdu ou abîmé, paiement,
  données jamais vendues, service client, recours gratuit au conciliateur ; puis le rappel de vos droits
  avec les articles de loi cités dans vos CGV.
- Qui sommes-nous : immatriculation au RNE, TVA, hébergeur du site (Shopify), recours en cas de litige.
- Questions (13) : appeler avant de commander, colis en retard ou perdu, données personnelles, désaccord.
- Fiche produit : colis perdu remplacé ou remboursé, annulation avant l'expédition, volet
  « En cas de problème », identité du vendeur et état du service client dans la carte de contact.
- Appel final : « Vendu par… », adresse et SIREN.

Chaque phrase reprend une information de vos politiques publiées (mises à jour le 22 octobre 2026),
de vos mentions légales, de vos CGV ou de vos fiches produits. Aucun avis, note, badge, certification,
compte à rebours ni promotion.

Fiche produit (modèle « ww-premium ») : galerie, nom, « Vendu par WhisperWalk – Morgan OCANA (EI), à Dijon »,
prix total, bouton « Ajouter au panier · prix » et paiement rapide, date de livraison estimée,
lien « Vous hésitez ? Comparer les 3 packs », contenu exact du carton, moyens de paiement, engagements,
détails dépliables, contact direct, description, comparatif (le pack consulté est mis en évidence),
étapes de commande, barre d'achat fixe sur mobile.

## Où placer chaque fichier

Dans Shopify : Boutique en ligne › Thèmes › sur une COPIE du thème : ⋯ › Modifier le code.

| Fichier | Dossier dans Shopify | Action |
|---|---|---|
| assets/ww-premium.css | Assets | « Ajouter un fichier » › créer `ww-premium.css` |
| assets/ww-premium.js | Assets | « Ajouter un fichier » › créer `ww-premium.js` |
| snippets/ww-icon.liquid | Snippets | « Ajouter un snippet » › `ww-icon` |
| snippets/ww-coordonnees.liquid | Snippets | `ww-coordonnees` |
| snippets/ww-pack-card.liquid | Snippets | `ww-pack-card` |
| sections/ww-hero.liquid | Sections | « Ajouter une section » › `ww-hero` |
| sections/ww-packs.liquid | Sections | `ww-packs` |
| sections/ww-comparatif.liquid | Sections | `ww-comparatif` |
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
Ordre conseillé : le CSS et le JS, les 3 snippets, les 11 sections, puis les 2 modèles (ils utilisent les sections).

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
le téléphone, l'e-mail, les horaires et les délais de livraison (5 à 7 jours ouvrés). Toutes les sections s'en servent, pour que ces informations
restent identiques partout, comme l'exige Google Merchant Center.
Si l'une change : modifiez-la dans ce fichier, puis dans vos politiques et dans Merchant Center.
Exceptions, modifiables dans l'éditeur de thème : dans la FAQ, la réponse « Qui se cache derrière
WhisperWalk ? » cite le SIREN et Dijon, et la réponse « Puis-je vous appeler avant de commander ? »
cite le téléphone, l'e-mail et les horaires.

## Réglages dans l'éditeur de thème

- Accroche : « Pack mis en avant » (Pack Essentiel par défaut), « Collection des packs » (sert au prix
  « à partir de », calculé automatiquement), 4 garanties cochées, téléphone et e-mail affichés.
- Fiche produit : un bloc « Contenu du carton » par pack. Si le contenu d'un pack change,
  modifiez ce bloc en même temps que la description du produit.
- Date de livraison estimée (accroche, cartes, fiche) : elle se calcule seule à partir des délais
  du fichier `ww-coordonnees` (5 à 7 jours ouvrés, sans les week-ends ni les jours fériés).
- Packs : chaque carte accepte une « Photo de la carte » facultative, qui remplace la photo principale
  du produit sur la carte uniquement.
- Comparatif : une ligne par élément. Écrivez « oui » pour une coche, « non » pour un tiret,
  ou un texte court (par exemple « Offert »).
- Barres fixes sur mobile : désactivables dans « WW · Accroche » et « WW · Fiche produit ».
  L'application EA Sticky Cart est active sur votre boutique : si elle affiche déjà sa propre barre
  d'achat sur la fiche produit, gardez une seule des deux.
- Qui sommes-nous : un « mot personnel » facultatif (votre photo et quelques phrases avec vos mots).
  Rien ne s'affiche tant qu'il est vide.
- Avis clients plus tard : la section « WW · Fiche produit » accepte les blocs d'applications
  (« Ajouter un bloc » › Applications), uniquement avec de vrais avis.
- Barre d'annonce (réglages Horizon) : fond violet #4a53ff, texte blanc.

## Vidéo de l'accroche

La section « WW · Accroche » accepte une vidéo. Elle remplace la photo du pack : lecture automatique
sans son, en boucle, avec un bouton pause. Elle ne démarre pas toute seule si le visiteur a demandé
à réduire les animations. Tant qu'aucune vidéo n'est choisie, la photo du pack mis en avant s'affiche.

1. Shopify : Contenu › Fichiers › Importer des fichiers › choisir la vidéo.
2. Boutique en ligne › Thèmes › Personnaliser › WW · Accroche › Vidéo › sélectionner la vidéo.

Format conseillé pour la vidéo générée par IA :
- MP4, carré (1080 × 1080) ou vertical 4:5 (1080 × 1350), pour bien remplir l'écran sur mobile ;
- 6 à 12 secondes, avec une fin qui rejoint le début (boucle sans coupure) ;
- sans son (elle est lue en muet) et sans texte incrusté ;
- moins de 10 Mo pour un chargement rapide.
Elle doit montrer le tapis réellement livré, avec ses vraies caractéristiques (inclinaison, vitesse,
guidon, écran) : une vidéo qui promet plus que le produit fait perdre la confiance et peut être
sanctionnée par Google.

## Nouveau tapis dans les trois packs

- La section « WW · Le tapis en chiffres » est masquée (pas supprimée) : elle affichait les chiffres
  de l'ancien tapis (15 %, 1–10 km/h, 136 kg). Elle reviendra avec la fiche technique du nouveau tapis.
- Les textes « Moments » ne citent plus de vitesse ni d'inclinaison.
- À mettre à jour avec la fiche technique : l'accroche (« pliable et discret, qui se range sous le lit
  ou le bureau »), les phrases des packs (« se range à plat sous le lit », « le tapis se glisse dessous »),
  « 1 tapis de marche pliable » dans le contenu des packs, et les descriptions des produits dans Shopify.
- Dans Shopify, les photos, titres, descriptions et caractéristiques des 3 packs doivent être changés
  en même temps, puis le flux Google Merchant Center (Simprosys) synchronisé : des informations
  différentes entre la boutique et Google peuvent être signalées comme « déclarations trompeuses ».

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
