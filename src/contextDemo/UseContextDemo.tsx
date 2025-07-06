import { useState } from "react";
import { DemoContext } from "./context";
import L1 from "./L1";

const UseContextDemo = () => {
  const [demo, setDemo] = useState({
    panId: "123",
    address: "BKT",
    name: "John",
  });

  return (
    <div className="text-center mt-6">
      <button
        className="text-blue-400 bg-amber-400 hover:text-teal-600 border-2 border-teal-400 rounded-md px-4 py-2"
        onClick={() =>
          setDemo({ panId: "717", address: "Lalitpur", name: "Sona" })
        }
      >
        Toggle PAN
      </button>

      <DemoContext.Provider
  value={{
    panId: demo.panId,
    address: demo.address,
    name: demo.name,
    setPanId: (panId: string) => setDemo(prev => ({ ...prev, panId })),
    setAddress: (address: string) => setDemo(prev => ({ ...prev, address })),
    setName: (name: string) => setDemo(prev => ({ ...prev, name })),
  }}
>
  <L1 />
</DemoContext.Provider>

    </div>
  );
};

export default UseContextDemo;
