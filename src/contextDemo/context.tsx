import { createContext } from "react";

export type DemoType = {
  panId: string;
  address: string;
  name: string;
  setPanId: (panId: string) => void;
  setAddress:(address: string)=>void;
  setName: (name:string)=>void;
};

export const DemoContext = createContext<DemoType>({
  panId: "",
  address: "",
  name: "",
  setPanId: () => {},
  setAddress: () => {},
  setName: () => {}
});

