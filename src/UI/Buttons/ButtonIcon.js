import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = (props) => {

    const data = props.data;

    return (
        <div
            className={props.classnameWrapper}
            style={props.styleWrapper}
        >
            <FontAwesomeIcon
                icon={props.icon}
                onClick={()=>props.onclick(data)}
                className={props.classnameIcon}
            />
        </div>
    )
}

export default ButtonIcon