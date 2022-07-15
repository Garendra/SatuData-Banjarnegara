import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import KinerjaOpd from "views/grafik/KinerjaOpd";
import KinerjaOpdTable from "views/grafik/KinerjaOpdTable";
import TabelSemester from "views/grafik/TabelSemester";


export default function RealisasiPerOpd() {
    let { id } = useParams();

    return (
    <>
        <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 px-4">
            <KinerjaOpd id={id} />
        </div>
        <div className="w-full mb-8 xl:mb-0 px-4">
            <KinerjaOpdTable id={id} />
        </div>
        <div className="w-full mb-8 xl:mb-0 px-4">
            <TabelSemester/>
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
