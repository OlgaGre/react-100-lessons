//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Heder";
import ProfileComp from "./components/ProfileComp";
import Nav from "./components/Nav";

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
