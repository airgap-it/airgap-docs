module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/introduction",
        "getting-started/account-recovery",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "AirGap Vault",
      items: [
        "airgap-vault/introduction",
        "airgap-vault/supported-devices",
        "airgap-vault/recommended-devices",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "AirGap Wallet",
      items: ["airgap-wallet/introduction"],
      collapsed: true,
    },
    {
      type: "category",
      label: "Currencies",
      items: [
        {
          type: "category",
          label: "Bitcoin (BTC)",
          items: [
            "currencies/bitcoin/introduction",
            "currencies/bitcoin/wallet-compatibility",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Ethereum (ETH)",
          items: [
            "currencies/ethereum/introduction",
            "currencies/ethereum/wallet-compatibility",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Tezos (XTZ)",
          items: [
            "currencies/tezos/introduction",
            "currencies/tezos/delegation",
            "currencies/tezos/wallet-compatibility",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Polkadot (DOT)",
          items: [
            "currencies/polkadot/introduction",
            "currencies/polkadot/delegation",
            "currencies/polkadot/wallet-compatibility",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Kusama (KSM)",
          items: [
            "currencies/kusama/introduction",
            "currencies/kusama/delegation",
            "currencies/kusama/wallet-compatibility",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Cosmos (ATOM)",
          items: [
            "currencies/cosmos/introduction",
            "currencies/cosmos/delegation",
            "currencies/cosmos/wallet-compatibility",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Groestlcoin (GRS)",
          items: [
            "currencies/groestlcoin/introduction",
            "currencies/groestlcoin/wallet-compatibility",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Aeternity (AE)",
          items: [
            "currencies/aeternity/introduction",
            "currencies/aeternity/wallet-compatibility",
          ],
          collapsed: true,
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        {
          type: "category",
          label: "General",
          items: ["troubleshooting/general/not-enough-balance"],
          collapsed: true,
        },
        {
          type: "category",
          label: "Bitcoin (BTC)",
          items: ["troubleshooting/currencies/bitcoin/transaction-stuck"],
          collapsed: true,
        },
        {
          type: "category",
          label: "Ethereum (ETH)",
          items: ["troubleshooting/currencies/ethereum/transaction-stuck"],
          collapsed: true,
        },
        {
          type: "category",
          label: "Tezos (XTZ)",
          items: ["troubleshooting/currencies/tezos/FAQ"],
          collapsed: true,
        },
        {
          type: "category",
          label: "Cosmos (ATOM)",
          items: ["troubleshooting/currencies/cosmos/FAQ"],
          collapsed: true,
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/metamask",
        "guides/BIP-85",
        "guides/sapling",
        "guides/social-recovery",
        "guides/step-by-step-guide",
        "guides/update-webview",
        "guides/vault-offline-update",
      ],
    },
    "FAQ",
    "glossary",
    "CHANGELOG-VAULT",
    "CHANGELOG-WALLET",
    {
      type: "link",
      label: "AirGap Website",
      href: "https://airgap.it",
    },
  ],
  coinlib: [
    "coinlib/installation",
    {
      type: "category",
      label: "Examples",
      items: [
        "coinlib/examples/get-address",
        "coinlib/examples/serializer/v2/introduction",
      ],
      collapsed: true,
    },
  ],
};
