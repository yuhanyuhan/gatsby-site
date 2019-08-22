import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


import icon from '../assets/download.png'
const linkStyle = {
    display:"block",
    lineHeight:"1em"
}

export default props => (
<div style={props.style}>
    <img src={icon} alt="icon" style={{width:"2em"}}/> 
    <h1>I'M YUHAN</h1>    
    <h3>Description goes here</h3>
    <Link to="/Article" style={linkStyle}>Article</Link> 
    <Link to="/Article" style={linkStyle}>Abount Me</Link> 
    <a href="https://twitter.com"><FontAwesomeIcon icon={faFacebookSquare} /></a> 
</div>
)
