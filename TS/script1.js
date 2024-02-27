var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednesday"] = 3] = "wednesday";
    days[days["thrusday"] = 4] = "thrusday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
})(days || (days = {}));
console.log(days.sunday);
console.log(days[0]);
console.error('hello there is no error in this');
var dummy = function () {
    throw Error;
};
dummy();
var obj = {
    Name: 'hasana',
    Age: 25
};
console.log(obj.Name);
var obj1 = {
    Name: 'hasana',
    email: 'has@gmail.com',
    phno: 9390449045
};
var employee = /** @class */ (function () {
    function employee(n, e, a) {
        this.Name = n;
        this.email = e;
        this.age = a;
    }
    return employee;
}());
var xyz = new employee('raj', 'has@gmail.com', 25);
var a = 100;
var b = 'hasana';
var c = 150;
var d = true;
(function (number) { return number; });
var sum = function (a, b) { return a + b; };
var sub = function (a, b) { return a - b; };
var mul = function (a, b) { return a * b; };
console.log('sum is : ' + sum(10, 20));
console.log('sub is : ' + sub(10, 20));
console.log('mul is : ' + mul(10, 20));
