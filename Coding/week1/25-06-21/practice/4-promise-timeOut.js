var myPromise= new Promise(function (resolved,reject){

setTimeout(() => {
    console.log("inside timeout");
    resolved("Successfully resolved")
}, 3000);


});

myPromise.then(function (res)
{
    console.log("resolved message: ",res);
})
.catch(function(res){
    console.log("Error msg: ",res)
})