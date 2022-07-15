import React, {useState, useEffect} from "react";
//import { Link } from "react-router-dom";
// import Axios from 'axios';
// import {API_URL} from '../../config/config';
// import { Link } from "react-router-dom";
// // components

// import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats({id}) {
  const [totalKinerja,setTotalKinerja] = useState([]);
   
  useEffect(() => {
    // checkTotal()
  }, []);

  const formatRupiah = (angka) => {
    let rupiah = '';
    let angkarev = angka.toString().split('').reverse().join('');
    for(let i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
  }
    
  // const checkTotal = async () => {
  //   console.log(id);
  //   let total = await Axios.get(`${API_URL}/api/list/cv_totalkinerja`).then(res => res.data.cv_totalkinerja);
  //   total = total.filter(i => i.periode_id == id)
  //   setTotalKinerja(total)
  // }


let Realisasi =  1770046368 ;
let Pagu =  6981121000 ;
let RealisasiPersen = Realisasi / Pagu * 100 ;

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12"></div>

      {/* <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats
            {totalKinerja.map(item => 
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                <CardStats
                  statSubtitle="Total Pagu"
                  statTitle={formatRupiah(item.jumlah_anggaran)}
                  statPercent="100"
                  statPercentColor="text-emerald-500"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                  <CardStats
                    statSubtitle="Realisasi"
                    statTitle={formatRupiah(item.realisasi_keuangan)}
                    statPercent={item.realisasi_persen}
                    statPercentColor="text-red-500"
                    statIconName="fas fa-chart-pie"
                    statIconColor="bg-orange-500"
                  />
              </div>
            </div>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
}
