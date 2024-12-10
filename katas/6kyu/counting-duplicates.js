function duplicateCount(text) {
    const letters = text.toLowerCase().split('');
    let counter = 0;
    let memo = {};

    if (!letters.length) return 0;

    letters.forEach(letter => {
        if (memo[letter] && memo[letter] === 1) {
            ++counter;
            memo[letter] = 2;
        }
        if (!memo[letter]) memo[letter] = 1;
    });

    return counter;
}
