import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import HomeContextProvider from "./context/HomeContext";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() { 
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <HomeContextProvider>
          <AppRouter />   
          <ToastContainer />
        </HomeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
