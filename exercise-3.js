function cariMedian(arr) {
    var index = Math.round(arr.length/2);
    var hasil = 0;
    var tampung = 0;
    for(var i = 0; i < arr.length; i++) {
        for(var j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                var tukar = arr[i]
                arr[i] = arr[j]
                arr[j] = tukar
            }
        }
    }

    if(arr.length % 2 == 0) {
        tampung += arr[index-1] + arr[index];
        hasil = tampung/2;
    } else {
        hasil += arr[index-1];
    }

    return hasil
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5