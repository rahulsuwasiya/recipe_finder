import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Explore = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // <-- NEW

  const handleSearch = async () => {
    if (query.trim() === "") return;
    setHasSearched(true); // <-- Set true when user searches

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    setMeals(data.meals || []);
  };

  return (
    <>
      <Navbar />
      <div className="mt-20 px-6 sm:px-10 lg:px-20 py-10 bg-gradient-to-b from-white to-blue-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Explore Recipes</h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for meals..."
            className="w-full sm:w-96 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Search
          </button>
        </div>

        {meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">{meal.strMeal}</h2>
                  <p className="text-sm text-gray-600 truncate">{meal.strArea} • {meal.strCategory}</p>
                  <a
                    href={`/meal/${meal.idMeal}`}
                    className="inline-block mt-3 text-blue-600 hover:underline text-sm"
                  >
                    View Recipe →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          hasSearched && (
            <p className="text-center text-gray-600 text-lg mt-6">
              No recipes found. Try something else!
            </p>
          )
        )}
      </div>
    </>
  );
};

export default Explore;
