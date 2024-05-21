---
title: AirGap Wallet Changelog
---

# 3.31.0

#### Fixes

- Bug fixes and improvements

## 3.30.0

#### Features

- **Rootstock**: Added support for Rootstock

## 3.29.0

#### Features

- **Ethereum**: added support for WETH and Verse tokens
- **Tezos**: added support for uXTZ

## 3.28.0

#### Features

- **WalletConnect**: Added support for WalletConnect 2

## 3.26.0

#### Features

- **ICP**: Added support for ICP staking

## 3.25.2

#### Fixes

- Bug fixes and improvements

## 3.25.0

#### Features

- **Coreum**: Added support for Coreum

## 3.24.0

#### Features

- **ICP**: Added support for ckBTC

## 3.20.0

#### Fixes

- **Tezos**: Fix transaction creation for certain contract calls

## 3.19.0

#### Features

- **AirGap Wallet**: AirGap has a new logo!
- **iPad**: The app can now be used in landscape mode on iPad
- **Tezos**: Sapling transactions are now enabled on ghostnet

#### Fixes

- **Signing Page**: Text was not readable when dark mode was enabled
- **Capacitor**: Updated dependencies to latest version to prevent app crashes

## 3.18.5

#### Fixes

- **Tezos**: Add compatibility with Kathmandu

## 3.18.4

#### Features

- **App**: Add Dark Mode (Thanks to a PR from [r-muhairi](https://github.com/airgap-it/airgap-wallet/pull/153))
- **WalletConnect**: Add account selection in case the user has multiple Ethereum addresses

#### Fixes

- **Transaction Prepare**: When pasting an address, the fee is immediately calculated and the "Create Transaction" button enabled
- **Translations**: Fix issue where chinese language was not selected

## 3.18.3

#### Features

- **Tezos**: Add USDT token

## 3.18.2

#### Features

- **Tezos**: Add Jakartanet

## 3.18.1

#### Fixes

- **WalletConnect**: Improved the stability of WalletConnect

## 3.18.0

#### Features

- **Astar**: Added Astar integration
- **Tezos**: Listed uBTC, DOGAMI and kUSD Tezos tokens

## 3.17.0

#### Features

- **Astar**: Added Astar integration
- **Tezos**: Updates for Tezos Ithaca upgrade
- **General**: Bug fixes and improvements

## 3.16.0

#### Features

- **Tezos**: The objkt.com API has been switched to v2.
- **Tezos**: When connecting to a dApp through beacon, the public key is now shared in the `edpk...` format instead of hex.
- **Tezos**: Add new sapling contracts.

## 3.15.0

#### Features

- **Moonbeam**: Add support for Moonbeam

## 3.14.0

#### Features

- **Tezos**: Add Hangzhou testnet

#### Fixes

- **Cosmos**: Transaction encoding fix
- **Moonriver**: Delegation fix

## 3.13.0

#### Features

- **Tezos**: Add tokens **QUIPU**, **uDEFI**, **ctez**, **PLENTY** and **WRAP**.
- **Tezos**: Added support for Tezos generic FA1.2 / FA2 tokens.

#### Fixes

- **Interaction**: Interaction settings did not work under some circumstances.
- **WalletConnect**: Some requests were not handled correctly.

## 3.12.0

#### Features

- **Interaction**: Users can now set the default interaction setting per secret.

#### Fixes

- **Android**: Fixes for Android 12
- **Beacon**: Update `beacon-sdk` to version `2.3.5`

## 3.11.1

#### Fixes

- **Polkadot / Kusama**: Update runtime

## 3.11.0

#### Features

- **Bitcoin SegWit**: AirGap now supports **Bitcoin SegWit**. When generating a new Bitcoin account in AirGap Vault, the user now has 2 options. SegWit or Legacy. Legacy accounts are needed for backwards compatibility. If you have ever generated a Bitcoin account in AirGap Vault, you will need to select the Legacy option to access your funds.

SegWit accounts have a slightly different format and a couple of advantages. Most notabily, transaction fees are a lot smaller for SegWit transactions. We recommend using SegWit accounts whenever possible. If you still have a legacy account, you will have to send all your BTC to a new SegWit account. You can do this to benefit from the lower fees, but it is not required.

## 3.10.0

#### Features

- **Tezos**: Add possibility to edit fee, gas limit and storage limit for beacon operation requests

## 3.9.1

#### Fixes

- **Bitcoin**: Fix address validation regex that would mark some valid addresses as invalid

## 3.9.0

#### Features

- **Protocols**: Add Moonriver support
- **Exchange**: Add Quipuswap decentralised exchange on Tezos

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
