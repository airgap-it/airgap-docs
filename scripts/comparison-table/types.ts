export enum Status {
  SUPPORTED = "✅",
  NOT_SUPPORTED = "❌",
  PARTIALLY_SUPPORTED = "🧩",
  IN_DEVELOPMENT = "⚙️",
  UNSURE = "?",
}

export enum Category {
  PRIVACY = "Privacy",
  BITCOIN = "Bitcoin",
  ETHEREUM = "Ethereum",
  TEZOS = "Tezos",
  POLKADOT = "Polkadot",
  ALTCOINS = "Altcoins",
  FEATURES = "Features",
  SECURITY = "Security",
  USABILITY = "Usability",
  DEVICE = "Device",
}

export interface Feature<T> {
  title: string;
  category: T;
  wallets: {
    airgap: {
      status: Status | string;
      notes: { text: string; url?: string }[];
    };
    keystone: {
      status: Status | string;
      notes: { text: string; url?: string }[];
    };
    bitbox: {
      status: Status | string;
      notes: { text: string; url?: string }[];
    };
    coldcard: {
      status: Status | string;
      notes: { text: string; url?: string }[];
    };
    ledger: {
      status: Status | string;
      notes: { text: string; url?: string }[];
    };
    trezor: {
      status: Status | string;
      notes: { text: string; url?: string }[];
    };
  };
}
