
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import HomeContextProvider from "./context/HomeContext";

function App() {
  return (
    <HomeContextProvider>
       <BrowserRouter>
      <AppRouter />
    </BrowserRouter> 
    </HomeContextProvider>
  
  );
}

export default App;
