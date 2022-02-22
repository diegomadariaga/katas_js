//https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
function topThreeWords(text) {
    text = text.replaceAll(",", "").replaceAll(".", "").replaceAll("!", "").replaceAll("?", "").replaceAll("\"", "").replaceAll(";", "").replaceAll(":", "").replaceAll("/", "");
    console.log("texto",text);
    let words = text.split(/[^a-zA-Z0-9_]+/);
    words = words.map(word => word.toLowerCase().replace(/[^a-z]/g, ""));
    let map = new Map();
    for (let word of words) {
        if (word.length === 0) {
            return[];
        }
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }
    if (map.size === 0) {
        return [];
    }
    //sort map by value
    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    
    let result = [...sortedMap.keys()].slice(0, 3);
    
    return result;
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
console.log(topThreeWords("a a c b b"));
console.log(topThreeWords("  //wont won't won't "));
console.log(topThreeWords("  , e   .. "));

