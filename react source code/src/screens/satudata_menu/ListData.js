import React, {useState, useEffect} from "react";
import Axios from 'axios'
import { ROOT_URL, API_URL } from "config/config";
// import {useParams} from 'react-router-dom'

// components

export default function ListData({objek_id}) {
 /*    const [listTahun, setListTahun] = useState([])

    useEffect(() => {
      (async () => {
        const resTahun = await Axios.get(`${API_URL}/api/list/t_data/${objek_id}`).then(res => res.data.t_data);
        setListTahun(resTahun)
      })()
    }, []); */
    const [dataPelanggaran, setDataPelanggaran] = useState([])
    const [dataNama, setDataNama] = useState([])

    useEffect(() => {
      (async () => {
        const resNama = await Axios.get(`${API_URL}/api/list/cv_nama?cmd=search&t=cv_nama&z_objek_id=LIKE&x_objek_id=${objek_id}`).then(res => res.data.cv_nama);
        setDataNama(resNama[0])
      })()
    }, [objek_id]);


    useEffect(() => {
      (async () => {
        const resPelanggaran = await Axios.get(`${API_URL}/api/list/t_data?cmd=search&t=t_data&z_objek_id=LIKE&x_objek_id=${objek_id}`).then(res => res.data.t_data);
        setDataPelanggaran(resPelanggaran)
      })()
    }, [objek_id]);

    

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Dataset {dataNama.objek}
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
                  Lihat
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  tahun
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Judul
                </th>
               
              </tr>
            </thead>
            <tbody>
                {dataPelanggaran.sort((a, b) => parseInt(b.tahun.split('/')[0]) - parseInt(a.tahun.split('/')[0])).map((item, key) => 
                <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <a href={`${ROOT_URL}/dashboard/data-bda/${item.data_id}`} className="bg-indigo-500 text-white p-2 rounded">Lihat</a>
                        {/* <a href={`${ROOT_URL}/dashboard/data-bda-dinkes/${item.tahun}`} className="bg-indigo-500 text-white p-2 rounded">Metadata</a> */}
                    </td>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.tahun}
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.judul_bda}
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
