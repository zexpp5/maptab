# MapTab - Chrome New Tab Extension

A modern Chrome extension that transforms your new tab page into a productivity hub with integrated search engines, bookmarks, and recent posts. Built with Vue.js and modern web technologies.

## 🚀 Features

- **Integrated Search Engines**: Quick access to multiple search engines from your new tab
- **Smart Bookmarks**: Organize and access your favorite sites efficiently
- **Recent Posts**: Stay updated with your latest content and feeds
- **Customizable Interface**: Personalize your new tab experience
- **Modern UI**: Clean, responsive design built with Element UI
- **Fast Performance**: Optimized for speed and efficiency

## 🛠️ Tech Stack

- **Frontend**: Vue.js 2.5.2, Element UI 2.0.1
- **State Management**: Vuex 3.0.0
- **Routing**: Vue Router 3.0.1
- **Styling**: SCSS with modern CSS features
- **Build Tool**: Webpack 3.8.1
- **Package Manager**: Yarn
- **Database**: PouchDB (for local storage)

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
- Integrated search functionality
- Bookmark management
- Recent posts display
- Customizable widgets

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

Edit the search configuration in your Vue components to add new search engines:

```javascript
// Example search engine configuration
const searchEngines = {
  google: {
    name: 'Google',
    url: 'https://www.google.com/search?q=',
    icon: 'google-icon.png'
  },
  // Add more engines here
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
- Verify all permissions are granted

**Changes not appearing:**
- Reload the extension in Chrome's extension page
- Clear browser cache if needed
- Check the browser console for errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vue.js](https://vuejs.org/)
- UI components from [Element UI](https://element.eleme.io/)
- Chrome Extension development tools and templates

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review Chrome's extension documentation

---

**Happy coding! 🎉**