let arr = 'abcd{}e{f{g}h}{}}{';
var stack=[];
var newStack=[];
var isBreak=false;


for(var a=0;a<arr.length;a++)
{
    if(arr[a]=='{'|| arr[a]=='}')
    {
        stack.push(arr[a])
    }
}
// console.log(stack);

var counter=0;
if(stack[0]=='}')
{
    console.log('not Balanced');
}else{


for(let b=0;b<stack.length;b++)
{
    if(stack[b]=='{')
    {
        newStack.push(stack[b]);
        counter++;
    }

    if(stack[b]=='}')
    {
        newStack.shift();
        counter--;
    }
    if(counter<0)
    {
        // console.log("not balanced")
        isBreak=true;
        break;
    }
}
// console.log(newStack)

}

if(isBreak)
{
    console.log("not balanced");
    
}
else{
    if(counter==0)
    console.log("balanced");
    else
    console.log("not balanced");
}