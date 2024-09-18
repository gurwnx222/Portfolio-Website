import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "/Component/Navbar"; // Ensure this path is correct
import Text from "/Component/Text"; // Ensure this path is correct
import Image from "/Component/Image"; // Ensure this path is correct
import Feedback from "/Component/Feedback"; // Ensure this path is correct
import Home from "/Routes/Home";
import About from "/Routes/About";
import Contact from "/Routes/Contact";
import Courses from "/Routes/Courses";
import RollNo from "/Routes/RollNo";

import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Navbar/>
    },
   {
     path:'/home',
     element:<><Navbar /> <Home /></>
    },
    {
      path: "/about",
      element: <> <Navbar /> <About />,</> 
    },

    {
      path:"/contact",
      element: <> <Navbar /> <Contact />,</>
    },
    {
      path:"/courses",
      element: <> <Navbar /> <Courses />,</>
    },
    {
      path:"/rollno",
      element: <> <Navbar /> <RollNo />,</>
    }
  ]);

  return (
    <>

      <RouterProvider router={router} />
      <Text />
      <Image />
      <Feedback/>
  

   
    </>
  );
};

export default App