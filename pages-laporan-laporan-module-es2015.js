(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-laporan-laporan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/datadasardesa/datadasardesa.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/datadasardesa/datadasardesa.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Data Dasar Desa</ion-title>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div *ngIf=\"listAPBDes.length>0\">\n\n    \n\n    <ion-list>\n      <ion-item   (click)=\"gotoInformasiDasarDesa()\" lines=\"full\">\n            <ion-icon slot=\"start\" color=\"success\" *ngIf=\"statusBasicInformasi==1\" name=\"checkmark-circle\"></ion-icon>\n            <!-- <ion-icon slot=\"start\" color=\"warning\"  *ngIf=\"item.status == 1\" name=\"timer\"></ion-icon> -->\n            <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"statusBasicInformasi==0\" name=\"ellipse-outline\"></ion-icon>\n            <ion-label>\n              <h2 class=\"label-title\">Informasi Dasar Desa</h2>\n            </ion-label>\n            <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n          </ion-item>\n      <ion-list-header>\n          DATA REFOCUSING APB Desa\n        </ion-list-header>\n        <ion-item  *ngFor=\"let item of listAPBDes\"  (click)=\"gotoDataDasarForm(item)\" lines=\"full\">\n            <ion-icon slot=\"start\" color=\"success\" *ngIf=\"item.status==2\" name=\"checkmark-circle\"></ion-icon>\n            <ion-icon slot=\"start\" color=\"warning\"  *ngIf=\"item.status == 1\" name=\"timer\"></ion-icon>\n            <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"item.status==0\" name=\"ellipse-outline\"></ion-icon>\n            <ion-label>\n              <h3 class=\"label-title\">{{ item.description }}</h3>\n              <p>{{ item.code }}</p>\n            </ion-label>\n            <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n          </ion-item>\n    </ion-list>\n\n  </div>\n\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar style=\"height: 57px;padding-top: 5px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Form Data Dasar</ion-title>\n\n    <!-- <ion-buttons slot=\"primary\">\n      <ion-button color=\"light\" fill=\"solid\" size=\"small\">\n        {{question_current / question_total * 100}} %\n      </ion-button>\n    </ion-buttons> -->\n\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"subtitle!=''\" style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{ params.code }} - {{ params.description }}\n    </ion-title>\n    \n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content mode=\"ios\">\n\n\n  <ion-card>\n\n    <div *ngIf=\"listQuestions.length>0\">\n\n      <div *ngFor=\"let item of listQuestions; let i = index\">\n\n        <ion-card-content>\n          {{ item.code }} - {{ item.descriptions }}\n          <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n            <ion-input type=\"number\"  style=\"text-align: right;\" [(ngModel)]=\"listQuestions[i].value\" ></ion-input>\n          </ion-item>\n          <p style=\"text-align: right;color: #ff5722;\">{{ formatRupiah(listQuestions[i].value) }}</p>\n        </ion-card-content>\n\n      </div>\n\n    </div>\n\n    \n  </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" (click)=\"kirimDataDasar()\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Kirim\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/formlaporan/formlaporan.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/formlaporan/formlaporan.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar style=\"height: 57px;padding-top: 5px;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"light\" (click)=\"goBack(0)\">\r\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Isi Laporan {{ title }}</ion-title>\r\n\r\n    <!-- <ion-buttons slot=\"primary\">\r\n      <ion-button color=\"light\" fill=\"solid\" size=\"small\">\r\n        {{question_current / question_total * 100}} %\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar *ngIf=\"subtitle!=''\" style=\"--background: #eaeaea;color: #333333;\">\r\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\r\n      {{ subtitle }}<br/>{{subtitle_2}}<br/>{{subtitle_3}}\r\n    </ion-title>\r\n    \r\n  </ion-toolbar>\r\n  <ion-progress-bar color=\"warning\" [value]=\"question_current/question_total\"></ion-progress-bar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  \r\n\r\n  <div id=\"container-custom\" *ngIf=\"showCurrentQuestion\">\r\n\r\n    <ion-card *ngIf=\"!showButtonSend\">\r\n      <ion-card-content>\r\n        \r\n        <div style=\"margin-bottom: 15px;\"  [innerHTML]=\"currentQuestion?.question\"></div>\r\n\r\n        <!-- Multiple select (single select) -->\r\n        <ion-list *ngIf=\"currentQuestion.id_question_type == 3\">\r\n          <ion-radio-group value=\"\" *ngIf=\"currentQuestion.Options.length>0\" \r\n            (ionChange)=\"radioGroupChange($event)\" value=\"{{ singleAnswer }}\">\r\n            <ion-item lines=\"none\" *ngFor=\"let option of currentQuestion.Options\">\r\n              <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\r\n              <ion-radio slot=\"start\" value=\"{{ option.id }}\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-list>\r\n\r\n\r\n        <!-- Boolean -->\r\n        <ion-segment  *ngIf=\"currentQuestion.id_question_type == 2 && currentQuestion.Options.length>0\" \r\n          (ionChange)=\"segmentChanged($event)\" value=\"{{ singleAnswer }}\">\r\n          <ion-segment-button *ngFor=\"let option of currentQuestion.Options\" value=\"{{option.id}}\">\r\n            <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n\r\n\r\n        <!-- Essay text -->\r\n        <ion-item *ngIf=\"currentQuestion.id_question_type == 1\" lines=\"none\">\r\n          <ion-textarea rows=\"3\" placeholder=\"Ketik jawaban...\" [(ngModel)]=\"singleAnswer\"></ion-textarea>\r\n        </ion-item>\r\n\r\n        <!-- Essay number -->\r\n        <div *ngIf=\"currentQuestion.id_question_type == 5\">\r\n\r\n          <ion-item lines=\"none\">\r\n          <!-- <ion-input type=\"text\" style=\"text-align: right;\" (keypress)=\"numberOnlyValidation($event)\" [(ngModel)]=\"singleAnswer\" (ngModelChange)=\"updateQuantity(singleAnswer)\"></ion-input> -->\r\n            <ion-input type=\"text\" style=\"text-align: right;\" [(ngModel)]=\"singleAnswer\"></ion-input>\r\n          </ion-item>\r\n\r\n          <p style=\"text-align: right;color: #ff5722;\">{{ formatRupiah(singleAnswer) }}</p>\r\n\r\n        </div>\r\n        \r\n\r\n        <!-- Essay date -->\r\n        <ion-item *ngIf=\"currentQuestion.id_question_type == 7\" lines=\"none\">\r\n          <!-- <ion-item>\r\n            <ion-label>MMMM</ion-label>\r\n            <ion-datetime displayFormat=\"MMMM\" value=\"2012-12-15T13:47:20.789\"></ion-datetime>\r\n          </ion-item> -->\r\n\r\n            <ion-datetime displayFormat=\"DD/MMM/YYYY\" pickerFormat=\"DD MMM YYYY\" cancel-text=\"Tutup\" done-text=\"Pilih\" \r\n            [(ngModel)]=\"singleAnswer\" placeholder=\"Pilih tanggal\"></ion-datetime>\r\n            \r\n          <!-- <ion-input type=\"number\" [(ngModel)]=\"singleAnswer\"></ion-input> -->\r\n        </ion-item>\r\n\r\n        <!-- Essay image -->\r\n        <div *ngIf=\"currentQuestion.id_question_type == 6\" style=\"margin-bottom: 15px;\">\r\n          <ion-row>\r\n            <ion-col text-center>\r\n              <ion-button expand=\"block\" color=\"medium\" (click)=\"getImagesFromGalery()\">\r\n                  <ion-icon slot=\"start\" name=\"image\"></ion-icon>\r\n                  Buka Galery</ion-button>\r\n            </ion-col>\r\n            <ion-col text-center>\r\n              <ion-button expand=\"block\" color=\"medium\" (click)=\"getImagesFromCamera()\">\r\n                  <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                  Buka Kamera</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ion-item *ngIf=\"currentQuestion.id_question_type == 6 && !singleAnswer == ''\" style=\"--padding-bottom:15px;--padding-top:15px;\" lines=\"none\">\r\n              <img src=\"{{singleAnswer}}\" alt=\"\" srcset=\"\">\r\n        </ion-item>\r\n\r\n\r\n        <!-- Multiple select (multy select) -->\r\n        <ion-list *ngIf=\"currentQuestion.id_question_type == 4\">\r\n          <ion-item *ngFor=\"let option of currentQuestion.Options\" lines=\"none\">\r\n            <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\r\n            <!-- [(ngModel)]=\"entry.isChecked\" -->\r\n            <ion-checkbox slot=\"end\" (ionChange)=\"selectSize($event)\" value=\"{{ option.id }}\" [(ngModel)]=\"option.isChecked\" ></ion-checkbox>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div *ngIf=\"showButtonSend\" style=\"padding: 15px;\">\r\n      <ion-card>\r\n\r\n        <img src=\"./assets/sending.jpg\" />\r\n\r\n        <ion-card-content>\r\n          \r\n          <ion-button style=\"margin-bottom: 10px;\" (click)=\"getNextQuestion( 0, 'next' )\" expand=\"block\" fill=\"solid\" color=\"light\">Koreksi Ulang Laporan</ion-button>\r\n          <!-- <ion-button style=\"margin-bottom: 10px;\" *ngIf=\"params.page_from!='temporary'\" (click)=\"temporarySave()\" expand=\"block\" fill=\"solid\" color=\"medium\">Simpan Laporan Sementara</ion-button> -->\r\n          <ion-button (click)=\"sendAnswer()\" expand=\"block\" fill=\"solid\" color=\"warning\">Kirim Laporan</ion-button>\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"!showButtonSend\" class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <!-- {{question_current}} -->\r\n        <ion-button *ngIf=\"showButtonBack\" expand=\"block\" (click)=\"getNextQuestion( number_of_back, 'back' )\" shape=\"round\" color=\"light\" fill=\"solid\">\r\n          <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n          Sebelumnya</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" (click)=\"getNextQuestion( number_of_forward, 'next')\" shape=\"round\" color=\"warning\" fill=\"solid\">\r\n          Selanjutnya\r\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n        \r\n        <!-- <ion-button *ngIf=\"!showButtonForward\" expand=\"block\" (click)=\"sendAnswer()\" shape=\"round\" color=\"warning\" fill=\"solid\">\r\n          Kirim Jawaban\r\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/groups/groups.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/groups/groups.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"light\" (click)=\"goBack()\">\r\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>List Group</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar *ngIf=\"subtitle!=''\" style=\"--background: #eaeaea;color: #333333;\">\r\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\r\n      <!-- Pilih group pertanyaan untuk mulai mengisi laporan -->\r\n      <ion-button expand=\"block\" (click)=\"gotoDataDasar()\" color=\"warning\" fill=\"solid\">Data Dasar Desa</ion-button>\r\n    </ion-title>\r\n    \r\n  </ion-toolbar>\r\n\r\n  <!-- <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\r\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\r\n      <ion-button expand=\"block\" (click)=\"selectTime()\" color=\"warning\" fill=\"solid\">Tambah Laporan</ion-button>\r\n    </ion-title>\r\n  </ion-toolbar> -->\r\n\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-list *ngIf=\"lists.length > 0\" id=\"list-group\">\r\n    <ion-item *ngFor=\"let item of lists\" lines=\"full\" (click)=\"presentActionSheetSelectPeriode(item)\">\r\n      <ion-label>\r\n        <h3>{{item.title}}</h3>\r\n        <p><span [ngClass]=\"{'type-active' : item.Q_Mingguan.length>0 }\">Mingguan</span>\r\n          <span [ngClass]=\"{'type-active' : item.Q_Bulanan.length>0 }\">, Bulanan</span>\r\n          <span [ngClass]=\"{'type-active' : item.Q_Triwulan.length>0 }\">, Triwulan</span></p>\r\n        <span class=\"range-group\">{{getMonthName(item.month_start)}} {{item.year_start}}\r\n          <span *ngIf=\"item.is_period=='1'\"> - {{getMonthName(item.month_end)}} {{item.year_end}}</span>\r\n        </span>\r\n                </ion-label>\r\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/informasidesa/informasidesa.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/informasidesa/informasidesa.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar style=\"height: 57px;padding-top: 5px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Informasi Dasar</ion-title>\n\n  </ion-toolbar>\n\n  \n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-card>\n\n    <div>\n\n      <div>\n\n        <ion-card-content>\n          Jumlah RT\n          <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n            <ion-input type=\"number\" [(ngModel)]=\"rt\" ></ion-input>\n          </ion-item>\n\n          \n          Jumlah RW\n          <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n            <ion-input type=\"number\" [(ngModel)]=\"rw\" ></ion-input>\n          </ion-item>\n\n          \n          Jumlah Posko Desa\n          <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n            <ion-input type=\"number\" [(ngModel)]=\"posko_desa\" ></ion-input>\n          </ion-item>\n\n          \n          Nomor HP\n          <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n            <ion-label>+62</ion-label>\n            <ion-input [(ngModel)]=\"phone_number\" type=\"number\"></ion-input>\n          </ion-item>\n\n          \n          Nomor Telpon\n          <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n            <ion-input type=\"number\" [(ngModel)]=\"telephone\" ></ion-input>\n          </ion-item>\n        </ion-card-content>\n\n      </div>\n\n    </div>\n\n    \n  </ion-card>\n\n\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" (click)=\"kirimDataDasar()\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Kirim\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/listlaporan/listlaporan.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/listlaporan/listlaporan.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      <ion-button expand=\"block\" (click)=\"selectTime()\" color=\"warning\" fill=\"solid\">Tambah Laporan</ion-button>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"lists.length > 0\">\n    <ion-item *ngFor=\"let item of lists\" lines=\"full\" (click)=\"gotoSelectDusun(item)\">\n      <ion-label>\n        <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <!-- <ion-icon slot=\"start\" color=\"medium\" name=\"ellipse-outline\"></ion-icon> -->\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusun/selectdusun.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusun/selectdusun.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{ subtitle }}\n      <br/>\n      {{ subtitle_2 }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <!-- <ion-button (click)=\"presentActionSheet()\">Default</ion-button> -->\n\n  <ion-list *ngIf=\"this.params.selectDesa==1\">\n    <ion-item lines=\"full\" (click)=\"checkBeforeToFormQuestion('desa',{})\">\n      <ion-label><h2>Laporan Untuk Desa</h2>\n      </ion-label>\n\n      <ion-badge color=\"medium\" *ngIf=\"dataDesaFromServer.version>1\">Versi {{dataDesaFromServer.version}}</ion-badge>\n      \n      <ion-icon slot=\"start\" color=\"success\" *ngIf=\"dataDesaFromServer.version>0\" name=\"checkmark-circle\"></ion-icon>\n      <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"dataDesaFromServer.version==0\" name=\"ellipse-outline\"></ion-icon>\n      \n      <ion-icon slot=\"end\" color=\"warning\" *ngIf=\"isDesaTemporarySave\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"medium\"  *ngIf=\"!isDesaTemporarySave\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list *ngIf=\"this.params.selectDusun==1 && arrDusun.length>0\">\n    <ion-list-header>\n          Daftar Dusun\n        </ion-list-header>\n    <ion-item *ngFor=\"let item of arrDusun\" lines=\"full\" (click)=\"checkBeforeToFormQuestion('dusun',item)\">\n      <ion-label><h3>{{ item.name }}</h3>\n      <p>Kepala Dusun : {{ item.head_name }}</p>\n      </ion-label>\n\n      <ion-badge color=\"medium\" *ngIf=\"item.version>1\">Versi {{item.version}}</ion-badge>\n\n      <ion-icon slot=\"start\" color=\"success\" *ngIf=\"item.version>0\" name=\"checkmark-circle\"></ion-icon>\n      <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"item.version==0\" name=\"ellipse-outline\"></ion-icon>\n\n      \n      <ion-icon slot=\"end\" color=\"warning\" *ngIf=\"item.isTemporary\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"medium\" *ngIf=\"!item.isTemporary\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Pilih Dusun</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      <strong>{{params.label}}</strong>\n      <br/>\n      {{params.range}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"this.params.selectDusun==1 && arrDusun.length>0\">\n    <ion-list-header>\n          Daftar Dusun\n        </ion-list-header>\n    <ion-item *ngFor=\"let item of arrDusun\" lines=\"full\" (click)=\"checkBeforeToFormQuestion(item)\">\n      <ion-label><h3>{{ item.name }}</h3>\n      <p>Kepala Dusun : {{ item.head_name }}</p>\n      </ion-label>\n\n      <ion-badge color=\"medium\" *ngIf=\"item.version>1\">Versi {{item.version}}</ion-badge>\n\n      <ion-icon slot=\"start\" color=\"success\" *ngIf=\"item.version>0\" name=\"checkmark-circle\"></ion-icon>\n      <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"item.version==0 || item.version==null\" name=\"ellipse-outline\"></ion-icon>\n\n      \n      <ion-icon slot=\"end\" color=\"warning\" *ngIf=\"item.isTemporary\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"medium\" *ngIf=\"!item.isTemporary\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectperiode/selectperiode.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectperiode/selectperiode.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"light\" (click)=\"goBack()\">\r\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Laporan {{target}} - {{params.type}}</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\r\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\r\n      List Group <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n      Laporan {{target}} <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n      Pilih Periode {{params.type}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n  <ion-list *ngIf=\"listTime.length > 0\">\r\n    <ion-list-header>\r\n          {{params.title}}\r\n        </ion-list-header>\r\n    <ion-item *ngFor=\"let item of sortDESCBy('sort')\" (click)=\"gotoFormLaporan(item)\" lines=\"full\">\r\n      <ion-label>\r\n        <h3>{{item.label}}</h3>\r\n              <p>{{item.range}}</p>\r\n      </ion-label>\r\n      \r\n\r\n      <ion-icon slot=\"start\" color=\"success\" *ngIf=\"item.status==2\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon slot=\"start\" color=\"warning\"  *ngIf=\"item.status == 1\" name=\"timer\"></ion-icon>\r\n      <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"item.status==0\" name=\"ellipse-outline\"></ion-icon>\r\n\r\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selecttime/selecttime.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selecttime/selecttime.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{title}} <ion-icon name=\"chevron-forward-outline\"></ion-icon> {{ subtitle }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"listTime.length > 0\">\n    <!-- <ion-list-header>\n          Daftar Minggu\n        </ion-list-header> -->\n    <ion-item *ngFor=\"let item of listTime\" (click)=\"gotoSelectDusun(item)\" lines=\"full\">\n      <ion-label>\n        <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <ion-button *ngIf=\"item.checked\" slot=\"end\" color=\"success\" size=\"small\">Sekarang</ion-button>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/viewlaporan/viewlaporan.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/viewlaporan/viewlaporan.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar style=\"height: 57px;padding-top: 5px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Laporan {{ title }}</ion-title>\n\n    \n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"subtitle!=''\" style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{ subtitle }}<br/>{{subtitle_2}}<br/>{{subtitle_3}}\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div *ngIf=\"listQuestion.length > 0\">\n    <div *ngFor=\"let item of listQuestion\">\n      \n      <ion-card *ngIf=\"item.Answers.length > 0\">\n        <!-- <ion-item style=\"--background: #eaeaea;--padding-bottom:0px;--inner-padding-bottom:0px;\" lines=\"none\">\n          \n          <ion-label class=\"label-title\">\n            <div style=\"margin-bottom: 15px;\"  [innerHTML]=\"item?.question\"></div>\n          </ion-label>          \n        </ion-item> -->\n\n        <ion-card-content>\n\n          <ion-label class=\"label-title\" [innerHTML]=\"item?.question\"></ion-label>\n\n          <!-- Boolean -->\n           <ion-grid *ngIf=\"item.id_question_type == 2 && item.Answers.length>0\" fixed=\"true\">\n             <ion-row>\n               <ion-col class=\"boolean-1\">\n                <div [ngClass]=\"{'boolean-active' : item.Answers[0].id_question_option == item.Options[0].id }\" [innerHTML]=\"item.Options[0]?.option\"></div>\n              </ion-col>\n               <ion-col class=\"boolean-2\">\n                <div [ngClass]=\"{'boolean-active' : item.Answers[0].id_question_option == item.Options[1].id }\" [innerHTML]=\"item.Options[1]?.option\"></div>\n              </ion-col>\n             </ion-row>\n           </ion-grid>\n\n\n        <!-- Essay text -->\n        <div *ngIf=\"item.id_question_type == 1\">\n          <b>Jawaban : </b>{{item.Answers[0].essay_text}}\n        </div>\n\n        <!-- Essay number -->\n        <div *ngIf=\"item.id_question_type == 5\">\n          <b>Jawaban : </b>{{item.Answers[0].essay_number}}\n        </div>\n\n        <!-- Essay number -->\n        <div *ngIf=\"item.id_question_type == 7\">\n          <b>Jawaban : </b>{{ formatingDate(item.Answers[0].essay_date)}}\n        </div>\n\n        <!-- Essay file -->\n        <div *ngIf=\"item.id_question_type == 6\">\n          <b>Jawaban : </b>\n          <div>\n            <img src=\"https://movtaskforce.oss-ap-southeast-5.aliyuncs.com/answers/{{item.Answers[0].essay_file}}\"  alt=\"{{item.Answers[0].essay_file}}\"/>\n          </div>\n        </div>\n\n\n        <ion-list *ngIf=\"item.id_question_type == 3 && item.Options.length>0  && item.Answers.length>0\">\n          <ion-item *ngFor=\"let option of item.Options\" lines=\"full\">\n            <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\n\n            <ion-icon slot=\"start\" *ngIf=\"item.Answers[0].id_question_option != option.id\" color=\"medium\" name=\"ellipse-outline\"></ion-icon>\n            <ion-icon slot=\"start\" *ngIf=\"item.Answers[0].id_question_option == option.id\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\n          </ion-item>\n        </ion-list>\n\n        <ion-list *ngIf=\"item.id_question_type == 4 && item.Options.length>0  && item.Answers.length>0\">\n          <ion-item *ngFor=\"let option of item.Options\" lines=\"full\">\n            <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\n\n            <ion-icon slot=\"end\" *ngIf=\"!item.Answers.includes(option.id)\" color=\"medium\" name=\"ellipse-outline\"></ion-icon>\n            <ion-icon slot=\"end\" *ngIf=\"item.Answers.includes(option.id)\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\n          </ion-item>\n        </ion-list>\n\n\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/laporan/datadasardesa/datadasardesa.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/laporan/datadasardesa/datadasardesa.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content #list-group .range-group {\n  color: #fffdfd;\n  background: #92949c9e;\n  font-size: 12px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 3px;\n}\n\nion-content #list-group p {\n  color: #e6e6e6;\n}\n\nion-content #list-group .type-active {\n  color: #576c7d;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9kYXRhZGFzYXJkZXNhL2RhdGFkYXNhcmRlc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBVUk7RUFDSSxrQkFBQTtBQVBSOztBQVlRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVZaOztBQWFRO0VBQ0ksY0FBQTtBQVhaOztBQWNRO0VBQ0ksY0FBQTtBQVpaOztBQXFCQTtFQUNJLG9DQUFBO0FBbEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9kYXRhZGFzYXJkZXNhL2RhdGFkYXNhcmRlc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogI2NhZWNlOTtcclxuICAgIC8vIC0tcGFkZGluZy10b3A6IDMwcHg7XHJcblxyXG4gICAgI2xpc3RMYXBvcmFuIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjbGlzdC1ncm91cCB7XHJcblxyXG4gICAgICAgIC5yYW5nZS1ncm91cCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZGZkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTI5NDljOWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTZlNmU2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnR5cGUtYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzZjN2Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/laporan/datadasardesa/datadasardesa.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/laporan/datadasardesa/datadasardesa.page.ts ***!
  \*******************************************************************/
/*! exports provided: DatadasardesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatadasardesaPage", function() { return DatadasardesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");




let DatadasardesaPage = class DatadasardesaPage {
    constructor(NavController, apiService) {
        this.NavController = NavController;
        this.apiService = apiService;
        this.listAPBDes = [];
        this.statusBasicInformasi = 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getBasicData();
        this.getListAPBDes();
    }
    getListAPBDes() {
        let geo_id = localStorage.getItem('geo_id');
        this.subscribe = this.apiService.get('v2/apbdes?geo_id=' + geo_id, {}).subscribe(data => {
            console.log(data);
            this.listAPBDes = data;
        }, error => {
            if (error.status == 401) {
                // this.alertToRelogin();
            }
        });
    }
    getBasicData() {
        let geo_id = localStorage.getItem('geo_id');
        this.subscribe = this.apiService.get('v2/basic_data?geo_id=' + geo_id, {}).subscribe(data => {
            console.log(data);
            if (data.length > 0) {
                this.statusBasicInformasi = 1;
            }
        }, error => {
            if (error.status == 401) {
                // this.alertToRelogin();
            }
        });
    }
    gotoDataDasarForm(item) {
        console.log(item);
        this.NavController.navigateForward(['/laporan/datadasardesaform', item]);
    }
    gotoInformasiDasarDesa() {
        this.NavController.navigateForward(['/laporan/informasidesa', []]);
    }
    goBack() {
        this.NavController.navigateBack(['/laporan/groups'], { replaceUrl: true });
    }
};
DatadasardesaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DatadasardesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datadasardesa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./datadasardesa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/datadasardesa/datadasardesa.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./datadasardesa.page.scss */ "./src/app/pages/laporan/datadasardesa/datadasardesa.page.scss")).default]
    })
], DatadasardesaPage);



/***/ }),

/***/ "./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #container {\n  padding: 10px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 47%;\n  transform: translateY(-50%);\n}\n\nion-content ion-item {\n  border: 1px solid #eaeaea;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9kYXRhZGFzYXJkZXNhZm9ybS9kYXRhZGFzYXJkZXNhZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFTSTtFQUNJLGFBQUE7RUFHQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBUlI7O0FBV0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUFjQTtFQUNJLG9DQUFBO0FBWEo7O0FBZUk7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FBWlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvcmFuL2RhdGFkYXNhcmRlc2Fmb3JtL2RhdGFkYXNhcmRlc2Fmb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcblxyXG4gICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNDclO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5sYWJlbC10aXRsZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.ts ***!
  \***************************************************************************/
/*! exports provided: DatadasardesaformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatadasardesaformPage", function() { return DatadasardesaformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let DatadasardesaformPage = class DatadasardesaformPage {
    constructor(NavController, route, toastController, loadingController, apiService) {
        this.NavController = NavController;
        this.route = route;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.apiService = apiService;
        this.listQuestions = [];
        this.params = this.route.snapshot.params;
        console.log(this.params);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getListAPBDesDetail();
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Mengirim data...',
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
    getListAPBDesDetail() {
        let geo_id = localStorage.getItem('geo_id');
        this.subscribe = this.apiService.get('v2/apbdes_details?geo_id=' + geo_id + '&apbdesa_head_id=' + this.params.id, {}).subscribe(data => {
            console.log(data);
            this.listQuestions = data;
        }, error => {
            if (error.status == 401) {
                // this.alertToRelogin();
            }
        });
    }
    kirimDataDasar() {
        this.presentLoading();
        let geo_id = localStorage.getItem('geo_id');
        let paramPost = {
            geo_id: geo_id,
            apbdesa_head_id: this.params.id,
            listQuestions: JSON.stringify(this.listQuestions)
        };
        this.subscribe = this.apiService.post('v2/apbdes_details', paramPost).subscribe(data => {
            // this.getListItems();
            setTimeout(() => {
                this.presentToast('success', 'Success', 'Data tersimpan');
                // this.NavController.navigateBack(['/basicdata/registrasidusun'], { replaceUrl: true });
            }, 2000);
        }, error => {
            setTimeout(() => {
                this.presentToast('danger', 'Error', 'Data tidak tersimpan');
            }, 2000);
        });
    }
    formatRupiah(angka) {
        if (angka != null && angka != '') {
            var number_string = parseFloat(angka).toString(), split = number_string.split(','), sisa = split[0].length % 3, rupiah = split[0].substr(0, sisa), ribuan = split[0].substr(sisa).match(/\d{3}/gi);
            // tambahkan titik jika yang di input sudah menjadi angka ribuan
            if (ribuan) {
                let separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
            return rupiah;
        }
    }
    goBack() {
        this.NavController.navigateBack(['/laporan/datadasardesa'], { replaceUrl: true });
    }
};
DatadasardesaformPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
DatadasardesaformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datadasardesaform',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./datadasardesaform.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./datadasardesaform.page.scss */ "./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.scss")).default]
    })
], DatadasardesaformPage);



/***/ }),

/***/ "./src/app/pages/laporan/formlaporan/formlaporan.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/laporan/formlaporan/formlaporan.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #container {\n  padding: 10px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 47%;\n  transform: translateY(-50%);\n}\n\nion-content ion-item {\n  border: 1px solid #eaeaea;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9mb3JtbGFwb3Jhbi9mb3JtbGFwb3Jhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFTRTtFQUNFLGFBQUE7RUFHQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBUko7O0FBV0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFjQTtFQUNFLG9DQUFBO0FBWEY7O0FBZUU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvcmFuL2Zvcm1sYXBvcmFuL2Zvcm1sYXBvcmFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA0NyU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/laporan/formlaporan/formlaporan.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/laporan/formlaporan/formlaporan.page.ts ***!
  \***************************************************************/
/*! exports provided: FormlaporanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlaporanPage", function() { return FormlaporanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_modals_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_modals/input-number/input-number.component */ "./src/app/_modals/input-number/input-number.component.ts");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment/locale/id */ "./node_modules/moment/locale/id.js");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);




// import { resolve } from 'dns';






let FormlaporanPage = class FormlaporanPage {
    constructor(route, NavController, apiService, toastController, alertController, loadingController, camera, imagePicker, modalController) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.modalController = modalController;
        this.title = '';
        this.subtitle = '';
        this.subtitle_2 = '';
        this.subtitle_3 = '';
        this.listQuestion = [];
        this.currentQuestion = {};
        this.showCurrentQuestion = false;
        this.question_total = 0;
        this.question_current = 0;
        this.number_of_back = 0;
        this.number_of_forward = 0;
        this.showButtonBack = false;
        this.showButtonSend = false;
        this.singleAnswer = '';
        this.params = this.route.snapshot.params;
        console.log('param', this.params);
        this.TypeForm = this.params.Type;
        this.title = this.params.Type;
        ;
        this.subtitle = this.params.label;
        this.subtitle_2 = this.params.range;
        this.subtitle_3 = this.params.target_name;
        localStorage.setItem('multiAnswer', JSON.stringify([]));
        localStorage.setItem('listBack', JSON.stringify([]));
        // this.ngitung();
    }
    ngOnInit() {
        this.getQuestion();
    }
    ngitung() { }
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
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__["InputNumberComponent"],
                cssClass: 'my-custom-modal-css',
                mode: 'ios',
                showBackdrop: false,
                componentProps: []
            });
            return yield modal.present();
        });
    }
    temporarySave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Warning !',
                message: 'Simpan Laporan Sementara dapat hilang jika Anda membersihkan data Aplikasi ini!',
                mode: "ios",
                backdropDismiss: true,
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel'
                    },
                    {
                        text: 'Simpan',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.presentLoading('Menyimpan laporan...');
                            yield this.beforeSendAnswer(true);
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    getQuestion() {
        this.listQuestion = [];
        let glue = this.params.glue;
        let ans_id = this.params.ans_id;
        this.subscribe = this.apiService.get('v2/user_area_questionnaire?id_questionnaire=' + this.params.id_questionnaire + '&glue=' + glue + '&ans_id=' + ans_id, {}).subscribe(data => {
            // this.catecories = data.List;
            // console.log(data);
            if (data.user_area_report.length > 0) {
                let q = data.user_area_report[0];
                let geo_id = localStorage.getItem('geo_id');
                localStorage.setItem(this.params.id_questionnaire + '_drafQuestions_' + geo_id, JSON.stringify(q.Question));
                this.listQuestion = q.Question;
                this.question_total = this.listQuestion.length;
                this.getNextQuestion(0, 'next');
                // console.log(this.listQuestion);
            }
        }, error => {
            let geo_id = localStorage.getItem('geo_id');
            let drafQuestions = localStorage.getItem(this.params.id_questionnaire + '_drafQuestions_' + geo_id);
            if (drafQuestions != null && drafQuestions != '') {
                this.listQuestion = JSON.parse(drafQuestions);
                this.question_total = this.listQuestion.length;
                this.getNextQuestion(0, 'next');
            }
        });
    }
    getNextQuestion(indexNumber, action) {
        if (action == 'back') {
            // last id back
            let listBack = localStorage.getItem('listBack');
            listBack = JSON.parse(listBack);
            let lastBack = listBack[listBack.length - 1];
            for (let q = 0; q < this.listQuestion.length; q++) {
                const element = this.listQuestion[q];
                if (element['id'] == lastBack) {
                    indexNumber = q;
                }
            }
            // new list Back
            let newListBack = [];
            for (let index = 0; index < listBack.length; index++) {
                const element = listBack[index];
                if (element != lastBack) {
                    newListBack.push(element);
                }
            }
            localStorage.setItem('listBack', JSON.stringify(newListBack));
            // console.log('indexNumber', indexNumber);
            if (indexNumber > 0) {
                this.showButtonBack = true;
            }
            else {
                this.showButtonBack = false;
            }
            this.number_of_back = indexNumber - 1;
            // Untuk indikasi nomer sekarang
            this.question_current = indexNumber + 1;
            this.number_of_forward = this.question_current;
            // Untuk menampilkan pertanyaan sekarang
            this.currentQuestion = this.listQuestion[indexNumber];
            // Untuk memberi default isi
            this.setDrafFillAnswer(indexNumber);
            // set re-fill draft
            this.showCurrentQuestion = true;
        }
        else {
            if (Object.keys(this.currentQuestion).length !== 0) {
                // console.log('currentQuestion', this.currentQuestion);
                let dataListBack = [];
                let listBack = localStorage.getItem('listBack');
                dataListBack = JSON.parse(listBack);
                dataListBack.push(this.currentQuestion['id']);
                localStorage.setItem('listBack', JSON.stringify(dataListBack));
            }
            if (indexNumber == this.listQuestion.length) {
                let drafAns = this.drafAnswere(indexNumber - 1);
                if (drafAns.result) {
                    this.showButtonSend = true;
                }
                else {
                    this.presentToast('warning', 'Warning', 'Wajib diisi');
                }
            }
            else {
                this.showButtonSend = false;
                // simpan jawaban sementara
                let cahngeQuestion = true;
                let indexNumberSaveDraf = (action == 'next') ? indexNumber - 1 : indexNumber + 1;
                let go_to_id = '';
                let back_to_id = '';
                if (indexNumberSaveDraf > -1) {
                    let drafAns = this.drafAnswere(indexNumberSaveDraf);
                    console.log('drafAns', drafAns);
                    cahngeQuestion = drafAns.result;
                    go_to_id = drafAns.go_to_id;
                    back_to_id = drafAns.back_to_id;
                }
                if (cahngeQuestion) {
                    if (indexNumber > 0) {
                        this.showButtonBack = true;
                    }
                    else {
                        this.showButtonBack = false;
                    }
                    if (go_to_id != '') {
                        if (parseInt(go_to_id) == 0) {
                            this.showButtonSend = true;
                        }
                        else {
                            for (let q = 0; q < this.listQuestion.length; q++) {
                                const element = this.listQuestion[q];
                                if (element.id_questionnaire_detail == go_to_id) {
                                    indexNumber = q;
                                }
                            }
                        }
                    }
                    // set back id
                    if (back_to_id != '') {
                        for (let q = 0; q < this.listQuestion.length; q++) {
                            const element = this.listQuestion[q];
                            if (element.id_questionnaire_detail == back_to_id) {
                                this.number_of_back = q;
                            }
                        }
                    }
                    // console.log(this.number_of_back);
                    // Untuk indikasi nomer sekarang
                    this.question_current = (parseInt(go_to_id) == 0) ? this.question_total : indexNumber + 1;
                    this.number_of_forward = this.question_current;
                    // Untuk menampilkan pertanyaan sekarang
                    this.currentQuestion = this.listQuestion[indexNumber];
                    // Untuk memberi default isi
                    this.setDrafFillAnswer(indexNumber);
                    // set re-fill draft
                    this.showCurrentQuestion = true;
                }
                else {
                    this.presentToast('warning', 'Warning', 'Wajib diisi');
                }
            }
        }
    }
    setDrafFillAnswer(indexNumber) {
        const Questions = this.listQuestion[indexNumber];
        let id_questionnaire = this.params.id_questionnaire;
        let glue = this.params.glue;
        let geo_id = localStorage.getItem('geo_id');
        let temporarySave = localStorage.getItem(glue + '_' + geo_id);
        let locationLocalStorage = (temporarySave != null && temporarySave != '') ? glue + '_' + geo_id : id_questionnaire + '_drafAnswer_' + geo_id;
        let id_question = Questions.id;
        let draf = localStorage.getItem(locationLocalStorage);
        if (draf != null && draf != '') {
            let dataDraf = JSON.parse(draf);
            for (let i = 0; i < dataDraf.length; i++) {
                const element = dataDraf[i];
                if (element.id_question == id_question) {
                    if (element.answer.length > 0) {
                        if (Questions.id_question_type != 4) {
                            if (Questions.id_question_type == 5) {
                                this.singleAnswer = element.answer[0].essay_number;
                            }
                            else if (Questions.id_question_type == 1) {
                                this.singleAnswer = element.answer[0].essay_text;
                            }
                            else if (Questions.id_question_type == 6) {
                                this.singleAnswer = element.answer[0].essay_file;
                            }
                            else if (Questions.id_question_type == 7) {
                                this.singleAnswer = element.answer[0].essay_date;
                            }
                            else {
                                this.singleAnswer = element.answer[0].id_question_option;
                            }
                        }
                        else {
                            let newArrFromDraf = [];
                            for (let ck = 0; ck < element.answer.length; ck++) {
                                const c_elmt = element.answer[ck];
                                newArrFromDraf.push(c_elmt.id_question_option);
                            }
                            localStorage.setItem('multiAnswer', JSON.stringify(newArrFromDraf));
                            // set
                            for (let q = 0; q < Questions.Options.length; q++) {
                                const q_elmt = Questions.Options[q];
                                Questions.Options[q].isChecked = false;
                                for (let ck = 0; ck < element.answer.length; ck++) {
                                    const c_elmt = element.answer[ck];
                                    if (q_elmt.id == c_elmt.id_question_option) {
                                        Questions.Options[q].isChecked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    drafAnswere(indexNumber) {
        const Questions = this.listQuestion[indexNumber];
        let id_question = Questions.id;
        let id_question_option = '';
        let essay_text = '';
        let essay_file = '';
        let essay_date = '';
        let essay_number = '';
        let result = true;
        let answer = [];
        let go_to_id = '';
        let back_to_id = Questions.id_questionnaire_detail;
        if (Questions.id_question_type != 4) {
            console.log('this.singleAnswer', this.singleAnswer);
            console.log('Questions', Questions);
            if (this.singleAnswer != '' || parseInt(this.singleAnswer) >= 0) {
                // essay number
                if (Questions.id_question_type == 5) {
                    go_to_id = (Questions.go_to_id != null && Questions.go_to_id != '') ? Questions.go_to_id : '';
                    essay_number = this.singleAnswer;
                }
                // essay text
                else if (Questions.id_question_type == 1) {
                    go_to_id = (Questions.go_to_id != null && Questions.go_to_id != '') ? Questions.go_to_id : '';
                    essay_text = this.singleAnswer;
                }
                // essay file
                else if (Questions.id_question_type == 6) {
                    go_to_id = (Questions.go_to_id != null && Questions.go_to_id != '') ? Questions.go_to_id : '';
                    essay_file = this.singleAnswer;
                }
                // essay file
                else if (Questions.id_question_type == 7) {
                    go_to_id = (Questions.go_to_id != null && Questions.go_to_id != '') ? Questions.go_to_id : '';
                    essay_date = this.formatingToInsertDB(this.singleAnswer);
                }
                else {
                    id_question_option = this.singleAnswer;
                    for (let q = 0; q < Questions.Options.length; q++) {
                        const element = Questions.Options[q];
                        if (element.id == id_question_option) {
                            go_to_id = (element.go_to_id != null && element.go_to_id != '')
                                ? element.go_to_id : '';
                        }
                    }
                }
                answer.push({
                    id_question_option: id_question_option,
                    essay_text: essay_text,
                    essay_file: essay_file,
                    essay_date: essay_date,
                    essay_number: essay_number
                });
                this.singleAnswer = '';
            }
            else {
                console.log('err sini');
                result = false;
            }
        }
        else {
            let multiAnswer = localStorage.getItem('multiAnswer');
            multiAnswer = JSON.parse(multiAnswer);
            // Multi answer
            if (multiAnswer.length > 0) {
                for (let m = 0; m < multiAnswer.length; m++) {
                    const element = multiAnswer[m];
                    answer.push({
                        id_question_option: element,
                        essay_text: essay_text,
                        essay_number: essay_number,
                        essay_file: essay_file,
                        essay_date: essay_date
                    });
                }
                localStorage.setItem('multiAnswer', JSON.stringify([]));
            }
            else {
                result = false;
            }
        }
        console.log('result', result);
        if (result) {
            let arrAnswere = {
                id_question: id_question,
                id_question_type: Questions.id_question_type,
                answer: answer
            };
            // save in localstorage
            let id_questionnaire = this.params.id_questionnaire;
            let glue = this.params.glue;
            let geo_id = localStorage.getItem('geo_id');
            let temporarySave = localStorage.getItem(glue + '_' + geo_id);
            let locationLocalStorage = (temporarySave != null && temporarySave != '') ? glue : id_questionnaire + '_drafAnswer_' + geo_id;
            let draf = localStorage.getItem(locationLocalStorage);
            let newDataDraf = [];
            if (draf != null && draf != '') {
                let dataDraf = JSON.parse(draf);
                for (let i = 0; i < dataDraf.length; i++) {
                    const element = dataDraf[i];
                    if (element.id_question != id_question) {
                        newDataDraf.push(element);
                    }
                }
            }
            newDataDraf.push(arrAnswere);
            localStorage.setItem(locationLocalStorage, JSON.stringify(newDataDraf));
        }
        let feedback = {
            result: result,
            go_to_id: go_to_id,
            back_to_id: back_to_id
        };
        return feedback;
    }
    sendAnswer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading('Mengirim laporan...');
            yield this.beforeSendAnswer(false);
            let dataAnswers = yield this.sendToServer();
            let params = {
                ans_id: this.params.ans_id,
                glue: this.params.glue,
                user_area_id: this.params.user_area_id,
                answer: JSON.stringify(dataAnswers)
            };
            this.subscribe = this.apiService.post('v2/user_area_questionnaire', params).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let geo_id = localStorage.getItem('geo_id');
                let temporarySave = localStorage.getItem('temporarySave_' + geo_id);
                temporarySave = JSON.parse(temporarySave);
                let newTemp = [];
                for (let index = 0; index < temporarySave.length; index++) {
                    const element = temporarySave[index];
                    if (element != this.params.glue) {
                        newTemp.push(element);
                    }
                }
                localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp));
                // console.log(data);
                setTimeout(() => {
                    this.presentToast('success', 'Sukses', 'Data tersimpan');
                    this.goBack(1);
                }, 2000);
            }), error => {
                // this.presentAlertConfirmError();
                console.log(error);
                this.presentToast('error', 'Gagal', 'Tidak tersimpan');
            });
        });
    }
    sendToServer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let glue = this.params.glue;
                let id_questionnaire = this.params.id_questionnaire;
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
                                ans_id: this.params.ans_id,
                                glue: glue,
                                user_area_id: this.params.user_area_id,
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
    updateQuantity2(qp) {
        this.singleAnswer = qp / 100;
        this.singleAnswer = qp + '%';
    }
    updateQuantity(q) {
        let angka = q.toString().replace(/\./g, '');
        // console.log(angka);
        // console.log(angka);
        var number_string = parseFloat(angka).toString(), split = number_string.split(','), sisa = split[0].length % 3, rupiah = split[0].substr(0, sisa), ribuan = split[0].substr(sisa).match(/\d{3}/gi);
        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        this.singleAnswer = rupiah;
    }
    formatRupiah(angka) {
        if (angka != null && angka != '') {
            var number_string = parseFloat(angka).toString(), split = number_string.split(','), sisa = split[0].length % 3, rupiah = split[0].substr(0, sisa), ribuan = split[0].substr(sisa).match(/\d{3}/gi);
            // tambahkan titik jika yang di input sudah menjadi angka ribuan
            if (ribuan) {
                let separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
            return rupiah;
        }
    }
    numberOnlyValidation(event) {
        const pattern = /[0-9.,]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
    beforeSendAnswer(back) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    let glue = this.params.glue;
                    let geo_id = localStorage.getItem('geo_id');
                    let temp = localStorage.getItem('temporarySave_' + geo_id);
                    let NewTemp = [];
                    if (temp != null && temp != '') {
                        let dataTemp = JSON.parse(temp);
                        for (let i = 0; i < dataTemp.length; i++) {
                            const element = dataTemp[i];
                            if (element != glue) {
                                NewTemp.push(element);
                            }
                        }
                    }
                    NewTemp.push(glue);
                    localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(NewTemp));
                    let id_questionnaire = this.params.id_questionnaire;
                    let temporarySave = localStorage.getItem(glue + '_' + geo_id);
                    let locationLocalStorage = (temporarySave != null && temporarySave != '')
                        ? glue : id_questionnaire + '_drafAnswer_' + geo_id;
                    let draf = localStorage.getItem(locationLocalStorage);
                    localStorage.setItem(glue + '_' + geo_id, draf);
                    if (back) {
                        setTimeout(() => {
                            this.presentToast('success', 'Sukses', 'Data tersimpan');
                            this.goBack(1);
                        }, 2000);
                    }
                    resolve('');
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    selectSize(event) {
        let valChange = event.detail.value;
        let multiAnswer = localStorage.getItem('multiAnswer');
        multiAnswer = JSON.parse(multiAnswer);
        let newArr = [];
        if (multiAnswer.length > 0) {
            for (let i = 0; i < multiAnswer.length; i++) {
                const element = multiAnswer[i];
                if (element != valChange) {
                    newArr.push(element);
                }
            }
        }
        if (event.detail.checked) {
            newArr.push(valChange);
        }
        localStorage.setItem('multiAnswer', JSON.stringify(newArr));
    }
    radioGroupChange(event) {
        this.singleAnswer = event.detail.value;
    }
    segmentChanged(event) {
        this.singleAnswer = event.detail.value;
    }
    getImagesFromGalery() {
        let options = {
            // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
            // selection of a single image, the plugin will return it.
            maximumImagesCount: 1,
            // max width and height to allow the images to be.  Will keep aspect
            // ratio no matter what.  So if both are 800, the returned image
            // will be at most 800 pixels wide and 800 pixels tall.  If the width is
            // 800 and height 0 the image will be 800 pixels wide if the source
            // is at least that wide.
            width: 550,
            //height: 200,
            // quality of resized image, defaults to 100
            quality: 0,
            // output type, defaults to FILE_URIs.
            // available options are 
            // window.imagePicker.OutputType.FILE_URI (0) or 
            // window.imagePicker.OutputType.BASE64_STRING (1)
            outputType: 1
        };
        // this.imageResponse = [];
        this.imagePicker.getPictures(options).then((results) => {
            console.log(results);
            // for (var i = 0; i < results.length; i++) {
            //   this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
            //   console.log('res : ', results[i])
            // }
            let base64Image = 'data:image/jpeg;base64,' + results[0];
            this.singleAnswer = base64Image;
            let file = this.dataURItoBlob(base64Image);
            console.log(file);
            // this.viewImage = 
        }, (err) => {
            alert(err);
        });
    }
    getImagesFromCamera() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 720,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.singleAnswer = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
    dataURItoBlob(dataURI) {
        let byteString = atob(dataURI.split(',')[1]);
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        let bb = new Blob([ab], { type: mimeString });
        return bb;
    }
    formatingDate(myDate) {
        let res = new Date(myDate).toISOString();
        return res;
    }
    formatingToInsertDB(myDate) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(myDate).format('YYYY-MM-DD');
    }
    goBack(refresh) {
        if (this.params.page_from == 'selectdusun') {
            let gotoSelectDusun = localStorage.getItem('gotoSelectDusun');
            let newParams = JSON.parse(gotoSelectDusun);
            this.NavController.navigateBack(['/laporan/selectdusun', newParams], { replaceUrl: true });
        }
        else if (this.params.page_from == 'selectperiode') {
            let gotoSelectDusun = localStorage.getItem('gotoselectperiode');
            let newParams = JSON.parse(gotoSelectDusun);
            newParams['refresh'] = refresh;
            this.NavController.navigateBack(['/laporan/selectperiode', newParams], { replaceUrl: true });
        }
        else if (this.params.page_from == 'selectdusunonly') {
            let gotoselectdusunonly = localStorage.getItem('gotoselectdusunonly');
            let newParams = JSON.parse(gotoselectdusunonly);
            newParams['refresh'] = refresh;
            this.NavController.navigateBack(['/laporan/selectdusunonly', newParams], { replaceUrl: true });
        }
        else {
            this.NavController.navigateBack(['/home/temporaryreport', {}], { replaceUrl: true });
        }
    }
};
FormlaporanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
FormlaporanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formlaporan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formlaporan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/formlaporan/formlaporan.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formlaporan.page.scss */ "./src/app/pages/laporan/formlaporan/formlaporan.page.scss")).default]
    })
], FormlaporanPage);



/***/ }),

/***/ "./src/app/pages/laporan/groups/groups.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/laporan/groups/groups.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content #list-group .range-group {\n  color: #fffdfd;\n  background: #92949c9e;\n  font-size: 12px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 3px;\n}\n\nion-content #list-group p {\n  color: #e6e6e6;\n}\n\nion-content #list-group .type-active {\n  color: #576c7d;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9ncm91cHMvZ3JvdXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLHFCQUFBO0VBQ0EsY0FBQTtBQURSOztBQVVJO0VBQ0ksa0JBQUE7QUFQUjs7QUFZUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFWWjs7QUFhUTtFQUNJLGNBQUE7QUFYWjs7QUFjUTtFQUNJLGNBQUE7QUFaWjs7QUFxQkE7RUFDSSxvQ0FBQTtBQWxCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhcG9yYW4vZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMzBweDtcclxuXHJcbiAgICAjbGlzdExhcG9yYW4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICNsaXN0LWdyb3VwIHtcclxuXHJcbiAgICAgICAgLnJhbmdlLWdyb3VwIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZkZmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5Mjk0OWM5ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlNmU2ZTY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHlwZS1hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU3NmM3ZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/laporan/groups/groups.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/laporan/groups/groups.page.ts ***!
  \*****************************************************/
/*! exports provided: GroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPage", function() { return GroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");






let GroupsPage = class GroupsPage {
    constructor(route, router, NavController, apiService, alertController, actionSheetController) {
        this.route = route;
        this.router = router;
        this.NavController = NavController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.lists = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getListActiveGroup();
    }
    presentAlertNoQuestion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Info !',
                message: 'Belum ada pertanyaan yang diterbitkan',
                mode: "ios",
                buttons: [
                    {
                        text: 'Tutup',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentActionSheetSelectPeriode(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item.Q_Mingguan.length == 0 &&
                item.Q_Bulanan.length == 0 &&
                item.Q_Triwulan.length == 0) {
                this.presentAlertNoQuestion();
            }
            else {
                let buttons = [];
                if (item.Q_Mingguan.length > 0) {
                    buttons.push({
                        text: 'Mingguan',
                        handler: () => {
                            this.gotoSelectPeriode(item, 'Mingguan');
                        }
                    });
                }
                if (item.Q_Bulanan.length > 0) {
                    buttons.push({
                        text: 'Bulanan',
                        handler: () => {
                            this.gotoSelectPeriode(item, 'Bulanan');
                        }
                    });
                }
                if (item.Q_Triwulan.length > 0) {
                    buttons.push({
                        text: 'Triwulan',
                        handler: () => {
                            this.gotoSelectPeriode(item, 'Triwulan');
                        }
                    });
                }
                buttons.push({
                    text: 'Tutup',
                    role: 'cancel',
                    handler: () => {
                        // console.log('Cancel clicked');
                    }
                });
                console.log('buttons', buttons);
                const actionSheet = yield this.actionSheetController.create({
                    header: 'Pilih Periode',
                    cssClass: 'my-custom-class',
                    mode: "ios",
                    buttons: buttons
                });
                yield actionSheet.present();
            }
        });
    }
    presentAlertSelectTarget(id_questionnaire_desa, id_questionnaire_dusun) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Target Laporan',
                mode: "ios",
                message: 'Pilih target pengisian',
                buttons: [
                    {
                        text: 'Desa',
                        cssClass: 'specialClass',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                let dataParam = yield this.getPeriode(id_questionnaire_desa);
                                this.NavController.navigateForward(['/laporan/selectperiode', dataParam[0]]);
                            }
                            catch (error) {
                                if (error.status == 401) {
                                    this.alertToRelogin();
                                }
                            }
                        })
                    }, {
                        text: 'Dusun',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                let dataParam = yield this.getPeriode(id_questionnaire_dusun);
                                this.NavController.navigateForward(['/laporan/selectperiode', dataParam[0]]);
                            }
                            catch (error) {
                                if (error.status == 401) {
                                    this.alertToRelogin();
                                }
                            }
                        })
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
    getListActiveGroup() {
        this.subscribe = this.apiService.get('v2/report_active_group', {}).subscribe(data => {
            this.lists = data;
            console.log(this.lists);
        }, error => {
            if (error.status == 401) {
                this.alertToRelogin();
            }
        });
    }
    gotoSelectPeriode(item, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item['Q_' + type].length > 1) {
                let id_questionnaire_desa = '';
                let id_questionnaire_dusun = '';
                for (let index = 0; index < item['Q_' + type].length; index++) {
                    const element = item['Q_' + type][index];
                    if (element.target == 0) {
                        id_questionnaire_dusun = element.id;
                    }
                    else if (element.target == 1) {
                        id_questionnaire_desa = element.id;
                    }
                }
                this.presentAlertSelectTarget(id_questionnaire_desa, id_questionnaire_dusun);
            }
            else {
                let id_questionnaire = item['Q_' + type][0].id;
                try {
                    let dataParam = yield this.getPeriode(id_questionnaire);
                    this.NavController.navigateForward(['/laporan/selectperiode', dataParam[0]]);
                }
                catch (error) {
                    if (error.status == 401) {
                        this.alertToRelogin();
                    }
                }
            }
        });
    }
    getPeriode(id_questionnaire) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, rejected) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    this.subscribe = this.apiService.get('v2/report_show_periode?id_questionnaire=' + id_questionnaire, {}).subscribe(data => {
                        resolve(data);
                    }, error => {
                        rejected(error);
                    });
                }
                catch (err) {
                    rejected(err);
                }
            }));
        });
    }
    getMonthName(number) {
        return moment__WEBPACK_IMPORTED_MODULE_4__().month((parseInt(number) - 1)).format('MMMM');
    }
    gotoDataDasar() {
        // this.NavController.navigateBack(['/home'], { replaceUrl: true });
        this.NavController.navigateForward(['/laporan/datadasardesa', []]);
    }
    goBack() {
        this.NavController.navigateBack(['/home'], { replaceUrl: true });
    }
};
GroupsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
GroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./groups.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/groups/groups.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./groups.page.scss */ "./src/app/pages/laporan/groups/groups.page.scss")).default]
    })
], GroupsPage);



/***/ }),

/***/ "./src/app/pages/laporan/informasidesa/informasidesa.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/laporan/informasidesa/informasidesa.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #container {\n  padding: 10px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 47%;\n  transform: translateY(-50%);\n}\n\nion-content ion-item {\n  border: 1px solid #eaeaea;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9pbmZvcm1hc2lkZXNhL2luZm9ybWFzaWRlc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBU0k7RUFDSSxhQUFBO0VBR0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQVJSOztBQVdJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVFI7O0FBY0E7RUFDSSxvQ0FBQTtBQVhKOztBQWVJO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtBQVpSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9pbmZvcm1hc2lkZXNhL2luZm9ybWFzaWRlc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuXHJcbiAgICAjY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA0NyU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/laporan/informasidesa/informasidesa.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/laporan/informasidesa/informasidesa.page.ts ***!
  \*******************************************************************/
/*! exports provided: InformasidesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformasidesaPage", function() { return InformasidesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");




let InformasidesaPage = class InformasidesaPage {
    constructor(NavController, toastController, loadingController, apiService) {
        this.NavController = NavController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.apiService = apiService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getBasicData();
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Mengirim data...',
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
    getBasicData() {
        let geo_id = localStorage.getItem('geo_id');
        this.subscribe = this.apiService.get('v2/basic_data?geo_id=' + geo_id, {}).subscribe(data => {
            console.log(data);
            if (data.length > 0) {
                let d = data[0];
                this.rt = d.rt;
                this.rw = d.rw;
                this.posko_desa = d.posko_desa;
                this.phone_number = d.phone_number;
                this.telephone = d.telephone;
            }
        }, error => {
            if (error.status == 401) {
                // this.alertToRelogin();
            }
        });
    }
    kirimDataDasar() {
        this.presentLoading();
        let geo_id = localStorage.getItem('geo_id');
        let paramPost = {
            geo_id: geo_id,
            rt: this.rt,
            rw: this.rw,
            posko_desa: this.posko_desa,
            phone_number: this.phone_number,
            telephone: this.telephone
        };
        this.subscribe = this.apiService.post('v2/basic_data', paramPost).subscribe(data => {
            // this.getListItems();
            setTimeout(() => {
                this.presentToast('success', 'Success', 'Data tersimpan');
                // this.NavController.navigateBack(['/basicdata/registrasidusun'], { replaceUrl: true });
            }, 2000);
        }, error => {
            setTimeout(() => {
                this.presentToast('danger', 'Error', 'Data tidak tersimpan');
            }, 2000);
        });
    }
    goBack() {
        this.NavController.navigateBack(['/laporan/datadasardesa'], { replaceUrl: true });
    }
};
InformasidesaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
InformasidesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informasidesa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./informasidesa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/informasidesa/informasidesa.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./informasidesa.page.scss */ "./src/app/pages/laporan/informasidesa/informasidesa.page.scss")).default]
    })
], InformasidesaPage);



/***/ }),

/***/ "./src/app/pages/laporan/laporan-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/laporan/laporan-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LaporanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporanPageRoutingModule", function() { return LaporanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _formlaporan_formlaporan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formlaporan/formlaporan.page */ "./src/app/pages/laporan/formlaporan/formlaporan.page.ts");
/* harmony import */ var _selecttime_selecttime_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selecttime/selecttime.page */ "./src/app/pages/laporan/selecttime/selecttime.page.ts");
/* harmony import */ var _selectdusun_selectdusun_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectdusun/selectdusun.page */ "./src/app/pages/laporan/selectdusun/selectdusun.page.ts");
/* harmony import */ var _listlaporan_listlaporan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listlaporan/listlaporan.page */ "./src/app/pages/laporan/listlaporan/listlaporan.page.ts");
/* harmony import */ var _viewlaporan_viewlaporan_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewlaporan/viewlaporan.page */ "./src/app/pages/laporan/viewlaporan/viewlaporan.page.ts");
/* harmony import */ var _groups_groups_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/groups.page */ "./src/app/pages/laporan/groups/groups.page.ts");
/* harmony import */ var _selectperiode_selectperiode_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectperiode/selectperiode.page */ "./src/app/pages/laporan/selectperiode/selectperiode.page.ts");
/* harmony import */ var _selectdusunonly_selectdusunonly_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selectdusunonly/selectdusunonly.page */ "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.ts");
/* harmony import */ var _datadasardesa_datadasardesa_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datadasardesa/datadasardesa.page */ "./src/app/pages/laporan/datadasardesa/datadasardesa.page.ts");
/* harmony import */ var _datadasardesaform_datadasardesaform_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datadasardesaform/datadasardesaform.page */ "./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.ts");
/* harmony import */ var _informasidesa_informasidesa_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./informasidesa/informasidesa.page */ "./src/app/pages/laporan/informasidesa/informasidesa.page.ts");














const routes = [
    {
        path: 'formlaporan',
        component: _formlaporan_formlaporan_page__WEBPACK_IMPORTED_MODULE_3__["FormlaporanPage"]
    },
    {
        path: 'selecttime',
        component: _selecttime_selecttime_page__WEBPACK_IMPORTED_MODULE_4__["SelecttimePage"]
    },
    {
        path: 'selectdusun',
        component: _selectdusun_selectdusun_page__WEBPACK_IMPORTED_MODULE_5__["SelectdusunPage"]
    },
    {
        path: 'listlaporan',
        component: _listlaporan_listlaporan_page__WEBPACK_IMPORTED_MODULE_6__["ListlaporanPage"]
    },
    {
        path: 'viewlaporan',
        component: _viewlaporan_viewlaporan_page__WEBPACK_IMPORTED_MODULE_7__["ViewlaporanPage"]
    },
    {
        path: 'groups',
        component: _groups_groups_page__WEBPACK_IMPORTED_MODULE_8__["GroupsPage"]
    },
    {
        path: 'selectperiode',
        component: _selectperiode_selectperiode_page__WEBPACK_IMPORTED_MODULE_9__["SelectperiodePage"]
    },
    {
        path: 'selectdusunonly',
        component: _selectdusunonly_selectdusunonly_page__WEBPACK_IMPORTED_MODULE_10__["SelectdusunonlyPage"]
    },
    {
        path: 'datadasardesa',
        component: _datadasardesa_datadasardesa_page__WEBPACK_IMPORTED_MODULE_11__["DatadasardesaPage"]
    },
    {
        path: 'datadasardesaform',
        component: _datadasardesaform_datadasardesaform_page__WEBPACK_IMPORTED_MODULE_12__["DatadasardesaformPage"]
    },
    {
        path: 'informasidesa',
        component: _informasidesa_informasidesa_page__WEBPACK_IMPORTED_MODULE_13__["InformasidesaPage"]
    }
];
let LaporanPageRoutingModule = class LaporanPageRoutingModule {
};
LaporanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LaporanPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/laporan/laporan.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/laporan/laporan.module.ts ***!
  \*************************************************/
/*! exports provided: LaporanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporanPageModule", function() { return LaporanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _laporan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./laporan-routing.module */ "./src/app/pages/laporan/laporan-routing.module.ts");
/* harmony import */ var _formlaporan_formlaporan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formlaporan/formlaporan.page */ "./src/app/pages/laporan/formlaporan/formlaporan.page.ts");
/* harmony import */ var _selecttime_selecttime_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selecttime/selecttime.page */ "./src/app/pages/laporan/selecttime/selecttime.page.ts");
/* harmony import */ var _selectdusun_selectdusun_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectdusun/selectdusun.page */ "./src/app/pages/laporan/selectdusun/selectdusun.page.ts");
/* harmony import */ var _listlaporan_listlaporan_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listlaporan/listlaporan.page */ "./src/app/pages/laporan/listlaporan/listlaporan.page.ts");
/* harmony import */ var _viewlaporan_viewlaporan_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewlaporan/viewlaporan.page */ "./src/app/pages/laporan/viewlaporan/viewlaporan.page.ts");
/* harmony import */ var _groups_groups_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./groups/groups.page */ "./src/app/pages/laporan/groups/groups.page.ts");
/* harmony import */ var _selectperiode_selectperiode_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectperiode/selectperiode.page */ "./src/app/pages/laporan/selectperiode/selectperiode.page.ts");
/* harmony import */ var _selectdusunonly_selectdusunonly_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selectdusunonly/selectdusunonly.page */ "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.ts");
/* harmony import */ var _datadasardesa_datadasardesa_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./datadasardesa/datadasardesa.page */ "./src/app/pages/laporan/datadasardesa/datadasardesa.page.ts");
/* harmony import */ var _datadasardesaform_datadasardesaform_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./datadasardesaform/datadasardesaform.page */ "./src/app/pages/laporan/datadasardesaform/datadasardesaform.page.ts");
/* harmony import */ var _informasidesa_informasidesa_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./informasidesa/informasidesa.page */ "./src/app/pages/laporan/informasidesa/informasidesa.page.ts");

















let LaporanPageModule = class LaporanPageModule {
};
LaporanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _laporan_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaporanPageRoutingModule"]
        ],
        declarations: [_formlaporan_formlaporan_page__WEBPACK_IMPORTED_MODULE_6__["FormlaporanPage"],
            _selecttime_selecttime_page__WEBPACK_IMPORTED_MODULE_7__["SelecttimePage"], _selectdusun_selectdusun_page__WEBPACK_IMPORTED_MODULE_8__["SelectdusunPage"],
            _listlaporan_listlaporan_page__WEBPACK_IMPORTED_MODULE_9__["ListlaporanPage"], _viewlaporan_viewlaporan_page__WEBPACK_IMPORTED_MODULE_10__["ViewlaporanPage"], _groups_groups_page__WEBPACK_IMPORTED_MODULE_11__["GroupsPage"],
            _selectperiode_selectperiode_page__WEBPACK_IMPORTED_MODULE_12__["SelectperiodePage"], _selectdusunonly_selectdusunonly_page__WEBPACK_IMPORTED_MODULE_13__["SelectdusunonlyPage"], _datadasardesa_datadasardesa_page__WEBPACK_IMPORTED_MODULE_14__["DatadasardesaPage"],
            _datadasardesaform_datadasardesaform_page__WEBPACK_IMPORTED_MODULE_15__["DatadasardesaformPage"], _informasidesa_informasidesa_page__WEBPACK_IMPORTED_MODULE_16__["InformasidesaPage"]]
    })
], LaporanPageModule);



/***/ }),

/***/ "./src/app/pages/laporan/listlaporan/listlaporan.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/laporan/listlaporan/listlaporan.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9saXN0bGFwb3Jhbi9saXN0bGFwb3Jhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFVSTtFQUNJLGtCQUFBO0FBUFI7O0FBYUE7RUFDSSxvQ0FBQTtBQVZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9saXN0bGFwb3Jhbi9saXN0bGFwb3Jhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMzBweDtcclxuXHJcbiAgICAjbGlzdExhcG9yYW4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5sYWJlbC10aXRsZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/laporan/listlaporan/listlaporan.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/laporan/listlaporan/listlaporan.page.ts ***!
  \***************************************************************/
/*! exports provided: ListlaporanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListlaporanPage", function() { return ListlaporanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");






let ListlaporanPage = class ListlaporanPage {
    constructor(route, NavController, apiService, toastController, alertController, router) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.title = 'Laporan ';
        this.lists = [];
        this.params = this.route.snapshot.params;
        // console.log(this.params);
        this.title = this.title + this.params.Type;
        this.geo_id = localStorage.getItem('geo_id');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getListLaporan();
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
    getListLaporan() {
        this.subscribe = this.apiService.get('v2/user_areas_list?type=' + this.params.Type + '&geo_id=' + this.geo_id, {}).subscribe(data => {
            this.lists = data;
        }, error => {
            if (error.status == 401) {
                this.alertToRelogin();
            }
        });
    }
    selectTime() {
        this.NavController.navigateForward(['/laporan/selecttime', { Type: this.params.Type }]);
    }
    gotoSelectDusun(item) {
        this.subscribe = this.apiService.get('v2/user_areas_list_detail?glue=' + item.glue + '&geo_id=' + this.geo_id, {}).subscribe(data => {
            if (data.length > 0) {
                let ans_id_desa = '';
                let ans_id_dusun = '';
                let selectDesa = 0;
                let selectDesa_id_questionnaire = 0;
                let selectDusun = 0;
                let selectDusun_id_questionnaire = 0;
                let array = data;
                let label = '';
                let range = '';
                let value = '';
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    label = element.label;
                    range = element.range;
                    value = item.glue.substring(2, 20);
                    if (element.target == '0') {
                        ans_id_dusun = element.id;
                        selectDusun = 1;
                        selectDusun_id_questionnaire = element.id_questionnaire;
                    }
                    if (element.target == '1') {
                        ans_id_desa = element.id;
                        selectDesa = 1;
                        selectDesa_id_questionnaire = element.id_questionnaire;
                    }
                }
                let paramToDusun = {
                    Type: item.type,
                    ans_id_desa: ans_id_desa,
                    ans_id_dusun: ans_id_dusun,
                    checked: false,
                    label: label,
                    range: range,
                    selectDesa: selectDesa,
                    selectDesa_id_questionnaire: selectDesa_id_questionnaire,
                    selectDusun: selectDusun,
                    selectDusun_id_questionnaire: selectDusun_id_questionnaire,
                    value: value,
                    id_questionnaire: ''
                };
                this.NavController.navigateForward(['/laporan/selectdusun', paramToDusun]);
            }
        });
    }
    goBack() {
        this.NavController.navigateBack(['/home'], { replaceUrl: true });
    }
};
ListlaporanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListlaporanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listlaporan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listlaporan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/listlaporan/listlaporan.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listlaporan.page.scss */ "./src/app/pages/laporan/listlaporan/listlaporan.page.scss")).default]
    })
], ListlaporanPage);



/***/ }),

/***/ "./src/app/pages/laporan/selectdusun/selectdusun.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/laporan/selectdusun/selectdusun.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content ion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3RkdXN1bi9zZWxlY3RkdXN1bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFVSTtFQUNJLGtCQUFBO0FBUFI7O0FBVUk7RUFFSSxnQ0FBQTtBQVRSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3RkdXN1bi9zZWxlY3RkdXN1bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMzBweDtcclxuXHJcbiAgICAjbGlzdExhcG9yYW4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/laporan/selectdusun/selectdusun.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/laporan/selectdusun/selectdusun.page.ts ***!
  \***************************************************************/
/*! exports provided: SelectdusunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectdusunPage", function() { return SelectdusunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let SelectdusunPage = class SelectdusunPage {
    constructor(route, NavController, apiService, toastController, alertController, loadingController, actionSheetController) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.title = '';
        this.subtitle = '';
        this.subtitle_2 = '';
        this.firstPathGlue = 'w-';
        this.arrDusun = [];
        this.isDesaTemporarySave = false;
        this.desaVersionSubmitToServer = 0;
        this.dataDesaFromServer = {};
        this.params = this.route.snapshot.params;
        console.log(this.params);
        this.title = 'Laporan ' + this.params.Type;
        this.subtitle = this.params.label;
        this.subtitle_2 = this.params.range;
        if (this.params.Type == 'Bulanan') {
            this.firstPathGlue = 'm-';
        }
        else if (this.params.Type == 'Triwulan') {
            this.firstPathGlue = 'q-';
        }
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.presentLoading('Menyiapkan data...', 1000);
        this.getListDusun();
        this.checkIfDesaTemporarySave();
    }
    alertToOptionSavingReport(target, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let header = 'Laporan Untuk Desa';
            let message = (this.isDesaTemporarySave)
                ? 'Anda menyimpan Laporan Sementara' : '';
            if (target == 'dusun') {
                header = item.name;
                message = (item.isTemporary) ? 'Anda menyimpan Laporan Sementara' : '';
            }
            let buttons = [
                {
                    text: 'Isi Kembali',
                    handler: () => {
                        this.gotoFormQuestion();
                    }
                },
                {
                    text: 'Tutup',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ];
            if ((item.isTemporary && target == 'dusun') || (this.isDesaTemporarySave && target == 'desa')) {
                buttons.push({
                    text: 'Hapus Laporan Sementara',
                    role: 'destructive',
                    handler: () => {
                        this.removeFromTemporary();
                    }
                });
                buttons.push({
                    text: 'Kirim Laporan',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.sendToServer();
                    })
                });
            }
            if ((item.version > 0 && target == 'dusun') || (target == 'desa' && this.desaVersionSubmitToServer > 0)) {
                buttons.push({
                    text: 'Lihat Laporan',
                    handler: () => {
                        this.gotoViewLaporan();
                    }
                });
            }
            const actionSheet = yield this.actionSheetController.create({
                header: header,
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: buttons
            });
            yield actionSheet.present();
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
    alertToOptionSavingReport2(target, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(item);
            let header = 'Laporan Untuk Desa';
            let message = (this.isDesaTemporarySave)
                ? 'Anda menyimpan Laporan Sementara' : '';
            if (target == 'dusun') {
                header = item.name;
                message = (item.isTemporary) ? 'Anda menyimpan Laporan Sementara' : '';
            }
            let buttons = [
                {
                    text: 'Isi Kembali',
                    handler: () => {
                        this.gotoFormQuestion();
                    }
                }
            ];
            if ((item.isTemporary && target == 'dusun') || (this.isDesaTemporarySave && target == 'desa')) {
                buttons.push({
                    text: 'Hapus Laporan Sementara',
                    handler: () => {
                        this.removeFromTemporary();
                    }
                });
                buttons.push({
                    text: 'Kirim Laporan',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.sendToServer();
                    })
                });
            }
            if ((item.version > 0 && target == 'dusun') || (target == 'desa' && this.desaVersionSubmitToServer > 0)) {
                buttons.push({
                    text: 'Lihat Laporan',
                    handler: () => {
                        this.gotoViewLaporan();
                    }
                });
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                mode: "ios",
                backdropDismiss: true,
                buttons: buttons
            });
            yield alert.present();
        });
    }
    sendToServer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.presentLoading('Mengirim laporan...', 2000);
                let dataAnswers = yield this.setParamBeforeToSendServer();
                let newParams = localStorage.getItem('paramsToFormLaporan');
                newParams = JSON.parse(newParams);
                let params = {
                    ans_id: newParams['ans_id'],
                    glue: newParams['glue'],
                    user_area_id: newParams['user_area_id'],
                    answer: JSON.stringify(dataAnswers)
                };
                this.subscribe = this.apiService.post('v2/user_area_questionnaire', params).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let geo_id = localStorage.getItem('geo_id');
                    let temporarySave = localStorage.getItem('temporarySave_' + geo_id);
                    temporarySave = JSON.parse(temporarySave);
                    let newTemp = [];
                    for (let index = 0; index < temporarySave.length; index++) {
                        const element = temporarySave[index];
                        if (element != newParams['glue']) {
                            newTemp.push(element);
                        }
                    }
                    localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp));
                    this.getListDusun();
                    this.checkIfDesaTemporarySave();
                    // console.log(data);
                    setTimeout(() => {
                        this.presentToast('success', 'Sukses', 'Data tersimpan');
                        resolve('');
                    }, 2000);
                }), error => {
                    // this.presentAlertConfirmError();
                    console.log(error);
                    this.presentToast('error', 'Gagal', 'Tidak tersimpan');
                    reject(error);
                });
            }));
        });
    }
    setParamBeforeToSendServer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let newParams = localStorage.getItem('paramsToFormLaporan');
                newParams = JSON.parse(newParams);
                let glue = newParams['glue'];
                let id_questionnaire = newParams['id_questionnaire'];
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
                                ans_id: newParams['ans_id'],
                                glue: glue,
                                user_area_id: (newParams['target'] == 'dusun') ? newParams['ans_id_dusun'] : 0,
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
    removeFromTemporary() {
        // let pathGlue = (target == 'dusun') ? '-' + item.id : '';
        // let glue = this.firstPathGlue + this.params.value + pathGlue;
        let newParams = localStorage.getItem('paramsToFormLaporan');
        newParams = JSON.parse(newParams);
        let glue = newParams['glue'];
        localStorage.removeItem(glue);
        let geo_id = localStorage.getItem('geo_id');
        let temporarySave = localStorage.getItem('temporarySave_' + geo_id);
        temporarySave = JSON.parse(temporarySave);
        if (temporarySave.length > 0) {
            let newTemp = [];
            for (let i = 0; i < temporarySave.length; i++) {
                const element = temporarySave[i];
                if (element != glue) {
                    newTemp.push(element);
                }
            }
            localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp));
            this.getListDusun();
            this.checkIfDesaTemporarySave();
        }
    }
    checkIfDesaTemporarySave() {
        let geo_id = localStorage.getItem('geo_id');
        let temporarySave = localStorage.getItem('temporarySave_' + geo_id);
        if (temporarySave != null && temporarySave != '') {
            let dataTemp = JSON.parse(temporarySave);
            let glue = this.firstPathGlue + this.params.value;
            if (dataTemp.indexOf(glue) != -1) {
                this.isDesaTemporarySave = true;
            }
            else {
                this.isDesaTemporarySave = false;
            }
        }
        // get data dusun dari laporan server
        if (this.params.selectDesa == 1) {
            let ans_id_desa = this.params.ans_id_desa;
            let selectDesa_id_questionnaire = this.params.selectDesa_id_questionnaire;
            let glue = this.firstPathGlue + this.params.value;
            this.subscribe = this.apiService.get('v2/user_area_reports_desa?ans_id=' + ans_id_desa + '&id_questionnaire=' + selectDesa_id_questionnaire + '&glue=' + glue, {}).subscribe(data => {
                this.dataDesaFromServer = data.user_area_report[0];
                this.desaVersionSubmitToServer = this.dataDesaFromServer['version'];
            });
        }
    }
    getListDusun() {
        this.arrDusun = [];
        let geo_id = localStorage.getItem('geo_id');
        let glue_header = this.firstPathGlue + this.params.value;
        this.subscribe = this.apiService.get('v2/user_areas?no_expand=user,geo&geo_id=' + geo_id + '&glue_header=' + glue_header, {}).subscribe(data => {
            this.arrDusun = data;
            let dataTemp = [];
            let geo_id = localStorage.getItem('geo_id');
            let temporarySave = localStorage.getItem('temporarySave_' + geo_id);
            if (temporarySave != null && temporarySave != '') {
                dataTemp = JSON.parse(temporarySave);
            }
            for (let i = 0; i < this.arrDusun.length; i++) {
                const element = this.arrDusun[i];
                this.arrDusun[i].isTemporary = false;
                let glue = this.firstPathGlue + this.params.value + '-' + element.id;
                if (dataTemp.indexOf(glue) != -1) {
                    this.arrDusun[i].isTemporary = true;
                }
            }
        });
    }
    checkBeforeToFormQuestion(target, item) {
        let next = true;
        if (target == 'dusun') {
            if (item.isTemporary) {
                next = false;
            }
            if (item.version > 0) {
                next = false;
            }
        }
        else {
            if (this.isDesaTemporarySave) {
                next = false;
            }
            if (this.desaVersionSubmitToServer > 0) {
                next = false;
            }
        }
        let pathGlue = (target == 'dusun') ? '-' + item.id : '';
        let newParams = {
            id_questionnaire: (target == 'dusun')
                ? this.params.selectDusun_id_questionnaire : this.params.selectDesa_id_questionnaire,
            ans_id: (target == 'dusun')
                ? this.params.ans_id_dusun : this.params.ans_id_desa,
            Type: this.params.Type,
            glue: this.firstPathGlue + this.params.value + pathGlue,
            label: this.params.label,
            ans_id_desa: this.params.ans_id_desa,
            ans_id_dusun: this.params.ans_id_dusun,
            user_area_id: (target == 'dusun') ? item.id : 0,
            range: this.params.range,
            target: target,
            target_name: (target == 'dusun') ? 'Dusun : ' + item.name : 'Laporan Untuk Desa',
            page_from: 'selectdusun'
        };
        localStorage.setItem('paramsToFormLaporan', JSON.stringify(newParams));
        if (next) {
            this.gotoFormQuestion();
        }
        else {
            this.alertToOptionSavingReport(target, item);
        }
    }
    gotoFormQuestion() {
        let newParams = localStorage.getItem('paramsToFormLaporan');
        newParams = JSON.parse(newParams);
        localStorage.setItem('gotoSelectDusun', JSON.stringify(this.params));
        this.NavController.navigateForward(['/laporan/formlaporan', newParams]);
    }
    gotoViewLaporan() {
        let newParams = localStorage.getItem('paramsToFormLaporan');
        newParams = JSON.parse(newParams);
        localStorage.setItem('gotoSelectDusun', JSON.stringify(this.params));
        this.NavController.navigateForward(['/laporan/viewlaporan', newParams]);
    }
    goBack() {
        this.NavController.navigateBack(['/laporan/listlaporan', { Type: this.params.Type }], { replaceUrl: true });
    }
};
SelectdusunPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
SelectdusunPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectdusun',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./selectdusun.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusun/selectdusun.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./selectdusun.page.scss */ "./src/app/pages/laporan/selectdusun/selectdusun.page.scss")).default]
    })
], SelectdusunPage);



/***/ }),

/***/ "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content ion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3RkdXN1bm9ubHkvc2VsZWN0ZHVzdW5vbmx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLHFCQUFBO0VBQ0EsY0FBQTtBQURSOztBQVVJO0VBQ0ksa0JBQUE7QUFQUjs7QUFVSTtFQUVJLGdDQUFBO0FBVFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvcmFuL3NlbGVjdGR1c3Vub25seS9zZWxlY3RkdXN1bm9ubHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogI2NhZWNlOTtcclxuICAgIC8vIC0tcGFkZGluZy10b3A6IDMwcHg7XHJcblxyXG4gICAgI2xpc3RMYXBvcmFuIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgICAgIC8vIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.ts ***!
  \***********************************************************************/
/*! exports provided: SelectdusunonlyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectdusunonlyPage", function() { return SelectdusunonlyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let SelectdusunonlyPage = class SelectdusunonlyPage {
    constructor(route, NavController, apiService, actionSheetController, alertController, loadingController) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.arrDusun = [];
        this.params = this.route.snapshot.params;
        console.log(this.params);
        localStorage.setItem('gotoselectdusunonly', JSON.stringify(this.params));
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.gotListDusun();
    }
    presentActionSheetInputFormDusun(newParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Pilih Aksi',
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: [{
                        text: 'Lihat Laporan',
                        handler: () => {
                            this.gotoViewLaporan(newParams);
                            // console.log('Share clicked');
                        }
                    }, {
                        text: 'Isi Kembali',
                        handler: () => {
                            this.presentAlertConfirmBeforeFillout(newParams);
                        }
                    }, {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: () => {
                            // console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    presentAlertConfirmBeforeFillout(newParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: newParams.target_name,
                message: '<strong>' + newParams.label + '</strong>, mulai mengisi laporan ?',
                mode: 'ios',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Nanti',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ya',
                        handler: () => {
                            this.NavController.navigateForward(['/laporan/formlaporan', newParams]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    gotListDusun() {
        let id_questionnaire = this.params.selectDusun_id_questionnaire;
        this.subscribe = this.apiService.get('v2/user_area_reports_listdusun?id_questionnaire=' + id_questionnaire + '&glue=' + this.params.glue, {}).subscribe(data => {
            this.arrDusun = data;
            console.log(data);
            // this.catecories = data.List;
        });
    }
    checkBeforeToFormQuestion(item) {
        console.log(item);
        let newParams = {
            id_questionnaire: this.params.selectDusun_id_questionnaire,
            ans_id: this.params.ans_id_dusun,
            Type: this.params.Type,
            glue: this.params.glue,
            label: this.params.label,
            ans_id_desa: this.params.ans_id_desa,
            ans_id_dusun: this.params.ans_id_dusun,
            user_area_id: item.id,
            range: this.params.range,
            target: 'dusun',
            target_name: 'Dusun : ' + item.name,
            page_from: 'selectdusunonly'
        };
        if (item.version > 0) {
            this.presentActionSheetInputFormDusun(newParams);
        }
        else {
            this.presentAlertConfirmBeforeFillout(newParams);
        }
    }
    gotoViewLaporan(newParams) {
        // let newParams = localStorage.getItem('paramsToFormLaporan');
        // newParams = JSON.parse(newParams);
        // localStorage.setItem('gotoSelectDusun', JSON.stringify(this.params));
        this.NavController.navigateForward(['/laporan/viewlaporan', newParams]);
    }
    goBack() {
        let gotoSelectDusun = localStorage.getItem('gotoselectperiode');
        let newParams = JSON.parse(gotoSelectDusun);
        this.NavController.navigateBack(['/laporan/selectperiode', newParams], { replaceUrl: true });
    }
};
SelectdusunonlyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
SelectdusunonlyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectdusunonly',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./selectdusunonly.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./selectdusunonly.page.scss */ "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.scss")).default]
    })
], SelectdusunonlyPage);



/***/ }),

/***/ "./src/app/pages/laporan/selectperiode/selectperiode.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/laporan/selectperiode/selectperiode.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content ion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3RwZXJpb2RlL3NlbGVjdHBlcmlvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBVUk7RUFDSSxrQkFBQTtBQVBSOztBQVVJO0VBRUksZ0NBQUE7QUFUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhcG9yYW4vc2VsZWN0cGVyaW9kZS9zZWxlY3RwZXJpb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNjYWVjZTk7XHJcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuICAgICNsaXN0TGFwb3JhbiBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgICAgICAvLyBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/laporan/selectperiode/selectperiode.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/laporan/selectperiode/selectperiode.page.ts ***!
  \*******************************************************************/
/*! exports provided: SelectperiodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectperiodePage", function() { return SelectperiodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/id */ "./node_modules/moment/locale/id.js");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let SelectperiodePage = class SelectperiodePage {
    constructor(route, NavController, apiService, alertController, loadingController, actionSheetController, router) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.listTime = [];
        this.target = '';
        this.headerGlue = 'w-';
        this.params = this.route.snapshot.params;
        console.log(this.params);
        localStorage.setItem('gotoselectperiode', JSON.stringify(this.params));
        this.target = (this.params.target == 0) ? 'Dusun' : 'Desa';
        this.geo_id = localStorage.getItem('geo_id');
        if (this.params.type == 'Bulanan') {
            this.headerGlue = 'm-';
        }
        else if (this.params.type == 'Triwulan') {
            this.headerGlue = 'q-';
        }
    }
    ngOnInit() {
        // this.getListPeriode();
    }
    ionViewDidEnter() {
        this.getListPeriode();
        // if (this.params.refresh == 1) {
        //   this.getListPeriode();
        // }
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Loading...',
                mode: 'ios',
                duration: 5000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    presentAlertConfirmBeforeFillout(newParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Konfirmasi',
                message: '<strong>' + newParams.label + '</strong>, mulai mengisi laporan ?',
                mode: 'ios',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Nanti',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ya',
                        handler: () => {
                            this.NavController.navigateForward(['/laporan/formlaporan', newParams]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentActionSheetInputFormDesa(newParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Pilih Aksi',
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: [{
                        text: 'Lihat Laporan',
                        handler: () => {
                            this.gotoViewLaporan(newParams);
                            // console.log('Share clicked');
                        }
                    }, {
                        text: 'Isi Kembali',
                        handler: () => {
                            this.presentAlertConfirmBeforeFillout(newParams);
                        }
                    }, {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: () => {
                            // console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    presentAlertNoQuestion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Info !',
                message: 'Belum ada pertanyaan yang diterbitkan',
                mode: "ios",
                buttons: [
                    {
                        text: 'Tutup',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
    getListPeriode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            this.listTime = [];
            // Mingguan
            if (this.params.type == 'Mingguan') {
                let date = moment__WEBPACK_IMPORTED_MODULE_6__().year(this.params.range_year_start).week(this.params.range_start);
                let week = this.params.range_start;
                let year = date.endOf('isoWeek').format('YYYY');
                let rangeStart = date.startOf('isoWeek').format('DD MMM YYYY');
                let rangeEnd = date.endOf('isoWeek').format('DD MMM YYYY');
                let newWeek = {
                    label: 'Minggu ke : ' + week + ' - ' + year,
                    range: rangeStart + ' - ' + rangeEnd,
                    value: week + '-' + year,
                    checked: false,
                    glue: this.headerGlue + week + '-' + year,
                    sort: 1
                };
                let status = yield this.checkFill(newWeek);
                newWeek['status'] = status;
                this.listTime.push(newWeek);
                let next = true;
                let no = 1;
                while (next) {
                    let d = date.add('7', 'day');
                    week = d.startOf('isoWeek').week();
                    year = d.endOf('isoWeek').format('YYYY');
                    rangeStart = d.startOf('isoWeek').format('DD MMM YYYY');
                    rangeEnd = d.endOf('isoWeek').format('DD MMM YYYY');
                    if (week > this.params.range_end && year == this.params.range_year_end) {
                        next = false;
                        break;
                    }
                    else {
                        let newWeek = {
                            label: 'Minggu ke : ' + week + ' - ' + year,
                            range: rangeStart + ' - ' + rangeEnd,
                            value: week + '-' + year,
                            checked: false,
                            glue: this.headerGlue + week + '-' + year,
                            sort: no += 1
                        };
                        let status = yield this.checkFill(newWeek);
                        newWeek['status'] = status;
                        this.listTime.push(newWeek);
                    }
                }
                console.log(this.listTime);
            }
            else if (this.params.type == 'Bulanan') {
                // let mounth_start = parseInt(this.params.range_start) - 1;
                let initialDate = moment__WEBPACK_IMPORTED_MODULE_6__().month(parseInt(this.params.range_start) - 1).year(this.params.range_year_start);
                let next = true;
                let no = 0;
                while (next) {
                    let MomentFormat = (no == 0) ? initialDate : initialDate.add(1, 'month');
                    let Month = MomentFormat.format('MM');
                    let Year = MomentFormat.format('YYYY');
                    console.log('Month', no, Month, parseInt(this.params.range_end) - 1);
                    if (parseInt(Month) > (parseInt(this.params.range_end)) && parseInt(Year) == this.params.range_year_end) {
                        next = false;
                        break;
                    }
                    else {
                        let MonthLabel = MomentFormat.format('MMMM');
                        let Start = MomentFormat.startOf('month').format('DD MMMM YYYY');
                        let End = MomentFormat.endOf('month').format('DD MMMM YYYY');
                        let newMonth = {
                            label: 'Bulan : ' + MonthLabel + ' - ' + Year,
                            range: Start + ' - ' + End,
                            value: Month + '-' + Year,
                            checked: false,
                            glue: this.headerGlue + Month + '-' + Year,
                            sort: no += 1
                        };
                        let status = yield this.checkFill(newMonth);
                        newMonth['status'] = status;
                        this.listTime.push(newMonth);
                    }
                }
                // console.log(this.listTime);
            }
            else if (this.params.type == 'Triwulan') {
                let initialDate = moment__WEBPACK_IMPORTED_MODULE_6__().quarter(this.params.range_start).year(this.params.range_year_start);
                let next = true;
                let no = 0;
                while (next) {
                    let MomentFormat = (no == 0) ? initialDate : initialDate.add(1, 'Q');
                    let Quarter = MomentFormat.quarter();
                    let Year = MomentFormat.format('YYYY');
                    if (Quarter > parseInt(this.params.range_end) && parseInt(Year) == parseInt(this.params.range_year_end)) {
                        next = false;
                        break;
                    }
                    else {
                        let Start = MomentFormat.startOf('quarter').format('DD MMMM YYYY');
                        let End = MomentFormat.endOf('quarter').format('DD MMMM YYYY');
                        let Value = Quarter + '-' + Year;
                        let newList = {
                            label: 'Triwulan : ' + Quarter + ' - ' + Year,
                            range: Start + ' - ' + End,
                            value: Value,
                            checked: false,
                            glue: this.headerGlue + Value,
                            sort: no += 1
                        };
                        let status = yield this.checkFill(newList);
                        newList['status'] = status;
                        this.listTime.push(newList);
                    }
                }
            }
        });
    }
    sortDESCBy(prop) {
        return this.listTime.sort((a, b) => a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    }
    checkFill(paramsCheck) {
        return new Promise((resolve, reject) => {
            this.subscribe = this.apiService.get('v2/check_report?id_questionnaire=' + this.params.id +
                '&glue=' + paramsCheck.glue + '&geo_id=' + this.geo_id + '&target=' + this.params.target, {}).subscribe(data => {
                resolve(data.status);
                // this.arrDusun = data;
                // console.log(data);
                // this.catecories = data.List;
            }, error => {
                resolve(0);
            });
        });
    }
    gotoFormLaporan(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(item);
            // return false;
            try {
                let dataAnswerID = yield this.gotAnswerID(item);
                // (this.params.target == 0)
                if (this.params.target == 0) {
                    item.Type = this.params.type;
                    item.selectDusun = 1;
                    item.selectDusun_id_questionnaire = this.params.id;
                    item.selectDesa = 0;
                    item.selectDesa_id_questionnaire = 0;
                    this.NavController.navigateForward(['/laporan/selectdusunonly', item]);
                }
                else {
                    let newParams = {
                        id_questionnaire: this.params.id,
                        ans_id: (this.params.target == 0) ? dataAnswerID.ans_id_dusun : dataAnswerID.ans_id_desa,
                        Type: this.params.type,
                        glue: item.glue,
                        label: item.label,
                        ans_id_desa: dataAnswerID.ans_id_desa,
                        ans_id_dusun: dataAnswerID.ans_id_dusun,
                        user_area_id: (this.params.target == 0) ? 1 : 0,
                        range: item.range,
                        target: (this.params.target == 0) ? 'dusun' : 'desa',
                        target_name: (this.params.target == 0) ? 'Dusun : nama dusunnya' : 'Laporan Untuk Desa',
                        page_from: 'selectperiode'
                    };
                    if (item.status == 2) {
                        this.presentActionSheetInputFormDesa(newParams);
                    }
                    else {
                        this.presentAlertConfirmBeforeFillout(newParams);
                    }
                }
            }
            catch (error) {
                this.presentAlertNoQuestion();
            }
        });
    }
    gotAnswerID(item) {
        return new Promise((resolve, reject) => {
            let params = {
                type: this.params.type,
                selectDusun: (this.params.target == 0) ? 1 : 0,
                selectDusun_id_questionnaire: this.params.id,
                selectDesa: (this.params.target == 0) ? 0 : 1,
                selectDesa_id_questionnaire: this.params.id,
                value: item.value,
                geo_id: this.geo_id,
                label: item.label,
                range: item.range,
                id_questionnaire: ''
            };
            this.subscribe = this.apiService.post('v2/user_area_reports_target', params).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                item.ans_id_dusun = data.ans_data.ans_id_dusun;
                item.ans_id_desa = data.ans_data.ans_id_desa;
                // item.netwotkInformation = 'Online';
                // this.NavController.navigateForward(['/laporan/selectdusun', newParams]);
                resolve(item);
            }), error => {
                // this.presentAlertConfirmError();
                reject('Gagal insert');
            });
        });
    }
    gotoViewLaporan(newParams) {
        // let newParams = localStorage.getItem('paramsToFormLaporan');
        // newParams = JSON.parse(newParams);
        // localStorage.setItem('gotoSelectDusun', JSON.stringify(this.params));
        this.NavController.navigateForward(['/laporan/viewlaporan', newParams]);
    }
    goBack() {
        this.NavController.navigateBack(['/laporan/groups'], { replaceUrl: true });
    }
};
SelectperiodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SelectperiodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectperiode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./selectperiode.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectperiode/selectperiode.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./selectperiode.page.scss */ "./src/app/pages/laporan/selectperiode/selectperiode.page.scss")).default]
    })
], SelectperiodePage);



/***/ }),

/***/ "./src/app/pages/laporan/selecttime/selecttime.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/laporan/selecttime/selecttime.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3R0aW1lL3NlbGVjdHRpbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBVUk7RUFDSSxrQkFBQTtBQVBSOztBQWFBO0VBQ0ksb0NBQUE7QUFWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhcG9yYW4vc2VsZWN0dGltZS9zZWxlY3R0aW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNjYWVjZTk7XHJcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuICAgICNsaXN0TGFwb3JhbiBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/laporan/selecttime/selecttime.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/laporan/selecttime/selecttime.page.ts ***!
  \*************************************************************/
/*! exports provided: SelecttimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecttimePage", function() { return SelecttimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/id */ "./node_modules/moment/locale/id.js");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let SelecttimePage = class SelecttimePage {
    constructor(route, NavController, apiService, toastController, alertController, router) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.title = '';
        this.subtitle = '';
        this.selectDusun = 0;
        this.selectDesa = 0;
        this.selectDusun_id_questionnaire = 0;
        this.selectDesa_id_questionnaire = 0;
        this.listTime = [];
        this.hideListTime = [];
        this.params = this.route.snapshot.params;
        // console.log(this.params);
        this.title = 'Laporan ' + this.params.Type;
        this.geo_id = localStorage.getItem('geo_id');
        this.getTargetQuestion();
        this.getListExistingLaporan();
    }
    ngOnInit() {
    }
    presentAlertNoQuestion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Info !',
                message: 'Belum ada pertanyaan yang diterbitkan',
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
    getTargetQuestion() {
        let netwotkInformation = localStorage.getItem('netwotkInformation');
        if (netwotkInformation == 'online') {
            this.subscribe = this.apiService.get('v2/user_area_reports_target?type=' + this.params.Type, {}).subscribe(data => {
                if (data.user_area_report.length > 0) {
                    // let q = data.user_area_report[0];
                    for (let i = 0; i < data.user_area_report.length; i++) {
                        const element = data.user_area_report[i];
                        if (element.target == 0) {
                            this.selectDusun = 1;
                            this.selectDusun_id_questionnaire = element.id;
                        }
                        else if (element.target == 1) {
                            this.selectDesa = 1;
                            this.selectDesa_id_questionnaire = element.id;
                        }
                    }
                }
                else {
                    this.presentAlertNoQuestion();
                }
            });
        }
        else {
            let dataQuestionnaire = sessionStorage.getItem(this.geo_id + '_Questionnaire_' + this.params.Type);
            if (dataQuestionnaire != null && dataQuestionnaire != 'null' && dataQuestionnaire != '') {
                let d = JSON.parse(dataQuestionnaire);
                for (let i = 0; i < d.length; i++) {
                    const element = d[i];
                    if (element.target == 0) {
                        this.selectDusun = 1;
                        this.selectDusun_id_questionnaire = element.id;
                    }
                    else if (element.target == 1) {
                        this.selectDesa = 1;
                        this.selectDesa_id_questionnaire = element.id;
                    }
                }
            }
            else {
                this.presentAlertNoQuestion();
            }
        }
    }
    getListExistingLaporan() {
        this.subscribe = this.apiService.get('v2/user_areas_list?type=' + this.params.Type + '&geo_id=' + this.geo_id, {}).subscribe(data => {
            this.hideListTime = data;
            if (this.params.Type == 'Mingguan') {
                this.subtitle = 'Pilih Minggu';
                this.getRangeWeek(54);
            }
            else if (this.params.Type == 'Bulanan') {
                this.subtitle = 'Pilih Bulan';
                this.getBulan(12);
            }
            else if (this.params.Type == 'Triwulan') {
                this.subtitle = 'Pilih Triwulan';
                this.getTriwulan(5);
            }
        }, error => {
            if (error.status == 401) {
                this.alertToRelogin();
            }
        });
    }
    getRangeWeek(length) {
        for (let i = 0; i <= length; i++) {
            let thisWeek = moment__WEBPACK_IMPORTED_MODULE_6__().startOf('isoWeek').week();
            let thisYear = moment__WEBPACK_IMPORTED_MODULE_6__().startOf('isoWeek').format('YYYY');
            let MomentFormat = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(i, 'weeks');
            let Week = MomentFormat.startOf('isoWeek').week();
            let Year = MomentFormat.endOf('isoWeek').format('YYYY');
            let Start = MomentFormat.startOf('isoWeek').format('DD MMMM YYYY');
            let End = MomentFormat.endOf('isoWeek').format('DD MMMM YYYY');
            let Value = Week + '-' + Year;
            if (this.searchInArray(Value)) {
                let checked = (thisWeek == Week && thisYear == Year) ? true : false;
                let newWeek = {
                    label: 'Minggu ke : ' + Week + ' - ' + Year,
                    range: Start + ' - ' + End,
                    value: Value,
                    checked: checked
                };
                this.listTime.push(newWeek);
            }
        }
        console.log(this.listTime);
    }
    getBulan(length) {
        for (let i = 0; i <= length; i++) {
            let thisMonth = moment__WEBPACK_IMPORTED_MODULE_6__().format('MM');
            let thisYear = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY');
            let MomentFormat = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(i, 'month');
            let Month = MomentFormat.format('MM');
            let MonthLabel = MomentFormat.format('MMMM');
            let Year = MomentFormat.format('YYYY');
            let Start = MomentFormat.startOf('month').format('DD MMMM YYYY');
            let End = MomentFormat.endOf('month').format('DD MMMM YYYY');
            let Value = Month + '-' + Year;
            if (this.searchInArray(Value)) {
                let checked = (thisMonth == Month && thisYear == Year) ? true : false;
                let newArr = {
                    label: 'Bulan : ' + MonthLabel + ' - ' + Year,
                    range: Start + ' - ' + End,
                    value: Value,
                    checked: checked
                };
                this.listTime.push(newArr);
            }
        }
        // console.log(this.listTime);
    }
    getTriwulan(length) {
        for (let i = 0; i <= length; i++) {
            // const element = array[i];
            let thisquarter = moment__WEBPACK_IMPORTED_MODULE_6__().quarter();
            let thisYear = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY');
            let MomentFormat = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(i, 'Q');
            let quarter = MomentFormat.quarter();
            let Year = MomentFormat.format('YYYY');
            let Start = MomentFormat.startOf('quarter').format('DD MMMM YYYY');
            let End = MomentFormat.endOf('quarter').format('DD MMMM YYYY');
            let Value = quarter + '-' + Year;
            if (this.searchInArray(Value)) {
                let checked = (thisquarter == quarter && thisYear == Year) ? true : false;
                let newArr = {
                    label: 'Triwulan ke : ' + quarter + ' - ' + Year,
                    range: Start + ' - ' + End,
                    value: Value,
                    checked: checked
                };
                this.listTime.push(newArr);
            }
        }
    }
    searchInArray(value) {
        let result = true;
        let array = this.hideListTime;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            let c_value = '';
            if (this.params.Type == 'Mingguan') {
                c_value = element.week + '-' + element.year;
            }
            else if (this.params.Type == 'Bulanan') {
                c_value = element.month + '-' + element.year;
            }
            else if (this.params.Type == 'Triwulan') {
                c_value = element.quarter + '-' + element.year;
            }
            if (value == c_value) {
                result = false;
                break;
            }
        }
        return result;
    }
    gotoSelectDusun(newParams) {
        newParams.Type = this.params.Type;
        newParams.selectDusun = this.selectDusun;
        newParams.selectDusun_id_questionnaire = this.selectDusun_id_questionnaire;
        newParams.selectDesa = this.selectDesa;
        newParams.selectDesa_id_questionnaire = this.selectDesa_id_questionnaire;
        console.log(newParams);
        return false;
        let netwotkInformation = localStorage.getItem('netwotkInformation');
        if (netwotkInformation == 'online') {
            let params = {
                type: newParams.Type,
                selectDusun: newParams.selectDusun,
                selectDusun_id_questionnaire: newParams.selectDusun_id_questionnaire,
                selectDesa: newParams.selectDesa,
                selectDesa_id_questionnaire: newParams.selectDesa_id_questionnaire,
                value: newParams.value,
                geo_id: this.geo_id,
                label: newParams.label,
                range: newParams.range,
                id_questionnaire: ''
            };
            this.subscribe = this.apiService.post('v2/user_area_reports_target', params).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                newParams.ans_id_dusun = data.ans_data.ans_id_dusun;
                newParams.ans_id_desa = data.ans_data.ans_id_desa;
                newParams.netwotkInformation = 'Online';
                this.NavController.navigateForward(['/laporan/selectdusun', newParams]);
            }), error => {
                // this.presentAlertConfirmError();
            });
        }
        else {
            newParams.ans_id_dusun = '';
            newParams.ans_id_desa = '';
            newParams.netwotkInformation = 'Offline';
            console.log(newParams);
        }
    }
    goBack() {
        this.NavController.navigateBack(['/laporan/listlaporan', { Type: this.params.Type }], { replaceUrl: true });
    }
};
SelecttimePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SelecttimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selecttime',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./selecttime.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selecttime/selecttime.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./selecttime.page.scss */ "./src/app/pages/laporan/selecttime/selecttime.page.scss")).default]
    })
], SelecttimePage);



/***/ }),

/***/ "./src/app/pages/laporan/viewlaporan/viewlaporan.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/laporan/viewlaporan/viewlaporan.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content ion-grid .boolean-1 div,\nion-content ion-grid .boolean-2 div {\n  background: #eaeaea;\n  border-radius: 5px;\n}\n\nion-content ion-grid .boolean-1 div.boolean-active,\nion-content ion-grid .boolean-2 div.boolean-active {\n  background: #ffffff;\n}\n\nion-content ion-grid .boolean-1 {\n  text-align: center;\n  background: #eaeaea;\n  border-top-left-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\n\nion-content ion-grid .boolean-2 {\n  text-align: center;\n  background: #eaeaea;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi92aWV3bGFwb3Jhbi92aWV3bGFwb3Jhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFXUTs7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0FBUlo7O0FBV1E7O0VBRUksbUJBQUE7QUFUWjs7QUFjUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBWlo7O0FBZVE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQWJaOztBQW9CQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QUFqQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvcmFuL3ZpZXdsYXBvcmFuL3ZpZXdsYXBvcmFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcblxyXG4gICAgaW9uLWdyaWQge1xyXG5cclxuICAgICAgICAuYm9vbGVhbi0xIGRpdixcclxuICAgICAgICAuYm9vbGVhbi0yIGRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib29sZWFuLTEgZGl2LmJvb2xlYW4tYWN0aXZlLFxyXG4gICAgICAgIC5ib29sZWFuLTIgZGl2LmJvb2xlYW4tYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLmJvb2xlYW4tMSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9vbGVhbi0yIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/laporan/viewlaporan/viewlaporan.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/laporan/viewlaporan/viewlaporan.page.ts ***!
  \***************************************************************/
/*! exports provided: ViewlaporanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewlaporanPage", function() { return ViewlaporanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/id */ "./node_modules/moment/locale/id.js");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let ViewlaporanPage = class ViewlaporanPage {
    constructor(route, NavController, apiService) {
        this.route = route;
        this.NavController = NavController;
        this.apiService = apiService;
        this.title = '';
        this.subtitle = '';
        this.subtitle_2 = '';
        this.subtitle_3 = '';
        this.listQuestion = [];
        this.params = this.route.snapshot.params;
        console.log(this.params);
        this.TypeForm = this.params.Type;
        this.title = this.params.Type;
        ;
        this.subtitle = this.params.label;
        this.subtitle_2 = this.params.range;
        this.subtitle_3 = this.params.target_name;
        this.getQuestion();
    }
    ngOnInit() {
    }
    getQuestion() {
        this.listQuestion = [];
        let glue = this.params.glue;
        let ans_id = this.params.ans_id;
        this.subscribe = this.apiService.get('v2/user_area_questionnaire?id_questionnaire=' + this.params.id_questionnaire + '&glue=' + glue + '&ans_id=' + ans_id, {}).subscribe(data => {
            // this.catecories = data.List;
            // console.log(data);
            if (data.user_area_report.length > 0) {
                let q = data.user_area_report[0];
                let geo_id = localStorage.getItem('geo_id');
                localStorage.setItem(this.params.id_questionnaire + '_drafQuestions_' + geo_id, JSON.stringify(q.Question));
                let newListQuestion = [];
                for (let index = 0; index < q.Question.length; index++) {
                    const element = q.Question[index];
                    if (element.id_question_type == 4 && element.Answers.length > 0) {
                        let newAnswer = [];
                        for (let m = 0; m < element.Answers.length; m++) {
                            const m_el = element.Answers[m];
                            newAnswer.push(m_el.id_question_option);
                        }
                        element.Answers = newAnswer;
                    }
                    newListQuestion.push(element);
                }
                this.listQuestion = newListQuestion;
                console.log(this.listQuestion);
            }
        }, error => {
            console.log(error);
        });
    }
    formatingDate(myDate) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(myDate).format('DD MMM YYYY');
    }
    goBack() {
        if (this.params.page_from == 'selectperiode') {
            let gotoselectperiode = localStorage.getItem('gotoselectperiode');
            let newParams = JSON.parse(gotoselectperiode);
            this.NavController.navigateBack(['/laporan/selectperiode', newParams], { replaceUrl: true });
        }
        else if (this.params.page_from == 'selectdusunonly') {
            let gotoselectdusunonly = localStorage.getItem('gotoselectdusunonly');
            let newParams = JSON.parse(gotoselectdusunonly);
            this.NavController.navigateBack(['/laporan/selectdusunonly', newParams], { replaceUrl: true });
        }
        else {
            let gotoSelectDusun = localStorage.getItem('gotoSelectDusun');
            let newParams = JSON.parse(gotoSelectDusun);
            this.NavController.navigateBack(['/laporan/selectdusun', newParams], { replaceUrl: true });
        }
    }
};
ViewlaporanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
ViewlaporanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewlaporan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewlaporan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/viewlaporan/viewlaporan.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewlaporan.page.scss */ "./src/app/pages/laporan/viewlaporan/viewlaporan.page.scss")).default]
    })
], ViewlaporanPage);



/***/ })

}]);
//# sourceMappingURL=pages-laporan-laporan-module-es2015.js.map