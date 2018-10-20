//task1
var name = prompt("Как ваше имя?");
var user = {
  name: this.name,
  export: function() {
    return this;
  }};
alert(user.export().name);

//task2
function sumTo(n) {
  var res = 0;
	for (var i=1; i<=n; i++) {
		 var res = res + i;
	}
  console.log(res)
}
sumTo(4)

//task3
function min(a,b) {
  if (a==b){
  	console.log('Numbers are equal');
  } else if(a>b){
  	return b}
  	else{return a}}
console.log(min(5,5))
console.log(min(1,5))
console.log(min(-99,0))

//task 4
var obj = {}; 

Object.defineProperty(obj,'number',{
  value: 9,
  enumerable: true
});
Object.defineProperty(obj,'cantDelete',{
  configurable: false;
});
var n;
Object.defineProperty(obj, 'getDouble', {
  get: function(n){return n*2;},
  set: function(n){return n/3; },
});

//task5 
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var people = [ vasya , masha , vovochka ];

function compareAge(man1, man2) {
  return man1.age - man2.age;
}
people.sort(compareAge);
for(var i = 0; i < people.length; i++) {
  console.log(people[i].name, people[i].age);
}

//task6 
var myPets = ['dog','cat','pig','dog','cat','pig','elefant'];
function unique(arr) {
  var obj = {};
  for (var i=0; i<arr.length; i++){
    var str = arr[i];
    obj[str] = true; }
  return Object.keys(obj);}
console.log(unique(myPets))
