import { Category, Feature, Status } from "./types";

export const altcoins: Record<string, Feature<Category.ALTCOINS>> = {
  altcoins: {
    title: "Number of Altcoins",
    category: Category.ALTCOINS,
    wallets: {
      airgap: {
        status: "ETH, DOT, KSM, ATOM, XTZ, MOVR, GLMR, AE, GRS",
        notes: [],
      },
      keystone: {
        status: "",
        notes: [{ text: "", url: "https://support.keyst.one/" }],
      },
      bitbox: {
        status: "",
        notes: [{ text: "", url: "https://shiftcrypto.ch/coins/" }],
      },
      coldcard: {
        status: Status.NOT_SUPPORTED,
        notes: [],
      },
      ledger: {
        status: "",
        notes: [
          { text: "", url: "https://www.ledger.com/supported-crypto-assets" },
        ],
      },
      trezor: {
        status: "",
        notes: [{ text: "", url: "https://trezor.io/coins/" }],
      },
    },
  },
  nofTokens: {
    title: "Number of Altcoins",
    category: Category.ALTCOINS,
    wallets: {
      airgap: { status: "100+", notes: [] },
      keystone: { status: "100+", notes: [] },
      bitbox: { status: "100+", notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: "100+", notes: [] },
      trezor: { status: "100+", notes: [] },
    },
  },
};
