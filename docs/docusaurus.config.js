module.exports = {
  title: 'Katachi',
  tagline: 'Autogenerate your form by schema without effort',
  url: 'https://x0s3.github.io',
  baseUrl: '/katachi/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'x0s3',
  projectName: 'katachi',
  themeConfig: {
    navbar: {
      title: 'Katachi',
      logo: {
        alt: 'Katachi Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/x0s3/katachi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/',
            },
            {
              label: 'Using Katachi',
              to: 'docs/using-katachi/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/x0s3/katachi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Katachi, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/x0s3/katachi/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/x0s3/katachi/edit/main/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
