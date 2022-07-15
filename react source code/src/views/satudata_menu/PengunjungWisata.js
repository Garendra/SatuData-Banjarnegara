import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

// components

import ResPengunjungWisata from "views/satudata_menu/ResPengunjungWisata";
import ListPengunjungWisata from "views/satudata_menu/ListPengunjungWisata";
import GrafikPengunjungWisata from "views/satudata_menu/GrafikPengunjungWisata";


export default function PengunjungWisata() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPengunjungWisata tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResPengunjungWisata tahun={tahun} />
        </div>
        {/* <div className="w-full mb-8 xl:mb-0 px-4">
          <ListPengunjungWisata />
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
