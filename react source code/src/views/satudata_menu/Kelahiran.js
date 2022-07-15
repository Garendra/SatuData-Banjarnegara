import React, {useState, useEffect} from "react";

// components

import ResKelahiran from "views/satudata_menu/ResKelahiran";
import GrafikKelahiran from "views/satudata_menu/GrafikKelahiran";


export default function Kelahiran() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikKelahiran/>
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResKelahiran/>
        </div>
      </div>
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}
