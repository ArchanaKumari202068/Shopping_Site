import React from 'react'
import { createContext,useState} from 'react'


// export default Context

export const contextCreated = createContext()
const Context = (props) => {
    const [user,setUser] = useState(null)
  return (
    <>
    <contextCreated.Provider value={{user,setUser}}>
        {props.children}
    </contextCreated.Provider>
    </>
  )
}


export default Context