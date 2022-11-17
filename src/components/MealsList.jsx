import Meal from "./Meal";
import { Link } from "react-router-dom";

function MealList(props) {
  const { meals } = props;
  return (
    <>
      <Link to={"/"} className="btn">
        Back to Categories
      </Link>
      <div className="meal-list">
        {meals.map((item) => {
          return <Meal key={item.idMeal} {...item} />;
        })}
      </div>
    </>
  );
}
export default MealList;
