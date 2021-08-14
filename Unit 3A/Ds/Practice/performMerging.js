function runProgram(input) {
    input = input.trim();

    let newInput = input.split(/[\r\n]+/);

    var len = Number(newInput[0]);

    var arr1 = newInput[1].split(" ").map(Number);
    var arr2 = newInput[2].split(" ").map(Number);



    var ans = "";
    var i = 0;
    var j = 0;

    while (j < len && i < len) {

        if (arr1[i] <= arr2[j]) {

            ans += arr1[i] + " ";

            i++;
        }
        else {
            ans += arr2[j] + " ";
            j++;
        }
    }


    while (i < len) {
        ans += arr1[i] + " ";
        i++
    }
    while (j < len) {
        ans += arr2[j] + " ";
        j++;
    }

    console.log(ans);


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