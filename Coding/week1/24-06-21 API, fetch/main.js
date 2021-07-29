let products_data = [];
let container = document.getElementById("container");

getData();

async function getData() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");

    let data = await response.json();

    console.log("data:", data);

    appendProducts(data);
  } catch (e) {
    console.log("e:", e);
  }
}



// appendProducuts();

function appendProducts(d) {
  // console.log(d);
  d.forEach(function (el) {
    let div = document.createElement("div");
    div.style = "border: 1px solid lightgray;padding: 10px"
    let img = document.createElement("img");
    img.src = el.image;
    img.style = "display:felx; margin-left:30%";

    let title = document.createElement("p");
    title.innerText = el.title;
    let price = document.createElement("p");
    price.innerText = el.price;
    let description = document.createElement("p");
    description.innerText = el.description;

    div.append(img, title, price, description);
    container.append(div);
  });
}
