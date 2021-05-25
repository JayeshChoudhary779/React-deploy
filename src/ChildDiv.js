import React from 'react';


var img1="https://picsum.photos/seed/picsum/200/300";
var img2="https://picsum.photos/id/1/200/300";
var img3="https://picsum.photos/id/1005/200/300";
const name="jayesh choudhary";

function ChildDiv(){
    return( 
    <div className="inner">
    <h1 className="heading">hello {name} is here!</h1>
    <h2 style={{color : 'red'}}>multiple jsx line no. {1+1}</h2>
    <img src={img1}/>
    <img src={img2}/>
    <img src={img3}/>
    </div>
    )
}

export default ChildDiv;