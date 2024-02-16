import './App.css';
import Home from './Pages/Home';
import Membership from './Pages/Membership';
import About from './Pages/About';
import Contact from './Pages/Contact';
import WeightBalance from './Pages/WeightBalance';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/membership",
    element: <Membership />,
  },
  {
    path: "/wb",
    element: <WeightBalance />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
