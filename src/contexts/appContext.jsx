import  React, { createContext, useContext, useReducer, useState } from "react";
import { initialReducerState, reducerFunction } from "../reducer/Reducer";

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    // const initialPlayersData = {
    //     playerOne : "",
    //     playerTwo: "",
    //     playerThree: "",
    // }

    // const [players, setPlayers] = useState(initialPlayersData)

    const [state, dispatch]= useReducer(reducerFunction, initialReducerState)


    return(
     <AppContext.Provider value={{ state, dispatch}}>
        {children}
     </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)