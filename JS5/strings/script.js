/*1 task
Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.*/

var str ='aaa@bbb@ccc'
var str2 = str.replace(/@/g,'!')
//var str2 = str.replace(new RegExp('@','g'),'!')  -  second way
console.log(str2)

/*2 task
Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).*/

var str ='aaa bbb ccc'
var str1 = str.substr(4,3)
var str2 = str.substring(4,7)
var str3 = str.slice(4,7)
console.log(str1)
console.log(str2)
console.log(str3)

/*3 task
В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.*/
var date = new Date('2025-12-31');
var yy = date.getFullYear();
var mm = date.getMonth() + 1;
var dd = date.getDate();
console.log(dd + '/' + mm + '/' + yy);


/*4 task
Дана строка 'js'. Сделайте из нее строку 'JS'.*/
var str = 'js';
console.log(str.toUpperCase());

/*5 task
Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.*/
var str = 'я учу javascript!'
console.log(str.length)

/*6 task
Дана переменная str, в которой хранится какой-либо текст. 
Реализуйте обрезание длинного текста по следующему принципу: 
если количество символов этого текста больше заданного в переменной n, 
то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
В противном случае в переменную result запишем содержимое переменной str.*/

myStr = 'so long string - need cuting'
n = 15
function cutStr(str) {
  if (!str) {return 'дык тут же пусто!';}
  else if(str.length > n){
    return str.slice(0,n) + '...';
  }
  else return str;
}
console.log(cutStr(myStr));

/*7 task
Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки 
в отдельный элемент массива.*/

myStr = 'я учу javascript!'
myArr =  myStr.split(' ')
console.log(myArr)

/*8 task
Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив 
в строку 'я+учу+javascript+!'.*/

myArr = ['я', 'учу', 'javascript', '!']
myStr = myArr.join('+')
console.log(myStr)

/*9 task
Преобразуйте первую букву строки в верхний регистр.*/

myStr = 'сделать большой первую'
emptyStr = ''
function upFirst(str) {
  if (!str) return 'дык тут же пусто!';
  return str[0].toUpperCase() + str.slice(1);
}
console.log(upFirst(myStr));
console.log(upFirst(emptyStr));

/*10 task
Преобразуйте первую букву каждого слова строки в верхний регистр.*/

myStr = 'я учу javascript!'
var newStr = myStr.split(' ').map(function(word) {
  return word[0].toUpperCase() + word.substr(1)
}).join(' ')
console.log(newStr)

/*11 task
Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, 
должен работать с любыми аналогичными строками.*/

myStr = 'var_test_text'; 
var toArr = myStr.split('_');
for (var item=1; item < toArr.length; item++){
 toArr[item] = toArr[item][0].toUpperCase() + toArr[item].substr(1)};
//or toArr[item] = toArr[item][0].toUpperCase() + toArr[item].substr(1,toArr[item].length-1)};
var newStr = toArr.join('');
console.log(newStr);

/*12 task
Преобразуйте строку 'varTestText' в 'var_test_text'. Скрипт, конечно же, 
должен работать с любыми аналогичными строками.*/

myStr = 'varTestTextWorkPropertyWithLastWord'; 
var myArr = []
var j=0
for (var i=0; i < myStr.length; i++){
  if(myStr[i] === myStr[i].toUpperCase()){ 
   myArr.push(myStr.slice(j,i));
   j=i;
  }
   if (i == myStr.length-1){
     myArr.push(myStr.slice(j,i+1));
   }
  }
console.log(myArr);
for (var item=1; item < myArr.length; item++){
     myArr[item] = myArr[item][0].toLowerCase() + myArr[item].substr(1,myArr[item].length-1)};
var newStr = myArr.join('_');
console.log(newStr);


/*13 task
Дано число, например '12345678'. Отделите пробелом каждую тройку чисел с конца. 
То есть у нас должно получится '12 345 678'. Число, конечно же, может быть любым.*/


/*num = 111222333444555666                    // спросить на уроке почему так
function breakz(num){
  var str = String(num);*/
  
num = '412335598743569'
function breakBy3(str){
    str = str.split('');
    for (var i = str.length-1; i !=0; i--) {
      if (i%3==0){
			  str.splice(str.length-i, 0, ' ');
		}
      if (i%3==0 & i==3){
        str.splice(0, 0, '');
      }
	}
	str = str.join('');
	return str;
}
console.log(breakBy3(num));
