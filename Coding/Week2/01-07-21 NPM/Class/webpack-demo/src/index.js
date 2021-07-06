import navbar from "../components/navbar.js";
import axios from 'axios';

async function getData(){

  axios.get("https://fakestoreapi.com/products");
      console.log("hello world");

}
getData();
let nav= document.getElementById('navContainer');
nav.innerHTML=navbar();

// function component() {
  // const element = document.createElement('div');

  //making GET request using axios
  // axios.get("https://fakestoreapi.com/products")
  //   .then((res) => {
  //     console.log('res:', res);
  //     console.log("hello world");
  //   }); 
 

  // return element;
// }

// document.body.appendChild(component()); 