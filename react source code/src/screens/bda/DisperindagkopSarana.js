import React, {useState, useEffect} from "react";
import Axios from 'axios'
import {API_URL} from '../../config/config';

// components

export default function BpbdKerusakanTable({id}) {
    const [dataKinerjaOpd, setDataKinerjaOpd] = useState([])

    useEffect(() => {
      (async () => {
        const kinerjaOpd = await Axios.get(`${API_URL}/api/list/disperindagkop_sarana`).then(res => res.data.disperindagkop_sarana);
        setDataKinerjaOpd(kinerjaOpd)
      })()
    }, []);

    /* const formatRupiah = (angka) => {
        let rupiah = '';
        let angkarev = angka.toString().split('').reverse().join('');
        for(let i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    } */

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Tabel Disperindagkop Sarana
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Jenis
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Tahun 2019
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Tahun 2020
                </th>
              </tr>
            </thead>
            <tbody>
                {dataKinerjaOpd.map((item, key) => 
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {item.jenis}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.thn_2019}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.thn_2020}
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
