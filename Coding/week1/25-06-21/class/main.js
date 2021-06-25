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
    let button_div = document.getElementById('button');
    button_div.innerHTML = null;

    let original_index=index;

    if(index<=6){
        index=6;

    }

    for (let i = index-5;i <= index+4; i++) {
        let btn = document.createElement('button');

        btn.innerText = i ;
        btn.setAttribute('id', `${i}`);
        btn.onclick = showData;
        button_div.appendChild(btn);

    }
    let btn=document.getElementById(original_index)
    btn.style.backgroundColor='green'

}

function showData() {

    let id = Number(this.id);
    let num= id-1;
    
    let page_data= data.slice(num*10,num*10+10)
    data_div.innerHTML=null;


    page_data.forEach(function(el){
        let p= document.createElement('p')
        p.innerText= `${el.id} ${el.name}`
        
        data_div.appendChild(p);
        
    });

    showButtons(id);
}