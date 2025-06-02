import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Story from './containers/Story';
import Membership from './containers/Membership';

function App() {
  return (
    <Router basename="/SoundBath">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </Router>
  );
}
export default App