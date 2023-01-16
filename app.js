var animals = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(animals);
var objectTest = {
    string: "String",
    boolean: true,
    number: 29
};
console.log(objectTest);
var returnString = function (x) {
    return "hej" + x;
};
console.log(returnString("x"));
for (var i = 0; i < animals.length; i++) {
    console.log(returnString(animals[i]));
}
