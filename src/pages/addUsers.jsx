import { useState } from "react"
import { useAppContext } from "../contexts/appContext"
import { useNavigate } from "react-router-dom"
import { deleteAllPlayers } from "../utils/apiRequests/deleteAllPlayers"

export const AddUsers = () => {

    const {state, dispatch} = useAppContext()

    const initialPlayerNames = {
        playerOne:"",
        playerTwo:"",
        playerThree:""
    }

    const [players, setPlayers] = useState(initialPlayerNames)

    const navigate = useNavigate()

    const deletePlayers = async () => {
        try {
            const deletedPlayers = await deleteAllPlayers();
            // console.log("Deleted players:", deletedPlayers);
        } catch (error) {
            console.error(error);
        }
    };

    const submitHandler = () =>{
            // e.preventDefault()

            dispatch({type:"ADD_PLAYER", payload : players?.playerOne})
            dispatch({type:"ADD_PLAYER", payload : players?.playerTwo})
            dispatch({type:"ADD_PLAYER", payload : players?.playerThree})

            setPlayers(initialPlayerNames)
            dispatch({type:"START_GAME"})
            deletePlayers()
            navigate("/home")
    }


    return(
        <div className="flex justify-center items-center h-screen">

            <form onSubmit={submitHandler} className="flex flex-col justify-center items-center border rounded-lg px-3 py-4 shadow-lg">
                <div>
                    <label className="block mt-4 mb-1  text-sm font-medium text-gray-900 " htmlFor="">Player 1</label>
                    <input 
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="playerOne"
                    type="text"
                    placeholder="Enter Player 1 Name"
                    value={players?.playerOne}
                    onChange={(e) => setPlayers({...players, playerOne: e.target.value} )}
                    required
                     />
                </div>
                <div>
                    <label className="block mt-4 mb-1 text-sm font-medium text-gray-900 " htmlFor="">Player 2</label>
                    <input 
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="playerTwo"
                    type="text"
                    placeholder="Enter Player 2 Name"
                    value={players?.playerTwo}
                    onChange={(e) => setPlayers({...players, playerTwo: e.target.value} )}
                    required
                     />
                </div>
                <div>
                    <label className="block mt-4 mb-1 text-sm font-medium text-gray-900 " htmlFor="">Player 3</label>
                    <input 
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="playerThree"
                    type="text"
                    placeholder="Enter Player 3 Name"
                    value={players?.playerThree}
                    onChange={(e) => setPlayers({...players, playerThree: e.target.value} )}
                    required
                     />
                     <div className="flex justify-center items-center">

                     <button className="bg-black text-white px-2 py-1 rounded-md  mb-3 mt-5" type="submit">Lets Play</button>
                     </div>
                </div>
            </form>

        </div>
    )
}


// const data = [
//     {
//         playerOne: "",
//         score: [1,2,3,4,5],
//         points: ""
//     }
// ]