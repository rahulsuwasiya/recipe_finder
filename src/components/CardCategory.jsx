import { useNavigate } from "react-router";

export default function CardCategory({item}) {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${item.strCategory}`);
  };
  return (
    <div onClick={handleClick} className="w-72 bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
      <img
        className="w-full h-44 object-cover"
        src={item.strCategoryThumb}
        alt="Card top"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {item.strCategory}
        </h5>
        
      </div>
    </div>
  );
}
