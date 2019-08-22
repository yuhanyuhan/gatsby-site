import React from "react"
import Nav from "../components/Navigation" 
import Article from "../components/Article"


export default () => (
  <div style={{ color: `red`, display:`flex`}}>
    <Nav style={{flex:`30%`}}/> 
    <Article style={{flex: '70%'}}/> 
  </div>
)

