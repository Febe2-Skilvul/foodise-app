import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Detail from './pages/detail/Detail';

import Home from './pages/home/Home';
import LandingPage from './pages/Landing-page/LandingPage';
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
            <Route path="/food/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
