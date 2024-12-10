function longest(s1, s2) {
    const s1Set = new Set(s1.split(''));
    const s2Set = new Set(s2.split(''));
    const uniqSet = new Set([...s1Set, ...s2Set]);
    const sortedArray = [...uniqSet].sort();
    const resultStr = sortedArray.join('');
    return resultStr;
}
