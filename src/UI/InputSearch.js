import React, { useEffect, useRef } from 'react';

function InputSearch(props){
    
    const ref = useRef();

    useEffect(() => {
       ref.current.focus();
    }, []);
        
    return(
        <>        
            <input 
                type={props.type}
                placeholder={props.placeholder}
                onChange={(event) => props.onchange(event)}
                value={props.value}
                tabIndex={props.tabindex}
                disabled={props.disabled}
                ref={ref}
                autoComplete='off'
                className={props.classname}
                style={props.styles}
            />  
        </>
    )
}

export default InputSearch