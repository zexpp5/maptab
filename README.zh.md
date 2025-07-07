# MapTab - Chrome 新标签页扩展

[English](README.md) | [中文](README.zh.md) | [日本語](README.ja.md) | [Français](README.fr.md) | [Español](README.es.md) | [Русский](README.ru.md)

一个现代化的 Chrome 扩展，将您的新标签页转换为功能全面的生产力中心，集成了搜索引擎、AI 模型、书签和浏览历史。使用 Vue.js 和现代 Web 技术构建。

## 🚀 功能特性

### 🔍 **多平台搜索**
- **搜索引擎**: Google、Kagi、Perplexity、V2EX、小红书、淘宝、知乎
- **AI 模型**: 通过 Poe 访问 Claude Sonnet 4、o3、GPT-4.1、GPT-4.1-mini
- **智能输入**: 支持多行文本的文本框，可扩展用于长查询和提示
- **快速访问**: 一键搜索多个平台

### 📚 **智能书签管理**
- **层级显示**: 可展开的文件夹结构，匹配 Chrome 的组织方式
- **视觉指示器**: 文件夹图标、文档图标和展开/折叠箭头
- **点击展开**: 交互式文件夹，可显示/隐藏内容
- **直接访问**: 点击任何书签在新标签页中打开

### 📖 **浏览器历史集成**
- **最近历史**: 显示您的最近浏览历史
- **访问次数**: 显示您访问每个页面的次数
- **智能时间戳**: 相对时间显示（例如："2小时前"、"3天前"）
- **快速访问**: 点击任何历史项目重新访问

### 🎨 **现代界面**
- **双屏布局**: 主要内容 + 空白第二屏用于未来功能
- **玻璃拟态**: 美丽的半透明设计，带有背景模糊效果
- **响应式设计**: 适应不同屏幕尺寸
- **流畅动画**: 悬停效果和过渡动画

### ⚡ **性能和用户体验**
- **快速加载**: 针对快速启动优化
- **可滚动面板**: 书签和历史记录独立滚动
- **键盘快捷键**: Enter 搜索，Shift+Enter 换行
- **自动调整输入框**: 随内容动态增长的文本框

## 🛠️ 技术栈

- **前端**: Vue.js 2.5.2、Element UI 2.0.1
- **状态管理**: Vuex 3.0.0
- **路由**: Vue Router 3.0.1
- **样式**: SCSS 与现代 CSS 功能
- **构建工具**: Webpack 3.8.1
- **包管理器**: Yarn
- **Chrome API**: 书签、历史记录、标签页

## 📁 项目结构

```
maptab/
├── core/                    # Webpack 配置文件
│   ├── webpack.base.js     # 基础 webpack 配置
│   ├── webpack.dev.js      # 开发配置
│   └── webpack.prod.js     # 生产配置
├── src/                    # 源代码
│   ├── backend/           # 后台脚本
│   ├── content/           # 内容脚本（在网页中运行）
│   ├── devtools/          # Chrome DevTools 集成
│   ├── ext/               # 共享工具和脚本
│   ├── options/           # 扩展选项页面
│   ├── popup/             # 扩展弹出界面
│   ├── tab/               # 新标签页（主应用程序）
│   └── manifest.js        # Chrome 扩展清单
├── static/                # 静态资源
│   └── icons/             # 扩展图标
└── package.json           # 依赖项和脚本
```

## 🚀 快速开始

### 前置要求

- Node.js（v16 或更高版本）
- Yarn 包管理器
- Google Chrome 浏览器

### 安装

1. **克隆仓库**
   ```bash
   git clone <your-repo-url>
   cd maptab
   ```

2. **安装依赖**
   ```bash
   yarn
   ```

3. **构建扩展**
   ```bash
   yarn build
   ```

4. **在 Chrome 中加载**
   - 打开 Chrome 并访问 `chrome://extensions/`
   - 启用"开发者模式"（右上角开关）
   - 点击"加载已解压的扩展程序"
   - 选择项目中的 `core/build` 文件夹

## 🎯 使用方法

### **搜索和 AI 提示**
1. **在搜索框中输入查询**（支持多行文本）
2. **选择您的平台**:
   - **搜索引擎**: 点击 Google、Kagi、Perplexity 等
   - **AI 模型**: 点击 Claude、o3、GPT-4.1 等
3. **结果自动在新标签页中打开**

### **书签**
1. **浏览您的文件夹** - 点击展开/折叠
2. **查看所有书签**的组织结构
3. **点击任何书签**在新标签页中打开

### **历史记录**
1. **查看最近访问的页面**
2. **查看访问次数**和时间戳
3. **点击任何项目**重新访问页面

## 🛠️ 开发

### 可用脚本

- `yarn dev` - 开发模式构建，支持热重载
- `yarn build` - 生产环境构建
- `yarn lint` - 运行 ESLint 检查代码质量

### 开发工作流程

1. **启动开发模式**
   ```bash
   yarn dev
   ```

2. **修改** `src/` 目录中的 Vue 组件

3. **在 Chrome 扩展页面重新加载扩展**以查看更改

4. **准备就绪时构建生产版本**
   ```bash
   yarn build
   ```

## 📋 扩展组件

### 🎯 新标签页 (`src/tab/`)
打开新标签页时出现的主界面。功能包括：
- **搜索部分**: 多引擎搜索与 AI 模型集成
- **书签面板**: 层级化、可展开的书签显示
- **历史面板**: 带有访问次数的最近浏览历史
- **双屏布局**: 主要内容 + 空白第二屏

### 🔧 选项页面 (`src/options/`)
允许用户自定义扩展行为：
- 搜索引擎偏好
- 书签组织
- 主题设置
- 隐私选项

### 🎪 弹出窗口 (`src/popup/`)
点击扩展图标时的快速访问界面：
- 快速搜索
- 最近书签
- 扩展状态

### 🔍 DevTools (`src/devtools/`)
用于调试和开发的开发者工具集成。

### 📄 内容脚本 (`src/content/`)
在网页上下文中运行的脚本，用于增强功能。

### 🔄 后台 (`src/backend/`)
处理以下内容的后台进程：
- 数据同步
- 通知
- API 交互
- 状态管理

## 🎨 自定义

### 添加新搜索引擎

编辑 `src/tab/root.vue` 中的搜索方法：

```javascript
// 示例：添加新搜索引擎
searchNewEngine () {
  if (this.searchQuery.trim()) {
    chrome.tabs.create({ url: `https://newengine.com/search?q=${encodeURIComponent(this.searchQuery)}` })
  }
}
```

### 添加新 AI 模型

添加新的 AI 模型按钮和方法：

```javascript
// 示例：添加新 AI 模型
searchNewAI () {
  if (this.searchQuery.trim()) {
    chrome.tabs.create({ url: `https://poe.com/NewModel?prompt=${encodeURIComponent(this.searchQuery)}` })
  }
}
```

### 样式

项目使用 SCSS 进行样式设计。主要样式文件位于每个组件目录中。全局样式可以添加到共享样式文件中。

## 📦 构建分发

1. **构建扩展**
   ```bash
   yarn build
   ```

2. **构建的扩展**将在 `core/build/` 目录中

3. **Chrome 网上应用店**:
   - 压缩 `core/build/` 的内容
   - 上传到 Chrome 网上应用店

## 🔧 故障排除

### 常见问题

**构建失败，出现 node-sass 错误:**
- 此项目使用现代的 `sass` 而不是已弃用的 `node-sass`
- 如果遇到问题，运行 `yarn` 重新安装依赖

**扩展无法加载:**
- 确保从 `core/build/` 目录加载
- 检查 Chrome 扩展页面的错误消息
- 验证所有权限都已授予（书签、历史记录、标签页）

**更改未出现:**
- 在 Chrome 扩展页面重新加载扩展
- 如有需要，清除浏览器缓存
- 检查浏览器控制台的错误

**搜索不工作:**
- 确保扩展具有必要的权限
- 检查搜索 URL 是否正确
- 验证 Chrome API 是否可访问

## 🤝 贡献

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- **Vue.js** 用于响应式框架
- **Element UI** 用于组件库
- **Chrome Extensions API** 用于浏览器集成
- **Poe** 用于 AI 模型访问 