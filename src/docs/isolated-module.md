---
title: Isolated Module
---

# Add new blockchains to AirGap with Isolated Modules

Isolated Modules is a feature of AirGap that allows anyone to extend the applications with new blockchain support. Developers can use the Isolated Modules API to develop packages providing a blockchain implementation of their choice that users can later sideload into their applications and create accounts with.

After being sideloaded, the packages are considered standalone modules that will execute in their own isolated environments.

Get started by learning [how to develop an Isolated Module](#how-to-develop-an-isolated-module).

## Table of Contents

- [Projects](#projects)
- [How to develop an Isolated Module](#how-to-develop-an-isolated-module)
  - [Code](#code)
  - [Manifest](#manifest)
  - [Execution Environments](#execution-environments)
  - [Signature](#signature)
  - [Bundle](#bundle)
  - [Examples](#examples)
  - [Testing](#testing)
- [Advanced](#advanced)
  - [Generic Types](#generic-types)
    - [`AirGapModule`](#airgapmodule)
    - [`AirGapOfflineProtocol`](#airgapofflineprotocol)
    - [`AirGapOnlineProtocol`](#airgaponlineprotocol)
    - [`AirGapProtocol`](#airgapprotocol)
  - [Extensions](#extensions)
    - [`AirGapOfflineProtocol`](#airgapofflineprotocol-1)
      - [`Bip32`](#bip32)
      - [`ConfigurableContract`](#configurablecontract)
      - [`MultiAddressPublicKey`](#multiaddresspublickey)
      - [`SubProtocol`](#subprotocol)
      - [`SingleTokenSubProtocol`](#singletokensubprotocol)
      - [`MultiTokenSubProtocol`](#multitokensubprotocol)
      - [`AsymmetricEncryption`](#asymmetricencryption)
      - [`SignMessage`](#signmessage)
      - [`AES`](#aes)
      - [`Crypto`](#crypto)
    - [`AirGapOnlineProtocol`](#airgaponlineprotocol-1)
      - [`Bip32`](#bip32-1)
      - [`ConfigurableContract`](#configurablecontract-1)
      - [`MultiAddressPublicKey`](#multiaddresspublickey-1)
      - [`SubProtocol`](#subprotocol-1)
      - [`SingleTokenSubProtocol`](#singletokensubprotocol-1)
      - [`MultiTokenSubProtocol`](#multitokensubprotocol-1)
      - [`AsymmetricEncryption`](#asymmetricencryption-1)
      - [`SignMessage`](#signmessage-1)
      - [`Crypto`](#crypto-1)
      - [`FetchDataForAddress`](#fetchdataforaddress)
      - [`FetchDataForMultipleAddresses`](#fetchdataformultipleaddresses)
      - [`ConfigurableTransactionInjector`](#configurabletransactioninjector)
      - [`TransactionStatusChecker`](#transactionstatuschecker)
    - [`AirGapProtocol`](#airgapprotocol-1)

## Projects

| Name                   | Author                                               | Code                                             | AirGap Community                                                                                               |
| ---------------------- | ---------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `airgap-iso-rootstock` | IOVLabs <info@iovlabs.org> (https://www.iovlabs.org) | https://github.com/rsksmart/airgap-iso-rootstock | [`iso-rootstock`](https://github.com/airgap-it/airgap-community/tree/main/packages/isolated-modules/rootstock) |

## How to develop an Isolated Module

An Isolated Module is a JavaScript package expected to meet specific requirements in terms of both code and file structure. It will be executed in a special JavaScript environment on a mobile device running Android or iOS. Depending on the environment you choose for a platform, different requirements and restrictions may apply to your code.

See the steps below to learn about all the requirements and how to fulfill them.

### Code

To make sure your code conforms to the expected interface it is highly recommended to base your code on the `@airgap/module-kit` package. It's a set of utility functions and types (TypeScript) that should help you develop your Isolated Module fast and easy. Use [npm](https://docs.npmjs.com/about-npm) or [Yarn](https://yarnpkg.com/) to install it in your project:

**npm**

```
$ npm install --save @airgap/module-kit
```

**Yarn**

```
$ yarn add @airgap/module-kit
```

_Note: The further steps assume that your project uses TypeScript and will use TypeScript-based examples to better explain the interface requirements._

#### Module

An Isolated Module's code is expected to have a single entrypoint, the `create` function exported from the main source file. The `create` function should return an instance of your implementation of the `AirGapModule` interface.

```typescript
// index.ts

import { AirGapModule } from "@airgap/module-kit";
import { MyModule } from "./module.ts";

export function create(): AirGapModule {
  return new MyModule();
}
```

`AirGapModule` holds information about what blockchain protocols the Isolated Module supports and, upon request, can create objects responsible for delivering the functionality AirGap applications require. This is where you can list the protocols AirGap users can use to create accounts with and configure them with different network options.

_Note: The `AirGapModule` interface in its default form is a simplification. See [Generic Types](#generic-types) to learn how to achieve better type safety._

There is no limitation in how many blockchain protocols a single module can support nor in which context (offline/Vault or online/Wallet) they can be used. The example below creates a single module which supports 3 different types of protocols, a protocol that will be used only in AirGap Vault (`'offline-only-protocol'`), a protocol that will be used only in AirGap Wallet (`'online-only-protocol'`) and a protocol that will be used both in AirGap Vault and Wallet (`'offline-and-online-protocol'`). The module ships with a `mainnet` network configuration for the `'online-only-protocol'` protocol and `mainnet` and `testnet` configurations for the `'offline-and-online-protocols'` protocol.

```typescript
// module.ts

import {
    AirGapBlockExplorer,
    AirGapModule,
    AirGapOfflineProtocol,
    AirGapOnlineProtocol,
    AirGapV3SerializerCompanion,
    createSupportedProtocols,
    ModuleNetworkRegistry,
    ProtocolConfiguration,
    ProtocolNetwork
} from '@airgap/module-kit'
import { MyProtocol, MY_PROTOCOL_MAINNET_NETWORK, MY_PROTOCOL_TESTNET_NETWORK } from './protocol-full'
import { MyOfflineProtocol } from './protocol-offline'
import { MY_ONLINE_PROTOCOL_MAINNET_NETWORK } from './protocol-online'
import { MyProtocolBlockExplorer } from './protocol-full-block-explorer.ts'
import { MyOnlineProtocolBlockExplorer } from './protocol-online-block-explorer.ts'
import { MyV3SerializerCompanion } from './v3serializer'

class MyModule implements AirGapModule {
    /**
     * A set of protocols supported by this module along with their configuration.
     * Grouped by the protocol identifier.
     */
    supportedProtocols: Record<string, ProtocolConfiguration> = createSupportedProtocols(
        { /* online protocols */
            'online-only-protocol': new ModuleNetworkRegistry({
                supportedNetworks: [MY_ONLINE_PROTOCOL_MAINNET_NETWORK]
            }),
            'offline-and-online-protocol': new ModuleNetworkRegistry({
                supportedNetworks: [MY_PROTOCOL_MAINNET_NETWORK, MY_PROTOCOL_TESTNET_NETWORK]
            })
        },
        [ /* offline protocols */
            'offline-only-protocol',
            'offline-and-online-protocol'
        ]
    )

    /**
     * Create an offline protocol instance, if supported.
     *
     * @param identifier - The identifier of the protocol whose instance should be created
     * @returns A protocol instance or `undefined` if the type of protocol is not supported
     */
    createOfflineProtocol(identifier: string): Promise<AirGapOfflineProtocol | undefined> {
        switch (identifier) {
            case 'offline-only-protocol':
                return new MyOfflineProtocol()
            case 'offline-and-online-protocol':
                return new MyProtocol()
            default:
                return undefined
        }
    }

    /**
     * Create an online protocol instance, if supported.
     *
     * @param identifier - The identifier of the protocol whose instance should be created
     * @param networkOrId - A protocol network or its ID which should be used to create the protocol instance
     * @returns A protocol instance or `undefined` if the type of protocol is not supported
     */
    createOnlineProtocol(identifier: string, networkOrId?: string | ProtocolNetwork): Promise<AirGapOnlineProtocol | undefined> {
        const network = /* get the network configuration based on `networkOrId` */

        switch (identifier) {
            case 'online-only-protocol':
                return new MyOnlineProtocol(network)
            case 'offline-and-online-protocol':
                return new MyProtocol(network)
            default:
                return undefined
        }
    }

   /**
     * Create a block explorer, if online protocols are supported.
     *
     * @param identifier - The identifier of the protocol for which a block explorer instance should be created
     * @param networkOrId - A protocol network or its ID which should be used to create the block explorer instance
     * @returns A block explorer instance or `undefined` if online protocols aren't supported
     */
    createBlockExplorer(identifier: string, networkOrId?: string | ProtocolNetwork): Promise<AirGapBlockExplorer | undefined> {
        const network = /* get the network configuration based on `networkOrId` */

        switch (identifier) {
            case 'online-only-protocol':
                return new MyOnlineProtocolBlockExplorer(network)
            case 'offline-and-online-protocol':
                return new MyProtocolBlockExplorer(network)
            default:
                return undefined
        }
    }

    /**
     * Create AirGap's V3 Serializer companion object.
     * @returns A V3 Serializer companion instance.
     */
    createV3SerializerCompanion(): Promise<AirGapV3SerializerCompanion> {
        return new MyV3SerializerCompanion()
    }
}

```

#### Protocol

In AirGap a protocol is a blockchain client used to create accounts and interact with them. Depending on in which AirGap application the protocol is used, it can have different interface requirements.

##### Offline (AirGap Vault)

AirGap Vault requires protocols to run completely offline and will use them to create key pairs and sign transactions. To create an offline protocol implement the `AirGapOfflineProtocol` interface.

_Note: The `AirGapOfflineProtocol` interface in its default form is a simplification. See [Generic Types](#generic-types) to learn how to achieve better type safety._

```typescript
// protocol-offline.ts

import {
  AddressCursor,
  AddressWithCursor,
  AirGapOfflineProtocol,
  AirGapTransaction,
  CryptoConfiguration,
  CryptoDerivative,
  KeyPair,
  ProtocolMetadata,
  PublicKey,
  SecretKey,
  SignedTransaction,
  UnsignedTransaction,
} from "@airgap/module-kit";

class MyOfflineProtocol implements AirGapOfflineProtocol {
  /**
   * Get this protocol's metadata, i.e. its unique configuration.
   *
   * The metadata will be used to identify the protocol, display its details
   * and help building customized forms.
   *
   * @returns The metadata
   */
  getMetadata(): Promise<ProtocolMetadata> {
    /* ... */
  }

  /**
   * Get this protocol's crypto configuration.
   *
   * The crypto configuration will be used to create a derivative from a secret
   * which can be used in the protocol to further derive a key pair.
   *
   * @returns The configuration
   */
  getCryptoConfiguration(): Promise<CryptoConfiguration> {
    /* ... */
  }

  /**
   * Derive a key pair from a secret derivative.
   *
   * @param derivative - Data derived from a secret based on this protocol crypto configuration
   * @returns The derived key pair
   */
  getKeyPairFromDerivative(derivative: CryptoDerivative): Promise<KeyPair> {
    /* ... */
  }

  /**
   * Derives an address from a public key.
   *
   * @param publicKey - The public key from which the address should be derived
   * @returns The address
   */
  getAddressFromPublicKey(publicKey: PublicKey): Promise<AddressResult> {
    /* ... */
  }

  /**
   * Sign the transaction with the secret key.
   *
   * @param transaction - The transaction to be signed
   * @param secretKey - The secret key to be used for signing
   * @returns A signed transaction
   */
  signTransactionWithSecretKey(
    transaction: UnsignedTransaction,
    secretKey: SecretKey
  ): Promise<SignedTransaction> {
    /* ... */
  }

  /**
   * Transform the transaction to a unified form which will be
   * further used to display the details about this transaction.
   *
   * @param transaction - The transaction to be processed
   * @param publicKey - The public key of the creator of the transaction
   * @returns A list of unified transaction details
   */
  getDetailsFromTransaction(
    transaction: UnsignedTransaction | SignedTransaction,
    publicKey: PublicKey
  ): Promise<AirGapTransaction[]> {
    /* ... */
  }
}
```

**Configuration**

Apart from the functionality, offline protocols are also expected to provide information on themselves to help build better user experience. You should use the interface's methods `getMetadata` and `getCryptoConfiguration` to share that information.

`getMetadata` is where you can define the protocol's:

- name

- identifier

  The identifier has to be unique, it'll be used to distinguish which protocol should be used to act.

- units and main unit

  The units are a set of currency units supported by the protocol (e.g. for Bitcoin it could be "BTC", "mBTC", "uBTC", "sat" and "msat") with their metadata, i.e. the symbol (a name that should be displayed in the applications together with an optional market name, if it differs from the main value, to help fetch the currency price from the Internet) and decimals. The main unit should be a value selected from the supported units and will be used as the default unit in the applications.

- optional fee configuration

  The fee configuration includes optional fixed values and units if they are different than units configured in the previous step

- account configuration

  Every protocol has to define what BIP-32 derivation path should be used by default to derive key pairs it'll use. Additionally, you can set here the address placeholder and regex that will be used to validate user inputs.

- optional transaction configuration

`getCryptoConfiguration` returns a set of configuration data that will be used (in addition to the BIP-32 derivation path from the protocol's metadata) to derive an intermediate "secret" (derivative) from user's mnemonic. This derivative is what later will be passed to your protocol in the `getKeyPairFromDerivative` method. Currently, the following crypto configuration types are available:

- `ed25519`
- `sr25519` (Substrate compatible)
- `secp256k1`
- `sapling`

##### Online (AirGap Wallet)

AirGap Wallet uses protocols mainly to fetch online data from the network. They are responsible for getting user's balance, transaction history and preparing and submitting transactions that can be later signed in AirGap Vault. To create an online protocol implement the `AirGapOnlineProtocol` interface.

_Note: The `AirGapOnlineProtocol` interface in its default form is a simplification. See [Generic Types](#generic-types) to learn how to achieve better type safety._

```typescript
// protocol-online.ts

import { AirGapOnlineProtocol, ProtocolNetwork } from "@airgap/module-kit";

class MyOnlineProtocol implements AirGapOnlineProtocol {
  constructor(network: ProtocolNetwork) {}

  /**
   * Get this protocol's metadata, i.e. its unique configuration.
   *
   * The metadata will be used to identify the protocol, display its details
   * and help building customized forms.
   *
   * @returns The metadata
   */
  getMetadata(): Promise<ProtocolMetadata> {
    /* ... */
  }

  /**
   * Get this protocol's network configuration.
   *
   * The network configuration will be used to create
   * companion objects for this protocol (e.g. block explorer),
   * and identify different instances of this protocol
   * operating on different networks (e.g. mainnet and testnet).
   *
   * @returns The network configuration
   */
  getNetwork(): Promise<ProtocolNetwork> {
    /* ... */
  }

  /**
   * Derives an address from a public key.
   *
   * @param publicKey - The public key from which the address should be derived
   * @returns The address
   */
  getAddressFromPublicKey(publicKey: PublicKey): Promise<AddressResult> {
    /* ... */
  }

  /**
   * Get a list of transactions involving the specified account.
   *
   * @param publicKey - The account's public key which should be a sender or reciever of the transactions
   * @param limit - The maximum number of transactions to return
   * @param cursor - A paging cursor specifying how to proceed with the fetching
   * @returns A list of transactions with a cursor which can be used to fetch another portion of data
   */
  getTransactionsForPublicKey(
    publicKey: PublicKey,
    limit: number,
    cursor?: TransactionCursor
  ): Promise<AirGapTransactionsWithCursor> {
    /* ... */
  }

  /**
   * Get the balance of the account.
   *
   * @param publicKey - The account's public key
   * @returns The balance
   */
  getBalanceOfPublicKey(publicKey: PublicKey): Promise<Balance> {
    /* ... */
  }

  /**
   * Estimate the maximum transaction amount.
   *
   * @param publicKey - The sender of the transaction
   * @param to - Recipients
   * @param configuration - Additional transaction configuration
   * @returns The estimated maximum amount
   */
  getTransactionMaxAmountWithPublicKey(
    publicKey: PublicKey,
    to: Address[],
    configuration?: TransactionConfiguration
  ): Promise<Amount> {
    /* ... */
  }

  /**
   * Estimate the fee which will be paid for the submission of the transaction.
   *
   * @param publicKey - The sender of the transaction
   * @param details - Transaction details
   * @returns The estimated fee, either an amount or a set of amounts
   */
  getTransactionFeeWithPublicKey(
    publicKey: PublicKey,
    details: TransactionDetails[]
  ): Promise<FeeEstimation> {
    /* ... */
  }

  /**
   * Create an unsigned transaction.
   *
   * @param publicKey - The sender of the transaction
   * @param details - Transaction details
   * @param configuration - Additional transaction configuration
   * @returns An unsigned transaction
   */
  prepareTransactionWithPublicKey(
    publicKey: PublicKey,
    details: TransactionDetails[],
    configuration?: TransactionConfiguration
  ): Promise<UnsignedTransaction> {
    /* ... */
  }

  /**
   * Transform the transaction to a unified form which will be
   * further used to display the details about this transaction.
   *
   * @param transaction - The transaction to be processed
   * @param publicKey - The public key of the creator of the transaction
   * @returns A list of unified transaction details
   */
  getDetailsFromTransaction(
    transaction: UnsignedTransaction | SignedTransaction,
    publicKey: PublicKey
  ): Promise<AirGapTransaction[]> {
    /* ... */
  }

  /**
   * Submit the transaction.
   *
   * @param transaction - The transaction to be submitted
   * @returns The transaction hash
   */
  broadcastTransaction(transaction: SignedTransaction): Promise<string> {
    /* ... */
  }
}

const MY_ONLINE_PROTOCOL_MAINNET_NETWORK: ProtocolNetwork = {
  name: "Mainnet",
  type: "mainnet",
  rpcUrl: "...",
  blockExplorerUrl: "...",
};
```

**Configuration**

Apart from the functionality, online protocols are also expected to provide information on themselves to help build better user experience. You should use the interface's methods `getMetadata` and `getNetwork` to share that information.

`getMetadata` is where you can define the protocol's:

- name

- identifier

  The identifier has to be unique, it'll be used to distinguish which protocol should be used to act.

- units and main unit

  The units are a set of currency units supported by the protocol (e.g. for Bitcoin it could be "BTC", "mBTC", "uBTC", "sat" and "msat") with their metadata, i.e. the symbol (a name that should be displayed in the applications together with an optional market name, if differs from the main value, to help fetch the currency price from the Internet) and decimals. The main unit should be a value selected from the supported units and will be used as the default unit in the applications.

- optional fee configuration

  The fee configuration includes optional fixed values and units if they are different than units configured in the previous step

- account configuration

  Every protocol has to define what BIP-32 derivation path should be used by default to derive key pairs it'll use. Additionally, you can set here the address placeholder and regex that will be used to validate user inputs.

- optional transaction configuration

`getNetwork` should return the network the protocol is currently operating on.

##### Offline and Online (AirGap Vault & AirGap Wallet)

To create a single protocol that can be used in both AirGap Vault and AirGap Wallet implement the `AirGapProtocol` interface.

_Note: The `AirGapProtocol` interface in its default form is a simplification. See [Generic Types](#generic-types) to learn how to achieve better type safety._

```typescript
// protocol-full.ts

import { AirGapProtocol, ProtocolNetwork } from "@airgap/module-kit";

class MyProtocol implements AirGapProtocol {
  constructor(network: ProtocolNetwork) {}

  // ...
}

const MY_PROTOCOL_MAINNET_NETWORK: ProtocolNetwork = {
  name: "Mainnet",
  type: "mainnet",
  rpcUrl: "...",
  blockExplorerUrl: "...",
};

const MY_PROTOCOL_TESTNET_NETWORK: ProtocolNetwork = {
  name: "Testnet",
  type: "testnet",
  rpcUrl: "...",
  blockExplorerUrl: "...",
};
```

#### Block Explorer

The block explorer is a component used in the online context (AirGap Wallet) to help navigate users to a block explorer webpage where they can learn more about their accounts and transactions. To create your block explorer implement the `AirGapBlockExplorer` interface.

```typescript
// block-explorer.ts

import { AirGapBlockExplorer, BlockExplorerMetadata } from "@airgap/module-kit";

class MyProtocolBlockExplorer implements AirGapBlockExplorer {
  /**
   * Get this block explorer's metadata.
   *
   * @returns The metadata
   */
  getMetadata(): Promise<BlockExplorerMetadata> {
    /* ... */
  }

  /**
   * Create a URL that links to the account's details page.
   *
   * @param address - The account's address
   * @returns The URL of the account's details page
   */
  createAddressUrl(address: string): Promise<string> {
    /* ... */
  }

  /**
   * Create a URL that links to the transaction's details page.
   *
   * @param transactionId - The transaction's identifier
   * @returns The URL of the transaction's details page
   */
  createTransactionUrl(transactionId: string): Promise<string> {
    /* ... */
  }
}
```

#### Serialization

Serialization is an important part of the communication between AirGap applications. Every transaction that your online protocol creates in AirGap Wallet will be serialized before it's sent to AirGap Vault and every transaction signed by your offline protocol in AirGap Vault will be serialized before it's returned to AirGap Wallet.

We use our own serializer (`@airgap/serializer`) that, depending on a version, can impose its own requirements on an Isolated Module.

##### V3 Serializer

The V3 Serializer requires that a module specifies a list of schemas that should be used to serialize and deserialize a protocol's unsigned transaction (`TransactionSignRequest`) and signed transaction (`TransactionSignResponse`). Additionally, a module should be able to convert transactions between their serializable and non-serializable forms and validate them.

To meet these requirements create your own implementation of the `AirGapV3SerializerCompanion` interface.

```typescript
// v3serializer.ts

import { AirGapV3SerializerCompanion, SignedTransaction, UnsignedTransaction, V3SchemaConfiguration } from '@airgap/module-kit'
import { IACMessageType, TransactionSignRequest, TransactionSignResponse } from '@airgap/serializer'

class MyV3SerializerCompanion implements AirGapV3SerializerCompanion {
    /**
     * A list of AirGap's V3 Serializer schema configurations.
     *
     * This list will be used to register the schemas
     * in the V3 Serializer instance running in the applications.
     */
    schemas: V3SchemaConfiguration[] = [
        {
            type: IACMessageType.TransactionSignRequest,
            schema: { schema: /* ... */ },
            protocolIdentifier: 'my-protocol'
        },
        {
            type: IACMessageType.TransactionSignResponse,
            schema: { schema: /* ... */ },
            protocolIdentifier: 'my-protocol'
        }
    ]

    /**
     * Transform an unsigned transaction to Serializer's transaction sign request.
     *
     * @param identifier - The identifier of the protocol which created the transaction
     * @param unsignedTransaction - The transaction to be transformed
     * @param publicKey - The sender of the transaction
     * @param callbackUrl - The callback URL used in deeplinking
     * @returns A transaction sign request object
     */
    toTransactionSignRequest(identifier: string, unsignedTransaction: UnsignedTransaction, publicKey: string, callbackUrl?: string): Promise<TransactionSignRequest> { /* ... */ }

    /**
     * Transform Serializer's transaction sign request to an unsigned transaction.
     *
     * @param identifier - The identifier of the protocol which created the transaction
     * @param transactionSignRequest - The transaction sign request to be transformed
     * @returns An unsigned transaction
     */
    fromTransactionSignRequest(identifier: string, transactionSignRequest: TransactionSignRequest): Promise<UnsignedTransaction> { /* ... */ }

    /**
     * Validate the transaction sign request.
     *
     * @param identifier - The identifier of the protocol which created the transaction
     * @param transactionSignRequest - The transaction sign request to be validated
     * @returns `true` if the request is valid, `false` otherwise
     */
    validateTransactionSignRequest(identifier: string, transactionSignRequest: TransactionSignRequest): Promise<boolean> { /* ... */ }

    /**
     * Transform a signed transaction to Serializer's transaction sign response.
     *
     * @param identifier - The identifier of the protocol which created the transaction
     * @param signedTransaction - The transaction to be transformed
     * @param accountIdentifier - The identifier of the account which is sender of the transaction
     * @returns A transaction sign response object
     */
    toTransactionSignResponse(identifier: string, signedTransaction: SignedTransaction, accountIdentifier: string): Promise<TransactionSignResponse> { /* ... */ }

    /**
     * Transform Serializer's transaction sign response to a signed transaction.
     *
     * @param identifier - The identifier of the protocol which created the transaction
     * @param transactionSignResponse - The transaction sign response to be transformed
     * @returns A signed transaction
     */
    fromTransactionSignResponse(identifier: string, transactionSignResponse: TransactionSignResponse): Promise<SignedTransaction> { /* ... */ }

    /**
     * Validate the transaction sign response.
     *
     * @param identifier - The identifier of the protocol which created the transaction
     * @param transactionSignResponse - The transaction sign response to be validated
     * @returns `true` if the response is valid, `false` otherwise
     */
    validateTransactionSignResponse(identifier: string, transactionSignResponse: TransactionSignResponse): Promise<boolean> { /* ... */ }
}

```

**Generate Schemas**

Internally, we use [ts-json-schema-generator](https://github.com/vega/ts-json-schema-generator) to generate JSON schemas for our official AirGap modules. We recommend that you use the same tool to be sure your schemas are compatible with our serializer.

### Manifest

In addition to the source code, every Isolated Module should ship with a manifest file which describes the content of the module. The manifest file should be placed at the root of your module under the name `manifest.json` and have the following fields:

- `name` (string)

  The name of the module.

- `version` (string)

  The version of the module compliant with SemVer.

  ```json
  "version": "x.y.z"
  ```

- `author` (string)

- `url` (string, optional)

- `email` (string, optional)

- `repository` (string, optional)

  Specify where the module's code can be found. The field is optional, but it is important for the community to be always able to verify the safety of your code.

- `publicKey` (string)

  The public key matching the secret key used to sign the module (see [Signature](#signature)) in hexadecimal format.

  ```json
  "publicKey": "0x9a1a5695aa8fe23c2f45a2c7315657cff79aa72cec023c56da9111849c13b617"
  ```

- `description` (string)

  A short description of the module.

- `src` (object, optional)

  If your sources require special handling, you can configure it in `src`.

  - `namespace` (string, optional)

    Specify the name of a global object that holds references to the module's exports.

    ```json
    "src": {
        "namespace": "mymodule"
    }
    ```

- `res` (object, optional)

  If you want to include additional resources (i.e. files that are not considered source code) you should specify them accordingly.

  - `symbol` (object, optional)

    You can specify graphic symbols that will be displayed in the applications to represent different units supported in your protocols. The symbols should be provided as URI `file://` or `data:image/*,base64`

    ```json
    "res": {
        "symbol": {
            "btc": "file://btc.svg"
        }
    }
    ```

- `include` (array)

  A list of **ALL** files the module requires to run. Only files listed here will be considered during the installation.

  The entries should be paths (UNIX standard) relative to this manifest file.

  ```json
  "include": [
     "index.js",
     "btc.svg"
  ]
  ```

- `jsenv` (object, optional)

  Set the preferred execution environment depending on the platform.

  See the [Execution Environments to learn what configuration options are available](#execution-environments)

### Execution Environments

To ensure the Isolated Modules' code is executed separately from each other and the core of the application, every call to an Isolated Module will result in spawning a new special JavaScript environment where the call will be eventually executed.

Depending on a platform and version on which the application runs, different environments are available and supported. The environments may vary in execution performance or code restrictions they impose. For example, web views are capable of running any code that can be executed in a browser, however, they have a significant impact on the performance as they take, in this case, a significant amount of time to load and need to run on the UI thread.

By default, the most efficient environment will be selected to run your module, however, if that module doesn't meet your needs, you can override this behaviour by specifying a different one in the manifest file.

#### Android

- [JavascriptEngine](https://developer.android.com/jetpack/androidx/releases/javascriptengine) (default, >= API 26)
  ```json
  "jsenv": {
      "android": "javascriptengine"
  }
  ```
- [WebView](https://developer.android.com/jetpack/androidx/releases/webkit) (default < API 26)
  ```json
  "jsenv": {
      "android": "webview"
  }
  ```

#### iOS

- [WebView](https://developer.apple.com/documentation/webkit/wkwebview) (default)
  ```json
  "jsenv": {
      "ios": "webview"
  }
  ```

### Signature

Finally, the Isolated Module contents must be signed and the signature should be included in the bundle, otherwise users won't be allowed to install the package in their applications.

To sign your Isolated Module:

- create an Ed25519 key pair
- put the public key in the module's manifest file
- use the secret key to sign the contents of the module

  The data to sign should consist of concatenated bytes of files listed in `include` in `manifest.json` (in the exact order) and the `manifest.json` file (placed as the last).

- save the signature to a file and place it inside your bundle next to `manifest.json` under the `module.sig` name

### Bundle

An Isolated Module bundle is a ZIP file containing:

- the **compiled** code
- the manifest file (`manifest.json`)
- the signature file (`module.sig`)
- additional resources (must be listed in the manifest file)

### Examples

- AirGap Community example modules ([examples/isolated-modules](https://github.com/airgap-it/airgap-community/tree/main/examples/isolated-modules)):
  - [bitcoin](https://github.com/airgap-it/airgap-community/tree/main/examples/isolated-modules/bitcoin)
- [Official AirGap modules](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages):
  - [@airgap/aeternity](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/aeternity/src/v1)
  - [@airgap/astar](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/astar/src/v1)
  - [@airgap/bitcoin](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/bitcoin/src/v1)
  - [@airgap/coreum](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/coreum/src/v1)
  - [@airgap/cosmos](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/cosmos/src/v1)
  - [@airgap/ethereum](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/ethereum/src/v1)
  - [@airgap/groestlcoin](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/groestlcoin/src/v1)
  - [@airgap/icp](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/icp/src/v1)
  - [@airgap/moonbeam](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/moonbeam/src/v1)
  - [@airgap/polkadot](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/polkadot/src/v1)
  - [@airgap/tezos](https://github.com/airgap-it/airgap-coin-lib/tree/master/packages/tezos/src/v1)

### Testing

#### Requirements

The 3rd party Isolated Modules are currently in preview. In order to test them on your device, install the AirGap apps published on `preview/isolated-modules`:

**AirGap Vault**

1. Clone the airgap-vault repository and checkout to `preview/isolated-modules`.

```bash
# HTTPS
$ git clone https://github.com/airgap-it/airgap-vault.git

# SSH
$ git clone git@github.com:airgap-it/airgap-vault.git


$ git checkout preview/isolated-modules
```

2. Build the project.

```bash
$ yarn install
$ yarn build
```

3. Connect a device and run it.

```bash
# Android
$ yarn cap run android

# iOS
$ yarn cap run ios
```

**AirGap Wallet**

1. Clone the airgap-vault repository and checkout to `preview/isolated-modules`.

```bash
# HTTPS
$ git clone https://github.com/airgap-it/airgap-wallet.git

# SSH
$ git clone git@github.com:airgap-it/airgap-wallet.git


$ git checkout preview/isolated-modules
```

2. Build the project.

```bash
$ npm install # optionally, use --legacy-peer-deps if required
$ npm run build
```

3. Connect a device and run it.

```bash
# Android
$ npx cap run android

# iOS
$ npx cap run ios
```

#### Install an Isolated Module bundle

1. Transfer the Isolated Module bundle (the ZIP file) to your device's storage.
2. Open AirGap Vault, navigate to `Settings` > `(Settings) Isolated Modules` and follow the instructions on the screen to load the bundle from the storage.
3. Open AirGap Wallet, navigate to `Settings` > `(Add-ons) Isolated Modules` and follow the instructions on the screen to load the bundle from the storage.

## Advanced

Some Isolated Modules interfaces offer ways to customize them so you can achieve better type safety or understand how to provide optional functionality that AirGap applications can later use.

See [Generic Types](#generic-types) to learn what you can do to have your modules typed in a stricter way and [Interface Extensions](#extensions) to learn how you can extend your implementations with additional functionality.

### Generic Types

In most cases, AirGap applications don't actually process the data they get from an Isolated Module. Instead, they pass it from the online protocol to the offline protocol or the other way around, occasionally displaying the data to the user. For example, after you create an unsigned transaction in AirGap Wallet, it gets serialized (with some help of the module, see [Serialization](#serialization) to learn more), next sent to AirGap Vault where it's immediately deserialized and finally it lands in the offline protocol for it to sign it. This means that the module is in full control of the structure of transaction that is sent between the applications. Therefore, it is safe to assume that if you returned an unsigned transaction of a type `MyUnsignedTransaction` from the online protocol's `prepareTransactionWithPublicKey`, you'll receive the same transaction of the same `MyUnsignedTransaction` type in the offline protocol's `signTransactionWithSecretKey`.

To help you recognize such spots in your code, the following interfaces can be customized with more precise types:

- [`AirGapModule`](#airgapmodule)
- [`AirGapOfflineProtocol`](#airgapofflineprotocol)
- [`AirGapOnlineProtocol`](#airgaponlineprotocol-1)
- [`AirGapProtocol`](#airgapprotocol-1)

To apply your type, set one of the optional fields of the interface generic object:

```typescript
class MyProtocol implements AirGapProtocol<{ Units: 'UNIT' | 'mUNIT' | 'uUNIT' }>
```

See each interface individual list of generic types to learn what types can be customized.

#### `AirGapModule`

You can customize the following types in `AirGapModule`:

- `Protocols`
  Set `Protocols` to narrow down the type representing protocol identifiers supported in the module. If not set, `string` will be used by default.
- `ProtocolNetwork`

  Set `ProtocolNetwork` to configure the module with your subtype of `ProtocolNetwork`. If not set, `ProtocolNetwork` will be used by default.

```typescript
// module.ts

import /* ... */ "@airgap/module-kit";

type MyProtocols =
  | "offline-only-protocol"
  | "online-only-protocol"
  | "offline-and-online-protocol";

interface MyProtocolNetwork extends ProtocolNetwork {
  /* ... */
}

class MyModule
  implements
    AirGapModule<{
      Protocols: MyProtocols /* extends string (default: string) */;
      ProtocolNetwork: MyProtocolNetwork /* extends ProtocolNetwork (default: ProtocolNetwork) */;
    }>
{
  supportedProtocols: Record<MyProtocols, ProtocolConfiguration> = {
    /* ... */
  };

  createOfflineProtocol(
    identifier: MyProtocols
  ): Promise<AirGapOfflineProtocol | undefined> {
    /* ... */
  }
  createOnlineProtocol(
    identifier: MyProtocols,
    networkOrId?: string | MyProtocolNetwork
  ): Promise<AirGapOnlineProtocol | undefined> {
    /* ... */
  }
  createBlockExplorer(
    identifier: MyProtocols,
    networkOrId?: string | MyProtocolNetwork
  ): Promise<AirGapBlockExplorer | undefined> {
    /* ... */
  }
  createV3SerializerCompanion(): Promise<AirGapV3SerializerCompanion> {
    /* ... */
  }
}
```

#### `AirGapOfflineProtocol`

You can customize the following types in `AirGapOfflineProtocol`:

- `AddressCursor`

  If more that one address can be created from a single public key in your module, you can use the address cursor to track which one was created and where to start next time. Set `AddressCursor` to configure the protocol with your subtype of `AddressCursor`. If not set, `AddressCursor` will be used by default.

- `AddressResult`

  Set `AddressResult` to narrow down the return type of address generating methods. `AddressResult` can be either `Address` (=`string`), `AddressWithCursor` or a union of both. If a single public key always produces only one address, you can set this type to be `Address`. If not set, `Address | AddressWithCursor<AddressCursor>` will be used by default, where `AddressCursor` is derived from the `AddressCursor` generic type.

- `CryptoConfiguration`

  Set `CryptoConfiguration` to narrow down the type of crypto configuration supported in the protocol. If not set, `CryptoConfiguration` will be used by default.

- `Units`

  Set `Units` to narrow down the type of units used to represent amounts in the protocol. If not set, `string` will be used by default.

- `FeeUnits`

  Set `FeeUnits` to narrow down the type of units used to represent fee amounts in the protocol. If not set, the `Unit` generic type will be used by default.

- `SignedTransaction`

  Set `SignedTransaction` to configure the protocol with your subtype of `SignedTransaction`. If not set, `SignedTransaction` will be used by default.

- `UnsignedTransaction`

  Set `UnsignedTransaction` to configure the protocol with your subtype of `UnsignedTransaction`. If not set, `UnsignedTransaction` will be used by default.

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

interface MyAddressCursor extends AddressCursor {
  /* ... */
}

type MyUnits = "UNIT" | "mUNIT" | "uUNIT";
type MyFeeUnits = "FEE_UNIT";

interface MySignedTransaction extends SignedTransaction {
  /* ... */
}
interface MyUnsignedTransaction extends UnsignedTransaction {
  /* ... */
}

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<{
      AddressCursor: MyAddressCursor /* extends AddressCursor (default: AddressCursor) */;
      AddressResult: AddressWithCursor<MyAddressCursor> /* extends Address | AddressWithCursor<AddressCursor> (default: Address | AddressWithCursor<AddressCursor>) */;
      CryptoConfiguration: Secp256K1CryptoConfiguration<"secret"> /* extends CryptoConfiguration (default: CryptoConfiguration) */;
      Units: MyUnits /* extends string (default: string) */;
      FeeUnits: MyFeeUnits /* extends string (default: Units) */;
      SignedTransaction: MySignedTransaction /* extends SignedTransaction (default: SignedTransaction) */;
      UnsignedTransaction: MyUnsignedTransaction /* extends UnsignedTransaction (default: UnsignedTransaction) */;
    }>
{
  getMetadata(): Promise<ProtocolMetadata<MyUnits, MyFeeUnits>> {
    /* ... */
  }
  getCryptoConfiguration(): Promise<Secp256K1CryptoConfiguration<"secret">> {
    /* ... */
  }

  getKeyPairFromDerivative(derivative: CryptoDerivative): Promise<KeyPair> {
    /* ... */
  }
  getAddressFromPublicKey(
    publicKey: PublicKey
  ): Promise<AddressWithCursor<MyAddressCursor>> {
    /* ... */
  }

  signTransactionWithSecretKey(
    transaction: MyUnsignedTransaction,
    secretKey: SecretKey
  ): Promise<MySignedTransaction> {
    /* ... */
  }
  getDetailsFromTransaction(
    transaction: MySignedTransaction | MyUnsignedTransaction,
    publicKey: PublicKey
  ): Promise<AirGapTransaction<MyUnits, MyFeeUnits>[]> {
    /* ... */
  }
}
```

#### `AirGapOnlineProtocol`

You can customize the following types in `AirGapOnlineProtocol`:

- `AddressCursor`

  If more that one address can be created from a single public key in your module, you can use the address cursor to track which one was created and where to start next time. Set `AddressCursor` to configure the protocol with your subtype of `AddressCursor`. If not set, `AddressCursor` will be used by default.

- `AddressResult`

  Set `AddressResult` to narrow down the return type of address generating methods. `AddressResult` can be either `Address` (=`string`), `AddressWithCursor` or a union of both. If a single public key always produces only one address, you can set this type to be `Address`. If not set, `Address | AddressWithCursor<AddressCursor>` will be used by default, where `AddressCursor` is derived from the `AddressCursor` generic type.

- `ProtocolNetwork`

  Set `ProtocolNetwork` to configure the protocol with your subtype of `ProtocolNetwork`. If not set, `ProtocolNetwork` will be used by default.

- `Units`

  Set `Units` to narrow down the type of units used to represent amounts in the protocol. If not set, `string` will be used by default.

- `FeeUnits`

  Set `FeeUnits` to narrow down the type of units used to represent fee amounts in the protocol. If not set, the `Unit` generic type will be used by default.

- `FeeEstimation`

  Depending on the protocol specification, a fee estimation can be represented as a value (`Amount`) or a set of predetermined values (`FeeDetauls`). Set `FeeEstimation` to narrow down the type of fee estimation supported in the protocol. If not set, `Amount<FeeUnits> | FeeDefaults<FeeUnits>` will be used by default, where `FeeUnits` is derived from the `FeeUnits` generic type.

- `SignedTransaction`

  Set `SignedTransaction` to configure the protocol with your subtype of `SignedTransaction`. If not set, `SignedTransaction` will be used by default.

- `UnsignedTransaction`

  Set `UnsignedTransaction` to configure the protocol with your subtype of `UnsignedTransaction`. If not set, `UnsignedTransaction` will be used by default.

- `TransactionCursor`

  A transaction cursor is a pointer returned together with a paged list of user's transactions fetched from the Internet. It specifies on which element the fetching stopped last time and tells you from where to start next. Set `TransactionCursor` to configure the protocol with your subtype of `TransactionCursor`. If not set, `TransactionCursor` will be used by default,

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

interface MyAddressCursor extends AddressCursor {
  /* ... */
}

interface MyProtocolNetwork extends ProtocolNetwork {
  /* ... */
}

type MyUnits = "UNIT" | "mUNIT" | "uUNIT";
type MyFeeUnits = "FEE_UNIT";

interface MySignedTransaction extends SignedTransaction {
  /* ... */
}
interface MyUnsignedTransaction extends UnsignedTransaction {
  /* ... */
}
interface MyTransactionCursor extends TransactionCursor {
  /* ... */
}

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<{
      AddressCursor: MyAddressCursor /* extends AddressCursor (default: AddressCursor) */;
      AddressResult: AddressWithCursor<MyAddressCursor> /* extends Address | AddressWithCursor<AddressCursor> (default: Address | AddressWithCursor<AddressCursor>) */;
      ProtocolNetwork: MyProtocolNetwork /* extends ProtocolNetwork (default: ProtocolNetwork) */;
      Units: MyUnits /* extends string (default: string) */;
      FeeUnits: MyFeeUnits /* extends string (default: Units) */;
      FeeEstimation: FeeDefaults<MyFeeUnits> /* extends FeeEstimation<FeeUnits> | undefined (default: FeeEstimation<FeeUnits> | undefined) */;
      SignedTransaction: MySignedTransaction /* extends SignedTransaction (default: SignedTransaction) */;
      UnsignedTransaction: MyUnsignedTransaction /* extends UnsignedTransaction (default: UnsignedTransaction) */;
      TransactionCursor: MyTransactionCursor /* extends TransactionCursor (default: TransactionCursor) */;
    }>
{
  getMetadata(): Promise<ProtocolMetadata<MyUnits, MyFeeUnits>> {
    /* ... */
  }
  getNetwork(): Promise<MyProtocolNetwork> {
    /* ... */
  }

  getAddressFromPublicKey(
    publicKey: PublicKey
  ): Promise<AddressWithCursor<MyAddressCursor>> {
    /* ... */
  }

  getTransactionsForPublicKey(
    publicKey: PublicKey,
    limit: number,
    cursor?: MyTransactionCursor
  ): Promise<
    AirGapTransactionsWithCursor<MyTransactionCursor, MyUnits, MyFeeUnits>
  > {
    /* ... */
  }
  getBalanceOfPublicKey(publicKey: PublicKey): Promise<Balance<MyUnits>> {
    /* ... */
  }

  getTransactionMaxAmountWithPublicKey(
    publicKey: PublicKey,
    to: string[],
    configuration?: TransactionFullConfiguration<MyFeeUnits>
  ): Promise<Amount<MyUnits>> {
    /* ... */
  }
  getTransactionFeeWithPublicKey(
    publicKey: PublicKey,
    details: TransactionDetails<MyUnits>[],
    configuration?: TransactionSimpleConfiguration
  ): Promise<FeeDefaults<MyFeeUnits>> {
    /* ... */
  }

  prepareTransactionWithPublicKey(
    publicKey: PublicKey,
    details: TransactionDetails<MyUnits>[],
    configuration?: TransactionFullConfiguration<MyFeeUnits>
  ): Promise<MyUnsignedTransaction> {
    /* ... */
  }
  getDetailsFromTransaction(
    transaction: MySignedTransaction | MyUnsignedTransaction,
    publicKey: PublicKey
  ): Promise<AirGapTransaction<MyUnits, MyFeeUnits>[]> {
    /* ... */
  }
  broadcastTransaction(transaction: MySignedTransaction): Promise<string> {
    /* ... */
  }
}

const MY_ONLINE_PROTOCOL_MAINNET_NETWORK: MyProtocolNetwork = {
  name: "Mainnet",
  type: "mainnet",
  rpcUrl: "...",
  blockExplorerUrl: "...",
};
```

#### `AirGapProtocol`

Any type configuration that applies in `AirGapOfflineProtocol` or `AirGapOnlineProtocol` can be used in `AirGapProtocol`.

### Extensions

An extension is an interface which adds additional features to the type it's extending.

**Important: More than one extension can be applied at the time, however, some extensions may affect the others in which case the order in which they are applied matters. As a rule, an extension that is affected by another should appear in the list after that extension.**

#### `AirGapOfflineProtocol`

Below you'll find a list of extensions applicable to `AirGapOfflineProtocol`.

##### `Bip32`

`Bip32` extends the protocol with methods that should be used to interact with BIP32 extended keys.

```typescript
// protocol-offline.ts

import { /* ... */ } from '@airgap/module-kit'

class MyOfflineProtocol implements AirGapOfflineProtocol<{ /* Generic Types */ }, 'Bip32'> {

    /**
     * Derive an extended key pair from a secret derivative.
     *
     * @param derivative - Data derived from a secret based on this protocol crypto configuration
     * @returns The derived key pair
     */
    getExtendedKeyPairFromDerivative(derivative: CryptoDerivative): Promise<ExtendedKeyPair> { /* ... */ }

    /**
     * Derive a secret key from an extended key.
     *
     * @param extendedSecretKey - The extended key from which to derive
     * @param visibilityIndex - The index defined at the change level in a BIP32 derivation path
     * @param addressIndex - The index defined at the address_index level in a BIP32 derivation path
     * @returns The derived key
     */
    deriveFromExtendedSecretKey(extendedSecretKey: ExtendedSecretKey, visibilityIndex: number, addressIndex: number): Promise<SecretKey> { /* ... */ }

    /**
     * Derive a public key from an extended key.
     *
     * @param extendedSecretKey - The extended key from which to derive
     * @param visibilityIndex - The index defined at the change level in a BIP32 derivation path
     * @param addressIndex - The index defined at the address_index level in a BIP32 derivation path
     * @returns The derived key
     */
    deriveFromExtendedPublicKey(extendedPublicKey: ExtendedPublicKey, visibilityIndex: number, addressIndex: number): Promise<PublicKey> { /* ... */ }

    // Standard AirGapOfflineProtocol methods with adjusted types

    getAddressFromPublicKey(publicKey: PublicKey | ExtendedPublicKey): Promise</* ... */> { /* ... */ }
    signTransactionWithSecretKey(transaction: /* ... */, secretKey: SecretKey | ExtendedSecretKey): Promise<SignedTransaction> { /* ... */ }
    getDetailsFromTransaction(transaction: /* ... */, publicKey: PublicKey | ExtendedPublicKey): Promise</* ... */> { /* ... */ }

    // ...
}
```

##### `ConfigurableContract`

Use `ConfigurableContract` if your protocol's functionality depends on a smart contract interaction and the contract address can be externally changed throughout the protocol's lifetime.

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "ConfigurableContract"
    >
{
  /**
   * Check if the smart contract's address is a valid address in this protocol.
   *
   * @param address - The contract's address
   * @return `true` if the address is a valid contract's address, `false` otherwise
   */
  isContractValid(address: string): Promise<boolean> {
    /* ... */
  }

  /**
   * Return the smart contract address this protocol is currently configured with.
   *
   * @return The contract address or `undefined` if none is set
   */
  getContractAddress(): Promise<string | undefined> {
    /* ... */
  }

  /**
   * Configure this protocol with a smart contract's address.
   *
   * @param address - The contract's address
   */
  setContractAddress(address: string): Promise<void> {
    /* ... */
  }

  // ...
}
```

##### `MultiAddressPublicKey`

Use `MultiAddressPublicKey` if your protocol should create more than one address from a single public key.

Affected by:

- `Bip32`

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "MultiAddressPublicKey"
    >
{
  /**
   * Return a list of addresses generated from the public key.
   *
   * The protocol will be asked to create this list on account creation,
   * therefore this list should contain all the addresses a new account
   * should be initialized with.
   *
   * @param publicKey - The public key from which the addresses should be created
   * @return An array of addresses
   */
  getInitialAddressesFromPublicKey(
    publicKey: PublicKey
  ): Promise<AddressWithCursor<AddressCursor>[]> {
    /* ... */
  }

  /**
   * Create another address from the public key.
   *
   * @param publicKey - The public key from which the address should be created
   * @param cursor - The address cursor of the previously created address
   * @return The next address
   */
  getNextAddressFromPublicKey(
    publicKey: PublicKey,
    cursor: AddressCursor
  ): Promise<AddressResult> {
    /* ... */
  }

  // ...
}
```

##### `SubProtocol`

Apply `SubProtocol` if your protocol's accounts can't exist and function without another protocol's account. This protocol will be considered a sub protocol, while the protocol that yours depends on will be its main protocol. For example, ERC20 tokens depend on Ethereum, therefore every ERC20 token protocol should be a sub protocol of the Ethereum protocol.

A sub protocol will be treated differently depending on its type. Currently 2 types of sub protocols are supported:

- `token` - the protocol represents another token on the chain
- `account` - the protocol is an alternative account representation

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "SubProtocol"
    >
{
  /**
   * Return the type of this sub protocol.
   *
   * @return The type
   */
  getType(): Promise<SubProtocolType> {
    /* ... */
  }

  /**
   * Return the protocol identifier of this sub protocol's main protocol.
   *
   * @return The main protocol's identifier
   */
  mainProtocol(): Promise<string> {
    /* ... */
  }

  // ...
}
```

##### `SingleTokenSubProtocol`

`SingleTokenSubProtocol` is an extension of `SubProtocol`, use it if your protocol represents a smart contract operating on a single token.

_Note: If you apply `SingleTokenSubProtocol` in your protocol, you can omit the `SubProtocol` extension._

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "SingleTokenSubProtocol"
    >
{
  /**
   * Return the type of this sub protocol, fixed to `token`.
   *
   * @return The type
   */
  getType(): Promise<"token"> {
    /* ... */
  }

  /**
   * Return the smart contract address this protocol is dependent on.
   *
   * @return The contract's address
   */
  getContractAddress(): Promise<string> {
    /* ... */
  }

  /**
   * Return the protocol identifier of this sub protocol's main protocol.
   *
   * @return The main protocol's identifier
   */
  mainProtocol(): Promise<string> {
    /* ... */
  }

  // ...
}
```

##### `MultiTokenSubProtocol`

`MultiTokenSubProtocol` is an extension of `SubProtocol`, use it if your protocol represents a smart contract operating on multiple tokens.

_Note: If you apply `MultiTokenSubProtocol` in your protocol, you can omit the `SubProtocol` extension._

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "MultiTokenSubProtocol"
    >
{
  /**
   * Return the type of this sub protocol, fixed to `token`.
   *
   * @return The type
   */
  getType(): Promise<"token"> {
    /* ... */
  }

  /**
   * Return the smart contract address this protocol is dependent on.
   *
   * @return The contract's address
   */
  getContractAddress(): Promise<string> {
    /* ... */
  }

  /**
   * Return the protocol identifier of this sub protocol's main protocol.
   *
   * @return The main protocol's identifier
   */
  mainProtocol(): Promise<string> {
    /* ... */
  }

  // ...
}
```

##### `AsymmetricEncryption`

`AsymmetricEncryption` extends the protocol with methods that can be used for asymmetric encryption.

Affected by:

- `Bip32`

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "AsymmetricEncryption"
    >
{
  /**
   * Decrypt data using the key pair.
   *
   * @param payload - The data to decrypt
   * @param keyPair - The key pair which should be used to decrypt
   * @return Decrypted message
   */
  decryptAsymmetricWithKeyPair(
    payload: string,
    keyPair: KeyPair
  ): Promise<string> {
    /* ... */
  }

  /**
   * Encrypt data using the key pair.
   *
   * @param payload - The data to encrypt
   * @param keyPair - The key pair which should be used to encrypt
   * @return Encrypted message
   */
  encryptAsymmetricWithPublicKey(
    payload: string,
    publicKey: PublicKey
  ): Promise<string> {
    /* ... */
  }

  // ...
}
```

##### `SignMessage`

`SignMessage` extends the protocol with methods that can be used for arbitrary message signing.

Affected by:

- `Bip32`

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "SignMessage"
    >
{
  /**
   * Sign an arbitrary message with the key pair.
   *
   * @param message - The message to sign
   * @param keyPair - The key par which should be used for signing
   * @return The signature
   */
  signMessageWithKeyPair(
    message: string,
    keyPair: KeyPair
  ): Promise<Signature> {
    /* ... */
  }

  /**
   * Verify if the message was signed with a secret key matching the public key.
   *
   * @param message - The message that was signed
   * @param signature - The message's signature
   * @param publicKey - The public key whose secret counterpart was supposedly used for signing
   * @return `true` if the signature is correct, `false` otherwise
   */
  verifyMessageWithPublicKey(
    message: string,
    signature: Signature,
    publicKey: PublicKey
  ): Promise<boolean> {
    /* ... */
  }

  // ...
}
```

##### `AES`

`AES` extends the protocol with methods that can be used for encryption using the Advanced Encryption Standard (AES).

Affected by:

- `Bip32`

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "AES"
    >
{
  /**
   * Encrypt data with the secret key.
   *
   * @param payload - The data to encryot
   * @param secretKey - The key which should be used to encrypt
   * @return Encrypted message
   */
  encryptAESWithSecretKey(
    payload: string,
    secretKey: SecretKey
  ): Promise<string> {
    /* ... */
  }

  /**
   * Decrypt data with the secret key.
   *
   * @param payload - The data to decrypt
   * @param secretKey - The key which should be used to decrypt
   * @return Decrypted message
   */
  decryptAESWithSecretKey(
    payload: string,
    secretKey: SecretKey
  ): Promise<string> {
    /* ... */
  }

  // ...
}
```

##### `Crypto`

Use `Crypto` as a shorthand to apply `AsymmetricEncryption`, `SignMessage` and `AES`.

Affected by:

- `Bip32`

```typescript
// protocol-offline.ts

import /* ... */ "@airgap/module-kit";

class MyOfflineProtocol
  implements
    AirGapOfflineProtocol<
      {
        /* Generic Types */
      },
      "Crypto" /* = 'AsymmetricEncryption', 'SignMessage', 'AES' */
    > {
  // ...
}
```

#### `AirGapOnlineProtocol`

Below you'll find a list of extensions applicable to `AirGapOnlineProtocol`.

##### `Bip32`

`Bip32` extends the protocol with methods that should be used to interact with BIP32 extended keys.

```typescript
// protocol-online.ts

import { /* ... */ } from '@airgap/module-kit'

class MyOnlineProtocol implements AirGapOnlineProtocol<{ /* Generic Types */ }, 'Bip32'> {

    /**
     * Derive a public key from an extended key.
     *
     * @param extendedSecretKey - The extended key from which to derive
     * @param visibilityIndex - The index defined at the change level in a BIP32 derivation path
     * @param addressIndex - The index defined at the address_index level in a BIP32 derivation path
     * @returns The derived key
     */
    deriveFromExtendedPublicKey(extendedPublicKey: ExtendedPublicKey, visibilityIndex: number, addressIndex: number): Promise<PublicKey> { /* ... */ }

    // Standard AirGapOnlineProtocol methods with adjusted types

    getAddressFromPublicKey(publicKey: PublicKey | ExtendedPublicKey): Promise</* ... */> { /* ... */ }
    getTransactionsForPublicKey(publicKey: PublicKey | ExtendedPublicKey, limit: /* ... */, cursor?: /* ... */): Promise</* ... */> { /* ... */ }
    getBalanceOfPublicKey(publicKey: PublicKey | ExtendedPublicKey): Promise</* ... */> { /* ... */ }
    getTransactionMaxAmountWithPublicKey(publicKey: PublicKey | ExtendedPublicKey, to: /* ... */, configuration?: /* ... */): Promise</* ... */> { /* ... */ }
    getTransactionFeeWithPublicKey(publicKey: PublicKey | ExtendedPublicKey, details: /* ... */, configuration?: /* ... */): Promise</* ... */> { /* ... */ }
    prepareTransactionWithPublicKey(publicKey: PublicKey | ExtendedPublicKey, details: /* ... */, configuration?: /* ... */): Promise</* ... */> { /* ... */ }
    getDetailsFromTransaction(transaction: /* ... */, publicKey: PublicKey | ExtendedPublicKey): Promise</* ... */> { /* ... */ }

    // ...
}
```

##### `ConfigurableContract`

Use `ConfigurableContract` if your protocol's functionality depends on a smart contract interaction and the contract address can be externally changed throughout the protocol's lifetime.

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "ConfigurableContract"
    >
{
  /**
   * Check if the smart contract's address is a valid address in this protocol.
   *
   * @param address - The contract's address
   * @return `true` if the address is a valid contract's address, `false` otherwise
   */
  isContractValid(address: string): Promise<boolean> {
    /* ... */
  }

  /**
   * Return the smart contract address this protocol is currently configured with.
   *
   * @return The contract address or `undefined` if none is set
   */
  getContractAddress(): Promise<string | undefined> {
    /* ... */
  }

  /**
   * Configure this protocol with a smart contract's address.
   *
   * @param address - The contract's address
   */
  setContractAddress(address: string): Promise<void> {
    /* ... */
  }

  // ...
}
```

##### `MultiAddressPublicKey`

Use `MultiAddressPublicKey` if your protocol should create more than one address from a single public key.

Affected by:

- `Bip32`

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "MultiAddressPublicKey"
    >
{
  /**
   * Return a list of addresses generated from the public key.
   *
   * The protocol will be asked to create this list on account creation,
   * therefore this list should contain all the addresses a new account
   * should be initialized with.
   *
   * @param publicKey - The public key from which the addresses should be created
   * @return An array of addresses
   */
  getInitialAddressesFromPublicKey(
    publicKey: PublicKey
  ): Promise<AddressWithCursor<AddressCursor>[]> {
    /* ... */
  }

  /**
   * Create another address from the public key.
   *
   * @param publicKey - The public key from which the address should be created
   * @param cursor - The address cursor of the previously created address
   * @return The next address
   */
  getNextAddressFromPublicKey(
    publicKey: PublicKey,
    cursor: AddressCursor
  ): Promise<AddressResult> {
    /* ... */
  }

  // ...
}
```

##### `SubProtocol`

Apply `SubProtocol` if your protocol's accounts can't exist and function without another protocol's account. This protocol will be considered a sub protocol, while the protocol that yours depends on will be its main protocol. For example, ERC20 tokens depend on Ethereum, therefore every ERC20 token protocol should be a sub protocol of the Ethereum protocol.

A sub protocol will be treated differently depending on its type. Currently 2 types of sub protocols are supported:

- `token` - the protocol represents another token on the chain
- `account` - the protocol is an alternative account representation

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "SubProtocol"
    >
{
  /**
   * Return the type of this sub protocol.
   *
   * @return The type
   */
  getType(): Promise<SubProtocolType> {
    /* ... */
  }

  /**
   * Return the protocol identifier of this sub protocol's main protocol.
   *
   * @return The main protocol's identifier
   */
  mainProtocol(): Promise<string> {
    /* ... */
  }

  // ...
}
```

##### `SingleTokenSubProtocol`

`SingleTokenSubProtocol` is an extension of `SubProtocol`, use it if your protocol represents a smart contract operating on a single token.

_Note: If you apply `SingleTokenSubProtocol` in your protocol, you can omit the `SubProtocol` extension._

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "SingleTokenSubProtocol"
    >
{
  /**
   * Return the type of this sub protocol, fixed to `token`.
   *
   * @return The type
   */
  getType(): Promise<"token"> {
    /* ... */
  }

  /**
   * Return the smart contract address this protocol is dependent on.
   *
   * @return The contract's address
   */
  getContractAddress(): Promise<string> {
    /* ... */
  }

  /**
   * Return the protocol identifier of this sub protocol's main protocol.
   *
   * @return The main protocol's identifier
   */
  mainProtocol(): Promise<string> {
    /* ... */
  }

  // ...
}
```

##### `MultiTokenSubProtocol`

`MultiTokenSubProtocol` is an extension of `SubProtocol`, use it if your protocol represents a smart contract operating on multiple tokens.

_Note: If you apply `MultiTokenSubProtocol` in your protocol, you can omit the `SubProtocol` extension._

```typescript
// protocol-online.ts

import { /* ... */ } from '@airgap/module-kit'

class MyOnlineProtocol implements AirGapOnlineProtocol<{ /* Generic Types */ }, 'MultiTokenSubProtocol'> {

    /**
     * Return the type of this sub protocol, fixed to `token`.
     *
     * @return The type
     */
    getType(): Promise<'token'> { /* ... */ }

    /**
     * Return the smart contract address this protocol is dependent on.
     *
     * @return The contract's address
     */
    getContractAddress(): Promise<string> { /* ... */ }

    /**
     * Return the protocol identifier of this sub protocol's main protocol.
     *
     * @return The main protocol's identifier
     */
    mainProtocol(): Promise<string> { /* ... */ }

    // Standard AirGapOnlineProtocol methods with adjusted types

    getBalanceOfPublicKey(publicKey: /* ... */, configuration?: MultiTokenBalanceConfiguration): Promise</* ... */> { /* ... */ }

    // ...
}
```

##### `AsymmetricEncryption`

`AsymmetricEncryption` extends the protocol with methods that can be used for asymmetric encryption.

Affected by:

- `Bip32`

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "AsymmetricEncryption"
    >
{
  /**
   * Encrypt data using the public key.
   *
   * @param payload - The data to encrypt
   * @param publicKey - The key which should be used to encrypt
   * @return Encrypted message
   */
  encryptAsymmetricWithPublicKey(
    payload: string,
    publicKey: PublicKey
  ): Promise<string> {
    /* ... */
  }

  // ...
}
```

##### `SignMessage`

`SignMessage` extends the protocol with methods that can be used for arbitrary message signing.

Affected by:

- `Bip32`

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "SignMessage"
    >
{
  /**
   * Verify if the message was signed with a secret key matching the public key.
   *
   * @param message - The message that was signed
   * @param signature - The message's signature
   * @param publicKey - The public key whose secret counterpart was supposedly used for signing
   * @return `true` if the signature is correct, `false` otherwise
   */
  verifyMessageWithPublicKey(
    message: string,
    signature: Signature,
    publicKey: PublicKey
  ): Promise<boolean> {
    /* ... */
  }

  // ...
}
```

##### `Crypto`

Use `Crypto` as a shorthand to apply `AsymmetricEncryption` and `SignMessage`.

Affected by:

- `Bip32`

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlinerotocol<
      {
        /* Generic Types */
      },
      "Crypto" /* = 'AsymmetricEncryption', 'SignMessage' */
    > {
  // ...
}
```

##### `FetchDataForAddress`

Use `FetchDataForAddress` if your protocol should fetch data such as list of account's transactions and its balance using the account's address instead of public key.

Affected by:

- `MultiTokenSubProtocol`

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "FetchDataForAddress"
    >
{
  /**
   * Get a list of transactions involving the specified account.
   *
   * @param address - The account's address which should be a sender or reciever of the transactions
   * @param limit - The maximum number of transactions to return
   * @param cursor - A paging cursor specifying how to proceed with the fetching
   * @returns A list of transactions with a cursor which can be used to fetch another portion of data
   */
  getTransactionsForAddress(
    address: string,
    limit: number,
    cursor?: TransactionCursor
  ): Promise<AirGapTransactionsWithCursor> {
    /* ... */
  }

  /**
   * Get the balance of the account.
   *
   * @param address - The account's address
   * @returns The balance
   */
  getBalanceOfAddress(address: string): Promise<Balance> {
    /* ... */
  }

  // ...
}
```

##### `FetchDataForMultipleAddresses`

Use `FetchDataForMultipleAddresses` if your protocol should fetch data such as list of account's transactions and its balance using the account's multiple addresses instead of public key.

Affected by:

- `MultiTokenSubProtocol`

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "FetchDataForMultipleAddresses"
    >
{
  /**
   * Get a list of transactions involving the account represented by the list of addresses.
   *
   * @param addresses - The account's addresses which should be a sender or reciever of the transactions
   * @param limit - The maximum number of transactions to return
   * @param cursor - A paging cursor specifying how to proceed with the fetching
   * @returns A list of transactions with a cursor which can be used to fetch another portion of data
   */
  getTransactionsForAddresses(
    addresses: string[],
    limit: number,
    cursor?: TransactionCursor
  ): Promise<AirGapTransactionsWithCursor> {
    /* ... */
  }

  /**
   * Get the balance of the account.
   *
   * @param addresses - The account's addresses
   * @returns The balance
   */
  getBalanceOfAddresses(
    addresses: string[],
    configuration?: undefined
  ): Promise<Balance> {
    /* ... */
  }

  // ...
}
```

##### `ConfigurableTransactionInjector`

Apply `ConfigurableTransactionInjector` to your protocol if during its lifetime it can be configured with a special injector service that can submit transactions on the protocol's behalf.

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "ConfigurableTransactionInjector"
    >
{
  /**
   * Get the injector service URL the protocol is currently configured with.
   *
   * @return The URL or `undefined` if none is set
   */
  getInjectorUrl(): Promise<string | undefined> {
    /* ... */
  }

  /**
   * Set the injector serivce URL.
   *
   * @param url - The injector's URL
   */
  setInjectorUrl(url: string): Promise<void> {
    /* ... */
  }

  // ...
}
```

##### `TransactionStatusChecker`

Use `TransactionStautsChecker` if your protocol can check a transaction status based on its ID at any time.

```typescript
// protocol-online.ts

import /* ... */ "@airgap/module-kit";

class MyOnlineProtocol
  implements
    AirGapOnlineProtocol<
      {
        /* Generic Types */
      },
      "TransactionStatusChecker"
    >
{
  /**
   * Check the transaction status.
   *
   * @param transactionIds - IDs of the transactions for which to check the status
   * @return A set of transaction statuses grouped by transaction id
   */
  getTransactionStatus(
    transactionIds: string[]
  ): Promise<Record<string, AirGapTransactionStatus>> {
    /* ... */
  }

  // ...
}
```

#### `AirGapProtocol`

All extensions that apply for `AirGapOfflineProtocol` or `AirGapOnlineProtocol` can be used on `AirGapProtocol`.
