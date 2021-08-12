function fun(str, a, n, f, l) {
    if (l == n) {

        for (let i = 0; i < str.length; i++) {
            console.log(str[i]);
        }

        return;
    }
    else {
        if (f > l) {
            str[a] = ')';
            fun(str, a + 1, n, f, l + 1);
        }
        if (f < n) {
            str[a] = '(';
            fun(str, a + 1, n, f + 1, l);
        }
    }
}

function par(str, n) {
    if (n > 0)
        fun(str, 0, n, 0, 0);
    return;
}


var n = 3;
var str = new Array(2 * n);
par(str, n);
