import './App.css';
import Hero from './components/Hero/Hero';
import JoinUs from './components/JoinUs/JoinUs';
import Project from './components/Project/Project';
import Reason from './components/Reason/Reason';
import Testimonila from './components/Testimonila/Testimonila';
function App() {
  return (
    <div className="App">
        <Hero/>
        <Project/>
        <Reason/>
        <Testimonila/>
        <JoinUs/>
    </div>
  );
}

export default App;
