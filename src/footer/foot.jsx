import React from 'react'
import "./foot.css";
import Foot1 from "../assets/footer1.png";
import Foot2 from "../assets/footer2.png";
import Logo from "../assets/footlogo.png";
function Foot() {
  return (
    <div className='foot-div row'>
        <img className='logo-footer' src={Logo} alt="" />
        <div className='col-5 pt-5 text-white'>
            <div className=''>
                <h4>Email</h4>
                <p>info@conovoinc.com</p>
            </div>
            <div>
                <h4>Address</h4>
                <p>268 Bath Road Slough, Berkshire SL1 4DX, United Kingdom.</p>
            </div>
            <div>
                <h4>Phone</h4>
                <p>   +44  873 32212376   </p>
            </div>
            <div className="sociallinks">
                    <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-linkedin-in"></i>

            </div>

        </div>
        <div className='col-7 right-img'>
            <img src={Foot1} />
            <img src={Foot2} />
            
        </div>
        

    </div>
  )
}

export default Foot