import Home from "./Pages/HomePage";
import { Route, Routes, HashRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import History from "./Pages/History";
import Borrow from "./Pages/BorrowLendPage";
import Login from "./Pages/LoginPage";
import Account from "./Pages/Account";
let usersData = JSON.parse(localStorage.getItem("usersData"));
function App() {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/"
              element={
               
                usersData ? 
                <CommonContainer> <Home/>   </CommonContainer> : 
                <Login/>
               
            } />

              <Route path="/history"
              element={<CommonContainer>
                <History/>
              </CommonContainer>} />

              <Route path="/borrow&lend"
              element={<CommonContainer>
              <Borrow/>
              </CommonContainer>} />

              <Route path="/account"
              element={<CommonContainer>
              <Account/>
              </CommonContainer>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;