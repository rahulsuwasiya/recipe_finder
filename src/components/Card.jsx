 import { useNavigate } from "react-router-dom";

export default function Card({item}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meal/${item.idMeal}`);
  } 
  

  return (
    <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 ">
      <img
        className="w-full h-44 object-cover"
        src={item.strMealThumb}
        alt="Card top"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold text-[#263238] dark:text-white mb-2">
          {item.strMeal}
        </h5>
        <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
          Discover the flavors of this delicious recipe and learn how to prepare it step-by-step.
        </p>
        <button onClick={() => navigate(`/meal/${item.idMeal}`)} className="px-4 py-2 bg-[#FF6F61]  text-white text-sm font-medium rounded hover:bg-[#009688] transition duration-200">
          View Recipe
        </button>
      </div>
    </div>
  );
}
