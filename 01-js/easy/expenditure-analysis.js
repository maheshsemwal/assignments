/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let c = []
  for (let i of transactions){
   let categoryExists = false;

    for (let j of c) {
      if (j["category"].toLowerCase() === i["category"].toLowerCase()) {

        j["totalSpent"] += i["price"];
        categoryExists = true;
        break; 
      }
    }

    if (!categoryExists) {
      let obj = {};
      obj["category"] = i["category"];
      obj["totalSpent"] = i["price"];
      c.push(obj);
    }
  }
  return c;
}

module.exports = calculateTotalSpentByCategory;
