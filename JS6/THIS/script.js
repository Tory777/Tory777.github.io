function isContextEqualTo(contextLink, currentContext) {
   console.log(contextLink === currentContext);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.getName = function () {
       isContextEqualTo(window, this); // true
       isContextEqualTo(user, this); //   false
       return this.name;
    };
}

Person.getAge = function () {
    isContextEqualTo(window, this); //   false
    return this.age;
};

var user = new Person("erer", 45);

var getAge = Person.getAge;
var getName = user.getName;

consoe.log(getAge()); //  в каком контексте вызана функция?            - window
consoe.log(getName()); //  в каком контексте вызана функция?           - window
consoe.log(user.getName()); //  в каком контексте вызана функция?      - user

Person.getAge = function() {
    isContextEqualTo(Person, this); //    true
    return this.name;
}

user.getAge = getAge;
consoe.log(user.getAge()); //  в каком контексте вызана функция?     - user

//TASKS
//task 1
/*Create function getName, that takes a 'name' from it's current context, and returns it to user. 
Then create an object, with 'name' key and call 'getName' in context of object, 
and then in context of global window.*/

function getName(name) {
    return this.name;
}
var obj = {
  name: 'Nina'
}
console.log(getName.call(obj));
console.log(getName());

//task2
/*Create a funnction 'getDoubled' that will double a 'number' property in current context 
(depends on context) and multiply it to 2, then create funnction 'getDoubledTrippled' 
that will use getDoubled function result and multiplied it to 3. 
Use bind || call || apply in this cases.*/

var number = 5;
var obj = {
  number: 3};
function getDoubled() {
    return this.number*2;}
function getDoubledTrippled(){
  return getDoubled.call(this)*3
}
console.log(getDoubledTrippled.call(window));
console.log(getDoubledTrippled.call(obj));

//task3
/*Create a constructor that will describe 'City'. It should:
have 'name', 'population', 'country' (passed as arguments to functions;
have methods 'getPopulation'(return population), 'getCityName' (return city name);
have constant: 'AREA' tht cannot me modified or deleted
have 'addCitizen' method that increments 'popular' +1   */

function City(name, population, country, AREA){
	this.name=name;
	this.population=population;
	this.country=country;
	this.getPopulation = function()
	{return this.population};
	this.getCityName=function()
	{return this.name};
	this.AREA=AREA;
	Object.defineProperty(this,'AREA',{
  		enumerable: true,
  		configurable: false});
	this.addCitizen=function()
		{return ++this.population
	  };
	}
var Kiev = new City('Kiev',27000,'Ukraine','Kiiv_area')
console.log(Kiev.addCitizen())

//task4
/*Create function sum, that will return sum of different count of asrguments passed to it. 
It should work like this: sum(2)(5)(6)(7)(2)(3)(4)*/

function sum(num) {
  var currentSum = num;
  function sumTo(nextNum) {
    currentSum += nextNum;
    return sumTo;}
  sumTo.toString = function(){
    return currentSum;};
return sumTo;}
console.log( sum(2)(5)(6)(7)(2)(3)(4) )
