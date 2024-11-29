function solution(str, ending) {
    if (ending === '') return true;

    const endingLength = ending.length;
    const strEnd = str.slice(-endingLength);

    if (strEnd === ending) return true;

    return false;
}
