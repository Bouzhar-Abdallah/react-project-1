import React from "react";

function hello() {

    const sayhi = () =>{
        console.log('hello');
    }
    return (
        <div>
            
            <button onClick={sayhi}>click to say hay</button>
        </div>
    );
}

export default hello;