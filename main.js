const Phrase = require("harbinger-complex-palindrome-detector");

function palindromeTester() {
    const userInput = prompt("Enter a string to check palindromicity: ", "abba");
    let phrase = new Phrase(userInput);

    if(!!userInput  && phrase.isPalindrome() === true) {
        alert(`"${phrase.content}" is a palindrome!!`);    
    } else {
        alert(`"${phrase.content}" is not a palindrome!!`)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector("#palindromeTester");
    button.addEventListener("click", function () {
        palindromeTester();
    });
});
