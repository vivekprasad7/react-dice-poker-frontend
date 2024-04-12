import { useAppContext } from "../contexts/appContext"
import { calculatePoints, calculateSumOfScores } from "../utils/calculatePoints"
import { addPlayer } from "../utils/apiRequests/addNewPlayer"
import { returnScoreCard } from "../utils/returnScoreCard"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import rollingDice from "../assets/rollingDice.json"

export const RollingDice = ({ isClose }) => {

    const { state, dispatch } = useAppContext()

    const initialPlayerScores ={
        scoreCard:[],
        points: 0,
        sum:0
    }



    const [diceRolled, setDiceRolled] = useState(false)


    function rollTheDice() {

        setDiceRolled(true)

        console.log("activePlayerIndex", state?.activePlayerIndex)

        const scoreCard = returnScoreCard() // [1,2,3,4,5]

        const points = calculatePoints(scoreCard) // 2
    
        const sum = calculateSumOfScores(scoreCard) // 
        
        console.log("scoreCard, points, sum", scoreCard, points, sum)

        dispatch({ type: "UPDATE_SCORE", payload: { scoreCard: scoreCard, points: points, sum: sum } })

    }

   


    const navigate = useNavigate()

    const activePlayerData = {
        name: state?.players[state?.activePlayerIndex],
        scoreCard: state?.scores[state?.activePlayerIndex],
        points: state?.points[state?.activePlayerIndex],
        sum:state?.sum[state?.activePlayerIndex]
    }

    console.log("activePlayerData", activePlayerData)

    const { scoreCard, points} = activePlayerData;






    const submitScore = async () => {
        // dispatch({ type: "UPDATE_SCORE", payload: { scoreCard: scoreCard, points: points, sum: sum } })

        try {
            await addPlayer(activePlayerData);
            console.log("added player")
            console.log("activePlayerIndex", state?.activePlayerIndex)
            dispatch({ type: "END_ROLLING" });
            setDiceRolled(false)
        } catch (error) {
            console.error(error);
        }

        if (state?.activePlayerIndex === 2) {
            // SUBMIT SCORE
            navigate("/winner")

        }
        isClose()
    }


    return (
        <div className="flex flex-col justify-center items-center">


            {
                !diceRolled ? <button onClick={() => rollTheDice()} className="p-2 m-2 border-2 border-gray-800 rounded-md transition duration-300 hover:rounded-lg font-medium">Roll the Dice</button> : 

                <div className="text-center">

<div className="flex justify-center items-center ">
                <Lottie className="w-14 my-4" animationData={rollingDice} />
            </div>

            <h3>Here's your Score Card</h3>
            <div className="flex justify-center items-center">


                <div className="border border-gray-400 p-3 m-1 transition-opacity duration-1000">{scoreCard[0]}</div>
                <div className="border border-gray-400 p-3 m-1 transition-opacity duration-1000">{scoreCard[1]}</div>
                <div className="border border-gray-400 p-3 m-1 transition-opacity duration-1000">{scoreCard[2]}</div>
                <div className="border border-gray-400 p-3 m-1 transition-opacity duration-1000">{scoreCard[3]}</div>
                <div className="border border-gray-400 p-3 m-1 transition-opacity duration-1000">{scoreCard[4]}</div>

            </div>

            <p>Congrats, you got {points} points</p>

            <button className="bg-black text-white px-2 py-1 rounded-md  mb-3 mt-5" onClick={() => { submitScore(); isClose(); }}>Submit</button>

                </div>

            }

           

        </div>
    )
}