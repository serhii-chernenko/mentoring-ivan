function isPangram(string) {
    const abc = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    const letters = new Set(string.replace(/[^a-z]/gi, '').toLowerCase().split(''));
    return abc.size === letters.size ? true : false
}
