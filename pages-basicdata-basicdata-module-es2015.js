(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-basicdata-basicdata-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/basicdata.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/basicdata.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Kegiatan Gugus Tugas</ion-title>\n  </ion-toolbar>\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;text-align: left;\">\n      Klik pada tab dibawah ini untuk melihat panduan setiap tugas. \n    Anda juga dapat mengubah status setiap tugas untuk melaporkan kemajuan yang dibuat oleh Gugus Tugas Desa.\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list>\n   <ion-list-header>\n          Data Dasar\n  </ion-list-header>\n  <ion-item lines=\"full\" (click)=\"gotoPage('/basicdata/basicsetting')\">\n    <ion-label>Data dasar tingkat desa</ion-label>\n    <ion-icon slot=\"start\" *ngIf=\"!isDataDasarChecked\" color=\"medium\" name=\"ellipse-outline\"></ion-icon>\n    <ion-icon slot=\"start\" *ngIf=\"isDataDasarChecked\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\n    <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"full\" (click)=\"gotoPage('/basicdata/registrasidusun')\">\n    <ion-label>Registrasi Dusun</ion-label>\n    <ion-icon slot=\"start\" *ngIf=\"!isDataRegistrasiDusunChecked\" color=\"medium\" name=\"ellipse-outline\"></ion-icon>\n    <ion-icon slot=\"start\" *ngIf=\"isDataRegistrasiDusunChecked\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\n    <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n\n\n</ion-list>\n\n\n<ion-list *ngIf=\"catecories.length > 0\">\n  <ion-list-header>\n          Daftar Tugas\n        </ion-list-header>\n\n  <ion-item *ngFor=\"let category of catecories\"  (click)=\"actionGetCheclist(category)\" lines=\"full\">\n    <ion-icon slot=\"start\" [name]=\"category.icon\"></ion-icon>\n    <ion-label>{{ category.name }}</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/basicsetting/basicsetting.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/basicsetting/basicsetting.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Data dasar tingkat Desa</ion-title>\n  </ion-toolbar>\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;text-align: left;\" color=\"primary\">\n      <strong>*) Semua form wajib diisi!</strong>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-card class=\"padding\">\n  \n    \n\n  <ion-card-content class=\"form\">\n\n    <ion-label>Nama Lengkap</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n\n    <ion-label>Nomor telpon/HP</ion-label>\n    <ion-item lines=\"none\">\n      <ion-label>+62</ion-label>\n      <ion-input [(ngModel)]=\"phone_number\" type=\"number\"></ion-input>\n    </ion-item>\n\n    <!-- <ion-label>Nama Pengisi Data</ion-label>\n    <ion-item lines=\"none\">\n      <ion-input [(ngModel)]=\"data_filler_name\"></ion-input>\n    </ion-item> -->\n\n    <!-- <ion-label>Nomor telpon/HP Pengisi Data</ion-label>\n    <ion-item lines=\"none\">\n      <ion-label>+62</ion-label>\n      <ion-input [(ngModel)]=\"data_filler_phone_number\"></ion-input>\n    </ion-item> -->\n\n    <ion-label>Jabatan</ion-label>\n    <ion-item lines=\"none\">\n      <ion-select title=\"Jabatan Pengisi Data\" [(ngModel)]=\"data_filler_position\" okText=\"Pilih\" cancelText=\"Tutup\">\n        <ion-select-option value=\"1\">Sekretaris Desa</ion-select-option>\n        <ion-select-option value=\"2\">Kepala Urusan</ion-select-option>\n        <ion-select-option value=\"3\">Kepala Urusan Pemerintah</ion-select-option>\n        <ion-select-option value=\"4\">Lainnya</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-label>Persentase warga desa yang memiliki lahan dan pendapatannya bergantung \n      pada bidang pertanian, perkebunan, peternakan dan perikanan</ion-label>\n    <ion-item lines=\"none\">\n      <ion-select [(ngModel)]=\"percentage_income\" okText=\"Pilih\" cancelText=\"Tutup\">\n        <ion-select-option value=\"1\">0-20 %</ion-select-option>\n        <ion-select-option value=\"2\">21-40 %</ion-select-option>\n        <ion-select-option value=\"3\">41-60 %</ion-select-option>\n        <ion-select-option value=\"4\">61-80 %</ion-select-option>\n        <ion-select-option value=\"5\">81-100 %</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-label>Persentase KK atau rumah yang memiliki televisi</ion-label>\n    <ion-item lines=\"none\">\n      <ion-select [(ngModel)]=\"percentage_television\" okText=\"Pilih\" cancelText=\"Tutup\">\n        <ion-select-option value=\"1\">0-20 %</ion-select-option>\n        <ion-select-option value=\"2\">21-40 %</ion-select-option>\n        <ion-select-option value=\"3\">41-60 %</ion-select-option>\n        <ion-select-option value=\"4\">61-80 %</ion-select-option>\n        <ion-select-option value=\"5\">81-100 %</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    \n    <!-- <ion-item lines=\"none\" (click)=\"presentAlertSpecialNeed()\"></ion-item> -->\n\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n  <ion-card-content class=\"form\">\n    <ion-label>Menurut Anda, kelompok mana saja yang memerlukan pertolongan lebih dibandingkan dengan orang desa secara umum,\n      dalam hal penanggulangan dampak wabah virus corona ini?\n    </ion-label>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"help_women\" color=\"success\" slot=\"start\"></ion-checkbox>\n      <ion-label>Kelompok Perempuan</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"help_poor\" color=\"success\" slot=\"start\"></ion-checkbox>\n      <ion-label>Kelompok Orang Tidak Mampu</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"help_elder\" color=\"success\" slot=\"start\"></ion-checkbox>\n      <ion-label>Kelompok Lansia</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"help_special_needs\" color=\"success\" slot=\"start\"></ion-checkbox>\n      <ion-label>Kelompok Orang Berkebutuhan Khusus</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"help_isolated_tribal\" color=\"success\" slot=\"start\"></ion-checkbox>\n      <ion-label>Kelompok Suku Terasing</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"help_refugee\" color=\"success\" slot=\"start\"></ion-checkbox>\n      <ion-label>Kelompok Pengungsi</ion-label>\n    </ion-item>\n  </ion-card-content>\n\n</ion-card>\n\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" (click)=\"goBack()\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" (click)=\"savingData()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Simpan</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/checklist/checklist.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/checklist/checklist.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ params.name }}</ion-title>\n  </ion-toolbar>\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n       Kegiatan Gugus Tugas  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n     {{ params.name }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"ios\">\n\n<ion-list  *ngIf=\"catecories.length > 0\">\n   <ion-list-header>\n          {{ params.name }}\n        </ion-list-header>\n        \n  <ion-item lines=\"full\" *ngFor=\"let category of catecories\"  (click)=\"presentAlertOpenChecklish(category)\" >\n    <ion-label>{{ category.name }}</ion-label>\n    <ion-icon *ngIf=\"category.status == 0 || category.status == null\" color=\"medium\" slot=\"start\" name=\"ellipse-outline\"></ion-icon>\n      <ion-icon *ngIf=\"category.status == 1\" slot=\"start\" color=\"warning\" name=\"timer\"></ion-icon>\n      <ion-icon *ngIf=\"category.status == 2\" slot=\"start\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\n      \n      <ion-icon slot=\"end\"  color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n  \n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/datadasardusun/datadasardusun.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/datadasardusun/datadasardusun.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Data Dasar Dusun</ion-title>\n  </ion-toolbar>\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n     {{ subTitle }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-card class=\"form\">\n    <ion-card-content>\n\n      <ion-label>Jumlah KK (awal tahun {{ currentYear }})</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"households\" type=\"number\"></ion-input>\n      </ion-item>\n\n      <ion-label>Jumlah Penduduk (Total)</ion-label>\n      <ion-grid>\n         <ion-row>\n          <ion-col>\n            <ion-label>Laki-laki</ion-label>\n            <ion-item lines=\"none\">\n              <ion-input [(ngModel)]=\"population_male\" type=\"number\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-label>Perempuan</ion-label>\n            <ion-item lines=\"none\">\n              <ion-input [(ngModel)]=\"population_female\" type=\"number\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <p style=\"margin-bottom: 15px;margin-top: 0px;\">\n        <ion-text color=\"primary\">\n          Total penduduk : {{ population_male + population_female }}\n        </ion-text>\n      </p>\n      \n      <ion-label>Jumlah penduduk usia > 50 tahun</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"population_elder\"></ion-input>\n      </ion-item>\n      \n      \n      <ion-label>Jumlah penduduk usia (18-55 tahun)</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"population_productive_age\"></ion-input>\n      </ion-item>\n      \n      <ion-label>Jumlah warga dusun yang memiliki riwayat penyakit sepert : \n        <ion-text color=\"primary\">\n          Penyakit Paru, Asma, Penyakit Jantung, Diabetes, Penyakit Ginjal,\n        Penyakit Liver/Hati\n        </ion-text>\n      </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"population_conditions\" type=\"number\"></ion-input>\n      </ion-item>\n\n      <ion-label>Berapa jumlah UMKM (Usaha Mikro Kecil Menengah) di dusun ini ? Contoh :\n        <ion-text color=\"primary\">\n          usaha rumahan, warung, toko kecil, pedagang keliling, bakul.\n        </ion-text>\n      </ion-label>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"small_enterprises\" type=\"number\"></ion-input>\n      </ion-item>\n\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" (click)=\"goBack()\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" (click)=\"savingData()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Simpan</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/informasidusun/informasidusun.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/informasidusun/informasidusun.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ titile }}</ion-title>\n    \n    <ion-buttons slot=\"primary\" *ngIf=\"this.params.action == 'edit'\">\n      <ion-button fill=\"solid\" (click)=\"openAlertRemoveDusun()\" color=\"light\">\n        Hapus Dusun\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"this.params.action == 'edit'\" style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n     {{ subTitle }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n\n  <ion-card class=\"form\">\n    <ion-card-content>\n\n      <ion-label>Nama Dusun</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n      \n      <ion-label>Nama Kepala Dusun</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"head_name\"></ion-input>\n      </ion-item>\n      \n      <ion-label>Nomor telpon/HP</ion-label>\n      <ion-item lines=\"none\">\n        <ion-label>+62</ion-label>\n        <ion-input [(ngModel)]=\"head_phone_number\" type=\"number\"></ion-input>\n      </ion-item>\n\n\n      <ion-label>Apakah kepala dusun memiliki <em>smartphone</em> ?</ion-label>\n\n      <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"{{ head_has_smartphone }}\" style=\"margin-top: 7px;\">\n        <ion-segment-button value=\"1\">\n          <ion-label>Ya</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"0\">\n          <ion-label>Tidak</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" (click)=\"goBack()\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" (click)=\"savingData()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Simpan</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/registrasidusun/registrasidusun.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/registrasidusun/registrasidusun.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Registrasi Dusun</ion-title>\n  </ion-toolbar>\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n       <ion-button expand=\"block\" (click)=\"createDusun()\" color=\"warning\">Tambah Dusun</ion-button>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <!-- <div style=\"padding: 15px;\">\n    <ion-button expand=\"block\" color=\"warning\">Tambah Dusun</ion-button>\n  </div> -->\n\n\n  <ion-list *ngIf=\"items.length>0\">\n    <ion-item lines=\"full\" *ngFor=\"let item of items; let i = index\" (click)=\"openOptionDusun(item)\">\n      <span slot=\"start\">{{ i+1 }}.</span>\n      <!-- <ion-icon slot=\"start\"></ion-icon> -->\n      <ion-label>{{ item.name }}</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/basicdata/basicdata-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/basicdata/basicdata-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BasicdataPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicdataPageRoutingModule", function() { return BasicdataPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _basicdata_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basicdata.page */ "./src/app/pages/basicdata/basicdata.page.ts");
/* harmony import */ var _checklist_checklist_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checklist/checklist.page */ "./src/app/pages/basicdata/checklist/checklist.page.ts");
/* harmony import */ var _basicsetting_basicsetting_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basicsetting/basicsetting.page */ "./src/app/pages/basicdata/basicsetting/basicsetting.page.ts");
/* harmony import */ var _registrasidusun_registrasidusun_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrasidusun/registrasidusun.page */ "./src/app/pages/basicdata/registrasidusun/registrasidusun.page.ts");
/* harmony import */ var _informasidusun_informasidusun_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./informasidusun/informasidusun.page */ "./src/app/pages/basicdata/informasidusun/informasidusun.page.ts");
/* harmony import */ var _datadasardusun_datadasardusun_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datadasardusun/datadasardusun.page */ "./src/app/pages/basicdata/datadasardusun/datadasardusun.page.ts");









const routes = [
    {
        path: '',
        component: _basicdata_page__WEBPACK_IMPORTED_MODULE_3__["BasicdataPage"]
    },
    {
        path: 'checklist',
        component: _checklist_checklist_page__WEBPACK_IMPORTED_MODULE_4__["ChecklistPage"]
    },
    {
        path: 'basicsetting',
        component: _basicsetting_basicsetting_page__WEBPACK_IMPORTED_MODULE_5__["BasicsettingPage"]
    },
    {
        path: 'registrasidusun',
        component: _registrasidusun_registrasidusun_page__WEBPACK_IMPORTED_MODULE_6__["RegistrasidusunPage"]
    },
    {
        path: 'informasidusun',
        component: _informasidusun_informasidusun_page__WEBPACK_IMPORTED_MODULE_7__["InformasidusunPage"]
    },
    {
        path: 'datadasardusun',
        component: _datadasardusun_datadasardusun_page__WEBPACK_IMPORTED_MODULE_8__["DatadasardusunPage"]
    }
];
let BasicdataPageRoutingModule = class BasicdataPageRoutingModule {
};
BasicdataPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BasicdataPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/basicdata/basicdata.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/basicdata/basicdata.module.ts ***!
  \*****************************************************/
/*! exports provided: BasicdataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicdataPageModule", function() { return BasicdataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _basicdata_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basicdata-routing.module */ "./src/app/pages/basicdata/basicdata-routing.module.ts");
/* harmony import */ var _basicdata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basicdata.page */ "./src/app/pages/basicdata/basicdata.page.ts");
/* harmony import */ var _checklist_checklist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checklist/checklist.page */ "./src/app/pages/basicdata/checklist/checklist.page.ts");
/* harmony import */ var _basicsetting_basicsetting_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basicsetting/basicsetting.page */ "./src/app/pages/basicdata/basicsetting/basicsetting.page.ts");
/* harmony import */ var _registrasidusun_registrasidusun_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registrasidusun/registrasidusun.page */ "./src/app/pages/basicdata/registrasidusun/registrasidusun.page.ts");
/* harmony import */ var _informasidusun_informasidusun_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./informasidusun/informasidusun.page */ "./src/app/pages/basicdata/informasidusun/informasidusun.page.ts");
/* harmony import */ var _datadasardusun_datadasardusun_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datadasardusun/datadasardusun.page */ "./src/app/pages/basicdata/datadasardusun/datadasardusun.page.ts");












let BasicdataPageModule = class BasicdataPageModule {
};
BasicdataPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _basicdata_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasicdataPageRoutingModule"]
        ],
        declarations: [_basicdata_page__WEBPACK_IMPORTED_MODULE_6__["BasicdataPage"], _checklist_checklist_page__WEBPACK_IMPORTED_MODULE_7__["ChecklistPage"],
            _basicsetting_basicsetting_page__WEBPACK_IMPORTED_MODULE_8__["BasicsettingPage"], _registrasidusun_registrasidusun_page__WEBPACK_IMPORTED_MODULE_9__["RegistrasidusunPage"],
            _informasidusun_informasidusun_page__WEBPACK_IMPORTED_MODULE_10__["InformasidusunPage"], _datadasardusun_datadasardusun_page__WEBPACK_IMPORTED_MODULE_11__["DatadasardusunPage"]]
    })
], BasicdataPageModule);



/***/ }),

/***/ "./src/app/pages/basicdata/basicdata.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/basicdata/basicdata.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFzaWNkYXRhL2Jhc2ljZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFNQTtFQUVJLGdDQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYXNpY2RhdGEvYmFzaWNkYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/basicdata/basicdata.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/basicdata/basicdata.page.ts ***!
  \***************************************************/
/*! exports provided: BasicdataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicdataPage", function() { return BasicdataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let BasicdataPage = class BasicdataPage {
    constructor(NavController, apiService, alertController, router) {
        this.NavController = NavController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.router = router;
        this.catecories = [];
        this.isDataDasarChecked = false;
        this.isDataRegistrasiDusunChecked = false;
    }
    ngOnInit() {
        let netwotkInformation = localStorage.getItem('netwotkInformation');
        if (netwotkInformation == 'offline') {
            this.alertNeedInternet();
        }
        else {
            let currentUser = localStorage.getItem('currentUser');
            let d = JSON.parse(currentUser);
            this.userID = d.user.id;
            this.getListCategory();
        }
    }
    ionViewDidEnter() {
        this.getDetailUser();
        this.getListDusun();
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
    getDetailUser() {
        // this.catecories = [];
        this.subscribe = this.apiService.get('users/' + this.userID + '?no_expand=user_areas', {}).subscribe(data => {
            // this.catecories = data.List;
            let usr = data.user;
            this.isDataDasarChecked = (usr.ts_updated != '' && usr.ts_updated != null)
                ? true : false;
        }, error => {
            if (error.status == 401) {
                this.alertToRelogin();
            }
        });
    }
    getListDusun() {
        let geo_id = localStorage.getItem('geo_id');
        this.subscribe = this.apiService.get('user_areas?no_expand=user,geo&geo_id=' + geo_id, {}).subscribe(data => {
            this.isDataRegistrasiDusunChecked = (data.length > 0) ? true : false;
            // console.log(data);
        });
    }
    getListCategory() {
        this.catecories = [];
        this.subscribe = this.apiService.get('checklist_categories?language_id=2', {}).subscribe(data => {
            this.catecories = data.List;
            // console.log(this.catecories);
        });
    }
    actionGetCheclist(params) {
        this.NavController.navigateForward(['/basicdata/checklist', params]);
    }
    gotoPage(path) {
        this.NavController.navigateForward([path]);
    }
    goBack() {
        this.NavController.navigateBack(['/home'], { replaceUrl: true });
    }
};
BasicdataPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BasicdataPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basicdata',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basicdata.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/basicdata.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basicdata.page.scss */ "./src/app/pages/basicdata/basicdata.page.scss")).default]
    })
], BasicdataPage);



/***/ }),

/***/ "./src/app/pages/basicdata/basicsetting/basicsetting.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/basicdata/basicsetting/basicsetting.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n\n.form ion-item {\n  border: 1px solid #eaeaea !important;\n  margin-top: 7px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.form ion-select {\n  width: 100%;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFzaWNkYXRhL2Jhc2ljc2V0dGluZy9iYXNpY3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBT0k7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FBSlI7O0FBVUk7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUFI7O0FBVUk7RUFDSSxXQUFBO0FBUlI7O0FBY0E7RUFFSSxnQ0FBQTtBQVpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFzaWNkYXRhL2Jhc2ljc2V0dGluZy9iYXNpY3NldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5pb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/basicdata/basicsetting/basicsetting.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/basicdata/basicsetting/basicsetting.page.ts ***!
  \*******************************************************************/
/*! exports provided: BasicsettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicsettingPage", function() { return BasicsettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let BasicsettingPage = class BasicsettingPage {
    constructor(NavController, alertController, apiService, loadingController, toastController, router) {
        this.NavController = NavController;
        this.alertController = alertController;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.name = '';
        this.phone_number = '';
        this.data_filler_name = '';
        this.data_filler_phone_number = '';
        this.data_filler_position = '';
        this.percentage_income = '';
        this.percentage_television = '';
        this.help_women = false;
        this.help_poor = false;
        this.help_elder = false;
        this.help_special_needs = false;
        this.help_isolated_tribal = false;
        this.help_refugee = false;
    }
    ngOnInit() {
        let currentUser = localStorage.getItem('currentUser');
        let d = JSON.parse(currentUser);
        this.userID = d.user.id;
    }
    ionViewDidEnter() {
        this.getDetailUser();
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
    getDetailUser() {
        // this.catecories = [];
        this.subscribe = this.apiService.get('users/' + this.userID + '?no_expand=user_areas', {}).subscribe(data => {
            // this.catecories = data.List;
            let usr = data.user;
            this.name = usr.name;
            this.phone_number = usr.phone_number;
            this.data_filler_name = usr.data_filler_name;
            this.data_filler_phone_number = usr.data_filler_phone_number;
            this.data_filler_position = usr.data_filler_position;
            this.percentage_income = usr.percentage_income;
            this.percentage_television = usr.percentage_television;
            this.help_women = (usr.help_women == '1') ? true : false;
            this.help_poor = (usr.help_poor == '1') ? true : false;
            this.help_elder = (usr.help_elder == '1') ? true : false;
            this.help_special_needs = (usr.help_special_needs == '1') ? true : false;
            this.help_isolated_tribal = (usr.help_isolated_tribal == '1') ? true : false;
            this.help_refugee = (usr.help_refugee == '1') ? true : false;
        }, error => {
            if (error.status == 401) {
                this.alertToRelogin();
            }
        });
    }
    savingData() {
        if (this.name != '' && this.name != null && this.name.trim() != '' &&
            this.phone_number != '' && this.phone_number != null && this.phone_number != 'null' &&
            this.data_filler_position != '' && this.data_filler_position != null && this.data_filler_position != 'null' && this.data_filler_position != 'null' &&
            this.percentage_income != '' && this.percentage_income != null && this.percentage_income != 'null' &&
            this.percentage_television != '' && this.percentage_television != null && this.percentage_television != 'null') {
            this.presentLoading();
            let params = {
                name: this.name,
                phone_number: this.phone_number,
                data_filler_name: '',
                data_filler_phone_number: '',
                data_filler_position: this.data_filler_position,
                percentage_income: this.percentage_income,
                percentage_television: this.percentage_television,
                help_women: (this.help_women == true) ? '1' : '0',
                help_poor: (this.help_poor == true) ? '1' : '0',
                help_elder: (this.help_elder == true) ? '1' : '0',
                help_special_needs: (this.help_special_needs == true) ? '1' : '0',
                help_isolated_tribal: (this.help_isolated_tribal == true) ? '1' : '0',
                help_refugee: (this.help_refugee == true) ? '1' : '0',
            };
            this.subscribe = this.apiService.patch('users/' + this.userID, params).subscribe(data => {
                // this.getListItems();
                let currentUser = localStorage.getItem('currentUser');
                let d = JSON.parse(currentUser);
                d.user.name = this.name;
                d.user.phone_number = this.phone_number;
                localStorage.setItem('currentUser', JSON.stringify(d));
                setTimeout(() => {
                    this.presentToast('success', 'Success', 'Data tersimpan');
                    this.goBack();
                }, 2000);
            }, error => {
                setTimeout(() => {
                    this.presentToast('danger', 'Error', 'Data tidak tersimpan');
                }, 2000);
                // this.presentToast('danger', 'Gagal Update Data', 'Mohono Hubungi Pihak Terkait');
            });
        }
        else {
            this.presentToast('warning', 'Warning', 'Semua data wajib diisi!');
        }
    }
    goBack() {
        this.NavController.navigateBack(['/basicdata'], { replaceUrl: true });
    }
};
BasicsettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BasicsettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basicsetting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basicsetting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/basicsetting/basicsetting.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basicsetting.page.scss */ "./src/app/pages/basicdata/basicsetting/basicsetting.page.scss")).default]
    })
], BasicsettingPage);



/***/ }),

/***/ "./src/app/pages/basicdata/checklist/checklist.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/basicdata/checklist/checklist.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n\n.alert-tappable.sc-ion-alert-ios {\n  height: 33px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFzaWNkYXRhL2NoZWNrbGlzdC9jaGVja2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBTUE7RUFFSSxnQ0FBQTtBQUpKOztBQU9BO0VBQ0ksdUJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhc2ljZGF0YS9jaGVja2xpc3QvY2hlY2tsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/basicdata/checklist/checklist.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/basicdata/checklist/checklist.page.ts ***!
  \*************************************************************/
/*! exports provided: ChecklistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistPage", function() { return ChecklistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let ChecklistPage = class ChecklistPage {
    constructor(route, NavController, apiService, alertController, toastController) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.catecories = [];
        this.arrayInput = [];
        this.params = this.route.snapshot.params;
    }
    ngOnInit() {
        this.getListItems();
    }
    presentAlertOpenChecklish(category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let header = this.params.name;
            let message = category.name;
            this.arrayInput = [
                {
                    name: 'radio1',
                    type: 'radio',
                    label: 'Perlu dikerjakan',
                    value: '0',
                    checked: true
                },
                {
                    name: 'radio2',
                    type: 'radio',
                    label: 'Sedang dikerjakan',
                    value: '1'
                },
                {
                    name: 'radio3',
                    type: 'radio',
                    label: 'Sudah dikerjakan',
                    value: '2'
                }
            ];
            if (category.status != null) {
                this.arrayInput.forEach((v) => {
                    let checked = (v.value == category.status) ? true : false;
                    v.checked = checked;
                });
            }
            else {
                this.arrayInput[0].checked = true;
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                mode: "ios",
                backdropDismiss: true,
                inputs: this.arrayInput,
                buttons: [
                    {
                        text: 'Baca Pedoman',
                        handler: data => {
                            this.presentAlertBacaPedoman(category);
                        }
                    },
                    {
                        text: 'Simpan',
                        handler: data => {
                            this.updateStatus(category.checklist_item_id, data);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertBacaPedoman(category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let header = 'Pedoman';
            let message = category.guidelines_text;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                mode: "ios",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tutup',
                        handler: data => {
                            this.presentAlertOpenChecklish(category);
                        }
                    }
                ]
            });
            yield alert.present();
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
    updateStatus(id, status) {
        let params = { status: status };
        this.subscribe = this.apiService.put('checklist_items/' + id, params).subscribe(data => {
            this.getListItems();
        }, error => {
            this.presentToast('danger', 'Gagal Update Data', 'Mohono Hubungi Pihak Terkait');
        });
    }
    getListItems() {
        this.catecories = [];
        this.subscribe = this.apiService.get('checklist_categories?language_id=2&id=' + this.params.id, {}).subscribe(data => {
            this.catecories = data.List;
        });
    }
    goBack() {
        this.NavController.navigateBack(['/basicdata'], { replaceUrl: true });
    }
};
ChecklistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
ChecklistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checklist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checklist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/checklist/checklist.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checklist.page.scss */ "./src/app/pages/basicdata/checklist/checklist.page.scss")).default]
    })
], ChecklistPage);



/***/ }),

/***/ "./src/app/pages/basicdata/datadasardusun/datadasardusun.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/basicdata/datadasardusun/datadasardusun.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n\n.form ion-item {\n  border: 1px solid #eaeaea !important;\n  margin-top: 7px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.form ion-select {\n  width: 100%;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFzaWNkYXRhL2RhdGFkYXNhcmR1c3VuL2RhdGFkYXNhcmR1c3VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLHFCQUFBO0VBQ0EsY0FBQTtBQURSOztBQU9JO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtBQUpSOztBQVVJO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBSOztBQVVJO0VBQ0ksV0FBQTtBQVJSOztBQWNBO0VBRUksZ0NBQUE7QUFaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhc2ljZGF0YS9kYXRhZGFzYXJkdXN1bi9kYXRhZGFzYXJkdXN1bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/basicdata/datadasardusun/datadasardusun.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/basicdata/datadasardusun/datadasardusun.page.ts ***!
  \***********************************************************************/
/*! exports provided: DatadasardusunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatadasardusunPage", function() { return DatadasardusunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/id */ "./node_modules/moment/locale/id.js");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let DatadasardusunPage = class DatadasardusunPage {
    constructor(route, NavController, apiService, loadingController, toastController) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.titile = 'Informasi Dusun';
        this.subTitle = '';
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY');
        this.households = 0;
        this.population_male = 0;
        this.population_female = 0;
        this.population_elder = 0;
        this.population_productive_age = 0;
        this.population_conditions = 0;
        this.small_enterprises = 0;
        this.params = this.route.snapshot.params;
        console.log(this.params);
        this.subTitle = this.params.name;
        this.households = (this.params.households != null && this.params.households != '' && this.params.households != 'null') ? this.params.households : 0;
        this.population_male = (this.params.population_male != null && this.params.population_male != '' && this.params.population_male != 'null') ? this.params.population_male : 0;
        this.population_female = (this.params.population_female != null && this.params.population_female != '' && this.params.population_female != 'null') ? this.params.population_female : 0;
        this.population_elder = (this.params.population_elder != null && this.params.population_elder != '' && this.params.population_elder != 'null') ? this.params.population_elder : 0;
        this.population_productive_age = (this.params.population_productive_age != null && this.params.population_productive_age != '' && this.params.population_productive_age != 'null') ? this.params.population_productive_age : 0;
        this.population_conditions = (this.params.population_conditions != null && this.params.population_conditions != '' && this.params.population_conditions != 'null') ? this.params.population_conditions : 0;
        this.small_enterprises = (this.params.small_enterprises != null && this.params.small_enterprises != '' && this.params.small_enterprises != 'null') ? this.params.small_enterprises : 0;
    }
    ngOnInit() {
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
        if (this.households != null &&
            this.population_elder != null &&
            this.population_male != null &&
            this.population_female != null &&
            this.population_productive_age != null &&
            this.population_conditions != null &&
            this.small_enterprises != null) {
            this.presentLoading();
            let population_total = this.population_male + this.population_female;
            let params = {
                name: this.params.name,
                households: this.households,
                population_elder: this.population_elder,
                population_male: this.population_male,
                population_female: this.population_female,
                population_productive_age: this.population_productive_age,
                population_total: population_total,
                population_conditions: this.population_conditions,
                small_enterprises: this.small_enterprises,
            };
            this.subscribe = this.apiService.patch('user_areas/' + this.params.id, params).subscribe(data => {
                // this.getListItems();
                // this.subTitle = data.user_area.name;
                setTimeout(() => {
                    this.presentToast('success', 'Success', 'Data tersimpan');
                }, 2000);
            }, error => {
                setTimeout(() => {
                    this.presentToast('danger', 'Error', 'Data tidak tersimpan');
                }, 2000);
            });
        }
        else {
            this.presentToast('warning', 'Warning', 'Semua data wajib diisi');
        }
    }
    goBack() {
        this.NavController.navigateBack(['/basicdata/registrasidusun'], { replaceUrl: true });
    }
};
DatadasardusunPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
DatadasardusunPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datadasardusun',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./datadasardusun.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/datadasardusun/datadasardusun.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./datadasardusun.page.scss */ "./src/app/pages/basicdata/datadasardusun/datadasardusun.page.scss")).default]
    })
], DatadasardusunPage);



/***/ }),

/***/ "./src/app/pages/basicdata/informasidusun/informasidusun.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/basicdata/informasidusun/informasidusun.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n\n.form ion-item {\n  border: 1px solid #eaeaea !important;\n  margin-top: 7px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.form ion-select {\n  width: 100%;\n}\n\nion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFzaWNkYXRhL2luZm9ybWFzaWR1c3VuL2luZm9ybWFzaWR1c3VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLHFCQUFBO0VBQ0EsY0FBQTtBQURSOztBQU9JO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtBQUpSOztBQVVJO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBSOztBQVVJO0VBQ0ksV0FBQTtBQVJSOztBQWNBO0VBRUksZ0NBQUE7QUFaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhc2ljZGF0YS9pbmZvcm1hc2lkdXN1bi9pbmZvcm1hc2lkdXN1bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/basicdata/informasidusun/informasidusun.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/basicdata/informasidusun/informasidusun.page.ts ***!
  \***********************************************************************/
/*! exports provided: InformasidusunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformasidusunPage", function() { return InformasidusunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let InformasidusunPage = class InformasidusunPage {
    constructor(route, NavController, apiService, loadingController, toastController, alertController) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.head_has_smartphone = '0';
        this.titile = 'Informasi Dusun';
        this.subTitle = '';
        this.params = this.route.snapshot.params;
        console.log(this.params);
        if (this.params.action == 'edit') {
            this.name = (this.params.name != null && this.params.name != '' && this.params.name != 'null') ? this.params.name : '';
            this.head_name = (this.params.head_name != null && this.params.head_name != '' && this.params.head_name != 'null') ? this.params.head_name : '';
            this.head_phone_number = (this.params.head_phone_number != null && this.params.head_phone_number != '' && this.params.head_phone_number != 'null') ? this.params.head_phone_number : '';
            this.head_has_smartphone = (this.params.head_has_smartphone != null && this.params.head_has_smartphone != '' && this.params.head_has_smartphone != 'null') ? this.params.head_has_smartphone : 0;
            this.subTitle = this.name;
        }
        else {
            this.titile = 'Tambah Dusun';
        }
    }
    ngOnInit() {
    }
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: message,
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
    openAlertRemoveDusun() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let header = 'Hapus Dusun ?';
            let message = this.name;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                mode: "ios",
                backdropDismiss: true,
                inputs: [],
                buttons: [
                    {
                        text: 'Ya',
                        handler: data => {
                            this.removeDusun();
                            // datadasardusunn
                            // this.NavController.navigateForward(['/basicdata/datadasardusun', item]);
                        }
                    },
                    {
                        text: 'Tidak',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    segmentChanged(event) {
        this.head_has_smartphone = event.detail.value;
    }
    removeDusun() {
        this.presentLoading('menghapus data...');
        this.subscribe = this.apiService.delete('user_areas/' + this.params.id, {}).subscribe(data => {
            setTimeout(() => {
                this.presentToast('success', 'Success', 'Data berhasil dihapus');
                this.NavController.navigateBack(['/basicdata/registrasidusun'], { replaceUrl: true });
            }, 2000);
        }, error => {
            setTimeout(() => {
                this.presentToast('danger', 'Error', 'Data tidak terhapus');
            }, 2000);
        });
    }
    savingData() {
        if (this.name != '' && this.name != null &&
            this.head_name != '' && this.head_name != null &&
            this.head_phone_number != '' && this.head_phone_number != null &&
            this.head_has_smartphone != '' && this.head_has_smartphone != null) {
            this.presentLoading('menyimpan data...');
            let geo_id = localStorage.getItem('geo_id');
            let params = {
                name: this.name,
                geo_id: geo_id,
                head_name: this.head_name,
                head_phone_number: this.head_phone_number,
                head_has_smartphone: this.head_has_smartphone,
            };
            if (this.params.action == 'edit') {
                this.subscribe = this.apiService.patch('user_areas/' + this.params.id, params).subscribe(data => {
                    this.subTitle = data.user_area.name;
                    setTimeout(() => {
                        this.presentToast('success', 'Success', 'Data tersimpan');
                    }, 2000);
                }, error => {
                    setTimeout(() => {
                        this.presentToast('danger', 'Error', 'Data tidak tersimpan');
                    }, 2000);
                });
            }
            else {
                this.subscribe = this.apiService.post('user_areas', params).subscribe(data => {
                    // this.getListItems();
                    setTimeout(() => {
                        this.presentToast('success', 'Success', 'Data tersimpan');
                        this.NavController.navigateBack(['/basicdata/registrasidusun'], { replaceUrl: true });
                    }, 2000);
                }, error => {
                    setTimeout(() => {
                        this.presentToast('danger', 'Error', 'Data tidak tersimpan');
                    }, 2000);
                });
            }
        }
        else {
            this.presentToast('warning', 'Warning', 'Semua form wajib diisi');
        }
    }
    goBack() {
        this.NavController.navigateBack(['/basicdata/registrasidusun'], { replaceUrl: true });
    }
};
InformasidusunPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
InformasidusunPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informasidusun',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./informasidusun.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/informasidusun/informasidusun.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./informasidusun.page.scss */ "./src/app/pages/basicdata/informasidusun/informasidusun.page.scss")).default]
    })
], InformasidusunPage);



/***/ }),

/***/ "./src/app/pages/basicdata/registrasidusun/registrasidusun.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/basicdata/registrasidusun/registrasidusun.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFzaWNkYXRhL3JlZ2lzdHJhc2lkdXN1bi9yZWdpc3RyYXNpZHVzdW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYXNpY2RhdGEvcmVnaXN0cmFzaWR1c3VuL3JlZ2lzdHJhc2lkdXN1bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/basicdata/registrasidusun/registrasidusun.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/basicdata/registrasidusun/registrasidusun.page.ts ***!
  \*************************************************************************/
/*! exports provided: RegistrasidusunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrasidusunPage", function() { return RegistrasidusunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");




let RegistrasidusunPage = class RegistrasidusunPage {
    constructor(NavController, apiService, alertController, loadingController, toastController, actionSheetController) {
        this.NavController = NavController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.items = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getListDusun();
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
    openOptionDusun(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let buttons = [
                {
                    text: 'Edit Informasi Dusun',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        item.action = 'edit';
                        this.NavController.navigateForward(['/basicdata/informasidusun', item]);
                    })
                },
                {
                    text: 'Edit Data Dasar Dusun',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.NavController.navigateForward(['/basicdata/datadasardusun', item]);
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
                header: item.name,
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: buttons
            });
            yield actionSheet.present();
        });
    }
    createDusun() {
        this.NavController.navigateForward(['/basicdata/informasidusun', { action: 'create' }]);
    }
    getListDusun() {
        this.presentProgressLoading('Loading...');
        this.items = [];
        let geo_id = localStorage.getItem('geo_id');
        this.subscribe = this.apiService.get('user_areas?no_expand=user,geo&geo_id=' + geo_id, {}).subscribe(data => {
            // this.catecories = data.List;
            this.items = data;
            // console.log(data);
            this.progressloading.dismiss();
        }, error => {
            this.presentToast('danger', 'Gagal', 'Gagal mendapatkan data, cobalah beberapa saat lagi', 2000);
            this.progressloading.dismiss();
        });
    }
    goBack() {
        this.NavController.navigateBack(['/basicdata'], { replaceUrl: true });
    }
};
RegistrasidusunPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
RegistrasidusunPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrasidusun',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registrasidusun.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/basicdata/registrasidusun/registrasidusun.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registrasidusun.page.scss */ "./src/app/pages/basicdata/registrasidusun/registrasidusun.page.scss")).default]
    })
], RegistrasidusunPage);



/***/ })

}]);
//# sourceMappingURL=pages-basicdata-basicdata-module-es2015.js.map