function fon(arr) {
    const result = "(" + arr.slice(0, 3).join("") + ") " + arr.slice(3, 6).join("") + "-" + arr.slice(6, 10).join("");
    return result;
}
console.log(fon([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
