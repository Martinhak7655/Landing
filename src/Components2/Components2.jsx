import React from 'react'
import "./Components2.css"

const Components2 = () => {
  return (
    <div>
      <div className='product'>
         <div className='product-around'>
            <div className='product-column'>
                <h1 className='product-h1'>Introduce Your Product Quickly & Effectively</h1>
                <p className='product-p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                <p className='product-p'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div className='product-but-around'>
                    <button className='product-but1'>Purchase UI kit</button>
                    <button className='product-but2'>Learn More</button>
                </div>
            </div>
            <div className='product-img'></div>
         </div>
      </div>
    </div>
  )
}

export default Components2