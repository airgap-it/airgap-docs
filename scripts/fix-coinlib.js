const fs = require("fs");

const coinlibPath = "./node_modules/@airgap/coinlib-core";

content = fs.readFileSync(`${coinlibPath}/airgap-coinlib-core.min.js`, {
  encoding: "utf8",
});

const newContent = content;

fs.writeFileSync(`${coinlibPath}/index.js`, newContent, {
  encoding: "utf8",
});
