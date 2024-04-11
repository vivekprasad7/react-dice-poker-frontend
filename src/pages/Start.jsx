import {useNavigate} from "react-router-dom"

export const Start = () => {
    const navigate = useNavigate()
    return(
        <div className="flex justify-center items-center h-screen">

            <div className="text-center">

            <h1 className="text-4xl my-12">Game of <span className="font-bold">Dice</span> </h1>
            <p>Challenge your friends for a friendly game of Dice Poker.</p>
            <p><small>*Requires 3 Users to play simultaneously.</small></p>
            <button className="bg-black text-white px-2 py-1 rounded-md m-2" onClick={() => navigate("/add-users")}>Start</button>
            </div>
        </div>
    )
}