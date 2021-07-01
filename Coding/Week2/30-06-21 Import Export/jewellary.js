console.log("script jewellery.js is working.")


//importing
import navbar from "./components/navbar.js";

document.body.innerHTML=navbar();

//declaring global variables
// var parent = document.getElementById('parent');
var parent = document.getElementById('cont');
// var parent = document.body;

//calling main function
getData();

//getting data
async function getData(){

    let res = await fetch('https://fakestoreapi.com/products/category/jewelery?limit=10');
    
    let data = await res.json();
    console.log("data",data);
    // return data;
    appendIt(data);



}

function appendIt(d){

    d.forEach(({title,image,price}) =>{

        let Div = document.createElement('div');

        let t= document.createElement('p');
        t.innerText= title;
        let p= document.createElement('p');
        p.innerText= 'Rs. '+ price;

        let img = document.createElement('img');
        img.src= image;

        Div.append(img,p,t);
        parent.append(Div);

    })
}


