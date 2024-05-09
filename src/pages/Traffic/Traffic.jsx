// import React, { useState } from 'react';

// const Traffic = () => {
//     const [startLat, setStartLat] = useState('');
//     const [startLng, setStartLng] = useState('');
//     const [endLat, setEndLat] = useState('');
//     const [endLng, setEndLng] = useState('');
//     const [distance, setDistance] = useState('');

//     const calculateDistance = () => {
//         if (startLat && startLng && endLat && endLng) {
//             const start = new window.google.maps.LatLng(parseFloat(startLat), parseFloat(startLng));
//             const end = new window.google.maps.LatLng(parseFloat(endLat), parseFloat(endLng));
//             const service = new window.google.maps.DistanceMatrixService();
//             service.getDistanceMatrix(
//                 {
//                     origins: [start],
//                     destinations: [end],
//                     travelMode: 'DRIVING',
//                 },
//                 (response, status) => {
//                     if (status === 'OK') {
//                         const result = response.rows[0].elements[0];
//                         if (result.status === 'OK') {
//                             setDistance(result.distance.text);
//                         } else {
//                             setDistance('Error calculating distance');
//                         }
//                     } else {
//                         setDistance('Error calculating distance');
//                     }
//                 }
//             );
//         }
//     };
//     return (
//         <div className='flex-row justify-center items-center h-screen font-primary bg-[#00ffff] p-4'>

//             {/* <div className="absolute top-0 text-3xl font-title mt-24 font-semibold uppercase">Traffic Intelligence</div> */}

//             <h1 className="text-2xl font-semibold mb-4 font-title text-center">Traffic Lights Found</h1>

//             <div className="mb-4 bg-white p-4 border-2 rounded-xl mt-10">
//                 <div className="font-title text-xl">Traffic Light 1</div>
//                 <div className="text-lg">Distance: 700 mts</div>
//             </div>

//             <div className="mb-4 bg-white p-4 border-2 rounded-xl">
//                 <div className="font-title text-xl">Traffic Light 1</div>
//                 <div className="text-lg">Distance: 700 mts</div>
//             </div>

//             <div className="mb-4 bg-white p-4 border-2 rounded-xl">
//                 <div className="font-title text-xl">Traffic Light 1</div>
//                 <div className="text-lg">Distance: 700 mts</div>
//             </div>

//             {/* <div>
//                 <label>Start Latitude:</label>
//                 <input type="text" value={startLat} onChange={(e) => setStartLat(e.target.value)} />
//             </div>
//             <div>
//                 <label>Start Longitude:</label>
//                 <input type="text" value={startLng} onChange={(e) => setStartLng(e.target.value)} />
//             </div>
//             <div>
//                 <label>End Latitude:</label>
//                 <input type="text" value={endLat} onChange={(e) => setEndLat(e.target.value)} />
//             </div>
//             <div>
//                 <label>End Longitude:</label>
//                 <input type="text" value={endLng} onChange={(e) => setEndLng(e.target.value)} />
//             </div>
//             <button onClick={calculateDistance}>Calculate Distance</button>
//             {distance && <div>Distance: {distance}</div>} */}
//         </div>

//     );
// }
// export default Traffic;