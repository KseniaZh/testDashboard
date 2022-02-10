import React, { useEffect, useState } from 'react';
import ButtonLink from '../../UI/Buttons/ButtonLink';

function RowTableDashboard(props) {

    const toFinalize = `/finalize/${props.stateTests.id}`;
    const toResults = `/results/${props.stateTests.id}`;

    const backgroundFinalize= "#7D7D7D";
    const backgroundResults = "#2EE5AC";

    const backgroundOnline = '#E14165';
    const backgroundPaused = '#C2C2FF';
    const backgroundDraft = '#8686FF';
    const backgroundStopped = '#E14165';

    const colorPaused = '#FF8346';
    const colorOnline = '#1BDA9D';
    const colorDraft = '#5C5C5C';
    const colorStopped = '#FE4848';

    const [thStyle, setThStyle] = useState({ background: '', color: '' })

    useEffect(() => {
        switch (props.stateTests.status) {
            case "ONLINE":
                setThStyle({ background: backgroundOnline, color: colorOnline })
                break;
            case "PAUSED":
                setThStyle({ background: backgroundPaused, color: colorPaused })
                break;
            case "DRAFT":
                setThStyle({ background: backgroundDraft, color: colorDraft })
                break;
            case "STOPPED":
                setThStyle({ background: backgroundStopped, color: colorStopped })
                break;
            default:
                setThStyle({ background: 'inherit', color: '#222222' })
        }
    }, [])

    return(
        <>
            <tr className='dashboard__table__tablebody_row'>
                
                <th style={{ background: `${thStyle.background}`}}> </th>
                <th>{props.stateTests.name} </th>
                <th>{props.stateTests.type}</th>
                <th style={{ color: `${thStyle.color}` }}>{props.stateTests.status} </th>
                <th>{props.stateTests.site} </th>
                <th>
                    <ButtonLink
                        to={props.stateTests.status === 'DRAFT' ? toFinalize : toResults}
                        backgroundColor={props.stateTests.status === 'DRAFT' ? backgroundFinalize : backgroundResults}
                        nameButtonLink={props.stateTests.status === 'DRAFT' ? `Finalize`:"Results"}
                        classnameButtonLink='dashboard__table__tablebody_row__button'
                    />
                </th>
            </tr>
                   
        </>
    )
}

export default RowTableDashboard