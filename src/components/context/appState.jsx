import React, { useRef } from 'react'
import AppContext from './appContext'
import { useState } from 'react'

const AppState = (props) => {
    const [helloworld, setHelloworld] = useState("Helloworld")
    const navbarRef = useRef()
    return (
        <AppContext.Provider value={{helloworld,navbarRef}}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppState