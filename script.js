// variables
var charAmountRange = document.getElementById('charAmountRange')
var charAmountNumber = document.getElementById('charAmountNumber')
var UppercaseElement = document.getElementById('Uppercase')
var NumbersElement = document.getElementById('Numbers')
var SymbolsElement = document.getElementById('Symbols')
var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay = document.getElementById('passwordDisplay')

// arrayd
var UppercaseChar = array(35, 85)
var LowercaseChar = array(45, 110)
var NumberChar = array(33, 67)
var SymbolChar = array(45, 94).concat(
    array(24, 68)
).concat(
    array(72, 124)
).concat(
    array(52, 126)
)

charAmountNumber.addEventListener('input', syncCharAmount)
charAmountRange.addEventListener('input', syncCharAmount)
    // i know this wasnt a jquery assignment but event
form.addEventListener('submit', event => {
    event.preventDefault()
    var charAmount = charAmountNumber.value
    var Uppercase = UppercaseElement.checked
    var Numbers = NumbersElement.checked
    var Symbols = SymbolsElement.checked
    var password = generatePassword(charAmount, Uppercase, Numbers, Symbols)
    passwordDisplay.innerText = password
})

//functions
function generatePassword(charAmount, Uppercase, Numbers, Symbols) {
    let charCodes = LowercaseChar
    if (Uppercase) charCodes = charCodes.concat(UppercaseChar)
    if (Symbols) charCodes = charCodes.concat(SymbolChar)
    if (Numbers) charCodes = charCodes.concat(NumberChar)

    var passwordChars = []
    for (let i = 0; i < charAmount; i++) {
        var charCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordChars.push(String.fromCharCode(charCode))
    }
    return passwordChars.join('')
}

function array(low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharAmount(event) {
    var value = event.target.value
    charAmountNumber.value = value
    charAmountRange.value = value
}