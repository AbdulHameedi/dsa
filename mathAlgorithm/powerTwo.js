function isPower(n){
    for(let i=0;i<n;i++){
      if(2**i == n){
        return true
      }
    }
    return false
  }
  
  console.log(isPower(1))
  console.log(isPower(2))
  console.log(isPower(5))
  
  // ALTERNATIVE SOLN
  function isPower(n) {
    if (n < 1) {
      return false;
    }
    while (n > 1) {
      if (n % 2 !== 0) {
        return false;
      }
      return true
    }
  }
  console.log(isPower(22));