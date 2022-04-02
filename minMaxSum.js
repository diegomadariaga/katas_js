/**
 * 
 * @param {Array} arr  
 */
function minMaxSum(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const min = sorted[0]+sorted[1]+sorted[2]+sorted[3];
    const reverse = sorted.reverse();
    const max = reverse[0]+reverse[1]+reverse[2]+reverse[3];
    console.log(min+" "+max);
}
minMaxSum([1,2,6,4,5]);