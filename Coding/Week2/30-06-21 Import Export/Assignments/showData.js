async function searchIt(url){
    let res = await fetch(url);
    let {meals} = await res.json()
    return meals;
}

function debounce(meal) {
    let searchResult = document.getElementById('searchResult')
    searchResult.innerHTML = null;
    for (let i = 0; i < 5; i++){
        let { strMeal } = meal[i]     
        let title = document.createElement('p');   
        title.onclick = () => { 
            searchResult.innerHTML = null;   
            printIt(strMeal)
        }
        title.innerText = strMeal;
        searchResult.append(title)      
    }
    
}
let printHere = document.getElementById('printHere')

async function printIt(name) {
 
    let resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)  

    let { meals } = await resp.json()
    let meal = meals[0]
    printHere.innerHTML = null;

    let div = document.createElement('div')
    let divs = document.createElement('div')
    let image = document.createElement('img');
    image.src= meal.strMealThumb
    let ingredient = document.createElement('div');
    let title = document.createElement('p');
    title.innerText=meal.strMeal
    let category = document.createElement('p');
    category.innerText = `Category: ${meal.strCategory}`;
    let heading = document.createElement('h3');
    heading.innerText = 'Ingredient';
    let ingredient1 = document.createElement('p');
    let ingredient2 = document.createElement('p');
    let ingredient3 = document.createElement('p');
    let ingredient4 = document.createElement('p');

    ingredient1.innerHTML=`${meal.strIngredient1} ${meal.strMeasure1}`;

    ingredient2.innerHTML = `${meal.strIngredient2} ${meal.strMeasure2}`;

    ingredient3.innerHTML = `${meal.strIngredient3} ${meal.strMeasure3}`;

    ingredient4.innerHTML = `${meal.strIngredient4} ${meal.strMeasure4}`;

    ingredient.append(heading,ingredient1,ingredient2,ingredient3,ingredient4);

    let para = document.createElement('h3');
    para.innerText = 'Procedure';
    let instruction = document.createElement('p');
    instruction.innerHTML = meal.strInstructions;


    div.append(image);
    divs.append(title, category, ingredient,para,instruction);
    printHere.append(div,divs)
}

export {searchIt,debounce}