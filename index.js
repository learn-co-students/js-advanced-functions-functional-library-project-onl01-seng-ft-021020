const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      } 
      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      const arr = [] 

      for (let i = 0; i < collection.length; i++) {
        arr.push(callback(collection[i]))
      }
      return arr
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])) return collection[i]
      }

    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)
      
      const newCollection = []

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) newCollection.push(collection[i])
      
      return newCollection
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n=false){
    return (n) ? array.slice(0, n) : array[0]
    },

    last: function(array, n=false) {
      return (n) ? array.slice(array.length-n, array.length) : array[array.length-1]
    },

    compact: function(array) {
      const falseValues = new Set([false, null, 0, "", undefined, NaN])
      return array.filter(el => !falseValues.has(el))
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
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
        }
      }
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
          }
        } else {
          for(const jel of newArr) {
            if (jel === el) { isUniq = false } 
          }
        }
        if (isUniq) { newArr.push(el) }
        if (isUniq && !!callback) { callbackArray.push(callback(el)) }
      }
      return newArr
    },

    keys: function(object) {
      let keys = []
      for(const el in object) {
        keys.push(el) 
      }
      return keys
    },

    values: function(object) {
      let vals = []
      for(const el in object) {
        vals.push(object[el]) 
      }
      return vals
    },
    
    functions: function(object) {
      let funcs = []
      for(const el in object) {
        console.log(typeof el)
        if (typeof object[el] === 'function')
          funcs.push(el)
      }
      return funcs
    }
  }
})()

fi.libraryMethod()
