//helper function which copy array is arg is array, copy object values into array if arg is object.
const inputCheck = function(collection){
    if (Array.isArray(collection)){
        return collection.slice()
    }
    else if(typeof(collection) === "object"){
        return Object.values(collection)
    }
}

//The following functions are implementations of actual javascript methods. USE METHODS in real world scenarios.

//function takes in collection and callback function, 
function myEach(collection, cb){
    const newCollection = inputCheck(collection)    /*creates new copy after checking arg type*/
    for (let i = 0; i < newCollection.length; i++){
        //passing elements of collection to callback function
        cb(newCollection[i]) 
    }
   //returning unmodified original collection
   return collection
}


function myMap(collection, cb){
    //creating copy of arg after checking arg type.
    const newCollection = inputCheck(collection)

    //creating new empty array
    const myArray = []

    //iterating through array and pushing(copying) elements to new empty array
    for (let i = 0; i < newCollection.length; i++){
        myArray.push(cb(newCollection[i]))
    }
    //returning newfilled array
    return myArray

}

function myReduce(collection, cb, acc){
    let newCollection = inputCheck(collection)
    
    // if no initial value is provided, set initial value to 0th element of newcollection , reset newcollection to begin at 1th element
    if (!acc){
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    // iterate through elements starting from acc += newcollection
    for (let i = 0; i < newCollection.length; i++){
        acc = cb(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind(collection, predicate){
    let newcollection = inputCheck(collection)

    //loop through array , return the first value that matches predicate arg
    for(let i = 0; i < newcollection.length; i++){
        if(predicate(newcollection[i])){
            return newcollection[i]
        }
    }
    // if no value matching the predicate is found, return undefined
    return undefined
}

function myFilter(collection, cb){
    let newcollection = inputCheck(collection)
    let newArray = []

    // iterate through array elements and pass each lement to cb function. if cb function definition true, push element to newArray
    for(let i = 0; i < newcollection.length; i++){
        if (cb(newcollection[i])){
            newArray.push(newcollection[i])
        }
    }
    // if callback function definition for array elememnt not true, return empty array (newArray)
    return newArray
}

// takes input (array or object) and return number of values in input
function mySize(collection){
    let newcollection = inputCheck(collection)
    return newcollection.length
}

// return 0th element of array if [n] is not provided, else return 1st to nth elements of array
function myFirst(array, n = false){
    if (!n){
        return array[0]
    }
    else{
        return array.slice(0, n)
    }
}

// return last element of array if [n] is not provided, else return last nth elements of array
function myLast(array, n = false){
    if (!n){
        return array[array.length-1]
    }
    else{
        return array.slice(-n)
    }
}

// mySortBy

// myFlatten

//iterate through keys in object, push all object keys to a new array per iteration,  return new array of object keys
function myKeys(object){
    const keysArray = []

    for (let key in object){
        keysArray.push(key)
    }
    return keysArray
}

// iterate through object , for every object key, push it's value to new array, return new array of object values
function myValues(object){
    const valuesArray = []
    for (let key in object){
        valuesArray.push(object[key])
    }
    return valuesArray
}