# 快速开始

本文档将帮助你快速安装并运行 GoWherer。

## 环境要求

### 必需环境
- Node.js 18+
- npm（通常随 Node.js 安装）
- Git

### 运行平台
- Android：Android Studio + Android SDK
- iOS：Xcode（仅 macOS）
- Web：现代浏览器

## 安装步骤

### 1. 克隆项目
```bash
git clone https://github.com/dsjerry/gowherer.git
cd gowherer
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务
```bash
npm run dev
```

## 常见命令

```bash
npm run dev      # 本地开发
npm run build    # 构建文档站点
npm run preview  # 预览构建结果
npm run lint     # 代码检查
```

## 常见问题

- 依赖安装失败：清理缓存后重试 `npm cache clean --force && npm install`
- 端口占用：关闭占用进程或修改开发端口
- 页面空白：检查 Node.js 版本与控制台报错信息
