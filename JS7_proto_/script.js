//task1
/*При выполнении этого кода вызов rabbit.eat() запишет в объект свойство full.
Вопрос — в какой объект: в rabbit или animal?*/
var animal = { };
var rabbit = { };

rabbit.__proto__ = animal;
animal.eat = function() {
    this.full = true;
};
rabbit.eat();
if(rabbit.full){
   console.log('rabbit is full')
   }
if(animal.full){
   console.log('some animal is full')
   }


//2task
/*Какие значения будут выводиться в коде ниже?*/
var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

alert( rabbit.jumps ); // true

delete rabbit.jumps;
alert( rabbit.jumps ); // null

delete animal.jumps;
alert( rabbit.jumps);  // undefined

//3task
/*Присвойте объектам ссылки proto так, чтобы любой поиск чего-либо шёл по алгоритму 
pockets -> bed -> table -> head. То есть pockets.pen == 3, bed.glasses == 1, 
но table.money == undefined. После этого ответьте на вопрос, как быстрее искать glasses: 
обращением к pockets.glasses или head.glasses? Попробуйте протестировать.*/
var head = {
  glasses: 1};
var table = {
  pen: 3};
var bed = {
  sheet: 1,
  pillow: 2};
var pockets = {
  money: 2000};
pockets.__proto__=bed;
bed.__proto__=table;
table.__proto__=head;
console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);

//4task - готово но пересмотреть
/*В примерах ниже производятся различные действия с prototype.
Каковы будут результаты выполнения? Почему?*/

function Rabbit() { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
Rabbit.prototype = {};
alert(rabbit.eats);     //true
//А если код будет такой? (заменена одна строка):
function Rabbit(name) { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
Rabbit.prototype.eats = false; //(*)
alert(rabbit.eats);   // false
//А такой? (заменена одна строка)
function Rabbit(name) { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
delete Rabbit.prototype.eats; // (*)
alert(rabbit.eats);           //undefined
//А если бы в последнем коде вместо строки (*) было delete rabbit.eats?
function Rabbit(name) { }
Rabbit.prototype = { eats: true };
var rabbit = new Rabbit();
delete rabbit.eats; // (*)
alert(rabbit.eats);           //true


//5task 
//Создадим новый объект, вот такой:
function Rabbit() { }
Rabbit.prototype.test = function() { alert(this); }
var rabbit = new Rabbit();
//Есть ли разница между вызовами:
rabbit.test();            
rabbit.__proto__.test();  
Rabbit.prototype.test();  
Object.getPrototypeOf(rabbit).test(); //rabbit-oбъект, чей прототип будет возвращён=> Rabbit.test()
//все вызовы вернули [object Object], но __proto__ не работает в IE ниже 10 версии


//6task
/*Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму. 
Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").
Объекты-хомяки должны иметь массив food для хранения еды и метод found, который добавляет к нему.
Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым становится и 
второй тоже. В чём дело? Как поправить?*/
function Hamster() {  
this.food = [ ]; // пустой "живот"
this.found = function(something) {
  this.food.push(something);
};}

speedy = new Hamster();
lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");
console.log(speedy.food.length); // 2
console.log(lazy.food.length);   // 0

//7task
/*Создайте класс "Person" который будет иметь обычные для человека характеристики, например:
legs = 2
arms = 2
canWalk = true
и т.д
Далее создайте класс "Programmer" который будет наследовать класс "Person" и к нему еще 
дополнительно добавьте несколько методов и свойств которые свойственны именно человеку-программисту!
Создайте невколько экземпляром класса Programmer.*/

class Person {
  constructor (name) {
    this.legs = 2;
    this.arms = 2;
    this.canWalk = true;
  }
}

class Programmer extends Person {
  constructor() {
    super();
    this.crazyOfCode = true;
    this.knowsOOP = true;
    this.hiddenSkill = function () {
      console.log("He dances with a tambourine and it works!");
    };
  }
}
var programmer1 = new Programmer("Svyatoslav");
var programmer2 = new Programmer("Me")
var programmer3 = new Programmer("Anyuta");

console.log(programmer1,programmer2,programmer3);


//8task
/*Напишите функцию-конструктор Adder(startingValue). Объекты, которые она создает, 
должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.*/
function Adder(startingValue){
  this.value = startingValue;
  this.showValue = function(){
    alert ('value is ' + this.value)}
  this.addInput = function(){
    var X = prompt('Put your number')
    this.value = this.value + +(X)
    console.log(this.value)
  }
}

var adder = new Adder(89); // начальное значение 1
adder.addInput(); // прибавит ввод prompt к текущему значению
adder.addInput(); // прибавит ввод prompt к текущему значению
adder.showValue(); // выведет текущее значение


//9task
/*Напишите функцию sum, которая будет возвращать сумму любого количества чисел. 
Работать функция должна вот так: sum(2)(5)(6)(7)(2)(3)(4)( ); // 29 sum(56)(-10)(3)(1)( ); // 50*/
function sum(num) {
  var currentSum = num;
  function sumTo(nextNum) {
    currentSum += nextNum;
    return sumTo;}
  sumTo.toString = function(){
    return currentSum;};
return sumTo;}
console.log( sum(2)(5)(6)(7)(2)(3)(4) )
console.log( sum(56)(-10)(3)(1)( ) )


//10task
//Реализуйте бегущую строку на JavaScript.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>AJAX</title> 
</head>
<body> 
  <h3>Hello stranger!</h3>
  <div id='runStr'> Welcome! Behave yourself, and you get your pint of rum ! </div>
  
  <script type="text/javascript"> 
    var elem = document.getElementById('runStr');
    var text = elem.innerHTML;

    setInterval(function(){
      text = text[1] + text.substring(2, (text.length-1)) + text.substring(0,2);
      console.log(text);
      elem.innerHTML = text;
    }, 90)
  </script> 
</body> 
</html>
