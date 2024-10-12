import  React, { createContext, useContext } from "react";
import { audiophileData } from "../App";

export const AudiophileContext = createContext<audiophileData | undefined>(undefined)



function usePageContext(){
    const data = useContext(AudiophileContext)


    if (data === undefined){
        throw new Error("WTF data is undefined")
    }

    return data
}

export default usePageContext;