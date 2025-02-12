
// import { Map } from 'leaflet';
// import { MapContainer } from 'react-leaflet';
import styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Maps from './components/Map/Maps';



function App() {

  return (
    <div className={styles.App}>
    <Navbar/>
   <Hero/>
<Maps/>
   
    </div>
  )
}

export default App
