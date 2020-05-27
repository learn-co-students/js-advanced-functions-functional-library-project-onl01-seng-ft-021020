const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(typeof(collection) === "object"){
        for(const element in collection){
          callback(collection[element], element, collection)
        }
      } else {
        for(let i=0; i< collection.length; i++ ){
          callback(collection[i],i, collection)
        }
      }
      return collection
    },
//
    map: function(collection, callback) {
      let newArray=[]
      if(typeof(collection)=== "object"){
        for(const element in collection){
          newArray.push(callback(collection[element], element, collection))
        }
      } else {
        for (let i=0; i<collection.length; i++){
          newArray.push(callback(collection[i], i, collection))
        }
      }
      return newArray
    },
//
    reduce: function(collection, callback, acc) {
      if(!!acc) {
        for(const el of collection) {
          acc = callback(acc, el, collection)
        }
      } else {
        acc = collection[0]
        for(const el of collection.slice(1)) {
          acc = callback(acc, el, collection)
        }
      }
      return acc
    },

    find: function(collection, predicate){
      for(const element of collection){
        if(predicate(element)){
          return element
        }
      }
    },

    filter: function(collection, predicate){
      let newArray = []
      for(const element of collection){
        if (predicate(element)){
          newArray.push(element)
        }
      }
      return newArray
    }, 

    size: function(collection){
      if(typeof(collection)=== "object"){
        return Object.keys(collection).length
      } else {
        return collection.length
      }
    },

    first: function(array, n=1){
      let newArray=[]
      if(n===1){
        return array[0]
    
      } else {
        return array.slice(0,n)
      }
    },

    last: function(array, n=1){
      if (n === 1){
        return array[array.length-1]
      } 
      return array.slice(array.length-n, array.length)
      
    },

    compact: function(array) {
      let newArr = []
      for(const el of array) {
        if(!!el)
          newArr.push(el)
      };
      return newArr
    },

    sortBy: function(collection, callback){
      let newCollection = [...collection]
      let sortProgress = [-1]
      while(fi.find(sortProgress, e => e === -1)){
        for(let i = 0; i < newCollection.length - 1; i++){
          if(callback(newCollection[i]) > callback(newCollection[i+1])){
            let hold = newCollection[i+1]
            newCollection[i+1] = newCollection[i]
            newCollection[i] = hold
            sortProgress[i] = -1
          } else {
            sortProgress[i] = 0
          }
        }
      }
      return newCollection
    },

    flatten: function(array, shallow=false) {
      let newArr = []
      let level = 0
      function unnest(arr) {
        if (shallow) { level += 1 }
        for(const el of arr) {
          if (typeof el === 'object' && level <= 2) {
            unnest(el)
          } else {
            newArr.push(el)
          }
        };
      };
      unnest(array)
      return newArr
    },

    uniq: function(array, isSorted, callback) {
      let newArr = []
      let callbackArray = []
      for(const el of array) {
        let isUniq = true
        if (!!callback) {
          for(const jel of callbackArray) {
            if (jel === callback(el)) { 
              isUniq = false
            }
          };
        } else {
          for(const jel of newArr) {
            if (jel === el) { isUniq = false } 
          };
        }
        if (isUniq) { newArr.push(el) }
        if (isUniq && !!callback) { callbackArray.push(callback(el)) }
      };
      return newArr
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

    functions: function(object) {
      let newArray = []
      for(const element in object) {
      //  debugger
        if (typeof object[element] === 'function')
          newArray.push(element)
      };
      return newArray
    },


  }
})()

fi.libraryMethod()
