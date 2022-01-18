import { Category, Feature, Status } from "./types";

export const features: Record<string, Feature<Category.FEATURES>> = {
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
};
