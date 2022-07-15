import React, {useState, useEffect} from 'react'
import qs from 'qs';
import Axios from 'axios'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { SearchIcon } from '@heroicons/react/outline';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

import {ROOT_URL, API_URL} from 'config/config'
import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);


export default (params) => {
    const [dataPeraturan, setDataPeraturan] = useState([])
    const [counter, setCounter] = useState(null)
    const [keywords, setKeywords] = useState('')
    const [swiperContent, setSwiperContent] = useState([])
    const [info, setInfo] = useState({
        ikm: "...",
        ipp: "...",
        irb: "...",
        kod: "...",
        sakip: "..."
    })

    useEffect(() => {
        (async () => {
            const resPeraturan = await Axios.get(`${API_URL}/api/list/peraturan_terkait`).then(res => res.data.peraturan_terkait);
            setDataPeraturan(resPeraturan);
            // console.log(dataPeraturan)
        })()
        handleCounter();
        getSwiper();
        getInfo();
    }, []);

    const handleCounter = () => {
        Axios.get(`${API_URL}/api/view/t_counter/1`)
        .then(res => {
          const data = res.data;
          setCounter(data.t_counter.counter)
        //   Axios.post(`${API_URL}/api/edit/t_counter/1`, qs.stringify({
        //     counter: parseInt(data.t_counter.counter)+1
        //   }),{headers: {
        //     "Content-Type": "application/x-www-form-urlencoded"
        //   }})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    const getSwiper = () => {
        Axios.get(`${API_URL}/api/list/swiper`)
        .then(res => {
          const data = res.data;
          setSwiperContent(data.swiper)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    const getInfo = () => {
        Axios.get(`${API_URL}/api/list/t_info`)
        .then(res => {
          const data = res.data;
          setInfo(data.t_info[0]);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    return (
    <>
        <Navbar transparent />
        <div className="h-screen">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                autoplay={{ 
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                loop
                className="mb-10 h-screen"
                style={{
                    height: '83%'
                }}
            >
                {
                    swiperContent.map(item => (
                        <SwiperSlide>
                            <div
                                className="w-full h-full bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(https://satudata.banjarnegarakab.go.id/data_csv/${item.gambar.replace(' ', '%20')})`
                                }}
                            >
                                <div className="h-full flex flex-col items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,.1)'}}>
                                    <div className="p-4 w-10/12 mx-auto" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                                        <h1 className="text-white font-semibold text-xl">
                                            {item.judul}
                                        </h1>
                                        <p className="mt-4 text-lg text-blueGray-200">
                                            {item.deskripsi}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="w-full flex items-center justify-center" style={{height: '17%'}}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay={{ 
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop
                    className="mb-10 h-full w-11/12 lg:w-8/12 mx-auto"
                >
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Kepuasan Masyarakat (IKM)</p>
                            <p className="font-semibold text-lg text-center">{info.ikm}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)</p>
                            <p className="font-semibold text-lg text-center">{info.sakip}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Reformasi Birokrasi (IRB)</p>
                            <p className="font-semibold text-lg text-center">{info.irb}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Pelayanan Publik (IPP)</p>
                            <p className="font-semibold text-lg text-center">{info.ipp}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Kematangan Organisasi Daerah (KOD)</p>
                            <p className="font-semibold text-lg text-center">{info.kod}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className="bg-blueGray-200 py-6 mt-10">
            <h1 className="text-center text-2xl text-blueGray-800 font-semibold mb-6">Cari Data Statistik</h1>
            <div className="bg-white shadow-lg rounded flex p-3 h-16 w-10/12 max-w-580-px mx-auto">
                <input type="text" className="px-2 text-lg font-light text-gray-800 bg-white flex-1 focus:outline-none rounded h-full mr-2" placeholder="Data Statistik..." value={keywords} onInput={e => setKeywords(e.target.value)} />
                <a href={`${ROOT_URL}/pencarian/${keywords}`} className="w-16 flex justify-center items-center rounded bg-blueGray-800 text-white text-base h-full p-2"><SearchIcon className="block h-6 w-6 text-white" aria-hidden="true" /> Cari</a>
            </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-10 px-8" id="dashboard">
            <h1 className="font-semibold text-lg mb-2">
                Dashboard & Dataset
            </h1>
            <p className="text-base my-8 mb-2 text-center">
                Dashboard & Dataset menampilkan data dalam bentuk grafik dan tabel.
            </p>
            <div>
                <a href="/dashboard/" className="w-44 bg-blueGray-600 text-white p-2 rounded-md" >
                    Lihat Dashboard
                </a>
            </div>
        </div>
        <main className="flex mt-10 px-10 w-full bg-blueGray-200 p-4  items-center flex-col md:flex-row" id="faq">
            <div className="w-full md:w-5/12 mr-auto ml-auto mb-4 ">
                <img
                alt="..."
                src={`${ROOT_URL}/gambar_kecil.jpg`}
                className="w-full align-middle rounded-lg shadow-lg"
                />
            </div>
            <div className="flex-1 ml-2">
                <h1 className="font-semibold text-lg">
                    Apa itu Satu Data ?
                </h1>
                <p className="text-base">
                    Satu Data adalah inisiatif pemerintah untuk mendorong pengambilan kebijakan berdasarkan Data. Untuk mewujudkan hal tersebut, maka diperlukan pemenuhan atas data pemerintah yang akurat, terbuka, dan interoperabilitas. Satu Data memiliki tiga prinsip utama yaitu, satu standar data, satu metadata baku, dan satu portal data. Dengan demikian, pemanfaatan data pemerintah tidak hanya terbatas pada penggunaan secara internal antar instansi, tetapi juga sebagai bentuk pemenuhan kebutuhan data publik bagi masyarakat.
                </p>
                <h1 className="font-semibold text-lg mt-5">
                    Latar Belakang
                </h1>
                <p className="text-base">
                    Inisiatif Satu Data diawali dengan Portal Data Indonesia, yaitu data.go.id, yang diinisiasi oleh Unit Kerja Presiden Bidang Pengawasan Pengendalian Pembangunan (UKP-PPP) sebagai salah satu komitmen pemerintah dalam Open Government Partnership. <br/>
                    Seluruh kumpulan data yang ada di dalam data.go.id dikategorikan sebagai domain publik sehingga tidak diperkenankan mengandung informasi yang mengandung rahasia negara, rahasia pribadi atau hal-hal lainnya yang diatur dalam Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
                </p>
                <h1 className="font-semibold text-lg mt-5">
                    Statistik
                </h1>
                <p className="text-base">
                    UU Republik Indonesia Nomor 16 Tahun 1997 tentang Statistik menegaskan Statistik adalah data yang diperoleh dengan cara pengumpulan, pengolahan, penyajian, dan analisis serta sebagai sistem yang mengatur keterkaitan antar unsur dalam penyelenggaraan statistik.<br/>
                    Statistik yang pemanfaatannya ditujukan untuk memenuhi kebutuhan instansi tertentu, dalam rangka penyelenggaraan tugas-tugas pemerintahan dan pembangunan yang merupakan tugas pokok instansi yang bersangkutan.
                </p>
            </div>
        </main>
        <div className="p-8" id="peraturan">
            <h1 className="font-semibold text-lg mb-2">
                Peraturan Terkait
            </h1>
            {dataPeraturan.map((item, key) => 
            <div>
                <a href={item.file.url} className="inline-block p-2 bg-white shadow-md rounded-md mb-2">{item.judul}</a>
            </div>
            )}
        </div>
        <div className="p-8">
            <h6 className="uppercase text-blueGray-600 text-xs font-semibold border-2 p-2 inline-block border-blueGray-600">
            Situs ini telah dikunjungi sebanyak <span className="text-blueGray-800">{(counter) ? counter : '...'}</span> kali
            </h6>
        </div>
        <br/>
        <br/>
        <Footer/>
    </>
    )
};
