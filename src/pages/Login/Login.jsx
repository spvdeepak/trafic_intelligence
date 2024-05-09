import {Link} from "react-router-dom"
const Login = () => {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-col justify-center items-center h-screen font-primary bg-purple-300">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-title mt-20 font-semibold uppercase ">Traffic Intelligence</div>
                    <div className="text-md font-title mt-2 mb-16 font-semibold">DCSE Anna University</div>
                </div>
                <div className="p-8 w-full bg-[#fdfefe] h-full rounded-t-[35px]">
                    <h1 className="text-2xl font-semibold mb-4 font-title2 border-b-2 pb-3 pt-6">Ambulance Login</h1>
                    <form action="#" method="POST" className="mt-10">
                        <div className="mb-4">
                            <label for="username" className="uppercase block text-gray-600 text-xl pb-3">Vehicle No</label>
                            <input type="text" id="username" name="username" placeholder="TN28AB0202" className="uppercase tracking-wider w-full border border-gray-300 bg-[#f4f8fa] rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-purple-500 focus:border-2" autocomplete="off" required />
                        </div>

                        <div className="mb-4">
                            <label for="password" className="uppercase block text-gray-600 text-xl pb-3">Password</label>
                            <input type="password" id="password" placeholder="********" name="password" className="uppercase w-full border border-gray-300 bg-[#f4f8fa] rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-purple-500 focus:border-2" autocomplete="off" required />
                        </div>

                        {/* <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                                <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
                        </div> */}

                        {/* <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div> */}
                        <Link to="/dashboard">
                            <button type="submit" className="bg-purple-700 font-title tracking-wider uppercase hover:bg-purple-500 text-white font-semibold rounded-md py-5 px-4 w-full m-auto mt-4">Login</button>
                        </Link>
                    </form>

                    {/* <div className="mt-6 text-blue-500 text-center">
                        <a href="#" className="hover:underline">Sign up Here</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
};
export default Login;
