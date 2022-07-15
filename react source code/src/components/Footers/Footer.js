import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6" id="tentang">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">SEKSI STATISTIK</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN BANJARNEGARA
              </h5>
             {/*  <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div> */}
            </div>
            
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-row items-top mb-6">
                <div className="">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    KONTAK KAMI
                  </span>
                  <h6>
                    Jl. A. Yani No. 16, Krandegan, Kec. Banjarnegara, Banjarnegara, Jawa Tengah 53414  
                  </h6>
                  <h6 className="mt-2">
                    0286-591218 Fax. 0286-591187<br/>
                    dinkominfo@banjarnegarakab.go.id <br/>
                    Sms Center : 081-228-124447
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} SEKSI STATISTIK DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN BANJARNEGARA{" "}
            {/*     <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
             
                </a> */}
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
