import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";

import { Profile } from './pages/Profile.tsx';
import { InitialPage } from './pages/InitialPage.tsx';
import { ContainerCentral } from './pages/ContainerCentral.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from './components/route/AuthProvider.tsx';
import { ProtectedComponent } from './components/route/ProtectedRoute.tsx';
import { Feed } from './pages/Feed.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedComponent>
        <InitialPage />
      </ProtectedComponent>
    ),
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/:profileId",
    element: (
      <ContainerCentral>
        <Profile />
      </ContainerCentral>
    ),
  },
  {
    path: "/home",
    element: (
      <ContainerCentral>
        <Feed />
      </ContainerCentral>
    ),
  },
  {
    path: "/foruns",
    element: (
      <ContainerCentral>
        <div>foruns</div>
      </ContainerCentral>
    ),
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
