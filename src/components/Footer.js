import React , {useState} from 'react'

const Footer = () => {

  //Never-ever create component inside component
  // const Food = ()=>{

  // }
  return(
    <div className='footer'>
      <p>Created By ❤️ <strong>Gautam Dhakate</strong>  © 2023 <strong>Menu</strong><span style={{color : "red"}}>Hub</span></p>
    </div>
  )
}

export default Footer