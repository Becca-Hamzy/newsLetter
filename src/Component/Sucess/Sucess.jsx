import "./Sucess.css"
import sucessIcon from "../../assets/svg/icon-success.svg"
import { Link } from "react-router-dom"


const Suc =  () => {

  return(
      <div className="Container">
        <div className="Contain">
            <img className="icon" src= {sucessIcon} alt="#" />
          <div className="sub">
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to your email address.Please open it and click the button inside to confirm your subscription.</p>
          <Link to = "/ ">
           <button className="butn">
                Dismiss message
            </button> </Link>


          </div>
        </div>
         
      </div>
  )

}

export default Suc