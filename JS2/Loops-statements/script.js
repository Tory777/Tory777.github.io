//task 1
for (var i = 0; i < 15; i++) {
  if(i%2==0){
    alert(i,' is even');
  }
  else if(i%2!=0){
    alert(i,' is odd');
  }}

//task2
for (var i = 1; i < 101; i++) {
  if(i%3==0 && i%5==0){
    console.log(i,'FizzBuzz');}
  else if(i%3==0){
    console.log(i,'Fizz');}
  else if(i%5==0){
    console.log(i,'Buzz');}
}
//task 3
var j = 0;
var a = prompt('Введите число А:');
var b = prompt('Введите число B:');
if (a>0 && b>0 && b>=a){
  for (var i = a; i >0; i--) {
      if(a%i==0 && b%i==0) {
        if(j>0) break;
        j++;
        console.log(i,'greatest common divisor');}
      }
}
else if(a>0 && b>0 && a>b){
  for (var i = b; i >0; i--) {
      if(a%i==0 && b%i==0) {
        if(j>0) break;
        j++;
        console.log(i,'greatest common divisor');}
      }
}
else if(a<0 || b<0){
        alert('Вы ввели отрицательное число, обновите страницу и попробуйте еще раз!');
}

//task 4
var summa=0; 
for (var i = 1; i < 1000; i++) {
  if(i%3==0 && i%5==0){
    summa+=i;
    }
}
console.log(summa);

//task 5
var summa=0; 
for (var i = 10; i <= 90; i++) {
  if(i%3==0 && i%5==0){
   console.log(i);}
}
// if you meant different numbers: numbers that divide to 3 and separate numbers that divide to 5 than next code is true
/*for (var i = 10; i <= 90; i++) {
  if(i%3==0){
   console.log(i);}
else if(i%5==0){
   console.log(i);}
}*/

//task 6
for (var i = 70; i>10; i--) {
  if(i%2!=0){
    console.log(i,'is odd');
  }}

//task 7
for (var i = 78; i>12; i--) {
  if(i%2==0 && i%3==0){
    console.log(i,'- even and divide to 2 and 3');
  }}
