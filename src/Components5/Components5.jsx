import React from 'react'
import "./Components5.css"

const Components5 = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-around'>
                <p>@2023 Magical Company</p>
                <h2 style={{color: "#37447E"}}>Landing</h2>
                <button className='price-but'>Purchase Now</button>
            </div>
            <hr />
            <div className='footer-around2'>
                <div className='menu-around'>
                    <b>Home</b>
                    <b>About</b>
                    <b>Contact</b>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Components5