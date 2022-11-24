import { Profiler } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import LandingPage from './pages/Landing-page/LandingPage';
import Profile from './pages/profile/Profile';
import Signup from './pages/signup/Signup';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/profile' element={<Profile />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
