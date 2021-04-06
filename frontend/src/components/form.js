import React from 'react';
// git add 
import axios from 'axios';
import '../App.css';

const Form = () => {
    
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
            <h1>Tell me your address</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Address</p>
                        <input name="address" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;