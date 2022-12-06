/**
 * https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 * @param {string} url 
 * @returns {string} domain name
 */
function extractDomainName(url) {
    //your code here
    //falta los casos en donde no tiene www.
    return url.split('//')[1].split('.')[1];
}
module.exports = {extractDomainName};