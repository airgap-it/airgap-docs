import { Category, Feature, Status } from "./types";

export const privacy: Record<string, Feature<Category.PRIVACY>> = {
  noKYC: {
    title: "No KYC required to use",
    category: Category.PRIVACY,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.SUPPORTED, notes: [] },
      trezor: { status: Status.SUPPORTED, notes: [] },
    },
  },
  pruchaseAnonymously: {
    title: "Purchase Anonymously",
    category: Category.PRIVACY,
    wallets: {
      airgap: {
        status: Status.SUPPORTED,
        notes: [
          { text: "Use any device, no need to sign up to receive a device." },
        ],
      },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
};
