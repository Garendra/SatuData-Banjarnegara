import React, {useState, useEffect} from "react";
import Axios from 'axios'
import {API_URL} from '../../config/config';

// components

export default function ResPenerbitanIzinUsaha({tahun}) {
    const [dataPenerbitanIzinUsaha, setDataPenerbitanIzinUsaha] = useState([])

    useEffect(() => {
      (async () => {
        const resPenerbitanIzinUsaha = await Axios.get(`${API_URL}/api/list/t_penerbitan_siup?cmd=search&t=t_penerbitan_siup&z_tahun=LIKE&x_tahun=${tahun}`).then(res => res.data.t_penerbitan_siup);
        setDataPenerbitanIzinUsaha(resPenerbitanIzinUsaha)
      })()
    }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
              <h3 className="font-semibold text-base text-blueGray-700">
                Penerbitan Izin Usaha tahun {tahun}
              </h3>
              <div className="flex items-center">
                  <a href={`${API_URL}/TPenerbitanSiupList`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded mr-2">Metadata</a>
                  <a href={`${API_URL}/api/list/t_penerbitan_siup`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded">API</a>
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
                  perusahaan besar
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  perusahaan menengah
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  perusahaan kecil
                </th>
              </tr>
            </thead>
            <tbody>
                {dataPenerbitanIzinUsaha.map((item, key) => 
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.perusahaan_besar}
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.perusahaan_menengah}
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.perusahaan_kecil}
                    </th>
                </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
