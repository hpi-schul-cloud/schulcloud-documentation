// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Schulcloud-Verbund-Software Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hpi-schul-cloud.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/schulcloud-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hpi-schul-cloud', // Usually your GitHub org/user name.
  projectName: 'schulcloud-documentation', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({docPath, versionDocsDirPath}) => {
            return `https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/${versionDocsDirPath}/${docPath}`
          },
        },
        // NOTE: add back when we want a blog
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Schulcloud-Verbund-Software',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/hpi-schul-cloud/hpi-schul-cloud',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'schulcloud-server',
                href: 'https://github.com/hpi-schul-cloud/schulcloud-server',
              },
              {
                label: 'nuxt-client',
                href: 'https://github.com/hpi-schul-cloud/nuxt-client',
              },
              {
                label: 'schulcloud-client',
                href: 'https://github.com/hpi-schul-cloud/schulcloud-client',
              },
              {
                label: 'end-to-end-tests',
                href: 'https://github.com/hpi-schul-cloud/end-to-end-tests',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
        }),
      ],
    ],
};

module.exports = config;
