import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ResizableComponentsPage from './components/ResizeComponent';
import Add from './components/Add';

function App() {
  return (
 
<Router>
    <Routes>
      <Route path="/user" element={<Add  />} />
      <Route path="/" element={<ResizableComponentsPage />} />

    </Routes>
  </Router>

 
  
  );
}

export default App;
