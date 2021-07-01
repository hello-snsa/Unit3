console.log("script electronics.js is working.")



//importing
import navbar from "./components/navbar.js";

// document.body.innerHTML=navbar();
let nav=document.getElementById('nav')
nav=navbar();

//declaring global variables
// var parent = document.getElementById('parent');
var parent = document.getElementById('cont');
// var parent = document.body;

//calling main function
getData();

//getting data
async function getData(){

    let res = await fetch('https://fakestoreapi.com/products/category/electronics?limit=10');
    
    let data = await res.json();
    console.log("data",data);
    // return data;
    appendIt(data);

}

//append result to page
function appendIt(d){

    // d.forEach(({title,image,price}) =>{
    for(var x in d){
       

        let Div = document.createElement('div');

        let t= document.createElement('p');
        t.innerText= d[x].title;
       
        let p= document.createElement('p');
        p.innerText= 'Rs. '+ d[x].price;

        let img = document.createElement('img');
        img.src= d[x].image;

        Div.append(img,p,t);
        parent.append(Div);

    }
}


