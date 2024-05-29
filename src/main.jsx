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
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import { HelmetProvider } from 'react-helmet-async';
import Update from './Pages/Update.jsx';
import FoodDetails from './Pages/FoodDetails.jsx';

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
        path: "/food/:id",
        element:<FoodDetails></FoodDetails>,
       
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
        element:<PrivateRoute>
     <MyFood></MyFood>
      </PrivateRoute>,
      },
      {
        path: "/update/:id",
        element:
        <PrivateRoute>
     <Update></Update>
      </PrivateRoute>
       ,
       
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
    </HelmetProvider>
 
    
  </React.StrictMode>,
)
