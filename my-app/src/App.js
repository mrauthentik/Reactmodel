// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return(
    
    <div> 
      <Navbar/>
      <Hero />
      <Card 
       img="/images/photo (1).jpg"
       name="Alisa Vanessa"
       country="Korea"
       pricing="$146"
      />
     
      <Footer />
    </div>
  )
}

export default App;
