---
title: AirGap Vault Changelog
---

# 3.31.0

#### Fixes

- **Ethereum**: Added possibility to sync ETH accounts to imToken

## 3.30.0

#### Features

- **Rootstock**: Added support for Rootstock

## 3.29.0

#### Features

- **Ethereum**: added support for WETH and Verse tokens
- **Tezos**: added support for uXTZ

## 3.28.0

#### Features

- **Optimism**: Improved message signing

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

- **AirGap Vault**: AirGap has a new logo!
- **AirGap Vault**: New splash screen that supports dark mode
- **Secrets Tab**: The "Accounts" tab in the bottom navigation has been removed and was replaced by the "Secrets" tab. The secrets are now no longer managed in the settings, but rather in the secrets tab. This should make the relationship between secrets and accounts clearer
- **Styling**: The secondary color was changed from pink to a light purple
- **Onboarding**: Added a new onboarding process to explain how AirGap Vault works with AirGap Wallet and other watch-only wallets like MetaMask, Sparrow or BlueWallet
- **Installation Type**: During the setup, the user now needs to specify whether the device is an online or an offline device
- **Advanced Mode**: There is now an advanced mode that can be turned on in the settings. The default is the "Simple" mode, which hides some of the more advanced features
- **Add Account**: It is now possible to add multiple accounts at once
- **Account List**: It is now possible to remove multiple accounts at once
- **Recovery Phrases**: The recovery phrase is now blurred by default. The user has to manually disable the blur to improve security
- **About Page**: The about page was redesigned and some useful resources were added
- **Secret Setup**: The Secret Setup page was redesigned
- **Interaction Settings**: The wording was changed to better explain the purpose of the interaction settings. Instead of "Same Device", we now call the action "App Switching". Instead of "Offline Device", we now call it "QR Code Scanning"
- **Ethereum**: Add Rabby wallet as a pairing option
- **Ethereum**: For legacy, non-HD accounts, the MetaMask option was removed and replaced with a migration notice
- **Duplicate Secrets**: It is no longer possible to add duplicate secrets
- **Recovery Phrase Backup Rules**: The page displaying the best practices for the recovery phrase backup now require the user to accept each individual point in order to continue to the next page
- **Text**: Improve various texts in the app to make them clearer
- **iPad**: The app can now be used in landscape mode on iPad

- **Lifehash Identicons (Advanced Only)**: If the advanced mode is enabled, the lifehash of the recovery phrase will displayed in the secret card and when adding a new secret
- **Recovery Phrase Fingerprint (Advanced Only)**: If the advanced mode is enabled, the fingerprint of the recovery phrase will be displayed in the secret card and when adding a new secret
- **Sync Specific Secrets (Advanced Only)**: If the advanced mode is enabled, it is now possible to sync all accounts of multiple secrets with one animated QR code
- **Account info (Advanced Only)**: If the advanced mode is enabled, the account detail page shows additional information like if it's a HD wallet or if a BIP39 passphrase was used

#### Fixes

- **All Pages**: Floating buttons should now no longer cover the bottom of the page
- **Interaction**: Sharing multiple accounts at once would always default to QR codes, even if the same device option was selected
- **Capacitor**: Updated dependencies to latest version to prevent app crashes

## 3.18.0

#### Features

- **Pairing**: Redesign the "account detail" page. Instead of showing the address as a QR code, we now display companion apps that you can use with the selected account. For example, if you select an Ethereum account, it will show the _MetaMask_ option, alongside _AirGap Wallet_. For Bitcoin (SegWit), it will show _BlueWallet_ and _Sparrow Wallet_ as an option
- **Secret Import**: Improved the behavior when adding or removing words

#### Fixes

- **Ethereum**: Fixed an issue where a prompt to enter a BIP39 passphrase was shown by accident when doing ERC-20 transfers
- **Wordlist**: Added the missing back button
- **App**: Fixed an issue where subsequent deeplinks could result in the app becoming unresponsive

## 3.17.4

#### Bugfixes

- **Tezos**: Add USDT token

## 3.17.3

#### Features

- **Tezos**: Add BTCtz and ETHtz tokens

## 3.17.2

#### Bugfixes

- **General**: A regression was introduced in the last update which prevented certain protocols from working properly. This releases fixes the issue.

## 3.17.1

#### Features

- **General**: Update app to Angular 13

#### Bugfixes

- **Reproducibility**: We are continuing to investigate the issues around reproducing our app and included an imporvement in this release that should hopefully address the sporadic reproducibility issues. You can follow the progress here: https://github.com/airgap-it/airgap-vault/issues/127

## 3.17.0

#### Features

- **Shiden**: Added Shiden integration

## 3.16.0

#### Features

- **Astar**: Added Astar integration
- **Tezos**: Updates for Tezos Ithaca upgrade
- **General**: Bug fixes and improvements

## 3.15.0

#### Features

- **Tezos**: Add new sapling contracts.

## 3.14.0

#### Features

- **Ethereum**: Message signing such as `Eth Sign`, `Personal Sign` and `Sign Typed Data` are now supported.

#### Fixes

- **Ethereum**: Parsing of some contract calls failed, which resulted in an error message and inability to sign the transaction.

## 3.13.1

#### Features

- **Security**: The authentication logic on Android was improved.

## 3.13.0

#### Features

- **Ethereum**: Support for "MetaMask" has been added. Use MetaMask as your watch-only wallet to manage your Ethereum accounts. You can find a tutorial here: https://support.airgap.it/guides/metamask
- **Bitcoin**: Added an account selection screen in case the PSBT from a watch-only wallet contains an invalid master fingerprint. Because a simple matching is not possible in this case, the user has to select the BTC account he wants to sign the transaction with.
- **Moonbeam**: Add Moonbeam support

## 3.12.0

#### Features

- **Bitcoin**: Add support for Bitcoin "watch-only" wallets like BlueWallet and Sparrow. Currently, this is a beta feature and should only be used for testing. We are happy for any feedback.
- **Error History**: Add error history page to see local errors
- **Docker**: Optimise Dockerfile (thanks @mohammadrafigh)

#### Fixes

- **GitHub Actions**: Fix GitHub Actions pipelines

## 3.11.2

#### Fixes

- **Local Storage**: Fixed a bug that could result in the secrets not being visible.

## 3.11.1

#### Fixes

- **Android**: Bugfixes related to Android 12.

## 3.11.0

#### Features

- **Bitcoin SegWit**: AirGap now supports **Bitcoin SegWit**. When generating a new Bitcoin account in AirGap Vault, the user now has 2 options. SegWit or Legacy. Legacy accounts are needed for backwards compatibility. If you have ever generated a Bitcoin account in AirGap Vault, you will need to select the Legacy option to access your funds.

SegWit accounts have a slightly different format and a couple of advantages. Most notabily, transaction fees are a lot smaller for SegWit transactions. We recommend using SegWit accounts whenever possible. If you still have a legacy account, you will have to send all your BTC to a new SegWit account. You can do this to benefit from the lower fees, but it is not required.

- **Entropy Collection with Dice Rolls and Coin Flips**: You can now generate mnemonics by providing entropy collected through **dice rolls** and **coin flips**. This feature allows users to generate a deterministic and verifiable mnemonic out of the entropy they provide.

- **Easier BIP85 Child Mnemonic Management**: It is now possible to directly import a BIP85 child mnemonic as a new secret.

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
