
module.exports = {
  name: 'MapTab',
  version: '1.0.0',
  description: 'A modern Chrome extension that transforms your new tab page into a productivity hub with integrated search engines, bookmarks, and recent posts.',
  author: 'yura',
  manifest_version: 3,
  icons: { '16': 'icons/16.png', '128': 'icons/128.png' },
  permissions: [
    'activeTab',
    'tabs',
    'cookies',
    'contextMenus',
    'storage',
    'notifications',
    'identity',
    'identity.email',
    'bookmarks'
  ],
  chrome_url_overrides: {
    'newtab': 'pages/app.html'
  },
  host_permissions: [
    '<all_urls>',
    '*://*/*'
  ],
  action: {
    default_title: 'MapTab - New Tab Extension',
    default_popup: 'pages/popup.html'
  },
  background: {
    service_worker: 'js/background.js'
  },
  devtools_page: 'pages/devtools.html',
  options_page: 'pages/options.html',
  content_scripts: [{
    js: [ 'js/inject.js' ],
    run_at: 'document_end',
    matches: ['<all_urls>'],
    all_frames: true
  }],
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self'"
  },
  web_accessible_resources: [{
    resources: [ 'panel.html', 'js/content.js' ],
    matches: ['<all_urls>']
  }]
}
