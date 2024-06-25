import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div>
            <h1 className="text-2xl">All Categories</h1>

            {
                categories.map(category=><Link to={`category/${category.id}`} className="block py-3 px-5" key={category.id}>{category.name}</Link>)
            }
            
        </div>
    );
};

export default LeftSideNav;