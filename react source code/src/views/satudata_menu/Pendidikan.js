import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';
import {API_URL} from '../../config/config';

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import ResPendidikan from "views/satudata_menu/ResPendidikan";
import ListPendidikan from "views/satudata_menu/ListPendidikan";
import GrafikPendidikan from "views/satudata_menu/GrafikPendidikan";
//import MenuDinas from "views/satudata_menu/MenuDinas";


export default function Pendidikan() {
  let { tingkat, tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
{/*        <div className="w-full xl:w-12/12 px-4">
          <MenuDinas />
        </div> */}
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPendidikan />
        </div>
        <div className="w-full mb-8 xl:mb-0 px-4">
          <ListPendidikan tingkatPendidikan={tingkat} tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResPendidikan tingkatPendidikan={tingkat} tahun={tahun} />
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
