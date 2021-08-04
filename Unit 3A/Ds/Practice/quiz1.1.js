function main() {
    fun(25);
}
main();

function fun(n) {
    if (n == 0)
        return;
    else {
        console.log(n % 2)
        fun(Math.floor(n / 2))
    }
}