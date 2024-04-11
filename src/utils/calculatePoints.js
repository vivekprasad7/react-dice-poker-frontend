

const scoringPatterns = [
    { pattern: "5 of a kind", diceCount: 5, points: 5 },
    { pattern: "4 of a kind", diceCount: 4, points: 4 },
    { pattern: "Full House", diceCount: [2, 3], points: 3 },
    { pattern: "Straight", diceCount: 5, points: 2 },
    { pattern: "Pair", diceCount: 2, points: 1 }
  ];
  
  

  
  export function calculatePoints(scoreCard) {
  
    let sorted = scoreCard?.sort()
    // console.log(sort)
  
    let points = 0;
  
    if(isStraightSequence(sorted)){
      points = 2
    }
  
    if( returnPoints(sorted) > points ) {
      points = returnPoints(sorted)
    } 
  
    return points;
  
  }
  

  function returnPoints(sorted) {
    let mostRepeatedNumber = sorted[0];
    let maxCount = 1; 
    let currentNumber = sorted[0]; 
    let currentCount = 1;
  
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === currentNumber) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount; 
                mostRepeatedNumber = currentNumber; 
            }
            currentNumber = sorted[i];
            currentCount = 1;
        }
    }
  
    if (currentCount > maxCount) {
        maxCount = currentCount;
        mostRepeatedNumber = currentNumber;
    }
  
    if(maxCount === 2) {
      return 1 
    } 
    
    return maxCount
  }
  
  
  function isStraightSequence(array) {
    const sortedArray = array.sort((a, b) => a - b);
    
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[i - 1] + 1) {
            return false; 
        }
    }
    
    return true; 
  }


  export function calculateSumOfScores(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
      sum += array[i]
    }
    return sum;
  }
  