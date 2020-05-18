const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      if (Array.isArray(collection)) {
        for (let index = 0; index < collection.length; index++) {
          const element = collection[index];
          callback(element, index, collection);
        }
      } else {
        for (const key in collection) {
          const value = collection[key];
          callback(value, key, collection);
        }
      }
      return collection;
    },

    map: function (collection, callback) {
      let output = [];
      if (Array.isArray(collection)) {
        for (let index = 0; index < collection.length; index++) {
          const element = collection[index];
          output.push(callback(element, index, collection));
        }
      } else {
        for (const key in collection) {
          const value = collection[key];
          output.push(callback(value, key, collection));
        }
      }
      return output;
    },

    reduce: function (collection, callback, acc) {
      let total = acc ? acc : collection[0];
      let start = acc ? 0 : 1;
      for (let index = start; index < collection.length; index++) {
        const element = collection[index];
        total = callback(total, element, collection);
      }
      return total;
    },

    find: function (collection, predicate) {
      for (const element of collection) {
        if (predicate(element)) {
          return element;
        }
      }
    },
    filter: function (collection, predicate) {
      let output = [];
      for (const element of collection) {
        if (predicate(element)) {
          output.push(element);
        }
      }
      return output;
    },
    size: function (collection) {
      let output = 0;
      for (const key in collection) {
        output++;
      }
      return output;
    },
    first: function (array, n) {
      if (n) {
        let output = [];
        for (let index = 0; index < n; index++) {
          const element = array[index];
          output.push(element);
        }
        return output;
      } else {
        return array[0];
      }
    },
    last: function (array, n) {
      let lastIndex = array.length - 1;
      if (n) {
        let output = [];
        for (let index = array.length - n; index < array.length; index++) {
          const element = array[index];
          output.push(element);
        }
        return output;
      } else {
        return array[lastIndex];
      }
    },
    compact: function (array) {
      let output = [];
      for (const element of array) {
        if (element) output.push(element);
      }
      return output;
    },
    sortBy: function (array, callback) {
      let newArray = [...array];
      return newArray.sort((a, b) => {
        let n1 = callback(a);
        let n2 = callback(b);
        return n1 > n2 ? 1 : n1 < n2 ? -1 : 0;
      });
    },
    flatten: function (array, oneLevelDeep) {
      let output = [];
      for (const element of array) {
        if (oneLevelDeep) {
          if (Array.isArray(element)) {
            for (const ele of element) {
              output.push(ele);
            }
          } else {
            output.push(element);
          }
        } else {
          output = flat(array);
        }
      }
      return output;
      function flat(array, flatten) {
        let arr = flatten || [];
        for (const element of array) {
          if (Array.isArray(element)) {
            flat(element, arr);
          } else {
            arr.push(element);
          }
        }
        return arr;
      }
    },
    uniq: function (array, isSorted, callback) {
      let output = [];
      let tempArray = [];
      callback = callback ? callback : (x) => x;
      for (const element of array) {
        let present = true;
          for (const innerElement of tempArray) {
            if (innerElement === callback(element)) {
              present = false;
            }
          }
        if (present) {
          output.push(element);
          tempArray.push(callback(element));
        }
      }
      return output;
    },

    keys: function (object) {
      let output = [];
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          output.push(key);
        }
      }
      return output;
    },
    values: function (object) {
      let output = [];
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          output.push(object[key]);
        }
      }
      return output;
    },
    functions: function (object) {
      let output = [];

      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          if (typeof element == "function") output.push(key);
        }
      }
      return output.sort();
    },
  };
})();

fi.libraryMethod();
