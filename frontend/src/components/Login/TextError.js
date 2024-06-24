import React from "react";
export default function TextError(prop){

    return(


        <div style={{color:'red'}}>
            {prop.children}
        </div>
    )
}