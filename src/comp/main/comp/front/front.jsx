import React from 'react'
import "./front.css";

function Front() 
{
  return (
    <div className='row'>

        <div className='col-lg-9 col-md-12 left-div'>
            <p>A one-stop IT services provider that will take care of all your mobile and web application development needs.</p>
            <h2>WebWrite</h2><span> IT Services</span>
            <button className='px-4 py-2'>Get Started</button>
        </div>

            <div className='right-features mob-features'>
                <div className="mainDiv"></div>
                <h3>Mobile Development</h3>
                <p>Go Ahead <i class="fa-solid fa-angle-right"></i></p>

            </div>
            <div className='right-features web-feat'>
            <div className="mainDiv"></div>

                <h3>Web Development</h3>
                <p>Go Ahead <i class="fa-solid fa-angle-right"></i></p>

            </div>
            <div className='right-features graphicdev'>
            <div className="mainDiv"></div>
    
                <h3>Graphic Development</h3>
                <p>Go Ahead <i class="fa-solid fa-angle-right"></i></p>

            </div>
            <div className='social-icon'>
                <a className='linkedin'>Linkedin</a>
                <a className='fb'>Facebook</a>
                <a className='twiter'>Twitter</a>
            </div>
    </div>
  )
}

export default Front