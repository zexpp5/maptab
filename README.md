# MapTab - Chrome New Tab Extension

A modern Chrome extension that transforms your new tab page into a comprehensive productivity hub with integrated search engines, AI models, bookmarks, and browser history. Built with Vue.js and modern web technologies.

## 🚀 Features

### 🔍 **Multi-Platform Search**
- **Search Engines**: Google, Kagi, Perplexity, V2EX, 小红书 (Xiaohongshu), 淘宝 (Taobao), 知乎 (Zhihu)
- **AI Models**: Claude Sonnet 4, o3, GPT-4.1, GPT-4.1-mini via Poe
- **Smart Input**: Multi-line textarea that expands for longer queries and prompts
- **Quick Access**: One-click search across multiple platforms

### 📚 **Smart Bookmark Management**
- **Hierarchical Display**: Expandable folder structure matching Chrome's organization
- **Visual Indicators**: Folder icons, document icons, and expand/collapse arrows
- **Click to Expand**: Interactive folders that show/hide their contents
- **Direct Access**: Click any bookmark to open in a new tab

### 📖 **Browser History Integration**
- **Recent History**: Display your recent browsing history
- **Visit Counts**: Show how many times you've visited each page
- **Smart Timestamps**: Relative time display (e.g., "2h ago", "3d ago")
- **Quick Access**: Click any history item to revisit

### 🎨 **Modern Interface**
- **Two-Screen Layout**: Main content + blank second screen for future features
- **Glass Morphism**: Beautiful semi-transparent design with backdrop blur
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions throughout

### ⚡ **Performance & UX**
- **Fast Loading**: Optimized for quick startup
- **Scrollable Panes**: Independent scrolling for bookmarks and history
- **Keyboard Shortcuts**: Enter for search, Shift+Enter for new lines
- **Auto-resize Input**: Dynamic textarea that grows with content

## 🛠️ Tech Stack

- **Frontend**: Vue.js 2.5.2, Element UI 2.0.1
- **State Management**: Vuex 3.0.0
- **Routing**: Vue Router 3.0.1
- **Styling**: SCSS with modern CSS features
- **Build Tool**: Webpack 3.8.1
- **Package Manager**: Yarn
- **Chrome APIs**: Bookmarks, History, Tabs

## 📁 Project Structure

```
maptab/
├── core/                    # Webpack configuration files
│   ├── webpack.base.js     # Base webpack config
│   ├── webpack.dev.js      # Development config
│   └── webpack.prod.js     # Production config
├── src/                    # Source code
│   ├── backend/           # Background scripts
│   ├── content/           # Content scripts (runs in web pages)
│   ├── devtools/          # Chrome DevTools integration
│   ├── ext/               # Shared utilities and scripts
│   ├── options/           # Extension options page
│   ├── popup/             # Extension popup interface
│   ├── tab/               # New tab page (main application)
│   └── manifest.js        # Chrome extension manifest
├── static/                # Static assets
│   └── icons/             # Extension icons
└── package.json           # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Google Chrome browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd maptab
   ```

2. **Install dependencies**
   ```bash
   yarn
   ```

3. **Build the extension**
   ```bash
   yarn build
   ```

4. **Load in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `core/build` folder from your project

## 🎯 How to Use

### **Search & AI Prompts**
1. **Type your query** in the search box (supports multi-line text)
2. **Choose your platform**:
   - **Search Engines**: Click Google, Kagi, Perplexity, etc.
   - **AI Models**: Click Claude, o3, GPT-4.1, etc.
3. **Results open in new tabs** automatically

### **Bookmarks**
1. **Browse your folders** - click to expand/collapse
2. **See all bookmarks** in their organized structure
3. **Click any bookmark** to open it in a new tab

### **History**
1. **View recent pages** you've visited
2. **See visit counts** and timestamps
3. **Click any item** to revisit the page

## 🛠️ Development

### Available Scripts

- `yarn dev` - Build for development with hot reload
- `yarn build` - Build for production
- `yarn lint` - Run ESLint to check code quality

### Development Workflow

1. **Start development mode**
   ```bash
   yarn dev
   ```

2. **Make changes** to your Vue components in the `src/` directory

3. **Reload the extension** in Chrome's extension page to see changes

4. **Build for production** when ready
   ```bash
   yarn build
   ```

## 📋 Extension Components

### 🎯 New Tab Page (`src/tab/`)
The main interface that appears when you open a new tab. Features:
- **Search Section**: Multi-engine search with AI model integration
- **Bookmark Pane**: Hierarchical, expandable bookmark display
- **History Pane**: Recent browsing history with visit counts
- **Two-Screen Layout**: Main content + blank second screen

### 🔧 Options Page (`src/options/`)
Allows users to customize the extension behavior:
- Search engine preferences
- Bookmark organization
- Theme settings
- Privacy options

### 🎪 Popup (`src/popup/`)
Quick access interface when clicking the extension icon:
- Quick search
- Recent bookmarks
- Extension status

### 🔍 DevTools (`src/devtools/`)
Developer tools integration for debugging and development.

### 📄 Content Scripts (`src/content/`)
Scripts that run in the context of web pages for enhanced functionality.

### 🔄 Background (`src/backend/`)
Background processes that handle:
- Data synchronization
- Notifications
- API interactions
- State management

## 🎨 Customization

### Adding New Search Engines

Edit the search methods in `src/tab/root.vue`:

```javascript
// Example: Adding a new search engine
searchNewEngine () {
  if (this.searchQuery.trim()) {
    chrome.tabs.create({ url: `https://newengine.com/search?q=${encodeURIComponent(this.searchQuery)}` })
  }
}
```

### Adding New AI Models

Add new AI model buttons and methods:

```javascript
// Example: Adding a new AI model
searchNewAI () {
  if (this.searchQuery.trim()) {
    chrome.tabs.create({ url: `https://poe.com/NewModel?prompt=${encodeURIComponent(this.searchQuery)}` })
  }
}
```

### Styling

The project uses SCSS for styling. Main style files are located in each component directory. Global styles can be added to shared style files.

## 📦 Building for Distribution

1. **Build the extension**
   ```bash
   yarn build
   ```

2. **The built extension** will be in the `core/build/` directory

3. **For Chrome Web Store**:
   - Zip the contents of `core/build/`
   - Upload to the Chrome Web Store

## 🔧 Troubleshooting

### Common Issues

**Build fails with node-sass error:**
- This project uses modern `sass` instead of deprecated `node-sass`
- If you encounter issues, run `yarn` to reinstall dependencies

**Extension not loading:**
- Ensure you're loading from the `core/build/` directory
- Check Chrome's extension page for error messages
- Verify all permissions are granted (bookmarks, history, tabs)

**Changes not appearing:**
- Reload the extension in Chrome's extension page
- Clear browser cache if needed
- Check the browser console for errors

**Search not working:**
- Ensure the extension has the necessary permissions
- Check that the search URLs are correct
- Verify the Chrome APIs are accessible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vue.js** for the reactive framework
- **Element UI** for the component library
- **Chrome Extensions API** for browser integration
- **Poe** for AI model access

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review Chrome's extension documentation

---

**Happy coding! 🎉**