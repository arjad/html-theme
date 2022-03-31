import React from 'react'
import "./front.css";

function Front() 
{
  return (
    <div className='row'>

        <div className='col-lg-9 col-md-12 left-div'>
            <p>A one-stop IT services provider that will take care of all your mobile and web application development needs.</p>
            <h2>WebWrite<span> IT Services</span></h2>
            <button className='px-4 py-2'>Get Started</button>
        </div>

        <div className='col-lg-3 col-md-12 right-div'>
            <div className='right-features'>
                <div className="mainDiv"></div>
                <h3>Mobile Development</h3>
                <p>Go Ahead <i class="fa-solid fa-angle-right"></i></p>

            </div>
            <div className='right-features'>
            <div className="mainDiv"></div>

                <h3>Web Development</h3>
                <p>Go Ahead <i class="fa-solid fa-angle-right"></i></p>

            </div>
            <div className='right-features'>
            <div className="mainDiv"></div>
    
                <h3>Graphic Development</h3>
                <p>Go Ahead <i class="fa-solid fa-angle-right"></i></p>

            </div>
            <div className='social-icon px-5 py-2'>
                <a>Linkedin</a>
                <a>Facebook</a>
                <a>Twitter</a>
            </div>
        </div>

    </div>
  )
}

export default Front