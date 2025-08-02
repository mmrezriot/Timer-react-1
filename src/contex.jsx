import { createContext } from "react";
import { useContext } from "react";

export const timesContext = createContext({
    setTimes:()=>{},
    times :[]
}
    
);