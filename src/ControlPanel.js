import React, { Component } from 'react';

class ControlPanel extends Component {
    state = {
        power: true,
        innerText: 'ON',
        backgroundColor: '#64ffda',
        volume: 50
    }
    togglePower = () => {
        if(this.state.power) {
            this.props.callBackFromParent(false);
            document.getElementById('sound-name').innerHTML = '';
            this.setState(() => ({
                power: false,
                innerText: 'OFF',
                backgroundColor: ''
            }))
        } else {
            this.props.callBackFromParent(true);
            this.setState(() => ({
                power: true,
                innerText: 'ON',
                backgroundColor: '#64ffda'
            }))
        }
    }
    changeVolume = (e) => {
        let output = e.target.value;
        this.setState(() => ({
            volume: output
        }))
        document.getElementById('sound-name').innerHTML = `Volume: ${output}`
        this.props.getRangeVolume(output);
    }
    render() {
        return (
            <div className='control-panel'>
                <div className='button-container'>
                    <button onClick={this.togglePower} className='power' style={{backgroundColor: this.state.backgroundColor}}>{this.state.innerText}</button>
                </div>
                
                <div className='sound-name'><p id='sound-name'>{this.props.text}</p></div>

                {this.state.power ? (
                    <div>
                        <div className='slide-container'>
                            <input type="range" min="1" max="100" className="slider" value={this.state.volume} onChange={this.changeVolume}/>
                        </div>

                        <div className='button-container'>
                            <button onClick={this.props.click} className='bank'>Bank</button>
                        </div>
                    </div>
                ) : 
                    <div>
                        <div className='slide-container'>
                            <input type="range" min="1" max="100" className="slider"/>
                        </div>
                    
                        <div className='button-container'>
                            <button className='bank'>Bank</button>
                        </div>
                    </div>
                } 
            </div>
        )
    }
}

export default ControlPanel;