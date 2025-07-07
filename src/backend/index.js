// Service Worker for MapTab Extension
console.log('MapTab Service Worker initialized!')

// Service Worker Event Listeners
self.addEventListener('install', (event) => {
  console.log('MapTab Service Worker installing...')
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  console.log('MapTab Service Worker activating...')
  event.waitUntil(self.clients.claim())
})

// Handle extension messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received in service worker:', request)

  // Handle different message types
  switch (request.type) {
    case 'PING':
      sendResponse({ status: 'PONG' })
      break
    case 'GET_DATA':
      // Handle data requests
      sendResponse({ data: 'Service worker is working!' })
      break
    default:
      sendResponse({ error: 'Unknown message type' })
  }

  return true // Keep the message channel open for async responses
})

// Handle extension startup
chrome.runtime.onStartup.addListener(() => {
  console.log('MapTab extension started!')
})

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  console.log('MapTab extension installed:', details.reason)

  if (details.reason === 'install') {
    // First time installation
    console.log('Welcome to MapTab!')
  }
})

// Handle tab updates (optional - for new tab functionality)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url === 'chrome://newtab/') {
    console.log('New tab opened - MapTab will handle this')
  }
})
