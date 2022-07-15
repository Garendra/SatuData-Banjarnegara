import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

// components

import ResPelanggaranKendaraan from "views/satudata_menu/ResPelanggaranKendaraan";
//import ListPelanggaranKendaraan from "views/satudata_menu/ListPelanggaranKendaraan";
import GrafikPelanggaranKendaraan from "views/satudata_menu/GrafikPelanggaranKendaraan";


export default function PelanggaranKendaraan() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPelanggaranKendaraan tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResPelanggaranKendaraan tahun={tahun} />
        </div>
       {/*  <div className="w-full mb-8 xl:mb-0 px-4">
          <ListPelanggaranKendaraan />
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
