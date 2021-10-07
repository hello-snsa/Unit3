
main();

function main() {
    let arr = [1, 2, 3, 4, 5];
    let T = 10;
    let res = sum(arr, T);
    console.log(res)
}


function sum(arr, T) {
    let F = 0;
    let R = arr.length - 1;

    while (F < R) {

        if (arr[F] + arr[R] == T) {
            return 1;

        }

        else if (arr[F] + arr[R] > T) {
            R--;

        }
        else {
            F++;
        }
    }
    return -1;
}