import React, { Component } from 'react';

const padsOne = [{
        text: 'Q',
        id: 'Heater-1',
        keypress: 81,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
    }, {
        text: 'W',
        id: 'Heater-2',
        keypress: 87,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    }, {
        text: 'E',
        id: 'Heater-3',
        keypress: 69,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
    }, {
        text: 'A',
        id: 'Heater-4',
        keypress: 65,
        sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
    }, {
        text: 'S',
        id: 'Heater-6',
        keypress: 83,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
    }, {
        text: 'D',
        id: 'Drums',
        keypress: 68,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
    }, {
        text: 'Z',
        id: 'Kick n Hat',
        keypress: 90,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
    }, {
        text: 'X',
        id: 'RP4 Kick 1',
        keypress: 88,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
    }, {
        text: 'C',
        id: 'Cev H2',
        keypress: 67,
        sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
    }
]

class BankOne extends Component {
    state = {
        pads: padsOne,
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        document.addEventListener('mousedown', this.handleClick);
        document.addEventListener('keyup', this.onkeyup);
        document.addEventListener('mouseup', this.onMouseUp);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        document.removeEventListener('mousedown', this.handleClick);
        document.removeEventListener('keyup', this.onkeyup);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
    handleKeyPress = (event) => {
        let volume = this.props.volume / 100;

        for (let i of padsOne) {
            if (i.keypress === event.keyCode) {
                document.getElementById(i.text).style.backgroundColor = '#64ffda';
                document.getElementById('sound-name').innerHTML = i.id;
                i.sound.currentTime = 0;
                i.sound.volume = volume;
                i.sound.play();
            }
        }
    }
    handleClick = (event) => {
        let volume = this.props.volume / 100;

        for (let i of padsOne) {
            if (i.text === event.target.value) {
                document.getElementById(i.text).style.backgroundColor = '#64ffda';
                document.getElementById('sound-name').innerHTML = i.id;
                i.sound.currentTime = 0;
                i.sound.volume = volume;
                i.sound.play();
            }
        }
    }
    onkeyup(event) {
        for (let i of padsOne) {
            if (i.keypress === event.keyCode) {
                document.getElementById(i.text).style.backgroundColor = '#616161';
            }
        }
    }
    onMouseUp(event) {
        for (let i of padsOne) {
            if (i.text === event.target.value) {
                document.getElementById(i.text).style.backgroundColor = '#616161';
            }
        }
    }

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

export default BankOne;