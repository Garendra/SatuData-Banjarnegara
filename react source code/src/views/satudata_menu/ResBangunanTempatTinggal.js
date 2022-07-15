import React, {useState, useEffect} from "react";
import Axios from 'axios'
import {API_URL} from '../../config/config';

// components


export default function ResBangunanTempatTinggal({tahun}) {
    const [dataBangunan, setDataBangunan] = useState([])

    useEffect(() => {
    (async () => {
        const resBangunan = await Axios.get(`${API_URL}/api/list/res_bangunan_tempat_tinggal?cmd=search&t=res_bangunan_tempat_tinggal&z_tahun=LIKE&x_tahun=${tahun}`).then(res => res.data.res_bangunan_tempat_tinggal);
        setDataBangunan(resBangunan)
      })()
    }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
              <h3 className="font-semibold text-base text-blueGray-700">
                Bangunan Pertahanan Sipil tahun {tahun}
              </h3>
              <div className="flex items-center">
                  <a href={`${API_URL}/ResBangunanTempatTinggal`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded mr-2">Metadata</a>
                  <a href={`${API_URL}/api/list/res_bangunan_tempat_tinggal`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded">API</a>
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
                  Bangunan Tempat Tinggal Layak Huni      
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Bangunan Tempat Tinggal Tidak Layak Huni
                </th>
                
              </tr>
            </thead>
            <tbody>
                {dataBangunan.map((item, key) => 
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.kecamatan}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.bangunan_tempat_tinggal_layak_huni}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.bangunan_tempat_tinggal_tidak_layak_huni}
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