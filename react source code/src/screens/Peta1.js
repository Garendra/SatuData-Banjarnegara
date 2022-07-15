import React, {useState, useEffect, useRef, Fragment} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Axios from 'axios';

import './App.css';

import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationIcon } from '@heroicons/react/outline'


// import { data } from "autoprefixer";


// import {API_URL} from '../config/config';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  useParams
} from "react-router-dom";

export default function Peta1() {

  let { id } = useParams();

  const [positions, setPositions] = useState(null);
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [position, setPosition] = useState([]);

  useEffect(() => {
    checkPositions()
  }, []);

   
    
  const checkPositions = () => {
    try {
      Axios.get(`https://dbhcht.banjarnegarakab.go.id/lokasi_alokasi/api/list/m_objek_lokasi_alokasi`)
        .then(res => {
          const data = res.data.m_objek_lokasi_alokasi;
          setPositions(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  const handleBtnAnggota = id => {
    setPosition(positions.filter(res => res.id == id)[0])
    setOpen(true)
  };
  const positionCenter = [-7.370741958909392, 109.5973056704148];

  return (
    <>
      <Navbar transparent />
      <main className="informasi-page">
      <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-10 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-2/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                  {
                    <>
                      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    <p>{position.desa}</p>
                    </Dialog.Title>
                    
                    <div className="mt-2">
                      <p className="text-sm text-gray-700">
                      <p className="mb-2 font-semibold">{position.nama_lokasi}</p>
                      <p>{position.anggota}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
      
    <div style={{ width: '100%', height: '100vh', zIndex: '1'  }}>
 {/* <Navbar/> */}
              <div className="text-center mt-1">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                   Sebaran Alokasi DBHCHT
                  </h3>
              </div>
     
 {/*          <button ><a 
        className="bg-indigo-600 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        type="button" href="./tombol/Bidang"
        target="_blank"> Dinas Pertanian</a></button>
      <br></br>
        <button ><a
        className="bg-indigo-600  border-opacity-5 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        type="button" href="Map"
        target="_blank"> Dinas Kesehatan</a></button> */}
      <br></br> 
       
    <MapContainer className="border-6 p-4 object-right-bottom z-1" center={positionCenter} zoom={12} scrollWheelZoom={false} style={{ width: '100%', height: '88vh' ,zIndex: '10'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position, key) => (
          <Marker key={key} position={(position.latitude_longitude) ? [parseFloat(position.latitude_longitude.split(', ')[0]), parseFloat(position.latitude_longitude.split(', ')[1])] : [1,1]}>
            <Popup>
              <p><center>{position.desa}</center></p>
              <p><center>{position.nama_lokasi}</center></p>              
              <div className="flex justify-center">
             <button className="mx-auto bg-blue-600 active:bg-fixed uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none  ease-linear transition-all duration-150" type="button" onClick={() => handleBtnAnggota(position.id)}> 
                Anggota</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

    
      
      </div>
                    </>
                  }
                    </div>
                  </div>
                  
                 

                  <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                   


                  </h3>
                  <br></br>
                </div>
                 
                </div>
              
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">

                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    


                    
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
