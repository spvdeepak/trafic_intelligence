import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [userLatitude, setUserLatitude] = useState(null);
    const [userLongitude, setUserLongitude] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLatitude(position.coords.latitude);
                setUserLongitude(position.coords.longitude);
            }, (error) => {
                console.error('Error getting location:', error);
            });
        } else {
            console.warn('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div className='flex-row justify-center items-center h-screen font-primary bg-[#00ffff] p-4'>

            {/* <div className="absolute top-0 text-3xl font-title mt-24 font-semibold uppercase">Traffic Intelligence</div> */}
            
            <h1 className="text-2xl font-semibold mb-4 font-title text-center">Current Coordinates</h1>

            <div className="mb-4">
                <label className="uppercase block text-gray-600 text-xl pb-3">Lattitude</label>
                <input type="text" name="latitude" value={userLatitude} disabled className='w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500 bg-white'/>
            </div>
            <div className="mb-4">
                <label className="uppercase block text-gray-600 text-xl pb-3">Lattitude</label>
                <input type="text" name="longitude" value={userLongitude} disabled className='w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500 bg-white'/>
            </div>

            <h1 className="text-2xl font-semibold mb-4 font-title text-center">Enter Destination coordinates</h1>

            <div className="mb-4">
                <label className="uppercase block text-gray-600 text-xl pb-3">Lattitude</label>
                <input type="text" name="destination_latitude" className="w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500" autocomplete="off" required />
            </div>

            <div className="mb-4">
                <label className="uppercase block text-gray-600 text-xl pb-3">Longitude</label>
                <input type="text" name="destination_latitude" className="w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500" autocomplete="off" required />
            </div>

            <button type="submit" className="bg-blue-500 font-title tracking-wider uppercase hover:bg-blue-600 text-white font-semibold rounded-md py-4 px-4 left-0 right-0 absolute bottom-8 w-[90%] m-auto">Start Emergency Trip</button>

        </div>
    );
}
export default Dashboard;