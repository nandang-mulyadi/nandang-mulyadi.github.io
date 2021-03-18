(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/changepassword/changepassword.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/changepassword/changepassword.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeChangepasswordChangepasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Ubah Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-card>\n\n  <ion-card-content class=\"form\">\n\n\n    <ion-label>Masukan Password Baru</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"{{type}}\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <ion-label>Ketik Ulang Password Baru</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input type=\"{{type}}\" [(ngModel)]=\"repassword\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-checkbox (ionChange)=\"changeCk($event)\" color=\"success\" slot=\"start\"></ion-checkbox>\n      <ion-label>Show Password</ion-label>\n    </ion-item>\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" (click)=\"goBack()\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" (click)=\"savingData()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Simpan</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dashboard/dashboard.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dashboard/dashboard.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/help/help.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/help/help.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHelpHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Bantuan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div style=\"padding: 15px;\">\n  <ion-text>\n    Hal-hal lain terkait dengan tugas dan fungsi Relawan Desa Melawan COVID-19 dapat ditanyakan ke Call Center Kementrian Desa, PDT.\n  </ion-text>\n  <ul>\n    <li>Transmigrasi <a href=\"tel:+1500040\">1500040</a></li>\n    <li>Layanan SMS Center <a href=\"sms:087788990040\">087788990040</a> atau <a href=\"sms:081288990040\">081288990040</a></li>\n  </ul>\n</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/landing/landing.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/landing/landing.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeLandingLandingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n\n  <ion-toolbar *ngIf=\"!internetConnection\" style=\"--background: #ff1534;color: #ffffff;height: 26px;\">\n    <ion-title size=\"small\" style=\"margin-top: -18px;padding-top: 0px;padding-bottom: 0px;text-align: left;\">\n      Tidak tersambung dengan internet!\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"toolbar-header\">\n    <ion-buttons [routerLink]=\"['/home/profile']\" slot=\"start\" style=\"margin-left: 15px;\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" color=\"light\" name=\"person-circle\"></ion-icon>\n          \n        </ion-button>\n\n        {{ fullname }}\n    </ion-buttons>\n    \n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"listTemporary.length>0\" style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;text-align: left;\">\n      Anda mempunyai laporan sementara !\n      <ion-button style=\"position: absolute;top: -3px;right: 10px;\" [routerLink]=\"['/home/temporaryreport']\" color=\"warning\" size=\"small\">Lihat</ion-button>\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content mode=\"ios\">\n\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n\n\n  <ion-card style=\"margin-top: 10px;\">\n\n    <img src=\"./assets/edmc_3.png\" />\n    <ion-card-content style=\"padding: 0px;\">\n      <ion-grid fixed=\"true\">\n        <ion-row>\n\n          <ion-col size=\"4\">\n            <!-- <ion-button color=\"warning\" (click)=\"gotoListLaporan('Mingguan')\" size=\"small\" expand=\"block\">Mingguan\n            </ion-button> -->\n          </ion-col>\n          <ion-col size=\"4\">\n            <!-- <ion-button color=\"warning\" (click)=\"gotoListLaporan('Bulanan')\" size=\"small\" expand=\"block\">Bulanan\n            </ion-button> -->\n          </ion-col>\n          <ion-col size=\"4\">\n            <!-- <ion-button color=\"warning\" (click)=\"gotoListLaporan('Triwulan')\" size=\"small\" expand=\"block\">Triwulan\n            </ion-button> -->\n            <ion-button color=\"warning\" [routerLink]=\"['/laporan/groups']\" size=\"small\" expand=\"block\">Isi Laporan\n            </ion-button>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"welcoming-panel\" style=\"margin-top: 10px;\">\n    <ion-card-content>\n      <b style=\"color: #ffc409;\">Pelajari dan bagikan</b>\n      <br />\n      <span>Lihat petunjuk teknis dan rekomendasi untuk COVID-19</span>\n      <!-- <br />\n      <ion-button color=\"warning\" size=\"small\">Lihat Detail</ion-button> -->\n    </ion-card-content>\n    <ion-item lines=\"none\">\n      <ion-button [routerLink]=\"['/home/media']\" color=\"warning\" size=\"small\" slot=\"end\" expand=\"block\">Lihat Detail</ion-button>\n      \n      <!-- <ion-button [routerLink]=\"['/home/dashboard']\" color=\"warning\" size=\"small\" slot=\"end\" expand=\"block\">Dashboard</ion-button> -->\n    </ion-item>\n  </ion-card>\n\n\n  <!-- <div id=\"\">\n    <ion-grid fixed=\"true\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card style=\"padding-top: 0px !important;margin-top: 0px !important;\">\n            <img src=\"./assets/icons/kegiatan-gugus-tugas-3.png\" />\n            <ion-card-content>Kegiatan Gugus Tugas</ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card style=\"padding-top: 0px !important;margin-top: 0px !important;\">\n            <img src=\"./assets/icons/help-3.png\" />\n            <ion-card-content>Bantuan</ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div> -->\n    \n\n\n\n  <div id=\"container\">\n    <ion-grid fixed=\"true\">\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <img class=\"icon\" src=\"./assets/icons/diagram.png\" />\n          <div>\n            Diagnostik\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"isiDataDasar()\">\n          <img class=\"icon\" src=\"./assets/icons/Laporan.png\" />\n          <div>\n            Kegiatan Gugus Tugas\n          </div>\n        </ion-col>\n\n        <ion-col size=\"4\" (click)=\"gotoHelp()\">\n          <img class=\"icon\" src=\"./assets/icons/Help.png\" />\n          <div>\n            Bantuan\n          </div>\n        </ion-col>\n      </ion-row>\n\n\n    </ion-grid>\n\n    \n\n    <!-- <div style=\"margin-top:15px;\">\n      <ion-button (click)=\"logOutUser()\" size=\"small\" fill=\"outline\" color=\"danger\">Keluar</ion-button>\n    </div> -->\n    <!-- <p style=\"font-size: 12px;margin-bottom: 15px;color: #2e9998;margin-top: 15px;\">\n      © 2020 Kemendesa | <a  [routerLink]=\"['/home/privacypolicy']\">Kebijakan Privasi</a>\n    </p> -->\n  </div>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/privacypolicy/privacypolicy.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/privacypolicy/privacypolicy.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomePrivacypolicyPrivacypolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Kebijakan Privasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list>\n\n    <ion-list-header>\n          Kebijakan Privasi\n        </ion-list-header>\n\n  <ion-item lines=\"full\">\n    <ion-label>Privacy Policy ini mengungkapkan kebijakan penanganan data-data pribadi Pengguna pada situs dan aplikasi eRelawanDesa-COVID-19 yang dikelola oleh Ditjen Pembangunan dan Pemberdayaan Masyarakat Desa (PPMD)/Balilatfo,  Kementerian Desa PDTT</ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Informasi yang eRelawanDesa-COVID-19 ambil dari Pengguna\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Informasi yang Kami ambil dari Pengguna, seperti pemetaan data desa maupun informasi mengenai penerima manfaat yang dimasukkan Pengguna.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Kebijakan Koreksi\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      COVID-19 jika dibutuhkan, di setiap saat, tanpa kewajiban pemberitahuan kepada pihak manapun. Perubahan-perubahan ini, sewajarnya tidak akan memengaruhi maksud dan tujuan dari informasi yang telah disampaikan kepada Pengguna.<br/><br/>\n                    Apabila terdapat koreksi atau klarifikasi yang Kami lakukan, sepanjang dimungkinkan, Kami akan mencatat koreksi dan klarifikasi tersebut pada halaman ini selama 60 hari kalender setelah koreksi atau klarifikasi dibuat, dengan melampirkan informasi maupun referensi sewajarnya.\"\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Cookie dan teknologi lainnya\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Ketika Pengguna mengunjungi situs web Kami, Kami akan mengumpulkan informasi dalam bentuk \"cookie\" di komputer Pengguna, yang memungkinkan Kami untuk mengetahui ketika Pengguna mengunjungi situs Kami di masa mendatang. Cookie adalah satu bagian data yang disimpan di komputer Pengguna yang berkaitan dengan informasi tentang Pengguna tersebut.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          IP address\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Ditjen PPMD/Balilatfo menyimpan IP (Internet Protocol) address, atau lokasi komputer Pengguna di Internet, untuk keperluan administrasi sistem dan troubleshooting. Kami menggunakan IP address secara keseluruhan (agregat) untuk mengetahui lokasi-lokasi yang mengakses situs eRelawanDesa-COVID-19.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Log files\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Data log hanya digunakan dalam bentuk agregat (keseluruhan) untuk menganalisa penggunaan web dan aplikasi Kami.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Perlindungan dan keamanan informasi\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Keamanan Data: selalu ada risiko pihak ketiga yang tak diinginkan berhasil membobol sistem keamanan Kami atau transmisi informasi Pengguna melalui Internet mungkin diganggu. Untuk mencegah akses data oleh pihak yang tidak memiliki wewenang, menjaga keakuratan data dan memastikan Penggunaan informasi yang semestinya, Ditjen PPMD/Balilatfo berkomitmen untuk menjaga keamanan tersebut dengan menggunakan prosedur fisik, elektronik dan manajerial untuk melindungi informasi yang Kami kumpulkan secara online dan Kami akan mengenkripsikan transmisi informasi tersebut atau menggunakan teknologi Kami.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Informasi lainnya\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Privacy Policy ini dapat diubah atau ditambah sewaktu-waktu. Setiap perubahan akan ditampilkan di halaman ini. Jika Ditjen PPMD/Balilatfo melakukan perubahan yang sangat signifikan atau perubahan materi, menggunakan data pribadi Pengguna, perubahannya akan ditampilkan setidaknya 30 hari kalender sebelum diberlakukan dan Pengguna yang telah terdaftar akan diberitahukan melalui e-mail.\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Persetujuan terhadap kebijakan ini\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Dengan menggunakan situs/aplikasi ini, hal tersebut menandakan bahwa Pengguna menyetujui kebijakan ini. Apabila Pengguna tidak setuju dengan kebijakan penggunaan Ditjen PPMD/Balilatfo, silahkan untuk tidak menggunakan situs/aplikasi ini. Perubahan terhadap situs ini mengacu terhadap apa yang telah disebutkan sebelumnya.<br/><br/>\n                    Apabila Pengguna mempunyai pertanyaan lebih lanjut mengenai kebijakan Penggunaan situs atau aplikasi ini, mohon hubungi Kami pada:\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n          Direktorat Jenderal Pembangunan dan Pemberdayaan Masyarakat Desa/Badan Penelitian,  Pengembangan Pelatihan dan Informasi Kementerian Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi Republik Indonesia\n        </ion-list-header>\n  <ion-item lines=\"full\">\n    <ion-label>\n      Jl. TMP Kalibata No.17<br/>\n                    Jakarta Selatan, DKI Jakarta,<br/>\n                    Indonesia 12750<br/>\n                    Telp : 021 - 7994372<br/>\n    </ion-label>\n  </ion-item>\n\n  \n</ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/profile/profile.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/profile/profile.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div style=\"background: #eaeaea;color: #333333;text-align: center;padding-top: 30px;padding-bottom: 30px;\">\n    <ion-icon style=\"font-size: 70px;\" color=\"medium\" name=\"person-circle\"></ion-icon>\n    <h3>{{ name }}<br/>\n  <small><ion-text color=\"primary\">{{email}} | {{phone}}</ion-text></small></h3>\n    \n  </div>\n\n  <ion-list>\n    <ion-item lines=\"full\" (click)=\"gotoPage('/home/changepassword')\">\n      <ion-icon slot=\"start\" name=\"lock-open-outline\"></ion-icon>\n      <ion-label>Ubah Password</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"full\" (click)=\"gotoPage('/home/privacypolicy')\">\n      <ion-icon slot=\"start\" name=\"shield-checkmark-outline\"></ion-icon>\n      <ion-label>Kebijakan Privasi</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"full\" (click)=\"gotoHelp()\">\n      <ion-icon slot=\"start\" name=\"help-circle-outline\"></ion-icon>\n      <ion-label>Bantuan</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n\n    <ion-item lines=\"full\" (click)=\"openAppsVersion()\">\n      <ion-icon slot=\"start\" name=\"cafe-outline\"></ion-icon>\n      <ion-label>Versi Aplikasi {{ showAppVersion }}</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n\n  <div style=\"padding: 15px;\">\n    <ion-button (click)=\"logOutUser()\" expand=\"block\" color=\"danger\">Keluar</ion-button>\n  </div>\n\n  \n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/temporaryreport/temporaryreport.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/temporaryreport/temporaryreport.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTemporaryreportTemporaryreportPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Laporan Tersimpan</ion-title>\n  </ion-toolbar>\n\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      <ion-grid fixed=\"true\">\n        <ion-row>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" color=\"medium\" (click)=\"alertRemoveAllTemporery()\" fill=\"solid\">Hapus Semua</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" color=\"warning\" (click)=\"alertSendAllTemp()\" fill=\"solid\">Kirim Semua</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n      \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"listMingguan.length>0\">\n    <ion-list-header>\n          Laporan Mingguan\n        </ion-list-header>\n    <ion-item lines=\"full\" *ngFor=\"let item of listMingguan\" (click)=\"alertToOptionSavingReport('Mingguan',item)\">\n      <ion-label>\n        <h2>{{item.to}}</h2>\n          <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"alert-circle-sharp\"></ion-icon>\n      \n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf=\"listBulanan.length>0\">\n    <ion-list-header>\n          Laporan Bulanan\n        </ion-list-header>\n    <ion-item lines=\"full\" *ngFor=\"let item of listBulanan\" (click)=\"alertToOptionSavingReport('Bulanan',item)\">\n      <ion-label>\n        <h2>{{item.to}}</h2>\n          <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"alert-circle-sharp\"></ion-icon>\n      \n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf=\"listTriwulan.length>0\">\n    <ion-list-header>\n          Laporan Triwulan\n        </ion-list-header>\n    <ion-item lines=\"full\" *ngFor=\"let item of listTriwulan\" (click)=\"alertToOptionSavingReport('Triwulan',item)\">\n      <ion-label>\n        <h2>{{item.to}}</h2>\n          <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"alert-circle-sharp\"></ion-icon>\n      \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/changepassword/changepassword.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/pages/home/changepassword/changepassword.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeChangepasswordChangepasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n\n.form ion-item {\n  border: 1px solid #eaeaea !important;\n  margin-top: 7px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.form ion-select {\n  width: 100%;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFPSTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7QUFKUjs7QUFVSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQUjs7QUFVSTtFQUNJLFdBQUE7QUFSUjs7QUFlQTtFQUVJLGdDQUFBO0FBYkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTUgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybSB7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWEgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/home/changepassword/changepassword.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/home/changepassword/changepassword.page.ts ***!
      \******************************************************************/

    /*! exports provided: ChangepasswordPage */

    /***/
    function srcAppPagesHomeChangepasswordChangepasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function () {
        return ChangepasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");

      var ChangepasswordPage = /*#__PURE__*/function () {
        function ChangepasswordPage(NavController, toastController, apiService, loadingController, alertController, router) {
          _classCallCheck(this, ChangepasswordPage);

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

        _createClass(ChangepasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var netwotkInformation = localStorage.getItem('netwotkInformation');

            if (netwotkInformation == 'offline') {
              this.alertNeedInternet();
            }
          }
        }, {
          key: "alertNeedInternet",
          value: function alertNeedInternet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Warning !',
                        message: 'Halaman ini membutuhkan koneksi internet!',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Kembali',
                          handler: function handler() {
                            _this.goBack();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "changeCk",
          value: function changeCk(event) {
            if (event.detail.checked) {
              this.type = 'text';
            } else {
              this.type = 'password';
            }
          }
        }, {
          key: "alertToRelogin",
          value: function alertToRelogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Password berhasil diubah',
                        message: 'Login kembali menggunakan Password baru Anda!',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Login Ulang',
                          handler: function handler() {
                            _this2.router.navigate(['front/']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'menyimpan data...',
                        mode: 'ios',
                        duration: 2000
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      _context3.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(color, header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        header: header,
                        message: message,
                        color: color,
                        mode: "ios",
                        position: "middle",
                        duration: 3000
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "savingData",
          value: function savingData() {
            var _this3 = this;

            // alert('ji');
            if (this.password != '' && this.repassword != '') {
              if (this.password == this.repassword) {
                if (this.password.length >= 6) {
                  this.presentLoading();
                  var currentUser = localStorage.getItem('currentUser');
                  var d = JSON.parse(currentUser);
                  var params = {
                    password: this.password
                  };
                  this.subscribe = this.apiService.patch('users/' + d.user.id, params).subscribe(function (data) {
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('geo_id');
                    localStorage.removeItem('api_key');

                    _this3.alertToRelogin();
                  }, function (error) {
                    setTimeout(function () {
                      _this3.presentToast('danger', 'Error', 'Data tidak tersimpan');
                    }, 2000); // this.presentToast('danger', 'Gagal Update Data', 'Mohono Hubungi Pihak Terkait');
                  });
                } else {
                  this.presentToast('warning', 'Warning', 'Password minimal 6 karakter');
                }
              } else {
                this.presentToast('warning', 'Warning', 'Password dan Re-Password tidak cocok');
              }
            } else {
              this.presentToast('warning', 'Warning', 'Semua form wajib diisi');
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/home/profile'], {
              replaceUrl: true
            });
          }
        }]);

        return ChangepasswordPage;
      }();

      ChangepasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ChangepasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepassword',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./changepassword.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/changepassword/changepassword.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./changepassword.page.scss */
        "./src/app/pages/home/changepassword/changepassword.page.scss"))["default"]]
      })], ChangepasswordPage);
      /***/
    },

    /***/
    "./src/app/pages/home/dashboard/dashboard.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/home/dashboard/dashboard.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/home/dashboard/dashboard.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/home/dashboard/dashboard.page.ts ***!
      \********************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function srcAppPagesHomeDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage() {
          _classCallCheck(this, DashboardPage);
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [];
      };

      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dashboard.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dashboard/dashboard.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dashboard.page.scss */
        "./src/app/pages/home/dashboard/dashboard.page.scss"))["default"]]
      })], DashboardPage);
      /***/
    },

    /***/
    "./src/app/pages/home/help/help.page.scss":
    /*!************************************************!*\
      !*** ./src/app/pages/home/help/help.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeHelpHelpPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBT0E7RUFDSSxvQ0FBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9oZWxwL2hlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/home/help/help.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/help/help.page.ts ***!
      \**********************************************/

    /*! exports provided: HelpPage */

    /***/
    function srcAppPagesHomeHelpHelpPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
        return HelpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var HelpPage = /*#__PURE__*/function () {
        function HelpPage(NavController, route) {
          _classCallCheck(this, HelpPage);

          this.NavController = NavController;
          this.route = route;
          this.params = this.route.snapshot.params;
        }

        _createClass(HelpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            var path = this.params.page != '' ? '/' + this.params.page : '';
            this.NavController.navigateBack(['/home' + path], {
              replaceUrl: true
            });
          }
        }]);

        return HelpPage;
      }();

      HelpPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./help.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/help/help.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./help.page.scss */
        "./src/app/pages/home/help/help.page.scss"))["default"]]
      })], HelpPage);
      /***/
    },

    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _landing_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing/landing.page */
      "./src/app/pages/home/landing/landing.page.ts");
      /* harmony import */


      var _help_help_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./help/help.page */
      "./src/app/pages/home/help/help.page.ts");
      /* harmony import */


      var _privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./privacypolicy/privacypolicy.page */
      "./src/app/pages/home/privacypolicy/privacypolicy.page.ts");
      /* harmony import */


      var _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile/profile.page */
      "./src/app/pages/home/profile/profile.page.ts");
      /* harmony import */


      var _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./changepassword/changepassword.page */
      "./src/app/pages/home/changepassword/changepassword.page.ts");
      /* harmony import */


      var _temporaryreport_temporaryreport_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./temporaryreport/temporaryreport.page */
      "./src/app/pages/home/temporaryreport/temporaryreport.page.ts");
      /* harmony import */


      var _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dashboard/dashboard.page */
      "./src/app/pages/home/dashboard/dashboard.page.ts");

      var routes = [{
        path: '',
        component: _landing_landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
      }, {
        path: 'media',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | media-media-module */
          "media-media-module").then(__webpack_require__.bind(null,
          /*! ./media/media.module */
          "./src/app/pages/home/media/media.module.ts")).then(function (m) {
            return m.MediaPageModule;
          });
        }
      }, {
        path: 'help',
        component: _help_help_page__WEBPACK_IMPORTED_MODULE_4__["HelpPage"]
      }, {
        path: 'privacypolicy',
        component: _privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacypolicyPage"]
      }, {
        path: 'profile',
        component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
      }, {
        path: 'changepassword',
        component: _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_7__["ChangepasswordPage"]
      }, {
        path: 'temporaryreport',
        component: _temporaryreport_temporaryreport_page__WEBPACK_IMPORTED_MODULE_8__["TemporaryreportPage"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_9__["DashboardPage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _landing_landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./landing/landing.page */
      "./src/app/pages/home/landing/landing.page.ts");
      /* harmony import */


      var _help_help_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./help/help.page */
      "./src/app/pages/home/help/help.page.ts");
      /* harmony import */


      var _privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./privacypolicy/privacypolicy.page */
      "./src/app/pages/home/privacypolicy/privacypolicy.page.ts");
      /* harmony import */


      var _profile_profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./profile/profile.page */
      "./src/app/pages/home/profile/profile.page.ts");
      /* harmony import */


      var _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./changepassword/changepassword.page */
      "./src/app/pages/home/changepassword/changepassword.page.ts");
      /* harmony import */


      var _temporaryreport_temporaryreport_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./temporaryreport/temporaryreport.page */
      "./src/app/pages/home/temporaryreport/temporaryreport.page.ts");
      /* harmony import */


      var _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./dashboard/dashboard.page */
      "./src/app/pages/home/dashboard/dashboard.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_landing_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"], _help_help_page__WEBPACK_IMPORTED_MODULE_7__["HelpPage"], _privacypolicy_privacypolicy_page__WEBPACK_IMPORTED_MODULE_8__["PrivacypolicyPage"], _profile_profile_page__WEBPACK_IMPORTED_MODULE_9__["ProfilePage"], _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_10__["ChangepasswordPage"], _temporaryreport_temporaryreport_page__WEBPACK_IMPORTED_MODULE_11__["TemporaryreportPage"], _dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_12__["DashboardPage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/landing/landing.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/home/landing/landing.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeLandingLandingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content {\n  --background: #ffffff;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --padding-top: 10px;\n}\n\nion-content .welcoming-title {\n  color: #2e9998;\n  font-weight: bold;\n  margin-bottom: 0px;\n  margin-top: 5px;\n  font-size: 17px;\n}\n\nion-content .welcoming-text {\n  margin-top: 0px;\n  color: #2e9998;\n}\n\nion-content .welcoming-panel {\n  background: #008080;\n  color: #ffffff !important;\n}\n\nion-content .welcoming-panel-2 {\n  color: #008080;\n  background: #caece9;\n}\n\nion-content #container {\n  text-align: center;\n}\n\nion-content #container ion-col {\n  padding: 0px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\nion-content #container ion-col img.icon {\n  max-width: 50%;\n  margin-bottom: 0px;\n}\n\nion-content #container ion-col div {\n  color: #2e9998;\n  font-weight: bold;\n  font-size: 14px;\n  padding: 10px;\n}\n\nion-content #container ion-col ion-card {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBTUE7RUFFSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1JO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUpSOztBQU9JO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFMUjs7QUFTSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFQUjs7QUFVSTtFQUVJLGNBQUE7RUFDQSxtQkFBQTtBQVRSOztBQVlJO0VBRUksa0JBQUE7QUFYUjs7QUFvQlE7RUFTSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTFCWjs7QUE0Qlk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUExQmhCOztBQTZCWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0FBNUJoQjs7QUErQlk7RUFDSSxnQkFBQTtBQTdCaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgLndlbGNvbWluZy10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICMyZTk5OTg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWluZy10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgY29sb3I6ICMyZTk5OTg7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21pbmctcGFuZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDgwODA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29taW5nLXBhbmVsLTIge1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwODA4MDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWluZXIge1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gbGVmdDogMDtcclxuICAgICAgICAvLyByaWdodDogMDtcclxuICAgICAgICAvLyB0b3A6IDUwJTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2NhZWNlOTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxNTBweDtcclxuXHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWcuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMmU5OTk4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/landing/landing.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/home/landing/landing.page.ts ***!
      \****************************************************/

    /*! exports provided: LandingPage */

    /***/
    function srcAppPagesHomeLandingLandingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPage", function () {
        return LandingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/app-minimize/ngx */
      "./node_modules/@ionic-native/app-minimize/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var moment_locale_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment/locale/id */
      "./node_modules/moment/locale/id.js");
      /* harmony import */


      var moment_locale_id__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_6__);

      var LandingPage = /*#__PURE__*/function () {
        function LandingPage(apiService, NavController, platform, routerOutlet, appMinimize, alertController, router, loadingController) {
          _classCallCheck(this, LandingPage);

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

        _createClass(LandingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.subBack = this.platform.backButton.subscribe(function () {
              if (_this4.routerOutlet.canGoBack()) {} else {
                if (_this4.counter == 0) {
                  _this4.counter++; // this.presentAlertConfirm();

                  setTimeout(function () {
                    _this4.counter = 0;
                  }, 3000);
                } else {
                  _this4.presentAlertConfirm();
                }
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            // check update
            this.checkDataUpdate(); // this.presentProgressLoading('Loading...');

            this.getFirstData();
            this.chekingTemporarySave();
          }
        }, {
          key: "presentProgressLoading",
          value: function presentProgressLoading(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: message,
                        mode: 'ios',
                        duration: 10000
                      });

                    case 2:
                      this.progressloading = _context5.sent;
                      return _context5.abrupt("return", this.progressloading.present());

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "checkDataUpdate",
          value: function checkDataUpdate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var netwotkInformation;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      netwotkInformation = localStorage.getItem('netwotkInformation');

                      if (!(netwotkInformation == 'online')) {
                        _context6.next = 9;
                        break;
                      }

                      _context6.prev = 2;
                      _context6.next = 5;
                      return this.getDataToOffline();

                    case 5:
                      _context6.next = 9;
                      break;

                    case 7:
                      _context6.prev = 7;
                      _context6.t0 = _context6["catch"](2);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[2, 7]]);
            }));
          }
        }, {
          key: "getDataToOffline",
          value: function getDataToOffline() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", new Promise(function (resolve, rejected) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var _this6 = this;

                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  this.subs = this.apiService.get('v2/user_area_sync_offline?geo_id=' + this.geo_id, {}).subscribe(function (data) {
                                    console.log(data);
                                    sessionStorage.setItem(_this6.geo_id + '_dataOffline', JSON.stringify(data));
                                    resolve(data);
                                  }, function (error) {
                                    console.log(error);
                                    rejected(error);
                                  });

                                case 1:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }, {
          key: "getFirstData",
          value: function getFirstData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var netwotkInformation, currentUser, d, usr;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      netwotkInformation = localStorage.getItem('netwotkInformation');

                      if (!(netwotkInformation == 'online')) {
                        _context9.next = 15;
                        break;
                      }

                      _context9.prev = 2;
                      _context9.next = 5;
                      return this.getProfile();

                    case 5:
                      _context9.next = 7;
                      return this.getListDusun();

                    case 7:
                      if (!this.isDataDasarChecked || !this.isDataRegistrasiDusunChecked) {
                        this.presentAlertPetunjukPertama();
                      } // this.progressloading.dismiss();


                      _context9.next = 13;
                      break;

                    case 10:
                      _context9.prev = 10;
                      _context9.t0 = _context9["catch"](2);

                      if (_context9.t0.status == 401) {
                        this.alertToRelogin();
                      }

                    case 13:
                      _context9.next = 17;
                      break;

                    case 15:
                      // ==== Offline condition ===
                      currentUser = localStorage.getItem('currentUser');

                      if (currentUser != null && currentUser != 'null' && currentUser != '') {
                        d = JSON.parse(currentUser);
                        usr = d.user;
                        this.fullname = usr.name;
                        this.username = usr.email; // this.progressloading.dismiss();
                      } else {
                        this.alertToRelogin();
                      }

                    case 17:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[2, 10]]);
            }));
          }
        }, {
          key: "presentAlertPetunjukPertama",
          value: function presentAlertPetunjukPertama() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this7 = this;

              var header, message, alert;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      header = 'Petunjuk Memulai';
                      message = 'Mulailah dengan mengisi data dasar desa.';
                      _context10.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: header,
                        message: message,
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: [{
                          text: 'Isi Data Dasar',
                          handler: function handler(data) {
                            _this7.isiDataDasar(); // this.presentAlertSocialSharing(medias);

                          }
                        }]
                      });

                    case 4:
                      alert = _context10.sent;
                      _context10.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "alertToRelogin",
          value: function alertToRelogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Warning !',
                        message: 'Akun anda terdeteksi sedang digunakan diperangkat lain, mohon login kembali untuk mendapatkan akses Anda kembali',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Login Ulang',
                          handler: function handler() {
                            localStorage.removeItem('currentUser');
                            localStorage.removeItem('geo_id');
                            localStorage.removeItem('api_key');

                            _this8.router.navigate(['front/']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context11.sent;
                      _context11.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "alertDinamis",
          value: function alertDinamis(header, message, backdropDismiss) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var alert;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: header,
                        message: message,
                        mode: "ios",
                        backdropDismiss: backdropDismiss,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context12.sent;
                      _context12.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "alertNeedInternet",
          value: function alertNeedInternet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var alert;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Warning !',
                        message: 'Halaman ini membutuhkan koneksi internet!',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          handler: function handler() {// this.goBack();
                          }
                        }]
                      });

                    case 2:
                      alert = _context13.sent;
                      _context13.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.prev = 0;
                      _context14.next = 3;
                      return this.getProfile();

                    case 3:
                      _context14.next = 5;
                      return this.getListDusun();

                    case 5:
                      if (!this.isDataDasarChecked || !this.isDataRegistrasiDusunChecked) {
                        this.presentAlertPetunjukPertama();
                      }

                      _context14.next = 11;
                      break;

                    case 8:
                      _context14.prev = 8;
                      _context14.t0 = _context14["catch"](0);

                      if (_context14.t0.status == 401) {
                        this.alertToRelogin();
                      }

                    case 11:
                      console.log(event);
                      setTimeout(function () {
                        event.target.complete();
                      }, 2000);

                    case 13:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this, [[0, 8]]);
            }));
          }
        }, {
          key: "chekingTemporarySave",
          value: function chekingTemporarySave() {
            var temporarySave = localStorage.getItem('temporarySave_' + this.geo_id);

            if (temporarySave != null && temporarySave != 'null' && temporarySave != '') {
              this.listTemporary = JSON.parse(temporarySave);
            } else {
              this.listTemporary = [];
            }
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      return _context16.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                          var _this10 = this;

                          var currentUser, d;
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) {
                              switch (_context15.prev = _context15.next) {
                                case 0:
                                  currentUser = localStorage.getItem('currentUser');
                                  d = JSON.parse(currentUser);
                                  this.subs = this.apiService.get('users/' + d.user.id + '?no_expand=user_areas', {}).subscribe(function (data) {
                                    // this.catecories = data.List;
                                    var usr = data.user; // console.log(usr);

                                    _this10.fullname = usr.name;
                                    _this10.username = usr.email;
                                    _this10.isDataDasarChecked = usr.ts_updated != '' && usr.ts_updated != null ? true : false;
                                    resolve('');
                                  }, function (error) {
                                    reject(error);
                                  });

                                case 3:
                                case "end":
                                  return _context15.stop();
                              }
                            }
                          }, _callee15, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));
          }
        }, {
          key: "getListDusun",
          value: function getListDusun() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                          var _this12 = this;

                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                            while (1) {
                              switch (_context17.prev = _context17.next) {
                                case 0:
                                  this.subs = this.apiService.get('user_areas?no_expand=user,geo&geo_id=' + this.geo_id, {}).subscribe(function (data) {
                                    _this12.isDataRegistrasiDusunChecked = data.length > 0 ? true : false; // console.log(data);

                                    resolve('');
                                  }, function (error) {
                                    reject(error);
                                  });

                                case 1:
                                case "end":
                                  return _context17.stop();
                              }
                            }
                          }, _callee17, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this13 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Keluar dari aplikasi',
                        message: 'Apakah anda ingin keluar dari aplikasi ?',
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: [{
                          text: 'Tidak',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            _this13.counter = 0;
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            _this13.appMinimize.minimize();
                          }
                        }]
                      });

                    case 2:
                      alert = _context19.sent;
                      _context19.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "gotoHelp",
          value: function gotoHelp() {
            // 
            this.NavController.navigateForward(['/home/help', {
              page: ''
            }]);
          }
        }, {
          key: "isiDataDasar",
          value: function isiDataDasar() {
            this.NavController.navigateForward(['/basicdata']);
          }
        }, {
          key: "gotoListLaporan",
          value: function gotoListLaporan(type) {
            var netwotkInformation = localStorage.getItem('netwotkInformation');

            if (netwotkInformation == 'online') {
              if (!this.isDataRegistrasiDusunChecked || !this.isDataDasarChecked) {
                this.presentAlertPetunjukPertama();
              } else {
                this.NavController.navigateForward(['/laporan/listlaporan', {
                  Type: type
                }]);
              }
            } else {
              this.alertNeedInternet(); // let dataOffline = sessionStorage.getItem(this.geo_id + '_dataOffline');
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
        }]);

        return LandingPage;
      }();

      LandingPage.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
        }, {
          type: _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_4__["AppMinimize"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      LandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./landing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/landing/landing.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./landing.page.scss */
        "./src/app/pages/home/landing/landing.page.scss"))["default"]]
      })], LandingPage);
      /***/
    },

    /***/
    "./src/app/pages/home/privacypolicy/privacypolicy.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/pages/home/privacypolicy/privacypolicy.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomePrivacypolicyPrivacypolicyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9wcml2YWN5cG9saWN5L3ByaXZhY3lwb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBT0E7RUFFSSxnQ0FBQTtBQUxKOztBQVFBO0VBQ0ksb0NBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcHJpdmFjeXBvbGljeS9wcml2YWN5cG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIC8vIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/home/privacypolicy/privacypolicy.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/home/privacypolicy/privacypolicy.page.ts ***!
      \****************************************************************/

    /*! exports provided: PrivacypolicyPage */

    /***/
    function srcAppPagesHomePrivacypolicyPrivacypolicyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacypolicyPage", function () {
        return PrivacypolicyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var PrivacypolicyPage = /*#__PURE__*/function () {
        function PrivacypolicyPage(NavController) {
          _classCallCheck(this, PrivacypolicyPage);

          this.NavController = NavController;
        }

        _createClass(PrivacypolicyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/home/profile'], {
              replaceUrl: true
            });
          }
        }]);

        return PrivacypolicyPage;
      }();

      PrivacypolicyPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      PrivacypolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacypolicy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./privacypolicy.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/privacypolicy/privacypolicy.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./privacypolicy.page.scss */
        "./src/app/pages/home/privacypolicy/privacypolicy.page.scss"))["default"]]
      })], PrivacypolicyPage);
      /***/
    },

    /***/
    "./src/app/pages/home/profile/profile.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/home/profile/profile.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBT0E7RUFFSSxnQ0FBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5pb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/profile/profile.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/home/profile/profile.page.ts ***!
      \****************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesHomeProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/authentication.service */
      "./src/app/_services/authentication.service.ts");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(authService, NavController, apiService, alertController, router, appVersion) {
          var _this14 = this;

          _classCallCheck(this, ProfilePage);

          this.authService = authService;
          this.NavController = NavController;
          this.apiService = apiService;
          this.alertController = alertController;
          this.router = router;
          this.appVersion = appVersion;
          this.showAppVersion = '-';
          this.appVersion.getVersionNumber().then(function (version) {
            // console.log(version);
            _this14.showAppVersion = version;
          })["catch"](function (err) {// console.log(err);
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDetailUser();
          } // ionViewDidEnter() {
          //   this.getDetailUser();
          // }

        }, {
          key: "alertNeedInternet",
          value: function alertNeedInternet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var alert;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Warning !',
                        message: 'Halaman ini membutuhkan koneksi internet!',
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          handler: function handler() {// this.goBack();
                          }
                        }]
                      });

                    case 2:
                      alert = _context20.sent;
                      _context20.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "getDetailUser",
          value: function getDetailUser() {
            var currentUser = localStorage.getItem('currentUser');

            if (currentUser != null && currentUser != 'null' && currentUser != '') {
              var d = JSON.parse(currentUser);
              var usr = d.user;
              this.name = usr.name;
              this.email = usr.email;
              this.phone = usr.phone_number != '' && usr.phone_number != null && usr.phone_number != 'null' ? '+62 ' + usr.phone_number : '';
            } else {
              this.alertToRelogin();
            }
          }
        }, {
          key: "gotoHelp",
          value: function gotoHelp() {
            // 
            this.NavController.navigateForward(['/home/help', {
              page: 'profile'
            }]);
          }
        }, {
          key: "gotoPage",
          value: function gotoPage(path) {
            this.NavController.navigateForward([path]);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/home'], {
              replaceUrl: true
            });
          }
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this15 = this;

              var netwotkInformation, alert;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      netwotkInformation = localStorage.getItem('netwotkInformation');

                      if (!(netwotkInformation == 'offline')) {
                        _context22.next = 5;
                        break;
                      }

                      this.alertNeedInternet();
                      _context22.next = 10;
                      break;

                    case 5:
                      _context22.next = 7;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Logout dari aplikasi ?',
                        message: 'Anda akan di minta login kembali',
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: [{
                          text: 'Tidak',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {// this.counter = 0;
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            _this15.subscribe = _this15.authService.logoutUser().subscribe(function (data) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                                return regeneratorRuntime.wrap(function _callee21$(_context21) {
                                  while (1) {
                                    switch (_context21.prev = _context21.next) {
                                      case 0:
                                      case "end":
                                        return _context21.stop();
                                    }
                                  }
                                }, _callee21);
                              }));
                            }, function (error) {
                              localStorage.removeItem('currentUser');
                              localStorage.removeItem('geo_id');
                              localStorage.removeItem('api_key');

                              _this15.router.navigate(['front/']);
                            });
                          }
                        }]
                      });

                    case 7:
                      alert = _context22.sent;
                      _context22.next = 10;
                      return alert.present();

                    case 10:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "openAppsVersion",
          value: function openAppsVersion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var alert;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Versi Aplikasi',
                        message: this.showAppVersion,
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context23.sent;
                      _context23.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "alertToRelogin",
          value: function alertToRelogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this16 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Warning !',
                        message: 'Akun anda terdeteksi sedang digunakan diperangkat lain, mohon login kembali untuk mendapatkan akses Anda kembali',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Login Ulang',
                          handler: function handler() {
                            localStorage.removeItem('currentUser');
                            localStorage.removeItem('geo_id');
                            localStorage.removeItem('api_key');

                            _this16.router.navigate(['front/']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context24.sent;
                      _context24.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/profile/profile.page.html"))["default"],
        providers: [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/home/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "./src/app/pages/home/temporaryreport/temporaryreport.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/home/temporaryreport/temporaryreport.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTemporaryreportTemporaryreportPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS90ZW1wb3JhcnlyZXBvcnQvdGVtcG9yYXJ5cmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLHFCQUFBO0VBQ0EsY0FBQTtBQURSOztBQVdBO0VBQ0ksb0NBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvdGVtcG9yYXJ5cmVwb3J0L3RlbXBvcmFyeXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/home/temporaryreport/temporaryreport.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/home/temporaryreport/temporaryreport.page.ts ***!
      \********************************************************************/

    /*! exports provided: TemporaryreportPage */

    /***/
    function srcAppPagesHomeTemporaryreportTemporaryreportPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemporaryreportPage", function () {
        return TemporaryreportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var moment_locale_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment/locale/id */
      "./node_modules/moment/locale/id.js");
      /* harmony import */


      var moment_locale_id__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__); // import { resolve } from 'dns';


      var TemporaryreportPage = /*#__PURE__*/function () {
        function TemporaryreportPage(NavController, apiService, alertController, toastController, loadingController, actionSheetController) {
          _classCallCheck(this, TemporaryreportPage);

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

        _createClass(TemporaryreportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlertNoDusunYet",
          value: function presentAlertNoDusunYet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this17 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Konfirmasi !',
                        message: 'Harap menambahkan data Dusun terlebih dahulu',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Kembali',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            _this17.goBack();
                          }
                        }]
                      });

                    case 2:
                      alert = _context25.sent;
                      _context25.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(color, header, message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var toast;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.toastController.create({
                        header: header,
                        message: message,
                        color: color,
                        mode: "ios",
                        position: "middle",
                        duration: duration
                      });

                    case 2:
                      toast = _context26.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var loading, _yield$loading$onDidD2, role, data;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: message,
                        mode: 'ios',
                        duration: duration
                      });

                    case 2:
                      loading = _context27.sent;
                      _context27.next = 5;
                      return loading.present();

                    case 5:
                      _context27.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD2 = _context27.sent;
                      role = _yield$loading$onDidD2.role;
                      data = _yield$loading$onDidD2.data;

                    case 10:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "presentProgressLoading",
          value: function presentProgressLoading(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: message,
                        mode: 'ios'
                      });

                    case 2:
                      this.progressloading = _context28.sent;
                      return _context28.abrupt("return", this.progressloading.present());

                    case 4:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "alertRemoveAllTemporery",
          value: function alertRemoveAllTemporery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var _this18 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      if (!(this.listMingguan.length > 0 || this.listBulanan.length > 0 || this.listTriwulan.length > 0)) {
                        _context30.next = 8;
                        break;
                      }

                      _context30.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Info !',
                        message: 'Hapus semua penyimpanan sementara?',
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: [{
                          text: 'Batal',
                          role: 'cancel'
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                              var _this19 = this;

                              var geo_id;
                              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                                while (1) {
                                  switch (_context29.prev = _context29.next) {
                                    case 0:
                                      this.presentLoading('Menghapus data...', 2000);
                                      geo_id = localStorage.getItem('geo_id');
                                      localStorage.setItem('temporarySave_' + geo_id, JSON.stringify([]));
                                      setTimeout(function () {
                                        _this19.presentToast('success', 'Sukses', 'Data laporan sementara telah dibersihkan', 1000);

                                        _this19.goBack();
                                      }, 2000);

                                    case 4:
                                    case "end":
                                      return _context29.stop();
                                  }
                                }
                              }, _callee29, this);
                            }));
                          }
                        }]
                      });

                    case 3:
                      alert = _context30.sent;
                      _context30.next = 6;
                      return alert.present();

                    case 6:
                      _context30.next = 9;
                      break;

                    case 8:
                      this.alertToBackHome('Info !', 'Tidak ada data temporary');

                    case 9:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "alertToBackHome",
          value: function alertToBackHome(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var _this20 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: header,
                        message: message,
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Tutup',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
                              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                                while (1) {
                                  switch (_context31.prev = _context31.next) {
                                    case 0:
                                      this.goBack();

                                    case 1:
                                    case "end":
                                      return _context31.stop();
                                  }
                                }
                              }, _callee31, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context32.sent;
                      _context32.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "alertAnyErrorNotSend",
          value: function alertAnyErrorNotSend() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              var _this21 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Info !',
                        message: 'Beberapa data tidak terkirim, silahkan coba kembali beberapa saat lagi atau hapus data yang tidak terkirim!',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel'
                        }, {
                          text: 'Hapus Data',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
                              var _this22 = this;

                              var geo_id;
                              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                                while (1) {
                                  switch (_context33.prev = _context33.next) {
                                    case 0:
                                      this.presentLoading('Menghapus data...', 2000);
                                      geo_id = localStorage.getItem('geo_id');
                                      localStorage.setItem('temporarySave_' + geo_id, JSON.stringify([]));
                                      setTimeout(function () {
                                        _this22.presentToast('success', 'Sukses', 'Data laporan sementara telah dibersihkan', 1000);

                                        _this22.goBack();
                                      }, 2000);

                                    case 4:
                                    case "end":
                                      return _context33.stop();
                                  }
                                }
                              }, _callee33, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context34.sent;
                      _context34.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "alertSendAllTemp",
          value: function alertSendAllTemp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var _this23 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      if (!(this.listMingguan.length > 0 || this.listBulanan.length > 0 || this.listTriwulan.length > 0)) {
                        _context36.next = 8;
                        break;
                      }

                      _context36.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Kirim Semua Laporan',
                        message: 'Pastikan koneksi internet stabil',
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: [{
                          text: 'Batal',
                          role: 'cancel'
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
                              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                                while (1) {
                                  switch (_context35.prev = _context35.next) {
                                    case 0:
                                      this.sendAllTemporary();

                                    case 1:
                                    case "end":
                                      return _context35.stop();
                                  }
                                }
                              }, _callee35, this);
                            }));
                          }
                        }]
                      });

                    case 3:
                      alert = _context36.sent;
                      _context36.next = 6;
                      return alert.present();

                    case 6:
                      _context36.next = 9;
                      break;

                    case 8:
                      this.alertToBackHome('Info !', 'Tidak ada data temporary');

                    case 9:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          }
        }, {
          key: "alertToOptionSavingReport",
          value: function alertToOptionSavingReport(Type, item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              var _this24 = this;

              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      buttons = [{
                        text: 'Isi Kembali',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
                            var newParams;
                            return regeneratorRuntime.wrap(function _callee37$(_context37) {
                              while (1) {
                                switch (_context37.prev = _context37.next) {
                                  case 0:
                                    _context37.prev = 0;
                                    _context37.next = 3;
                                    return this.getDetailLaporan(Type, item);

                                  case 3:
                                    newParams = _context37.sent;
                                    this.actionIsiKembali(newParams);
                                    _context37.next = 10;
                                    break;

                                  case 7:
                                    _context37.prev = 7;
                                    _context37.t0 = _context37["catch"](0);
                                    this.presentToast('danger', 'Gagal mendapatkan data', 'Cobalah bebera saat lagi', 2000);

                                  case 10:
                                  case "end":
                                    return _context37.stop();
                                }
                              }
                            }, _callee37, this, [[0, 7]]);
                          }));
                        }
                      }, {
                        text: 'Hapus Laporan Sementara',
                        role: 'destructive',
                        handler: function handler() {
                          _this24.removeFromTemporary(item.glue);
                        }
                      }, {
                        text: 'Kirim Laporan',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
                            var _this25 = this;

                            var newParams;
                            return regeneratorRuntime.wrap(function _callee38$(_context38) {
                              while (1) {
                                switch (_context38.prev = _context38.next) {
                                  case 0:
                                    this.presentLoading('Mengirim laporan...', 2000);
                                    _context38.prev = 1;
                                    _context38.next = 4;
                                    return this.getDetailLaporan(Type, item);

                                  case 4:
                                    newParams = _context38.sent;
                                    _context38.next = 7;
                                    return this.sendAnswer(item, newParams);

                                  case 7:
                                    setTimeout(function () {
                                      _this25.presentToast('success', 'Sukses', 'Data tersimpan', 2000);

                                      _this25.checkingListTemporary();
                                    }, 2000);
                                    _context38.next = 13;
                                    break;

                                  case 10:
                                    _context38.prev = 10;
                                    _context38.t0 = _context38["catch"](1);
                                    this.presentToast('danger', 'Gagal mendapatkan data', 'Cobalah bebera saat lagi', 2000);

                                  case 13:
                                  case "end":
                                    return _context38.stop();
                                }
                              }
                            }, _callee38, this, [[1, 10]]);
                          }));
                        }
                      }, {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      }];
                      _context39.next = 3;
                      return this.actionSheetController.create({
                        header: item.to,
                        cssClass: 'my-custom-class',
                        mode: 'ios',
                        buttons: buttons
                      });

                    case 3:
                      actionSheet = _context39.sent;
                      _context39.next = 6;
                      return actionSheet.present();

                    case 6:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }
        }, {
          key: "sendAllTemporary",
          value: function sendAllTemporary() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              var anyError, Type, i, item, newParams, _Type, _i, _item, _newParams, _Type2, _i2, _item2, _newParams2;

              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      this.presentProgressLoading('Mengirim data...');
                      anyError = false;

                      if (!(this.listMingguan.length > 0)) {
                        _context40.next = 22;
                        break;
                      }

                      Type = 'Mingguan';
                      i = 0;

                    case 5:
                      if (!(i < this.listMingguan.length)) {
                        _context40.next = 22;
                        break;
                      }

                      item = this.listMingguan[i];
                      _context40.prev = 7;
                      _context40.next = 10;
                      return this.getDetailLaporan(Type, item);

                    case 10:
                      newParams = _context40.sent;
                      _context40.next = 13;
                      return this.sendAnswer(item, newParams);

                    case 13:
                      _context40.next = 19;
                      break;

                    case 15:
                      _context40.prev = 15;
                      _context40.t0 = _context40["catch"](7);
                      anyError = true;
                      this.presentToast('error', 'Tidak terkirim', item.to + ' - ' + item.label, 1000);

                    case 19:
                      i++;
                      _context40.next = 5;
                      break;

                    case 22:
                      if (!(this.listBulanan.length > 0)) {
                        _context40.next = 42;
                        break;
                      }

                      _Type = 'Bulanan';
                      _i = 0;

                    case 25:
                      if (!(_i < this.listBulanan.length)) {
                        _context40.next = 42;
                        break;
                      }

                      _item = this.listBulanan[_i]; // let newParams = await this.getDetailLaporan(Type, item);
                      // await this.sendAnswer(item, newParams);

                      _context40.prev = 27;
                      _context40.next = 30;
                      return this.getDetailLaporan(_Type, _item);

                    case 30:
                      _newParams = _context40.sent;
                      _context40.next = 33;
                      return this.sendAnswer(_item, _newParams);

                    case 33:
                      _context40.next = 39;
                      break;

                    case 35:
                      _context40.prev = 35;
                      _context40.t1 = _context40["catch"](27);
                      anyError = true;
                      this.presentToast('error', 'Tidak terkirim', _item.to + ' - ' + _item.label, 1000);

                    case 39:
                      _i++;
                      _context40.next = 25;
                      break;

                    case 42:
                      if (!(this.listTriwulan.length > 0)) {
                        _context40.next = 62;
                        break;
                      }

                      _Type2 = 'Triwulan';
                      _i2 = 0;

                    case 45:
                      if (!(_i2 < this.listTriwulan.length)) {
                        _context40.next = 62;
                        break;
                      }

                      _item2 = this.listTriwulan[_i2]; // let newParams = await this.getDetailLaporan(Type, item);
                      // await this.sendAnswer(item, newParams);

                      _context40.prev = 47;
                      _context40.next = 50;
                      return this.getDetailLaporan(_Type2, _item2);

                    case 50:
                      _newParams2 = _context40.sent;
                      _context40.next = 53;
                      return this.sendAnswer(_item2, _newParams2);

                    case 53:
                      _context40.next = 59;
                      break;

                    case 55:
                      _context40.prev = 55;
                      _context40.t2 = _context40["catch"](47);
                      anyError = true;
                      this.presentToast('error', 'Tidak terkirim', _item2.to + ' - ' + _item2.label, 1000);

                    case 59:
                      _i2++;
                      _context40.next = 45;
                      break;

                    case 62:
                      this.checkingListTemporary();
                      this.progressloading.dismiss();

                      if (anyError) {
                        this.alertAnyErrorNotSend();
                      } else {
                        this.alertToBackHome('Sukses !', 'Semua data sementara berhasil dikirimkan!');
                      }

                    case 65:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this, [[7, 15], [27, 35], [47, 55]]);
            }));
          }
        }, {
          key: "removeFromTemporary",
          value: function removeFromTemporary(glue) {
            var _this26 = this;

            this.presentLoading('Menghapus data...', 2000);
            var geo_id = localStorage.getItem('geo_id');
            var temporarySave = localStorage.getItem('temporarySave_' + geo_id);

            if (temporarySave != '') {
              var datatemporarySave = JSON.parse(temporarySave);
              var newTemp = [];

              for (var index = 0; index < datatemporarySave.length; index++) {
                var element = datatemporarySave[index];

                if (element != glue) {
                  newTemp.push(element);
                }
              }

              localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp));
            }

            setTimeout(function () {
              _this26.presentToast('success', 'Sukses', 'Data laporan sementara terhapus', 1000); // this.goBack();


              _this26.checkingListTemporary();
            }, 2000);
          }
        }, {
          key: "getListDusun",
          value: function getListDusun() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var _this27 = this;

              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      return _context42.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
                          var geo_id;
                          return regeneratorRuntime.wrap(function _callee41$(_context41) {
                            while (1) {
                              switch (_context41.prev = _context41.next) {
                                case 0:
                                  geo_id = localStorage.getItem('geo_id');
                                  this.subscribe = this.apiService.get('user_areas?no_expand=user,geo&geo_id=' + geo_id, {}).subscribe(function (data) {
                                    // this.catecories = data.List;
                                    resolve(data); // console.log(data);
                                  }, function (error) {
                                    reject([]);
                                  });

                                case 2:
                                case "end":
                                  return _context41.stop();
                              }
                            }
                          }, _callee41, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42);
            }));
          }
        }, {
          key: "checkingListTemporary",
          value: function checkingListTemporary() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      _context43.next = 2;
                      return this.getListDusun();

                    case 2:
                      this.listDusun = _context43.sent;

                      if (this.listDusun.length > 0) {
                        this.getListTemporary();
                      } else {
                        this.presentAlertNoDusunYet();
                      }

                    case 4:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "getListTemporary",
          value: function getListTemporary() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              var geo_id, temporarySave, index, element, sp, MomentFormat, Week, Year, Start, End, Value, dusunName, newWeek, _MomentFormat, Month, MonthLabel, _Year, _Start, _End, _Value, _dusunName, newArr, _MomentFormat2, quarter, _Year2, _Start2, _End2, _Value2, _dusunName2, _newArr;

              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      geo_id = localStorage.getItem('geo_id');
                      temporarySave = localStorage.getItem('temporarySave_' + geo_id);

                      if (!(temporarySave != null && temporarySave != 'null' && temporarySave != '')) {
                        _context44.next = 62;
                        break;
                      }

                      this.listTemporary = JSON.parse(temporarySave);
                      this.listMingguan = [];
                      this.listBulanan = [];
                      this.listTriwulan = [];
                      index = 0;

                    case 8:
                      if (!(index < this.listTemporary.length)) {
                        _context44.next = 61;
                        break;
                      }

                      element = this.listTemporary[index];
                      sp = element.split('-');

                      if (!(sp[0] == 'w')) {
                        _context44.next = 27;
                        break;
                      }

                      MomentFormat = moment__WEBPACK_IMPORTED_MODULE_5__().week(sp[1]).year(sp[2]);
                      Week = MomentFormat.startOf('isoWeek').week();
                      Year = MomentFormat.endOf('isoWeek').format('YYYY');
                      Start = MomentFormat.startOf('isoWeek').format('DD MMMM YYYY');
                      End = MomentFormat.endOf('isoWeek').format('DD MMMM YYYY');
                      Value = Week + '-' + Year; // get nama dusun

                      dusunName = '';

                      if (!(sp.length > 3)) {
                        _context44.next = 23;
                        break;
                      }

                      _context44.next = 22;
                      return this.getDusunNameByID(sp[3]);

                    case 22:
                      dusunName = _context44.sent;

                    case 23:
                      newWeek = {
                        target: sp.length == 3 ? 'desa' : 'dusun',
                        to: sp.length == 3 ? 'Laporan Untuk Desa' : 'Dusun : ' + dusunName,
                        label: 'Minggu ke : ' + Week + ' - ' + Year,
                        range: Start + ' - ' + End,
                        value: Value,
                        checked: false,
                        glue: element
                      };
                      this.listMingguan.push(newWeek);
                      _context44.next = 58;
                      break;

                    case 27:
                      if (!(sp[0] == 'm')) {
                        _context44.next = 44;
                        break;
                      }

                      _MomentFormat = moment__WEBPACK_IMPORTED_MODULE_5__().month(sp[1] - 1).year(sp[2]);
                      Month = _MomentFormat.format('MM');
                      MonthLabel = _MomentFormat.format('MMMM');
                      _Year = _MomentFormat.format('YYYY');
                      _Start = _MomentFormat.startOf('month').format('DD MMMM YYYY');
                      _End = _MomentFormat.endOf('month').format('DD MMMM YYYY');
                      _Value = Month + '-' + _Year; // get nama dusun

                      _dusunName = '';

                      if (!(sp.length > 3)) {
                        _context44.next = 40;
                        break;
                      }

                      _context44.next = 39;
                      return this.getDusunNameByID(sp[3]);

                    case 39:
                      _dusunName = _context44.sent;

                    case 40:
                      newArr = {
                        target: sp.length == 3 ? 'desa' : 'dusun',
                        to: sp.length == 3 ? 'Laporan Untuk Desa' : 'Dusun : ' + _dusunName,
                        label: 'Bulan : ' + MonthLabel + ' - ' + _Year,
                        range: _Start + ' - ' + _End,
                        value: _Value,
                        checked: false,
                        glue: element
                      };
                      this.listBulanan.push(newArr);
                      _context44.next = 58;
                      break;

                    case 44:
                      if (!(sp[0] == 'q')) {
                        _context44.next = 58;
                        break;
                      }

                      _MomentFormat2 = moment__WEBPACK_IMPORTED_MODULE_5__().quarter(sp[1]).year(sp[0]);
                      quarter = _MomentFormat2.quarter();
                      _Year2 = _MomentFormat2.format('YYYY');
                      _Start2 = _MomentFormat2.startOf('quarter').format('DD MMMM YYYY');
                      _End2 = _MomentFormat2.endOf('quarter').format('DD MMMM YYYY');
                      _Value2 = quarter + '-' + _Year2; // get nama dusun

                      _dusunName2 = '';

                      if (!(sp.length > 3)) {
                        _context44.next = 56;
                        break;
                      }

                      _context44.next = 55;
                      return this.getDusunNameByID(sp[3]);

                    case 55:
                      _dusunName2 = _context44.sent;

                    case 56:
                      _newArr = {
                        target: sp.length == 3 ? 'desa' : 'dusun',
                        to: sp.length == 3 ? 'Laporan Untuk Desa' : 'Dusun : ' + _dusunName2,
                        label: 'Triwulan ke : ' + quarter + ' - ' + _Year2,
                        range: _Start2 + ' - ' + _End2,
                        value: _Value2,
                        checked: false,
                        glue: element
                      };
                      this.listTriwulan.push(_newArr);

                    case 58:
                      index++;
                      _context44.next = 8;
                      break;

                    case 61:
                      console.log(this.listMingguan, this.listBulanan, this.listTriwulan);

                    case 62:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "getDusunNameByID",
          value: function getDusunNameByID(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
              var _this28 = this;

              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      return _context46.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
                          var name, index, element;
                          return regeneratorRuntime.wrap(function _callee45$(_context45) {
                            while (1) {
                              switch (_context45.prev = _context45.next) {
                                case 0:
                                  name = '';

                                  for (index = 0; index < this.listDusun.length; index++) {
                                    element = this.listDusun[index];

                                    if (id == element.id) {
                                      name = element.name;
                                    }
                                  }

                                  if (name != '') {
                                    resolve(name);
                                  } else {
                                    reject('');
                                  }

                                case 3:
                                case "end":
                                  return _context45.stop();
                              }
                            }
                          }, _callee45, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46);
            }));
          }
        }, {
          key: "actionIsiKembali",
          value: function actionIsiKembali(newParams) {
            this.NavController.navigateForward(['/laporan/formlaporan', newParams]);
          }
        }, {
          key: "getDetailLaporan",
          value: function getDetailLaporan(Type, item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var _this29 = this;

              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      return _context48.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this29, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
                          var geo_id, splt_glue, glue_to_post;
                          return regeneratorRuntime.wrap(function _callee47$(_context47) {
                            while (1) {
                              switch (_context47.prev = _context47.next) {
                                case 0:
                                  geo_id = localStorage.getItem('geo_id');
                                  splt_glue = item.glue.split('-');
                                  glue_to_post = splt_glue.length == 4 ? splt_glue[0] + '-' + splt_glue[1] + '-' + splt_glue[2] : item.glue;
                                  this.subscribe = this.apiService.get('v2/user_areas_list_detail?glue=' + glue_to_post + '&geo_id=' + geo_id, {}).subscribe(function (data) {
                                    // console.log(data);
                                    if (data.length > 0) {
                                      var ans_id_desa = '';
                                      var ans_id_dusun = '';
                                      var selectDusun_id_questionnaire = '';
                                      var selectDesa_id_questionnaire = '';

                                      for (var i = 0; i < data.length; i++) {
                                        var element = data[i];

                                        if (element.target == '0') {
                                          ans_id_dusun = element.id;
                                          selectDusun_id_questionnaire = element.id_questionnaire;
                                        }

                                        if (element.target == '1') {
                                          ans_id_desa = element.id;
                                          selectDesa_id_questionnaire = element.id_questionnaire;
                                        }
                                      }

                                      var user_area_id = splt_glue.length == 4 ? splt_glue[3] : '';
                                      var newParams = {
                                        Type: Type,
                                        ans_id: item.target == 'dusun' ? ans_id_dusun : ans_id_desa,
                                        ans_id_desa: ans_id_desa,
                                        ans_id_dusun: ans_id_dusun,
                                        glue: item.glue,
                                        id_questionnaire: item.target == 'dusun' ? selectDusun_id_questionnaire : selectDesa_id_questionnaire,
                                        label: item.label,
                                        range: item.range,
                                        target: item.target,
                                        target_name: item.to,
                                        user_area_id: item.target == 'dusun' ? user_area_id : 0,
                                        page_from: 'temporary'
                                      };
                                      resolve(newParams);
                                    }
                                  }, function (error) {
                                    reject(error);
                                  });

                                case 4:
                                case "end":
                                  return _context47.stop();
                              }
                            }
                          }, _callee47, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48);
            }));
          }
        }, {
          key: "sendAnswer",
          value: function sendAnswer(item, newParams) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
              var _this30 = this;

              return regeneratorRuntime.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      return _context51.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
                          var _this31 = this;

                          var dataAnswers, params;
                          return regeneratorRuntime.wrap(function _callee50$(_context50) {
                            while (1) {
                              switch (_context50.prev = _context50.next) {
                                case 0:
                                  _context50.next = 2;
                                  return this.sendToServer(item, newParams);

                                case 2:
                                  dataAnswers = _context50.sent;
                                  params = {
                                    ans_id: newParams.ans_id,
                                    glue: item.glue,
                                    user_area_id: newParams.user_area_id,
                                    answer: JSON.stringify(dataAnswers)
                                  };
                                  this.subscribe = this.apiService.post('v2/user_area_questionnaire', params).subscribe(function (data) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
                                      var geo_id, temporarySave, newTemp, index, element;
                                      return regeneratorRuntime.wrap(function _callee49$(_context49) {
                                        while (1) {
                                          switch (_context49.prev = _context49.next) {
                                            case 0:
                                              geo_id = localStorage.getItem('geo_id');
                                              temporarySave = localStorage.getItem('temporarySave_' + geo_id);
                                              temporarySave = JSON.parse(temporarySave);
                                              newTemp = [];

                                              for (index = 0; index < temporarySave.length; index++) {
                                                element = temporarySave[index];

                                                if (element != item.glue) {
                                                  newTemp.push(element);
                                                }
                                              }

                                              localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp)); // console.log(data);

                                              resolve('');

                                            case 7:
                                            case "end":
                                              return _context49.stop();
                                          }
                                        }
                                      }, _callee49);
                                    }));
                                  }, function (error) {
                                    // this.presentAlertConfirmError();
                                    // console.log(error);
                                    // this.presentToast('error', 'Gagal', 'Tidak tersimpan', 2000);
                                    reject(error);
                                  });

                                case 5:
                                case "end":
                                  return _context50.stop();
                              }
                            }
                          }, _callee50, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51);
            }));
          }
        }, {
          key: "sendToServer",
          value: function sendToServer(item, newParams) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
              var _this32 = this;

              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      _context53.next = 2;
                      return new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this32, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
                          var glue, id_questionnaire, geo_id, data_answer, drafQuestions, answers, go_to_id, i, element, answer, a, element_answer, ans_id_question_opstion, c, c_e, newAns;
                          return regeneratorRuntime.wrap(function _callee52$(_context52) {
                            while (1) {
                              switch (_context52.prev = _context52.next) {
                                case 0:
                                  glue = item.glue;
                                  id_questionnaire = newParams.id_questionnaire;
                                  geo_id = localStorage.getItem('geo_id');
                                  data_answer = localStorage.getItem(glue + '_' + geo_id);
                                  data_answer = JSON.parse(data_answer);
                                  drafQuestions = localStorage.getItem(id_questionnaire + '_drafQuestions_' + geo_id);
                                  drafQuestions = JSON.parse(drafQuestions);
                                  answers = [];
                                  go_to_id = drafQuestions[0]['id_questionnaire_detail'];

                                  for (i = 0; i < drafQuestions.length; i++) {
                                    element = drafQuestions[i];
                                    answer = {};

                                    if (go_to_id == element['id_questionnaire_detail']) {
                                      go_to_id = i != drafQuestions.length - 1 ? drafQuestions[i + 1]['id_questionnaire_detail'] : '';

                                      for (a = 0; a < data_answer.length; a++) {
                                        element_answer = data_answer[a];

                                        if (element['id'] == element_answer['id_question']) {
                                          if (element['id_question_type'] == 2 || element['id_question_type'] == 3) {
                                            // id_jawabanya
                                            ans_id_question_opstion = element_answer['answer'][0]['id_question_option'];
                                            answer = element_answer['answer'];

                                            for (c = 0; c < element['Options'].length; c++) {
                                              c_e = element['Options'][c];

                                              if (c_e['id'] == ans_id_question_opstion) {
                                                go_to_id = c_e['go_to_id'] != '' && c_e['go_to_id'] != null && c_e['go_to_id'] != 'null' ? c_e['go_to_id'] : go_to_id;
                                              }
                                            }
                                          } else {
                                            answer = element_answer['answer'];
                                          }
                                        }
                                      }

                                      if (Object.keys(answer).length !== 0) {
                                        newAns = {
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
                                  } else {
                                    reject(answers);
                                  }

                                case 11:
                                case "end":
                                  return _context52.stop();
                              }
                            }
                          }, _callee52);
                        }));
                      });

                    case 2:
                      return _context53.abrupt("return", _context53.sent);

                    case 3:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/home'], {
              replaceUrl: true
            });
          }
        }]);

        return TemporaryreportPage;
      }();

      TemporaryreportPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }];
      };

      TemporaryreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temporaryreport',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./temporaryreport.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/temporaryreport/temporaryreport.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./temporaryreport.page.scss */
        "./src/app/pages/home/temporaryreport/temporaryreport.page.scss"))["default"]]
      })], TemporaryreportPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map