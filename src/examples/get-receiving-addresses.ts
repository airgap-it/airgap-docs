/// START
import {
  Serializer,
  BitcoinProtocol,
  IACMessageType,
  SubProtocolSymbols,
  MainProtocolSymbols,
  AccountShareResponse,
} from "@airgap/coinlib-core";
/// END

(async () => {
  /// START
  const serializer = new Serializer();

  // This is the AccountShareResponse for the following mnemonic
  // abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about

  // Single QR
  const qrData =
    "airgap-wallet://?d=66ds3Rvy92D8gFd9dpatACJrYj3goYAhEZkY6NoX4AAZfetmZ95NoLEyL5L9bUKtvonnnEFmiBhu5YPqVSsU7Nzd9WWEdJNcGzHnzHCne6CN9kzE7nkQHes78VafWwHqJmjfrnzix1xorBMmGXFq792cjof3pGMAjeUWPqW6YyNtvkRuogp2vnMtHCpXxbESojgd9wg9tCEWoxYyDZTP8gb";
  // Paged QRs
  // const qrData =
  //   "5LogPgc9Kvs7dVratQJaJcradjCUzyDF,5LogPgcKwnDGiwfMwnALTeFiRBsWTGKW,5LogPgcWZdZRo4YrWLmR7mx7eaxngQLj,5LogPgchBUuatt63m5hQqJYaRtWaGuy5,5LogPgcsoLFjzUqs65uArQYMUtiK2m23,5LogPgd4RBbu5sNFkYKx1Zje9gh7Ert4,5LogPgdF32x4B2FZxPzCuKMFRJWTnmpU,5LogPgdRetJDGWfDhY7JavQLAqw2xHXV,5LogPgdcGjeNMpQLTnsRnLNTpTpZda1z,5LogPgdntazXTbgqrYfE5tqo9fafssP1,2UPEHD4AvBBjV1JwgM3raLeciupVL3gKYcb,2UPEHD4AvBNMLMU2vjXSmYCBkadvFZzoGkq,2UPEHD4AvBYyBhd8WJ38TfKpiN5B87cZKm6,2UPEHD4AvBjb33nDcc9vnzeExdqwgVYVaUY,LFhi4KqPsLB5xobt589oqGKDbc5Rnm3bv";

  const data = (() => {
    try {
      const url = new URL(qrData);
      return [url.searchParams.get("d")];
    } catch (e) {
      return qrData.split(",");
    }
  })();

  const output = await serializer.deserialize(data);

  console.log(output);
  if (
    output[0].type !== IACMessageType.AccountShareResponse &&
    output[0].protocol !== MainProtocolSymbols.BTC
  ) {
    throw new Error("Not BTC");
  }

  const protocol = new BitcoinProtocol();
  const addresses = await protocol.getAddressesFromExtendedPublicKey(
    (output[0].payload as AccountShareResponse).publicKey,
    0,
    100,
    0
  );

  addresses.forEach((address, index) => {
    console.log(index, address);
  });
  /// END
})();
