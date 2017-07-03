var fs = require('fs');
var clone = require ('clone');
var readlineSync = require('readline-sync');
var jssort = require('js-sorting-algorithms');
var stairsNumb = readlineSync.question('Ввести количество ступенек: ');


// read data from file
console.log("Исходный масив");
var buffer = fs.readFileSync("data.txt"); // read 2 buffer
var data  = buffer.toString('utf8'); // buffer 2 string 
//console.log(data);
// convert data from string to integer
var data2str_arr = Array.from(data.split('\n')); // from string 2 array of strings
// now we convert array of strings 2 array of integers
var arr = data2str_arr.map(function (x) {  
    return parseInt(x, 10); 
});
console.log(arr);
// coping arrays
var arr_heap = clone(arr);
var arr_merge = clone(arr);
// here magic begins
console.log("Сортируем масив кучей");
jssort.heapSort(arr_heap);
console.log (arr_heap);
console.log("---------------------");
console.log("Сортируем масив слиянием");
jssort.mergeSort(arr_merge);
console.log (arr_merge);



