# MapTab - Extension Chrome Nouvel Onglet

[English](README.md) | [中文](README.zh.md) | [日本語](README.ja.md) | [Français](README.fr.md) | [Español](README.es.md) | [Русский](README.ru.md)

Une extension Chrome moderne qui transforme votre page de nouvel onglet en un hub de productivité complet avec des moteurs de recherche intégrés, des modèles IA, des favoris et l'historique du navigateur. Construite avec Vue.js et des technologies web modernes.

## 🚀 Fonctionnalités

### 🔍 **Recherche Multi-Plateformes**
- **Moteurs de recherche**: Google, Kagi, Perplexity, V2EX, 小红书 (Xiaohongshu), 淘宝 (Taobao), 知乎 (Zhihu)
- **Modèles IA**: Accès à Claude Sonnet 4, o3, GPT-4.1, GPT-4.1-mini via Poe
- **Saisie intelligente**: Zone de texte multi-lignes extensible pour les requêtes et prompts longs
- **Accès rapide**: Recherche en un clic sur plusieurs plateformes

### 📚 **Gestion Intelligente des Favoris**
- **Affichage hiérarchique**: Structure de dossiers extensible correspondant à l'organisation de Chrome
- **Indicateurs visuels**: Icônes de dossiers, icônes de documents et flèches d'expansion/réduction
- **Clic pour développer**: Dossiers interactifs qui affichent/masquent leur contenu
- **Accès direct**: Cliquez sur n'importe quel favori pour l'ouvrir dans un nouvel onglet

### 📖 **Intégration de l'Historique du Navigateur**
- **Historique récent**: Affiche votre historique de navigation récent
- **Compteurs de visites**: Montre combien de fois vous avez visité chaque page
- **Horodatages intelligents**: Affichage du temps relatif (ex: "il y a 2h", "il y a 3j")
- **Accès rapide**: Cliquez sur n'importe quel élément d'historique pour revisiter

### 🎨 **Interface Moderne**
- **Disposition à deux écrans**: Contenu principal + deuxième écran vide pour les fonctionnalités futures
- **Morphisme de verre**: Beau design semi-transparent avec effet de flou d'arrière-plan
- **Design responsive**: S'adapte à différentes tailles d'écran
- **Animations fluides**: Effets de survol et transitions

### ⚡ **Performance et UX**
- **Chargement rapide**: Optimisé pour un démarrage rapide
- **Panneaux défilables**: Défilement indépendant pour les favoris et l'historique
- **Raccourcis clavier**: Entrée pour rechercher, Shift+Entrée pour nouvelle ligne
- **Redimensionnement automatique**: Zone de texte qui grandit dynamiquement avec le contenu

## 🛠️ Stack Technique

- **Frontend**: Vue.js 2.5.2, Element UI 2.0.1
- **Gestion d'état**: Vuex 3.0.0
- **Routage**: Vue Router 3.0.1
- **Styling**: SCSS avec fonctionnalités CSS modernes
- **Outil de build**: Webpack 3.8.1
- **Gestionnaire de paquets**: Yarn
- **APIs Chrome**: Favoris, Historique, Onglets

## 📁 Structure du Projet

```
maptab/
├── core/                    # Fichiers de configuration Webpack
│   ├── webpack.base.js     # Configuration webpack de base
│   ├── webpack.dev.js      # Configuration de développement
│   └── webpack.prod.js     # Configuration de production
├── src/                    # Code source
│   ├── backend/           # Scripts d'arrière-plan
│   ├── content/           # Scripts de contenu (s'exécutent dans les pages web)
│   ├── devtools/          # Intégration Chrome DevTools
│   ├── ext/               # Utilitaires et scripts partagés
│   ├── options/           # Page d'options de l'extension
│   ├── popup/             # Interface popup de l'extension
│   ├── tab/               # Page nouvel onglet (application principale)
│   └── manifest.js        # Manifeste de l'extension Chrome
├── static/                # Assets statiques
│   └── icons/             # Icônes de l'extension
└── package.json           # Dépendances et scripts
```

## 🚀 Démarrage Rapide

### Prérequis

- Node.js (v16 ou supérieur)
- Gestionnaire de paquets Yarn
- Navigateur Google Chrome

### Installation

1. **Cloner le repository**
   ```bash
   git clone <your-repo-url>
   cd maptab
   ```

2. **Installer les dépendances**
   ```bash
   yarn
   ```

3. **Construire l'extension**
   ```bash
   yarn build
   ```

4. **Charger dans Chrome**
   - Ouvrir Chrome et aller à `chrome://extensions/`
   - Activer le "Mode développeur" (bascule en haut à droite)
   - Cliquer sur "Charger l'extension non empaquetée"
   - Sélectionner le dossier `core/build` de votre projet

## 🎯 Comment Utiliser

### **Recherche et Prompts IA**
1. **Tapez votre requête** dans la boîte de recherche (supporte le texte multi-lignes)
2. **Choisissez votre plateforme**:
   - **Moteurs de recherche**: Cliquez sur Google, Kagi, Perplexity, etc.
   - **Modèles IA**: Cliquez sur Claude, o3, GPT-4.1, etc.
3. **Les résultats s'ouvrent automatiquement dans de nouveaux onglets**

### **Favoris**
1. **Parcourez vos dossiers** - cliquez pour développer/réduire
2. **Voyez tous vos favoris** dans leur structure organisée
3. **Cliquez sur n'importe quel favori** pour l'ouvrir dans un nouvel onglet

### **Historique**
1. **Voyez les pages récentes** que vous avez visitées
2. **Voyez les compteurs de visites** et horodatages
3. **Cliquez sur n'importe quel élément** pour revisiter la page

## 🛠️ Développement

### Scripts Disponibles

- `yarn dev` - Build en mode développement avec rechargement à chaud
- `yarn build` - Build de production
- `yarn lint` - Exécuter ESLint pour vérifier la qualité du code

### Workflow de Développement

1. **Démarrer le mode développement**
   ```bash
   yarn dev
   ```

2. **Faire des modifications** aux composants Vue dans le répertoire `src/`

3. **Recharger l'extension** dans la page des extensions Chrome pour voir les changements

4. **Construire pour la production** quand prêt
   ```bash
   yarn build
   ```

## 📋 Composants de l'Extension

### 🎯 Page Nouvel Onglet (`src/tab/`)
L'interface principale qui apparaît quand vous ouvrez un nouvel onglet. Fonctionnalités :
- **Section de recherche**: Recherche multi-moteurs avec intégration de modèles IA
- **Panneau des favoris**: Affichage hiérarchique et extensible des favoris
- **Panneau d'historique**: Historique de navigation récent avec compteurs de visites
- **Disposition à deux écrans**: Contenu principal + deuxième écran vide

### 🔧 Page d'Options (`src/options/`)
Permet aux utilisateurs de personnaliser le comportement de l'extension :
- Préférences de moteurs de recherche
- Organisation des favoris
- Paramètres de thème
- Options de confidentialité

### 🎪 Popup (`src/popup/`)
Interface d'accès rapide lors du clic sur l'icône de l'extension :
- Recherche rapide
- Favoris récents
- Statut de l'extension

### 🔍 DevTools (`src/devtools/`)
Intégration des outils de développement pour le débogage et le développement.

### 📄 Scripts de Contenu (`src/content/`)
Scripts qui s'exécutent dans le contexte des pages web pour des fonctionnalités améliorées.

### 🔄 Arrière-plan (`src/backend/`)
Processus d'arrière-plan qui gèrent :
- Synchronisation des données
- Notifications
- Interactions API
- Gestion d'état

## 🎨 Personnalisation

### Ajouter de Nouveaux Moteurs de Recherche

Éditez les méthodes de recherche dans `src/tab/root.vue` :

```javascript
// Exemple : Ajouter un nouveau moteur de recherche
searchNewEngine () {
  if (this.searchQuery.trim()) {
    chrome.tabs.create({ url: `https://newengine.com/search?q=${encodeURIComponent(this.searchQuery)}` })
  }
}
```

### Ajouter de Nouveaux Modèles IA

Ajoutez de nouveaux boutons et méthodes de modèles IA :

```javascript
// Exemple : Ajouter un nouveau modèle IA
searchNewAI () {
  if (this.searchQuery.trim()) {
    chrome.tabs.create({ url: `https://poe.com/NewModel?prompt=${encodeURIComponent(this.searchQuery)}` })
  }
}
```

### Styling

Le projet utilise SCSS pour le styling. Les fichiers de style principaux se trouvent dans chaque répertoire de composant. Les styles globaux peuvent être ajoutés aux fichiers de style partagés.

## 📦 Construction pour la Distribution

1. **Construire l'extension**
   ```bash
   yarn build
   ```

2. **L'extension construite** sera dans le répertoire `core/build/`

3. **Pour le Chrome Web Store**:
   - Compresser le contenu de `core/build/`
   - Télécharger vers le Chrome Web Store

## 🔧 Dépannage

### Problèmes Courants

**La construction échoue avec une erreur node-sass:**
- Ce projet utilise le `sass` moderne au lieu du `node-sass` déprécié
- Si vous rencontrez des problèmes, exécutez `yarn` pour réinstaller les dépendances

**L'extension ne se charge pas:**
- Assurez-vous de charger depuis le répertoire `core/build/`
- Vérifiez les messages d'erreur dans la page des extensions Chrome
- Vérifiez que toutes les permissions sont accordées (favoris, historique, onglets)

**Les changements n'apparaissent pas:**
- Rechargez l'extension dans la page des extensions Chrome
- Effacez le cache du navigateur si nécessaire
- Vérifiez les erreurs dans la console du navigateur

**La recherche ne fonctionne pas:**
- Assurez-vous que l'extension a les permissions nécessaires
- Vérifiez que les URLs de recherche sont correctes
- Vérifiez que les APIs Chrome sont accessibles

## 🤝 Contribution

1. Fork le repository
2. Créer une branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Commiter vos changements (`git commit -m 'Add amazing feature'`)
4. Pousser vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails.

## 🙏 Remerciements

- **Vue.js** pour le framework réactif
- **Element UI** pour la bibliothèque de composants
- **Chrome Extensions API** pour l'intégration navigateur
- **Poe** pour l'accès aux modèles IA 