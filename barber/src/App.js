import './App.css';
import bigimg from './img/bigimg.webp'
import img10 from './img/img10.jpg'
import img1 from './img/img1.png'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'
import img9 from './img/img9.jpg'

function App() {
  
  return (
  
  <div className="App">

      <h1 className='first-title'>Our Traditional Barber Shop</h1>

      <img className="bigimg" src={bigimg} alt="bigimg" />

      <h2 className='title-2'>New York Barbers are award winning traditional barbers located in the heart of Berwick. With a New York theme throughout, our state-of-the-art barbershop allows guests to enjoy quality haircuts, beard trims, and shaves from our team of talented & experienced barbers. We are a walk-in only barber, so there is no appointment necessary. Whether it be an old school classic or a new ‘on trend’ cut, New York Barbers has you covered!</h2>

      <div className='grid-container'>

        <div className='grid-2'>

          <img className="img10" src={img10} alt="img10" />

          <img className="img1" src={img1} alt="img1" />

          <img className="img2" src={img2} alt="img2" />

          <img className="img3" src={img3} alt="img3" />

          <img className="img4" src={img4} alt="img4" />

        </div>

        <div className='grid-3'>

          <img className="img5" src={img5} alt="img5" />

          <img className="img6" src={img6} alt="img6" />

          <img className="img7" src={img7} alt="img7" />

          <img className="img8" src={img8} alt="img8" />
          
          <img className="img9" src={img9} alt="img9" />

        </div>

      </div>

    </div>

  );
}

export default App;