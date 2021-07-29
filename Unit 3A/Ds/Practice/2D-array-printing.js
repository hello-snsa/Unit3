let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// console.log(arr);
let layer = arr.length;
let rows = arr[0].length;
let cols = arr[0][0].length;

let len = layer * rows * cols;

// for (let i = 0; i < layer; i++) {
//     for (let j = 0; j < layer; j++) {
//         let result = "";
//         for (let k = 0; k < layer; k++) {
//             result += arr[i][j][k] + " ";
//         }
//         console.log(result);
//     }
// }
// console.log("len", layer);
// console.log("len", rows);
// console.log("len", cols);
// console.log("len", len);

let result = "";
for (let i = 0, j = 0, k = 0; i < len - 1; i++) {
    // console.log("inside")


    if (k == (cols)) {
        console.log("hello");
        k = 0;
        j++;

    }
    if (j == (cols)) {
        console.log("hey");

        j = 0;
        result = "";
    }
    result += arr[i][j][k] + " ";
    console.log(result);


    k++;



}
console.log(arr.length)