function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    fib[2] = 1;
    for (let i = 3; i < n+1; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }
}
fibonacci(50);
