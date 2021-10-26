import React from 'react'
import '../styles/landingPage.css'
import backimg from '../back.png'
import Camera from './camera'
import { Link } from 'react-router-dom';

export default function play() {
    return (
        <div className='frame'>
            <img src={backimg} className='back'/>
            <div className='cameraframe'>
                <Camera />
            </div>
        </div>
    )
}
