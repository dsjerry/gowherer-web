import { defineConfig } from "vitepress"

export default defineConfig({
    locales: {
        root: {
            label: "简体中文",
            lang: "zh-CN",
            title: "GoWherer",
            description:
                "GoWherer —— 把每一次出行变成可回顾、可分享的旅程时间线。记录文字、照片、语音、GPS 轨迹与交通费，一键导出 PDF 与长图。免费开源的 Android 应用。",
            themeConfig: {
                nav: [
                    { text: "首页", link: "/" },
                    { text: "功能特色", link: "/features" },
                    { text: "下载", link: "/download" },
                    { text: "关于", link: "/about" },
                    {
                        text: "开发者",
                        items: [
                            { text: "快速开始", link: "/getting-started" },
                            { text: "技术栈", link: "/tech" },
                            { text: "数据类型", link: "/data-models" },
                            { text: "服务接口", link: "/services" },
                        ],
                    },
                ],
                sidebar: [
                    {
                        text: "产品",
                        items: [
                            { text: "功能特色", link: "/features" },
                            { text: "下载", link: "/download" },
                            { text: "关于与反馈", link: "/about" },
                        ],
                    },
                    {
                        text: "开发者文档",
                        collapsed: true,
                        items: [
                            { text: "快速开始", link: "/getting-started" },
                            { text: "技术栈", link: "/tech" },
                            { text: "数据类型", link: "/data-models" },
                            { text: "服务接口", link: "/services" },
                        ],
                    },
                ],
                footer: {
                    message: "基于 MIT 许可证发布",
                    copyright: "Copyright © 2025–2026 GoWherer",
                },
                editLink: {
                    pattern:
                        "https://github.com/dsjerry/gowherer-web/edit/main/docs/:path",
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
                "GoWherer — turn every trip into a shareable journey timeline. Capture text, photos, voice, GPS tracks and fares, then export a PDF or long image in one tap. Free and open source for Android.",
            themeConfig: {
                nav: [
                    { text: "Home", link: "/en/" },
                    { text: "Features", link: "/en/features" },
                    { text: "Download", link: "/en/download" },
                    { text: "About", link: "/en/about" },
                    {
                        text: "Developers",
                        items: [
                            { text: "Getting Started", link: "/en/getting-started" },
                            { text: "Tech Stack", link: "/en/tech" },
                            { text: "Data Models", link: "/en/data-models" },
                            { text: "Services", link: "/en/services" },
                        ],
                    },
                ],
                sidebar: [
                    {
                        text: "Product",
                        items: [
                            { text: "Features", link: "/en/features" },
                            { text: "Download", link: "/en/download" },
                            { text: "About & Feedback", link: "/en/about" },
                        ],
                    },
                    {
                        text: "Developers",
                        collapsed: true,
                        items: [
                            {
                                text: "Getting Started",
                                link: "/en/getting-started",
                            },
                            { text: "Tech Stack", link: "/en/tech" },
                            { text: "Data Models", link: "/en/data-models" },
                            { text: "Services", link: "/en/services" },
                        ],
                    },
                ],
                footer: {
                    message: "Released under the MIT License",
                    copyright: "Copyright © 2025–2026 GoWherer",
                },
                editLink: {
                    pattern:
                        "https://github.com/dsjerry/gowherer-web/edit/main/docs/:path",
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
})
