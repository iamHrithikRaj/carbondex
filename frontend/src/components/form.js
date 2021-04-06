import React from 'react';
// git add 
import axios from 'axios';
// import styled from 'styled/-components';
import '../form.css';
import '@google/model-viewer/dist/model-viewer';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';



const Form = () => {
    // const earth = '../images/CHAHIN_EARTH.gltf';
    // const jpg = '../images/CHAHIN_EARTH_TEXTURE.jpg';
    // const bin = '../images/CHAHIN_EARTH_TEXTURE.jpg'

    const apiURL = "http://localhost:5000"

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
        axios
            .post(apiURL)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <div className="fieldset">

                    <input name="address" className="address" />
                    <button type="submit">Submit</button>
                </div>
            </form>


            <div className="stars"></div>
            <div className="star2"></div>
            <div className="star3"></div>
            <model-viewer id='earth' src='https://raw.githubusercontent.com/PrakulTiwari/models/master/1227%20Earth.gltf' alt="A 3D model of an astronaut" auto-rotate></model-viewer>
            <model-viewer id='sun' src='https://raw.githubusercontent.com/PrakulTiwari/models/master/PUSHILIN_sun.gltf' alt="A 3D model of an astronaut2" auto-rotate></model-viewer>

        </div>
    )
}

export default Form;