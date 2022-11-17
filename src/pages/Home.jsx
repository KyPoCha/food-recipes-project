import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  console.log(navigate);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php/")
      .then((response) => response.json())
      .then((data) => {
        setCatalog(data.categories);
        setFilteredCatalog(
          search
            ? data.categories.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .includes(search.split("=")[1].toLowerCase())
              )
            : data.categories
        );
      });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {catalog.length === 0 ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default Home;
