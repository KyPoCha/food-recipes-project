import { Link } from "react-router-dom";

function Meal(props) {
  const { strMeal, idMeal, strMealThumb } = props;
  return (
    <div className="card" id={idMeal}>
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <span className="card-title">{strMeal}</span>
      <div className="card-content"></div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          See recipe
        </Link>
      </div>
    </div>
  );
}

export default Meal;
