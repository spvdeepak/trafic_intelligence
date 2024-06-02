import React, { useEffect, useRef, useState } from 'react';
import * as turf from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Traffic = () => {
  const mapContainerRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3B2ZGVlcGFrMDMiLCJhIjoiY2x2anZoeDBtMW9tOTJsbnpvbjE0c2wwYSJ9.2c3PFM5xlXyibdkBCKVfAA';
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0], // Default center, will be updated later
      zoom: 14,
    });

    // Get user's live location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]); // Reverse order because Mapbox GL expects [lng, lat]
          map.setCenter([longitude, latitude]);
        },
        error => {
          console.error('Error getting user location:', error);
          setError(error.message); // Store error message
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Example coordinates
      const point1 = [userLocation[0], userLocation[1]]; // Use user's live location
      const point2 = [12.873644, 80.078534]; // Update with another live location coordinates

      function calculateDistance(point1, point2) {
        const from = turf.point(point1);
        const to = turf.point(point2);
        const options = { units: 'kilometers' };
        const distance = turf.distance(from, to, options);
        return distance;
      }

      const distance = calculateDistance(point1, point2);
      console.log(point1)
      console.log('Distance:', distance);
    }
  }, [userLocation]);

  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen font-primary bg-purple-300'>
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-title mt-12 font-semibold uppercase ">Traffic Intelligence</div>
          <div className="text-md font-title mt-2 mb-10 font-semibold">IST Anna University</div>
        </div>
        <div className='bg-[#fdfefe] w-full h-full rounded-t-[35px] p-8'>
          <h1 className="text-2xl font-semibold mb-4 font-title2 border-b-2 pb-3 pt-6">Signals Identified</h1>
          <div className='flex items-center justify-center flex-col'>
            <div className="border p-4 py-8 w-[100%] font-primary m-2 bg-green-200 rounded-xl flex">
              <p className='text-xl block font-medium'>Chemistry Dept Signal</p>
              <p className='text-md ml-auto font-medium items-center justify-center flex'>53 mts</p>
            </div>
            <div className="border p-4 w-[100%] font-primary m-2 bg-purple-200 rounded-xl">
              <p className='text-xl '>MBA Dept Signal</p>
            </div>
            <div className="border p-4 w-[100%] font-primary m-2 bg-purple-200 rounded-xl">
              <p className='text-xl '>Vivek Audi Signal</p>
            </div>
            <div className="border p-4 w-[100%] font-primary m-2 bg-purple-200 rounded-xl">
              <p className='text-xl '>Red Building Signal</p>
            </div>
            {/* <div className='border p-4 w-[100%] font-primary m-2 bg-purple-200 rounded-xl'>
              <p className='text-xl '>Main Gate Signal</p>
            </div> */}
          </div>
          {error && <p className='hidden'>Error: {error}</p>}
          <div ref={mapContainerRef} style={{ width: '100%', height: '400px', display: 'none' }} />
          <a href='http://maps.google.com/maps?q=13.0110,80.2354'>
            <button type="submit" className="bg-purple-500 font-title tracking-wider uppercase hover:bg-purple-600 text-white font-semibold rounded-md py-4 px-4 left-0 right-0 absolute bottom-8 w-[90%] m-auto">GET ROUTE</button>
          </a>
        </div>
      </div>
    </div >
  );
};

export default Traffic;
