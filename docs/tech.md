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
- AsyncStorage（结构化数据本地持久化）
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
- 本地优先：核心数据以本地可用为前提，不依赖后端服务。
- 可维护性优先：模块化组织与清晰边界（存储、统计、导出、地理服务分层）。
- 体验优先：关注加载速度与交互流畅度，缓存与去重降低等待。
