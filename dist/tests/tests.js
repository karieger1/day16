/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------
var expect = chai.expect;

describe("max", function(){
    it("should compare two numbers and return largest number", function(){
        expect(max(1, 2)).to.equal(2)
    it('should not accept non-string input', function() {
        expect(function() {max([1,2])}).to.throw("You can only pass numbers into this function.");
})
function max(){
    "use strict";
    //...
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
var expect = chai.expect;



describe("maxOfThree", function() {

    it("should compare three numbers and return the largest number", function() {
        expect(maxOfThree(1, 2, 3)).to.equal(3);
    }
    it('should not accept non-string input', function() {
        expect(function() {maxOfThree([1,2,3])}).to.throw("You can only pass numbers into this function.");
    it('should exist', function() {
        expect(rovarsprocket).to.not.be.undefined;
    });   
}

function maxOfThree(){
    "use strict";
    //...
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
var expect = chai.expect;

describe("isVowel", function() {
    it("should look over a given string for vowels")
}

it('should not accept non-string input', function() {
        expect(function() {isVowel([1,2,3])}).to.throw('You can only pass a string into this function.');

function isVowel(char){
    "use strict";
    //...
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
var expect = chai.expect ;

describe("rovarspraket", function() {
     it('should exist', function() {
        expect(rovarsprocket).to.not.be.undefined;
    });
    it('should not accept non-string input', function() {
        expect(function() {rovarsprocket([1,2,3])}).to.throw('You can only pass a string into this function.');
    });
    it('should accept string input', function() {
        expect(function() {rovarsprocket('test')}).to.not.throw('You can only pass a string into this function.');
    });
    it("should this with tothohisos", function() {
        expect(rovarspraket("this")).to.equal(tothohisos)
    }
    it("should not accept strings with non-alphabetic characters", fucntion() {
        expect(rovarspraket("this")).to.throw("You can only pass alphabetic string.")
    }
     it("should not accept strings with non-alphabetic characters", fucntion() {
        expect(rovarspraket("sleepy")).to.throw("You can only pass alphabetic string.")
    }
});

function rovarspraket(string){
   if(typeof string !== "string")
    throw("You can only pass a string into this function.";)
}

var vowels ="aeiouAEIOU";
var resultString = " ";

for(var i=0; i<string.length; i++) {
    var currentCharacter = string.charAt(i);
    if(!validator.isALpha(currentCharacter)) {
        throw "You can only passs alphabetic string into this function.";
    }
    if (vowels.indexOf())
    }
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
var expect = chai.expect ;

describe("sum", function() {
    it("should find the sum of an array of numbers", function(){

    }
    it('should not accept non-array input', function() {
    expect('sum').to.be.a('array');
}

function sum(){
    "use strict";
    //...
}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}