import React, {useState, useEffect} from "react";
import Axios from 'axios'
import { ROOT_URL, API_URL } from "config/config";

// components

export default function ListPendidikan({tingkatPendidikan, tahun}) {
    const [listPendidikan, setListPendidikan] = useState([])

    useEffect(() => {
      (async () => {
        const resPendidikan = await Axios.get(`${API_URL}/api/list/list_pendidikan`).then(res => res.data.list_pendidikan);
        setListPendidikan(resPendidikan)
      })()
    }, []);

  return (
    <>

    
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Pencarian
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto px-6 pb-6 flex">
          <div className="w-6/12">
            <p className="mb-2 text-sm">Jenis Pendidikan</p>
            <select onChange={e => window.location.href = `${ROOT_URL}/dashboard/pendidikan/${e.target.value}/${tahun}`} className="text-sm w-6/12 rounded">
              {[...new Set(listPendidikan.map(item => item.jenis_sekolah))].map(item =>
                (item === tingkatPendidikan) ? 
                  <option value={item} selected>{item}</option>
                :
                  <option value={item}>{item}</option>
              )}
            </select>
          </div>
          <div className="w-6/12">
            <p className="mb-2 text-sm">Tahun</p>
            <select onChange={e => window.location.href = `${ROOT_URL}/dashboard/pendidikan/${tingkatPendidikan}/${e.target.value}`} className="text-sm w-6/12 rounded">
              {[...new Set(listPendidikan.map(item => item.tahun))].map(item =>
                (item === tahun) ? 
                  <option value={item} selected>{item}</option>
                :
                  <option value={item}>{item}</option>
              )}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
