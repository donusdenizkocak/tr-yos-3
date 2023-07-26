import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import HomeContextProvider from "./context/HomeContext";
import AuthContextProvider from "./context/AuthContext";
import MyAccountForm from "./components/myAccountComponents/MyAccountForm";
function App() { 
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <HomeContextProvider>
          <AppRouter />  
          <MyAccountForm/>       
        </HomeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
