import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card"; // adjust path as needed
import Navbar from "../components/Navbar";

const SpecificCategory = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryMeals = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
      );
      const data = await res.json();
      setMeals(data.meals);
      setLoading(false);
    };

    fetchCategoryMeals();
  }, [name]);

  return (
    <div>
        <Navbar/>
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">{name} Recipes</h1>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {meals.map((meal) => (
            <Card key={meal.idMeal} item={meal} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default SpecificCategory;
