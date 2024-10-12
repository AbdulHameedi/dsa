let fib = [0,1]
function fibFunc(n){
    for(let i=2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibFunc(4))