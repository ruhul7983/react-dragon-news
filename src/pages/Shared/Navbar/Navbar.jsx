import { Link } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleSignOut = ()=>{
        logOut()
        .then(res=>{
            console.log(res);
        })
        .then(err=>{
            console.log(err.message);
        })
    }
    const links = <>
    <Link to='/'><li>Home</li></Link>
    <Link to='/'><li>About</li></Link>
    <Link to='/'><li>Career</li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-11 mr-3 rounded-full" src={userDefaultPic} alt="" />
                {
                    user?<button onClick={handleSignOut} className="btn btn-secondary">Logout</button>: <Link to={'/login'}><button className="btn btn-primary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;