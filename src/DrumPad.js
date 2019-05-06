import React, { Component } from 'react';

class DrumPad extends Component {
    render() {
        const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
        return (
        <div className='grid-container'> 
            {pads.map((pad) => {
               return <li className='pads' key={pad}><h4>{pad}</h4></li>
            })}
        </div>
        )
    }
}

export default DrumPad;