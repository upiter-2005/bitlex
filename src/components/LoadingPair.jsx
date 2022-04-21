import React from "react";
import ContentLoader from "react-content-loader";

function LoadingPair() {
  return (
    <>
      <ContentLoader
        speed={2}
        width={400}
        height={20}
        viewBox="0 0 400 30"
        backgroundColor="#878787"
        foregroundColor="#ecebeb"
      >
        <circle cx="10" cy="20" r="8" />
        <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
      </ContentLoader>
    </>
  );
}

export default LoadingPair;
