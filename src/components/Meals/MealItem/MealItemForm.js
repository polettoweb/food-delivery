import Input from "../../UI/Input";
import classes from "./MealItemForm.module.scss";

const MealItemForm = props => {
  const inputProps = {
    id: "amount_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form className={classes.form}>
      <Input label="Amount" input={inputProps} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
