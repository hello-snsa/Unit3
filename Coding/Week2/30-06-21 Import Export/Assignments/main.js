import navbar from "./components/navbar.js";
import {searchIt,debounce} from './showData.js';

let nav=document.getElementById('navbar');
nav.innerHTML = navbar();


function hideHomeImages(){
    let homeImages=document.getElementById('homeImages')
    homeImages.style.visibility="hidden"
    
    }
    let searchFood=document.getElementById('searchFood');
    
    
    searchFood.onclick=function() {hideHomeImages()};
    





let input = document.getElementById('input');
input.oninput = () =>
{
    let val = input.value;
    printIt(val);
}


async function printIt(val){
    let res = await searchIt(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);

    debounce(res);
}

