import { useAppContext } from "../contexts/appContext"

export const AddUsers = () => {

    const {players, setPlayers} = useAppContext()

    const initialPlayerNames = {
        playerOne:"",
        playerTwo:"",
        playerThree:""
    }

    const [playerNames, setPlayerNames] = useState(initialPlayerNames)

    const submitHandler = () =>{
        
    }


    return(
        <div className="flex justify-center items-center h-screen">

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center items-center border border-gray-900 px-3 py-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="">Player 1</label>
                    <input 
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="playerOne"
                    type="text"
                    placeholder="Enter Player 1 Name"
                    value={playerNames?.playerOne}
                    onChange={(e) => setPlayerNames({...playerNames, playerOne: e.target.value} )}
                     />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="">Player 2</label>
                    <input 
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="playerTwo"
                    type="text"
                    placeholder="Enter Player 2 Name"
                    value={playerNames?.playerTwo}
                    onChange={(e) => setPlayerNames({...playerNames, playerTwo: e.target.value} )}
                     />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="">Player 3</label>
                    <input 
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="playerThree"
                    type="text"
                    placeholder="Enter Player 3 Name"
                    value={players?.playerThree}
                    onChange={(e) => setPlayerNames({...playerNames, playerThree: e.target.value} )}
                     />
                     <button onClick={submitHandler}>Lets Play</button>
                </div>
            </form>

        </div>
    )
}


const data = [
    {
        playerOne: "",
        score: [1,2,3,4,5],
        points: ""
    }
]