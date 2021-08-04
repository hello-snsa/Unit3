function main() {
    console.log(fun(3, 4))

}
main();

function fun(x, y) {
    if (y == 0)
        return 0;

    else
        return (x + fun(x, y - 1))
}