//circular queue

var arr=[10,20,30,40,50,];
// arr.length=8;
var front=0;
var back=0;
console.log(arr,front,back)

for(let i=101;i<=110;i++)
{
// var input=100;
enque(i);
}

function enque(input){
    if((back+1)%arr.length==front)
    {
        console.log("overflow")
    }
    else{
        // arr.shift();
        // front++;
        // font= (front+1) % arr.length;
        
        back= (back+1) % arr.length;
        arr[back]=input;
    }
}
console.log(arr)
console.log("front back",front,back)



// var input=100;
for(var j=0;j<arr.length;j++)
{
var deq=deque();
console.log("deque ",deq)
console.log("arr ",arr)
}
function deque(){
    var val;
    if(back==front)
    {
        console.log("empty queue")

    }else{
        front = (front+1)% arr.length;
        val =arr[front];
    }
    return val;
}