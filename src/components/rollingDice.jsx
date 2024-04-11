import { useAppContext } from "../contexts/appContext"
import { calculatePoints } from "../utils/calculatePoints"
import { makePostRequest } from "../utils/makePostRequest"
import { returnScoreCard } from "../utils/returnScoreCard"

export const RollingDice = ({isClose}) => {

    const { state, dispatch} = useAppContext()

    const scoreCard = returnScoreCard() // [1,2,3,4,5]

    const points = calculatePoints(scoreCard)

    const activePlayerData = {
        name: state?.players[state?.activePlayerIndex],
        scoreCard: state?.scores[state?.activePlayerIndex],
        points: state?.points[state?.activePlayerIndex]
    }




    const submitScore = () => {
        dispatch({type:"UPDATE_SCORE", payload:{scoreCard: scoreCard, points: points}})

        if(state.activePlayerIndex <= 2) {

            dispatch({type:"END_ROLLING"})
        } else {
            // SUBMIT SCORE
            makePostRequest(activePlayerData)
            
        }
        isClose()
    }

    return(
        <div className="text-center">
            <h2>Rolling Dices</h2>
            <p>Animation</p>
            <div className="flex justify-center items-center">
                <div className="border border-gray-400 p-3 m-1">{scoreCard[0]}</div>
                <div className="border border-gray-400 p-3 m-1">{scoreCard[1]}</div>
                <div className="border border-gray-400 p-3 m-1">{scoreCard[2]}</div>
                <div className="border border-gray-400 p-3 m-1">{scoreCard[3]}</div>
                <div className="border border-gray-400 p-3 m-1">{scoreCard[4]}</div>
            </div>

            <p>Congrats, you got {points} points</p>

            <button onClick={() => {submitScore(); isClose();}}>Submit</button>

        </div>
    )
}