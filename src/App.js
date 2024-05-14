import Component from './Components/Component.js';
import Home from './Components/Home.js';
import Main from './Components/main.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      
      <Routes>
      < Route exact path="/" element={<Home/>} />
      < Route exact path="/main" element={<Main/>} />
      < Route exact path="/component" element={<Component/>} />
      </Routes>
    </Router>
    </>  
     );
}

export default App;
