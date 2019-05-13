import React, { Component } from 'react';
import BankOne from './BankOne';
import BankTwo from './BankTwo';
import ControlPanel from './ControlPanel';
import PowerOff from './PowerOff';

const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

class Container extends Component {
    state = {
        bankOne: true,
        bankTwo: false,
        bankName: 'Drum Kit',
        power: true,
        volume: 50
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
    getVolume = (dataFromChild) => {
        this.setState(() => ({
            volume: dataFromChild
        }))
    }
    render(){
        return(
            <div className='main-container'>
            {this.state.power ? (
                this.state.bankOne ? (
                    <BankOne 
                        pads={pads}
                        volume={this.state.volume}
                    />
                ): <BankTwo 
                        pads={pads}
                        volume={this.state.volume}
                    />
            ):
                <PowerOff pads={pads} />
            }
                
                <ControlPanel 
                    click={this.handleClick}
                    text={this.state.bankName}
                    pads={pads}
                    callBackFromParent={this.getPower}
                    getRangeVolume={this.getVolume}
                />
            </div> 
        )
    }
}

export default Container;