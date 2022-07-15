import React, {useState, useEffect} from "react";

// components

import ResPermintaanTenagaKerja from "views/satudata_menu/ResPermintaanTenagaKerja";
import GrafikPermintaanTenagaKerja from "views/satudata_menu/GrafikPermintaanTenagaKerja";


export default function PermintaanTenagaKerja() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPermintaanTenagaKerja/>
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResPermintaanTenagaKerja/>
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
