//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Heder";
import Main from "./components/Main";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav />
   <Main />
    </div>
  );
};

export default App;
// export default Header;
