import { Category, Feature, Status } from "./types";

export const tezos: Record<string, Feature<Category.TEZOS>> = {
  tezosContractCall: {
    title: "Show Contract Call Details",
    category: Category.TEZOS,
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
