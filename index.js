/*
function x(){
    var a = 20;
    if(true){
        let b = 15;
        console.log(a,b);
    }
    console.log(a);
}


//callback
//one function parameter as another function is called callback


function y(a,x){
    console.log(a,x);
}
//y(10,x);


//lexical scoping
let obj = {
    name :'hasana',
    age:25
    
}
function print(){
    console.log(this.name,this.age)
}
print.call(obj,10,50,60,)
print.apply(obj,[10,20,30])
let r = print.bind(obj);
console.log(r)

fetch('https://dummyjson.com/recipes')
.then((res)=>res.json()).then((data)=>console.log(data))

async function fetchData(){
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    console.log(data)
}
fetchData()
export default x; */
class Iphone{
    name;
    age ;
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(this.name);
        console.log(this.age);

    }
}
let obj = new Iphone('hasana',25)


class Iphone2 extends Iphone{
    constructor(name,age,car){
        
        super(name,age)
        this.car = car;
    }
    getdata(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.car);
      //  console.log(super.age);
    }
}
let obj1 = new Iphone2('hasana',24,'audi');
obj1.getdata();
export default Iphone2;
export {Iphone}