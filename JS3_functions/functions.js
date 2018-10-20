//1 task
Hoisting или "поднятие переменных"? Что произойдет при выполнении следующего куска кода?
myname = "global";
function func() {
    console.log(myname);
    var myname = "local";
    console.log(myname);
}
func();

//Answer:   undefined
//          "local"


//2 task
Какие языковые конструкции в javascript создают scope? Что произойдет при выполнении следующего куска кода?
var a = 90100;
function someFunc(){
  if(false){
    var a = 1;
  } else {
    var b = 2;
  }
  console.log(b);     //2
  console.log(a);     //undefined
}
someFunc();

//Answer: only functions create a new scope in JS.

//3 task
Почему вызов a(); происходит успешно, а вызов b(); выдает ошибку?
a(); //ok
b(); //error

var b = function(){             // Function Expression - can not be called before its announcement
 alert( 'function b');
}
function a(){                   // Function Declaration - it is OK, because the interpreter creates the function to execute code
 alert( 'function a' );
}

//4 task
Что выведет в консоль следующий код:
var i = 0;
for (; i< 10; i ++) {
  console.log(i)
}

//Answer: 1 2 3 4 5 6 7 8 9 (in the column)

//5 task (optional)
Напишите функцию подсчета факториала числа, но каждый раз возвращая факториал умножайте его на 2 если число четное.

//Answer:
//Вариант 1, если учитывать, что факториал - это произведение.
var N = prompt('Put the number')
function factorial(N){
  var res=1;
        for (var i=0; i<N; i++) {
            res=res*(i+1);
	        	if (res%2==0){
	        	res=2*res}}
	   console.log(res)}
factorial(N);

//Вариант 2, если проверять на четность все-таки множители, а не факториал.
var N = prompt('Put the number')
console.time("Runtime");
function factorial(N){
var res=1;
if (N==1){console.log(res)}
else{
    for(var i=0; i<N; i++) {
        res=res*(i+1);
	      if (i%2==0){
	      res=2*res}}
	      console.log(res)}
}
factorial(N);
console.timeEnd("Runtime");			//You'll see here answer to task6.

//7 task 
Напишите скрипт, который генерирует случайную строку. 
В строке должны быть маленькие и большие латинские буквы, цифры и подчеркивание.

//Answer:
function generat(n) {
        var newStr = '';
        var area = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_';
        for (i = 0; i < n; ++i) {
            newStr = newStr + area[Math.floor(Math.random()*area.length)];
    }return newStr;
}
 console.log(generat(8));

//8task
Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром.
Пример: union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2, 3, 101, 10].

//Answer:
function union(...manyAr) {
        var newArr = [];
        for (let i in manyAr) {
            newArr = newArr.concat(manyAr[i]);
        }
      var uniqueArr = Array.from(new Set(newArr))
      console.log(uniqueArr)
}
union([1, 2, 3, 4], [2, 3, 4], [1, 5, 7, 1, 1, 3])

//9task 
Реализуйте функцию flatten, которая в случае, если массив обладает уровнями вложенности, 
приведёт его к элементарному виду (вложенность может быть любой глубины).

//Answer:
function flatten(manyAr) {
        var res = [];
        if (Array.isArray(manyAr)) {
            for (var arr in manyAr) {
                res = res.concat(flatten(manyAr[arr]))}
        } else {
        res.push(manyAr)}
        return(res)}
console.log(flatten([1,[2],[3,[[[4]]]]]))

//10task 
Реализуйте функцию unique, которая будет удалять дубли из массива.

//Answer:
var myPets = ['dog','cat','pig','dog','cat','pig','elefant'];
function unique(arr) {
  var obj = {};
  for (var i=0; i<arr.length; i++){
    var str = arr[i];
    obj[str] = true; }
  return Object.keys(obj);}
console.log(unique(myPets))
