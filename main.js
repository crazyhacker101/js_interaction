const Phrase = require("harbinger-complex-palindrome-detector");

function palindromeTester() {
    const userInput = prompt("Enter a string to check palindromicity: ", "abba");
    
    let phrase = new Phrase(userInput);
    let palindromeResult = document.querySelector("#palindromeResult");

    if(!!userInput  && phrase.isPalindrome() === true) {
        palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome`;    
    } else {
        palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome!!`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("click", function () {
        palindromeTester();
    });
});
