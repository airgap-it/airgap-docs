import { Category, Feature, Status } from "./types";

export const ethereum: Record<string, Feature<Category.ETHEREUM>> = {
  metamask: {
    title: "MetaMask",
    category: Category.ETHEREUM,
    wallets: {
      airgap: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "",
            url: "https://support.airgap.it/guides/metamask",
          },
        ],
      },
      keystone: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "",
            url:
              "https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone",
          },
        ],
      },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.SUPPORTED, notes: [] },
      trezor: { status: Status.SUPPORTED, notes: [] },
    },
  },
  ethContractCall: {
    title: "Show Contract Call Details",
    category: Category.ETHEREUM,
    wallets: {
      airgap: { status: Status.PARTIALLY_SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.UNSURE, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.UNSURE, notes: [] },
      trezor: { status: Status.UNSURE, notes: [] },
    },
  },
};
