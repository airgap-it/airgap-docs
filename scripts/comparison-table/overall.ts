import { Category, Feature, Status } from "./types";

export const overall: Record<string, Feature<Category.OVERALL>> = {
  openSource: {
    title: "Open Source",
    category: Category.OVERALL,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.SUPPORTED, notes: [] },
      trezor: {
        status: Status.SUPPORTED,
        notes: [
          { text: "", url: "https://wiki.trezor.io/Open-source_software" },
        ],
      },
    },
  },
  reproducible: {
    title: "Reproducible",
    category: Category.OVERALL,
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
        status: Status.UNSURE,
        notes: [
          {
            text: "",
            url: "https://walletscrutiny.com/android/com.keystone.mobile/",
          },
        ],
      },
      bitbox: {
        status: Status.UNSURE,
        notes: [
          { text: "", url: "https://walletscrutiny.com/hardware/bitBox2/" },
        ],
      },
      coldcard: {
        status: Status.UNSURE,
        notes: [
          { text: "", url: "https://walletscrutiny.com/hardware/coldcardMk3/" },
        ],
      },
      ledger: {
        status: Status.UNSURE,
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
  multipleMnemonics: {
    title: "Multiple Mnemonics",
    category: Category.OVERALL,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: {
        status: Status.NOT_SUPPORTED,
        notes: [
          {
            text: "",
            url:
              "https://www.reddit.com/r/TREZOR/comments/qqufnd/does_one_trezor_t_support_multiple_walletsseed/",
          },
        ],
      },
    },
  },
};
