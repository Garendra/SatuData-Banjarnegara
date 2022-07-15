import React, {useState, useEffect} from "react";
import Axios from 'axios'

// components

export default function TabelSemester() {

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Riwayat Realisasi
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
                  Periode
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    SEMESTER 1 TAHUN 2021
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {(window.location.href.indexOf("/dashboard/realisasi-per-opd") !== -1)
                        ? (<a href="http://localhost:3000/dashboard/realisasi-per-opd/1" className="bg-indigo-500 text-white p-2 rounded">Lihat</a>)
                        : (<a href="http://localhost:3000/dashboard/realisasi-per-bidang/1" className="bg-indigo-500 text-white p-2 rounded">Lihat</a>)}
                    </td>
                </tr>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    SEMESTER 2 TAHUN 2021
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {(window.location.href.indexOf("/dashboard/realisasi-per-opd") !== -1)
                        ? (<a href="http://localhost:3000/dashboard/realisasi-per-opd/12" className="bg-indigo-500 text-white p-2 rounded">Lihat</a>)
                        : (<a href="http://localhost:3000/dashboard/realisasi-per-bidang/12" className="bg-indigo-500 text-white p-2 rounded">Lihat</a>)}
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
