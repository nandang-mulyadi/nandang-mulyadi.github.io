(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/changepassword/changepassword.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/changepassword/changepassword.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Ubah Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-card>\n\n  <ion-card-content class=\"form\">\n\n\n    <ion-label>Masukan Password Baru</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"{{type}}\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <ion-label>Ketik Ulang Password Baru</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"{{type}}\" [(ngModel)]=\"repassword\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-checkbox (ionChange)=\"changeCk($event)\" color=\"success\" slot=\"start\"></ion-checkbox>\n      <ion-label>Show Password</ion-label>\n    </ion-item>\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" (click)=\"goBack()\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" (click)=\"savingData()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Simpan</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dashboard/dashboard.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dashboard/dashboard.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/help/help.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/help/help.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Bantuan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div style=\"padding: 15px;\">\n  <ion-text>\n    Hal-hal lain terkait dengan tugas dan fungsi Relawan Desa Melawan COVID-19 dapat ditanyakan ke Call Center Kementrian Desa, PDT.\n  </ion-text>\n  <ul>\n    <li>Transmigrasi <a href=\"tel:+1500040\">1500040</a></li>\n    <li>Layanan SMS Center <a href=\"sms:087788990040\">087788990040</a> atau <a href=\"sms:081288990040\">081288990040</a></li>\n  </ul>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/landing/landing.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/landing/landing.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n\r\n  <ion-toolbar *ngIf=\"!internetConnection\" style=\"--background: #ff1534;color: #ffffff;height: 26px;\">\r\n    <ion-title size=\"small\" style=\"margin-top: -18px;padding-top: 0px;padding-bottom: 0px;text-align: left;\">\r\n      Tidak tersambung dengan internet!\r\n    </ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar class=\"toolbar-header\">\r\n    <ion-buttons [routerLink]=\"['/home/profile']\" slot=\"start\" style=\"margin-left: 15px;\">\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" color=\"light\" name=\"person-circle\"></ion-icon>\r\n          \r\n        </ion-button>\r\n\r\n        {{ fullname }}\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar *ngIf=\"listTemporary.length>0\" style=\"--background: #eaeaea;color: #333333;\">\r\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;text-align: left;\">\r\n      Anda mempunyai laporan sementara !\r\n      <ion-button style=\"position: absolute;top: -3px;right: 10px;\" [routerLink]=\"['/home/temporaryreport']\" color=\"warning\" size=\"small\">Lihat</ion-button>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n\r\n\r\n\r\n  <ion-card style=\"margin-top: 10px;\">\r\n\r\n    <img src=\"./assets/edmc_3.png\" />\r\n    <ion-card-content style=\"padding: 0px;\">\r\n      <ion-grid fixed=\"true\">\r\n        <ion-row>\r\n\r\n          <ion-col size=\"4\">\r\n            <!-- <ion-button color=\"warning\" (click)=\"gotoListLaporan('Mingguan')\" size=\"small\" expand=\"block\">Mingguan\r\n            </ion-button> -->\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <!-- <ion-button color=\"warning\" (click)=\"gotoListLaporan('Bulanan')\" size=\"small\" expand=\"block\">Bulanan\r\n            </ion-button> -->\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <!-- <ion-button color=\"warning\" (click)=\"gotoListLaporan('Triwulan')\" size=\"small\" expand=\"block\">Triwulan\r\n            </ion-button> -->\r\n            <ion-button color=\"warning\" [routerLink]=\"['/laporan/groups']\" size=\"small\" expand=\"block\">Isi Laporan\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card class=\"welcoming-panel\" style=\"margin-top: 10px;\">\r\n    <ion-card-content>\r\n      <b style=\"color: #ffc409;\">Pelajari dan bagikan</b>\r\n      <br />\r\n      <span>Lihat petunjuk teknis dan rekomendasi untuk COVID-19</span>\r\n      <!-- <br />\r\n      <ion-button color=\"warning\" size=\"small\">Lihat Detail</ion-button> -->\r\n    </ion-card-content>\r\n    <ion-item lines=\"none\">\r\n      <ion-button [routerLink]=\"['/home/media']\" color=\"warning\" size=\"small\" slot=\"end\" expand=\"block\">Lihat Detail</ion-button>\r\n      \r\n      <!-- <ion-button [routerLink]=\"['/home/dashboard']\" color=\"warning\" size=\"small\" slot=\"end\" expand=\"block\">Dashboard</ion-button> -->\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n  <!-- <div id=\"\">\r\n    <ion-grid fixed=\"true\">\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-card style=\"padding-top: 0px !important;margin-top: 0px !important;\">\r\n            <img src=\"./assets/icons/kegiatan-gugus-tugas-3.png\" />\r\n            <ion-card-content>Kegiatan Gugus Tugas</ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-card style=\"padding-top: 0px !important;margin-top: 0px !important;\">\r\n            <img src=\"./assets/icons/help-3.png\" />\r\n            <ion-card-content>Bantuan</ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div> -->\r\n    \r\n\r\n\r\n\r\n  <div id=\"container\">\r\n    <ion-grid fixed=\"true\">\r\n\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <img class=\"icon\" src=\"./assets/icons/diagram.png\" />\r\n          <div>\r\n            Diagnostik\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"4\" (click)=\"isiDataDasar()\">\r\n          <img class=\"icon\" src=\"./assets/icons/Laporan.png\" />\r\n          <div>\r\n            Kegiatan Gugus Tugas\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" (click)=\"gotoHelp()\">\r\n          <img class=\"icon\" src=\"./assets/icons/Help.png\" />\r\n          <div>\r\n            Bantuan\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n    </ion-grid>\r\n\r\n    \r\n\r\n    <!-- <div style=\"margin-top:15px;\">\r\n      <ion-button (click)=\"logOutUser()\" size=\"small\" fill=\"outline\" color=\"danger\">Keluar</ion-button>\r\n    </div> -->\r\n    <!-- <p style=\"font-size: 12px;margin-bottom: 15px;color: #2e9998;margin-top: 15px;\">\r\n      © 2020 Kemendesa | <a  [routerLink]=\"['/home/privacypolicy']\">Kebijakan Privasi</a>\r\n    </p> -->\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/privacypolicy/privacypolicy.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/privacypolicy/privacypolicy.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Kebijakan Privasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list>\n\n    <ion-list-header>\n          Kebijakan Privasi\n        </ion-list-header>\n\n  <ion-item lines=\"full\">\n    <ion-label>Privacy Policy ini mengungkapkan kebijakan penanganan data-data pribadi Pengguna pada situs dan aplikasi eRelawanDesa-COVID-19 yang dikelola oleh Ditjen Pembangunan dan Pemberdayaan Masyarakat Desa (PPMD)/Balilatfo,  Kementerian Desa PDTT</ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Informasi yang eRelawanDesa-COVID-19 ambil dari Pengguna\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Informasi yang Kami ambil dari Pengguna, seperti pemetaan data desa maupun informasi mengenai penerima manfaat yang dimasukkan Pengguna.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Kebijakan Koreksi\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      COVID-19 jika dibutuhkan, di setiap saat, tanpa kewajiban pemberitahuan kepada pihak manapun. Perubahan-perubahan ini, sewajarnya tidak akan memengaruhi maksud dan tujuan dari informasi yang telah disampaikan kepada Pengguna.<br/><br/>\n                    Apabila terdapat koreksi atau klarifikasi yang Kami lakukan, sepanjang dimungkinkan, Kami akan mencatat koreksi dan klarifikasi tersebut pada halaman ini selama 60 hari kalender setelah koreksi atau klarifikasi dibuat, dengan melampirkan informasi maupun referensi sewajarnya.\"\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Cookie dan teknologi lainnya\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Ketika Pengguna mengunjungi situs web Kami, Kami akan mengumpulkan informasi dalam bentuk \"cookie\" di komputer Pengguna, yang memungkinkan Kami untuk mengetahui ketika Pengguna mengunjungi situs Kami di masa mendatang. Cookie adalah satu bagian data yang disimpan di komputer Pengguna yang berkaitan dengan informasi tentang Pengguna tersebut.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          IP address\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Ditjen PPMD/Balilatfo menyimpan IP (Internet Protocol) address, atau lokasi komputer Pengguna di Internet, untuk keperluan administrasi sistem dan troubleshooting. Kami menggunakan IP address secara keseluruhan (agregat) untuk mengetahui lokasi-lokasi yang mengakses situs eRelawanDesa-COVID-19.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Log files\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Data log hanya digunakan dalam bentuk agregat (keseluruhan) untuk menganalisa penggunaan web dan aplikasi Kami.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Perlindungan dan keamanan informasi\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Keamanan Data: selalu ada risiko pihak ketiga yang tak diinginkan berhasil membobol sistem keamanan Kami atau transmisi informasi Pengguna melalui Internet mungkin diganggu. Untuk mencegah akses data oleh pihak yang tidak memiliki wewenang, menjaga keakuratan data dan memastikan Penggunaan informasi yang semestinya, Ditjen PPMD/Balilatfo berkomitmen untuk menjaga keamanan tersebut dengan menggunakan prosedur fisik, elektronik dan manajerial untuk melindungi informasi yang Kami kumpulkan secara online dan Kami akan mengenkripsikan transmisi informasi tersebut atau menggunakan teknologi Kami.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Informasi lainnya\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Privacy Policy ini dapat diubah atau ditambah sewaktu-waktu. Setiap perubahan akan ditampilkan di halaman ini. Jika Ditjen PPMD/Balilatfo melakukan perubahan yang sangat signifikan atau perubahan materi, menggunakan data pribadi Pengguna, perubahannya akan ditampilkan setidaknya 30 hari kalender sebelum diberlakukan dan Pengguna yang telah terdaftar akan diberitahukan melalui e-mail.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Persetujuan terhadap kebijakan ini\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Dengan menggunakan situs/aplikasi ini, hal tersebut menandakan bahwa Pengguna menyetujui kebijakan ini. Apabila Pengguna tidak setuju dengan kebijakan penggunaan Ditjen PPMD/Balilatfo, silahkan untuk tidak menggunakan situs/aplikasi ini. Perubahan terhadap situs ini mengacu terhadap apa yang telah disebutkan sebelumnya.<br/><br/>\n                    Apabila Pengguna mempunyai pertanyaan lebih lanjut mengenai kebijakan Penggunaan situs atau aplikasi ini, mohon hubungi Kami pada:\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Direktorat Jenderal Pembangunan dan Pemberdayaan Masyarakat Desa/Badan Penelitian,  Pengembangan Pelatihan dan Informasi Kementerian Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi Republik Indonesia\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Jl. TMP Kalibata No.17<br/>\n                    Jakarta Selatan, DKI Jakarta,<br/>\n                    Indonesia 12750<br/>\n                    Telp : 021 - 7994372<br/>\n    </ion-label>\n  </ion-item>\n\n  \n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/profile/profile.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/profile/profile.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div style=\"background: #eaeaea;color: #333333;text-align: center;padding-top: 30px;padding-bottom: 30px;\">\n    <ion-icon style=\"font-size: 70px;\" color=\"medium\" name=\"person-circle\"></ion-icon>\n    <h3>{{ name }}<br/>\n  <small><ion-text color=\"primary\">{{email}} | {{phone}}</ion-text></small></h3>\n    \n  </div>\n\n  <ion-list>\n    <ion-item lines=\"full\" (click)=\"gotoPage('/home/changepassword')\">\n      <ion-icon slot=\"start\" name=\"lock-open-outline\"></ion-icon>\n      <ion-label>Ubah Password</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"full\" (click)=\"gotoPage('/home/privacypolicy')\">\n      <ion-icon slot=\"start\" name=\"shield-checkmark-outline\"></ion-icon>\n      <ion-label>Kebijakan Privasi</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"full\" (click)=\"gotoHelp()\">\n      <ion-icon slot=\"start\" name=\"help-circle-outline\"></ion-icon>\n      <ion-label>Bantuan</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item lines=\"full\" (click)=\"openAppsVersion()\">\n      <ion-icon slot=\"start\" name=\"cafe-outline\"></ion-icon>\n      <ion-label>Versi Aplikasi {{ showAppVersion }}</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n\n  <div style=\"padding: 15px;\">\n    <ion-button (click)=\"logOutUser()\" expand=\"block\" color=\"danger\">Keluar</ion-button>\n  </div>\n\n  \n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/temporaryreport/temporaryreport.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/temporaryreport/temporaryreport.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Laporan Tersimpan</ion-title>\n  </ion-toolbar>\n\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      <ion-grid fixed=\"true\">\n        <ion-row>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" color=\"medium\" (click)=\"alertRemoveAllTemporery()\" fill=\"solid\">Hapus Semua</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" color=\"warning\" (click)=\"alertSendAllTemp()\" fill=\"solid\">Kirim Semua</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n      \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"listMingguan.length>0\">\n    <ion-list-header>\n          Laporan Mingguan\n        </ion-list-header>\n    <ion-item lines=\"full\" *ngFor=\"let item of listMingguan\" (click)=\"alertToOptionSavingReport('Mingguan',item)\">\n      <ion-label>\n        <h2>{{item.to}}</h2>\n          <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"alert-circle-sharp\"></ion-icon>\n      \n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf=\"listBulanan.length>0\">\n    <ion-list-header>\n          Laporan Bulanan\n        </ion-list-header>\n    <ion-item lines=\"full\" *ngFor=\"let item of listBulanan\" (click)=\"alertToOptionSavingReport('Bulanan',item)\">\n      <ion-label>\n        <h2>{{item.to}}</h2>\n          <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"alert-circle-sharp\"></ion-icon>\n      \n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf=\"listTriwulan.length>0\">\n    <ion-list-header>\n          Laporan Triwulan\n        </ion-list-header>\n    <ion-item lines=\"full\" *ngFor=\"let item of listTriwulan\" (click)=\"alertToOptionSavingReport('Triwulan',item)\">\n      <ion-label>\n        <h2>{{item.to}}</h2>\n          <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"alert-circle-sharp\"></ion-icon>\n      \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/changepassword/changepassword.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/home/changepassword/changepassword.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n\n.form ion-item {\n  border: 1px solid #eaeaea !important;\n  margin-top: 7px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.form ion-select {\n  width: 100%;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFPSTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7QUFKUjs7QUFVSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQUjs7QUFVSTtFQUNJLFdBQUE7QUFSUjs7QUFlQTtFQUVJLGdDQUFBO0FBYkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTUgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybSB7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWEgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/changepassword/changepassword.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/home/changepassword/changepassword.page.ts ***!
  \******************************************************************/
/*! exports provided: ChangepasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function() { return ChangepasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let ChangepasswordPage = class ChangepasswordPage {
    constructor(NavController, toastController, apiService, loadingController, alertController, router) {
        this.NavController = NavController;
        this.toastController = toastController;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.password = '';
        this.repassword = '';
        this.type = 'password';
    }
    ngOnInit() {
        let netwotkInformation = localStorage.getItem('netwotkInformation');
        if (netwotkInformation == 'offline') {
            this.alertNeedInternet();
        }
    }
    alertNeedInternet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Warning !',
                message: 'Halaman ini membutuhkan koneksi internet!',
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Kembali',
                        handler: () => {
                            this.goBack();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    changeCk(event) {
        if (event.detail.checked) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    }
    alertToRelogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Password berhasil diubah',
                message: 'Login kembali menggunakan Password baru Anda!',
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Login Ulang',
                        handler: () => {
                            this.router.navigate(['front/']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'menyimpan data...',
                mode: 'ios',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            // console.log('Loading dismissed!');
        });
    }
    presentToast(color, header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: header,
                message: message,
                color: color,
                mode: "ios",
                position: "middle",
                duration: 3000
            });
            toast.present();
        });
    }
    savingData() {
        // alert('ji');
        if (this.password != '' && this.repassword != '') {
            if (this.password == this.repassword) {
                if (this.password.length >= 6) {
                    this.presentLoading();
                    let currentUser = localStorage.getItem('currentUser');
                    let d = JSON.parse(currentUser);
                    let params = {
                        password: this.password
                    };
                    this.subscribe = this.apiService.patch('users/' + d.user.id, params).subscribe(data => {
                        localStorage.removeItem('currentUser');
                        localStorage.removeItem('geo_id');
                        localStorage.removeItem('api_key');
                        this.alertToRelogin();
                    }, error => {
                        setTimeout(() => {
                            this.presentToast('danger', 'Error', 'Data tidak tersimpan');
                        }, 2000);
                        // this.presentToast('danger', 'Gagal Update Data', 'Mohono Hubungi Pihak Terkait');
                    });
                }
                else {
                    this.presentToast('warning', 'Warning', 'Password minimal 6 karakter');
                }
            }
            else {
                this.presentToast('warning', 'Warning', 'Password dan Re-Password tidak cocok');
            }
        }
        else {
            this.presentToast('warning', 'Warning', 'Semua form wajib diisi');
        }
    }
    goBack() {
        this.NavController.navigateBack(['/home/profile'], { replaceUrl: true });
    }
};
ChangepasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChangepasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepassword',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./changepassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/changepassword/changepassword.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./changepassword.page.scss */ "./src/app/pages/home/changepassword/changepassword.page.scss")).default]
    })
], ChangepasswordPage);



/***/ }),

/***/ "./src/app/pages/home/dashboard/dashboard.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/dashboard/dashboard.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/home/dashboard/dashboard.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home/dashboard/dashboard.page.ts ***!
  \********************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DashboardPage = class DashboardPage {
    constructor() { }
    ngOnInit() {
    }
};
DashboardPage.ctorParameters = () => [];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/home/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ }),

/***/ "./src/app/pages/home/help/help.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/help/help.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBT0E7RUFDSSxvQ0FBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9oZWxwL2hlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/help/help.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/help/help.page.ts ***!
  \**********************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let HelpPage = class HelpPage {
    constructor(NavController, route) {
        this.NavController = NavController;
        this.route = route;
        this.params = this.route.snapshot.params;
    }
    ngOnInit() {
    }
    goBack() {
        let path = (this.params.page != '') ? '/' + this.params.page : '';
        this.NavController.navigateBack(['/home' + path], { replaceUrl: true });
    }
};
HelpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/help/help.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./help.page.scss */ "./src/app/pages/home/help/help.page.scss")).default]
    })
], HelpPage);



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.page */ "./src/app/pages/home/landing/landing.page.ts");
/* harmony import */ var _help_help_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/help.page */ "./src/app/pages/home/help/help.page.ts");
/* harmony import */ var _privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacypolicy/privacypolicy.page */ "./src/app/pages/home/privacypolicy/privacypolicy.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.page */ "./src/app/pages/home/profile/profile.page.ts");
/* harmony import */ var _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./changepassword/changepassword.page */ "./src/app/pages/home/changepassword/changepassword.page.ts");
/* harmony import */ var _temporaryreport_temporaryreport_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./temporaryreport/temporaryreport.page */ "./src/app/pages/home/temporaryreport/temporaryreport.page.ts");
/* harmony import */ var _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.page */ "./src/app/pages/home/dashboard/dashboard.page.ts");










const routes = [
    { path: '', component: _landing_landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"] },
    {
        path: 'media',
        loadChildren: () => __webpack_require__.e(/*! import() | media-media-module */ "media-media-module").then(__webpack_require__.bind(null, /*! ./media/media.module */ "./src/app/pages/home/media/media.module.ts")).then(m => m.MediaPageModule)
    },
    {
        path: 'help',
        component: _help_help_page__WEBPACK_IMPORTED_MODULE_4__["HelpPage"]
    },
    {
        path: 'privacypolicy',
        component: _privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacypolicyPage"]
    },
    {
        path: 'profile',
        component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    },
    {
        path: 'changepassword',
        component: _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_7__["ChangepasswordPage"]
    },
    {
        path: 'temporaryreport',
        component: _temporaryreport_temporaryreport_page__WEBPACK_IMPORTED_MODULE_8__["TemporaryreportPage"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_9__["DashboardPage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _landing_landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.page */ "./src/app/pages/home/landing/landing.page.ts");
/* harmony import */ var _help_help_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help/help.page */ "./src/app/pages/home/help/help.page.ts");
/* harmony import */ var _privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privacypolicy/privacypolicy.page */ "./src/app/pages/home/privacypolicy/privacypolicy.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.page */ "./src/app/pages/home/profile/profile.page.ts");
/* harmony import */ var _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./changepassword/changepassword.page */ "./src/app/pages/home/changepassword/changepassword.page.ts");
/* harmony import */ var _temporaryreport_temporaryreport_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./temporaryreport/temporaryreport.page */ "./src/app/pages/home/temporaryreport/temporaryreport.page.ts");
/* harmony import */ var _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.page */ "./src/app/pages/home/dashboard/dashboard.page.ts");













let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_landing_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"], _help_help_page__WEBPACK_IMPORTED_MODULE_7__["HelpPage"],
            _privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_8__["PrivacypolicyPage"], _profile_profile_page__WEBPACK_IMPORTED_MODULE_9__["ProfilePage"],
            _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_10__["ChangepasswordPage"], _temporaryreport_temporaryreport_page__WEBPACK_IMPORTED_MODULE_11__["TemporaryreportPage"], _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_12__["DashboardPage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/landing/landing.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/home/landing/landing.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content {\n  --background: #ffffff;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --padding-top: 10px;\n}\n\nion-content .welcoming-title {\n  color: #2e9998;\n  font-weight: bold;\n  margin-bottom: 0px;\n  margin-top: 5px;\n  font-size: 17px;\n}\n\nion-content .welcoming-text {\n  margin-top: 0px;\n  color: #2e9998;\n}\n\nion-content .welcoming-panel {\n  background: #008080;\n  color: #ffffff !important;\n}\n\nion-content .welcoming-panel-2 {\n  color: #008080;\n  background: #caece9;\n}\n\nion-content #container {\n  text-align: center;\n}\n\nion-content #container ion-col {\n  padding: 0px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\nion-content #container ion-col img.icon {\n  max-width: 50%;\n  margin-bottom: 0px;\n}\n\nion-content #container ion-col div {\n  color: #2e9998;\n  font-weight: bold;\n  font-size: 14px;\n  padding: 10px;\n}\n\nion-content #container ion-col ion-card {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBTUE7RUFFSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1JO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUpSOztBQU9JO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFMUjs7QUFTSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFQUjs7QUFVSTtFQUVJLGNBQUE7RUFDQSxtQkFBQTtBQVRSOztBQVlJO0VBRUksa0JBQUE7QUFYUjs7QUFvQlE7RUFTSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTFCWjs7QUE0Qlk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUExQmhCOztBQTZCWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0FBNUJoQjs7QUErQlk7RUFDSSxnQkFBQTtBQTdCaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgLndlbGNvbWluZy10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICMyZTk5OTg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWluZy10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgY29sb3I6ICMyZTk5OTg7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21pbmctcGFuZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDgwODA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29taW5nLXBhbmVsLTIge1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwODA4MDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWluZXIge1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gbGVmdDogMDtcclxuICAgICAgICAvLyByaWdodDogMDtcclxuICAgICAgICAvLyB0b3A6IDUwJTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2NhZWNlOTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxNTBweDtcclxuXHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWcuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMmU5OTk4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/landing/landing.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/home/landing/landing.page.ts ***!
  \****************************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/app-minimize/ngx */ "./node_modules/@ionic-native/app-minimize/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment/locale/id */ "./node_modules/moment/locale/id.js");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_6__);







let LandingPage = class LandingPage {
    constructor(apiService, NavController, platform, routerOutlet, appMinimize, alertController, router, loadingController) {
        this.apiService = apiService;
        this.NavController = NavController;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
        this.appMinimize = appMinimize;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.counter = 0;
        this.fullname = '';
        this.username = '';
        this.listTemporary = [];
        this.isDataDasarChecked = false;
        this.isDataRegistrasiDusunChecked = false;
        this.internetConnection = true;
        this.geo_id = localStorage.getItem('geo_id');
    }
    ngOnInit() {
        this.subBack = this.platform.backButton.subscribe(() => {
            if (this.routerOutlet.canGoBack()) {
            }
            else {
                if (this.counter == 0) {
                    this.counter++;
                    // this.presentAlertConfirm();
                    setTimeout(() => { this.counter = 0; }, 3000);
                }
                else {
                    this.presentAlertConfirm();
                }
            }
        });
    }
    ionViewDidEnter() {
        // check update
        this.checkDataUpdate();
        // this.presentProgressLoading('Loading...');
        this.getFirstData();
        this.chekingTemporarySave();
    }
    presentProgressLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.progressloading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: message,
                mode: 'ios',
                duration: 10000
            });
            return this.progressloading.present();
        });
    }
    checkDataUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let netwotkInformation = localStorage.getItem('netwotkInformation');
            if (netwotkInformation == 'online') {
                try {
                    yield this.getDataToOffline();
                }
                catch (error) {
                }
            }
        });
    }
    getDataToOffline() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, rejected) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.subs = this.apiService.get('v2/user_area_sync_offline?geo_id=' + this.geo_id, {}).subscribe(data => {
                    console.log(data);
                    sessionStorage.setItem(this.geo_id + '_dataOffline', JSON.stringify(data));
                    resolve(data);
                }, error => {
                    console.log(error);
                    rejected(error);
                });
            }));
        });
    }
    getFirstData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let netwotkInformation = localStorage.getItem('netwotkInformation');
            if (netwotkInformation == 'online') {
                // ==== Online condition ===
                try {
                    yield this.getProfile();
                    yield this.getListDusun();
                    if (!this.isDataDasarChecked || !this.isDataRegistrasiDusunChecked) {
                        this.presentAlertPetunjukPertama();
                    }
                    // this.progressloading.dismiss();
                }
                catch (error) {
                    if (error.status == 401) {
                        this.alertToRelogin();
                    }
                }
            }
            else {
                // ==== Offline condition ===
                let currentUser = localStorage.getItem('currentUser');
                if (currentUser != null && currentUser != 'null' && currentUser != '') {
                    let d = JSON.parse(currentUser);
                    let usr = d.user;
                    this.fullname = usr.name;
                    this.username = usr.email;
                    // this.progressloading.dismiss();
                }
                else {
                    this.alertToRelogin();
                }
            }
        });
    }
    presentAlertPetunjukPertama() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let header = 'Petunjuk Memulai';
            let message = 'Mulailah dengan mengisi data dasar desa.';
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                mode: "ios",
                backdropDismiss: true,
                buttons: [
                    {
                        text: 'Isi Data Dasar',
                        handler: data => {
                            this.isiDataDasar();
                            // this.presentAlertSocialSharing(medias);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertToRelogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Warning !',
                message: 'Akun anda terdeteksi sedang digunakan diperangkat lain, mohon login kembali untuk mendapatkan akses Anda kembali',
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Login Ulang',
                        handler: () => {
                            localStorage.removeItem('currentUser');
                            localStorage.removeItem('geo_id');
                            localStorage.removeItem('api_key');
                            this.router.navigate(['front/']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertDinamis(header, message, backdropDismiss) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                mode: "ios",
                backdropDismiss: backdropDismiss,
                buttons: [
                    {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertNeedInternet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Warning !',
                message: 'Halaman ini membutuhkan koneksi internet!',
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: () => {
                            // this.goBack();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    doRefresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.getProfile();
                yield this.getListDusun();
                if (!this.isDataDasarChecked || !this.isDataRegistrasiDusunChecked) {
                    this.presentAlertPetunjukPertama();
                }
            }
            catch (error) {
                if (error.status == 401) {
                    this.alertToRelogin();
                }
            }
            console.log(event);
            setTimeout(() => {
                event.target.complete();
            }, 2000);
        });
    }
    chekingTemporarySave() {
        let temporarySave = localStorage.getItem('temporarySave_' + this.geo_id);
        if (temporarySave != null && temporarySave != 'null' && temporarySave != '') {
            this.listTemporary = JSON.parse(temporarySave);
        }
        else {
            this.listTemporary = [];
        }
    }
    getProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let currentUser = localStorage.getItem('currentUser');
                let d = JSON.parse(currentUser);
                this.subs = this.apiService.get('users/' + d.user.id + '?no_expand=user_areas', {}).subscribe(data => {
                    // this.catecories = data.List;
                    let usr = data.user;
                    // console.log(usr);
                    this.fullname = usr.name;
                    this.username = usr.email;
                    this.isDataDasarChecked = (usr.ts_updated != '' && usr.ts_updated != null)
                        ? true : false;
                    resolve('');
                }, error => {
                    reject(error);
                });
            }));
        });
    }
    getListDusun() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.subs = this.apiService.get('user_areas?no_expand=user,geo&geo_id=' + this.geo_id, {}).subscribe(data => {
                    this.isDataRegistrasiDusunChecked = (data.length > 0) ? true : false;
                    // console.log(data);
                    resolve('');
                }, error => {
                    reject(error);
                });
            }));
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Keluar dari aplikasi',
                message: 'Apakah anda ingin keluar dari aplikasi ?',
                mode: "ios",
                backdropDismiss: true,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.counter = 0;
                        }
                    }, {
                        text: 'Ya',
                        handler: () => {
                            this.appMinimize.minimize();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    gotoHelp() {
        // 
        this.NavController.navigateForward(['/home/help', { page: '' }]);
    }
    isiDataDasar() {
        this.NavController.navigateForward(['/basicdata']);
    }
    gotoListLaporan(type) {
        let netwotkInformation = localStorage.getItem('netwotkInformation');
        if (netwotkInformation == 'online') {
            if (!this.isDataRegistrasiDusunChecked || !this.isDataDasarChecked) {
                this.presentAlertPetunjukPertama();
            }
            else {
                this.NavController.navigateForward(['/laporan/listlaporan', { Type: type }]);
            }
        }
        else {
            this.alertNeedInternet();
            // let dataOffline = sessionStorage.getItem(this.geo_id + '_dataOffline');
            // if (dataOffline != null && dataOffline != 'null' && dataOffline != '') {
            //   let d = JSON.parse(dataOffline);
            //   if (d.UserAreas.length > 0) {
            //     let Questionnaire = d.Questionnaire[type];
            //     if (Questionnaire.length > 0) {
            //       console.log(Questionnaire);
            //       sessionStorage.setItem(this.geo_id + '_Questionnaire_' + type, JSON.stringify(Questionnaire));
            //       this.NavController.navigateForward(['/laporan/listlaporan', { Type: type }]);
            //     } else {
            //       this.alertDinamis('Warning!', 'Laporan ' + type + ', belum ada daftar pertanyaan yang di publikasikan!', false);
            //     }
            //   } else {
            //     this.alertDinamis('Warning!', 'Tidak ada data dusun', false);
            //   }
            // } else {
            //   this.alertDinamis('Warning!', 'Tidak ada data offline', false);
            // }
        }
    }
};
LandingPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"] },
    { type: _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_4__["AppMinimize"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
LandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/landing/landing.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/home/landing/landing.page.scss")).default]
    })
], LandingPage);



/***/ }),

/***/ "./src/app/pages/home/privacypolicy/privacypolicy.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/home/privacypolicy/privacypolicy.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9wcml2YWN5cG9saWN5L3ByaXZhY3lwb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBT0E7RUFFSSxnQ0FBQTtBQUxKOztBQVFBO0VBQ0ksb0NBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcHJpdmFjeXBvbGljeS9wcml2YWN5cG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIC8vIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/privacypolicy/privacypolicy.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/privacypolicy/privacypolicy.page.ts ***!
  \****************************************************************/
/*! exports provided: PrivacypolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPage", function() { return PrivacypolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let PrivacypolicyPage = class PrivacypolicyPage {
    constructor(NavController) {
        this.NavController = NavController;
    }
    ngOnInit() {
    }
    goBack() {
        this.NavController.navigateBack(['/home/profile'], { replaceUrl: true });
    }
};
PrivacypolicyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PrivacypolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacypolicy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./privacypolicy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/privacypolicy/privacypolicy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./privacypolicy.page.scss */ "./src/app/pages/home/privacypolicy/privacypolicy.page.scss")).default]
    })
], PrivacypolicyPage);



/***/ }),

/***/ "./src/app/pages/home/profile/profile.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/home/profile/profile.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBT0E7RUFFSSxnQ0FBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5pb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/profile/profile.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/home/profile/profile.page.ts ***!
  \****************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");







let ProfilePage = class ProfilePage {
    constructor(authService, NavController, apiService, alertController, router, appVersion) {
        this.authService = authService;
        this.NavController = NavController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.router = router;
        this.appVersion = appVersion;
        this.showAppVersion = '-';
        this.appVersion.getVersionNumber().then((version) => {
            // console.log(version);
            this.showAppVersion = version;
        }).catch(err => {
            // console.log(err);
        });
    }
    ngOnInit() {
        this.getDetailUser();
    }
    // ionViewDidEnter() {
    //   this.getDetailUser();
    // }
    alertNeedInternet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Warning !',
                message: 'Halaman ini membutuhkan koneksi internet!',
                mode: "ios",
                backdropDismiss: true,
                buttons: [
                    {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: () => {
                            // this.goBack();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getDetailUser() {
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser != null && currentUser != 'null' && currentUser != '') {
            let d = JSON.parse(currentUser);
            let usr = d.user;
            this.name = usr.name;
            this.email = usr.email;
            this.phone = (usr.phone_number != '' && usr.phone_number != null && usr.phone_number != 'null') ? '+62 ' + usr.phone_number : '';
        }
        else {
            this.alertToRelogin();
        }
    }
    gotoHelp() {
        // 
        this.NavController.navigateForward(['/home/help', { page: 'profile' }]);
    }
    gotoPage(path) {
        this.NavController.navigateForward([path]);
    }
    goBack() {
        this.NavController.navigateBack(['/home'], { replaceUrl: true });
    }
    logOutUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let netwotkInformation = localStorage.getItem('netwotkInformation');
            if (netwotkInformation == 'offline') {
                this.alertNeedInternet();
            }
            else {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Logout dari aplikasi ?',
                    message: 'Anda akan di minta login kembali',
                    mode: "ios",
                    backdropDismiss: true,
                    buttons: [
                        {
                            text: 'Tidak',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                // this.counter = 0;
                            }
                        },
                        {
                            text: 'Ya',
                            handler: () => {
                                this.subscribe = this.authService.logoutUser().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                }), error => {
                                    localStorage.removeItem('currentUser');
                                    localStorage.removeItem('geo_id');
                                    localStorage.removeItem('api_key');
                                    this.router.navigate(['front/']);
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    openAppsVersion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Versi Aplikasi',
                message: this.showAppVersion,
                mode: "ios",
                backdropDismiss: true,
                buttons: [
                    {
                        text: 'Tutup',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertToRelogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Warning !',
                message: 'Akun anda terdeteksi sedang digunakan diperangkat lain, mohon login kembali untuk mendapatkan akses Anda kembali',
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Login Ulang',
                        handler: () => {
                            localStorage.removeItem('currentUser');
                            localStorage.removeItem('geo_id');
                            localStorage.removeItem('api_key');
                            this.router.navigate(['front/']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/profile/profile.page.html")).default,
        providers: [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/home/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/pages/home/temporaryreport/temporaryreport.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/temporaryreport/temporaryreport.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS90ZW1wb3JhcnlyZXBvcnQvdGVtcG9yYXJ5cmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLHFCQUFBO0VBQ0EsY0FBQTtBQURSOztBQVdBO0VBQ0ksb0NBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvdGVtcG9yYXJ5cmVwb3J0L3RlbXBvcmFyeXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/temporaryreport/temporaryreport.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/home/temporaryreport/temporaryreport.page.ts ***!
  \********************************************************************/
/*! exports provided: TemporaryreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporaryreportPage", function() { return TemporaryreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/locale/id */ "./node_modules/moment/locale/id.js");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






// import { resolve } from 'dns';
let TemporaryreportPage = class TemporaryreportPage {
    constructor(NavController, apiService, alertController, toastController, loadingController, actionSheetController) {
        this.NavController = NavController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.listTemporary = [];
        this.listMingguan = [];
        this.listBulanan = [];
        this.listTriwulan = [];
        this.listDusun = [];
        this.checkingListTemporary();
    }
    ngOnInit() {
    }
    presentAlertNoDusunYet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Konfirmasi !',
                message: 'Harap menambahkan data Dusun terlebih dahulu',
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Kembali',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.goBack();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(color, header, message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: header,
                message: message,
                color: color,
                mode: "ios",
                position: "middle",
                duration: duration,
            });
            toast.present();
        });
    }
    presentLoading(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: message,
                mode: 'ios',
                duration: duration,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            // console.log('Loading dismissed!');
        });
    }
    presentProgressLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.progressloading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: message,
                mode: 'ios'
            });
            return this.progressloading.present();
        });
    }
    alertRemoveAllTemporery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.listMingguan.length > 0 ||
                this.listBulanan.length > 0 ||
                this.listTriwulan.length > 0) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Info !',
                    message: 'Hapus semua penyimpanan sementara?',
                    mode: "ios",
                    backdropDismiss: true,
                    buttons: [
                        {
                            text: 'Batal',
                            role: 'cancel'
                        },
                        {
                            text: 'Ya',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.presentLoading('Menghapus data...', 2000);
                                let geo_id = localStorage.getItem('geo_id');
                                localStorage.setItem('temporarySave_' + geo_id, JSON.stringify([]));
                                setTimeout(() => {
                                    this.presentToast('success', 'Sukses', 'Data laporan sementara telah dibersihkan', 1000);
                                    this.goBack();
                                }, 2000);
                            })
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.alertToBackHome('Info !', 'Tidak ada data temporary');
            }
        });
    }
    alertToBackHome(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tutup',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.goBack();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertAnyErrorNotSend() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Info !',
                message: 'Beberapa data tidak terkirim, silahkan coba kembali beberapa saat lagi atau hapus data yang tidak terkirim!',
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tutup',
                        role: 'cancel'
                    },
                    {
                        text: 'Hapus Data',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.presentLoading('Menghapus data...', 2000);
                            let geo_id = localStorage.getItem('geo_id');
                            localStorage.setItem('temporarySave_' + geo_id, JSON.stringify([]));
                            setTimeout(() => {
                                this.presentToast('success', 'Sukses', 'Data laporan sementara telah dibersihkan', 1000);
                                this.goBack();
                            }, 2000);
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertSendAllTemp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.listMingguan.length > 0 ||
                this.listBulanan.length > 0 ||
                this.listTriwulan.length > 0) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Kirim Semua Laporan',
                    message: 'Pastikan koneksi internet stabil',
                    mode: "ios",
                    backdropDismiss: true,
                    buttons: [
                        {
                            text: 'Batal',
                            role: 'cancel'
                        },
                        {
                            text: 'Ya',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.sendAllTemporary();
                            })
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.alertToBackHome('Info !', 'Tidak ada data temporary');
            }
        });
    }
    alertToOptionSavingReport(Type, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let buttons = [
                {
                    text: 'Isi Kembali',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        try {
                            let newParams = yield this.getDetailLaporan(Type, item);
                            this.actionIsiKembali(newParams);
                        }
                        catch (err) {
                            this.presentToast('danger', 'Gagal mendapatkan data', 'Cobalah bebera saat lagi', 2000);
                        }
                    })
                },
                {
                    text: 'Hapus Laporan Sementara',
                    role: 'destructive',
                    handler: () => {
                        this.removeFromTemporary(item.glue);
                    }
                },
                {
                    text: 'Kirim Laporan',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.presentLoading('Mengirim laporan...', 2000);
                        try {
                            let newParams = yield this.getDetailLaporan(Type, item);
                            yield this.sendAnswer(item, newParams);
                            setTimeout(() => {
                                this.presentToast('success', 'Sukses', 'Data tersimpan', 2000);
                                this.checkingListTemporary();
                            }, 2000);
                        }
                        catch (err) {
                            this.presentToast('danger', 'Gagal mendapatkan data', 'Cobalah bebera saat lagi', 2000);
                        }
                        // await this.sendToServer();
                    })
                },
                {
                    text: 'Tutup',
                    role: 'cancel',
                    handler: () => {
                        // console.log('Cancel clicked');
                    }
                }
            ];
            const actionSheet = yield this.actionSheetController.create({
                header: item.to,
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: buttons
            });
            yield actionSheet.present();
        });
    }
    sendAllTemporary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentProgressLoading('Mengirim data...');
            let anyError = false;
            if (this.listMingguan.length > 0) {
                let Type = 'Mingguan';
                for (let i = 0; i < this.listMingguan.length; i++) {
                    const item = this.listMingguan[i];
                    try {
                        let newParams = yield this.getDetailLaporan(Type, item);
                        yield this.sendAnswer(item, newParams);
                    }
                    catch (error) {
                        anyError = true;
                        this.presentToast('error', 'Tidak terkirim', item.to + ' - ' + item.label, 1000);
                    }
                }
            }
            if (this.listBulanan.length > 0) {
                let Type = 'Bulanan';
                for (let i = 0; i < this.listBulanan.length; i++) {
                    const item = this.listBulanan[i];
                    // let newParams = await this.getDetailLaporan(Type, item);
                    // await this.sendAnswer(item, newParams);
                    try {
                        let newParams = yield this.getDetailLaporan(Type, item);
                        yield this.sendAnswer(item, newParams);
                    }
                    catch (error) {
                        anyError = true;
                        this.presentToast('error', 'Tidak terkirim', item.to + ' - ' + item.label, 1000);
                    }
                }
            }
            if (this.listTriwulan.length > 0) {
                let Type = 'Triwulan';
                for (let i = 0; i < this.listTriwulan.length; i++) {
                    const item = this.listTriwulan[i];
                    // let newParams = await this.getDetailLaporan(Type, item);
                    // await this.sendAnswer(item, newParams);
                    try {
                        let newParams = yield this.getDetailLaporan(Type, item);
                        yield this.sendAnswer(item, newParams);
                    }
                    catch (error) {
                        anyError = true;
                        this.presentToast('error', 'Tidak terkirim', item.to + ' - ' + item.label, 1000);
                    }
                }
            }
            this.checkingListTemporary();
            this.progressloading.dismiss();
            if (anyError) {
                this.alertAnyErrorNotSend();
            }
            else {
                this.alertToBackHome('Sukses !', 'Semua data sementara berhasil dikirimkan!');
            }
        });
    }
    removeFromTemporary(glue) {
        this.presentLoading('Menghapus data...', 2000);
        let geo_id = localStorage.getItem('geo_id');
        let temporarySave = localStorage.getItem('temporarySave_' + geo_id);
        if (temporarySave != '') {
            let datatemporarySave = JSON.parse(temporarySave);
            let newTemp = [];
            for (let index = 0; index < datatemporarySave.length; index++) {
                const element = datatemporarySave[index];
                if (element != glue) {
                    newTemp.push(element);
                }
            }
            localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp));
        }
        setTimeout(() => {
            this.presentToast('success', 'Sukses', 'Data laporan sementara terhapus', 1000);
            // this.goBack();
            this.checkingListTemporary();
        }, 2000);
    }
    getListDusun() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let geo_id = localStorage.getItem('geo_id');
                this.subscribe = this.apiService.get('user_areas?no_expand=user,geo&geo_id=' + geo_id, {}).subscribe(data => {
                    // this.catecories = data.List;
                    resolve(data);
                    // console.log(data);
                }, error => {
                    reject([]);
                });
            }));
        });
    }
    checkingListTemporary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.listDusun = yield this.getListDusun();
            if (this.listDusun.length > 0) {
                this.getListTemporary();
            }
            else {
                this.presentAlertNoDusunYet();
            }
        });
    }
    getListTemporary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let geo_id = localStorage.getItem('geo_id');
            let temporarySave = localStorage.getItem('temporarySave_' + geo_id);
            if (temporarySave != null && temporarySave != 'null' && temporarySave != '') {
                this.listTemporary = JSON.parse(temporarySave);
                this.listMingguan = [];
                this.listBulanan = [];
                this.listTriwulan = [];
                for (let index = 0; index < this.listTemporary.length; index++) {
                    const element = this.listTemporary[index];
                    let sp = element.split('-');
                    if (sp[0] == 'w') {
                        let MomentFormat = moment__WEBPACK_IMPORTED_MODULE_5__().week(sp[1]).year(sp[2]);
                        let Week = MomentFormat.startOf('isoWeek').week();
                        let Year = MomentFormat.endOf('isoWeek').format('YYYY');
                        let Start = MomentFormat.startOf('isoWeek').format('DD MMMM YYYY');
                        let End = MomentFormat.endOf('isoWeek').format('DD MMMM YYYY');
                        let Value = Week + '-' + Year;
                        // get nama dusun
                        let dusunName = '';
                        if (sp.length > 3) {
                            dusunName = yield this.getDusunNameByID(sp[3]);
                        }
                        let newWeek = {
                            target: (sp.length == 3) ? 'desa' : 'dusun',
                            to: (sp.length == 3) ? 'Laporan Untuk Desa' : 'Dusun : ' + dusunName,
                            label: 'Minggu ke : ' + Week + ' - ' + Year,
                            range: Start + ' - ' + End,
                            value: Value,
                            checked: false,
                            glue: element
                        };
                        this.listMingguan.push(newWeek);
                    }
                    else if (sp[0] == 'm') {
                        let MomentFormat = moment__WEBPACK_IMPORTED_MODULE_5__().month(sp[1] - 1).year(sp[2]);
                        let Month = MomentFormat.format('MM');
                        let MonthLabel = MomentFormat.format('MMMM');
                        let Year = MomentFormat.format('YYYY');
                        let Start = MomentFormat.startOf('month').format('DD MMMM YYYY');
                        let End = MomentFormat.endOf('month').format('DD MMMM YYYY');
                        let Value = Month + '-' + Year;
                        // get nama dusun
                        let dusunName = '';
                        if (sp.length > 3) {
                            dusunName = yield this.getDusunNameByID(sp[3]);
                        }
                        let newArr = {
                            target: (sp.length == 3) ? 'desa' : 'dusun',
                            to: (sp.length == 3) ? 'Laporan Untuk Desa' : 'Dusun : ' + dusunName,
                            label: 'Bulan : ' + MonthLabel + ' - ' + Year,
                            range: Start + ' - ' + End,
                            value: Value,
                            checked: false,
                            glue: element
                        };
                        this.listBulanan.push(newArr);
                    }
                    else if (sp[0] == 'q') {
                        let MomentFormat = moment__WEBPACK_IMPORTED_MODULE_5__().quarter(sp[1]).year(sp[0]);
                        let quarter = MomentFormat.quarter();
                        let Year = MomentFormat.format('YYYY');
                        let Start = MomentFormat.startOf('quarter').format('DD MMMM YYYY');
                        let End = MomentFormat.endOf('quarter').format('DD MMMM YYYY');
                        let Value = quarter + '-' + Year;
                        // get nama dusun
                        let dusunName = '';
                        if (sp.length > 3) {
                            dusunName = yield this.getDusunNameByID(sp[3]);
                        }
                        let newArr = {
                            target: (sp.length == 3) ? 'desa' : 'dusun',
                            to: (sp.length == 3) ? 'Laporan Untuk Desa' : 'Dusun : ' + dusunName,
                            label: 'Triwulan ke : ' + quarter + ' - ' + Year,
                            range: Start + ' - ' + End,
                            value: Value,
                            checked: false,
                            glue: element
                        };
                        this.listTriwulan.push(newArr);
                    }
                }
                console.log(this.listMingguan, this.listBulanan, this.listTriwulan);
            }
        });
    }
    getDusunNameByID(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let name = '';
                for (let index = 0; index < this.listDusun.length; index++) {
                    const element = this.listDusun[index];
                    if (id == element.id) {
                        name = element.name;
                    }
                }
                if (name != '') {
                    resolve(name);
                }
                else {
                    reject('');
                }
            }));
        });
    }
    actionIsiKembali(newParams) {
        this.NavController.navigateForward(['/laporan/formlaporan', newParams]);
    }
    getDetailLaporan(Type, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let geo_id = localStorage.getItem('geo_id');
                let splt_glue = item.glue.split('-');
                let glue_to_post = (splt_glue.length == 4) ? splt_glue[0] + '-' + splt_glue[1] + '-' + splt_glue[2] : item.glue;
                this.subscribe = this.apiService.get('v2/user_areas_list_detail?glue=' + glue_to_post + '&geo_id=' + geo_id, {}).subscribe(data => {
                    // console.log(data);
                    if (data.length > 0) {
                        let ans_id_desa = '';
                        let ans_id_dusun = '';
                        let selectDusun_id_questionnaire = '';
                        let selectDesa_id_questionnaire = '';
                        for (let i = 0; i < data.length; i++) {
                            const element = data[i];
                            if (element.target == '0') {
                                ans_id_dusun = element.id;
                                selectDusun_id_questionnaire = element.id_questionnaire;
                            }
                            if (element.target == '1') {
                                ans_id_desa = element.id;
                                selectDesa_id_questionnaire = element.id_questionnaire;
                            }
                        }
                        let user_area_id = (splt_glue.length == 4) ? splt_glue[3] : '';
                        let newParams = {
                            Type: Type,
                            ans_id: (item.target == 'dusun') ? ans_id_dusun : ans_id_desa,
                            ans_id_desa: ans_id_desa,
                            ans_id_dusun: ans_id_dusun,
                            glue: item.glue,
                            id_questionnaire: (item.target == 'dusun') ? selectDusun_id_questionnaire : selectDesa_id_questionnaire,
                            label: item.label,
                            range: item.range,
                            target: item.target,
                            target_name: item.to,
                            user_area_id: (item.target == 'dusun') ? user_area_id : 0,
                            page_from: 'temporary'
                        };
                        resolve(newParams);
                    }
                }, error => {
                    reject(error);
                });
            }));
        });
    }
    sendAnswer(item, newParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let dataAnswers = yield this.sendToServer(item, newParams);
                let params = {
                    ans_id: newParams.ans_id,
                    glue: item.glue,
                    user_area_id: newParams.user_area_id,
                    answer: JSON.stringify(dataAnswers)
                };
                this.subscribe = this.apiService.post('v2/user_area_questionnaire', params).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let geo_id = localStorage.getItem('geo_id');
                    let temporarySave = localStorage.getItem('temporarySave_' + geo_id);
                    temporarySave = JSON.parse(temporarySave);
                    let newTemp = [];
                    for (let index = 0; index < temporarySave.length; index++) {
                        const element = temporarySave[index];
                        if (element != item.glue) {
                            newTemp.push(element);
                        }
                    }
                    localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp));
                    // console.log(data);
                    resolve('');
                }), error => {
                    // this.presentAlertConfirmError();
                    // console.log(error);
                    // this.presentToast('error', 'Gagal', 'Tidak tersimpan', 2000);
                    reject(error);
                });
            }));
        });
    }
    sendToServer(item, newParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let glue = item.glue;
                let id_questionnaire = newParams.id_questionnaire;
                let geo_id = localStorage.getItem('geo_id');
                let data_answer = localStorage.getItem(glue + '_' + geo_id);
                data_answer = JSON.parse(data_answer);
                let drafQuestions = localStorage.getItem(id_questionnaire + '_drafQuestions_' + geo_id);
                drafQuestions = JSON.parse(drafQuestions);
                let answers = [];
                let go_to_id = drafQuestions[0]['id_questionnaire_detail'];
                for (let i = 0; i < drafQuestions.length; i++) {
                    const element = drafQuestions[i];
                    let answer = {};
                    if (go_to_id == element['id_questionnaire_detail']) {
                        go_to_id = (i != (drafQuestions.length - 1))
                            ? drafQuestions[i + 1]['id_questionnaire_detail'] : '';
                        for (let a = 0; a < data_answer.length; a++) {
                            const element_answer = data_answer[a];
                            if (element['id'] == element_answer['id_question']) {
                                if (element['id_question_type'] == 2 || element['id_question_type'] == 3) {
                                    // id_jawabanya
                                    let ans_id_question_opstion = element_answer['answer'][0]['id_question_option'];
                                    answer = element_answer['answer'];
                                    for (let c = 0; c < element['Options'].length; c++) {
                                        const c_e = element['Options'][c];
                                        if (c_e['id'] == ans_id_question_opstion) {
                                            go_to_id =
                                                (c_e['go_to_id'] != '' && c_e['go_to_id'] != null && c_e['go_to_id'] != 'null')
                                                    ? c_e['go_to_id'] : go_to_id;
                                        }
                                    }
                                }
                                else {
                                    answer = element_answer['answer'];
                                }
                            }
                        }
                        if (Object.keys(answer).length !== 0) {
                            let newAns = {
                                ans_id: newParams.ans_id,
                                glue: glue,
                                user_area_id: newParams.user_area_id,
                                geo_id: geo_id,
                                id_questionnaire: id_questionnaire,
                                id_question: element['id'],
                                id_question_type: element['id_question_type'],
                                answer: answer
                            };
                            answers.push(newAns);
                        }
                    }
                }
                if (answers.length > 0) {
                    resolve(answers);
                }
                else {
                    reject(answers);
                }
            }));
        });
    }
    goBack() {
        this.NavController.navigateBack(['/home'], { replaceUrl: true });
    }
};
TemporaryreportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
TemporaryreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temporaryreport',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./temporaryreport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/temporaryreport/temporaryreport.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./temporaryreport.page.scss */ "./src/app/pages/home/temporaryreport/temporaryreport.page.scss")).default]
    })
], TemporaryreportPage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map