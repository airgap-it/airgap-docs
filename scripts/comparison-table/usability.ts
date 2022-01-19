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
  communication: {
    title: "Communication to companion app",
    category: Category.USABILITY,
    wallets: {
      airgap: { status: "QR", notes: [] },
      keystone: { status: "QR, Micro SD", notes: [] },
      bitbox: { status: "USB", notes: [] },
      coldcard: { status: "Micro SD, USB", notes: [] },
      ledger: { status: "USB, Bluethooth", notes: [] },
      trezor: { status: "USB", notes: [] },
    },
  },
  timeToSetup: {
    title: "Time To Set Up",
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
  timeToImport: {
    title: "Time To Import",
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
  timeToSign: {
    title: "Time To Sign",
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
