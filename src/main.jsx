import React from 'react'
import SignedOut from './routes/signed-out/signed-out.component.jsx';
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react';
import ShowProfile from './routes/profile/show-profile/show-profile.component.jsx';
import {persistStore} from 'redux-persist'
import App from './App.jsx';
import NotFound from './components/not-found/not-found.component.jsx';
import "./App.css"
import { store } from './store/store.js';
import ErrorPage from './routes/error-page/error-page.component.jsx';
import Home from './routes/home/home.component.jsx';
import Cart from './routes/cart/cart.component.jsx';
import SignUpForm from './routes/sign-up/sign-up.component.jsx';
import Wishlist from './routes/wishlist/wishlist.component.jsx';
import SignInForm from './routes/sign-in/sign-in.component.jsx';
import PaymentSuccess from './routes/payment-success/payment-success.component.jsx';
import DummyHealthcheck from './routes/dummy-healthcheck/dummy-healthcheck.component.jsx';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import { Provider } from 'react-redux';
import Results from './routes/results/results.component.jsx';
import Profile from './routes/profile/profile.component.jsx';
import EditProfile from './routes/profile/edit-profile/edit-profile.component.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/> 
      },
      {
        path: "/dummyhealthcheck",
        element: <DummyHealthcheck/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/signup", 
        element: <SignUpForm/>
      },
      {
        path: "/signin",
        element: <SignInForm/>
      },
      {
        path: "/signout",
        element: <SignedOut/>
      },
      {
        path: "/wishlist",
        element: <Wishlist/>
      },
      {
        path: "/results", 
        element: <Results/>
      },
      {
        path: "/payment-success", 
        element: <PaymentSuccess/>
      },
      {
        path: "/profile", 
        element: <Profile/>,
        children: [

          {
            path: ":id",
            element: <ShowProfile />, 
        },
          {
            path: ":id/edit",
            element: <EditProfile />
          }
        ] 
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }, 

])

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </Provider>,
)
