
var m= 148;
var mm= 148;
// var n= m;
let k= 3;

//148148148
//o/p : 13*3=39 => 3+9=12 => 1+2=3 =>3
let num=0;

sum(m);

function sum(n){


if(n<=0)
{
    console.log("num if ",num)
return num;
}
else{
    num+= (n%10);
    console.log("num ",num)
    n=Math.floor(n/10);
    
    sum(n);
}



}
// console.log("num ",num)
m= num*k;
console.log(m);


while ( m>9)
{   num=0;
    let mm;
    
  
    mm = sum(m);
 
    console.log("num while ",num)
console.log(mm);

}