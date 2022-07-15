import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';
import {API_URL} from '../../config/config';

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
//import ResMetadata from "views/satudata_menu/ResMetadata";
//import DataBdaDinkes from "views/satudata_menu/DataBdaDinkes";
import ListData from "views/satudata_menu/ListData";
//import ListAnggotaPertahananSipil from "views/satudata_menu/ListAnggotaPertahananSipil";
//import GrafikBda from "views/satudata_menu/GrafikBda";
//import MetaData from "views/satudata_menu/MetaData";
//import MetaData from "views/satudata_menu/MetaData";


export default function Data() {
  let { objek_id } = useParams();
  let { tahun } = useParams();
  return (
    <>
      <div className="flex flex-wrap">
      {/*   <div className="w-full xl:w-12/12 px-4">
          <GrafikBda />
        </div> */}
        <div className="w-full mb-8 xl:mb-0 px-4">
          <ListData objek_id={objek_id} />
        </div>
        {/* <div className="w-full mb-8 xl:mb-0 px-4">
          <MetaData tahun={tahun} />
        </div> */}
       {/*  <div className="w-full xl:w-12/12 px-4">
          <ResMetadata  tahun={tahun} />
        </div> */}
        {/* <div className="w-full xl:w-12/12 px-4">
          <DataBdaDinkes  objek_id={objek_id} />
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
