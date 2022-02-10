import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Finalize from '../Finalize/Finalize';
import Results from '../Results/Results';

export const Main = () => {

    return (
        <main className='main_wrapper'>
            <Routes>
                <Route exact path='/dashboard' element={<Dashboard />} />
              
                <Route exact path='/results/:testId' element={<Results />} />
              
                <Route exact path='/finalize/:testId' element={<Finalize />} />
                <Route path="*" element={<Dashboard />} />
            </Routes>
        </main>
    )
}
