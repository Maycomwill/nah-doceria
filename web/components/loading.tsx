import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";

interface LoadingProps {
  size?: number;
}
function Loading({ size = 24 }: LoadingProps) {
  return (
    <div className="animate-spin p-2">
      {/* <div className="animate-pulse"> */}
      <CgSpinnerTwo size={size} color="#dd577f" />
      {/* </div>*/}
    </div>
  );
}

export default Loading;
