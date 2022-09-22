//  Input: 1) itemId: number  2) transactions: array
//  Output: boolean

//  Rules:
//  - use 'transactionsFor' function from previous exercise

//  Algorithm:
//  - get filtered array of all transactions for 'itemId' using 'transactionsFor' function
//  - use reduce to reduce array of objects to a number determining the quantity
//    - IF movement is 'in', add to quantity; ELSE IF movement is 'out', remove from quantity
//  - return boolean - whether quantity is greater than 0 (true) or not (false)

function isItemAvailable(itemId, transactions) {
  const itemTrans = transactionsFor(itemId, transactions);
  const total = itemTrans.reduce((acc, { movement, quantity }) => {
    if (movement === 'in') {
      acc += quantity;
    } else if (movement === 'out') {
      acc -= quantity;
    }

    return acc;
  }, 0);

  return total > 0;
}

function transactionsFor(itemId, transactions) {
  return transactions.filter(transaction => transaction.id === itemId);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));