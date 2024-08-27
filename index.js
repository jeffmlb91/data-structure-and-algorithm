console.log("We are working")

// Hash Map in Javascript
// Hash map is a data structure that stores key-value pairs.
// We use a hash function to map kets to specific indeces (or bucket) in an array allowing for efficeint retrieval, insertion and deletion of values.
let map = new Map();

map.set("name", "John");
map.set("age", 30);
map.set("preferredFruit", "Avocato")
map.set("School", "U of T")
map.set("City", "London")
map.set("Course Taken", 10)

// This is the map.get method
console.log(map.get('name'))
console.log(map.get('age'))
console.log("My name is ", map.get("name"), " " + "and I am ", map.get('age'));

// We can also use the map.has(): This will check if a specific value is included

console.log(map.has("Course Taken"), " It has");
console.log(map.has("City"), " It does have")
console.log(map.has("Education "), " it doesn't have it")