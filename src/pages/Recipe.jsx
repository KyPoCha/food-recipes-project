import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((response) => response.json())
      .then((data) => data && setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table className="highlight">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                frameborder="0"
                title={id}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
      <Link to={`/category/${recipe.strCategory}`} className="btn">
        Back
      </Link>
    </>
  );
}

export default Recipe;
