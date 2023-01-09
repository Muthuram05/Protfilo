import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import JoinUs from './components/JoinUs/JoinUs';
import Project from './components/Project/Project';
import Reason from './components/Reason/Reason';
import Testimonila from './components/Testimonila/Testimonila';
import ScrollButton from './components/ScrollButton/ScrollButton';
function App() {
  return (
    <div className="App">
        <Hero/>
        <Project/>
        <ScrollButton />
        <Reason/>
        <Testimonila/>
        <JoinUs/>
        <Footer/>

    </div>
  );
}

export default App;
