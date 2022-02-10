import React from 'react';
import Button from '../../UI/Buttons/Button';

function DoNotHaveState(props) {

    return (
        <div className="doNotHaveState">
            <div className="doNotHaveState_title">Your search did not match any results.</div>
            <Button
                onclick={props.onclick}
                name='Reset'
                classname ='dashboard__table__tablebody_row__button doNotHaveState__button'
            />
        </div>
    )
}

export default DoNotHaveState