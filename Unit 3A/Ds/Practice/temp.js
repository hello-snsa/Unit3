function SumIt(num, n) {

    var res = 0;
    for (i = 0; i < n; i++) {
        res += num[i];
    }

    res = res * parseInt(Math.pow(2, n - 1));
    return res;
}

var num = [2, 1, 5, 6];
var n = num.length;

console.log(SumIt(num, n));