# 快速开始

本文档将帮助你快速安装并运行 GoWherer 主应用。文档站点位于 [gowherer-web](https://github.com/dsjerry/gowherer-web) 仓库。

## 环境要求

### 必需环境
- Node.js 20+
- npm（通常随 Node.js 安装）
- Git

### 运行平台
- **Android**：Android Studio + Android SDK（模拟器或真机）
- **iOS**：Xcode + CocoaPods（仅 macOS）
- **Web**：现代浏览器（Chrome/Firefox/Safari/Edge）

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

### 3. 配置环境变量（可选）

若需要使用高德地图的地理编码功能，需配置 API Key：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入以下变量：

| 变量名 | 说明 |
|--------|------|
| `EXPO_PUBLIC_AMAP_WEB_KEY` | 高德地图 Web API Key（用于逆地理编码请求） |
| `AMAP_ANDROID_API_KEY` | 高德地图 Android SDK Key（用于 Android 端原生地图展示） |

### 4. 启动开发服务

```bash
npx expo start
```

按终端中的提示选择运行��台：
- 按 `a` 启动 Android 模拟器或连接的真机
- 按 `i` 启动 iOS 模拟器（macOS）
- 按 `w` 启动 Web 版本
- 按 `r` 重启 Expo 预览服务

## 目录结构

```
gowherer/
├── app/                 # 页面路由（使用 expo-router）
│   ├── (tabs)/          # 标签页路由
│   │   ├── index.tsx    # 旅程时间线（主页）
│   │   ├── explore.tsx  # 旅程回顾与搜索
│   │   └── settings.tsx # 设置页面
│   ├── location-picker.tsx  # 地图选点页面
│   ├── permissions.tsx      # 权限管理页面
│   └── licenses.tsx         # 开源许可页面
├── components/          # 可复用组件
├── hooks/              # 自定义 React Hooks
├── lib/                # 核心服务模块
│   ├── journey-storage.ts    # 旅程数据持久化
│   ├── template-storage.ts   # 模板管理
│   ├── track-utils.ts        # 轨迹处理
│   ├── reverse-geocode.ts    # 地理编码
│   └── local-log.ts          # 本地日志
├── types/              # TypeScript 类型定义
├── locales/            # 国际化翻译资源
└── constants/          # 主题颜色、字体等常量
```

## 常见命令

```bash
npx expo start       # 启动开发服务器
npx expo prebuild    # 生成原生项目代码（Android/iOS）
npx expo run:android # 运行 Android 应用
npx expo run:ios     # 运行 iOS 应用（macOS）
npx expo export       # 导出 Web 静态资源
npm run lint          # 代码检查
npm run typecheck     # TypeScript 类型检查
```

## 常见问题

### 依赖安装失败
清理缓存后重试：
```bash
npm cache clean --force && rm -rf node_modules && npm install
```

### 高德地图 Key 未生效
- 确认 `.env` 文件存在且变量名正确
- 修改 `app.config.ts` 中的配置后需重新运行 `npx expo prebuild`
- Web 端逆地理编码需要 `EXPO_PUBLIC_AMAP_WEB_KEY`
- Android 端原生地图需要 `AMAP_ANDROID_API_KEY`

### 页面空白或白屏
- 检查 Node.js 版本（需要 20+）
- 检查控制台报错信息
- 尝试清除 Metro 缓存：`npx expo start --clear`