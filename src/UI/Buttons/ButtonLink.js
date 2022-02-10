import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLink(props) {


    return(
        <div>
            <Link
                to={props.to}  
            > 
                <div 
                    tabIndex={props.tabindex}
                    style={{ backgroundColor: `${props.backgroundColor}` }}
                    className={props.classnameButtonLink}
                >
                    {props.nameButtonLink}
                </div>
            </Link>
        </div>
    )
}

export default ButtonLink