import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';
import {API_URL} from '../../config/config';

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import ResPendidikanSmp from "views/satudata_menu/ResPendidikanSmp";
import ListPendidikanSmp from "views/satudata_menu/ListPendidikanSmp";
import GrafikPendidikanSmp from "views/satudata_menu/GrafikPendidikanSmp";
//import MenuDinas from "views/satudata_menu/MenuDinas";


export default function PendidikanSmp() {
  let { tingkat, tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
{/*        <div className="w-full xl:w-12/12 px-4">
          <MenuDinas />
        </div> */}
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPendidikanSmp />
        </div>
       {/*  <div className="w-full mb-8 xl:mb-0 px-4">
          <ListPendidikanSmp tingkatPendidikan={tingkat} tahun={tahun} />
        </div> */}
        <div className="w-full xl:w-12/12 px-4">
          <ResPendidikanSmp tingkatPendidikan={tingkat} tahun={tahun} />
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
