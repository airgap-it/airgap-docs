const fs = require("fs");
const getFilesRecursively = require("./get-files-in-folder");

const files = getFilesRecursively(
  "./node_modules/@airgap/coinlib-core/"
).filter((file) => file.endsWith(".d.ts"));

const getFile = (filename) => {
  const text = fs.readFileSync(filename, { encoding: "utf8" });

  return text;
};

const outArray = files.map((dir) => ({
  name: dir.substring(13),
  dts: getFile(dir),
}));

fs.writeFileSync(
  "./src/components/monaco-types.ts",
  `export const libs = ${JSON.stringify(outArray)}`
);
