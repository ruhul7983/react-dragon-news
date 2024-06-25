import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            {/* Login in with */}
            <div>
                <h2 className="text-3xl font-bold">Login with</h2>
                <div className="flex items-center py-2 px-6 justify-center mt-4 rounded-md border border-blue-700 gap-x-3">
                    <FaGoogle className="text-blue-300"></FaGoogle>
                    <h2 className="text-blue-300">Login with Google</h2>
                </div>
                <div className="flex items-center py-2 px-6 justify-center mt-4 rounded-md border border-gray-700 gap-x-3">
                    <FaGithub />
                    <h2 className="">Login with Google</h2>
                </div>
            </div>

            {/* Find Us On */}
            <div>
                <h2 className="text-3xl font-bold my-5">Find Us On</h2>
                <a href="">
                    <div className="flex items-center py-2 px-6 justify-start rounded-t-md border gap-x-3">
                        <FaFacebook />
                        <h2 >Facebook</h2>
                    </div>
                </a>
                <a href="">
                    <div className="flex items-center py-2 px-6 justify-start border-x  gap-x-3">
                        <FaTwitter />
                        <h2 >Twitter</h2>
                    </div>
                </a>
                <a href="">
                    <div className="flex items-center py-2 px-6 justify-start rounded-b-md border  gap-x-3">
                        <FaInstagram />
                        <h2 >Instagram</h2>
                    </div>
                </a>
            </div>
            {/* Q Zone */}
            <div className="bg-gray-500 py-2 mt-5 px-2 rounded-md">
                <h2 className="text-3xl font-bold mt-5">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;