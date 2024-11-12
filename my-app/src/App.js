// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './components/data';

function App() {
  const dataElements = data.map((items)=>{
    return(
      <Card className="card-app"
            key={items.id}
            // title= {items.title}
            // location={items.location}
            // rating = {items.stats.rating}
            // pricing = {items.pricing}
            // img={items.img}
            // name={items.name}
            // review={items.review}
            {...items}
      />
    )
  })
  return(
    
    <div> 
      <Navbar/>
      <Hero />
      <div className='site'> 
        {dataElements}
      </div>
      <Footer />
    </div>
  )
}

export default App;
