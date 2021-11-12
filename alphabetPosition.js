// @ts-check
// @type {Array<string>}
function alphabetPosition(text) {
    return text.toLowerCase().split('').map(char => char.charCodeAt(0) - 96).filter(char => char > 0 && char < 27).join(' ');
}

let res = alphabetPosition("The sunset sets at twelve o' clock.");
console.log(res);