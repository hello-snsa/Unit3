var myPromise=new Promise(function (resolved,reject){
    console.log("inside myPromise");

    resolved("successfully resolved the issue");
    // reject("NOT successfully resolved the issue");

})
console.log("status: ",myPromise);

myPromise.then(function (res)
{
    console.log("res ",res);
}

)
