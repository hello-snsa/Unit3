function fun(x){
    console.log("inside fun ",x)
    if(x<=0){
    console.log("done")
    return;}
    else{
        fun(--x)
        console.log(x)
        fun(--x)

    }
}

main();
function main(){
    fun(3);
}