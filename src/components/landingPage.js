import React from 'react';
import '../styles/landingPage.css'
import logo from '../nature.svg'
import { Link } from 'react-router-dom';


export default function landingPage() {
    return (
        <div className="frame">
            <h1>CarbonDex.</h1>
            <div className='line'></div>
            <img src={logo} />
            <div className='line1'>
                <Link to='/play'><button>Play</button></Link>
                <button>Explore</button>
            </div>
            <div className='line2'>
                <button>Board</button>
                <button>About</button>
            </div>
        </div>
    );
}
