import React from 'react';
import imagePortrait from '../../../../assets/portrait.webp';
import Greet from './components/Greet';
import './styles.css'

const Intro = () => {

    return(
        <div className="intro">
                <img fetchpriority="low" src={imagePortrait} loading="lazy" alt="Rugged blondies with red leather jacket."/>
                <Greet/>
        </div>
    )
}
export default Intro;