import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/solutions', element: <Solutions /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
]);
