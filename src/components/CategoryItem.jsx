import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card" id={idCategory}>
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <span className="card-title">{strCategory}</span>
      <div className="card-content">
        <p>{strCategoryDescription.slice(0, 80)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          See category
        </Link>
      </div>
    </div>
  );
}
export default CategoryItem;
