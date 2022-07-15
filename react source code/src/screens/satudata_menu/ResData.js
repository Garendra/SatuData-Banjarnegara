import React, {useState, useEffect} from "react";
import Axios from 'axios'
import {API_URL} from '../../config/config';
import { JsonToTable } from "react-json-to-table";
// ===================== //

import "../../config/styles.css";


// components

export default function ResData({tahun}) {
  const [dataPenyakit, setDataPenyakit] = useState([])
  const [dataPromosi,setDataPromosi] = useState([]);
  const [dataJson,setDataJson] = useState({});
  
  useEffect(() => {
    checkPromo()
  }, []);
    
  const checkPromo = () => {
   
    try {
      Axios.get(`${API_URL}/api/view/t_data/1`)
        .then(res => {
          const data = res.data;
          setDataPromosi(data.t_data);
          let objJson = {
            "data" : {}
          }
          objJson.data = eval(data.t_data.data_tabel)
          setDataJson(objJson.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  
  /* const myJson = {
    Analyst: { name: "Jack", email: "jack@xyz.com" },
    "Loaded by": "Jills",
    "Load id": 34,
    "git id": "xxqaygqertqsg98qhpughqer",
    "Analysis Id": "7asdlnagsd98gfaqsgf",
    "Load Date": "July 12, 2018",
    "Data Source": "Study XY123-456",
    "Jira Ticket": "Foo-1",
    "Confluence URL": "http://myserver/wxyz",
    "Study sponsors": [
      { name: "john", email: "john@@xyz.com" },
      { name: "jane", email: "jane@@xyz.com" }
    ]
  }; */

//const myJson = dataPromosi.data_tabel ;
     
      

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      
                
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
        
         
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
              <h3 className="font-semibold text-base text-blueGray-700">
              {dataPromosi.judul} {tahun}
               
             
                
              </h3>
              {/* <div className="flex items-center">
                  <a href={`${API_URL}/ResPenyakitList`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded mr-2">Metadata</a>
                  <a href={`${API_URL}/api/list/res_penyakit`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded">API</a>
              </div> */}
            </div>
           
          </div>
        </div>
   {/*  <div>
    {dataPromosi.data_tabel}
    </div> */}
        <div className="block w-full overflow-x-auto px-8">
          <JsonToTable json={dataJson} />
          {/* Projects table */}
          {/* <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Kecamatan
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Malaria
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Paru
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Pneumonia
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Kusta
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Tetanus Neonatorum
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Campak
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Diare
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Demam berdarah
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Kasus baru hiv
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Kasus kumulatif hiv
                </th>
              </tr>
            </thead>
            <tbody>
            
                <tr>
                    <th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Cara Pengumpulan Data
                    </td>
                    </th>
                    
                </tr>
                <tr>
               
                </tr>
                {dataPenyakit.map((item, key) => 


                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.kecamatan}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.malaria}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.tb_paru}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.pneumonia}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.kusta}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.tetanus_neonatorum}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.campak}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.diare}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.demam_berdarah}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.kasus_baru_hiv}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.kasus_kumulatif_hiv}
                    </td>
                    
                </tr>
                )}
            </tbody>
          </table> */}
        </div>
      </div>
    </>
  );
}
