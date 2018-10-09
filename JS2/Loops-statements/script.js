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
for (var i = 70; i >10; i--) {
  if(i%2!=0){
    console.log(i,'is odd');
  }}
