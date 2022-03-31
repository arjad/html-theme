import React,{useState} from 'react'
import Logo from "../../../../assets/logo.png";
import "./nav.css";
function Nav() 
{
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  let arjad= () =>{
    let modal = document.querySelector(".hamburger-menu");
    if (modal) 
    {
      modal.classList.toggle("bgc");
    }
  }
  return (
    <div>
          <nav className='main-nav'>
               
               <div
                 className={
                   showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                 }>
                     <img src={Logo} className="logo"/> 
                     <div className="verticalline"></div>    
                 <ul className='text-white'>
                   <li>
                     <a>Who We Are </a>
                   </li>
                   <li>
                     <a>Portfolio</a>
                   </li>
                   <li>
                     <a>Services</a>
                   </li>
                   <li>
                     <a>Career</a>
                   </li>
                   <li>
                     <a>Contact Us</a>
                   </li>
                 </ul>
       
               </div>
               <button className='getquotation'>Get Quotations</button>
       
               {/* 3rd social media links */}
               <div className="social-media">
                 {/* hamburget menu start  */}
                 <div className="hamburger-menu">
                   <a href="#" onClick={() =>
                     { 
                       arjad();
                       setShowMediaIcons(!showMediaIcons)
                     }}>
                     {/* <GiHamburgerMenu /> */}
                     <i class="fa-solid fa-bars"></i>
                   </a>
                 </div>
               </div>
               
             </nav>
    </div>
  )
}

export default Nav
