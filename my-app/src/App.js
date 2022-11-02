import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Heder";
import ProfileComp from "./components/main/profileComp/ProfileComp";
import Dialogs from "./components/main/dialogs/Dialogs";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Nav />

        <div className="appWrapperContent">
          <Routes>
            <Route path="/profile" element={<ProfileComp/>} />
            <Route path="/messagers" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
// export default Header;
