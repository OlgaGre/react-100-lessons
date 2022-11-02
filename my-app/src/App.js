//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Heder";
import ProfileComp from "./components/profileComp/ProfileComp";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <ProfileComp />
    </div>
  );
};

export default App;
// export default Header;
