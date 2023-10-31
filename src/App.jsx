import React, {useEffect, createContext} from "react";
import { useDispatch } from "react-redux";
import { StyleSheetManager } from 'styled-components';
import { fetchAllBrands } from "./utils/fetch";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./routes/footer/footer.component";
import { Outlet } from "react-router-dom";

export const TokenContext = createContext(null);
const App = () => {
  const dispatch = useDispatch(); 
    useEffect(() => {
      const handleBeforeUnload = () => {
        localStorage.removeItem("brands");
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    }, [])
    useEffect(() => {
      // Dispatch the thunk action when the component mounts
      dispatch(fetchAllBrands());
    }, [dispatch]);

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'url'}>
          <div className="container">
              <Navigation className="navigation"/>
              <div className="root-outlet"><Outlet  /></div>
              <Footer className="footer"/>
          </div>
        </StyleSheetManager>
    )
}

export default App;