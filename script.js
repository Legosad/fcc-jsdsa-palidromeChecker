const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const filterString = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

const checkPalindrome = () => {
    if (textInput.value === "") {
        alert("Please input a value");
    }
    const cleanedStr = filterString(textInput.value)
    let isPalindrome = cleanedStr.split("").reverse().join("") === cleanedStr ? true : false;

    result.innerText = `${textInput.value} is ${isPalindrome ? " " : " not "} a palindrome`;
    result.style.display = "block";
}
checkBtn.addEventListener("click", checkPalindrome)