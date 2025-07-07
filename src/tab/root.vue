<template lang="pug">
  .maptab-container
    .header
      h1 MapTab
      p Your Productivity Hub

    .content
      .panes-container
        .pane.bookmarks-pane
          .bookmarks-section
            h2 Bookmarks ({{ allBookmarks.length }} items)
            .debug-info(v-if="allBookmarks.length === 0")
              p Loading bookmarks...
            .bookmarks-list(v-else)
              .bookmark-item(
                v-for="bookmark in allBookmarks"
                :key="bookmark.id"
                :class="{ 'is-folder': bookmark.children && bookmark.children.length > 0, 'is-expanded': expandedFolders.includes(bookmark.id) }"
                @click="handleBookmarkClick(bookmark)"
              )
                .bookmark-content
                  i.el-icon-folder(v-if="bookmark.children && bookmark.children.length > 0")
                  i.el-icon-document(v-else)
                  span.bookmark-title {{ bookmark.title }}
                  span.bookmark-url(v-if="bookmark.url") {{ bookmark.url }}
                  i.expand-icon.el-icon-arrow-right(v-if="bookmark.children && bookmark.children.length > 0")
                .bookmark-children(v-if="bookmark.children && bookmark.children.length > 0 && expandedFolders.includes(bookmark.id)")
                  .bookmark-item(
                    v-for="child in bookmark.children"
                    :key="child.id"
                    class="child-item"
                    @click.stop="handleBookmarkClick(child)"
                  )
                    .bookmark-content
                      i.el-icon-folder(v-if="child.children && child.children.length > 0")
                      i.el-icon-document(v-else)
                      span.bookmark-title {{ child.title }}
                      span.bookmark-url(v-if="child.url") {{ child.url }}
                      i.expand-icon.el-icon-arrow-right(v-if="child.children && child.children.length > 0")
                    .bookmark-children(v-if="child.children && child.children.length > 0 && expandedFolders.includes(child.id)")
                      .bookmark-item(
                        v-for="grandchild in child.children"
                        :key="grandchild.id"
                        class="grandchild-item"
                        @click.stop="handleBookmarkClick(grandchild)"
                      )
                        .bookmark-content
                          i.el-icon-folder(v-if="grandchild.children && grandchild.children.length > 0")
                          i.el-icon-document(v-else)
                          span.bookmark-title {{ grandchild.title }}
                          span.bookmark-url(v-if="grandchild.url") {{ grandchild.url }}

        .pane.history-pane
          .history-section
            h2 History ({{ allHistory.length }} items)
            .debug-info(v-if="allHistory.length === 0")
              p Loading history...
            .history-list(v-else)
              .history-item(
                v-for="history in allHistory"
                :key="history.id"
                @click="handleHistoryClick(history)"
              )
                i.el-icon-document
                .history-content
                  .history-main
                    span.history-title {{ history.title }}
                    span.history-time {{ formatTime(history.lastVisitTime) }}
                  .history-details
                    span.history-url {{ history.url }}
                    span.history-visits(v-if="history.visitCount") ({{ history.visitCount }} visits)
</template>

<script>
export default {
  data: () => ({
    allBookmarks: [],
    allHistory: [],
    expandedFolders: []
  }),

  computed: {},

  created () {
    console.log('MapTab: Component created, loading bookmarks and history...')
    this.loadBookmarks()
    this.loadHistory()
  },

  mounted () {},

  methods: {
    async loadBookmarks () {
      try {
        console.log('MapTab: Starting to load bookmarks...')
        // Get the bookmark tree from Chrome
        const bookmarks = await chrome.bookmarks.getTree()
        console.log('MapTab: Raw bookmarks data:', bookmarks)

        this.allBookmarks = this.processBookmarks(bookmarks)
        console.log('MapTab: Processed bookmarks tree:', this.allBookmarks)
      } catch (error) {
        console.error('MapTab: Error loading bookmarks:', error)
      }
    },

    async loadHistory () {
      try {
        console.log('MapTab: Starting to load history...')
        // Get browser history from Chrome with more detailed information
        const history = await chrome.history.search({
          text: '',
          maxResults: 1000,
          startTime: 0
        })
        console.log('MapTab: Raw history data:', history)

        // Get visit details for each history item to find referrers
        const historyWithReferrers = await Promise.all(
          history.map(async (item) => {
            try {
              // Get all visits for this URL
              const visits = await chrome.history.getVisits({ url: item.url })
              if (visits && visits.length > 0) {
                // Get the most recent visit
                const lastVisit = visits[visits.length - 1]
                let referrerUrl = null

                // If there's a referring visit, try to get its URL
                if (lastVisit.referringVisitId) {
                  try {
                    // We need to search for the referring URL in history
                    // This is a simplified approach - we'll show the visit count instead
                    referrerUrl = `Visited ${visits.length} times`
                  } catch (error) {
                    console.error('Error getting referrer for:', item.url, error)
                  }
                }

                return {
                  ...item,
                  referrer: referrerUrl,
                  visitCount: visits.length
                }
              }
              return item
            } catch (error) {
              console.error('Error getting visits for:', item.url, error)
              return item
            }
          })
        )

        this.allHistory = historyWithReferrers
        console.log('MapTab: Loaded history with visit info:', this.allHistory)
      } catch (error) {
        console.error('MapTab: Error loading history:', error)
      }
    },

    processBookmarks (bookmarks) {
      // Chrome bookmarks.getTree() returns an array with root nodes
      // We need to extract the actual bookmark folders from the root
      const processedBookmarks = []

      bookmarks.forEach(rootNode => {
        if (rootNode.children && rootNode.children.length > 0) {
          // Process each root-level folder (Bookmarks Bar, Other Bookmarks, etc.)
          rootNode.children.forEach(folder => {
            if (folder.title && folder.children) {
              // Only include folders that have a title and children
              const processedFolder = this.processBookmarkNode(folder)
              if (processedFolder.children && processedFolder.children.length > 0) {
                processedBookmarks.push(processedFolder)
              }
            }
          })
        }
      })

      return processedBookmarks
    },

    processBookmarkNode (node) {
      // Skip nodes without a title (usually root nodes)
      if (!node.title) {
        return null
      }

      const processed = {
        id: node.id,
        title: node.title,
        url: node.url || null
      }

      // Process children if they exist
      if (node.children && node.children.length > 0) {
        const processedChildren = node.children
          .map(child => this.processBookmarkNode(child))
          .filter(child => child !== null) // Remove null entries

        if (processedChildren.length > 0) {
          processed.children = processedChildren
        }
      }

      return processed
    },

    handleBookmarkClick (bookmark) {
      if (bookmark.children && bookmark.children.length > 0) {
        // Toggle folder expansion
        this.toggleFolder(bookmark.id)
      } else if (bookmark.url) {
        // Open bookmark in new tab
        chrome.tabs.create({ url: bookmark.url })
      }
    },

    toggleFolder (folderId) {
      const index = this.expandedFolders.indexOf(folderId)
      if (index > -1) {
        // Remove from expanded folders (collapse)
        this.expandedFolders.splice(index, 1)
      } else {
        // Add to expanded folders (expand)
        this.expandedFolders.push(folderId)
      }
    },

    handleHistoryClick (history) {
      if (history.url) {
        // Open history item in new tab
        chrome.tabs.create({ url: history.url })
      }
    },

    formatTime (timestamp) {
      if (!timestamp) return ''

      const date = new Date(timestamp)
      const now = new Date()
      const diffInHours = (now - date) / (1000 * 60 * 60)

      if (diffInHours < 1) {
        return 'Just now'
      } else if (diffInHours < 24) {
        return `${Math.floor(diffInHours)}h ago`
      } else if (diffInHours < 168) { // 7 days
        return `${Math.floor(diffInHours / 24)}d ago`
      } else {
        return date.toLocaleDateString()
      }
    }
  }
}
</script>

<style lang="scss">
.maptab-container {
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;

  .header {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: 3rem;
      margin: 0;
      font-weight: 300;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    p {
      font-size: 1.2rem;
      margin: 10px 0 0 0;
      opacity: 0.9;
    }
  }

  .content {
    max-width: 1400px;
    margin: 0 auto;

    .panes-container {
      display: flex;
      gap: 20px;
      height: calc(100vh - 200px);

      .pane {
        flex: 1;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 20px;
        backdrop-filter: blur(10px);
        overflow-y: auto;

        h2 {
          margin: 0 0 20px 0;
          font-size: 1.5rem;
          font-weight: 400;
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.1);
          padding: 10px 0;
          border-radius: 5px;
          z-index: 10;
        }

        .debug-info {
          text-align: center;
          padding: 20px;
          opacity: 0.8;
        }
      }

      .bookmarks-pane {
        .bookmarks-list {
          .bookmark-item {
            margin: 2px 0;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.05);

            &:hover {
              background: rgba(255, 255, 255, 0.15);
            }

            &.is-folder {
              background: rgba(255, 255, 255, 0.08);
              
              &:hover {
                background: rgba(255, 255, 255, 0.18);
              }
            }

            &.is-expanded {
              .expand-icon {
                transform: rotate(90deg);
              }
            }

            .bookmark-content {
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 12px 16px;

              i {
                font-size: 18px;
                flex-shrink: 0;
                width: 20px;
                text-align: center;

                &.el-icon-folder {
                  color: #ffd700;
                }

                &.el-icon-document {
                  color: #87ceeb;
                }

                &.expand-icon {
                  transition: transform 0.3s ease;
                  color: rgba(255, 255, 255, 0.7);
                }
              }

              .bookmark-title {
                flex: 1;
                font-weight: 500;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              .bookmark-url {
                font-size: 0.85em;
                opacity: 0.7;
                max-width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                flex-shrink: 0;
              }
            }

            .bookmark-children {
              border-left: 2px solid rgba(255, 255, 255, 0.1);
              margin-left: 20px;
              padding-left: 10px;

              .bookmark-item {
                &.child-item {
                  margin-left: 10px;
                  
                  .bookmark-children {
                    margin-left: 30px;
                    
                    .bookmark-item {
                      &.grandchild-item {
                        margin-left: 10px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      .history-pane {
        .history-list {
          .history-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            margin: 4px 0;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.05);

            &:hover {
              background: rgba(255, 255, 255, 0.15);
              transform: translateX(4px);
            }

            i {
              font-size: 18px;
              flex-shrink: 0;
              width: 20px;
              text-align: center;
              color: #87ceeb;
            }

            .history-content {
              flex: 1;
              .history-main {
                display: flex;
                align-items: center;
                gap: 8px;
                .history-title {
                  flex: 1;
                  font-weight: 500;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .history-time {
                  font-size: 0.75em;
                  opacity: 0.5;
                  flex-shrink: 0;
                  min-width: 60px;
                  text-align: right;
                }
              }
              .history-details {
                display: flex;
                align-items: center;
                gap: 8px;
                .history-url {
                  font-size: 0.8em;
                  opacity: 0.6;
                  max-width: 150px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  flex-shrink: 0;
                }
                                 .history-visits {
                   font-size: 0.75em;
                   opacity: 0.5;
                   flex-shrink: 0;
                   min-width: 80px;
                   text-align: right;
                 }
              }
            }
          }
        }
      }
    }
  }
}
</style>