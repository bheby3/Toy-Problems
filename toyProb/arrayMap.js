function spinWords(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}
function spinWordss(words) {
    return words.split(' ').map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ');
}

console.log(spinWordss("whatever in the universe is"));

function spinner(str) {
    return str.split(' ').map(word => word.length < 4 ? (word + ": < 4") : word.split('').reverse('').join('')).join(' ');
}