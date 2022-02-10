import React from 'react';

const Counter = (props)=>{
   
    return (
        <div className={props.classname}>
            <span>{props.counter}</span>
            <span>{props.name}</span>
        </div>
    )
}

export default Counter