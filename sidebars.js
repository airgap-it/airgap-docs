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
      label: "Currencies",
      items: [
        {
          type: "category",
          label: "Bitcoin (BTC)",
          items: [
            "currencies/bitcoin/introduction",
            "currencies/bitcoin/wallet-compatibility",
            {
              type: "category",
              label: "Troubleshoot",    
              items: [
                "currencies/bitcoin/troubleshooting/transaction-stuck",
              ]
            }
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Ethereum (ETH)",
          items: [
            "currencies/ethereum/introduction",
            "currencies/ethereum/wallet-compatibility",
            {
              type: "category",
              label: "Troubleshoot",    
              items: [
                "currencies/ethereum/troubleshooting/transaction-stuck",
              ]
            }
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
      label: "AirGap Vault",
      items: ["airgap-vault/introduction"],
      collapsed: true,
    },
    {
      type: "category",
      label: "AirGap Wallet",
      items: ["airgap-wallet/introduction"],
      collapsed: true,
    },
    "FAQ",
    "CHANGELOG",
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
      items: ["coinlib/examples/get-address"],
      collapsed: true,
    },
  ],
};
