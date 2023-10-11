import React, {useEffect, createContext} from "react";
import {getAuth} from "firebase/auth";
import { StyleSheetManager } from 'styled-components';
import Navigation from "../navigation/navigation.component";
import Footer from "../footer/footer.component";
import { Outlet } from "react-router-dom";
import { selectAllCarsInfo } from "../../store/brand/brand.selector";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBrands } from "../../utils/fetch";
const handleSearch = (query) => {
    console.log(query)
  }

export const TokenContext = createContext(null);
const auth = getAuth(); 
const Root = () => {
  // let idToken = null; 

  
    
    // const [token, setToken] = useState(idToken);
    const dispatch = useDispatch(); 
    useEffect(() => {
        // Dispatch the thunk action when the component mounts
        dispatch(fetchAllBrands());
      }, [dispatch]);
    const allCarsInfo = useSelector(selectAllCarsInfo);
    
    
    return (
      // <TokenContext.Provider value={token} >
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'url'}>
          <div className="container">
              <Navigation handleSearch={handleSearch} className="navigationc"/>
              <div className="root-outlet"><Outlet  /></div>
              <Footer className="footer"/>
              {/* <button onClick={getCurrentUser123}>helloo123</button> */}
          </div>
        </StyleSheetManager>
      // </TokenContext.Provider>
    )

    
}

export default Root;