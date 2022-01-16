import { Route, Routes } from 'react-router';
import './App.css';
import BackEnd from './Components/BackEnd';
import FrontEnd from './Components/FrontEnd';
import Home from './Components/Home';
import LabTabs from './Components/LabTabs';

function App() {
  return (
    <div className="App">
      <LabTabs />
      <Routes>
        <Route path="/FrontEnd" element={<FrontEnd />} />
        <Route path="/BackEnd" element={<BackEnd />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
