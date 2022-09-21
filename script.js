const button = document.querySelector('.btn')
const result = document.querySelector('.result')

button.addEventListener('click', palindrome)

// madam
function palindrome() {
    const word = document.querySelector('.input-text').value
    let length = word.length
    let start = word.substring(0, Math.floor(length/2)).toLowerCase()
    let end = word.substring(length - Math.floor(length/2)).toLowerCase()
    // [...end].reverse().join('') also splits it just different way of splitting
    let flip = end.split('').reverse().join('')
    if (start === flip){
        result.innerHTML = `${word.toUpperCase()} is a Palindrome 😄`
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a Palindrome 🙁`
    }
}