import React, { Component } from 'react';

const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

/* Save all the sounds into an object to be used later
const test = [
    {
        text = 'Q',
        sound = null
    },

]
*/

class DrumPad extends Component {
    state = {
        pads: pads,
        backgroundColor: null
    }
    handleClick = () => {
        this.setState(() => ({
            backgroundColor: 'red'
        }))
        /*setTimeout(() => {

        })*/
    }
    render() {
        return (
        <div className='grid-container'> 
            {this.state.pads.map((pad) => {
               return <li onClick={this.handleClick} style={{backgroundColor: this.state.backgroundColor}} className='pads' key={pad}><h4>{pad}</h4></li>
            })}
        </div>
        )
    }
}

export default DrumPad;