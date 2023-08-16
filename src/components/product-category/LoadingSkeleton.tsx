import React from "react";
import Loading from "./Loading";

function LoadingSkeleton() {
  return (
    <>
      {
        Array(10).fill(0).map((num , i) =>  <Loading key={i}/>)
      }
    </>
  );
}

export default LoadingSkeleton;
