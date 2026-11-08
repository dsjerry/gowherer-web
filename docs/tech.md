# 技术栈

GoWherer 采用现代化前端与跨平台技术组合，兼顾开发效率、性能与可维护性。

## 应用层
- Expo SDK 55
- React Native 0.83.6
- React 19.2.0
- TypeScript
- expo-router（文件路由）

## 地图与定位
- expo-gaode-map（高德地图 SDK 封装，含地图选点与定位）
- expo-location（定位与系统逆地理编码）
- expo-task-manager（后台任务管理，支撑后台轨迹追踪）
- 高德 Web 服务 API（City Walk 周边 POI 搜索与步行路径规划；默认由客户端调用，可选配置自有代理）

## AI 能力
- Vercel AI SDK（`ai`）与 `@ai-sdk/openai-compatible`
- 用户自带 AI 服务商、Base URL、模型与 API Key（BYOK）
- AI 负责分析旅程或编排候选地点；地点与路线数据仍由高德提供
- 不依赖 MCP；City Walk 可选配置 `EXPO_PUBLIC_CITY_WALK_API_BASE_URL` 将高德 Web 请求转发到自有代理

## 媒体处理
- expo-image-picker（相机拍摄与相册导入）
- expo-audio（录音与播放）
- expo-video（视频播放）
- expo-image-manipulator（导出前图片缩放与压缩）
- expo-video-thumbnails（视频缩略图）

## 导出与分享
- expo-print（PDF 生成）
- expo-sharing（系统分享）
- expo-file-system（文件读写与媒体托管）

## 数据与存储
- SQLite（Android/iOS 旅程与轨迹数据）、AsyncStorage（Web 旅程、偏好、AI 配置与回顾、City Walk 方案）
- 媒体文件保存在应用托管目录；旅程与方案通过 JSON 备份/恢复
- 本地日志文件系统（问题排查）

## 文档与站点
- VitePress
- Vue 3
- Markdown

## 工程化
- ESLint / Prettier（代码规范与格式化）
- GitHub Actions（CI 与发布流水线）
- EAS Build（云构建）

## 设计原则
- 跨平台优先：同一套业务逻辑覆盖移动端与 Web。
- 本地优先：旅程与媒体以本机持久化为主；AI 与地图功能会按需请求用户选择的服务商或高德，不依赖必须部署的 GoWherer 后端。
- 可维护性优先：模块化组织与清晰边界（存储、统计、导出、地理服务分层）。
- 体验优先：关注加载速度与交互流畅度，缓存与去重降低等待。
