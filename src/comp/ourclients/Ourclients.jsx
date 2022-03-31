import React from 'react';
import "./ourclients.css";
import Clients from "../../assets/clients.png";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";
import i8 from "../../assets/i8.png";
import i9 from "../../assets/i9.png";
import i10 from "../../assets/i10.png";
import i11 from "../../assets/i11.png";
import "./ourclients.css"
function Ourclients() 
{
  return (
    <div className='ourclient-div'>
        {/* <div className='container'> */}
            <div className='client-logo'><img src={i1}/></div>
            <div className='client-logo-img'><img className='client-heading' src={Clients}/> <hr/></div>
            <div className='client-logo'><img src={i2}/></div>
            <div className='client-logo'><img src={i3}/></div>
            <div className='client-logo pt-4'><img src={i4}/></div>
            <div className='client-logo'><img src={i5}/></div>
            <div className='client-logo'><img src={i6}/></div>
            <div className='client-logo pt-4'><img src={i7}/></div>
            <div className='client-logo'><img src={i8}/></div>
            <div className='client-logo'><img src={i9}/></div>
            <div className='client-logo pt-4'><img src={i10}/></div>
            <div className='client-logo'><img src={i11}/></div>
        {/* </div> */}
    </div>
  )
}

export default Ourclients