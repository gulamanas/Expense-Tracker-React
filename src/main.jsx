import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import SignUpPage from './pages/auth/SignUpPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import Protected from './components/Protected.jsx';
import HomePage from './pages/home/HomePage.jsx';
import React from 'react';
import PaymentPage from './pages/payment/PaymentPage.jsx';
import MyCards from './pages/mycards/MyCards.jsx';
import Accounts from './pages/accounts/Accounts.jsx';
import Reports from './pages/reports/Reports.jsx';
import Settings from './pages/settings/Settings.jsx';
import Help from './pages/help/Help.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='signup' element={<SignUpPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='/' element={<Protected />}>
        <Route path='/' index element={<HomePage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/mycards' element={<MyCards />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/help' element={<Help />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
