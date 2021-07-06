import React from "react";

function Cards(headline,data){

    return(
        <div id="mainDiv">
<div id="header">
    <h1>
        {headline}
    </h1>

</div>
<div id="lists">
    <ul>
        <li>{data[0]}</li>
        <li>{data[1]}</li>
        <li>{data[2]}</li>
        <li>{data[3]}</li>
      
    </ul>

</div>
</div>

    )
}

export default Cards;