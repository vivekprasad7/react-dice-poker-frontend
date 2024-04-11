

const scoringPatterns = [
    { pattern: "5 of a kind", diceCount: 5, points: 5 },
    { pattern: "4 of a kind", diceCount: 4, points: 4 },
    { pattern: "Full House", diceCount: [2, 3], points: 3 },
    { pattern: "Straight", diceCount: 5, points: 2 },
    { pattern: "Pair", diceCount: 2, points: 1 }
  ];
  
  
  
//   let scoreCard = [1,1,2,3,4]
//   console.log(scoreCard.sort())
  
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
  
//   console.log(calculatePoints(scoreCard))
  
  // function returnPoints(sorted){
  //   let points = 0;
  //   let uniqueNumber = sorted[0]
  //   for(let i = 0; i < sorted.length; i++){
  //     if(sorted[i+1] !== sorted(i)){
  //       uniqueNumber = sorted[i+1]
  //     } 
  
  //   }
  // }
  
  
  function returnPoints(sorted) {
    let mostRepeatedNumber = sorted[0]; // Initialize the most repeated number to the first element
    let maxCount = 1; // Initialize the maximum count to 1
    let currentNumber = sorted[0]; // Initialize the current number being checked
    let currentCount = 1; // Initialize the count for the current number
  
    // Iterate through the sorted array starting from the second element
    for (let i = 1; i < sorted.length; i++) {
        // If the current element is equal to the previous one, increment the count
        if (sorted[i] === currentNumber) {
            currentCount++;
        } else {
            // If the current element is different from the previous one
            // Check if its count is greater than the maximum count
            if (currentCount > maxCount) {
                maxCount = currentCount; // Update the maximum count
                mostRepeatedNumber = currentNumber; // Update the most repeated number
            }
            // Reset the current number and count to the new element
            currentNumber = sorted[i];
            currentCount = 1;
        }
    }
  
    // Check if the last element has the highest count
    if (currentCount > maxCount) {
        maxCount = currentCount;
        mostRepeatedNumber = currentNumber;
    }
  
    if(maxCount === 2) {
      return 1 // pair
    } 
    
    return maxCount// Return the count of the most repeated number
  }
  
  
  function isStraightSequence(array) {
    // Sort the array to ensure sequential numbers are adjacent
    const sortedArray = array.sort((a, b) => a - b);
    
    // Iterate through the sorted array and check if each element is one more than the previous one
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[i - 1] + 1) {
            return false; // If any element breaks the sequence, return false
        }
    }
    
    return true; // If all elements form a straight sequence, return true
  }
  