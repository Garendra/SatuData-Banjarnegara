import React, {useState, useEffect} from "react";
import Axios from 'axios'
import {API_URL} from '../../config/config';

// components

export default function ResPendidikan({tahun}) {
    const [dataKesehatan, setDataKesehatan] = useState([])

    useEffect(() => {
      (async () => {
        const resKesehatan = await Axios.get(`${API_URL}/api/list/res_tempat_pelayanan_kesehatan?cmd=search&t=res_tempat_pelayanan_kesehatan&z_tahun=LIKE&x_tahun=${tahun}`).then(res => res.data.res_tempat_pelayanan_kesehatan);
        setDataKesehatan(resKesehatan)
      })()
    }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
              <h3 className="font-semibold text-base text-blueGray-700">
                Pelayanan Kesehatan tahun {tahun}
              </h3>
              <div className="flex items-center">
                  <a href={`${API_URL}/ResTempatPelayananKesehatanList`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded mr-2">Metadata</a>
                  <a href={`${API_URL}/api/list/res_tempat_pelayanan_kesehatan`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded">API</a>
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
                  Rumah sakit umum
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Puskesmas
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Klinik balai kesehatan
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Posyandu
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Poskesdes
                </th>
              </tr>
            </thead>
            <tbody>
                {dataKesehatan.map((item, key) => 
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.kecamatan}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.rumah_sakit_umum}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.puskesmas}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.klinik_balai_kesehatan}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.posyandu}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.poskesdes}
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
