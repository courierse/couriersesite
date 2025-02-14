import styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Maps from './components/Map/Maps';
import Cards from './components/Cards/Cards';
import ContactForm from './components/ContactForm/ContactForm';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className={styles.App}>
      <section id="navs">
        <Navbar />
      </section>
      <section id="Hero">
        <Hero />
      </section>
      <section id="maps">
        <Maps />
      </section>
      <section id="cards">
        <Cards />
      </section>
      <section id="contactus">
        <ContactForm />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default App;
