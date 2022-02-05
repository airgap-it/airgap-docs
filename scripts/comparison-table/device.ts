import { Category, Feature, Status } from "./types";

export const device: Record<string, Feature<Category.DEVICE>> = {
  openSource: {
    title: "Open Source",
    category: Category.DEVICE,
    wallets: {
      airgap: {
        status: Status.SUPPORTED,
        notes: [{ text: "", url: "https://github.com/airgap-it/airgap-vault" }],
      },
      keystone: {
        status: Status.SUPPORTED,
        notes: [{ text: "", url: "https://github.com/KeystoneHQ" }],
      },
      bitbox: {
        status: Status.SUPPORTED,
        notes: [{ text: "", url: "https://github.com/digitalbitbox" }],
      },
      coldcard: {
        status: Status.SUPPORTED,
        notes: [{ text: "", url: "https://github.com/Coldcard" }],
      },
      ledger: {
        status: Status.SUPPORTED,
        notes: [{ text: "", url: "https://github.com/LedgerHQ" }],
      },
      trezor: {
        status: Status.SUPPORTED,
        notes: [{ text: "", url: "https://github.com/trezor" }],
      },
    },
  },
  reproducible: {
    title: "Reproducible",
    category: Category.DEVICE,
    wallets: {
      airgap: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "",
            url: "https://walletscrutiny.com/android/it.airgap.vault/",
          },
        ],
      },
      keystone: {
        status: Status.NOT_SUPPORTED,
        notes: [
          {
            text: "",
            url: "https://walletscrutiny.com/hardware/cobovaultessential/",
          },
        ],
      },
      bitbox: {
        status: Status.SUPPORTED,
        notes: [
          { text: "", url: "https://walletscrutiny.com/hardware/bitBox2/" },
        ],
      },
      coldcard: {
        status: Status.NOT_SUPPORTED,
        notes: [
          { text: "", url: "https://walletscrutiny.com/hardware/coldcardMk3/" },
        ],
      },
      ledger: {
        status: Status.NOT_SUPPORTED,
        notes: [
          { text: "", url: "https://walletscrutiny.com/hardware/ledgerNanoX/" },
        ],
      },
      trezor: {
        status: Status.SUPPORTED,
        notes: [
          { text: "", url: "https://walletscrutiny.com/hardware/trezorOne/" },
        ],
      },
    },
  },

  madeIn: {
    title: "Made In",
    category: Category.DEVICE,
    wallets: {
      airgap: { status: "🇨🇭 Switzerland", notes: [] },
      keystone: { status: "🇨🇳 China", notes: [] },
      bitbox: { status: "🇨🇭 Switzerland", notes: [] },
      coldcard: { status: "🇨🇦 Canada", notes: [] },
      ledger: { status: "🇫🇷 France", notes: [] },
      trezor: { status: "🇨🇿 Czech Republic", notes: [] },
    },
  },
  releaseDate: {
    title: "Release Date",
    category: Category.DEVICE,
    wallets: {
      airgap: { status: "2018", notes: [] },
      keystone: { status: "2018", notes: [] },
      bitbox: { status: "2016", notes: [] },
      coldcard: { status: "2018", notes: [] },
      ledger: { status: "2014", notes: [] },
      trezor: { status: "2014", notes: [] },
    },
  },
  businessModel: {
    title: "Business Model",
    category: Category.DEVICE,
    wallets: {
      airgap: {
        status: "Funding through integrations<br />Donations",
        notes: [],
      },
      keystone: { status: "Device sales", notes: [] },
      bitbox: { status: "Device sales", notes: [] },
      coldcard: { status: "Device sales", notes: [] },
      ledger: { status: "Device sales", notes: [] },
      trezor: { status: "Device sales", notes: [] },
    },
  },
  cost: {
    title: "Cost",
    category: Category.DEVICE,
    wallets: {
      airgap: {
        status: "$0",
        notes: [{ text: "Requires an old device", url: "" }],
      },
      keystone: {
        status: "$119 - $479",
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
        status: "$129",
        notes: [
          {
            text: "Shop",
            url: "https://store.coinkite.com/store/coldcard",
          },
        ],
      },
      ledger: {
        status: "$69 - $179",
        notes: [{ text: "Shop", url: "https://shop.ledger.com/" }],
      },
      trezor: {
        status: "$60 - $199",
        notes: [{ text: "Shop", url: "https://shop.trezor.io/" }],
      },
    },
  },
};
