import React, { Component } from 'react';

class ControlPanel extends Component {
    render() {
        return (
            <div className='control-panel'>
                <div className='button-container'>
                    <button className='power'>Off</button>
                </div>
                
                <div className='sound-name'></div>

                <div className='slide-container'>
                    <input type="range" min="1" max="100" defaultValue="50" className="slider" />
                </div>

                <div className='button-container'>
                    <button className='bank'>Bank</button>
                </div>
            </div>
        )
    }
}

export default ControlPanel;