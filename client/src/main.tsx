import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";

import { Profile } from './pages/Profile.tsx';
import { InitialPage } from './pages/InitialPage.tsx';
import { Home } from './pages/Feed.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from './components/route/AuthProvider.tsx';
import { ProtectedComponent } from './components/route/ProtectedRoute.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <ProtectedComponent>
        <InitialPage />
      </ProtectedComponent>,
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/:profileId",
    element: <Profile />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <GoogleOAuthProvider clientId="261384658112-lkecapjtglp4l818sppi3d3695jaml9k.apps.googleusercontent.com">
    <AuthProvider isSignedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
   </GoogleOAuthProvider>
  </React.StrictMode>
);
