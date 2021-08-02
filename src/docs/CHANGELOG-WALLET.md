---
title: AirGap Wallet Changelog
---

## 3.8.0

#### Features

- **Simplified Onboarding**: It is now possible to share multiple accounts from the Vault to the Wallet at once
- **Simplified Onboarding**: The label of the secret is now also shared with the Wallet
- **Simplified Onboarding**: Accounts are now grouped by Secret / Label in the Portfolio View
- **Serializer**: A new Serializer (v3) has been introduced with a number of improvements.
  - The encoding of the data is now done with [bc-ur](https://github.com/BlockchainCommons/Research/blob/master/papers/bcr-2020-005-ur.md). This will bring improvements to the QR scanning because if a single QR code is missed during scanning, it can be recovered by scanning a couple additional QRs, instead of waiting for the missed QR to appear again.
  - We now use compression before encoding the data. This brings down the size of the data drastically for some payloads, for example batch transactions with a lot of duplicate data, where this results in an over 80% decrease in size.
  - The internal serialization of the messages is now done with CBOR instead of RLP.
  - If a message cannot be parsed by AirGap, the user now has the option to "copy" the data to the clipboard to inspect the payload.
  - For backwards compatibility, users can still enable the old Serializer (v2) in the settings.
- **WalletConnect**: AirGap now supports [WalletConnect](https://walletconnect.org/) to connect to Ethereum dApps
- **Beacon**: Improve flow with additional feedback
- **Polkadot/Kusama**: It is now possible to ignore the "Existential Deposit" and transfer all funds out of an account
- **youves**: Add support for "uUSD" and "YOU" tezos tokens

#### Fixes

- **Aeternity**: Fix explorer link

## 3.7.1

#### Fixes

- **Beacon**: Fix connectivity issue

## 3.7.0

#### Features

- **Tezos Sapling**: Add support for shielded transactions (Edonet only)
- **Beacon**: Support for multiple nodes
- **Cosmos**: A memo can now be set when preparing transactions

## 3.6.4

#### Fixes

- **QR**: Scan again after successful scan
- **Substrate**: Adjust to new runtime version to fix balance issue

## 3.6.3

#### Features

- **Beacon**: Add account selection

#### Fixes

- **Transactions**: Fix Blockexplorer link for pending transactions
- **Cosmos**: Updates for Stargate protocol upgrade

## 3.6.2

#### Fixes

- **Substrate**: Adjust to new runtime version to fix balance issue

## 3.6.1

#### Fixes

- **Beacon**: Properly store beacon requests before relaying to Vault

## 3.6.0

#### Features

- **Preapare Transaction**: New layout
- **Beacon**: Add message signing
- **Beacon**: Send disconnect event
- **QR Settings**: Use shared QR settings page in Vault and Wallet
- **Angular**: Update to Angular 11 and Ionic 5

#### Fixes

- **Transactions**: Fix transaction history
