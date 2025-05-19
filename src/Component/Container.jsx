import { useState } from 'react'
import './Container.css'
import signup from "../assets/svg/illustration-sign-up-desktop.svg"
import mark from "../assets/svg/icon-list.svg"
import sign from "../assets/svg/illustration-sign-up-mobile.svg"
import { Link } from "react-router-dom"


const Container = () => {
 return (
    <div className='mainContainer'>
      <div className='miniContainer'>
          <div className="stay">
            <h1>Stay Updated!</h1>
             <p>Join over 60,000+ product managers recieving updates on: </p>
            <p> <img src={mark} alt="#" /> Product discovery and building what matters.</p> 
            <p><img src={mark} alt="#" /> Measuring to ensure updates are success. </p>   
            <p> <img src={mark} alt="#" /> And much more! </p>

             <form action="">
                <label htmlFor="">Email address</label> <br />
                <input type="text" placeholder='email@company.com'/>
             </form>
            <Link to = "/Sucess"> <button className='btn'>Subscribe to monthly newsletter</button></Link>

          </div>
          <div className="img">
            <img className='signup' src= {signup} alt="#" />
          </div>
          
          <div className="signup-mob"> 
            <img className="mob" src = {sign} alt = ""/>

          </div>

      </div>

    </div>
 )
}
export default Container
