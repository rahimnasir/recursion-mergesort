function fibs(n){
    const t1 = performance.now()
    
    let fibonacci = [0,1]
    for (i=2;i<n;i++){
            fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
    }
    console.log(fibonacci)
    const t0 = performance.now()
    console.log(t0-t1)
}

function fibsRec(n,fibonacci = [0,1]){
    if (n == 1){
            return fibonacci
    }
    const nextFibonacci = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    fibonacci.push(nextFibonacci)
    return fibsRec(n-1,fibonacci)
}
