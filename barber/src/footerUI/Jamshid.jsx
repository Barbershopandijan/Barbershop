import React from 'react'
import './Jamshid.css'
import Contactimg from './fotterimg/barberimg.jpg'
function Jamshid() {
  return (
    <footer>
        <div class='footer-rp'>


     <div className='response'>
            <div class='first mb-5'>
        <img class='footer-img' src={Contactimg} alt="img" />
        <p>Lorem ipsum is placeholder text commonly used in the <br/> graphic print and layouts and visual mockups.</p>
        <br/>
        <h4>Company: jamshidake06@gmaik.com</h4>
        <h4>Phone: (998)-916192826</h4>
        </div>

    <div class="second mb-5">

    <h3>INFORMATION</h3>
    <br/>
    <h5 class="mt-3">New Collection</h5>
    <h5 class="mt-3">About Store</h5>
    <h5 class="mt-3">Contact Us</h5>
    <h5 class="mt-3">Latest News</h5>
    <h5 class="mt-3">Our Sitemap</h5>
    <h5 class="mt-3">Orders History</h5>  
  </div>
  </div>





<div className='response2'>
  <div class="second mb-4">
    <h3>FOOTER MENU</h3>
    <br/>
    <h5 class="mt-3">Instagram profile</h5>
    <h5 class="mt-3">New Collection</h5>
    <h5 class="mt-3">Contact Us</h5>
    <h5 class="mt-3">Latest News</h5>
    <h5 class="mt-3">Terms & Conditions</h5>
    <h5 class="mt-3">Purchase Theme</h5>  
  </div>
  
  <div class="second mb-3">
    <h3>USEFUL LINKS</h3>
    <br/>
    <h5 class="mt-3">Instagram profile</h5>
    <h5 class="mt-3">New Collection</h5>
    <h5 class="mt-3">Contact Us</h5>
    <h5 class="mt-3">Latest News</h5>
    <h5 class="mt-3">Terms & Conditions</h5>
    <h5 class="mt-3">Purchase Theme</h5>  
  </div>
  </div>
        </div>
        
    </footer>
  )
}

export default Jamshid
