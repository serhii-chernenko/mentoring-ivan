function duplicateCount(text) {
    const letters = text.toLowerCase().split('');
    const dubbles = letters.filter((letter, index, array) => array.indexOf(letter) !== index);
    const uniqDubbles = new Set(dubbles);

    return uniqDubbles.size;
}
