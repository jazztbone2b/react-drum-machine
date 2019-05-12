import React, { Component } from 'react';

class PowerOff extends Component {
    render() {
        return (
        <div className='grid-container'> 
            {this.props.pads.map((pad) => (
                <input type='button' className='pads' id={pad} key={pad} value={pad}/>
            ))}
        </div>
        )
    }
}

export default PowerOff;