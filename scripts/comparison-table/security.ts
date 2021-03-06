import { Category, Feature, Status } from "./types";

export const security: Record<string, Feature<Category.SECURITY>> = {
  airgap: {
    title: "Completely air-gapped",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: {
        status: Status.NOT_SUPPORTED,
        notes: [
          {
            text: "",
            url:
              "https://shiftcrypto.ch/blog/does-airgap-make-bitcoin-hardware-wallets-more-secure/",
          },
        ],
      },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  secureChip: {
    title: "Secure chip",
    category: Category.SECURITY,
    wallets: {
      airgap: {
        status: Status.SUPPORTED,
        notes: [
          {
            text:
              "Depends on the device. Modern mobile phones all have secure elements.",
          },
        ],
      },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  runsOnAnyDevice: {
    title: "Runs on any device",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  entropyDiceRoll: {
    title: "Entropy with dice rolls",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.SUPPORTED, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  entropyCoinFlip: {
    title: "Entropy with coin flips",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  shamir: {
    title: "Social Recovery / Shamir",
    category: Category.SECURITY,
    wallets: {
      airgap: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "Currently not using a standard, will be replaced by SSKR",
            url: "",
          },
        ],
      },
      keystone: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "SLIP39",
            url:
              "https://blog.keyst.one/why-keystone-implemented-shamir-backups-71e319f972a6",
          },
        ],
      },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.SUPPORTED, notes: [{ text: "SLIP39" }] },
    },
  },
  sskr: {
    title: "SSKR",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.IN_DEVELOPMENT, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  seedXor: {
    title: "Seed XOR",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.IN_DEVELOPMENT, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  duressPin: {
    title: "Duress Pin",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  brickMePin: {
    title: "Brick Me Pin",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  countdownLogin: {
    title: "Countdown Login",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  countdownToBrick: {
    title: "Countdown To Brick",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  antiPhishingWords: {
    title: "Anti-Phishing Words",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.NOT_SUPPORTED, notes: [] },
      coldcard: { status: Status.SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
  securityAudit: {
    title: "External Security Audit",
    category: Category.SECURITY,
    wallets: {
      airgap: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "",
            url:
              "https://github.com/airgap-it/airgap-coin-lib/tree/master/docs/audits",
          },
        ],
      },
      keystone: {
        status: Status.SUPPORTED,
        notes: [
          {
            text: "",
            url:
              "https://github.com/KeystoneHQ/Keystone-developer-hub/tree/main/audit-report",
          },
        ],
      },
      bitbox: { status: Status.UNSURE, notes: [] },
      coldcard: { status: Status.UNSURE, notes: [] },
      ledger: { status: Status.UNSURE, notes: [] },
      trezor: { status: Status.UNSURE, notes: [] },
    },
  },
  antiKlepto: {
    title: "Anti-Klepto Protection",
    category: Category.SECURITY,
    wallets: {
      airgap: { status: Status.NOT_SUPPORTED, notes: [] },
      keystone: { status: Status.NOT_SUPPORTED, notes: [] },
      bitbox: { status: Status.SUPPORTED, notes: [] },
      coldcard: { status: Status.NOT_SUPPORTED, notes: [] },
      ledger: { status: Status.NOT_SUPPORTED, notes: [] },
      trezor: { status: Status.NOT_SUPPORTED, notes: [] },
    },
  },
};
