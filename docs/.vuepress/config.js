module.exports = {
    title: 'Totalizer',
    description: 'JavaScript Animation Engine For DOM & SVG.',

    locales: {
        '/': {
            lang: 'English',
        },
        '/zh/': {
            lang: '中文',
        }
    },
    themeConfig: {

        locales: {

            '/': {
                search: false,
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Document', link: '/document/' },
                    { text: 'GitHub', link: 'https://github.com/totalizer-js/totalizer' },
                ],

                sidebar: {
                    '/document/': [
                        {
                            title: 'Guides',   // 必要的
                            collapsable: false, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                            children: [
                                '',
                                'Started',
                                'Describe',
                                'Control',
                                'Properties'
                            ]
                        },
                        {
                            title: 'More',   // 必要的
                            collapsable: false, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                            children: [
                                'Continuous',
                                'Staggering',
                                'SVG',
                                'Parallax'
                            ]
                        },
                    ],

                }
            },
            '/zh/': {
                search: false,
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: '文档', link: '/zh/document/' },
                    { text: 'GitHub', link: 'https://github.com/totalizer-js/totalizer' },
                ],

                sidebar: {
                    '/zh/document/': [
                        {
                            title: '指南',   // 必要的
                            collapsable: false, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                            children: [
                                '',
                                'Started',
                                'Describe',
                                'Control',
                                'Properties'
                            ]
                        },
                        {
                            title: '进阶',   // 必要的
                            collapsable: false, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                            children: [
                                'Continuous',
                                'Staggering',
                                'SVG',
                                'Parallax'
                            ]
                        },
                    ],

                }
            }
        },

    },
}