import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Services} from "./pages/Services.jsx";
import {Contact} from "./pages/Contact.jsx";
import {AppLayout} from "./components/AppLayout.jsx";
import {Error} from "./components/Error.jsx"
import './App.css'
function App() {
const router = createBrowserRouter([  {
    path:"/",
    element : <AppLayout/>,
    errorElement:<Error/>,
   children: [
     {
      path:"/",
      element: <Home/>,
     },
       {
    path:"about",
    element : <About/>,
  },
       {
    path:"home",
    element : <Home/>,
  },
       {
    path:"services",
    element : <Services/>,
  },
       {
    path:"contact",
    element : <Contact/>,
  }
    ]
  }])


  return (
    
      <RouterProvider router = {router}/>
  
  )
}

export default App