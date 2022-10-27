import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import CourseDetails from './component/CourseDetails';
import Home from './component/Home';
import Login from './component/Login';
import Primium from './component/Primium';
import Profile from './component/Profile';
import Register from './component/Register';
import Main from './Layout/Main';
import Courses from './component/Courses';
import Blog from './component/Blog';
import Faq from './component/Faq';
import PrivetRouts from './component/PrivetRouts';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('http://localhost:5000/courses')
        },
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)

        },
        {
          path: '/courses/pd/:id',
          element: <PrivetRouts><Primium ></Primium></PrivetRouts>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/pd/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/Faq',
          element: <Faq></Faq>
        },




      ]
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
