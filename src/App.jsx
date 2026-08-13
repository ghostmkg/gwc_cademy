import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GwcHome from './pages/Home';

// Temporary placeholders for missing pages
const About = () => <div className="p-20 text-center text-3xl font-bold">About Page</div>;
const Contact = () => <div className="p-20 text-center text-3xl font-bold">Contact Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component wraps everything inside this group */}
        <Route element={<Layout />}>
          
          <Route path="/" element={<GwcHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* We will add more routes here like /courses and /courses/:id */}
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;