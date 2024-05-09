import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Link} from "react-router-dom"

const Dashboard = () => {
    const [userLatitude, setUserLatitude] = useState(null);
    const [userLongitude, setUserLongitude] = useState(null);
    const [destination, setDestination] = useState('');
    const [destinationCoordinates, setDestinationCoordinates] = useState(null);

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

    // const handleSelect = async (address) => {
    //     try {
    //         const results = await geocodeByAddress(address);
    //         const latLng = await getLatLng(results[0]);
    //         setDestinationCoordinates(latLng);
    //         setDestination(address);
    //     } catch (error) {
    //         console.error('Error fetching coordinates:', error);
    //     }
    // };
    console.log(userLatitude, userLongitude);

    return (
        <div className='overflow-hidden'>
            <div className='flex flex-col justify-center items-center h-screen font-primary bg-purple-300'>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-title mt-12 font-semibold uppercase ">Traffic Intelligence</div>
                    <div className="text-md font-title mt-2 mb-10 font-semibold">DCSE Anna University</div>
                </div>
                <div className='bg-[#fdfefe] w-full h-full rounded-t-[35px] p-8'>
                    {/* <h1 className="text-2xl font-semibold mb-4 font-title2 border-b-2 pb-3 pt-6">Your Location</h1>
                    <div className="mb-4">
                        <input type="text" name="latitude" value={userLatitude} hidden required disabled className='w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500 bg-white' />
                        <input type="text" name="longitude" value={userLongitude} hidden required disabled className='w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500 bg-white' />
                    </div>  */}

                    <h1 className="text-2xl font-semibold mb-4 font-title2 border-b-2 pb-3 pt-6">Enter Destination</h1>

                    <div className='relative'>
                        <input required list='placeSuggestions' placeholder='Enter Destination'
                            className='mt-8 pr-16 tracking-wider w-full border border-gray-300 bg-[#f4f8fa] rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-purple-500 focus:border-2'
                        />
                        <datalist id='placeSuggestions'>
                            <option value="Anna University Guindy">Anna University, Sardar Patel Road, Guindy</option>
                            <option value="Anna University Kotturpuram">Anna University, Kotturpuram</option>
                            <option value="Anna University Bus Stop">Anna University-Gandhi Mandapam bus stop</option>
                            {/* <option value="Anna University Library">Anna University Central Library</option>
                                <option value="Anna GEM Park">Anna GEM Park School</option>
                                <option value="Anna Centinary Library">Anna Centinary Library</option> */}
                        </datalist>
                        <div>
                        </div>
                    </div>

                    {destinationCoordinates && (
                        <div className="mb-4">
                            <label className="uppercase block text-gray-600 text-xl pb-3">Destination Coordinates</label>
                            <input type="text" value={`${destinationCoordinates.lat}, ${destinationCoordinates.lng}`} disabled required className='w-full border border-gray-300 rounded-lg py-5 px-4 text-2xl focus:outline-none focus:border-blue-500 bg-white' />
                        </div>
                    )}
                    {/* <hr />
                    <p className='px-2 py-2'>Anna University, Sardar Patel Road, Guindy</p><hr />
                    <p className='px-2 py-2'>Anna University, Kotturpuram</p><hr/>
                    <p className='px-2 py-2'>Anna University-Gandhi Mandapam bus stop</p><hr/>
                    <p className='px-2 py-2'>Anna University Central Library</p><hr/> */}

                    <Link to='/traffic'>
                        <button type="submit" className="bg-purple-500 font-title tracking-wider uppercase hover:bg-purple-600 text-white font-semibold rounded-md py-4 px-4 left-0 right-0 absolute bottom-8 w-[90%] m-auto">Start Emergency Trip</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;

