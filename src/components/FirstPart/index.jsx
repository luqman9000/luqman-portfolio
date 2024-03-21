import React from 'react'
import DropDown from './components/DropDown'
import './styles.css'
import Intro from './components/Intro'

const FirstPart = () => {

    return(
        <div className = "firstpart">
                <Intro/>
                <DropDown/>
        </div>
    )
}
export default FirstPart;