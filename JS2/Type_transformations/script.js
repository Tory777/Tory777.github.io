1 задание Что будет в результате следующих операций:

var one = "1" + 2 + 3;             //'123' - because after "1" everything is converted to string 
var two = 4 + false + "5" + 6;     //'456' - false = 0 => 4 + 0 + '5' + 6 = '456' 
var three = 7 + true + 6 + "8";    //'148' - 7 + 1(true) + 6 = 14; 14 + '8' = '148'
var four = false + true;           //'1' - 0 + 1 = 1



2 задание Каким будет результат следующих выражений:

var t = 0; var h = 8;

t && h && console.log(9); // false



3 задание Каким будет результат следующих выражений:

var pr = 9; var g = 0;

(g || pr) && console.log(9); // 9



4 задание Каким будет результат следующих выражений:

var i = '1'; var j = 8; var m = 7;

(j - m) == i;           // true
(j - m) === i; ?        // false

(m - 6) && j && console.log('Hi'); //'Hi'



5 задание Каким будет результат следующих выражений:

var obj = { h: 0, i: 'hello' }

var phrase = obj.i; delete obj.i;

console.log(phrase);      // 'hello'



6 задание Каким будет результат следующих выражений:

var obj = { h: [1,2,3], i: { y: 9 } }

var num = obj.i.y;

obj.i.y = obj.i.y + 1;

console.log(num, obj.i.y);      // 9 10



7 задание Каким будет результат следующих выражений:

var obj = { h: [1,2,3], i: { y: 9 } }

var arr = obj.h;    //arr = [1,2,3]

obj.h[1] = 9;       //obj = {h: [1,9,3], i: { y: 9 } } => arr = [1,9,3]

console.log(arr[1], obj.h[1]);    // 9  9 
