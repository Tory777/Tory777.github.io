/*1 задание +
Из массива arr выведите строку которая будет равна "Мама мыла раму" используя встроенные методы массива 
(если есть лишние елементы в массиве их нужно удалить!):  */

var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];

arr.forEach(function(item, i, arr) {
  if (typeof (item) !== "string") {
    arr.splice(i, 1);
    }
});
console.log(arr.reverse().join(''));

/*2 задание +
Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того 
является ли строка палиндромом или нет. */

function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join(''); 
    if (strReverse == str) {
      return 'yes';
    } else {
      return 'no';
    }
  }
  test = isPalindrome('abcdedcba');
  test2 = isPalindrome('balda');
  console.log(test);
  console.log(test2);
  document.write('isPalindrome result: ' + 'str - ' + test + ' str2 - ' + test2);


/*3 задание  +
Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
воз - зов, киборг - гробик, корсет - костер - сектор,

Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'*/ 

var myarr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
function anClean(arr){
  var objReform = {};
  for (var i = 0; i< arr.length; i++){
      var reform = arr[i].toLowerCase().split('').sort().join('');
      objReform[reform] = arr[i];
      console.log(objReform)}
  var result = [];
  for (var key in objReform) result.push(objReform[key]);{
    return result;}
}
console.log(anClean(myarr));


/*4 задание +
Создайте программу которая соеденит массив в строку, поменяет местами буквы в словах и порядок следования слов в массиве:
var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ]; */

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
function reversArr(arr) {
  arr = arr.join(' ')
  arr = arr.split('').reverse().join('');
  console.log(arr);
}
reversArr(arr)

/*5 задание  + 
Найти сумму целых чисел от 1 до 100
Найти сумму четных чисел от 0 до 100.*/

var n = 100
function sum(num) {
  var res = 0;
  for (var i = 1; i <= num; i++) {
    res += i;
  }
  return res;
}
console.log(sum(n))

function sumEven(num) {
  var res = 0;
  for (var i = 0; i <= num; i++) {
    if( i%2 == 0){
      res += i;
    }
  }
  return res;
}
console.log(sumEven(n))

/*6 задание  +
Напишите функцию callMe которая будет принимать 3 аругумента, это будут цыфры, 
потом она будет суммировать их и выводить на екран результат их суммы!
Если в нее передели не числа то она должна выводить сообщение об ошибке в консоль и возвращать null; 
(вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") ) */

var num1 = 10  
var num2 = 'df'
var num3 = 333
function callMe(a,b,c){
    if(typeof a == 'number' & typeof b == 'number' & typeof c == 'number'){
      var res = a + b + c
      return res;
    }
   else {console.error('Sorry, some items does not seem to be a number');
       return false}}
console.log(callMe(num1, num2, num3))


/*7 задание   +  
Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом. 
Она должна возвращать массив соедененный через запятые и отсортированный по алфавиту (Array.join(','));  */

var myarr = ['Вода', 'огонь', 'Воздух', 'земля', 'стихии', 'отсортировать', 'по алфавиту'];
function anClean(arr){
  var result = [];
  for (var i = 0; i< arr.length; i++){
    result.push(arr[i].toLowerCase());
  }
    result.sort();
    return result;}
console.log(anClean(myarr));

/*8 задание  + 
Дан массив объектов:

var arr = [
   {name: "L1", age: 45},
   {name: "L1", age: 20},
   {name: "L1", age: 10},
   {name: "L1", age: 78},
   {name: "L1", age: 41},
   {name: "L1", age: 10}
];
Отсортируйте массив по полю age  */

var arr = [
   {name: "L1", age: 45},
   {name: "L2", age: 20},
   {name: "L3", age: 10},
   {name: "L4", age: 78},
   {name: "L5", age: 41},
   {name: "L6", age: 10}
];

function compareAge(man1, man2) {
  return man1.age - man2.age;
}
arr.sort(compareAge);
for(var i = 0; i < arr.length; i++) {
  console.log(arr[i].name, arr[i].age);
}

/* 9 задание
Через prompt узнайте у пользователя его имя и возраст, и запишите в отсортированный массив с 8 задания в правильную позицию, 
чтобы все элементы в массиве остались отсортированные по полю age
Если такой пользователь уже существует в массиве верните пользователю сообщение: "Такой пользователь уже существует"  */

/*10 task   +
Дан массив с числами. Подсчитайте количество цифр 3 в данном массиве.
Пример: [13, 35, 3, 443] - в массиве 4 цифры 3.  */

arr  = [13, 35, 3, 443];
var counter = 0;
str = arr.join('')
 for (var i = 0; i< str.length; i++){
  if (str[i]==3){
    counter++
  }
}
console.log(counter)

/*11 task   + 
Дан массив ['1', '2', '3', '4', '5', '6']. Сделайте из него строку '16-25-34'. Массив, конечно же, может быть любым.  */

arr  =  ['1', '2', '3', '4', '5', '6'] 
str = arr.join('')
console.log(str)
 var newStr = ''
 var myArr = []
 var j = str.length;
 for (var i = 0; i< str.length/2; i++){
    myArr.push(str.slice(i,i+1)+str.slice(str.length-i-1,str.length-i));
    newStr = myArr.join('-')
}
console.log(newStr)

/*12 task
Даны два массива, к примеру
[1,2,3] 
[4,5,6]
Создайте новый массив, заполненный суммами соответствующих элементов, то есть [1+4, 2+5, 3+6] = [5, 7, 9].
Скрипт должен работать для любых массивов, даже если их длина не одинакова (подумайте, что делать в этом случае). */

/*13 task  no work
Дан массив. Напишите функцию, которая будет удалять элемент из массива по его тексту.
Пример: arr = [1,2,3,4,3,3]. Удалим все элементы с содержимым 3: func(arr, 3).  */

arr  = [13, 35, 12, 3, 443, 55];
 for (var i = 0; i< arr.length; i++){
   for (var j = 0; j< arr[i].length; i++){
           if (arr[i][j]==3){
           console.log(arr[i][j])
           arr.splice(i)}} 
}
console.log(arr)


/*14 task
Реализуйте функцию intersection, вернёт массив из элементов, встречающихся в каждом из переданных массивов.
Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2].*/

15 task
Дан массив с числами, к примеру [2, 3, 1, 4]. Сделайте из него массив [2, 2, 3, 3, 3, 1, 4, 4, 4, 4]. В массиве могут быть только целые положительные числа.

16 task
Реализуйте функцию, которая будет дополнять массив заданными элементами до заданного размера. Пример: [1,2,3] дополним нулями до размера 6 - [1,2,3,0,0,0].

17 task
Дан массив с числами. Не используя цикл, выведите:

Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы).
Первые 3 отрицательных числа в массиве (по порядку следования).
