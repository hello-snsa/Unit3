import axios from 'axios'


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

async function getData(){

  var res= await axios.get("https://fakestoreapi.com/products");

  console.log('res:', res);
      console.log("hello world");

}
getData();