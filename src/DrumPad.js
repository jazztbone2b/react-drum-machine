import React, { Component } from 'react';

const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const padsOne = [{
        text: 'Q',
        id: 'Heater-1',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
    }, {
        text: 'W',
        id: 'Heater-2',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    }, {
        text: 'E',
        id: 'Heater-3',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
    }, {
        text: 'A',
        id: 'Heater-4',
        sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
    }, {
        text: 'S',
        id: 'Heater-6',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
    }, {
        text: 'D',
        id: 'Drums',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
    }, {
        text: 'Z',
        id: 'Kick n Hat',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
    }, {
        text: 'X',
        id: 'RP4 Kick 1',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
    }, {
        text: 'C',
        id: 'Cev H2',
        sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
    }
]

/*const padsTwo = [{
        text: 'Q',
        id: 'Chord 1',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')
    }, {
        text: 'W',
        id: 'Chord 2',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')
    }, {
        text: 'E',
        id: 'Chord 3',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')
    }, {
        text: 'A',
        id: 'Give us a Light',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')
    }, {
        text: 'S',
        id: 'Dry Ohh',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')
    }, {
        text: 'D',
        id: 'Bld H1',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')
    }, {
        text: 'Z',
        id: 'Puncy Kick',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')
    }, {
        text: 'X',
        id: 'Side Stick',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')
    }, {
        text: 'C',
        id: 'Brk Snr',
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')
    }
]*/


class DrumPad extends Component {
    state = {
        pads: pads,
        sound: padsOne
    }
    handleClick = (event) => {
        event.preventDefault();
        //find a way to make the button clicks more responsive
        let buttonPressed = event.target.value;
        console.log(buttonPressed);
        for (let i of this.state.sound) {
            if (i.text === buttonPressed) {
                i.sound.currentTime = 0;
                i.sound.play();
            }
        }
    }

    render() {
        console.log(this.state.sound)
        return (
        <div className='grid-container'> 
            {this.state.pads.map((pad) => (
                <input type='button' onClick={this.handleClick} className='pads' key={pad} value={pad}/>
            ))}
        </div>
        )
    }
}

export default DrumPad;