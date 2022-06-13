import React, { Component } from 'react';
import './Bye.css';

const Bye = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Goodbye World</h1>
            <p>{props.goodbye}</p>
        </div>
    );
}

export default Bye;