import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


import { useRoutes } from 'react-router-dom';

import Home from './home/Home';
import MainLayout from './layout/MainLayout';
 import Login from './login/Login';
import Error404 from './pages/error/Error404';
import { AuthProvider } from './context/AuthContext';
import ProtectedRouter from './components/ProtectedRouter';
import Register from './register/Register';



function App() {
   const routes = useRoutes([
    
  {element:<MainLayout/>
    ,children:[

    {
      path:"/login",
      element:<Login/>
   },
   {
     path:"/register",
    element:<Register/>

   },
  {
    path:"/",
   element:
   <ProtectedRouter><Home/></ProtectedRouter>
   

  },
  {
    path:"/*",
    element:<Error404/>
  }
  ]
  }
  ]);

  return (
    <>
    
      <AuthProvider>
        {routes}
      </AuthProvider>
    </>
  )
}

export default App
