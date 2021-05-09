/// START
import {
  IACMessageType,
  MainProtocolSymbols,
  Serializer,
} from "@airgap/coinlib-core";
/// END

(async () => {
  /// START
  const serializer = new Serializer();

  // This is the AccountShareResponse for the following mnemonic
  // abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
  const publicKey =
    "xpub6BosfCnifzxcFwrSzQiqu2DBVTshkCXacvNsWGYJVVhhawA7d4R5WSWGFNbi8Aw6ZRc1brxMyWMzG3DSSSSoekkudhUd9yLb6qx39T9nMdj";
  const derivationPath = "m/44'/0'/0'";

  const data = {
    type: IACMessageType.AccountShareResponse,
    protocol: MainProtocolSymbols.BTC,
    id: "0000000000", // Random ID to match request / response
    payload: {
      derivationPath,
      isExtendedPublicKey: true,
      publicKey,
    },
  };

  const output = await serializer.serialize([data]);

  console.log(output[0]);
  /// END
})();
