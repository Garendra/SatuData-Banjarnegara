import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';
import {API_URL} from '../../config/config';

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import ResPendidikanSd from "views/satudata_menu/ResPendidikanSd";
import ListPendidikanSd from "views/satudata_menu/ListPendidikanSd";
import GrafikPendidikanSd from "views/satudata_menu/GrafikPendidikanSd";
//import MenuDinas from "views/satudata_menu/MenuDinas";


export default function PendidikanSd() {
  let { tingkat, tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
{/*        <div className="w-full xl:w-12/12 px-4">
          <MenuDinas />
        </div> */}
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPendidikanSd />
        </div>
       {/*  <div className="w-full mb-8 xl:mb-0 px-4">
          <ListPendidikanSd tingkatPendidikan={tingkat} tahun={tahun} />
        </div> */}
        <div className="w-full xl:w-12/12 px-4">
          <ResPendidikanSd tingkatPendidikan={tingkat} tahun={tahun} />
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
