import React from 'react'
import "./mobile.css";

function Mobile() 
{
  return (
    <div className='mob-div'>
        <div className='shapes'>
            <div className="tri"></div>
            <div className="poly poly1"></div>
            <div className="poly poly2"></div>
            <div className="poly poly3"></div>
            <div className="poly poly4"></div>
        </div>
        <div className="mob-card ">
            <div className="d-flex justify-content-center text-white flex-column">
                <i class="fa-solid fa-mobile-screen"></i>
                <p className='mob-heading'>Mobile<br/>
                <span>Application</span></p>
                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='text-white lower-div'>
                <p className='goahead'>Go Ahead <i class="fa-solid fa-angle-right"></i></p>
                <hr/>
                <div className='pre-next' >
                    <i class="fa-solid fa-angle-left"></i>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
        <div>
            <ul className="option">
                <li>Mobile App</li>
                <li>Web Developemnt</li>
                <li>Project Management</li>
                <li>Resource developer</li>
            </ul>

        </div>
    
    </div>
  )
}

export default Mobile;