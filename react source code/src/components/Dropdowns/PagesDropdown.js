import React from "react";
// import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
    
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
       Menu
      </a>
  
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Admin Layout
        </span>
        {/* <Link
          to="/admin/dashboard"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Dashboard
        </Link> */}
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="../dbhcht_dashboard/" target="blank">
          Dashboard
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
         href="../dbhcht_opd/" target="blank">
          Aplikasi Rekam Data OPD
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="../dbhcht_backoffice/" target="blank">
          Aplikasi Monitoring
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="http://www.djpk.kemenkeu.go.id/wp-content/uploads/2021/01/PMK-206_PMK.07_2020-Penggunaan-Pemantautan-dan-Evaluasi-DBH-CHT.pdf" target="blank">
          Peraturan Terkait
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="../map/" target="_blank">
          Maps DBHCHT
        </a>
        {/* <Link
          to="/auth/register"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Register
        </Link> */}
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        
       
      </div>
    </>
  );
};

export default PagesDropdown;
