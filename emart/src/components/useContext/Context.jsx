import React from 'react'
import { createContext,useState} from 'react'
import axios from 'axios'
// export default Context

export const contextCreated = createContext()
const Context = (props) => {

    const [user,setUser] = useState(null)
    const [cart, setCart] = useState([]);


    async function getCartDetails() {
      try {
        if(user){

          // const userId = id.setUser()
          const id = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/cart/${user}`
          );
    
          // console.log("id.data", id.data);
          var x = id.data;
          console.log(x);
          setCart(x);
    
          // console.log(productId)
        }
      } catch (err) {
        console.log("eror in getting the cart products", err);
      }
    }
    
    
  return (
    <>
    <contextCreated.Provider value={{user,setUser,cart,setCart,getCartDetails}}>
        {props.children}
    </contextCreated.Provider>
    </>
  )
}


export default Context