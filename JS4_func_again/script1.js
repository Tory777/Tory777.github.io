"use strict"
/*task1
Write a function "getLength" that will count a length of any given array*/

var myArr = [1,9,5, ,9,7];
function getLength(arr){
	var n = arr.length;
	console.log(n);
}
getLength(myArr)

/*task2
Write a function "getArgsLength" that will get any number of arguments, and return a length of all arguments*/

var a = ['fun code']
var b = ['lala'];
var c = 125
function getArgsLength(){
	for (var i = 0; i < arguments.length; i++) {
      return arguments.length;
    	}}
   console.log(getArgsLength(a,b,c));

/*task3
Write a function "removeEmptyElements" that will delete all empty elements in array given to it, 
also check inside of it that the argument is an array*/
//Option 1
var array = [1, null,,['fshj0',,56,,45],"vbjdfk", null,,null, 3.0]
function removeEmptyElements(bigArr){
  var cleanArray = bigArr.filter(element => element !== null)
  for (var arr in cleanArray) {
    	if (Array.isArray(cleanArray[arr])){
            cleanArray[arr] = cleanArray[arr].filter(element => element !== null);}
            console.log(cleanArray[arr])
		}
  return cleanArray;
}
console.log (removeEmptyElements(array));

//Option 2, using recursion
var array = [1, null,,['fshj0',,56,,45],"vbjdfk", null,,null, 3.0]
function removeEmptyElements(bigArr){
  for (var arr in bigArr) {
    	if (Array.isArray(bigArr[arr])){
            bigArr[arr] = removeEmptyElements(bigArr[arr]);
		} else {
			var cleanArray = bigArr.filter(element => element !== null)}}
  return cleanArray;
}
console.log (removeEmptyElements(array))

/*task4
Write a function "sortReverse" that will sort an array elements in revers order*/
var arr = [25, 10, 80, 0, -8, 33];
function sortReverse(a, b) {
  return b - a;
}
arr.sort(sortReverse);
console.log(arr);


/*task5
Create a function that will get a date as an argument (also check if it is a date), 
and return an object: { day: your_value, month: your_value, year: your_value }*/

var myDate = new Date(2025-12-31);
function dayToObj(date){
	var dateObj = {}
	if(date instanceof Date && !isNaN(date.valueOf())){
		dateObj.year = date.getFullYear();
		dateObj.month = date.getMonth()+1;
		dateObj.day = date.getDate();
	} else {
		console.log('Dude, it is not a date!')}}
console.log(dayToObj(myDate))


/*task6 
Write a function, that counts a number of object properties, and alerts the result number after 1 minute 
(also should works for arrays)*/

var obj1 = {width: 300,height: 200,title: "Menu"}; 
var count = 0;
function count_propert(obj){
	for (var key in obj) {		//или можно var obj ={}; var count= Object.keys(obj).length;
	  count++;
	}								
}
var delayTime = setTimeout(function(){
	alert("Всего свойств:" + count);
}, 60000);
count_propert(obj1);

/*task7
Write a function that every 2 seconds will ask user for his name, 
and will stops only if he will enter your name, else will ask for a name again*/

var user100500
function getNameAtAnyCost(user){
var timerAsk = setInterval(function() {
  	var userName = prompt("Your name?");
  	if(userName!=="") clearInterval(timerAsk);
}, 2000);}
getNameAtAnyCost(user100500)
