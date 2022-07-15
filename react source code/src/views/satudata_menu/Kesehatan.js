import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';
import {API_URL} from '../../config/config';

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import ResKesehatan from "views/satudata_menu/ResKesehatan";
import ListKesehatan from "views/satudata_menu/ListKesehatan";
import GrafikKesehatan from "views/satudata_menu/GrafikKesehatan";


export default function Kesehatan() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
       <div className="w-full xl:w-12/12 px-4">
          <GrafikKesehatan />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResKesehatan tahun={tahun} />
        </div>
        {/* <div className="w-full mb-8 xl:mb-0 px-4">
          <ListKesehatan />
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
