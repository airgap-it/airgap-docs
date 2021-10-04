---
title: AirGap Vault Changelog
---

## 3.10.0

#### Features

- **Mnemonic Import**: The mnemonic import process has been revamped and is no longer using the system keyboard. Instead, a virtual keyboard is used that increases security and minimises the likelyhood of typos.
- **Entropy Collection**: We added support for entropy collection with **Dice Rolls** and **Coin Flips**. Those methods will allow advanced users to provide their own entropy to generate a verifiable recovery phrase out of the dice rolls or coin flips.
- **Reset Device**: A "Reset Device" option has been added to the settings. It will remove all secrets and reset the app back to the factory settings.
- **Local Error History**: We added an option to export the local error history from the Vault. This is helpful for us to debug issues in case users can't get the Vault to run on their device.

## 3.9.0

#### Features

- **Moonriver**: Add support for Moonriver
- **Settings**: The interaction preference is now a global setting, instead of a per-secret setting.

## 3.8.0

#### Features

- **Simplified Onboarding**: It is now possible to share multiple accounts from the Vault to the Wallet at once
- **Simplified Onboarding**: The label of the secret is now also shared with the Wallet
- **Simplified Onboarding**: As part of the changes, AirGap Vault needs to read each Secret from the Secure Storage in order to generate the masterFingerprint of the secret. When sharing an account for the first time in the new version, a migration screen will be shown
- **Share Account**: The details of the QR code on the "Share Account" page can now be displayed
- **Serializer**: A new Serializer (v3) has been introduced with a number of improvements.
  - The encoding of the data is now done with [bc-ur](https://github.com/BlockchainCommons/Research/blob/master/papers/bcr-2020-005-ur.md). This will bring improvements to the QR scanning because if a single QR code is missed during scanning, it can be recovered by scanning a couple additional QRs, instead of waiting for the missed QR to appear again.
  - We now use compression before encoding the data. This brings down the size of the data drastically for some payloads, for example batch transactions with a lot of duplicate data, where this results in an over 80% decrease in size.
  - The internal serialization of the messages is now done with CBOR instead of RLP.
  - If a message cannot be parsed by AirGap, the user now has the option to "copy" the data to the clipboard to inspect the payload.
  - For backwards compatibility, users can still enable the old Serializer (v2) in the settings.

## 3.7.0

#### Features

- **BIP-85**: Add support for [BIP-85](https://en.bitcoin.it/wiki/BIP_0085), Deterministic Entropy From BIP32 Keychains
- **Tezos Sapling**: Add support for shielded transactions (Edonet only)
- **Appium**: Add automated UI tests

#### Fixes

- **Active Secret**: Make sure active secret label is not cropped
- **Message Signing**: Prompt for BIP39 Passphrase when signing a message
- **Warning**: Fix button label on secure device warning page

#### Other

- **ngrx**: Introduce ngrx and refactor transaction signing page to use it

## 3.6.2

#### Features

- **Mnemonic**: Add "Show Mnemonic" feature

#### Fixes

- **Android Secure Storage**: Throw error if user is not authenticated
- **Sign Transaction Screen**: Fix button position
- **Reproducibility**: 3.6.1 was not reproducible, that was fixed in this version

## 3.6.1

#### Fixes

- **Substrate**: Adjustments for latest runtime update

## 3.6.0

#### Features

- **QR Settings**: Use shared QR settings page in Vault and Wallet
- **Angular**: Update to Angular 11 and Ionic 5

#### Fixes

- **Secure Storage**: Secure Storage Password was not shown under some circumstances
- **Message Signing**: Show the payload that is being signed
- **Social Recovery**: Social Recovery navigation was not working under some circumstances
- **Tezos**: Display of aggregated amounts and fees
