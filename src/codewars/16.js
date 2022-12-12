function isPalindrome(x) {
    let y = x.split('').reverse().join('')
    return x.toLowerCase() === y.toLowerCase()
}