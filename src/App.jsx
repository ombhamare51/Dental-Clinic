import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import About from './components/About';
import Departments from './components/Departments';
import Reviews from './components/Reviews';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Appointment from './components/Appointment';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <div>
          <Values />
          <About />
          <Departments />
          <Reviews />
          <Banner />
          <Blog />
          <Appointment />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
