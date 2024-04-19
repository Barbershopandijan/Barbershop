import React from 'react'
import '../servises/Servise.css'
import First from './img/first_barber.jpg'
import second from './img/ikkichi.jpg'
import Change from './img/malumot.jpeg'

function Servise() {
  return (
    <div id='Servise' className='containerr'>
      <h2 className='cap'>This is our barbershop here are our services</h2>


      <div className="wrapper">


        <div className="cardfoll">
        <div className="card210">
            <div className="barber">
            <img src={First} alt="ddf"  className='barber1'/>
            </div>

            <div className="text">
                <p className='name'>Our best hairdresser</p>
                <p className='famous'>his name is Jake he is very famous because his work is very beautiful</p>
        <a className='b ' href="https://t.me/Ikromxonov">Messages</a>
            </div>

            

        </div>

            

        </div>

        <div className="card">
            <div className="barber">
            <img src={First} alt="ddf"  className='barber1'/>
            
            </div>

            <div className="text">
                <p className='name'>Our best hairdresser</p>
                <p className='famous'>his name is Paul he is very famous and ability your work no mistakes</p>
                <a className='b ' href="https://t.me/Ikromxonov">Messages</a>
            </div>
            
        

        </div>

        <div className="card1">
          <img src={Change} alt=""  className='change' />


        </div>

        <div className="cardfoll">
        <div className="card210">
            <div className="barber">
            <img src={second} alt="ddf"  className='barber1'/>
            </div>

            <div className="text">
                <p className='name'>Our best hairdresser</p>
                <p className='famous'>his name is Paul he is very famous and ability your work no mistakes</p>
                <a className='b ' href="https://t.me/Ikromxonov">Messages</a>
            </div>
            
        </div>

        </div>

        <div className="card">
            <div className="barber">
            <img src={second} alt="ddf"  className='barber1'/>
            </div>

            <div className="text">
                <p className='name'>Our best hairdresser</p>
                <p className='famous'>his name is Paul he is very famous and ability your work no mistakes</p>
                <a className='b ' href="https://t.me/Ikromxonov">Messages</a>
            </div>
            
        

        </div>

      </div>
      

    </div>
  )
}

export default Servise