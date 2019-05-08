import React, { Component } from 'react';
import BankOne from './BankOne';
import BankTwo from './BankTwo';
import ControlPanel from './ControlPanel';

//need to get the pad sound names passed 
//into the control panel box when a pad is clicked

const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

class Container extends Component {
    state = {
        bankOne: true,
        bankTwo: false,
        bankName: 'Drum Kit'
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
    render(){
        return(
            <div className='main-container'>
                {this.state.bankOne ? (
                    <BankOne pads={pads}/>
                ): <BankTwo pads={pads}/>
                }
                <ControlPanel 
                    click={this.handleClick}
                    text={this.state.bankName}
                />
            </div> 
        )
    }
}

export default Container;