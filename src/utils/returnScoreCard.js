export function returnScoreCard() {

    let scoreCard = [];
  
    for(let i = 0; i < 5; i++){
        const dicePoint = Math.floor(Math.random() * 6) + 1
        scoreCard.push(dicePoint)
    }  
    
    return scoreCard;
  }
  
//   console.log(returnScoreCard())