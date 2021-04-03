/// START
import { TezosProtocol } from "@airgap/coinlib-core";
/// END

async () => {
  /// START
  const mnemonic =
    "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";

  const protocol = new TezosProtocol();

  const publicKey = await protocol.getPublicKeyFromMnemonic(
    mnemonic,
    protocol.standardDerivationPath
  );
  const address = await protocol.getAddressFromPublicKey(publicKey);

  console.log("Address", address);
  /// END
};
