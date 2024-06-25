import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photoUrl = form.get("photoUrl");
        const email = form.get("email");
        const password = form.get("password");
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .error(err=>{
            console.log(err.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleRegister}>

                <div className="mt-16 text-center max-w-lg mx-auto px-8 pb-14 bg-gray-600 rounded">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Register your account</h2>
                    <div className="text-left">
                        <h2 className="font-semibold mt-9">Your Name</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="name" id="" required placeholder="Enter you name" />
                    </div>
                    <div className="text-left">
                        <h2 className="font-semibold ">Photo Url</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="photoUrl" id="" placeholder="Photo Url" />
                    </div>
                    <div className="text-left">
                        <h2 className="font-semibold">Email Address</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="email" name="email" id="" required placeholder="Enter you email address" />
                    </div>
                    <div className="text-left ">
                        <h2 className="font-semibold">Password</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="password" name="password" id="" required placeholder="Enter you password" />
                    </div>
                    <button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Register</button>
                    <p className="mt-3 text-black">Already have an account? <Link to={'/login'} className="text-blue-300">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;