import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GoWherer",
  description:
    "记录你的旅程，回顾精彩时刻 - 基于 Expo React Native 的旅行时间线应用",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: {
      light: "/icon.png",
      dark: "/icon.png",
    },

    nav: [
      { text: "首页", link: "/" },
      { text: "功能特色", link: "/features" },
      { text: "技术栈", link: "/tech" },
      { text: "快速开始", link: "/getting-started" },
      { text: "下载", link: "/download" },
    ],

    sidebar: [
      {
        text: "指南",
        items: [
          { text: "首页", link: "/" },
          { text: "功能特色", link: "/features" },
          { text: "技术栈", link: "/tech" },
          { text: "快速开始", link: "/getting-started" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/dsjerry/gowherer" },
    ],

    footer: {
      message: "基于 MIT 许可证发布",
      copyright: "Copyright © 2025 GoWherer",
    },

    editLink: {
      pattern: "https://github.com/dsjerry/gowherer/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: "搜索",
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "清除查询条件",
                backButtonText: "返回",
                noResultsText: "无法找到相关结果",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: "页面导航",
    },
  },
});
