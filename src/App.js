import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import CourseDetails from './component/CourseDetails';
import Home from './component/Home';
import Login from './component/Login';
import Premium from './component/Premium';
import Profile from './component/Profile';
import Register from './component/Register';
import Main from './Layout/Main';
import Courses from './component/Courses';
import Blog from './component/Blog';
import Faq from './component/Faq';
import PrivetRouts from './component/PrivetRouts';
import Footer from './component/Footer';
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
          loader: () => fetch('https://educational-course-server.vercel.app/courses')
        },
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) => fetch(`https://educational-course-server.vercel.app/${params.id}`)

        },
        {
          path: '/courses/pd/:id',
          element: <PrivetRouts><Premium ></Premium></PrivetRouts>,
          loader: ({ params }) => fetch(`https://educational-course-server.vercel.app/courses/pd${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/Faq',
          element: <Faq></Faq>
        },
        {
          path: '/footer',
          element: <Footer></Footer>
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
