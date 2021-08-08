
function runProgram(input) {

    var newInput = input.split(/[\r\n]+/);
    let arr = newInput[1].split(" ").map(Number);
    let comp = newInput[2].split(" ").map(Number);
    var data = Number(newInput[0]);

    var count = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < comp.length; j++) {
            if (comp[i] == arr[j]) {


                // count++;
                let temp = arr.slice((j + 1));
                console.log("temp", temp)
                newArr.push()
                break;
            } else {
                count++;
                newArr.push(arr[j]);


            }
        }
        arr = newArr;
        console.log("arr 1", arr)
        newArr = [];
        console.log("new arr", newArr)
        console.log("arr 2", arr)

    }
    console.log(count)








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