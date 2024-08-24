console.log("We are working")

// Hash Map in Javascript
// Hash map is a data structure that stores key-value pairs.
// We use a hash function to map kets to specific indeces (or bucket) in an array allowing for efficeint retrieval, insertion and deletion of values.
let map = new Map();

map.set("name", "John");
map.set("age", 30);

console.log(map.get('name'))
console.log(map.get('age'))
console.log("My name is ", map.get("name"), " " + "and I am ", map.get('age'))