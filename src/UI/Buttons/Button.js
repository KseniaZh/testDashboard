import React from 'react';

function Button(props) {

    const data = props.data;
    
    return(

            <div 
                className= {props.classname}
                onClick={() => props.onclick(data)}
                tabIndex = {props.tabindex}
            >
                {props.name}
            </div>

    )
}

export default Button
