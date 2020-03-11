function urutkanAbjad(str) {
    var tampung = []
    var hasil = ''
    for(var a = 0; a < str.length; a++) {
        tampung.push(str[a])
    }
    for(var i = 0; i < tampung.length; i++) {
        for(var j = i+1; j < tampung.length; j++) {
            if(tampung[i] > tampung[j]) {
                var tukar = tampung[i]
                tampung[i] = tampung[j]
                tampung[j] = tukar
            }
        }
        hasil += tampung[i]
    }
      
       
    return hasil
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'