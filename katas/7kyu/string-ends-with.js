function solution(str, ending) {
    if (!ending) return true;

    const endingLength = ending.length;
    const strEnd = str.slice(-endingLength);

    return strEnd === ending;
}
