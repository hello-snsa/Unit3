let products_data=[];

async function getData(){

    try{
   let response = await fetch('https://fakestoreapi.com/products');

   let data= await response.json();

    console.log("data:",data)

    appendProducts(data);

}catch(e){
    console.log('e:',e);

}

}

getData();

function appendProducts(d){
// console.log(d);
d.forEach(function (el) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src=el.image;

    let title=document.createElement('p');

});

}