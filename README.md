# Galerie R. Haguenauer

Site statique en français pour présenter les tableaux et les dessins de R. Haguenauer. Il s’agit d’une galerie de découverte, sans prix, paiement ni vente en ligne.

## Publier avec GitHub Pages

1. Créez un dépôt GitHub et ajoutez-y les fichiers du site, notamment `index.html`, `styles.css`, `script.js`, `images`, `.github` et `scripts`.
2. Dans **Settings → Pages**, choisissez **GitHub Actions** comme source de publication.
3. Envoyez les fichiers sur la branche `main`. Le workflow publiera le site et affichera son adresse dans **Actions**.

Les images de la galerie sont optimisées dans `images`. Les photos originales du dossier `Tableaux-Haguenauer-1-20261015T204452Z-1-001` restent sur votre ordinateur et sont ignorées par Git pour éviter de gonfler le dépôt. Le workflow prépare uniquement les pages et les images optimisées dans `_site`.

## Prévisualiser sur son ordinateur

Ouvrez `index.html` dans un navigateur. Pour reconstruire le dossier de publication, exécutez `./scripts/prepare-site.ps1` dans PowerShell.
