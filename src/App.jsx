import { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { loginCtx } from './app/context/LoginContext';
import PorsiCtxProvider from './app/context/PorsiContext';
import TrackCtxProvider from './app/context/TrackContext';
import Layout from './layout/Layout';
import Category from './pages/category/Category';
import Detail from './pages/detail/Detail';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/home/Home';
import LandingPage from './pages/Landing-page/LandingPage';
import Profile from './pages/profile/Profile';
import RecipeItem from './pages/recipe/RecipeItem';
import Recipes from './pages/recipe/Recipes';
import Signup from './pages/signup/Signup';
import TrackingPage from './pages/tracking';

const App = () => {
  const { isLogin, setShow } = useContext(loginCtx);
  const RequireAuth = ({ children }) => {
    if (isLogin) {
      return <>{children}</>;
    }
    setShow(true);
    return <Navigate to={'/'} />;
  };
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  {' '}
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/category"
              element={
                <RequireAuth>
                  <Category />
                </RequireAuth>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/favorite"
              element={
                <RequireAuth>
                  <Favorites />
                </RequireAuth>
              }
            />
            <Route
              path="/recipe"
              element={
                <RequireAuth>
                  <Recipes />
                </RequireAuth>
              }
            />
            <Route
              path="/recipe/:id"
              element={
                <RequireAuth>
                  <RecipeItem />
                </RequireAuth>
              }
            />
            <Route
              path="/track"
              element={
                <RequireAuth>
                  <TrackCtxProvider>
                    <TrackingPage />
                  </TrackCtxProvider>
                </RequireAuth>
              }
            />
            <Route
              path="/home/:id"
              element={
                <RequireAuth>
                  <PorsiCtxProvider>
                    <Detail />
                  </PorsiCtxProvider>
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <PorsiCtxProvider>
                    <Profile />
                  </PorsiCtxProvider>
                </RequireAuth>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
