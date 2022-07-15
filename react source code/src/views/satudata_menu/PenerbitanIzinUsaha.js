import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

// components

import ResPenerbitanIzinUsaha from "views/satudata_menu/ResPenerbitanIzinUsaha";
import ListPenerbitanIzinUsaha from "views/satudata_menu/ListPenerbitanIzinUsaha";
import GrafikPenerbitanIzinUsaha from "views/satudata_menu/GrafikPenerbitanIzinUsaha";


export default function PenerbitanIzinUsaha() {
  let { tahun } = useParams();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
          <GrafikPenerbitanIzinUsaha tahun={tahun} />
        </div>
        <div className="w-full xl:w-12/12 px-4">
          <ResPenerbitanIzinUsaha tahun={tahun} />
        </div>
        {/* <div className="w-full mb-8 xl:mb-0 px-4">
          <ListPenerbitanIzinUsaha />
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
