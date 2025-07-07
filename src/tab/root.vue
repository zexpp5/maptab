<template lang="pug">
  .maptab-container
    .header
      h1 MapTab
      p Your Productivity Hub

    .content
      .bookmarks-section
        h2 Bookmarks ({{ allBookmarks.length }} items)
        .debug-info(v-if="allBookmarks.length === 0")
          p Loading bookmarks...
        .bookmarks-list(v-else)
          .bookmark-item(
            v-for="bookmark in allBookmarks"
            :key="bookmark.id"
            @click="handleBookmarkClick(bookmark)"
          )
            i.el-icon-folder(v-if="bookmark.children && bookmark.children.length > 0")
            i.el-icon-document(v-else)
            span.bookmark-title {{ bookmark.title }}
            span.bookmark-url(v-if="bookmark.url") {{ bookmark.url }}
</template>

<script>
export default {
  data: () => ({
    allBookmarks: []
  }),

  computed: {},

  created () {
    console.log('MapTab: Component created, loading bookmarks...')
    this.loadBookmarks()
  },

  mounted () {},

  methods: {
    async loadBookmarks () {
      try {
        console.log('MapTab: Starting to load bookmarks...')
        // Get the bookmark tree from Chrome
        const bookmarks = await chrome.bookmarks.getTree()
        console.log('MapTab: Raw bookmarks data:', bookmarks)

        this.allBookmarks = this.flattenBookmarks(bookmarks)
        console.log('MapTab: Flattened bookmarks:', this.allBookmarks)
      } catch (error) {
        console.error('MapTab: Error loading bookmarks:', error)
      }
    },

    flattenBookmarks (bookmarks) {
      const flattened = []

      const processNode = (node) => {
        if (node.title) {
          flattened.push({
            id: node.id,
            title: node.title,
            url: node.url || null,
            children: node.children || null
          })
        }

        if (node.children && node.children.length > 0) {
          node.children.forEach(child => processNode(child))
        }
      }

      bookmarks.forEach(rootNode => {
        if (rootNode.children && rootNode.children.length > 0) {
          rootNode.children.forEach(folder => {
            processNode(folder)
          })
        }
      })

      return flattened
    },

    handleBookmarkClick (bookmark) {
      if (bookmark.url) {
        // Open bookmark in new tab
        chrome.tabs.create({ url: bookmark.url })
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
    max-width: 1200px;
    margin: 0 auto;

    .bookmarks-section {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 20px;
      backdrop-filter: blur(10px);

      h2 {
        margin: 0 0 20px 0;
        font-size: 1.5rem;
        font-weight: 400;
      }

      .debug-info {
        text-align: center;
        padding: 20px;
        opacity: 0.8;
      }

      .bookmarks-list {
        .bookmark-item {
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

            &.el-icon-folder {
              color: #ffd700;
            }

            &.el-icon-document {
              color: #87ceeb;
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
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex-shrink: 0;
          }
        }
      }
    }
  }
}
</style>