const baseDocPaths = require('./baseDocPaths')
require('dotenv').config()

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Robotics @APEX Documentation',
  tagline: 'Robotics is our passion! Efficient. Effective. Exemplary. 🔥',
  url: 'https://theboi.github.io',
  baseUrl: '/SSTackExchange/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'theboi',
  projectName: 'SSTackExchange',
  trailingSlash: true,
  themeConfig: {
    hideableSidebar: true,
    announcementBar: {
      id: "announcement",
      content:
        'Share this website with others to help us out!',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Robotics @APEX',
      logo: {
        alt: 'Robotics @APEX Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          label: 'Notes',
          to: '/notes',
          items: baseDocPaths.map((e) => ({ to: `/${e.path}`, label: e.name }))
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'All', to: `/notes` },
            ...baseDocPaths.map((e) => ({ label: e.name, to: `/${e.path}` })),
          ]
        },
        {
          title: 'Robotics @APEX',
          items: [
            {
              label: 'Instagram',
              href: 'about:blank',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/theboi/SSTackExchange',
            },
            {
              label: 'Email',
              href: 'about:blank',
            },
            {
              label: 'Discord',
              href: 'about:blank',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'SST',
              href: 'https://www.sst.edu.sg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Robotics @APEX from the School of Science and Technology, Singapore.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'YOUR_INDEX_NAME',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/theboi/SSTackExchange/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/theboi/SSTackExchange/edit/main/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      'data-ad-client': 'ca-pub-5037854579642309'
    }
  ],
};
