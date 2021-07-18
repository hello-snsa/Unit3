import navbar from "./components/navbar.js";

let nav = document.getElementById('navbar')
nav.innerHTML = navbar();

let latest = document.getElementById('latest')




async function fetchIt(){
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    
    let {categories} = await res.json()
    categories.forEach((meal) => {
        let div = document.createElement('div')
        let image = document.createElement('img');
        image.src = meal.strCategoryThumb;
        let category = document.createElement('p');
        category.innerText = `Category: ${meal.strCategory}`;
        category.setAttribute('class','category');
        let para = document.createElement('p');
        para.innerHTML = meal.strCategoryDescription;
        div.append(image, category, para);
        latest.appendChild(div)
    })
   
}
fetchIt();