import {Route, Routes} from "react-router-dom"
import CustomNavbar from './components/Home/CustomNavbar';
import Home from './Home.jsx';
import Sleep from './Sleep.jsx';
import Release from './Release.jsx';
import Breathe from './Breathe.jsx';
import Meditate from './Meditate.jsx';
import './styles/App.css'

function App() {

    return (
      <>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/release" element={<Release />} />
          <Route path="/breathe" element={<Breathe />} />
          <Route path="/meditate" element={<Meditate />} />
        </Routes>
      </>
    )
  }

export default App