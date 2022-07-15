import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

// components

import ResPekerjaanUmum from "views/satudata_menu/ResPekerjaanUmum";
import ListPekerjaanUmum from "views/satudata_menu/ListPekerjaanUmum";
import GrafikPekerjaanUmum from "views/satudata_menu/GrafikPekerjaanUmum";


export default function PekerjaanUmum() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPekerjaanUmum tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResPekerjaanUmum tahun={tahun} />
        </div>
        {/* <div className="w-full mb-8 xl:mb-0 px-4">
          <ListPekerjaanUmum />
        </div> */}
      </div>
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}
