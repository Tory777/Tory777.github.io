//1 задание - Определите результат и тип переменных в следующих случаях:

var r = '9' + 0;	//'90'- string

var r = 9 + '0';	//'90' - string

var r = 4 + 9;	//13 - number

var r = null + 7;	//7 - number

var r = '6' + null; //'6null' - string

var r = '6' + [];	//'6' - string

//2 задание - Будет ли верным выражение: /2/3 + 1 + 1/3 == 2 Опишите почему да или нет?/

/* Answer

It is due to the fact that in the binary system 2/3 and 1/3 - this infinite fractions recorded up to a certain value. 
We can fix it by 'toFixed': result = 2/3 + 1 + 1/3 console.log(+result.toFixed(10)==2)*/

//3 задание - Определите результат в следующих случаях:

var r = 6 && 0 && 7;	//0 or false

var r = -9 && -8;	//-8 or true

var r = 6 && 0 && 7;	//0 or false

var r = "string" && 0; //0 or false

var r = [] && {} && 7;	//7 or true

var r = [] || 7;	//[] or true

var r = {} || 0;	//{} or true

var r = false || true;	//true

var r = "2" > "3";	//false

var r = "ab" <= "fg";	//true

var r = "2k" <= "8l";	//true

var r = "2" != 2;	//false

var r = "2" !== 2;	//true

var r = ++2 + 2;	//5 or true

var r = ++2 + 2--;	//5 or true

var r = 1++ - 2--;	//0 or false, cause 1++ return 2, 2-- return 2 (und than set value 1). 2-2=0 =>false
