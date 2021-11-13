const Phrase = require("harbinger-complex-palindrome-detector");

function palindromeTester(event) {
    event.preventDefault();
    
    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if(phrase.isPalindrome() === true) {
        palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome`;    
    } else {
        palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome!!`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit", function () {
        palindromeTester(event);
    });
});
