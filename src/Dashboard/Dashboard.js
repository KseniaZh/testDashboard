import React, { useState, useEffect} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import Search from './components/Search';
import TableDashboard from './components/TableDashboard';
import DoNotHaveState from './components/DoNotHaveState';
import {
    initialDashboard,
    searchDashboard,
    sortDashboard,
    sortDashboardStatus,
} from './store/actionsDashboard';
import { changeValue } from './store/actionsSearch';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    
    const dispatch = useDispatch();

    const stateInitialTests = useSelector(state => state.stateDashboard.tests);
    const stateTests = useSelector(state => state.stateDashboard.stateTests);
    const stateSites = useSelector(state => state.stateDashboard.sites);

    const [flagHaveState, setFlagHaveState] = useState(true);

    const initialStateTests = (tests, sites) => {
        dispatch(initialDashboard(tests, sites));
    }
    const handlerSort = (keyObj) => {
        dispatch(sortDashboard(keyObj, stateTests ));
    }
    const [flagSortStatus, setFlagSortStatus] = useState(true);

    const handlerSortStatus = (keyObj) => {
        dispatch(sortDashboardStatus(keyObj, stateTests, flagSortStatus));
        setFlagSortStatus(prev => !prev);
    }
    const handlerSaveSearch = (data) => {
        dispatch(searchDashboard(data))
    }
    const handlerReset = () => {
        dispatch(changeValue(''));
        initialStateTests(stateInitialTests, stateSites);
    }

    useEffect(() => {
        if (stateTests.length === 0) {
            initialStateTests(stateInitialTests, stateSites);
        }
    }, [])
    useEffect(() => {
        if (stateTests.length === 0) {
            setFlagHaveState(prev => false);
        } else {
            setFlagHaveState(prev => true);
        }
    }, [stateTests.length])

    return (
        <div className='dashboard containers_wrapper'>

            <h2>Dashboard</h2>

            <Search
                counter={stateTests.length}
                stateInitial={stateTests}
                searchKey="name"
                saveSearch={handlerSaveSearch}
                searchReset={handlerReset}
            />
            {
                flagHaveState ?
                    <TableDashboard
                        stateTests={stateTests}
                        stateSites={stateSites}
                        handlerSort={handlerSort}
                        handlerSortStatus={handlerSortStatus}
                        icon={faChevronDown}
                        iconStatus={flagSortStatus ? faChevronDown : faChevronUp}
                    />
                    : <DoNotHaveState
                        onclick={handlerReset}
                    />
            }

        </div>
    )
}
export default connect()(Dashboard)