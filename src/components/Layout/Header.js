import meals from "../../assets/meals.jpeg";
import classes from "./Header.module.scss";

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Delivery</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Table with food" />
      </div>
    </>
  );
};

export default Header;
