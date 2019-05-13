import React, { Component } from 'react';

const padsTwo = [{
        text: 'Q',
        id: 'Chord 1',
        keypress: 81,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')
    }, {
        text: 'W',
        id: 'Chord 2',
        keypress: 87,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')
    }, {
        text: 'E',
        id: 'Chord 3',
        keypress: 69,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')
    }, {
        text: 'A',
        id: 'Give us a Light',
        keypress: 65,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')
    }, {
        text: 'S',
        id: 'Dry Ohh',
        keypress: 83,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')
    }, {
        text: 'D',
        id: 'Bld H1',
        keypress: 68,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')
    }, {
        text: 'Z',
        id: 'Puncy Kick',
        keypress: 90,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')
    }, {
        text: 'X',
        id: 'Side Stick',
        keypress: 88,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')
    }, {
        text: 'C',
        id: 'Brk Snr',
        keypress: 67,
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')
    }
]


class BankTwo extends Component {
    state = {
        pads: 'padsTwo'
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

        for (let i of padsTwo) {
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
        
        for (let i of padsTwo) {
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
        for (let i of padsTwo) {
            if (i.keypress === event.keyCode) {
                document.getElementById(i.text).style.backgroundColor = '#616161';
            }
        }
    }
    onMouseUp(event) {
        for (let i of padsTwo) {
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

export default BankTwo;