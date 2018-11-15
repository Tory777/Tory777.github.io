function isContextEqualTo(contextLink, currentContext) {
   console.log(contextLink === currentContext);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.getName = function () {
       isContextEqualTo(window, this); // ??
       isContextEqualTo(user, this); // ??
       return this.name;
    };
}

Person.getAge = function () {
    isContextEqualTo(window, this); // ??
    return this.age;
};

var user = new Person("erer", 45);

var getAge = Person.getAge;
var getName = user.getName;

consoe.log(getAge()); //  в каком контексте вызана функция?
consoe.log(getName()); //  в каком контексте вызана функция?
consoe.log(user.getName()); //  в каком контексте вызана функция?

Person.getAge = function() {
    isContextEqualTo(Person, this); // ??
    return this.name;
}

user.getAge = getAge;
consoe.log(user.getAge()); //  в каком контексте вызана функция?
