import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import './App.css';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// const routerDefination = createRoutesFromElements(
//   <Route>
//       <Route path= '/' element= {<HomePage />} />
//       <Route path= '/products' element= {<ProductPage />} />
//   </Route>
// );

const homeRouter= createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <HomePage /> },
      {path: '/products', element: <ProductPage />}
    ]
  },

]);

// const homeRouter= createBrowserRouter(routerDefination);

function App() {
  return (
    <RouterProvider router={homeRouter} />
  );
}

export default App;
