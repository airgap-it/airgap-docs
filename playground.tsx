import React, { useState } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useWindowSize from "@site/src/hooks/useWindowSize";
import Monaco from "@site/src/components/Monaco";
import styles from "./styles.module.css";
import { ExecutionState } from "../ExecutionState";
import { copyShareUrl, runBeaconCode } from "../utils";

const defaultCode = `import { TezosProtocol } from "@airgap/coinlib-core";

const mnemonic =
"abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";

const protocol = new TezosProtocol();

const publicKey = await protocol.getPublicKeyFromMnemonic(
mnemonic,
protocol.standardDerivationPath
);
const address = await protocol.getAddressFromPublicKey(publicKey);

console.log("Address", address);
`;

function Playground() {
  if (typeof window === "undefined" || typeof Buffer === "undefined") {
    return null;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const initialCode = urlParams.has("code")
    ? atob(urlParams.get("code"))
    : defaultCode;

  const [input, setInput] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [executionState, setExecutionState] = useState(ExecutionState.INIT);

  const windowSize = useWindowSize();

  const inputChanged = (str) => {
    setInput(str);
  };

  const headerLayout = {
    height: 100,
  };

  const editorWidthRatio = 3 / 5;
  const editorLayout = {
    xs: {
      width: windowSize.width,
      height: 200,
    },
    lg: {
      width: editorWidthRatio * windowSize.width,
      height: windowSize.height - headerLayout.height,
    },
  };

  const outputLayout = {
    xs: {
      width: windowSize.width,
      height: windowSize.height - headerLayout.height - editorLayout.xs.height,
    },
    lg: {
      width: (1 - editorWidthRatio - 0.05) * windowSize.width,
      height: windowSize.height,
    },
  };

  const execute = async () => {
    if (executionState === ExecutionState.STARTED) {
      return;
    }
    await clear();
    setExecutionState(ExecutionState.STARTED);
    await runBeaconCode(input, setOutput);
    setExecutionState(ExecutionState.ENDED);
  };

  const clear = async () => {
    setOutput("");
    setExecutionState(ExecutionState.INIT);
  };

  function handleClickShare() {
    copyShareUrl(input);
  }

  return (
    <Layout title="Beacon" description="Beacon Playground" noFooter={true}>
      <div className={classnames(styles.runbox)}>
        <button
          onClick={execute}
          className="button button--primary margin-bottom--lg margin-right--xs"
        >
          Run Code
        </button>
        <button
          onClick={clear}
          className="button button--secondary margin-bottom--lg margin-right--xs"
        >
          Clear Output
        </button>
        <button
          onClick={handleClickShare}
          className="button button--secondary margin-bottom--lg margin-right--xs"
        >
          Share Code (Copy to Clipboard)
        </button>
      </div>

      <div className={classnames(styles.row)}>
        <Monaco
          {...(windowSize.width > 600 ? editorLayout.lg : editorLayout.xs)}
          language="typescript"
          value={input}
          onChange={inputChanged}
          options={{ minimap: { enabled: false }, wordWrap: "on" }}
        />
        <Monaco
          {...(windowSize.width > 600 ? outputLayout.lg : outputLayout.xs)}
          language="bash"
          value={output}
          options={{
            readOnly: true,
            minimap: { enabled: false },
            wordWrap: "on",
          }}
        />
      </div>
    </Layout>
  );
}

export default Playground;
