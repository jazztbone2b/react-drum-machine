import React from 'react';
import DrumPad from './DrumPad';
import ControlPanel from './ControlPanel';

function Container () {
    return (
        <div className='main-container'>
            <DrumPad />
            <ControlPanel />
       </div> 
    )
}

export default Container;