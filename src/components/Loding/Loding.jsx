import React from "react";
import { infinity } from "ldrs";
function Loding() {
  infinity.register();
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]  ">
      <l-infinity
        size="150"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="black"
      ></l-infinity>
    </div>
  );
}

export default Loding;
