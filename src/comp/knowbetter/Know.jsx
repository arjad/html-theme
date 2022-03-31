import React from 'react'
import "./know.css";

function Know() 
{
  return (
    <div className='row know-div'>
        <div className="bg-border-div"></div>
        <div className='col-lg-6 know-left'>
            <small>Know Us Better</small>
            <h4>
                Your full stack technology partners from idea conception to project execution and Maintenance.
            </h4>
        </div>
        <div className='col-lg-6 know-right'>
            <p className='border-light'>WebWrite IT Services is a bespoke software development company specializing in research-led, human-centered custom software development, progressive web apps (PWA's), and mobile applications. </p>
            <pre>
                <p>Learn More</p>
                <hr className='greyhr'/>
            </pre>
           
        </div>
    </div>
  )
}

export default Know