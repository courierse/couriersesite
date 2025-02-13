import styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Maps from './components/Map/Maps';
import Cards from './components/Cards/Cards';
import ContactForm from './components/ContactForm/ContactForm';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
// import Hero from "./components/Hero/Hero";



function App() {

  return (
    <div className={styles.App}>
    <Navbar/>
   <Hero/>
<Maps/>
<Cards/>
<ContactForm/>
   <Faq/>
   <Footer/>
    </div>
  )
}

export default App