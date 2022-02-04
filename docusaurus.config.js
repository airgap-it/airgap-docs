const path = require("path");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "AirGap Support",
  tagline: "Guides for the AirGap Wallet",
  url: "https://support.airgap.it",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.png",
  organizationName: "airgap-it",
  projectName: "airgap-docs",
  themeConfig: {
    navbar: {
      logo: {
        alt: "AirGap Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "getting-started/introduction",
          label: "Help Center",
        },
        {
          type: "doc",
          position: "left",
          docId: "coinlib/installation",
          label: "Developers",
        },
        { to: "playground/", label: "Playground", position: "right" },
        {
          href: "https://github.com/airgap-it",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/AirGap",
            },
            {
              label: "Discord",
              href: "https://discord.gg/29SCWzTW7J",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/airgap_it",
            },
            {
              label: "Blog",
              href: "https://medium.com/airgap-it",
            },
          ],
        },
        {
          title: "AirGap Components",
          items: [
            {
              label: "AirGap Vault",
              href: "https://github.com/airgap-it/airgap-vault",
            },
            {
              label: "AirGap Wallet",
              href: "https://github.com/airgap-it/airgap-wallet",
            },
            {
              label: "AirGap Coin Library",
              href: "https://github.com/airgap-it/airgap-coin-lib",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Papers AG - Open Source MIT License`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/airgap-it/airgap-docs/edit/main/src/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    path.join(__dirname, "/plugins/monaco-editor"),
    path.join(__dirname, "/plugins/build"),
  ],
};
