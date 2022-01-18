import { Category, Feature, Status } from "./types";

export const usability: Record<string, Feature<Category.USABILITY>> = {
  largeScreen: {
    title: "Large Screen",
    category: Category.USABILITY,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.PARTIALLY_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  avgTimeToSetup: {
    title: "Average Time To Set Up",
    category: Category.USABILITY,
    wallets: {
      airgap: { status: Status.UNSURE, notes: [] },
      keystone: { status: Status.UNSURE, notes: [] },
      bitbox: { status: Status.UNSURE, notes: [] },
      coldcard: { status: Status.UNSURE, notes: [] },
      ledger: { status: Status.UNSURE, notes: [] },
      trezor: { status: Status.UNSURE, notes: [] },
    },
  },
  avgTimeToImport: {
    title: "Average Time To Import",
    category: Category.USABILITY,
    wallets: {
      airgap: { status: Status.UNSURE, notes: [] },
      keystone: { status: Status.UNSURE, notes: [] },
      bitbox: { status: Status.UNSURE, notes: [] },
      coldcard: { status: Status.UNSURE, notes: [] },
      ledger: { status: Status.UNSURE, notes: [] },
      trezor: { status: Status.UNSURE, notes: [] },
    },
  },
  avgTimeToSign: {
    title: "Average Time To Sign",
    category: Category.USABILITY,
    wallets: {
      airgap: { status: Status.UNSURE, notes: [] },
      keystone: { status: Status.UNSURE, notes: [] },
      bitbox: { status: Status.UNSURE, notes: [] },
      coldcard: { status: Status.UNSURE, notes: [] },
      ledger: { status: Status.UNSURE, notes: [] },
      trezor: { status: Status.UNSURE, notes: [] },
    },
  },
};
