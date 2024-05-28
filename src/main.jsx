import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Root from './Root/Root';
import Login from './Pages/Login';
import Register from './Pages/Register';
import FeaturedFoods from './Pages/Home/FeaturedFoods';
import AvailableFood from './Pages/AvailableFood';
import AddFood from './Pages/AddFood';
import MyRequest from './Pages/MyRequest';
import MyFood from './Pages/MyFood';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import FirebaseProvider from './FirebaseProvider/FirebaseProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path: "/featuredFood",
        element:<FeaturedFoods></FeaturedFoods>,
      },
      {
        path: "/login",
        element:<Login></Login> ,
      },
      {
        path: "/register",
        element:<Register></Register> ,
      },
      {
        path: "/availableFood",
        element:<AvailableFood></AvailableFood>,
      },
      {
        path: "/addFood",
        element:<PrivateRoute>
          <AddFood></AddFood>
        </PrivateRoute>,
      },
      {
        path: "/myRequest",
        element:<MyRequest></MyRequest>,
      },
      {
        path: "/mylist",
        element:<MyFood></MyFood>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
    
  </React.StrictMode>,
)
