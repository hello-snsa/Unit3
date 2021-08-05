function runProgram(input) {
    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        let arr = newInput[a + 1].split(" ").map(Number);

        if (arr.length == 1) {
            console.log("-1")
        }
        // //console.log(arr)
        else {
            let result = "-1 ";
            let temp = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (temp > arr[i]) {
                    result = arr[i] + " ";
                    break;
                }
            }


            for (let b = 1; b < arr.length - 1; b++) {
                let op1 = -1;
                let op2 = -1;
                let count1 = 0;
                let count2 = 0;
                // console.log("inside main loop")

                for (let c = b + 1; c < arr.length; c++) {
                    count1++;
                    if (arr[b] > arr[c]) {
                        op1 = arr[c];
                        // // console.log("op1 ", op1)
                        break;
                    }

                }

                for (let c = b - 1; c >= 0; c--) {

                    count2++;
                    if (arr[b] > arr[c]) {
                        op2 = arr[c];
                        // console.log("op2 ", op2)
                        break;
                    }

                }


                //part 2
                if (op1 == -1 && op2 == -1) {
                    result += "-1 ";
                }

                else {
                    if (op1 == -1) {
                        op1 = op2;
                    }
                    else if (op2 == -1) {
                        op2 = op1;
                    }
                    if (count1 == count2) {


                        result += op2 + " ";



                    }
                    else {
                        if (count1 < count2) {
                            result += op1 + " "
                        }
                        else if (count1 > count2) {
                            result += op2 + " "
                        }
                    }


                }



            }//end outer loop

            let temp2 = arr[arr.length - 1];
            let isAvailable = false;
            for (let i = arr.length - 2; i >= 0; i--) {
                if (temp2 > arr[i]) {
                    result += arr[i] + " ";
                    isAvailable = true;
                    break;
                }

            }
            if (!isAvailable) {
                result += "-1"
            }

            console.log(result)



        }


    }//end of Quiery

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
});//En d of program