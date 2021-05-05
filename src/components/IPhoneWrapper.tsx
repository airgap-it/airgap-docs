import React from "react";
import IPhoneX from "./IPhoneX";
import useWindowSize from "@site/src/hooks/useWindowSize";

function IPhoneWrapper({ src, alt }) {
  const windowSize = useWindowSize();

  console.log("phone", src);

  let width = "50%";
  if (windowSize.width < 650) {
    width = "100%";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <IPhoneX screenshot={src} alt={alt} width={width} />
    </div>
  );
}

export default IPhoneWrapper;
