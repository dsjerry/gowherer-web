# 快速开始

本节面向希望本地运行、构建或参与开发 GoWherer 的开发者。普通用户请前往[下载页](/download)直接安装。

本文档以 GoWherer 主应用为例。文档站点位于 [gowherer-web](https://github.com/dsjerry/gowherer-web) 仓库。

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
| `AMAP_ANDROID_DEBUG_KEY` | 高德地图 Debug Key（可选，用于本地 Debug 构建的地图渲染） |
| `EXPO_PUBLIC_REVERSE_GEOCODE_PROVIDER` | 反向地理编码服务商：`amap`（高德）或 `system`（系统原生），默认 `amap` |
| `APP_VERSION` | 覆盖应用版本号（可选，用于本地/EAS 构建） |
| `EAS_PROJECT_ID` | EAS 项目 ID（可选，app.config.ts 已内置默认值） |

### 4. 启动开发服务

```bash
npx expo start
```

按终端中的提示选择运行平台：
- 按 `a` 启动 Android 模拟器或连接的真机
- 按 `i` 启动 iOS 模拟器（macOS）
- 按 `w` 启动 Web 版本
- 按 `r` 重启 Expo 预览服务

## 目录结构

```
gowherer/
├── app/                     # 页面路由（使用 expo-router）
│   ├── (tabs)/              # 标签页路由
│   │   ├── index.tsx        # 旅程记录（主页）
│   │   ├── explore.tsx      # 旅程回顾（摘要列表）
│   │   └── settings.tsx     # 设置页面
│   ├── journey-detail.tsx   # 旅程详情页（时间线/媒体/轨迹/导出）
│   ├── location-picker.tsx  # 地图选点页面
│   ├── permissions.tsx      # 权限管理页面
│   ├── licenses.tsx         # 开源许可页面
│   └── modal.tsx            # 模态页面
├── components/              # 可复用组件
│   ├── active-journey-card.tsx    # 进行中旅程卡片
│   ├── journey-report-view.tsx    # 导出报告渲染视图
│   ├── swipe-tab-bar.tsx          # 支持滑动切换的底部标签栏
│   ├── template-modal.tsx         # 模板管理弹窗
│   ├── timeline-list.tsx          # 时间线列表
│   ├── track-map.tsx / track-map.web.tsx # 轨迹地图（原生/Web）
│   └── ...
├── hooks/                   # 自定义 React Hooks
│   ├── use-journeys.ts           # 旅程数据加载
│   └── use-location-tracking.ts  # 后台定位追踪
├── lib/                     # 核心服务模块
│   ├── journey-storage.ts        # 旅程数据持久化
│   ├── journey-repository.ts     # 旅程读写队列与媒体级联清理
│   ├── journey-stats.ts          # 行程统计与分段统计
│   ├── journey-cost.ts           # 交通费汇总
│   ├── journey-pdf.ts            # PDF/长图导出
│   ├── report-templates.ts       # 导出模板定义（经典/简约）
│   ├── template-storage.ts       # 模板管理
│   ├── template-storage-i18n.ts  # 按语言存储模板
│   ├── track-utils.ts            # 轨迹清洗/平滑/测距
│   ├── reverse-geocode.ts        # 逆地理编码与坐标转换
│   ├── geocode-cache.ts          # 逆地理编码本地缓存
│   ├── current-location.ts       # 当前位置获取
│   ├── background-location.ts    # 后台定位追踪
│   ├── media-storage.ts          # 媒体持久化与孤儿扫描
│   ├── media-migration.ts        # 媒体文件迁移
│   ├── data-backup.ts            # 数据备份与恢复
│   ├── license-catalog.ts        # 开源许可目录
│   ├── amap-privacy.ts           # 高德 SDK 隐私合规
│   ├── storage-keys.ts           # AsyncStorage 键集中管理
│   └── local-log.ts              # 本地日志
├── types/                   # TypeScript 类型定义
├── locales/                 # 国际化翻译资源
└── constants/               # 主题颜色、字体等常量
```

## 常用命令

```bash
npx expo start        # 启动开发服务器
npx expo prebuild     # 生成原生项目代码（Android/iOS）
npx expo run:android  # 运行 Android 应用
npx expo run:ios      # 运行 iOS 应用（macOS）
npm run lint          # 代码检查
npm run format        # Prettier 格式化
npm run licenses:generate # 重新生成开源许可目录
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
- Android 端原生地图需要 `AMAP_ANDROID_API_KEY`（Debug 构建可用 `AMAP_ANDROID_DEBUG_KEY`）

### 页面空白或白屏
- 检查 Node.js 版本（需要 20+）
- 检查控制台报错信息
- 尝试清除 Metro 缓存：`npx expo start --clear`

### 高德 SDK 功能不可用
高德地图 SDK 相关功能（地图选点、原生轨迹地图）需要自定义 Dev Client 或 EAS 构建，Expo Go 中不可用。
