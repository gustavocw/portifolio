import './styles/components/app.sass'
import Home from './components/pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/pages/projectspage'
import Certificate from './components/pages/certificatescontent'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificate />} />
      </Routes>
    </Router>
  )
}

export default App;