console.log("script is working");
var data;
async function main() {

    data = await fetchData();
    console.log('data: ', data);
    showButtons(1);
}
main(); //calling main function



async function fetchData() {

    try {
        let response = await fetch("http://jsonplaceholder.typicode.com/comments");
        let data = await response.json();
        return data;
    }
    catch (e) {
        console.log('e: ', e);

    }
}

function showButtons(index) {
    // console.log("first time ",index)
    let button_div = document.getElementById('button');
    button_div.innerHTML = null;

    let original_index=index;

    if(index<=6){
        index=6;

    }
// console.log("before for",index)
for (let i = index-5;i <= index+4; i++) {
    let btn = document.createElement('button');
    
    btn.innerText = i ;
    btn.setAttribute('id', `${i}`);
    // console.log("before onclick",index,i);
    btn.onclick = showData;
    // console.log("after onclick",index,i);
    button_div.appendChild(btn);
    
}
// console.log("before for")
// console.log("ouside for",index)
let btn=document.getElementById(original_index);
btn.style.backgroundColor='green';

}

function showData() {
    let id = Number(this.id);
    // console.log("inside show data",id);
    let num= id-1;
    
    let page_data= data.slice(num*10,num*10+10);
    let data_div= document.getElementById('data_div');
    data_div.innerHTML=null;
    

    page_data.forEach((el)=>{
        let p= document.createElement('p');
        p.innerText= `${el.id} ${el.name}`
        
        data_div.appendChild(p);
        
    });

    // console.log("before showButton",id)
    showButtons(id);
}