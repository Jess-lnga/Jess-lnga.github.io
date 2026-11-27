# Jess-lnga.github.io

Portfolio de Jérôme Essola Elanga. Ouvrir `index.html` dans un navigateur pour le consulter ; aucune installation nécessaire.

## Ajouter des images et vidéos

1. Placer les fichiers dans `Images`, éventuellement dans les sous-dossiers existants.
2. Dans `index.html`, rechercher `MÉDIAS À PERSONNALISER`.
3. Dans la liste du projet concerné, remplacer `src: ''` par le chemin du fichier, relatif à `index.html`.

```js
{ type: 'image', src: 'Images/Hexapod and Quadruped/robot.jpg', caption: 'Le prototype assemblé', alt: 'Vue de face du robot quadrupède' },
{ type: 'video', src: 'Images/Hexapod and Quadruped/marche.mp4', caption: 'Test de marche' }
```

Les noms ci-dessus sont des exemples : ils doivent correspondre exactement à vos fichiers, majuscules et extensions comprises. Privilégier JPG, PNG ou WebP pour les images et MP4 (H.264) pour les vidéos. Les vidéos peuvent aussi être rangées dans `Images`.

Dupliquer ou supprimer une entrée pour ajouter ou retirer une diapositive. Les flèches, le compteur et les boutons de sélection s’adaptent automatiquement. Une source vide affiche un emplacement en attente. Un fichier inaccessible affiche « Média indisponible ».

Les galeries se commandent avec les boutons ou les flèches du clavier lorsque le focus est dans la galerie. Les vidéos ont leurs propres commandes et se mettent en pause au changement de diapositive. Aucun défilement automatique n’interrompt leur lecture.

Les descriptions se modifient directement dans les éléments `article`. Les styles et le JavaScript sont inclus dans `index.html`. Les médias existants sont référencés dans `medias` ; l’affiche technique du PID 2D sert uniquement de source au descriptif et n’est pas affichée.

Sur écran large, la grille associe Table PID / Table PID 2D, E-puck / Thymio, BB-M8 / Vision Bot, puis Hexapode / projets de programmation. Sur mobile, ces projets apparaissent sur une seule colonne. Les médias numérotés suivent leur ordre numérique ; la vidéo BB-M8 vient après ses trois photos.

Pour publier avec GitHub Pages, inclure `index.html`, les médias et le PDF lié dans `Documents` dans le dépôt.

## Vidéos compressées pour le web

Les originaux `Images/EPFLRT LiDAR/Demo point cloud.mov` et `Images/Thymio Operator/Video 1.mp4` sont conservés localement et exclus par `.gitignore`. Le site utilise `demo-point-cloud-web.mp4` et `video-1-web.mp4` dans les mêmes dossiers. Les copies utilisent H.264, 30 images/s et un en-tête MP4 optimisé pour démarrer la lecture avant la fin du téléchargement. L’outil local `.codex-video-tools/` est également ignoré.

## Langues

Le HTML est en anglais par défaut. Le sélecteur EN / FR traduit le contenu et les libellés accessibles, sans réinitialiser les vidéos. La préférence est conservée dans le navigateur si le stockage local est disponible. Les traductions se trouvent dans `i18n.js` : inclure ce fichier dans chaque publication. Pour modifier un texte, mettre à jour sa version anglaise dans `index.html` et la paire français / anglais correspondante dans `i18n.js`. Le CV reste le PDF fourni.

## Lecture et chargement des médias

Inclure `media.js` dans le déploiement. Les vidéos reçoivent leur source à moins de 300 pixels de l’écran ; la lecture automatique ne commence que lorsqu’au moins 15 % de la vidéo est visible. Elle est suspendue hors écran et dans les onglets masqués. Une pause manuelle reste respectée lors du défilement. Le changement de diapositive libère la source précédente. La préférence système de réduction des animations désactive le démarrage automatique ; les commandes natives restent disponibles.

Les versions `-web.mp4` sont des copies H.264 optimisées (30 images/s, dimensions conservant les proportions, démarrage progressif). Les originaux optimisés sont conservés localement, ignorés par Git et retirés du suivi courant ; les anciens commits restent inchangés.

Les six photos volumineuses ont aussi une copie `-web.jpg` (JPEG progressif, côté maximal de 1600 pixels). Les originaux restent disponibles localement et sont exclus du suivi Git courant.
