import { Category, Feature, Status } from "./types";

export const polkadot: Record<string, Feature<Category.POLKADOT>> = {
  polkadotjs: {
    title: "Polkadot.js support",
    category: Category.POLKADOT,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.UNSURE, notes: [] },
      trezor: { status: Status.UNSURE, notes: [] },
    },
  },
};
