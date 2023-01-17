import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Heder";
import ProfileComp from "./components/main/profileComp/ProfileComp";
import Dialogs from "./components/main/dialogs/Dialogs";
import Nav from "./components/nav/Nav";
import News from "./components/main/news/News";
import Music from "./components/main/music/Music";
import Settings from "./components/main/settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Nav />

        <div className="appWrapperContent">
          <Routes>
            <Route
              path="/profile"
              element={
                <ProfileComp store={props.store} dispatch={props.dispatch} />
              }
            />
            <Route
              path="/messagers/*"
              element={
                <Dialogs store={props.store} dispatch={props.dispatch} />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
// export default Header;
