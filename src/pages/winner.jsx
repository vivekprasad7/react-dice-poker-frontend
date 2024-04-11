import axios from "axios"
import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import rollingDice from "../assets/rollingDice.json"
import confetti from "../assets/confetti.json"
import { useNavigate } from "react-router-dom"


export const Winner = () => {

    const [winner, setWinner] = useState("")
    const [ isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    console.log("Winner", winner)

    const getWinner = async () => {
        try {
            const res = await axios.get("http://localhost:4000/players/winner")
            console.log("res.data", res.data)
            const winnerData =  res.data.winner

            console.log("winner", winnerData)
        setWinner(winnerData)
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            getWinner()

        },1000)
        setIsLoading(false)

    }, [])

    return (
        <div className=" flex items-center justify-center">
            {
                isLoading ?   <div className="flex justify-center items-center ">
                <Lottie className="w-14 my-4" animationData={rollingDice} />
                </div>
                :
                <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-5xl absolute">And the Winner is {winner?.name} </h1>
                <button className="absolute bottom-5 bg-black text-white px-2 py-1 rounded-md  mb-3 mt-5 cursor-pointer z-10" onClick={() => navigate("/")}>Restart the Game</button>
                <Lottie className="w-100% my-4" animationData={confetti} />


</div>

            }

          
        </div>
    )
}