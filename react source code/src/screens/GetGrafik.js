import React, {useEffect, useState} from "react";
import Chart from "chart.js";
import Axios from 'axios';
// import {API_URL} from '../../config/config';
import {API_URL} from 'config/config';
import Papa from "papaparse";

import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  useParams
} from "react-router-dom";

// 0: {nama_singkat: 'Dinkes', anggaran: '100', realisasi: '44.4242'}
// 1: {nama_singkat: 'Dinperindag Industri', anggaran: '100', realisasi: '0.0000'}
// 2: {nama_singkat: 'Dinperindag UKM', anggaran: '100', realisasi: '0.0000'}
// 3: {nama_singkat: 'Dinpertan', anggaran: '100', realisasi: '14.5317'}
// 4: {nama_singkat: 'Disnaker', anggaran: '100', realisasi: '1.3762'}
// 5: {nama_singkat: 'Satpol PP', anggaran: '100', realisasi: '0.0000'}

// kie nek arep ngganti warnane nang kene
const barColor = ['#7A0BC0', 'green', 'blue', 'yellow', 'aqua', '#EA5C2B', '#000', '#888', 'cyan','#270082','#FC28FB','#470D21','#DA1212','#24A19C','#FFFDA2','#96CEB4','#BAFFB4','#FF6363','#D9D7F1']

export default function GetGrafik({objek_id}) {
  const [dataPromosi,setDataPromosi] = useState([]);
  
  let { data_id } = useParams();

  useEffect(() => {
    checkPromo()
  }, [0]);
    
  const checkPromo = () => {
    try {
      Axios.get(`${API_URL}/api/view/cv_data/${data_id}`)
        .then(res => {
          const data = res.data;
          setDataPromosi(data.cv_data);
          Papa.parse(`https://satudata.banjarnegarakab.go.id/data_csv/${data.cv_data.data_csv}`, {
          // Papa.parse(`../data_csv/${data.cv_data.data_csv}`, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: function(results) {
              let hasil = {};
              hasil = results.data;
              let objLog = [];
              if (hasil.length > 0) {
                objLog = Object.entries(hasil[0]);
                let keysObj = [];
                for (const [key, val] of objLog) {
                  keysObj.push(key)
                }
                let config = {
                type: "bar",
                data: {
                    labels: hasil.map(i => (i[keysObj[0]])),
                    datasets: keysObj.slice(1, keysObj.length).map((val, key) => {
                      return {
                        label: val,
                        backgroundColor: barColor[key],
                        borderColor: barColor[key],
                        data: hasil.map(i => (i[val]) ? parseFloat(i[val].replace(',', '').replace('.', '')) : 0),
                        fill: false,
                        barThickness: 20,
                      }
                    })
                      
                    // {
                    //     label: "Sekolah Swasta",
                    //     backgroundColor: "#4c51bf",
                    //     borderColor: "#4c51bf",
                    //     data: hasil.map(i => parseFloat(i['Sekolah Swasta'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Guru Negeri",
                    //     backgroundColor: "#378aa3",
                    //     borderColor: "#378aa3",
                    //     data: hasil.map(i => parseFloat(i['Guru Negeri'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Guru Swasta",
                    //     backgroundColor: "c21919",
                    //     borderColor: "c21919",
                    //     data: hasil.map(i => parseFloat(i['Guru Swasta'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Murid Negeri",
                    //     backgroundColor: "#ff9100",
                    //     borderColor: "#ff9100",
                    //     data: hasil.map(i => parseFloat(i['Murid Negeri'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Murid Swasta",
                    //     backgroundColor: "red",
                    //     borderColor: "red",
                    //     data: hasil.map(i => parseFloat(i['Murid Swasta'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Malaria (positif)",
                    //     backgroundColor: "red",
                    //     borderColor: "red",
                    //     data: hasil.map(i => parseFloat(i['Malaria (positif)'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "TB Paru",
                    //     backgroundColor: "black",
                    //     borderColor: "black",
                    //     data: hasil.map(i => parseFloat(i['TB Paru'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Pneumonia",
                    //     backgroundColor: "green",
                    //     borderColor: "green",
                    //     data: hasil.map(i => parseFloat(i['Pneumonia'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Kusta",
                    //     backgroundColor: "blue",
                    //     borderColor: "blue",
                    //     data: hasil.map(i => parseFloat(i['Kusta'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Tetanus Neonatorum",
                    //     backgroundColor: "yellow",
                    //     borderColor: "yellow",
                    //     data: hasil.map(i => parseFloat(i['Tetanus Neonatorum'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Campak",
                    //     backgroundColor: "pink",
                    //     borderColor: "pink",
                    //     data: hasil.map(i => parseFloat(i['Campak'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Diare",
                    //     backgroundColor: "orange",
                    //     borderColor: "orange",
                    //     data: hasil.map(i => parseFloat(i['Diare'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Demam Berdarah",
                    //     backgroundColor: "grey",
                    //     borderColor: "grey",
                    //     data: hasil.map(i => parseFloat(i['Demam Berdarah'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Kasus Baru <format: HIV/AID>",
                    //     backgroundColor: "violet",
                    //     borderColor: "violet",
                    //     data: hasil.map(i => parseFloat(i['Kasus Baru <format: HIV/AID>'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Kasus Kumulatif <format: HIV/AID>",
                    //     backgroundColor: "purple",
                    //     borderColor: "purple",
                    //     data: hasil.map(i => parseFloat(i['Kasus Kumulatif <format: HIV/AID>'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Infeksi Menular Seksual (IMS)",
                    //     backgroundColor: "maroon",
                    //     borderColor: "maroon",
                    //     data: hasil.map(i => parseFloat(i['Infeksi Menular Seksual (IMS)'])),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    
                    // {
                    //     label: "Sekolah Swasta",
                    //     fill: false,
                    //     backgroundColor: "#4c51bf",
                    //     borderColor: "#4c51bf",
                    //     data:  resPendidikan.map(i => parseFloat(i.sekolah_swasta)),
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Guru Negeri",
                    //     backgroundColor: "#378aa3",
                    //     borderColor: "#378aa3",
                    //     data: resPendidikan.map(i => parseFloat(i.guru_negeri)),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Guru Swasta",
                    //     fill: false,
                    //     backgroundColor: "#30b021",
                    //     borderColor: "#30b021",
                    //     data:  resPendidikan.map(i => parseFloat(i.guru_swasta)),
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Murid Negeri",
                    //     backgroundColor: "#c21919",
                    //     borderColor: "#c21919",
                    //     data: resPendidikan.map(i => parseFloat(i.murid_negeri)),
                    //     fill: false,
                    //     barThickness: 20,
                    // },
                    // {
                    //     label: "Murid Swasta",
                    //     fill: false,
                    //     backgroundColor: "#ff9100",
                    //     borderColor: "#ff9100",
                    //     data:  resPendidikan.map(i => parseFloat(i.murid_swasta)),
                    //     barThickness: 20,
                    // },
                    ,
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                    display: false,
                    text: "Orders Chart",
                    },
                    tooltips: {
                    mode: "index",
                    intersect: false,
                    },
                    hover: {
                    mode: "nearest",
                    intersect: true,
                    },
                    legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)",
                    },
                    align: "end",
                    position: "bottom",
                    },
                    scales: {
                    xAxes: [
                        {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: keysObj[0],
                        },
                        gridLines: {
                            borderDash: [2],
                            borderDashOffset: [2],
                            color: "rgba(33, 37, 41, 0.3)",
                            zeroLineColor: "rgba(33, 37, 41, 0.3)",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                        },
                        },
                    ],
                    yAxes: [
                        {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Jumlah",
                        },
                        gridLines: {
                            borderDash: [2],
                            drawBorder: false,
                            borderDashOffset: [2],
                            color: "rgba(33, 37, 41, 0.2)",
                            zeroLineColor: "rgba(33, 37, 41, 0.15)",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                        },
                        },
                    ],
                    },
                },
                };
                let ctx = document.getElementById("bar-chart").getContext("2d");
                window.myBar = new Chart(ctx, config);
              }
            }
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Grafik 
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="chart-container relative h-350-px w-96">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
