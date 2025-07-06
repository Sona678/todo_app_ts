// import React from "react";
import { useContext } from "react";
import { DemoContext } from "./context";
import L4 from "./L4";

const L3 = () => {
  const demo = useContext(DemoContext);

  return (
    <div>
      <p>
        L3: PAN no:{demo.panId}, {demo.name}, {demo.address}
        <br/>
        <L4/>
      </p>
    </div>
  );
};

export default L3;
