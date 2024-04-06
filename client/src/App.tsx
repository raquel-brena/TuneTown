import Login from './pages/Login'
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {

  return (
    <div className="max-w-6xl">
      <GoogleOAuthProvider clientId="261384658112-lkecapjtglp4l818sppi3d3695jaml9k.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App
