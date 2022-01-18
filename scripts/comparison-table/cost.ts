import { Category, Feature } from "./types";

export const cost: Record<string, Feature<Category.COST>> = {
  madeIn: {
    title: "Made In",
    category: Category.COST,
    wallets: {
      airgap: { status: "🇨🇭 Switzerland", notes: [] },
      keystone: { status: "🇨🇳 China", notes: [] },
      bitbox: { status: "🇨🇭 Switzerland", notes: [] },
      coldcard: { status: "🇨🇦 Canada", notes: [] },
      ledger: { status: "🇫🇷 France", notes: [] },
      trezor: { status: "🇨🇿 Czech Republic", notes: [] },
    },
  },
  cost: {
    title: "Cost",
    category: Category.COST,
    wallets: {
      airgap: {
        status: "$0",
        notes: [{ text: "Requires an old device", url: "" }],
      },
      keystone: {
        status: "$169",
        notes: [
          {
            text: "Shop",
            url: "https://shop.keyst.one/products/keystone-pro",
          },
        ],
      },
      bitbox: {
        status: "$119",
        notes: [
          {
            text: "Shop",
            url: "https://shiftcrypto.ch/bitbox02/",
          },
        ],
      },
      coldcard: {
        status: "$129 - $199",
        notes: [
          {
            text: "Shop",
            url: "https://store.coinkite.com/store/coldcard",
          },
        ],
      },
      ledger: {
        status: "$59 - $177",
        notes: [{ text: "Shop", url: "https://shop.ledger.com/" }],
      },
      trezor: {
        status: "$53 - $188",
        notes: [{ text: "Shop", url: "https://shop.trezor.io/" }],
      },
    },
  },
};
