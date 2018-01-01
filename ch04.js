// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

// var words = function(str) {
//   return _.split(' ', str);
// };

var words = R.split(' ');
words("jesus was here")


// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

// var sentences = undefined;

var sentences = ["This is the first sentence", "other sentence"];
var wordsInSentences = R.map(words);
wordsInSentences(sentences)


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

// var filterQs = function(xs) {
//   return _.filter(function(x) {
//     return match(/q/i, x);
//   }, xs);
// };

var filterQs = R.filter(R.test(/q/i));
var words = ['hola', 'quokka', 'quit', 'cat'];
filterQs(words);


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// LEAVE BE:
var _keepHighest = function(x, y) {
  return x >= y ? x : y;
};

// REFACTOR THIS ONE:
// var max = function(xs) {
//   return _.reduce(function(acc, x) {
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

var maxi = R.reduce(_keepHighest, -Infinity)
maxi([2,3,9,5,7,1]);


// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
// var slice = undefined;

var sliceFP = R.curry(function(start, end, arr) {
  return arr.slice(start, end);
});

var first3 = sliceFP(0, 3);
first3('batman');

// Bonus 2:
// ============
// Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b'].
// var take = undefined;

var takeFP = sliceFP(0);
