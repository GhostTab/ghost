import React, { useState, useEffect, useContext } from 'react';
import './Home.css'
import { CoinContext } from '../../context/CoinContext'



const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(()=>{
    setDisplayCoin(allCoin);
  },[allCoin])


  return (
    <div className='home'>
      <div className='hero'>
        <h1>Step into <br/> the Future of Finance</h1>
        <p>Where Innovation Meets Security in the World of Digital Currency.</p>
        <form action="">
          <input type="text" placeholder='Search Crypto'/>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='crypto-table'>
        <div className="red-circle"></div>
        <div className='table-layout' id="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:'center'}}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
        displayCoin.slice(2,20).map((item, index)=>(
          <div className="table-layouts" key ={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + "-" + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0?'green':"red"}>
                {Math.floor(item.price_change_percentage_24h*100)/100}</p>
              <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
          </div>

        ))
        }
      </div>
    </div>
  )
}

export default Home
