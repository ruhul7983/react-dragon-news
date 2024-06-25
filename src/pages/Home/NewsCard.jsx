import userDefaultPic from '../../assets/user.png';
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { IoEyeOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
    const { title, thumbnail_url: image_url, details, _id } = news;
    return (
        <div className="border border-white rounded mt-4">
            <div className="flex justify-between bg-[#f3f3f334] rounded py-2 px-3">
                <div className="flex">
                    <img className="w-11 mr-3 rounded-full" src={userDefaultPic} alt="" />
                    <div>
                        <h1 className="text-black font-bold">Awlad Hossain</h1>
                        <p className="text-gray-900">2022-08-11</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Link>
                        < FaRegBookmark className="text-xl text-black"></FaRegBookmark>
                    </Link>
                    <Link >
                        <FaShareAlt className="text-xl text-black"></FaShareAlt>
                    </Link>
                </div>
            </div>

            <div className="py-3 px-3">
                <h2 className="font-bold text-xl">{title}</h2>
                <img className="w-full mt-4 max-h-96" src={image_url} alt="" />
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <br /> <Link to={`/news/${_id}`} className="text-[#ff8c47]">Read More</Link></p>
                        : <p>{details}</p>

                }
            </div>
            <div className="flex items-center justify-between px-3">
                <div className="flex gap-4">
                    <h1><div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div></h1>
                    <p>4.9</p>
                </div>
                <div className="flex items-center gap-4">
                    <IoEyeOutline />
                    <p>499</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;