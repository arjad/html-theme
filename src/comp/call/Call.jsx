import React from 'react'
import Laptopbg from "../../assets/laptopbg.png";
import "./call.css";
function Call() 
{
  return (
    <div className='call-div mt-5'>
      
      <div className='laptop-img'>
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <p>Let’s talk about your next<br/>
            <small>Project</small>
          </p>

          <button className='px-4 py-2'>Get In Touch</button>


        </div>

      </div>
    </div>
  )
}

export default Call