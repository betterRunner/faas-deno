module.exports = {
  title: 'faas-deno',
  description: 'A Deno.js Severless Application Framework',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  themeConfig: {
    smoothScroll: true,
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '教程',
        link: '/guide/'
      },
      {
        text: '文档',
        link: '/doc/'
      },
      {
        text: '示例',
        link: '/example/'
      },
      {
        text: '支持 FaasJS',
        link: '/contribute'
      },
      {
        text: '更新日志',
        link: '/changelog'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        'tencentcloud',
        'auth',
        {
          title: '进阶学习',
          collapsable: false,
          children: [
            'excel/faas-yaml',
            'excel/plugin',
            'excel/http',
            'excel/db',
            'excel/request-spec',
            'excel/env',
            'excel/test',
            'excel/lint',
            'excel/vue',
            'excel/nuxt',
            'excel/react',
            'excel/graphql-server',
            'excel/typeorm'
          ]
        },
        'story'
      ],
      '/doc/': [
        {
          title: '云函数插件',
          collapsable: false,
          children: [
            '',
            'http',
            'sql',
            'redis',
          ]
        },
        {
          title: '辅助插件',
          collapsable: false,
          children: [
            'browser',
            'request'
          ]
        },
        {
          title: '命令行',
          collapsable: false,
          children: [
            'cli/server',
            'cli/deploy',
          ]
        },
        'npm'
      ],
      '/example/': [
        '',
        'cloud-function',
        'http-basic',
        'cron-basic',
        'sql-knex'
      ]
    },
    displayAllHeaders: true,
    search: true,
    lastUpdated: '更新时间',
    repo: 'faasjs/faasjs',
    docsRepo: 'faasjs/faasjs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面'
  }
}