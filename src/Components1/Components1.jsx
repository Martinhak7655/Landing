import React, { useState } from 'react'
import "./Components1.css"
import { IoMenu } from "react-icons/io5";

const Components1 = () => {

  const[menu, setMenu] = useState(false)

  return (
    <div>
      <div className='menu'>
        <IoMenu className='menu-icons' onClick={() => setMenu(!menu)}/>
        <div className='menu-around'>
          <b>Home</b>
          <b>About</b>
          <b>Contact</b>
        </div>
        <h2>Landing</h2>
        <button className='menu-but'>Buy Now</button>
        
        {menu ? (
          <div className='menu2'>
          <b>Home</b>
          <b>About</b>
          <b>Contact</b>
        </div>
        ) : ""}
      </div>
    </div>
  )
}

export default Components1