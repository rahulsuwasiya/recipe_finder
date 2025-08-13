import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardCategory from "../components/CardCategory";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(url);
        response = await response.json();
        setCategories(response.categories);
    }

    console.log(categories)

    return (
        <div>
            <Navbar />
            <div className="pt-25 flex flex-wrap justify-center gap-6 p-4">
                {categories && categories.map((item) => (
                    <CardCategory key={item.idCategory} item={item} />
                ))}
            </div>
        </div>
    )

}

export default Categories;