import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

// components

import ResPeristiwaBencana from "views/satudata_menu/ResPeristiwaBencana";
import ListPeristiwaBencana from "views/satudata_menu/ListPeristiwaBencana";
import GrafikPeristiwaBencana from "views/satudata_menu/GrafikPeristiwaBencana";


export default function PeristiwaBencana() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPeristiwaBencana tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResPeristiwaBencana tahun={tahun} />
        </div>
        {/* <div className="w-full mb-8 xl:mb-0 px-4">
          <ListPeristiwaBencana />
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
