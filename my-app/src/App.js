//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Heder";
 import ProfileComp from "./components/profileComp/ProfileComp";
import Dialogs from "./components/Dialogs/Dialogs";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <Nav />
      {/* <ProfileComp /> */}
      <div className="appWrapperContent">
        <Dialogs />
        {/* <ProfileComp /> */}
      </div>
    </div>
  );
};

export default App;
// export default Header;
