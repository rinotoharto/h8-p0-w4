function digitPerkalianMinimum(angka) {
    var tampung = [];
    for(var i = 0; i <= angka; i++) {
        for(var j = 0; j <= angka; j++) {
            if(i * j == angka) {
                tampung.push(i + '' + j)
            }
        }
    }
    var opr = tampung[0].length
    for(var k = 0; k < tampung.length; k++) {
        if(tampung[k].length < opr) {
            opr = tampung[k].length
        }
    }
    
    return opr
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2