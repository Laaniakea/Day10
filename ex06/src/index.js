var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
};
function myFunction(propName, propValue) {
    lion[propName] = propValue;
    return lion;
}

console.log(myFunction("roar", "roar - roa")); // Only change code above this line
module.exports = myFunction;
