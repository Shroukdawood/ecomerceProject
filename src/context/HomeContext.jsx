import { Children, createContext, useContext, useEffect, useState } from "react";

const HomeContext = createContext({
   homeProduct:null,
});
  
export const HomeproductProvider = ({children}) => {
  const[homeProduct , setHomeProduct] = useState(null);

  return <HomeContext.Provider value={{homeProduct}}>
    {children}
</HomeContext.Provider>
};

export const useHomeProductContext = () => useContext(HomeContext);