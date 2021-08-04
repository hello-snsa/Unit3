main();
function main() {
    let res = foo(513, 2)
    console.log(res)
}

function foo(n, r) {
    if (n > 0) {
        return ((n % r) + foo(Math.floor(n / r), r))
    }
    else return 0;
}