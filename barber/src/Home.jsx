import React from 'react'
import Rasm from './img/asadbek_header.webp'
import Logo from './img/photo_barber.jpg'
import '../src/Home.css'

function Home() {
  return (
    <header id='home'>
<div class="container">
 <div class="header-inner">
  <div class="logo-box">
    <a class="logo" href="./index.html">
      <img className='logoimg' src={Logo} alt="Site logo" />
       </a>
        <ul class="list">
         <li class="list-item"><a href="#home" class="list-link"> Home </a></li>
         <li class="list-item"><a href="#1234" class="list-link"> About us  </a></li>
         <li class="list-item"><a href="#Gala" class="list-link"> Gallary </a></li>
         <li class="list-item"><a href="#Servise" class="list-link"> Service </a></li>
         <li class="list-item"><a href="#" class="list-link"> Contact </a></li>
          </ul>
       </div> 
      <div class="header-btns">
     <div class="header-btn">Barber</div>
    <div class="burger">
      <span></span>
      <span></span>
      <span></span>               
    </div>
  </div>
</div>
</div>

<main>
 <section className="hero-king">
  <div className="container">
    <div className="hero">
      <div className="hero-info">
        <div className="hero-small-box-boss">
          <img className='logoimg-2' src={Rasm} alt="rasm" />
          <div className="hero-small-box">
            <p className="hero-desc">It’s not just a haircut, it’s an Experience.</p>
            <h1 className="hero-title">Find the btes version of yourself.</h1>
            <p className="hero-desc-2">For males who appreciate premium quality and flawless look.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 </section>
</main>
    </header>
  )
}

export default Home;