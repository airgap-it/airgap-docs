import { device } from "./comparison-table/device";
import { usability } from "./comparison-table/usability";
import { Category, Feature } from "./comparison-table/types";
import { features } from "./comparison-table/features";
import { readFileSync, writeFileSync } from "fs";
import { privacy } from "./comparison-table/privacy";
import { bitcoin } from "./comparison-table/bitcoin";
import { ethereum } from "./comparison-table/ethereum";
import { security } from "./comparison-table/security";
import { altcoins } from "./comparison-table/altcoins";
import { polkadot } from "./comparison-table/polkadot";
import { tezos } from "./comparison-table/tezos";

const getFile = (filename: string) => {
  const text = readFileSync(filename, { encoding: "utf8" });

  return text;
};

const saveFile = (filename: string, content: string) => {
  writeFileSync(filename, content);
};

let footnote = 1;
let footnotes = new Map<number, string>();

const wallets = {
  airgap: {
    name: "AirGap Vault",
    website: "https://airgap.it/",
    github: "https://github.com/airgap-it/airgap-vault",
  },
  keystone: {
    name: "Keystone",
    website: "https://keyst.one/",
    github: "https://github.com/KeystoneHQ",
  },
  bitbox: {
    name: "Bitbox02",
    website: "https://shiftcrypto.ch/bitbox02/",
    github: "https://github.com/digitalbitbox",
  },
  coldcard: {
    name: "ColdCard",
    website: "https://coldcard.com/",
    github: "https://github.com/Coldcard",
  },
  ledger: {
    name: "Ledger",
    website: "https://www.ledger.com/",
    github: "https://github.com/LedgerHQ",
  },
  trezor: {
    name: "Trezor",
    website: "https://trezor.io/",
    github: "https://github.com/trezor",
  },
};

const addFootnote = (text: string): number => {
  const footnoteIndex = footnote;
  footnotes.set(footnoteIndex, text);
  footnote++;
  return footnoteIndex;
};

const getHeader = (): string[] => {
  const out: string[] = [];
  out.push(
    "| | " +
      Object.entries(wallets)
        .map((wallet) => `[${wallet[1].name}](${wallet[1].website})`)
        .join(" | ") +
      " |"
  );
  out.push(
    "| " +
      Object.entries(wallets)
        .map(() => `---`)
        .join(" | ") +
      " |"
  );

  return out;
};

const getRow = (feature: Feature<Category>): string => {
  return (
    "| " +
    feature.title +
    " | " +
    Object.values(feature.wallets)
      .map((entry) => {
        return `${entry.status} ${entry.notes.map((note) => {
          return `[^${addFootnote(
            `${
              note.url
                ? `[${note.text ? note.text : note.url}](${note.url})    `
                : `${note.text}    `
            }`
          )}]`;
        })}`;
      })
      .join(" | ") +
    " |"
  );
};

const allFeatures = {
  ...security,
  ...features,
  ...privacy,
  ...bitcoin,
  ...ethereum,
  ...polkadot,
  ...tezos,
  ...altcoins,
  ...usability,
  ...device,
};

const output: string[] = [];
let category: Category | undefined = undefined;
Object.values(allFeatures).forEach((feature) => {
  if (category !== feature.category) {
    output.push("");
    output.push(`## ${feature.category}`);
    output.push("");
    output.push(...getHeader());
    category = feature.category;
  }

  output.push(getRow(feature));
});

// console.log(output.join("\n"));

// console.log(footnotes);

const filename = "./src/docs/airgap-vault/features/comparison.mdx";
let fileContents = getFile(filename);
fileContents = fileContents.replace("<!-- TABLE -->", output.join("\n"));
fileContents = fileContents.replace(
  "<!-- FOOTNOTES -->",
  Array.from(footnotes.entries())
    .map((el) => `[^${el[0]}] ${el[1]}`)
    .join("\n")
);
saveFile(filename, fileContents);
