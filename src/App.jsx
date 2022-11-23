import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PorsiCtxProvider from './app/context/PorsiContext';
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
<<<<<<< HEAD
            <Route path="/food/:id" element={<Detail />} />
=======
            <Route
              path="/home/:id"
              element={
                <PorsiCtxProvider>
                  <Detail />
                </PorsiCtxProvider>
              }
            />
>>>>>>> b0b0e01c38ccace56d991675f304c95d87e5f2e3
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
