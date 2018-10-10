// 1 task
for (i=1;i<=50; i++){
  console.log(i)
}

//2 task
var arr = [1, 2, 3, 4, 5]
for (i=0; i<arr.length; i++){
  console.log(arr[i]);
}

//3 task
var arr = [2, 3, 4, 5]
var sum=1
for (i=0; i<arr.length; i++){
  sum=sum*arr[i];
}
console.log(sum);

//4 task
var arr = {'Киев':'Украина', Минск: 'Беларусь', Москва: 'Где?..'}
for (var city in arr) {
  console.log(city +' это '+ arr[city]);
}

//5 task
var n = 1000
var num = 0
do {
  n=n/2;
  num++;
} while (n>50);
console.log('Result of divide:',n,'Number of iterations:', num)

//6 task
var arr = [2, 5, 9, 15, 0, 4]
for (var i=0; i<arr.length; i++){
  if(arr[i]>3 && arr[i]<10){
    console.log(arr[i]);
  }
}

//7 task
var date = new Date();
var month = date.getMonth();
var arr=['Jan','Feb','Marz','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
for (var i = 0; i < arr.length; i++) {
    if  (i == month) {
    document.write(month[i].bold())}     //not sure about this. rumor has it that it is outdated
    else {document.write(month[i])}
}
console.log('Current mounth is ', arr[month])
