import React from 'react';
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFindState from '../hooks/useFindState';
import ButtonGoBack from '../UI/Buttons/ButtonGoBack';

const Results = () => {

    const { testId } = useParams();
    const stateTests = useSelector(state => state.stateDashboard.tests);

    const stateComponent = useFindState(testId, stateTests);

    return (
        <div className='results containers_wrapper'>

            <h2>Results</h2>
            <div className='containers_name'>
                {stateComponent.name}
            </div>
            <ButtonGoBack />
        </div>
    )
}
export default connect()(Results)