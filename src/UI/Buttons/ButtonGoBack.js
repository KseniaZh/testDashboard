import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonGoBack = (props) =>{

    const handlerGoBack = () => {
        window.history.go(-1);
    }
    return (
        <div
            className='button__goBack'
            style={props.style}
            onClick={handlerGoBack}
        >
            <FontAwesomeIcon
                icon={faChevronLeft}
                className='button__goBack_icon'
            />
            <span>Back</span>
        </div>
    )
}

export default ButtonGoBack