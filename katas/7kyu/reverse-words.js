function reverseWords(str) {
    const words = str.split(' ');
    const wordsReverse = words.map(word => word.split('').reverse().join(''));

    return wordsReverse.join(' ');
}
