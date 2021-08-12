
var m = 148;
let k = 3;

//148148148
//o/p : 13*3=39 => 3+9=12 => 1+2=3 =>3
let num = 0;

sum(m);

function sum(n) {


    if (n <= 0) {
        return num;
    }
    else {
        num += (n % 10);
        n = Math.floor(n / 10);

        sum(n);
    }

}

m = num * k; //39
// console.log(m);


while (m > 9) {
    num = 0;
    sum(m);
    m = num;

}
console.log(m);