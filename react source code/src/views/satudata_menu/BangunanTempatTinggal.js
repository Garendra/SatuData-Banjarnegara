import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';
import {API_URL} from '../../config/config';

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import ResBangunanTempatTinggal from "views/satudata_menu/ResBangunanTempatTinggal";
import ListBangunanTempatTinggal from "views/satudata_menu/ListBangunanTempatTinggal";
//import ListAnggotaPertahananSipil from "views/satudata_menu/ListAnggotaPertahananSipil";
import GrafikBangunanTempatTinggal from "views/satudata_menu/GrafikBangunanTempatTinggal";


export default function BangunanTempatTinggal() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikBangunanTempatTinggal />
        </div>
        <div className="w-full mb-8 xl:mb-0 px-4">
          <ListBangunanTempatTinggal  tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResBangunanTempatTinggal  tahun={tahun} />
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
