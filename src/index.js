import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';
import ForgotPassword from './pages/forgotpassword';
import CreateAkun from './pages/register';
import Dashboard from './pages/dashboard';
import Transaction from './pages/transaction';
import Pendapatan from './pages/pendapatan';
import DataUser from './pages/dataUser';
import DetailUser from './component/detailUser';
import { getUserToken } from './storage';
import PropTypes from 'prop-types'
import './index.css';


const Autenticated = ({element}) => {
  return getUserToken() ? element : <Navigate to='/' />;
}
Autenticated.propTypes ={
  element: PropTypes.object
} 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/create',
    element: <CreateAkun />
  },
  {
    path: '/forgotPassword',
    element: <ForgotPassword />
  },
  {
    path: '/dashboard',
    element: <Autenticated element={<Dashboard />}/>
  },
  {
    path: 'transaction',
    element: <Autenticated element={<Transaction />}/>
  },
  {
    path: '/chart',
    element: <Autenticated element={<Pendapatan />}/>
  },
  {
    path: 'dataUser',
    element: <Autenticated element={<DataUser />}/>
  },
  {
    path: 'detailUser',
    element : <Autenticated element={<DetailUser />}/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
