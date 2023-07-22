import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import HomeContextProvider from "./context/HomeContext";
import AuthContextProvider from "./context/AuthContext";
import CompareContextProvider  from "./context/CompareContext";
function App() { 
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <HomeContextProvider>
          <CompareContextProvider>
          <AppRouter />
          </CompareContextProvider>
        </HomeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
