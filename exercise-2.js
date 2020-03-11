function fpb1(angka1, angka2) {
    var num1 = [];
    var num2 = [];
    var tampung = [];
    var fpb = ''

    for(var i = 0; i < angka1; i++) {
       if(angka1 % i == 0) {
           num1.push(i)
       }
    }

    for(var j = 0; j < angka2; j++) {
        if(angka2 % j == 0) {
            num2.push(j)
        }
    }
  
    for(var k = 0; k < num1.length; k++) {
        for(var l = 0; l < num2.length; l++) {
            if(num1[k] == num2[l]) {
                tampung.push(num1[k])
            }
        }
    }
    fpb += tampung[tampung.length-1]
    console.log(tampung)

    return fpb
  }

  function fpb(angka1, angka2) {
    for(var l = angka1; l >= 1; l--) {
        if(angka1 % l == 0 && angka2 % l == 0){
            return l
        }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1