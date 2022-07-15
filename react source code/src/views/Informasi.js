import React, {useState, useEffect} from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Axios from 'axios';
import {API_URL} from '../config/config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function Informasi() {

  let { id } = useParams();

    const [dataInformasi,setDataInformasi] = useState([]);

    useEffect(() => {
        checkInfo()
      }, []);
    
      const checkInfo = () => {
        try {
          Axios.get(`${API_URL}/api/view/cv_informasi/${id}`)
            .then(res => {
            
              const data = res.data;
              setDataInformasi(data.cv_informasi);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        } catch (error) {
          console.log(error);
        }
      }

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
                        (dataInformasi.gambar) ? (
                          <img
                          alt="..."
                          src={`http://dbhcht.banjarnegarakab.go.id/uploads/files/${dataInformasi.gambar.name}`}
                          className="w-full align-middle rounded-t-lg"
                          />
                    ) : <div></div>
                    }
                    </div>
                  </div>
                  
                 

                  <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                   {dataInformasi.judul}
                  </h3>
                  <br></br>
                </div>
                 
                </div>
              
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">

                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {dataInformasi.informasi}
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
