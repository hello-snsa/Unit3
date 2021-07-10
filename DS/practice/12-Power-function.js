let x=2,y=4,res=1;

rec();
console.log(res);

function rec(){

    if(y<=0)
    {
        return;
    }
    else{
        res*=x;
        // console.log(x)
        y--;
        rec();
    }
}