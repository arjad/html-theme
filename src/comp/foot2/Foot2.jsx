import React from 'react'
import "./Foot2.css";

function Foot2() {
  return (
    <div className='foot2-div'>
        <div className='foot2'>
            <h2>Subscribe Newsletter</h2>
            <div class="input-group mb-3">
              <input type="text" class="footer-input form-control" placeholder="abc@email.com" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <button class="btn subs-btn" type="button">Subscribe</button>
              </div>
            </div>
        </div>
        <div className='copyright-bar'>
        Dream. Connect. Innovate -- WebWrite IT Services © 2021
        </div>

    </div>
  )
}

export default Foot2