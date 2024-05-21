import React, {useContext, createContext, useState} from "react";

const CountContext = createContext();

export const useCount = () => useContext(CountContext)


//......................................................................
export const CountContextProvider = ({children}) => {
   const [count, setCount] = useState(0)

   const increment = () => setCount(count + 1)
   const decrement = () => setCount(count - 1)
   const reset = () => setCount(0)

   return(
    <CountContext.Provider value={{count, increment, decrement, reset}}>
        {children}
    </CountContext.Provider>
   )
}

