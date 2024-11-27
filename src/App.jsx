import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DefaultLayout from './pages/DefaultLayout';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';

// context
import GlobalContext from "./contexts/GlobalContext.jsx"
import PostsList from './components/Posts/PostsList.jsx';


function App() {

  // render
  return (
    <>
      <GlobalContext.Provider value={{ PostsList }}>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/posts' element={<PostsPage />}></Route>
              <Route path='/posts/:slug' element={<PostPage />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='*' element={<NotFoundPage />}></Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider >
    </>
  );
};

export default App