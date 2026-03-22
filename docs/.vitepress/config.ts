import { defineConfig } from "vitepress";

export default defineConfig({
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "GoWherer",
      description:
        "记录你的旅程，回顾精彩时刻 - 基于 Expo React Native 的旅行时间线应用",
      themeConfig: {
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
        outline: {
          level: [2, 3],
          label: "页面导航",
        },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "GoWherer",
      description:
        "Record your journeys, revisit wonderful moments - A travel timeline app based on Expo React Native",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Features", link: "/en/features" },
          { text: "Tech Stack", link: "/en/tech" },
          { text: "Getting Started", link: "/en/getting-started" },
          { text: "Download", link: "/en/download" },
        ],
        sidebar: [
          {
            text: "Guide",
            items: [
              { text: "Home", link: "/en/" },
              { text: "Features", link: "/en/features" },
              { text: "Tech Stack", link: "/en/tech" },
              { text: "Getting Started", link: "/en/getting-started" },
            ],
          },
        ],
        footer: {
          message: "Released under the MIT License",
          copyright: "Copyright © 2025 GoWherer",
        },
        editLink: {
          pattern: "https://github.com/dsjerry/gowherer/edit/main/docs/:path",
          text: "Edit this page on GitHub",
        },
        lastUpdated: {
          text: "Last updated on",
          formatOptions: {
            dateStyle: "full",
            timeStyle: "medium",
          },
        },
        outline: {
          level: [2, 3],
          label: "On this page",
        },
      },
    },
  },

  head: [["link", { rel: "icon", href: "/favicon.png" }]],

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: {
      light: "/icon.png",
      dark: "/icon.png",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/dsjerry/gowherer" },
    ],

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
          en: {
            translations: {
              button: "Search",
              modal: {
                displayDetails: "Display detailed list",
                resetButtonTitle: "Reset search",
                backButtonText: "Back",
                noResultsText: "No results found",
                footer: {
                  selectText: "Select",
                  navigateText: "Navigate",
                  closeText: "Close",
                },
              },
            },
          },
        },
      },
    },
  },
});
