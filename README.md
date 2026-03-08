# GoWherer 官方网站

这是 GoWherer 项目的官方文档网站，使用 VitePress 构建。

## 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看网站。

### 构建

```bash
npm run build
```

构建产物将输出到 `docs/.vitepress/dist` 目录。

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
gowherer-web/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts       # VitePress 配置
│   │   └── theme/          # 自定义主题
│   ├── public/             # 静态资源
│   ├── index.md            # 首页
│   ├── features.md         # 功能特性
│   ├── tech.md             # 技术栈
│   └── getting-started.md  # 快速开始
└── package.json
```

## 添加新页面

1. 在 `docs/` 目录下创建新的 Markdown 文件
2. 在 `docs/.vitepress/config.ts` 中添加导航和侧边栏配置

## 自定义主题

自定义样式位于 `docs/.vitepress/theme/custom.css`，可以根据需要修改品牌色和其他样式。

## 部署

构建后的静态文件可以部署到：
- GitHub Pages
- Vercel
- Netlify
- 任何静态文件托管服务

## 许可证

MIT License
