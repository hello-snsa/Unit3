function runProgram(input) {

    input = input.trim();

    let newInput = input.split(/[\r\n]+/);

    let arr = newInput[1].split(" ").map(Number);

    let fun = (Left, Right) => {
        let newArr = [];
        let a = 0;
        let b = 0;

        while (a < Left.length && b < Right.length) {
            let e1 = Left[a];
            let e2 = Right[b];

            if (e1 < e2) {
                newArr.push(e1);
                a++
            }
            else {
                newArr.push(e2);
                b++
            }
        }
        return [...newArr, ...Left.slice(a), ...Right.slice(b)];
    };//end of fun1

    let fun2 = temp => {
        if (temp.length <= 1) {
            return temp;
        }

        let re = Math.floor(temp.length / 2);
        let Left = temp.slice(0, re);
        let Right = temp.slice(re);

        return fun(
            fun2(Left),
            fun2(Right)
        );

    };//end of fun2

    let ans = fun2(arr);
    console.log(ans.join(' '))


}//End of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = ``;
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});//End of program