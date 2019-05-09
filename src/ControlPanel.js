import React, { Component } from 'react';

class ControlPanel extends Component {
    state = {
        power: true,
        innerText: 'ON',
        backgroundColor: '#64ffda'
    }
    togglePower = () => {
        if(this.state.power) {
            this.setState(() => ({
                power: false,
                innerText: 'OFF',
                backgroundColor: ''
            }))
        } else {
            this.setState(() => ({
                power: true,
                innerText: 'ON',
                backgroundColor: '#64ffda'
            }))
        }
    }
    render() {
        return (
            <div className='control-panel'>
                <div className='button-container'>
                    <button onClick={this.togglePower} className='power' style={{backgroundColor: this.state.backgroundColor}}>{this.state.innerText}</button>
                </div>
                
                <div className='sound-name'><p id='sound-name'>{this.props.text}</p></div>

                <div className='slide-container'>
                    <input type="range" min="1" max="100" defaultValue="50" className="slider" />
                </div>

                <div className='button-container'>
                    <button onClick={this.props.click} className='bank'>Bank</button>
                </div>
            </div>
        )
    }
}

export default ControlPanel;