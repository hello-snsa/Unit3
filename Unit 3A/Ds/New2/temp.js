function runProgram(input) {
    input = input.trim();

    let num = Number(input);

    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i + 1);
    }
    {
        let i = 0;

        while (i < num) {
            arr.push(i + 1);
            i++;
        }

    }
    // console.log(arr)

    const fun = (arr) => {
        if (!Array.isArray(arr)) {
            return;
        }

        let n = arr.length;
        let data = [];

        for (let i = 0; i < (Math.pow(2, n)); i++) {
            let newArr = [];

            for (let j = 0; j < n; j++) {
                if (i & (1 << j)) {
                    newArr.push(arr[j]);
                }
            }

            data.push(newArr);
        }

        return (data);
    };

    let res = fun(arr);
    res.sort();

    for (let i = 0; i < res.length; i++) {
        if (res[i].length >= 1)
            console.log(res[i].join(" "))
    }

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





