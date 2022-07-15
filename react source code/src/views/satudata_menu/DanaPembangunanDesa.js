import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';
import {API_URL} from '../../config/config';

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import ResDanaPembangunanDesa from "views/satudata_menu/ResDanaPembangunanDesa";
import ListDanaPembangunanDesa from "views/satudata_menu/ListDanaPembangunanDesa";
//import ListAnggotaPertahananSipil from "views/satudata_menu/ListAnggotaPertahananSipil";
import GrafikDanaPembangunanDesa from "views/satudata_menu/GrafikDanaPembangunanDesa";


export default function DanaPembangunanDesa() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikDanaPembangunanDesa />
        </div>
       {/*  <div className="w-full mb-8 xl:mb-0 px-4">
          <ListDanaPembangunanDesa  tahun={tahun} />
        </div> */}
        <div className="w-full xl:w-12/12 px-4">
          <ResDanaPembangunanDesa  tahun={tahun} />
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
