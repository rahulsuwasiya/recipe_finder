import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMealDetail();
  }, [id]);

  const fetchMealDetail = async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    setMeal(data.meals[0]);
    setLoading(false);
  };

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  // Prepare ingredients + measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div>
      <Navbar/>
    <div className="max-w-5xl mt-25 mx-auto my-10 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 space-y-6">
  {/* Top Section: Image and Basic Info */}
  <div className="flex flex-col md:flex-row gap-6">
    
    {/* Left: Image + Ingredients */}
    <div className="md:w-1/2 flex flex-col items-center">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-64 h-64 object-cover rounded-xl shadow-md border border-gray-100 mb-4"
      />

      <div className="w-full">
        <h2 className="text-lg font-semibold mb-2 text-center">Ingredients</h2>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          {ingredients.map((item, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-md">{item}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Right: Meal Info */}
    <div className="md:w-1/2 space-y-4 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-800">{meal.strMeal}</h1>

      <div className="flex flex-wrap gap-2 text-sm font-medium">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Category: {meal.strCategory}
        </span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          Area: {meal.strArea}
        </span>
        {meal.strTags && (
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
            Tags: {meal.strTags.split(',').join(', ')}
          </span>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Instructions</h2>
        <p className="text-sm text-gray-700 whitespace-pre-line">{meal.strInstructions}</p>
      </div>

      {meal.strYoutube && (
        <div>
          <h3 className="text-md font-semibold">Video Tutorial</h3>
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      )}

      {meal.strSource && (
        <div>
          <strong className="text-sm">Source:</strong>{' '}
          <a
            href={meal.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            {meal.strSource}
          </a>
        </div>
      )}
    </div>
  </div>
</div>
</div>


  );
};

export default MealDetail;
