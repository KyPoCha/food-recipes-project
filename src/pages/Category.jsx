import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../components/Preloader";
import MealList from "../components/MealsList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + name)
      .then((response) => response.json())
      .then((data) => data.meals && setMeals(data.meals));
  }, [name]);
  console.log(meals);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
}

export default Category;
