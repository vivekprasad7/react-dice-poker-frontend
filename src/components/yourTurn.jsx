import { useAppContext } from "../contexts/appContext"

export const YourTurn = () => {

    const { dispatch} = useAppContext()


    return(
        <div className="flex flex-col justify-center items-center">
            <h2>Hi, Jake its your turn</h2>
            <button
            onClick={() => dispatch({type:"ROLLING_DICE" , payload: true})}
            className="bg-black text-white px-2 py-1 m-2 rounded-lg">Roll the Dice</button>
        </div>
    )
}