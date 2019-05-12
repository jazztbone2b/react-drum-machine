import React, { Component } from 'react';
import BankOne from './BankOne';
import BankTwo from './BankTwo';
import ControlPanel from './ControlPanel';
import PowerOff from './PowerOff';

//need to get the pad sound names passed 
//into the control panel box when a pad is clicked

const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

//set power here and pass to control panel as props
class Container extends Component {
    state = {
        bankOne: true,
        bankTwo: false,
        bankName: 'Drum Kit',
        power: true
    }
    handleClick = () => {
        this.state.bankOne ?
            this.setState(() => ({
                bankOne: false,
                bankTwo: true,
                bankName: 'Chords'
            }))
        : this.setState(() => ({
            bankOne: true,
            bankTwo: false,
            bankName: 'Drum Kit'
        }))
    }
    getPower = (dataFromChild) => {
        this.setState(() => ({
            power: dataFromChild
        }))
    }
    render(){
        return(
            <div className='main-container'>
            {this.state.power ? (
                this.state.bankOne ? (
                    <BankOne pads={pads}/>
                ): <BankTwo pads={pads}/>
            ):
                <PowerOff pads={pads} />
            }
                
                <ControlPanel 
                    click={this.handleClick}
                    text={this.state.bankName}
                    callBackfromParent={this.getPower}
                />
            </div> 
        )
    }
}

export default Container;