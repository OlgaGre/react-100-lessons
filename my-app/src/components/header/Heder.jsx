import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Social_media_icon_noun_33167_-_Modified.svg" />
      </div>
      <div>
        <h1>My first app</h1>
      </div>
    </header>
  );
};
export default Header;
