function angkaPrima(angka) {
    var strNum = String(angka);
    var hasil ;

    for(var i = 2; i < strNum; i++) {
        if(strNum % i == 0) {
            hasil = false
            break;
        } else {
            hasil = true
        }
    }

    return hasil
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
