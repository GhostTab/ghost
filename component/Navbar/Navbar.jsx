import React, {useContext} from 'react'
import'./Navbar.css'
import logo from '../../assets/Platinum.png'
import login_icon from '../../assets/login.png'
import { CoinContext } from '../../context/CoinContext'



const Navbar = () => {

  const{setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "php": {
        setCurrency({name: "php", symbol: "₱"});
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }

  

  return (
    <div className='head'>
        <img src={logo} className='logo'/>
        <div className='Navbar'>
            
            <ul>
                <li>Home</li>
                <li>Market</li>
                <li>Choose Us</li>
                <li>Join</li>
            </ul>
        </div>
        <div className='nav-right'>
                <select onChange = {currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="php">PHP</option>
                </select>
                <button>Sign up</button>
            </div>
    </div>   
  )
}

export default Navbar
