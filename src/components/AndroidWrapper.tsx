import React from "react";
import useWindowSize from "@site/src/hooks/useWindowSize";
import Pixel3XL from "./Pixel3XL";

function AndroidWrapper({ src, alt }) {
  const windowSize = useWindowSize();

  console.log("phone", src);

  let width = "50%";
  if (windowSize.width < 650) {
    width = "100%";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Pixel3XL screenshot={src} alt={alt} width={width} />
    </div>
  );
}

export default AndroidWrapper;
