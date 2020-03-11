function checkAB(num) {
    var deretA = [];
    var deretB = 0;
    var hasil = ''; 
    
    for(var i = 0; i < num.length; i++) {
        if(num[i] == 'a') {
            deretA.push(i) 
        } else if(num[i] == 'b') {
            deretB += i
        }
    }
 
    for(var j = 0; j < deretA.length; j++) {
        if(deretA[j] > deretB) {
            if(deretA[j] - deretB == 4) {
                hasil += true
            } 
        } else if(deretB > deretA[j]) {
            if(deretB - deretA[j] == 4) {
                hasil += true
            }
        }
    }

    if(hasil.length == 0) {
        return false
    } else {
        return true
    }

}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false