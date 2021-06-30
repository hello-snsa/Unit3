
let videos_div= document.getElementById('videos');
let myKey;

async function searchVideos(){

let query= document.getElementById('query').value;
try{
  var res= await  fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${myKey}&maxResults=5`)

  let {items}= await res.json();
items=items.filter(({id:{videoId}})=>{return videoId!=undefined})

appendVideos(items)

}
catch(e){
    console.log('e:',e)
}


}
function appendVideos(videos){

    videos_div.innerHTML=null;

    videos.forEach(({id:{videoId}})=>{

   

  let div=document.createElement('div');

 div.innerHTML=`<iframe  src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" ></iframe>`
    // div.append(searchResult);
    videos_div.append(div);
  })

}
/* <iframe width="853" height="480" src="https://www.youtube.com/embed/tOczmJSLvug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
