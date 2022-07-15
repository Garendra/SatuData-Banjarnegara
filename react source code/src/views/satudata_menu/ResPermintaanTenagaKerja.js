import React, {useState, useEffect} from "react";
import Axios from 'axios'
import {API_URL} from '../../config/config';

// components

export default function ResPermintaanTenagaKerja() {
    const [dataPermintaanTenagaKerja, setDataPermintaanTenagaKerja] = useState([])

    useEffect(() => {
      (async () => {
        const resPermintaanTenagaKerja = await Axios.get(`${API_URL}/api/list/t_permintaan_tenaga_kerja`).then(res => res.data.t_permintaan_tenaga_kerja);
        setDataPermintaanTenagaKerja(resPermintaanTenagaKerja)
      })()
    }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
              <h3 className="font-semibold text-base text-blueGray-700">
                Permintaan Tenaga Kerja
              </h3>
              <div className="flex items-center">
                  <a href={`${API_URL}/TPermintaanTenagaKerjaList`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded mr-2">Metadata</a>
                  <a href={`${API_URL}/api/list/t_permintaan_tenaga_kerja`} className="bg-indigo-500 text-sm text-white py-1 px-2 rounded">API</a>
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
                  Tahun
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Permintaan Tenaga kerja Laki-laki
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Permintaan Tenaga Kerja Perempuan
                </th>
              </tr>
            </thead>
            <tbody>
                {dataPermintaanTenagaKerja.map((item, key) => 
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.tahun}
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.permintaan_tenaga_kerja_laki_laki}
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.permintaan_tenaga_kerja_perempuan}
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
