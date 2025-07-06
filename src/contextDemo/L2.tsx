// import React from "react";
import { useContext } from "react";
import { DemoContext } from "./context";
import L3 from "./L3";

const L2 = () => {
  const demo = useContext(DemoContext);

  return (
    <div>
      <p>
        L2: PAN no:{demo.panId}, {demo.name}, {demo.address}
      </p>
      <L3/>
    </div>
  );
};

export default L2;
