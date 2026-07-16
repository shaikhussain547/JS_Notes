let i = 11;
let j = i++ + ++i;
// 11(current value of i=12)+(curr value of i+1)13=24
console.log(i);//13
console.log(j);//24

let a = 11, b = 22;		
let c = a + b + a++ + b++ + ++a + ++b;
//11+22+11+22+13+24=103
//a = 12->13 , b =23->24
console.log("a=" + a);//13
console.log("b=" + b);//24
console.log("c=" + c);//103


let p=0;
let q = p++ - --p + ++p - p--;
//0 - 0 + 1 - 1 = 0
//p=0->1->0->1->0
console.log(p);
console.log(q);


let x=19, y=29, z=9;
let u = x-- - y-- - z--;
//19 - 29 - 9 = -19
//x=19->18, y=29->28, z=9->8
console.log("x="+x);//18
console.log("y="+y);//28
console.log("z=" + z);//8
console.log("u=" + u);//-19


// let i = 11;
// let j = --(i++); //error

// console.log(++11);//error


let m = 0, n = 0;
let p = --m * --n * n-- * m--;
//-1 * -1 * -1 * -1 = 1
//m=0->-1->-2,n=0->-1->-2
console.log(p);//1
console.log(m);//-2
console.log(n);//-2

// console.log(++true);//error

let a = 10n;
console.log(++a);//11n

let d = 1.5, D = 2.5;
console.log(d++ + ++D);
//1.5 + 3.5 = 5
//d=1.5->2.5, D=2.5->3.5

console.log(d);//2.5
console.log(D);//3.5

