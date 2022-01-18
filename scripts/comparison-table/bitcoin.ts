import { Category, Feature, Status } from "./types";

export const bitcoin: Record<string, Feature<Category.BITCOIN>> = {
  btcOnly: {
    title: "BTC Only Version",
    category: Category.BITCOIN,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "",
            url:
              "https://blog.keyst.one/the-relevance-benefits-of-keystones-btc-only-firmware-8965ebb42e48",
          },
        ],
      },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  btcSegwit: {
    title: "BTC Segwit",
    category: Category.BITCOIN,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.UNSURE, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.SUPPORTED, notes: [] },
      trezor: { status: Status.SUPPORTED, notes: [] },
    },
  },
  btcTaproot: {
    title: "BTC Taproot",
    category: Category.BITCOIN,
    wallets: {
      airgap: { status: Status.IN_DEVELOPMENT, notes: [{ text: "", url: "" }] },
      keystone: {
        status: Status.IN_DEVELOPMENT,
        notes: [{ text: "", url: "" }],
      },
      bitbox: { status: Status.IN_DEVELOPMENT, notes: [{ text: "", url: "" }] },
      coldcard: {
        status: Status.IN_DEVELOPMENT,
        notes: [{ text: "", url: "" }],
      },
      ledger: {
        status: Status.IN_DEVELOPMENT,
        notes: [
          {
            text: "",
            url:
              "https://support.ledger.com/hc/en-us/articles/4410908103185-Creating-a-Bitcoin-Taproot-account-in-Ledger-Live?docs=true",
          },
        ],
      },
      trezor: {
        status: Status.IN_DEVELOPMENT,
        notes: [{ text: "", url: "https://wiki.trezor.io/Taproot" }],
      },
    },
  },
  btcMultisig: {
    title: "BTC Multisig",
    category: Category.BITCOIN,
    wallets: {
      airgap: { status: Status.IN_DEVELOPMENT, notes: [] },
      keystone: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "",
            url:
              "https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/electrum/electrum-2-3-psbt-multi-signature",
          },
        ],
      },
      bitbox: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "",
            url:
              "https://shiftcrypto.ch/blog/bitbox02-electrum-bitcoin-multisig/",
          },
        ],
      },
      coldcard: {
        status: Status.SUPPORTED,
        notes: [{ text: "", url: "https://coldcard.com/docs/multisig" }],
      },
      ledger: { status: Status.SUPPORTED, notes: [{ text: "", url: "" }] },
      trezor: { status: Status.SUPPORTED, notes: [{ text: "", url: "" }] },
    },
  },
  btcPSBT: {
    title: "PSBT",
    category: Category.BITCOIN,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.UNSURE, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.UNSURE, notes: [] },
      trezor: { status: Status.UNSURE, notes: [] },
    },
  },
  btcSparrow: {
    title: "Sparrow Wallet",
    category: Category.BITCOIN,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.SUPPORTED, notes: [] },
      trezor: { status: Status.SUPPORTED, notes: [] },
    },
  },
  btcBlueWallet: {
    title: "BlueWallet",
    category: Category.BITCOIN,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.UNSURE, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.UNSURE, notes: [] },
      trezor: { status: Status.UNSURE, notes: [] },
    },
  },
};
