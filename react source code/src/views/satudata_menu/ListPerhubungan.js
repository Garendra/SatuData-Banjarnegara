import React, {useState, useEffect} from "react";
import Axios from 'axios'
import { ROOT_URL, API_URL } from "config/config";

// components

export default function ListPerhubungan() {
    const [listTahun, setListTahun] = useState([])

    useEffect(() => {
      (async () => {
        const resTahun = await Axios.get(`${API_URL}/api/list/l_tahun`).then(res => res.data.l_tahun);
        setListTahun(resTahun)
      })()
    }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                List Perhubungan
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
                  Tahun
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
                {listTahun.map((item, key) => 
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.tahun}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <a href={`${ROOT_URL}/dashboard/anggota-pertahanan-sipil/${item.tahun}`} className="bg-indigo-500 text-white p-2 rounded">Lihat</a>
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
