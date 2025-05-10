import { createContext, useContext, useState } from "react";

const HomeContext = createContext({

});
 
export const HomeProvider = ({children}) => {



  return <HomeContext.Provider value={{
  slectlanguage,
  currency,
  }

  }>{children}</HomeContext.Provider>
};


export const useHomeContext = () => useContext(HomeContext);