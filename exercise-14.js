function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];
    
    for(var i = 0; i < arrPenumpang.length; i++) {
        hasil.push({
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
        })
        var total = 0;
        for(var j = 0; j < rute.length; j++) {
            if(arrPenumpang[i][2] == rute[j]) {
                total += j*2000
            } else if(arrPenumpang[i][1] == rute[j]) {
                total -= j*2000
            }
        }
        if(hasil[i].bayar == undefined) {
            hasil[i].bayar = total
        }
    }
    
    return hasil
}
  

  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]