import React from 'react'
import "./client.css"
import Comma from "../../assets/Vector.png";
import Epilips from "../../assets/epili.png";
import Avatar from "../../assets/avatar.png";
function Client() 
{
  return (
    <div className='client-div'>
        <div className="front-card">
            <h3>BRAD SCHWAN</h3>
            <img className='comma-img' src={Comma}/>
            <img className='comma-img2' src={Comma}/>
            <img className='ava' src={Avatar}/>
            <hr/>
            <h2>What Client<span>Say ?</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <small>CEO, Let’s sync</small>

            <img className='drop-img' src={Epilips}/>
            <img className='drop-img2' src={Epilips}/>
            <img className='drop-img3' src={Epilips}/>
            <img className='drop-img4' src={Epilips}/>

            <div className="bluediv"></div>
            <div className="bluediv2"></div>  
            <div className="bluediv3"></div>
            <div className='pre-next pre-next-bluediv' >
                        <i class="fa-solid fa-angle-left"></i>
                        <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>

        <div className='text-div'>
            So that’s us. There’s no other way to put it.
            <div className='pre-next' >
                        <i class="fa-solid fa-angle-left"></i>
                        <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
      
    </div>
  )
}

export default Client