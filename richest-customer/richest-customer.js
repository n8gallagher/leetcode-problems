
// @param {number[][]} accounts
// @return {number}

//   Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

var maximumWealth = function(accounts) {
  let wealthTotals = []
    for (let i = 0; i < accounts.length; i++) {
      const subarr = accounts[i];
      let total = 0
      let userWealth = 0
      for (let j = 0; j < subarr.length; j++) {
        let el = subarr[j];
        userWealth += el;
      }
      wealthTotals.push(userWealth);
    }
    let greatest = wealthTotals[0]
    for (let i = 1; i < wealthTotals.length; i++) {
      const el = wealthTotals[i];
      if (el >= greatest) {
        greatest = el;
      }
  
    }
    return greatest;
};

let accounts = [[1,5],[7,3],[3,5]];

console.log(maximumWealth(accounts));