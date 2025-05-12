
import { createContext, useContext } from "react";

export const PropusContext = createContext({
    handleClose:() => {},
    handleShow:() => {},
    onEntering : () => {}
  });

 export const PropusProvider = ({children}) => {
   const [modalShow, setModalShow] = useState(); 
   modalShow = () =>{
    
   }
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
return <PropusContext.Provider value={{
   handleClose, 
   handleShow,
   
}}>
{children}
</PropusContext.Provider> 

}
 

export const usePropusContext = () => useContext(PropusContext);