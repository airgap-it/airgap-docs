---
title: AirGap Vault Changelog
---

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
