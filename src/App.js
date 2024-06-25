
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Blogs from './pages/Blogs';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';
import Layout from './layouts/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    Aos.init();
},[])
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/gallary' element={<Gallary />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </Layout>
  );
}

export default App;
