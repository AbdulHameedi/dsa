function fac(n){
    let facNum = 1
    for(let i=1;i<=n;i++){
      facNum *= i 
    }
    return facNum
  }
  console.log(fac(4))