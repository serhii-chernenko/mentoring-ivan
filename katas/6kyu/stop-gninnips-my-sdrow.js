function spinWords(string){
    const strArr = string.split(' ');
    const strArrReverse = strArr.map(e => {
      if (e.length < 5) return e;
      return [...e].reverse().join('');
    });
    return strArrReverse.join(' ');
  }
  