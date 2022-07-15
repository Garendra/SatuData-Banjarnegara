import React, {useState, useEffect} from 'react'
// import qs from 'qs';
import Axios from 'axios'
import { ArrowCircleLeftIcon, SearchIcon } from '@heroicons/react/outline';
import {useParams} from 'react-router-dom';

import {ROOT_URL, API_URL} from 'config/config'
// import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default () => {
    let { keys } = useParams();

    const [keywords, setKeywords] = useState((keys) ? keys : '');
    const [data, setData] = useState([])

    useEffect(() => {
        handleSearchData();
    }, []);

    const handleSearchData = async () => {
        // const res = await Axios.get(`${API_URL}/api/list/cv_data?cmd=search&t=cv_data&z_judul_metadata=LIKE&x_judul_metadata=${keywords}`).then(res => res.data.cv_data);
        const res = await Axios.get(`${API_URL}/api/list/cv_data/?cmd=search&psearch=${keywords}`).then(res => res.data.cv_data);
        setData(res);
    }

    return (
    <>
        <div className="w-full h-16 bg-blueGray-800 px-4 sm:px-6">
            <div className="w-full sm:w-11/12 mx-auto px-4 flex h-full items-center">
                <a href={ROOT_URL} className="w-8 h-8 p-1 mr-4"><ArrowCircleLeftIcon className="block h-6 w-6 text-white" aria-hidden="true" /></a>
                <h1 className="text-white font-medium text-2xl ml-4">Pencarian</h1>
            </div>
        </div>
        <div className="w-full px-4 sm:px-6">
            <div className="w-full sm:w-11/12 mx-auto p-4">
                <div className="bg-white shadow-lg rounded flex p-3 h-16 w-10/12 max-w-580-px mb-4">
                    <input type="text" className="px-2 text-lg font-light text-gray-800 bg-white flex-1 focus:outline-none rounded h-full mr-2" placeholder="Data Statistik..." value={keywords} onInput={e => setKeywords(e.target.value)}/>
                    <a href={`/pencarian/${keywords}`} className="w-16 flex justify-center items-center rounded bg-blueGray-800 text-white text-base h-full p-2"><SearchIcon className="block h-6 w-6 text-white" aria-hidden="true" /> Cari</a>
                </div>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded overflow-hidden">
                    <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-pre-wrap font-semibold text-left">
                                Lihat
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-pre-wrap font-semibold text-left">
                                tahun
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-pre-wrap font-semibold text-left">
                                Judul
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-pre-wrap font-semibold text-left">
                                Nama OPD
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {data.sort((a, b) => (b.tahun && a.tahun) ? parseInt(b.tahun.split('/')[0]) - parseInt(a.tahun.split('/')[0]) : a.tahun).map((item, key) => 
                                    <tr>
                                        <td className="border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4">
                                            <a href={`/Dashboard/GetData/${item.data_id}`} className="bg-indigo-500 text-white p-2 rounded">Lihat</a>
                                        </td>
                                        <th className="border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                                            {item.tahun}
                                        </th>
                                        <th className="border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                                            {item.judul}
                                        </th>
                                        <th className="border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 text-left">
                                            {item.objek}
                                        </th>
                                    
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <Footer/>
    </>
    )
};
