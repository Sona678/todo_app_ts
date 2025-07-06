import { useContext } from "react";
import { DemoContext } from "./context";

const L4 = () => {
  const {setPanId, address,name,panId } = useContext(DemoContext);

  return (
    <div>
      <p>
        L4: PAN no:{name}, {panId} , {address}
      </p>
      <button className="text-bold border-2" onClick={() => setPanId("456")}>setPAN</button>
    </div>
  );
};

export default L4;
