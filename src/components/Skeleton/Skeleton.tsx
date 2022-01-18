import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    className="max-w-[250px] h-[300px] shadow-md rounded-md p-5 shadow-gray-400 bg-neutral-100"
    // width={250}
    // height={335}
    viewBox="0 0 250 335"
    backgroundColor="#cfcfcf"
    foregroundColor="#e6e6e6">
    <rect x="35" y="23" rx="6" ry="6" width="180" height="90" />
    <rect x="48" y="134" rx="6" ry="6" width="155" height="35" />
    <rect x="18" y="202" rx="6" ry="6" width="210" height="50" />
    <rect x="120" y="274" rx="6" ry="6" width="110" height="40" />
  </ContentLoader>
);

export default Skeleton;
