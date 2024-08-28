//console.log(' we are running')

// First we create a class of the HashMap and create a constructor

class HashMap {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    
    // We define how our hash method will hash the key which is a string
    // the _hash method will itterate through all the char in the string and provide and determine which index in  the array where we will assign the key | So the following code will point to an index based on the key provided
    _hash(key) {
        let hash = 0

        for (let i = 0; i < key.length; i ++) {
            hash = ( hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    // we need now to create a set method that will help us push the value in the hashMap

    set(key, value) {
        let index = this._hash(key)
        //Now if the index is currently empty, create a new array within the index else, push the key and value
        if(!this.dataMap[index]) {
            this.dataMap[index] = []  
        }
        this.dataMap[index].push([key, value])
    } return 
}

myHashTable = new HashMap()
myHashTable.set("Magoes", 10)
console.log(myHashTable);