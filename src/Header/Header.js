import React from 'react'
import classes from '../Header/header.module.css'
import logo from '../assests/Bluestacklogo-removebg-preview (1).png'

const header = ()=>{
 return(
    <div className = {classes.Nav}>
        <img className = {classes.Logo} src = {logo}></img>
        
    </div>
 );

}

export default header