import React,{useState} from 'react'
import Nav from "../main/comp/nav/nav";
import Front from "../main/comp/front/front";
import "../../App.css";

function Main() 
{ 
  return (
    <div className='bg-dark main-div'>
      <Nav/>
      <Front />

    </div>
  )
}

export default Main