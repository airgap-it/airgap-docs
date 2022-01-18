import { Category, Feature, Status } from "./types";

export const polkadot: Record<string, Feature<Category.POLKADOT>> = {
  polkadotjs: {
    title: "Polkadot.js support",
    category: Category.POLKADOT,
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
