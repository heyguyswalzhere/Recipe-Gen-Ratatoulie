const food = ["chicken", "pork", "steak",];
const foodAmount = ["1/2 pound", "8 oz", "1 pound"];
const spice = ["garlic", "salt", "pepper"];
const spiceAmount = ["teaspoon", "tablespoon", "1/2 tsp"];
const panType = ["saute pan", "frying pan", "sauce pan", "oven"];
const cookType = ["fry", "saute", "simmer", "roast"];



function returnRandomItem(list){
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}

console.log(`let's make ${returnRandomItem(foodAmount)} of ${returnRandomItem(food)}!`)
// returnRandomItem()