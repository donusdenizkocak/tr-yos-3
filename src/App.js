import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import HomeContextProvider from "./context/HomeContext";
import AuthContextProvider from "./context/AuthContext";
function App() { 
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <HomeContextProvider>
          <AppRouter />         
        </HomeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
