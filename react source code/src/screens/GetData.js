import React, {useState, useEffect} from "react";
import Axios from 'axios'
// import {ROOT_URL,API_URL} from '../../config/config';
import {ROOT_URL,API_URL} from 'config/config';
import { JsonToTable } from "react-json-to-table";
import Papa from "papaparse";
// import qs from 'qs';
// ===================== //
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    useParams
  } from "react-router-dom";

// import "../../config/styles.css";
import "config/styles.css";

// import GrafikBda from "screens/satudata_menu/GrafikBda";
import GrafikBda from "screens/GetGrafik";

// import ListPencarian from "screens/satudata_menu/ListPencarian";
// components

export default function GetData({tahun}) {
  let { data_id } = useParams();
  const [dataPromosi,setDataPromosi] = useState([]);
  const [dataJson,setDataJson] = useState({});
  const [jumlahPengunjung, setJumlahPengunjung] = useState(null);
  
  useEffect(() => {
    checkPromo()
  }, []);
    
  const checkPromo = () => {
    try {
      Axios.get(`${API_URL}/api/view/cv_data/${data_id}`)
        .then(res => {
          const data = res.data;
          setDataPromosi(data.cv_data);
          setJumlahPengunjung(data.cv_data.jumlah_pengunjung)
          Papa.parse(`https://satudata.banjarnegarakab.go.id/data_csv/${data.cv_data.data_csv}`, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: function(results) {
              setDataJson(results.data);
            }
          });
          // Axios.post(`${API_URL}/api/edit/t_data/${data.t_data.data_id}`, qs.stringify({
          //   jumlah_pengunjung: parseInt(data.t_data.jumlah_pengunjung)+1
          // }),{headers: {
          //   "Content-Type": "application/x-www-form-urlencoded"
          // }})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="w-full xl:w-12/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-600 mb-1 text-xs font-semibold">
                {/* <span className="text-blueGray-800">{(jumlahPengunjung) ? jumlahPengunjung : '...'}</span> kali dikunjungi */}
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full xl:w-12/12 px-4">

      <GrafikBda />

    </div>
       {/*  <div className="w-full xl:w-12/12 px-4">
          <ListPencarian />
        </div> */}
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      
     
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
        
         
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
              Dataset {dataPromosi.judul} {dataPromosi.tahun}
               
              </h3>
              <div className="flex my-2">
                  {/* <a href={`${ROOT_URL}/dashboard/meta-data/${data_id}`} className="bg-indigo-500 text-white text-sm py-1 px-2 rounded mr-2">Metadata</a> */}
                  <a href={`/Dashboard/GetMetadata/${data_id}`} className="bg-indigo-500 text-white text-sm py-1 px-2 rounded mr-2">Metadata</a>
                  <a href={`${API_URL}/api/list/cv_data`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded mr-2">API</a>
                  <a href={`/data_csv/${dataPromosi.data_csv}`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded mr-2">CSV</a>
                  <a href={`/data_csv/${dataPromosi.file_statistik}`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded">XLS</a>
              </div>
            </div>
            </div>
        </div>
   
        <div className="block w-full overflow-x-auto px-8">
            <div className="block w-full">

                <JsonToTable json={dataJson} />

            </div>
    
        </div>
      </div>
    </>
  );
}
