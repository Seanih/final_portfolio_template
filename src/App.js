import HeroSection from './components/HeroSection';
import './App.scss';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
