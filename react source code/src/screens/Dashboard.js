// import React, {useEffect} from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { Switch, Route } from "react-router-dom";


// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
import Sidebar from "screens/Sidebar";
// import HeaderStats from "components/Headers/HeaderStats.js";
import HeaderStats from "screens/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin.js";
// import FooterAdmin from "screens/FooterAdmin.js";

// screens


// import Dashboard from "screens/admin/Dashboard.js";
// import Maps from "screens/admin/Maps.js";
// import Settings from "screens/admin/Settings.js";
// import Tables from "screens/admin/Tables.js";
// import RealisasiPerOpd from "screens/grafik/RealisasiPerOpd";
// import RealisasiPerBidang from "screens/grafik/RealisasiPerBidang";
//import LingkunganHidup from "screens/bda/MenuLingkunganHidup";
// import LingkunganHidup from "screens/bda/BpbdKerusakan";
// import RsduRi from "screens/bda/RsudRi";
// import DisperindagkopSarana from "screens/bda/DisperindagkopSarana";
// import Infrastruktur from "screens/bda/Infrastruktur";
// import DpuprTinggi from "screens/bda/DpuprTinggi";
// import BPNPermohonan from "screens/bda/BpnPermohonan";
// import PolresDatagar from "screens/bda/PolresDatagar";
// import Pendidikan from "screens/satudata_menu/Pendidikan";
// import PendidikanSmp from "screens/satudata_menu/PendidikanSmp";
// import PendidikanSd from "screens/satudata_menu/PendidikanSd";
// import PendidikanTk from "screens/satudata_menu/PendidikanTk";
// import Kesehatan from "screens/satudata_menu/Kesehatan";
// import DaftarPenyakit from "screens/satudata_menu/DaftarPenyakit";
// import PekerjaanUmum from "screens/satudata_menu/PekerjaanUmum";
// import Sosial from "screens/satudata_menu/Sosial";
// import PeristiwaBencana from "screens/satudata_menu/PeristiwaBencana";
// import PermintaanTenagaKerja from "screens/satudata_menu/PermintaanTenagaKerja";
// import PenerbitanIzinUsaha from "screens/satudata_menu/PenerbitanIzinUsaha";
// import Kelahiran from "screens/satudata_menu/Kelahiran";
// import DanaDesa from "screens/satudata_menu/DanaDesa";
// import PengunjungWisata from "screens/satudata_menu/PengunjungWisata";
// import AnggotaPertahananSipil from "screens/satudata_menu/AnggotaPertahananSipil";
// import BangunanTempatTinggal from "screens/satudata_menu/BangunanTempatTinggal";
// import DanaPembangunanDesa from "screens/satudata_menu/DanaPembangunanDesa";
// import Perhubungan from "screens/satudata_menu/Perhubungan";
import Menu from "screens/satudata_menu/Menu";


// import PelanggaranKendaraan from "screens/satudata_menu/PelanggaranKendaraan";
// import Kejahatan from "screens/satudata_menu/Kejahatan";
// import Data from "screens/satudata_menu/Data";

import DataBda from "screens/satudata_menu/DataBda";
import MetaData from "screens/satudata_menu/MetaData";
// import ResMetadata from "screens/satudata_menu/ResMetadata";

export default function Admin() {
  return (
    <>

      <Sidebar />

      <div className="relative md:ml-64 bg-blueGray-100">

        {/* <AdminNavbar/> */}

        {/* Header */}
        <HeaderStats id={window.location.href.split('/')[window.location.href.split('/').length - 1]} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/dashboard/" exact component={Menu} />
            {/* <Route path="/dashboard/pendidikan/:tingkat/:tahun" exact component={Pendidikan} />
            <Route path="/dashboard/pendidikansmp/:tingkat/:tahun" exact component={PendidikanSmp} />
            <Route path="/dashboard/pendidikansd/:tingkat/:tahun" exact component={PendidikanSd} />
            <Route path="/dashboard/pendidikantk/:tingkat/:tahun" exact component={PendidikanTk} />
            <Route path="/dashboard/pelayanan-kesehatan/:tahun" exact component={Kesehatan} />
            <Route path="/dashboard/daftar-penyakit/:tahun" exact component={DaftarPenyakit} />
            <Route path="/dashboard/pekerjaan-umum/:tahun" exact component={PekerjaanUmum} />
            <Route path="/dashboard/sosial/:tahun" exact component={Sosial} />
            <Route path="/dashboard/peristiwa-bencana/:tahun" exact component={PeristiwaBencana} />
            <Route path="/dashboard/permintaan-tenaga-kerja" exact component={PermintaanTenagaKerja} />
            <Route path="/dashboard/penerbitan-izin-usaha/:tahun" exact component={PenerbitanIzinUsaha} />
            <Route path="/dashboard/dana-desa/:tahun" exact component={DanaDesa} />
            <Route path="/dashboard/kelahiran" exact component={Kelahiran} />
            <Route path="/dashboard/pengunjung-wisata/:tahun" exact component={PengunjungWisata} />
            <Route path="/dashboard/anggota-pertahanan-sipil/:tahun" exact component={AnggotaPertahananSipil} />
            <Route path="/dashboard/bangunan-tempat-tinggal/:tahun" exact component={BangunanTempatTinggal} />
            <Route path="/dashboard/dana-pembangunan-desa/:tahun" exact component={DanaPembangunanDesa} />
            <Route path="/dashboard/perhubungan/:tahun" exact component={Perhubungan} />
          */}
            
            {/* <Route path="/dashboard/pelanggaran-kendaraan/:tahun" exact component={PelanggaranKendaraan} />
            <Route path="/dashboard/kejahatan/:tahun" exact component={Kejahatan} /> */}
         
           {/* <Route path="/dashboard/data/:objek_id" exact component={Data} /> */}
   
            <Route path="/dashboard/data-bda/:data_id" exact component={DataBda} />
            <Route path="/dashboard/meta-data/:data_id" exact component={MetaData} />
    
            {/* <Route path="/dashboard/realisasi-per-bidang/:id" exact component={RealisasiPerBidang} /> */}
          </Switch>

          <FooterAdmin />

        </div>
      </div>
    </>
  );
}
