import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

// components

import ResDanaDesa from "views/satudata_menu/ResDanaDesa";
import ListDanaDesa from "views/satudata_menu/ListDanaDesa";
import GrafikDanaDesa from "views/satudata_menu/GrafikDanaDesa";


export default function DanaDesa() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikDanaDesa tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResDanaDesa tahun={tahun} />
        </div>
        {/* <div className="w-full mb-8 xl:mb-0 px-4">
          <ListDanaDesa />
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
