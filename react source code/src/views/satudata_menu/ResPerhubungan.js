import React, {useState, useEffect} from "react";
import Axios from 'axios'
import {API_URL} from '../../config/config';

// components

export default function ResPerhubungan({tahun}) {
  const [dataDana, setDataDana] = useState([])

  useEffect(() => {
  (async () => {
      const resDana = await Axios.get(`${API_URL}/api/list/res_perhubungan?cmd=search&t=res_perhubungan&z_tahun=LIKE&x_tahun=${tahun}`).then(res => res.data.res_perhubungan);
      setDataDana(resDana)
    })()
  }, []);

return (
  <>
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
            <h3 className="font-semibold text-base text-blueGray-700">
              Perhubungan {tahun}
            </h3>
            <div className="flex items-center">
                <a href={`${API_URL}/ResBangunanTempatTinggal`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded mr-2">Metadata</a>
                <a href={`${API_URL}/api/list/res_perhubungan`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded">API</a>
            </div>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Kecamatan
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Ibu Kota Kecamatan     
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Luas     
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Presentase Terhadap Luas Provinsi     
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Jumlah Pulau    
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Tinggi Wilayah   
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Jarak Ke Ibukota    
              </th>
              
            </tr>
          </thead>
          <tbody>
              {dataDana.map((item, key) => 
              <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  {item.kecamatan}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.ibu_kota_kecamatan}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.luas}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.presentase_terhadap_luas_provinsi}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.jumlah_pulau}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.tinggi_wilayah}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.jarak_ke_ibukota}
                  </td>
                  
                  
              </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  </>
);
}