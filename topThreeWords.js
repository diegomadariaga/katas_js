function topThreeWords(text) {
    let words = text.split(/[^a-zA-Z0-9_]+/);
    let map = new Map();
    for (let word of words) {
        word = word.toLowerCase();
        if (word.length === 0) {
            return -1;
        }
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }
    console.log(map);
}

topThreeWords("a a a  b  c c  d d d d  e e e e e");
topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e");
