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
          "local"


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

//

4 task
Что выведет в консоль следующий код:
var i = 0;

for (; i< 10; i ++) {
  console.log(i)
}
5 task (optional)
Напишите функцию подсчета факториала числа, но каждый раз возвращая факториал умножайте его на 2 если число четное.

6 task
Подсчитайте время выполнения выше написанной вами функции c помощью объекта console.

7 task
Напишите скрипт, который генерирует случайную строку. В строке должны быть маленькие и большие латинские буквы, цифры и подчеркивание.

8 task
Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром.

Пример: union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2, 3, 101, 10].

9 task
Реализуйте функцию flatten, которая в случае, если массив обладает уровнями вложенности, приведёт его к элементарному виду (вложенность может быть любой глубины).

Пример: flatten([1, [2], [3, [[[4]]]]]) вернёт [1, 2, 3, 4].

10 task
Реализуйте функцию unique, которая будет удалять дубли из массива.
