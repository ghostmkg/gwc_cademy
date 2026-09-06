import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/layout/Layout';
import GwcHome from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refunds from './pages/Refunds';
import Internship from './pages/Internship';
import ProgramDetail from './pages/ProgramDetail';
import CareerSupport from './pages/CareerSupport';
import LiveProjects from './pages/LiveProjects';

function App() {
  return (
    <Router>
      {/* This invisible component resets the scroll position on every page change */}
      <ScrollToTop />
      
      <Routes>
        {/* The Layout component wraps everything inside this group */}
        <Route element={<Layout />}>
          
          <Route path="/" element={<GwcHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* New Course Routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/programs/:track" element={<ProgramDetail />} />
          <Route path="/career-support" element={<CareerSupport />} />
          <Route path="/projects" element={<LiveProjects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;