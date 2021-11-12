(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Phrase = require("harbinger-complex-palindrome-detector");

function palindromeTester() {
    const userInput = prompt("Enter a string to check palindromicity: ", "abba");
    let phrase = new Phrase(userInput);

    if(!!userInput  && phrase.isPalindrome() === true) {
        alert(`"${phrase.content}" is a slick!!`);    
    } else {
        alert(`"${phrase.content}" is not a palindrome!!`)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit", function () {
        palindromeTester();
    });
});

},{"harbinger-complex-palindrome-detector":2}],2:[function(require,module,exports){
module.exports = Phrase;

String.prototype.reverse = function () {
    return Array.from(this).reverse().join('');
}

function Phrase(content) {

    this.content = content;

    this.getLowerCase = function (inputString) {
        return inputString.toLowerCase();
    }

    this.processedContent = function () {
        return this.getLowerCase(this.getLetters()); 
    }

    this.getLetters = function () {
        return Array.from(this.content).filter(character => {
            if(character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
                return character;
            }
        }).join('');
    }

    this.isPalindrome = function () {
        let finalString = this.processedContent();
        if(!!finalString) {
            return finalString === finalString.reverse();
        } else {
            return false;
        }   
    }
}

},{}]},{},[1]);
