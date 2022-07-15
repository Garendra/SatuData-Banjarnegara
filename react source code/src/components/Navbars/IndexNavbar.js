/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              DBHCHT
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
    
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}

              <li className="flex items-center">
                {/* <Link
                  to="/admin/dashboard"
                  className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}
                  >
                  Dashboard
                  </Link> */}
                  <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
                  href="/dashboard/realisasi-per-opd/0" target="blank">
                  Dashboard
                  </a>
              </li>
              <li className="flex items-center">
                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"  
                href="../dbhcht_opd/" target="blank">
                Rekam Data OPD
                </a>
              </li>
              <li className="flex items-center">
                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white" 
                href="../dbhcht_backoffice/" target="blank">
                Monitoring
                </a>
              </li>
              <li className="flex items-center">
                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white" 
                href="http://www.djpk.kemenkeu.go.id/wp-content/uploads/2021/01/PMK-206_PMK.07_2020-Penggunaan-Pemantautan-dan-Evaluasi-DBH-CHT.pdf" target="blank">
                Peraturan Terkait
                </a>
              </li>
              <li className="flex items-center">
                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white" 
                href="../map/" target="_blank">
                Maps DBHCHT
                </a>
              </li>
              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/kabupatenbanjarnegara/"
                  target="blank"
                >
                  <i className="text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">instagram</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/bna_dinkominfo"
                  target="blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.youtube.com/channel/UCTbbEF2tvniXW06O-uzTDyQ"
                  target="blank"
                >
                  <i className="text-blueGray-400 fab fa-youtube text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">youtube</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
