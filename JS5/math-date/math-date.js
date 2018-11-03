/*1 task
Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.*/

var c = a%b
console.log(c)

/*2 task
Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, 
иначе выведите 'Делится с остатком' и остаток от деления.*/

var a = 10
var b = 5
if(a%b == 0){
  console.log('Divisible.', 'result =', a/b)
}
else{
  console.log('Divided with the remainder.', 'remainder =', a%b)
}

/*3 task
Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.*/

var a = -10
var b = -5
console.log(Math.abs(a-b))

/*4 task
Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.*/

console.log(Math.sqrt(379).toFixed(2))
console.log(Math.sqrt(379).toFixed(1))
console.log(Math.sqrt(379).toFixed(0)) or console.log(Math.round(Math.sqrt(379)))

/*5 task
Выведите на экран случайное число от 1 до 100.*/

console.log(Math.round(Math.random()*100))

/*6 task
Создайте функцию которая будет находить корни квадратного уровнения: x^2 + 4x + 9 = 0;*/

var a = 1
var b = 4
var  c = 9
function Discr(a, b, c){
  var d = (Math.pow(b,2)) - 4*a*c;
   console.log(d)
  if (d<0){
    console.log('Equation has no roots')
  }
  else if(d==0){
    var x0 = -b / 2*a;
    console.log('Equation has one root:', x0);
  }
  else{
    var x1 = ((-b + Math.sqrt(d)) / (2*a));        
    var x2 = ((-b - Math.sqrt(d)) / (2*a));
    console.log('Equation has two roots:', x1, x2);
  }
}
console.log(Discr(a, b, c))

/*7 task
Напишите скрипт, который проверяет, является ли данное число простым 
(простое число - это то, которое делится только на 1 и на само себя).*/

var a = 12
function simple_Num(a){
 for (var i=2; i<=a-1; i++){
  if (a%i==0) {
    console.log('It is not a prime number.')
    break}
}
  if (a>0 & a%1==0 & a%a==0 & a%2!==0) {
    console.log('It is a prime number.')}
}
simple_Num(a)


/*8 task
Напишите скрипт, который найдет все простые числа в заданном промежутке. 
Проверьте его работу на промежутке от 1 до 1000.*/

arr_Prime = []
search_Prime:
  for (var i = 2; i <= 1000; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue search_Prime;
    }
  arr_Prime.push(i)
  }
console.log('Prime numbers:',arr_Prime); 

/*9 task
Заполните массив 10-ю случайными числами. (Подсказка: нужно воспользоваться циклами for или while).*/

arr_RandomNumbers = []
  while (arr_RandomNumbers.length < 10) {
    arr_RandomNumbers.push(Math.round(Math.random()*100))
  }
console.log(arr_RandomNumbers); 

/*10 task
Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.*/

var now = new Date();
var yy = now.getFullYear();
var mm = now.getMonth() + 1;
var dd = now.getDate();
console.log(yy + '-' + mm + '-' + dd);

/*11 task
Выведите на экран текущий месяц словом, по-русски.*/

var date = new Date();
var month = date.getMonth();
var arr=['Януарь','Фебруарь','Мэрц','Эйприл','Мэй','Джун','Джулай','Оугаст','Септембер','Октобер','Новембер','Десембер'];
console.log(arr[month]+ ' на улице, господа')

/*12 task
Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. 
Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, 
которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/

Data = new Date();
function addNull(Data){
  var yy = Data.getFullYear();
  var mm = Data.getMonth();
  var dd = Data.getDate();
  var hour = Data.getHours();
  var min = Data.getMinutes();
  var sec = Data.getSeconds();
  if (dd<10){
    dd = '0' + dd}
   if (mm<10){
    mm = '0' + mm}
  console.log(hour+':'+min+':'+sec+' '+dd+'.'+mm+'.'+yy)
}
addNull(Data)

/*13 task
Узнайте, какой был день 7-го января 2015 года.*/

var date = new Date(2015, 0, 7); 
console.log(date.toLocaleString('ua', {weekday: 'long'}));

/*14 task
Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.*/

var date = new Date()
var min = Date.parse(date) /60000
console.log(min);
//or
var min = Date.now()/60000
console.log(min);


/*15 task
Напишите метод, которая преобразует секунды в дни, часы, минуты. 
Например: 10..0 секунд это 3 дня, 23 часа, 46 минут, 25 секунд.*/

function sec_to_date(sec){
  var dd = Math.floor(sec/86400);
  sec = sec%86400;
  var hour = Math.floor(sec/3600);
  sec = sec%3600;
  var min = Math.floor(sec/60);
  sec = sec%60;
  console.log(dd +' day(s) '+ hour + ' hour(s) '+ min + ' min ' + sec + ' sec')
}
sec_to_date(199999)

