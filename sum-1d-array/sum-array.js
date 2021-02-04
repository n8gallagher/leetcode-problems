
  // @param {number[]} nums
  // @return {number[]}
//   Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 
var runningSum = function(nums) {
  let answer = [nums[0]];
  let lastNumInAnswer = answer[answer.length -1]
    for (let i = 1; i < nums.length; i++ ) {
      let num = nums[i];
      answer.push(lastNumInAnswer + num);
      lastNumInAnswer = answer[answer.length -1];
    }
    return answer
};

let numbers = [1,1,1,1,1]

console.log(runningSum(numbers))