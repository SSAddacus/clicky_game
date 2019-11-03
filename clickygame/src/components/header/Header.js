import React from 'react'
import './header.css'

class Header extends React.Component {
    
    render(){
        return(
            <div className='header'>
                <div id='home'>CLICKY GAME</div>
                <div id='score'>
                    <p>Score: {this.props.score}</p>
                    <p id='hs'>High Score: {this.props.hScore}</p>
                </div>
            </div>
        )
    }
}

export default Header