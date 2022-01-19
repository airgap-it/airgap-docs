import { Category, Feature, Status } from "./types";

export const features: Record<string, Feature<Category.FEATURES>> = {
  multipleMnemonics: {
    title: "Multiple Mnemonics",
    category: Category.FEATURES,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  bip39: {
    title: "BIP39 Passphrase",
    category: Category.FEATURES,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.SUPPORTED, notes: [] },
      trezor: {
        status: Status.SUPPORTED,
        notes: [
          { text: "Passphrase has to be entered on online device", url: "" },
        ],
      },
    },
  },
  bip85: {
    title: "BIP85",
    category: Category.FEATURES,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  bip39Wordlist: {
    title: "BIP39 Wordlist",
    category: Category.FEATURES,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [{ text: "Only English" }] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  encryptedBackup: {
    title: "Encrypted Backup",
    category: Category.FEATURES,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
};
