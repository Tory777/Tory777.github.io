//Passing value by value or by reference
//task1
var t = {
    y: 9
};
var number = t.y;			// number = t.y = 9
number += 5;				// number = 9 + 5 = 14
console.log(t.y, number);   // 9 14

//task2
var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];		//number = t.y = 5
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;			// t.y[2] = 6
}
console.log(number); // 5 // changing an array element, but not the 'number'

//task3
var t = 9;
var obj = {
    number: t  //  new value the 'number' => 9, no 't'
};
obj.number++;  // number: 10

console.log(obj.number, t);  // 10 9

//task4
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number; // in 'object1' in 'str' + 'number: 67' => object1 {str: {name: "L", number: 67}}
obj.number++;					// 68

var str = object1.str;			// str = object1 {name: "L", number: 67}
object1.str.name = "Kolya";		// object1 = { str: {name: "Kolya", number: 67} }

console.log(str, object1.str.number); // object1{name: "Kolya", number: 67} 67


//task5
var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya"
};

object2.str.number = object2.str.number; // object2 doesn't have such value 'number'  
										// object2.str.number(second) => undefined
										// object2.str.number(first) = object2.str.number(second) => undefined

object2.str.number++; //undefined
console.log(object2.str.number); // undefined
