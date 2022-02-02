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
        status: "ETH, XRP, DOT, BCH, LTC, KSM, TRX, DASH",
        notes: [{ text: "", url: "https://support.keyst.one/" }],
      },
      bitbox: {
        status: "ETH, LTC, ADA",
        notes: [{ text: "", url: "https://shiftcrypto.ch/coins/" }],
      },
      coldcard: {
        status: Status.NOT_SUPPORTED,
        notes: [],
      },
      ledger: {
        status: "Many",
        notes: [
          { text: "", url: "https://www.ledger.com/supported-crypto-assets" },
        ],
      },
      trezor: {
        status: "Many",
        notes: [{ text: "", url: "https://trezor.io/coins/" }],
      },
    },
  },
};
