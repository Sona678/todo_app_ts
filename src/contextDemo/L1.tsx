import { useContext } from "react";
import { DemoContext } from "./context";
import L2 from "./L2";

const L1 = () => {
  const demo = useContext(DemoContext);

  return (
    <div>
      <p>
        L1: PAN no:{demo.address}, {demo.panId} , {demo.address}
      </p>
       <L2/>
    </div>
  );
};

export default L1;
