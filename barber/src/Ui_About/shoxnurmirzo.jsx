import React from 'react'
import About from '../Ui_About/img/About.jpg'
import '../Ui_About/About.css'
import Telegram from  './img/telegramimg.png'
import Insta  from './img/insta.png'

function shoxnurmirzo() {
  return (
    <div className='i'>
        <h3>About our barber shop</h3>
      <div className="card">
      <div className="card3">
        <h2> Hello, welcome to our hair salon, we are proud to have new customers we are waiting for your arrival</h2>
        <p>Our barber shop has all kinds of hairstyles, come and try them yourself, and the prices are affordable. Our barber shop is designed for men, there are all the amenities here, samples of our work are shown in this gallery.</p> 


        <div className="contact">
        <button className='btn'>Book Now</button>
        <a className='a' href="https://t.me/Ikromxonov"><img src={Telegram} alt="telegram"  className='telegram'/></a>
        <a className='a' href="https://www.instagram.com/shox._2007"><img src={Insta} alt="telegram"  className='Insta'/></a>
      </div> 

      </div>
      <img src={About} alt="Aboutimage" className='card1img'/>

      </div>
      
     
    </div>
  )
}

export default shoxnurmirzo