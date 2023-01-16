const animals: string[] = [ "apa", "orangutang", "gorilla", "get", "giraff"];
console.log(animals);

var objectTest = {
    string: "String",
    boolean: true,
    number: 29
  }
  console.log(objectTest);

  const returnString = function (x:string) {
	return "hej" + x
}
console.log(returnString("x"));

 for(let i = 0; i < animals.length; i++) {
 	console.log(returnString(animals[i]));
 }
