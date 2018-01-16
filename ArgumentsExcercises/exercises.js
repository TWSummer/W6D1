function sum() {
  const args = Array.from(arguments);
  return args.reduce((acc, el) => acc + el);
}

// console.log(sum(2,3,4,5));

function restSum(...args) {
  return args.reduce((acc, el) => acc + el);
}

// console.log(restSum(1,3,5,7));

Function.prototype.myBind = function(subject) {
  let bindArgs = Array.from(arguments);
  bindArgs = bindArgs.slice(1);
  const that  = this;
  return function() {
    const callArgs = Array.from(arguments);
    return that.apply(subject, bindArgs.concat(callArgs));
  };
};

Function.prototype.myRestBind = function(subject, ...bindArgs) {
  const that = this;
  return function(...callArgs) {
    return that.apply(subject, bindArgs.concat(callArgs));
  };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// markov.says.myRestBind(breakfast, "meow", "Kush")();
// markov.says.myRestBind(breakfast)("meow", "a tree");
// markov.says.myRestBind(breakfast, "meow")("Markov");
// const notMarkovSays = markov.says.myRestBind(breakfast);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
  const args = [];
  const _curriedSum = function(num) {
    args.push(num);
    if (args.length === numArgs) {
      return sum(...args);
    }
    return _curriedSum;
  };
  return _curriedSum;
}

// const sumThree = curriedSum(3);
// sumThree(2);
// console.log(sumThree(4)(3));
// console.log(curriedSum(4)(2)(4)(6)(8));

Function.prototype.curry = function(numArgs) {
  const subject = this;
  const args = [];
  const _curryFunc = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return subject.apply(subject, args);
    }
    return _curryFunc;
  };
  return _curryFunc;
};

Function.prototype.restCurry = function(numArgs) {
  const args = [];
  const _curryFunc = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    }
    return _curryFunc;
  };
  return _curryFunc;
};

const sumThree = sum.curry(3);
console.log(sumThree(1)(3)(4));
const sumFour = sum.restCurry(4);
console.log(sumFour(1)(3)(4)(7));
