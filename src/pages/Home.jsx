import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomMeals(12);
  }, []);

  const fetchRandomMeal = async (retries = 2) => {
    while (retries > 0) {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        return data.meals[0];
      } catch (err) {
        retries--;
      }
    }
    return null;
  };

  const fetchRandomMeals = async (count = 12) => {
    let allMeals = [];

    // First batch for quick render
    const firstBatch = await Promise.all(
      Array(4).fill().map(() => fetchRandomMeal())
    );
    allMeals = firstBatch.filter(Boolean);
    setRecipes(allMeals);
    setLoading(false); // Stop showing skeleton after first batch

    // Second batch loads in background
    const secondBatch = await Promise.all(
      Array(count - 4).fill().map(() => fetchRandomMeal())
    );
    allMeals = [...allMeals, ...secondBatch.filter(Boolean)];
    setRecipes(allMeals);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-25 flex flex-wrap justify-center gap-6 p-4">
        {loading && recipes.length === 0 ? (
          [...Array(4)].map((_, index) => (
            <div key={index} className="w-72 h-96 bg-gray-200 animate-pulse rounded-lg"></div>
          ))
        ) : (
          recipes.map((item) => (
            <Card key={item.idMeal} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
