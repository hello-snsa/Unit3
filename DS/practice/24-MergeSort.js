let data=[17,1,2,8,4,6,3,5];



function sort(arr,lo,r)
{
    if(lo>=r)
    {return}

        m=lo+(r-lo)/2;

        sort(arr,lo,m);
        sort(arr,m+1,r);
        merge(arr,lo,m,r);
    
}

main();
function main()
{
    let res=[];
    res=sort(data,0,data.length-1)
    console.log(res);

}


function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;
    // var L=[];
    // var R=[];
	var L =n1;
	var R = n2;

	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];

	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	var i = 0;
	var j = 0;
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}


	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}


	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

/*


function mergeSort(arr,l, r){
	if(l>=r){
		return;
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}

function printArray( A, size)
{
	for (var i = 0; i < size; i++)
	console.log( A[i] + " ");
}


var arr = [ 12, 11, 13, 5, 6, 7 ];
	var len = arr.length;


	mergeSort(arr, 0, len - 1);


	printArray(arr, len);


*/

