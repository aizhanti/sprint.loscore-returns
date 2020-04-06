// Let's make an object and start adding methods to it!
class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  uniq(array) {
    // YOUR CODE HERE
    let result = [];
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      if (!obj[array[i]]) {
        obj[array[i]] = 1;
        result.push(array[i]);
      }
    }
    console.log(obj);
    return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    // YOUR CODE HERE
    const array = [];
    this.each(collection, (val) => {
      array.push(iteratee(val));
    });
    return array;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    const result = [];
    this.filter(collection, (val) => {
      !test(val) && result.push(val);
    });
    return result;
  }

  reduce(collection, iterator, accumulator) {
    this.each(collection, (k, index) => {
      if (index == 0 && accumulator == undefined) {
        accumulator = k;
      } else {
        accumulator = iterator(accumulator, k, index);
      }
    });
    return accumulator;
  }

  every(collection, test) {
    // YOUR CODE HERE
    let isTrue = 0;
    this.reduce(collection, (accumulator, item) => {
      if (test === undefined) {
        if (!item) {
          isTrue++;
        }
      } else if (!test(item)) {
        isTrue++;
      }
    });
    return !isTrue;
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    // YOUR CODE HERE
    const extendedObj = obj;
    this.each(arguments, (obj) => {
      for (const prop in obj) {
        extendedObj[prop] = obj[prop];
      }
    });
    return extendedObj;
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    // YOUR CODE HERE
    let called = false;
    let first;
    return (args) => {
      if (!called) {
        called = true;
        if (!args) {
          first = func();
        } else {
          first = func(args);
        }
      } else {
        return first;
      }
      return first;
    };
  }

  memoize(func) {
    // YOUR CODE HERE
    const memory = {};
    return (arg) => {
      arg = JSON.stringify(arg);
      if (!memory[arg]) {
        memory[arg] = func(arg);
      }
      return memory[arg];
    };
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
