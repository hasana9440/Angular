enum days{
    sunday,
    monday,
    tuesday,
    wednesday,
    thrusday,
    friday,
    saturday
}
console.log(days.sunday)
console.log(days[0]);
console.error('hello there is no error in this')

const dummy = ():never=>{
    throw Error;
}
dummy();

interface myobj{
	Name :string 
    Age?:number
    salary ?:number
}
let obj:myobj ={
    Name:'hasana',
    Age:25
}
console.log(obj.Name);

interface details extends myobj{
    
    email?:string
    phno?:number
}

let obj1:details={
    Name:'hasana',
    email:'has@gmail.com',
    phno:9390449045
}

class employee implements details{
        Name;email;age;
        constructor(n:string,e:string,a:number){
            this.Name = n;
            this.email = e;
            this.age = a;
        }
}
let xyz = new employee('raj','has@gmail.com',25)

// type alias

type x = number;
let a:x=100;
type y = string|number|boolean
let b:y= 'hasana'
let c:y = 150
let d:y=true

type commonfun = (p:Number,q:number):number =>number

let sum:commonfun = (a,b)=> a + b
let sub = (a:number,b:number):number=> a-b
let mul = (a:number,b:number):number=> a*b
console.log('sum is : '+sum(10,20));
console.log('sub is : '+sub(10,20));
console.log('mul is : '+mul(10,20));
