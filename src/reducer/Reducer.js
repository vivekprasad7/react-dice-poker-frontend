export const initialReducerState = {
    players:[],
    scores:[[],[],[]],
    points:[0,0,0],
    activePlayerIndex:0,
    isRolling:false
}

export const reducerFunction = (state, action) => {
    switch(action.type){
        case"ADD_PLAYER":
        return {...state, players:[...state.players, action.payload]};
        case"START_GAME":
        return {...state, activePlayerIndex: 0};  // Hi Jake its your turn, Roll the dice
        case"START_ROLLING":
        return{...state, isRolling: true} 
        // Start rolling > Load Module > Animation for 3 secs > Return Score Card + Points  > Submit
        case"UPDATE_SCORE":
        const updatedScores = [...state?.scores];
        updatedScores[state.activePlayerIndex] = action.payload.scoreCard;
        return {...state, scores: updatedScores, points: action.payload.points}
        case"END_ROLLING":
        return{...state, isRolling: false, activePlayerIndex: state?.activePlayerIndex + 1}
        default:
            return state;
    }
}

// const player = {
//     name:"",
//     scoreCard:[],
//     points:0
// }

// export const initialReducerState = {
//     players:[{...player}],
//     scores:[[],[],[]],
//     points:[0,0,0],
//     activePlayerIndex:0,
//     isRolling:false
// }



// export const initialReducerState = {
//     playerOne : "",
//     playerTwo:"",
//     playerThree:"",
//     scoreOne:[],
//     scoreTwo:[],
//     scoreThree:[],
//     pointsOne:0,
//     pointsTwo:0,
//     pointsThree:0,
//     activePlayerName: "",
//     activePlayerScore:[],
//     activePlayerPoints:0,
//     isRolling:false
// }

// export const reducerFunction = (state, action) => {
//     switch(action.type){
//         case"ADD_PLAYER_ONE":
//         return {...state, playerOne: action.payload};
//         case"ADD_PLAYER_TWO":
//         return {...state, playerTwo: action.payload};
//         case"ADD_PLAYER_THREE":
//         return {...state, playerThree: action.payload};
//         case"TURN_ONE":
//         return{...state, activePlayer: playerOne}
//         case"ROLLING_DICE_ONE":
//         return {...state, isRolling: true};


//         default:
//             return state;
//     }
// }

