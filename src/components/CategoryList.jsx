import CategoryItem from "./CategoryItem";

function CategoryList(props) {
  const { catalog } = props;

  return (
    <>
      <div className="catalog-list">
        {catalog.map((item) => {
          return <CategoryItem key={item.idCategory} {...item} />;
        })}
      </div>
    </>
  );
}
export default CategoryList;
