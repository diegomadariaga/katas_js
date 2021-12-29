//https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript
function nextSmaller(n) {
    let str = n.toString();
    let array = str.split("");
    let firstDigit = array[0];
    array.sort();
    for (let i = n - 1; i >= 0; i--) {
        let temp = i.toString();
        let tempArray = temp.split("");
        //create a new array with the sorted values
        let sortedArray = tempArray.sort();
        //if the sorted array is the same as the original array, then return the number
        if (array.join("") === sortedArray.join("")) {
            return i;
        }
        if (array.length > tempArray.length) {
            return -1;
        }
    }
    return -1;
}

let result = nextSmaller(211245879999999999999975820124442);

console.log(result);

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017

/* function nextSmaller(n) {
    let str = n.toString();
    let array = str.split("");
    array.sort();

    for (let i = n - 1; i >= 0; i--) {
        let temp = i.toString();
        let tempArray = temp.split("");
        //create a new array with the sorted values
        let sortedArray = tempArray.sort();
        //if the sorted array is the same as the original array, then return the number
        if (array.join("") === sortedArray.join("")) {
            return i;
        }
    }
    return -1;
} */
