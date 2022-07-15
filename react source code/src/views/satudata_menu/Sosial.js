import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

// components

import ResSosial from "views/satudata_menu/ResSosial";
import ListSosial from "views/satudata_menu/ListSosial";
import GrafikSosial from "views/satudata_menu/GrafikSosial";


export default function Sosial() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikSosial tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResSosial tahun={tahun} />
        </div>
        {/* <div className="w-full mb-8 xl:mb-0 px-4">
          <ListSosial />
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
