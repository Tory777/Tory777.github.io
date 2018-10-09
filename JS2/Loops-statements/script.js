for (var i = 0; i < 15; i++) {
  if(i%2==0){
    alert(i,' is even');
  }
  else if(i%2!=0){
    alert(i,' is odd');
  }}

for (var i = 1; i < 101; i++) {
  if(i%3==0 && i%5==0){
    console.log(i,'FizzBuzz');}
  else if(i%3==0){
    console.log(i,'Fizz');}
  else if(i%5==0){
    console.log(i,'Buzz');}
}
