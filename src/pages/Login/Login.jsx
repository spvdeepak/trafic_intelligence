const Login = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen font-primary bg-[#00ffff]"    >
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://img.freepik.com/premium-photo/photo-medic-ambulance-duty-highway-road_899504-2935.jpg" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>

                <div className="absolute top-0 text-3xl font-title mt-24 font-semibold uppercase">Traffic Intelligence</div>

                <div className="p-8 w-full">
                    <h1 className="text-2xl font-semibold mb-4 font-title text-center">Ambulance Login</h1>
                    <form action="#" method="POST" className="mt-10">
                        <div className="mb-4">
                            <label for="username" className="uppercase block text-gray-600 text-xl pb-3">Vehicle No</label>
                            <input type="text" id="username" name="username" placeholder="TN28AB0202" className="uppercase tracking-wider w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500" autocomplete="off" required />
                        </div>
                        
                        <div className="mb-4">
                            <label for="password" className="uppercase block text-gray-600 text-xl pb-3">Password</label>
                            <input type="password" id="password" placeholder="********" name="password" className="uppercase w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500" autocomplete="off" required />
                        </div>
                        
                        {/* <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                                <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
                        </div> */}
                        
                        {/* <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div> */}
                        
                        <button type="submit" className="bg-blue-500 font-title tracking-wider uppercase hover:bg-blue-600 text-white font-semibold rounded-md py-4 px-4 left-0 right-0 absolute bottom-8 w-[90%] m-auto">Login</button>
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
