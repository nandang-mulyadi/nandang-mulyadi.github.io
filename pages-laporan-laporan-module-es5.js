(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-laporan-laporan-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/formlaporan/formlaporan.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/formlaporan/formlaporan.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLaporanFormlaporanFormlaporanPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar style=\"height: 57px;padding-top: 5px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack(0)\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Isi Laporan {{ title }}</ion-title>\n\n    <!-- <ion-buttons slot=\"primary\">\n      <ion-button color=\"light\" fill=\"solid\" size=\"small\">\n        {{question_current / question_total * 100}} %\n      </ion-button>\n    </ion-buttons> -->\n\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"subtitle!=''\" style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{ subtitle }}<br/>{{subtitle_2}}<br/>{{subtitle_3}}\n    </ion-title>\n    \n  </ion-toolbar>\n  <ion-progress-bar color=\"warning\" [value]=\"question_current/question_total\"></ion-progress-bar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  \n\n  <div id=\"container-custom\" *ngIf=\"showCurrentQuestion\">\n\n    <ion-card *ngIf=\"!showButtonSend\">\n      <ion-card-content>\n        \n        <div style=\"margin-bottom: 15px;\"  [innerHTML]=\"currentQuestion?.question\"></div>\n\n        <!-- Multiple select (single select) -->\n        <ion-list *ngIf=\"currentQuestion.id_question_type == 3\">\n          <ion-radio-group value=\"\" *ngIf=\"currentQuestion.Options.length>0\" \n            (ionChange)=\"radioGroupChange($event)\" value=\"{{ singleAnswer }}\">\n            <ion-item lines=\"none\" *ngFor=\"let option of currentQuestion.Options\">\n              <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\n              <ion-radio slot=\"start\" value=\"{{ option.id }}\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n\n\n        <!-- Boolean -->\n        <ion-segment  *ngIf=\"currentQuestion.id_question_type == 2 && currentQuestion.Options.length>0\" \n          (ionChange)=\"segmentChanged($event)\" value=\"{{ singleAnswer }}\">\n          <ion-segment-button *ngFor=\"let option of currentQuestion.Options\" value=\"{{option.id}}\">\n            <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n\n        <!-- Essay text -->\n        <ion-item *ngIf=\"currentQuestion.id_question_type == 1\" lines=\"none\">\n          <ion-textarea rows=\"3\" placeholder=\"Ketik jawaban...\" [(ngModel)]=\"singleAnswer\"></ion-textarea>\n        </ion-item>\n\n        <!-- Essay number -->\n        <ion-item *ngIf=\"currentQuestion.id_question_type == 5\" lines=\"none\">\n          <ion-input type=\"number\" [(ngModel)]=\"singleAnswer\"></ion-input>\n        </ion-item>\n\n        <!-- Essay image -->\n        <div *ngIf=\"currentQuestion.id_question_type == 6\" style=\"margin-bottom: 15px;\">\n          <ion-row>\n            <ion-col text-center>\n              <ion-button expand=\"block\" color=\"medium\" (click)=\"getImagesFromGalery()\">\n                  <ion-icon slot=\"start\" name=\"image\"></ion-icon>\n                  Buka Galery</ion-button>\n            </ion-col>\n            <ion-col text-center>\n              <ion-button expand=\"block\" color=\"medium\" (click)=\"getImagesFromCamera()\">\n                  <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n                  Buka Kamera</ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-item *ngIf=\"currentQuestion.id_question_type == 6 && !singleAnswer == ''\" style=\"--padding-bottom:15px;--padding-top:15px;\" lines=\"none\">\n              <img src=\"{{singleAnswer}}\" alt=\"\" srcset=\"\">\n        </ion-item>\n\n\n        <!-- Multiple select (multy select) -->\n        <ion-list *ngIf=\"currentQuestion.id_question_type == 4\">\n          <ion-item *ngFor=\"let option of currentQuestion.Options\" lines=\"none\">\n            <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\n            <!-- [(ngModel)]=\"entry.isChecked\" -->\n            <ion-checkbox slot=\"end\" (ionChange)=\"selectSize($event)\" value=\"{{ option.id }}\" [(ngModel)]=\"option.isChecked\" ></ion-checkbox>\n          </ion-item>\n        </ion-list>\n\n      </ion-card-content>\n    </ion-card>\n\n    <div *ngIf=\"showButtonSend\" style=\"padding: 15px;\">\n      <ion-card>\n\n        <img src=\"./assets/sending.jpg\" />\n\n        <ion-card-content>\n          \n          <ion-button style=\"margin-bottom: 10px;\" (click)=\"getNextQuestion( 0, 'next' )\" expand=\"block\" fill=\"solid\" color=\"light\">Koreksi Ulang Laporan</ion-button>\n          <!-- <ion-button style=\"margin-bottom: 10px;\" *ngIf=\"params.page_from!='temporary'\" (click)=\"temporarySave()\" expand=\"block\" fill=\"solid\" color=\"medium\">Simpan Laporan Sementara</ion-button> -->\n          <ion-button (click)=\"sendAnswer()\" expand=\"block\" fill=\"solid\" color=\"warning\">Kirim Laporan</ion-button>\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n    \n\n\n  </div>\n\n  \n\n</ion-content>\n\n<ion-footer *ngIf=\"!showButtonSend\" class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\">\n        <!-- {{question_current}} -->\n        <ion-button *ngIf=\"showButtonBack\" expand=\"block\" (click)=\"getNextQuestion( number_of_back, 'back' )\" shape=\"round\" color=\"light\" fill=\"solid\">\n          <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n          Sebelumnya</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" (click)=\"getNextQuestion( number_of_forward, 'next')\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Selanjutnya\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button>\n\n        \n        <!-- <ion-button *ngIf=\"!showButtonForward\" expand=\"block\" (click)=\"sendAnswer()\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Kirim Jawaban\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button> -->\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/groups/groups.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/groups/groups.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLaporanGroupsGroupsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>List Group</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"subtitle!=''\" style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      Pilih group pertanyaan untuk mulai mengisi laporan\n    </ion-title>\n    \n  </ion-toolbar>\n\n  <!-- <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      <ion-button expand=\"block\" (click)=\"selectTime()\" color=\"warning\" fill=\"solid\">Tambah Laporan</ion-button>\n    </ion-title>\n  </ion-toolbar> -->\n\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"lists.length > 0\" id=\"list-group\">\n    <ion-item *ngFor=\"let item of lists\" lines=\"full\" (click)=\"presentActionSheetSelectPeriode(item)\">\n      <ion-label>\n        <h3>{{item.title}}</h3>\n        <p><span [ngClass]=\"{'type-active' : item.Q_Mingguan.length>0 }\">Mingguan</span>\n          <span [ngClass]=\"{'type-active' : item.Q_Bulanan.length>0 }\">, Bulanan</span>\n          <span [ngClass]=\"{'type-active' : item.Q_Triwulan.length>0 }\">, Triwulan</span></p>\n        <span class=\"range-group\">{{getMonthName(item.month_start)}} {{item.year_start}}\n          <span *ngIf=\"item.is_period=='1'\"> - {{getMonthName(item.month_end)}} {{item.year_end}}</span>\n        </span>\n                </ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  \n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/listlaporan/listlaporan.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/listlaporan/listlaporan.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLaporanListlaporanListlaporanPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      <ion-button expand=\"block\" (click)=\"selectTime()\" color=\"warning\" fill=\"solid\">Tambah Laporan</ion-button>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"lists.length > 0\">\n    <ion-item *ngFor=\"let item of lists\" lines=\"full\" (click)=\"gotoSelectDusun(item)\">\n      <ion-label>\n        <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <!-- <ion-icon slot=\"start\" color=\"medium\" name=\"ellipse-outline\"></ion-icon> -->\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusun/selectdusun.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusun/selectdusun.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLaporanSelectdusunSelectdusunPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{ subtitle }}\n      <br/>\n      {{ subtitle_2 }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <!-- <ion-button (click)=\"presentActionSheet()\">Default</ion-button> -->\n\n  <ion-list *ngIf=\"this.params.selectDesa==1\">\n    <ion-item lines=\"full\" (click)=\"checkBeforeToFormQuestion('desa',{})\">\n      <ion-label><h2>Laporan Untuk Desa</h2>\n      </ion-label>\n\n      <ion-badge color=\"medium\" *ngIf=\"dataDesaFromServer.version>1\">Versi {{dataDesaFromServer.version}}</ion-badge>\n      \n      <ion-icon slot=\"start\" color=\"success\" *ngIf=\"dataDesaFromServer.version>0\" name=\"checkmark-circle\"></ion-icon>\n      <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"dataDesaFromServer.version==0\" name=\"ellipse-outline\"></ion-icon>\n      \n      <ion-icon slot=\"end\" color=\"warning\" *ngIf=\"isDesaTemporarySave\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"medium\"  *ngIf=\"!isDesaTemporarySave\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list *ngIf=\"this.params.selectDusun==1 && arrDusun.length>0\">\n    <ion-list-header>\n          Daftar Dusun\n        </ion-list-header>\n    <ion-item *ngFor=\"let item of arrDusun\" lines=\"full\" (click)=\"checkBeforeToFormQuestion('dusun',item)\">\n      <ion-label><h3>{{ item.name }}</h3>\n      <p>Kepala Dusun : {{ item.head_name }}</p>\n      </ion-label>\n\n      <ion-badge color=\"medium\" *ngIf=\"item.version>1\">Versi {{item.version}}</ion-badge>\n\n      <ion-icon slot=\"start\" color=\"success\" *ngIf=\"item.version>0\" name=\"checkmark-circle\"></ion-icon>\n      <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"item.version==0\" name=\"ellipse-outline\"></ion-icon>\n\n      \n      <ion-icon slot=\"end\" color=\"warning\" *ngIf=\"item.isTemporary\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"medium\" *ngIf=\"!item.isTemporary\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLaporanSelectdusunonlySelectdusunonlyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Pilih Dusun</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      <strong>{{params.label}}</strong>\n      <br/>\n      {{params.range}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"this.params.selectDusun==1 && arrDusun.length>0\">\n    <ion-list-header>\n          Daftar Dusun\n        </ion-list-header>\n    <ion-item *ngFor=\"let item of arrDusun\" lines=\"full\" (click)=\"checkBeforeToFormQuestion(item)\">\n      <ion-label><h3>{{ item.name }}</h3>\n      <p>Kepala Dusun : {{ item.head_name }}</p>\n      </ion-label>\n\n      <ion-badge color=\"medium\" *ngIf=\"item.version>1\">Versi {{item.version}}</ion-badge>\n\n      <ion-icon slot=\"start\" color=\"success\" *ngIf=\"item.version>0\" name=\"checkmark-circle\"></ion-icon>\n      <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"item.version==0 || item.version==null\" name=\"ellipse-outline\"></ion-icon>\n\n      \n      <ion-icon slot=\"end\" color=\"warning\" *ngIf=\"item.isTemporary\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"medium\" *ngIf=\"!item.isTemporary\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectperiode/selectperiode.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectperiode/selectperiode.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLaporanSelectperiodeSelectperiodePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Laporan {{target}} - {{params.type}}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      List Group <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      Laporan {{target}} <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      Pilih Periode {{params.type}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n  <ion-list *ngIf=\"listTime.length > 0\">\n    <ion-list-header>\n          {{params.title}}\n        </ion-list-header>\n    <ion-item *ngFor=\"let item of sortDESCBy('sort')\" (click)=\"gotoFormLaporan(item)\" lines=\"full\">\n      <ion-label>\n        <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      \n\n      <ion-icon slot=\"start\" color=\"success\" *ngIf=\"item.status==2\" name=\"checkmark-circle\"></ion-icon>\n      <ion-icon slot=\"start\" color=\"warning\"  *ngIf=\"item.status == 1\" name=\"timer\"></ion-icon>\n      <ion-icon slot=\"start\" color=\"medium\" *ngIf=\"item.status==0\" name=\"ellipse-outline\"></ion-icon>\n\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selecttime/selecttime.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selecttime/selecttime.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLaporanSelecttimeSelecttimePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{title}} <ion-icon name=\"chevron-forward-outline\"></ion-icon> {{ subtitle }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <ion-list *ngIf=\"listTime.length > 0\">\n    <!-- <ion-list-header>\n          Daftar Minggu\n        </ion-list-header> -->\n    <ion-item *ngFor=\"let item of listTime\" (click)=\"gotoSelectDusun(item)\" lines=\"full\">\n      <ion-label>\n        <h3>{{item.label}}</h3>\n              <p>{{item.range}}</p>\n      </ion-label>\n      <ion-button *ngIf=\"item.checked\" slot=\"end\" color=\"success\" size=\"small\">Sekarang</ion-button>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/viewlaporan/viewlaporan.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/viewlaporan/viewlaporan.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLaporanViewlaporanViewlaporanPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar style=\"height: 57px;padding-top: 5px;\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Laporan {{ title }}</ion-title>\n\n    \n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"subtitle!=''\" style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{ subtitle }}<br/>{{subtitle_2}}<br/>{{subtitle_3}}\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div *ngIf=\"listQuestion.length > 0\">\n    <div *ngFor=\"let item of listQuestion\">\n      \n      <ion-card *ngIf=\"item.Answers.length > 0\">\n        <!-- <ion-item style=\"--background: #eaeaea;--padding-bottom:0px;--inner-padding-bottom:0px;\" lines=\"none\">\n          \n          <ion-label class=\"label-title\">\n            <div style=\"margin-bottom: 15px;\"  [innerHTML]=\"item?.question\"></div>\n          </ion-label>          \n        </ion-item> -->\n\n        <ion-card-content>\n\n          <ion-label class=\"label-title\" [innerHTML]=\"item?.question\"></ion-label>\n\n          <!-- Boolean -->\n           <ion-grid *ngIf=\"item.id_question_type == 2 && item.Answers.length>0\" fixed=\"true\">\n             <ion-row>\n               <ion-col class=\"boolean-1\">\n                <div [ngClass]=\"{'boolean-active' : item.Answers[0].id_question_option == item.Options[0].id }\" [innerHTML]=\"item.Options[0]?.option\"></div>\n              </ion-col>\n               <ion-col class=\"boolean-2\">\n                <div [ngClass]=\"{'boolean-active' : item.Answers[0].id_question_option == item.Options[1].id }\" [innerHTML]=\"item.Options[1]?.option\"></div>\n              </ion-col>\n             </ion-row>\n           </ion-grid>\n\n\n        <!-- Essay text -->\n        <div *ngIf=\"item.id_question_type == 1\">\n          <b>Jawaban : </b>{{item.Answers[0].essay_text}}\n        </div>\n\n        <!-- Essay number -->\n        <div *ngIf=\"item.id_question_type == 5\">\n          <b>Jawaban : </b>{{item.Answers[0].essay_number}}\n        </div>\n\n        <!-- Essay file -->\n        <div *ngIf=\"item.id_question_type == 6\">\n          <b>Jawaban : </b>\n          <div>\n            <img src=\"https://movtaskforce.oss-ap-southeast-5.aliyuncs.com/answers/{{item.Answers[0].essay_file}}\"  alt=\"{{item.Answers[0].essay_file}}\"/>\n          </div>\n        </div>\n\n\n        <ion-list *ngIf=\"item.id_question_type == 3 && item.Options.length>0  && item.Answers.length>0\">\n          <ion-item *ngFor=\"let option of item.Options\" lines=\"full\">\n            <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\n\n            <ion-icon slot=\"start\" *ngIf=\"item.Answers[0].id_question_option != option.id\" color=\"medium\" name=\"ellipse-outline\"></ion-icon>\n            <ion-icon slot=\"start\" *ngIf=\"item.Answers[0].id_question_option == option.id\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\n          </ion-item>\n        </ion-list>\n\n        <ion-list *ngIf=\"item.id_question_type == 4 && item.Options.length>0  && item.Answers.length>0\">\n          <ion-item *ngFor=\"let option of item.Options\" lines=\"full\">\n            <ion-label class=\"label-title\" [innerHTML]=\"option?.option\"></ion-label>\n\n            <ion-icon slot=\"end\" *ngIf=\"!item.Answers.includes(option.id)\" color=\"medium\" name=\"ellipse-outline\"></ion-icon>\n            <ion-icon slot=\"end\" *ngIf=\"item.Answers.includes(option.id)\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\n          </ion-item>\n        </ion-list>\n\n\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/laporan/formlaporan/formlaporan.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/laporan/formlaporan/formlaporan.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLaporanFormlaporanFormlaporanPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #container {\n  padding: 10px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 47%;\n  transform: translateY(-50%);\n}\n\nion-content ion-item {\n  border: 1px solid #eaeaea;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n\nion-footer ion-toolbar {\n  --background: #2f9495 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9mb3JtbGFwb3Jhbi9mb3JtbGFwb3Jhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFTRTtFQUNFLGFBQUE7RUFHQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBUko7O0FBV0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFjQTtFQUNFLG9DQUFBO0FBWEY7O0FBZUU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvcmFuL2Zvcm1sYXBvcmFuL2Zvcm1sYXBvcmFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA0NyU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/laporan/formlaporan/formlaporan.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/laporan/formlaporan/formlaporan.page.ts ***!
      \***************************************************************/

    /*! exports provided: FormlaporanPage */

    /***/
    function srcAppPagesLaporanFormlaporanFormlaporanPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormlaporanPage", function () {
        return FormlaporanPage;
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js"); // import { resolve } from 'dns';


      var FormlaporanPage = /*#__PURE__*/function () {
        function FormlaporanPage(route, NavController, apiService, toastController, alertController, loadingController, camera, imagePicker) {
          _classCallCheck(this, FormlaporanPage);

          this.route = route;
          this.NavController = NavController;
          this.apiService = apiService;
          this.toastController = toastController;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.camera = camera;
          this.imagePicker = imagePicker;
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
          localStorage.setItem('listBack', JSON.stringify([])); // this.ngitung();
        }

        _createClass(FormlaporanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getQuestion();
          }
        }, {
          key: "ngitung",
          value: function ngitung() {}
        }, {
          key: "presentToast",
          value: function presentToast(color, header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        header: header,
                        message: message,
                        color: color,
                        mode: "ios",
                        position: "middle",
                        duration: 3000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: message,
                        mode: 'ios',
                        duration: 2000
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context2.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "temporarySave",
          value: function temporarySave() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Warning !',
                        message: 'Simpan Laporan Sementara dapat hilang jika Anda membersihkan data Aplikasi ini!',
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: [{
                          text: 'Batal',
                          role: 'cancel'
                        }, {
                          text: 'Simpan',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      this.presentLoading('Menyimpan laporan...');
                                      _context3.next = 3;
                                      return this.beforeSendAnswer(true);

                                    case 3:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getQuestion",
          value: function getQuestion() {
            var _this2 = this;

            this.listQuestion = [];
            var glue = this.params.glue;
            var ans_id = this.params.ans_id;
            this.subscribe = this.apiService.get('v2/user_area_questionnaire?id_questionnaire=' + this.params.id_questionnaire + '&glue=' + glue + '&ans_id=' + ans_id, {}).subscribe(function (data) {
              // this.catecories = data.List;
              // console.log(data);
              if (data.user_area_report.length > 0) {
                var q = data.user_area_report[0];
                var geo_id = localStorage.getItem('geo_id');
                localStorage.setItem(_this2.params.id_questionnaire + '_drafQuestions_' + geo_id, JSON.stringify(q.Question));
                _this2.listQuestion = q.Question;
                _this2.question_total = _this2.listQuestion.length;

                _this2.getNextQuestion(0, 'next'); // console.log(this.listQuestion);

              }
            }, function (error) {
              var geo_id = localStorage.getItem('geo_id');
              var drafQuestions = localStorage.getItem(_this2.params.id_questionnaire + '_drafQuestions_' + geo_id);

              if (drafQuestions != null && drafQuestions != '') {
                _this2.listQuestion = JSON.parse(drafQuestions);
                _this2.question_total = _this2.listQuestion.length;

                _this2.getNextQuestion(0, 'next');
              }
            });
          }
        }, {
          key: "getNextQuestion",
          value: function getNextQuestion(indexNumber, action) {
            if (action == 'back') {
              // last id back
              var listBack = localStorage.getItem('listBack');
              listBack = JSON.parse(listBack);
              var lastBack = listBack[listBack.length - 1];

              for (var q = 0; q < this.listQuestion.length; q++) {
                var element = this.listQuestion[q];

                if (element['id'] == lastBack) {
                  indexNumber = q;
                }
              } // new list Back


              var newListBack = [];

              for (var index = 0; index < listBack.length; index++) {
                var _element = listBack[index];

                if (_element != lastBack) {
                  newListBack.push(_element);
                }
              }

              localStorage.setItem('listBack', JSON.stringify(newListBack)); // console.log('indexNumber', indexNumber);

              if (indexNumber > 0) {
                this.showButtonBack = true;
              } else {
                this.showButtonBack = false;
              }

              this.number_of_back = indexNumber - 1; // Untuk indikasi nomer sekarang

              this.question_current = indexNumber + 1;
              this.number_of_forward = this.question_current; // Untuk menampilkan pertanyaan sekarang

              this.currentQuestion = this.listQuestion[indexNumber]; // Untuk memberi default isi

              this.setDrafFillAnswer(indexNumber); // set re-fill draft

              this.showCurrentQuestion = true;
            } else {
              if (Object.keys(this.currentQuestion).length !== 0) {
                // console.log('currentQuestion', this.currentQuestion);
                var dataListBack = [];

                var _listBack = localStorage.getItem('listBack');

                dataListBack = JSON.parse(_listBack);
                dataListBack.push(this.currentQuestion['id']);
                localStorage.setItem('listBack', JSON.stringify(dataListBack));
              }

              if (indexNumber == this.listQuestion.length) {
                var drafAns = this.drafAnswere(indexNumber - 1);

                if (drafAns.result) {
                  this.showButtonSend = true;
                } else {
                  this.presentToast('warning', 'Warning', 'Wajib diisi');
                }
              } else {
                this.showButtonSend = false; // simpan jawaban sementara

                var cahngeQuestion = true;
                var indexNumberSaveDraf = action == 'next' ? indexNumber - 1 : indexNumber + 1;
                var go_to_id = '';
                var back_to_id = '';

                if (indexNumberSaveDraf > -1) {
                  var _drafAns = this.drafAnswere(indexNumberSaveDraf);

                  console.log('drafAns', _drafAns);
                  cahngeQuestion = _drafAns.result;
                  go_to_id = _drafAns.go_to_id;
                  back_to_id = _drafAns.back_to_id;
                }

                if (cahngeQuestion) {
                  if (indexNumber > 0) {
                    this.showButtonBack = true;
                  } else {
                    this.showButtonBack = false;
                  }

                  if (go_to_id != '') {
                    if (parseInt(go_to_id) == 0) {
                      this.showButtonSend = true;
                    } else {
                      for (var _q = 0; _q < this.listQuestion.length; _q++) {
                        var _element2 = this.listQuestion[_q];

                        if (_element2.id_questionnaire_detail == go_to_id) {
                          indexNumber = _q;
                        }
                      }
                    }
                  } // set back id


                  if (back_to_id != '') {
                    for (var _q2 = 0; _q2 < this.listQuestion.length; _q2++) {
                      var _element3 = this.listQuestion[_q2];

                      if (_element3.id_questionnaire_detail == back_to_id) {
                        this.number_of_back = _q2;
                      }
                    }
                  } // console.log(this.number_of_back);
                  // Untuk indikasi nomer sekarang


                  this.question_current = parseInt(go_to_id) == 0 ? this.question_total : indexNumber + 1;
                  this.number_of_forward = this.question_current; // Untuk menampilkan pertanyaan sekarang

                  this.currentQuestion = this.listQuestion[indexNumber]; // Untuk memberi default isi

                  this.setDrafFillAnswer(indexNumber); // set re-fill draft

                  this.showCurrentQuestion = true;
                } else {
                  this.presentToast('warning', 'Warning', 'Wajib diisi');
                }
              }
            }
          }
        }, {
          key: "setDrafFillAnswer",
          value: function setDrafFillAnswer(indexNumber) {
            var Questions = this.listQuestion[indexNumber];
            var id_questionnaire = this.params.id_questionnaire;
            var glue = this.params.glue;
            var geo_id = localStorage.getItem('geo_id');
            var temporarySave = localStorage.getItem(glue + '_' + geo_id);
            var locationLocalStorage = temporarySave != null && temporarySave != '' ? glue + '_' + geo_id : id_questionnaire + '_drafAnswer_' + geo_id;
            var id_question = Questions.id;
            var draf = localStorage.getItem(locationLocalStorage);

            if (draf != null && draf != '') {
              var dataDraf = JSON.parse(draf);

              for (var i = 0; i < dataDraf.length; i++) {
                var element = dataDraf[i];

                if (element.id_question == id_question) {
                  if (element.answer.length > 0) {
                    if (Questions.id_question_type != 4) {
                      if (Questions.id_question_type == 5) {
                        this.singleAnswer = element.answer[0].essay_number;
                      } else if (Questions.id_question_type == 1) {
                        this.singleAnswer = element.answer[0].essay_text;
                      } else if (Questions.id_question_type == 6) {
                        this.singleAnswer = element.answer[0].essay_file;
                      } else {
                        this.singleAnswer = element.answer[0].id_question_option;
                      }
                    } else {
                      var newArrFromDraf = [];

                      for (var ck = 0; ck < element.answer.length; ck++) {
                        var c_elmt = element.answer[ck];
                        newArrFromDraf.push(c_elmt.id_question_option);
                      }

                      localStorage.setItem('multiAnswer', JSON.stringify(newArrFromDraf)); // set

                      for (var q = 0; q < Questions.Options.length; q++) {
                        var q_elmt = Questions.Options[q];
                        Questions.Options[q].isChecked = false;

                        for (var _ck = 0; _ck < element.answer.length; _ck++) {
                          var _c_elmt = element.answer[_ck];

                          if (q_elmt.id == _c_elmt.id_question_option) {
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
        }, {
          key: "drafAnswere",
          value: function drafAnswere(indexNumber) {
            var Questions = this.listQuestion[indexNumber];
            var id_question = Questions.id;
            var id_question_option = '';
            var essay_text = '';
            var essay_file = '';
            var essay_number = '';
            var result = true;
            var answer = [];
            var go_to_id = '';
            var back_to_id = Questions.id_questionnaire_detail;

            if (Questions.id_question_type != 4) {
              console.log('this.singleAnswer', this.singleAnswer);
              console.log('Questions', Questions);

              if (this.singleAnswer != '' || parseInt(this.singleAnswer) >= 0) {
                // essay number
                if (Questions.id_question_type == 5) {
                  go_to_id = Questions.go_to_id != null && Questions.go_to_id != '' ? Questions.go_to_id : '';
                  essay_number = this.singleAnswer;
                } // essay text
                else if (Questions.id_question_type == 1) {
                    go_to_id = Questions.go_to_id != null && Questions.go_to_id != '' ? Questions.go_to_id : '';
                    essay_text = this.singleAnswer;
                  } // essay file
                  else if (Questions.id_question_type == 6) {
                      go_to_id = Questions.go_to_id != null && Questions.go_to_id != '' ? Questions.go_to_id : '';
                      essay_file = this.singleAnswer;
                    } else {
                      id_question_option = this.singleAnswer;

                      for (var q = 0; q < Questions.Options.length; q++) {
                        var element = Questions.Options[q];

                        if (element.id == id_question_option) {
                          go_to_id = element.go_to_id != null && element.go_to_id != '' ? element.go_to_id : '';
                        }
                      }
                    }

                answer.push({
                  id_question_option: id_question_option,
                  essay_text: essay_text,
                  essay_file: essay_file,
                  essay_number: essay_number
                });
                this.singleAnswer = '';
              } else {
                console.log('err sini');
                result = false;
              }
            } else {
              var multiAnswer = localStorage.getItem('multiAnswer');
              multiAnswer = JSON.parse(multiAnswer); // Multi answer

              if (multiAnswer.length > 0) {
                for (var m = 0; m < multiAnswer.length; m++) {
                  var _element4 = multiAnswer[m];
                  answer.push({
                    id_question_option: _element4,
                    essay_text: essay_text,
                    essay_number: essay_number,
                    essay_file: essay_file
                  });
                }

                localStorage.setItem('multiAnswer', JSON.stringify([]));
              } else {
                result = false;
              }
            }

            console.log('result', result);

            if (result) {
              var arrAnswere = {
                id_question: id_question,
                id_question_type: Questions.id_question_type,
                answer: answer
              }; // save in localstorage

              var id_questionnaire = this.params.id_questionnaire;
              var glue = this.params.glue;
              var geo_id = localStorage.getItem('geo_id');
              var temporarySave = localStorage.getItem(glue + '_' + geo_id);
              var locationLocalStorage = temporarySave != null && temporarySave != '' ? glue : id_questionnaire + '_drafAnswer_' + geo_id;
              var draf = localStorage.getItem(locationLocalStorage);
              var newDataDraf = [];

              if (draf != null && draf != '') {
                var dataDraf = JSON.parse(draf);

                for (var i = 0; i < dataDraf.length; i++) {
                  var _element5 = dataDraf[i];

                  if (_element5.id_question != id_question) {
                    newDataDraf.push(_element5);
                  }
                }
              }

              newDataDraf.push(arrAnswere);
              localStorage.setItem(locationLocalStorage, JSON.stringify(newDataDraf));
            }

            var feedback = {
              result: result,
              go_to_id: go_to_id,
              back_to_id: back_to_id
            };
            return feedback;
          }
        }, {
          key: "sendAnswer",
          value: function sendAnswer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              var dataAnswers, params;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.presentLoading('Mengirim laporan...');
                      _context6.next = 3;
                      return this.beforeSendAnswer(false);

                    case 3:
                      _context6.next = 5;
                      return this.sendToServer();

                    case 5:
                      dataAnswers = _context6.sent;
                      params = {
                        ans_id: this.params.ans_id,
                        glue: this.params.glue,
                        user_area_id: this.params.user_area_id,
                        answer: JSON.stringify(dataAnswers)
                      };
                      this.subscribe = this.apiService.post('v2/user_area_questionnaire', params).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var _this4 = this;

                          var geo_id, temporarySave, newTemp, index, element;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  geo_id = localStorage.getItem('geo_id');
                                  temporarySave = localStorage.getItem('temporarySave_' + geo_id);
                                  temporarySave = JSON.parse(temporarySave);
                                  newTemp = [];

                                  for (index = 0; index < temporarySave.length; index++) {
                                    element = temporarySave[index];

                                    if (element != this.params.glue) {
                                      newTemp.push(element);
                                    }
                                  }

                                  localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp)); // console.log(data);

                                  setTimeout(function () {
                                    _this4.presentToast('success', 'Sukses', 'Data tersimpan');

                                    _this4.goBack(1);
                                  }, 2000);

                                case 7:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }, function (error) {
                        // this.presentAlertConfirmError();
                        console.log(error);

                        _this3.presentToast('error', 'Gagal', 'Tidak tersimpan');
                      });

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "sendToServer",
          value: function sendToServer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var glue, id_questionnaire, geo_id, data_answer, drafQuestions, answers, go_to_id, i, element, answer, a, element_answer, ans_id_question_opstion, c, c_e, newAns;
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  glue = this.params.glue;
                                  id_questionnaire = this.params.id_questionnaire;
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
                                  } else {
                                    reject(answers);
                                  }

                                case 11:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      });

                    case 2:
                      return _context8.abrupt("return", _context8.sent);

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }, {
          key: "beforeSendAnswer",
          value: function beforeSendAnswer(back) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var _this7 = this;

                          var glue, geo_id, temp, NewTemp, dataTemp, i, element, id_questionnaire, temporarySave, locationLocalStorage, draf;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  try {
                                    glue = this.params.glue;
                                    geo_id = localStorage.getItem('geo_id');
                                    temp = localStorage.getItem('temporarySave_' + geo_id);
                                    NewTemp = [];

                                    if (temp != null && temp != '') {
                                      dataTemp = JSON.parse(temp);

                                      for (i = 0; i < dataTemp.length; i++) {
                                        element = dataTemp[i];

                                        if (element != glue) {
                                          NewTemp.push(element);
                                        }
                                      }
                                    }

                                    NewTemp.push(glue);
                                    localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(NewTemp));
                                    id_questionnaire = this.params.id_questionnaire;
                                    temporarySave = localStorage.getItem(glue + '_' + geo_id);
                                    locationLocalStorage = temporarySave != null && temporarySave != '' ? glue : id_questionnaire + '_drafAnswer_' + geo_id;
                                    draf = localStorage.getItem(locationLocalStorage);
                                    localStorage.setItem(glue + '_' + geo_id, draf);

                                    if (back) {
                                      setTimeout(function () {
                                        _this7.presentToast('success', 'Sukses', 'Data tersimpan');

                                        _this7.goBack(1);
                                      }, 2000);
                                    }

                                    resolve('');
                                  } catch (err) {
                                    reject(err);
                                  }

                                case 1:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      });

                    case 2:
                      return _context10.abrupt("return", _context10.sent);

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }, {
          key: "selectSize",
          value: function selectSize(event) {
            var valChange = event.detail.value;
            var multiAnswer = localStorage.getItem('multiAnswer');
            multiAnswer = JSON.parse(multiAnswer);
            var newArr = [];

            if (multiAnswer.length > 0) {
              for (var i = 0; i < multiAnswer.length; i++) {
                var element = multiAnswer[i];

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
        }, {
          key: "radioGroupChange",
          value: function radioGroupChange(event) {
            this.singleAnswer = event.detail.value;
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            this.singleAnswer = event.detail.value;
          }
        }, {
          key: "getImagesFromGalery",
          value: function getImagesFromGalery() {
            var _this8 = this;

            var options = {
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
            }; // this.imageResponse = [];

            this.imagePicker.getPictures(options).then(function (results) {
              console.log(results); // for (var i = 0; i < results.length; i++) {
              //   this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
              //   console.log('res : ', results[i])
              // }

              var base64Image = 'data:image/jpeg;base64,' + results[0];
              _this8.singleAnswer = base64Image;

              var file = _this8.dataURItoBlob(base64Image);

              console.log(file); // this.viewImage = 
            }, function (err) {
              alert(err);
            });
          }
        }, {
          key: "getImagesFromCamera",
          value: function getImagesFromCamera() {
            var _this9 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              targetWidth: 720,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.CAMERA
            };
            this.camera.getPicture(options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              _this9.singleAnswer = 'data:image/jpeg;base64,' + imageData;
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            var bb = new Blob([ab], {
              type: mimeString
            });
            return bb;
          }
        }, {
          key: "goBack",
          value: function goBack(refresh) {
            if (this.params.page_from == 'selectdusun') {
              var gotoSelectDusun = localStorage.getItem('gotoSelectDusun');
              var newParams = JSON.parse(gotoSelectDusun);
              this.NavController.navigateBack(['/laporan/selectdusun', newParams], {
                replaceUrl: true
              });
            } else if (this.params.page_from == 'selectperiode') {
              var _gotoSelectDusun = localStorage.getItem('gotoselectperiode');

              var _newParams = JSON.parse(_gotoSelectDusun);

              _newParams['refresh'] = refresh;
              this.NavController.navigateBack(['/laporan/selectperiode', _newParams], {
                replaceUrl: true
              });
            } else if (this.params.page_from == 'selectdusunonly') {
              var gotoselectdusunonly = localStorage.getItem('gotoselectdusunonly');

              var _newParams2 = JSON.parse(gotoselectdusunonly);

              _newParams2['refresh'] = refresh;
              this.NavController.navigateBack(['/laporan/selectdusunonly', _newParams2], {
                replaceUrl: true
              });
            } else {
              this.NavController.navigateBack(['/home/temporaryreport', {}], {
                replaceUrl: true
              });
            }
          }
        }]);

        return FormlaporanPage;
      }();

      FormlaporanPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"]
        }];
      };

      FormlaporanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formlaporan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./formlaporan.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/formlaporan/formlaporan.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./formlaporan.page.scss */
        "./src/app/pages/laporan/formlaporan/formlaporan.page.scss"))["default"]]
      })], FormlaporanPage);
      /***/
    },

    /***/
    "./src/app/pages/laporan/groups/groups.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/laporan/groups/groups.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLaporanGroupsGroupsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content #list-group .range-group {\n  color: #fffdfd;\n  background: #92949c9e;\n  font-size: 12px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 3px;\n}\n\nion-content #list-group p {\n  color: #e6e6e6;\n}\n\nion-content #list-group .type-active {\n  color: #576c7d;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9ncm91cHMvZ3JvdXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLHFCQUFBO0VBQ0EsY0FBQTtBQURSOztBQVVJO0VBQ0ksa0JBQUE7QUFQUjs7QUFZUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFWWjs7QUFhUTtFQUNJLGNBQUE7QUFYWjs7QUFjUTtFQUNJLGNBQUE7QUFaWjs7QUFxQkE7RUFDSSxvQ0FBQTtBQWxCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhcG9yYW4vZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMzBweDtcclxuXHJcbiAgICAjbGlzdExhcG9yYW4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICNsaXN0LWdyb3VwIHtcclxuXHJcbiAgICAgICAgLnJhbmdlLWdyb3VwIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZkZmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5Mjk0OWM5ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlNmU2ZTY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHlwZS1hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU3NmM3ZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/laporan/groups/groups.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/laporan/groups/groups.page.ts ***!
      \*****************************************************/

    /*! exports provided: GroupsPage */

    /***/
    function srcAppPagesLaporanGroupsGroupsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsPage", function () {
        return GroupsPage;
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


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");

      var GroupsPage = /*#__PURE__*/function () {
        function GroupsPage(route, router, NavController, apiService, alertController, actionSheetController) {
          _classCallCheck(this, GroupsPage);

          this.route = route;
          this.router = router;
          this.NavController = NavController;
          this.apiService = apiService;
          this.alertController = alertController;
          this.actionSheetController = actionSheetController;
          this.lists = [];
        }

        _createClass(GroupsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getListActiveGroup();
          }
        }, {
          key: "presentAlertNoQuestion",
          value: function presentAlertNoQuestion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Info !',
                        message: 'Belum ada pertanyaan yang diterbitkan',
                        mode: "ios",
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          cssClass: 'secondary'
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
          key: "presentActionSheetSelectPeriode",
          value: function presentActionSheetSelectPeriode(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this10 = this;

              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!(item.Q_Mingguan.length == 0 && item.Q_Bulanan.length == 0 && item.Q_Triwulan.length == 0)) {
                        _context12.next = 4;
                        break;
                      }

                      this.presentAlertNoQuestion();
                      _context12.next = 15;
                      break;

                    case 4:
                      buttons = [];

                      if (item.Q_Mingguan.length > 0) {
                        buttons.push({
                          text: 'Mingguan',
                          handler: function handler() {
                            _this10.gotoSelectPeriode(item, 'Mingguan');
                          }
                        });
                      }

                      if (item.Q_Bulanan.length > 0) {
                        buttons.push({
                          text: 'Bulanan',
                          handler: function handler() {
                            _this10.gotoSelectPeriode(item, 'Bulanan');
                          }
                        });
                      }

                      if (item.Q_Triwulan.length > 0) {
                        buttons.push({
                          text: 'Triwulan',
                          handler: function handler() {
                            _this10.gotoSelectPeriode(item, 'Triwulan');
                          }
                        });
                      }

                      buttons.push({
                        text: 'Tutup',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      });
                      console.log('buttons', buttons);
                      _context12.next = 12;
                      return this.actionSheetController.create({
                        header: 'Pilih Periode',
                        cssClass: 'my-custom-class',
                        mode: "ios",
                        buttons: buttons
                      });

                    case 12:
                      actionSheet = _context12.sent;
                      _context12.next = 15;
                      return actionSheet.present();

                    case 15:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "presentAlertSelectTarget",
          value: function presentAlertSelectTarget(id_questionnaire_desa, id_questionnaire_dusun) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this11 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Target Laporan',
                        mode: "ios",
                        message: 'Pilih target pengisian',
                        buttons: [{
                          text: 'Desa',
                          cssClass: 'specialClass',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                              var dataParam;
                              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                while (1) {
                                  switch (_context13.prev = _context13.next) {
                                    case 0:
                                      _context13.prev = 0;
                                      _context13.next = 3;
                                      return this.getPeriode(id_questionnaire_desa);

                                    case 3:
                                      dataParam = _context13.sent;
                                      this.NavController.navigateForward(['/laporan/selectperiode', dataParam[0]]);
                                      _context13.next = 10;
                                      break;

                                    case 7:
                                      _context13.prev = 7;
                                      _context13.t0 = _context13["catch"](0);

                                      if (_context13.t0.status == 401) {
                                        this.alertToRelogin();
                                      }

                                    case 10:
                                    case "end":
                                      return _context13.stop();
                                  }
                                }
                              }, _callee13, this, [[0, 7]]);
                            }));
                          }
                        }, {
                          text: 'Dusun',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                              var dataParam;
                              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                                while (1) {
                                  switch (_context14.prev = _context14.next) {
                                    case 0:
                                      _context14.prev = 0;
                                      _context14.next = 3;
                                      return this.getPeriode(id_questionnaire_dusun);

                                    case 3:
                                      dataParam = _context14.sent;
                                      this.NavController.navigateForward(['/laporan/selectperiode', dataParam[0]]);
                                      _context14.next = 10;
                                      break;

                                    case 7:
                                      _context14.prev = 7;
                                      _context14.t0 = _context14["catch"](0);

                                      if (_context14.t0.status == 401) {
                                        this.alertToRelogin();
                                      }

                                    case 10:
                                    case "end":
                                      return _context14.stop();
                                  }
                                }
                              }, _callee14, this, [[0, 7]]);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context15.sent;
                      _context15.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "alertToRelogin",
          value: function alertToRelogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this12 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
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

                            _this12.router.navigate(['front/']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context16.sent;
                      _context16.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "getListActiveGroup",
          value: function getListActiveGroup() {
            var _this13 = this;

            this.subscribe = this.apiService.get('v2/report_active_group', {}).subscribe(function (data) {
              _this13.lists = data;
              console.log(_this13.lists);
            }, function (error) {
              if (error.status == 401) {
                _this13.alertToRelogin();
              }
            });
          }
        }, {
          key: "gotoSelectPeriode",
          value: function gotoSelectPeriode(item, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var id_questionnaire_desa, id_questionnaire_dusun, index, element, id_questionnaire, dataParam;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!(item['Q_' + type].length > 1)) {
                        _context17.next = 7;
                        break;
                      }

                      id_questionnaire_desa = '';
                      id_questionnaire_dusun = '';

                      for (index = 0; index < item['Q_' + type].length; index++) {
                        element = item['Q_' + type][index];

                        if (element.target == 0) {
                          id_questionnaire_dusun = element.id;
                        } else if (element.target == 1) {
                          id_questionnaire_desa = element.id;
                        }
                      }

                      this.presentAlertSelectTarget(id_questionnaire_desa, id_questionnaire_dusun);
                      _context17.next = 18;
                      break;

                    case 7:
                      id_questionnaire = item['Q_' + type][0].id;
                      _context17.prev = 8;
                      _context17.next = 11;
                      return this.getPeriode(id_questionnaire);

                    case 11:
                      dataParam = _context17.sent;
                      this.NavController.navigateForward(['/laporan/selectperiode', dataParam[0]]);
                      _context17.next = 18;
                      break;

                    case 15:
                      _context17.prev = 15;
                      _context17.t0 = _context17["catch"](8);

                      if (_context17.t0.status == 401) {
                        this.alertToRelogin();
                      }

                    case 18:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[8, 15]]);
            }));
          }
        }, {
          key: "getPeriode",
          value: function getPeriode(id_questionnaire) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      return _context19.abrupt("return", new Promise(function (resolve, rejected) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                          return regeneratorRuntime.wrap(function _callee18$(_context18) {
                            while (1) {
                              switch (_context18.prev = _context18.next) {
                                case 0:
                                  try {
                                    this.subscribe = this.apiService.get('v2/report_show_periode?id_questionnaire=' + id_questionnaire, {}).subscribe(function (data) {
                                      resolve(data);
                                    }, function (error) {
                                      rejected(error);
                                    });
                                  } catch (err) {
                                    rejected(err);
                                  }

                                case 1:
                                case "end":
                                  return _context18.stop();
                              }
                            }
                          }, _callee18, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }));
          }
        }, {
          key: "getMonthName",
          value: function getMonthName(number) {
            return moment__WEBPACK_IMPORTED_MODULE_4__().month(parseInt(number) - 1).format('MMMM');
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/home'], {
              replaceUrl: true
            });
          }
        }]);

        return GroupsPage;
      }();

      GroupsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }];
      };

      GroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./groups.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/groups/groups.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./groups.page.scss */
        "./src/app/pages/laporan/groups/groups.page.scss"))["default"]]
      })], GroupsPage);
      /***/
    },

    /***/
    "./src/app/pages/laporan/laporan-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/laporan/laporan-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: LaporanPageRoutingModule */

    /***/
    function srcAppPagesLaporanLaporanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LaporanPageRoutingModule", function () {
        return LaporanPageRoutingModule;
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


      var _formlaporan_formlaporan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./formlaporan/formlaporan.page */
      "./src/app/pages/laporan/formlaporan/formlaporan.page.ts");
      /* harmony import */


      var _selecttime_selecttime_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./selecttime/selecttime.page */
      "./src/app/pages/laporan/selecttime/selecttime.page.ts");
      /* harmony import */


      var _selectdusun_selectdusun_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./selectdusun/selectdusun.page */
      "./src/app/pages/laporan/selectdusun/selectdusun.page.ts");
      /* harmony import */


      var _listlaporan_listlaporan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listlaporan/listlaporan.page */
      "./src/app/pages/laporan/listlaporan/listlaporan.page.ts");
      /* harmony import */


      var _viewlaporan_viewlaporan_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./viewlaporan/viewlaporan.page */
      "./src/app/pages/laporan/viewlaporan/viewlaporan.page.ts");
      /* harmony import */


      var _groups_groups_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./groups/groups.page */
      "./src/app/pages/laporan/groups/groups.page.ts");
      /* harmony import */


      var _selectperiode_selectperiode_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./selectperiode/selectperiode.page */
      "./src/app/pages/laporan/selectperiode/selectperiode.page.ts");
      /* harmony import */


      var _selectdusunonly_selectdusunonly_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./selectdusunonly/selectdusunonly.page */
      "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.ts");

      var routes = [{
        path: 'formlaporan',
        component: _formlaporan_formlaporan_page__WEBPACK_IMPORTED_MODULE_3__["FormlaporanPage"]
      }, {
        path: 'selecttime',
        component: _selecttime_selecttime_page__WEBPACK_IMPORTED_MODULE_4__["SelecttimePage"]
      }, {
        path: 'selectdusun',
        component: _selectdusun_selectdusun_page__WEBPACK_IMPORTED_MODULE_5__["SelectdusunPage"]
      }, {
        path: 'listlaporan',
        component: _listlaporan_listlaporan_page__WEBPACK_IMPORTED_MODULE_6__["ListlaporanPage"]
      }, {
        path: 'viewlaporan',
        component: _viewlaporan_viewlaporan_page__WEBPACK_IMPORTED_MODULE_7__["ViewlaporanPage"]
      }, {
        path: 'groups',
        component: _groups_groups_page__WEBPACK_IMPORTED_MODULE_8__["GroupsPage"]
      }, {
        path: 'selectperiode',
        component: _selectperiode_selectperiode_page__WEBPACK_IMPORTED_MODULE_9__["SelectperiodePage"]
      }, {
        path: 'selectdusunonly',
        component: _selectdusunonly_selectdusunonly_page__WEBPACK_IMPORTED_MODULE_10__["SelectdusunonlyPage"]
      }];

      var LaporanPageRoutingModule = function LaporanPageRoutingModule() {
        _classCallCheck(this, LaporanPageRoutingModule);
      };

      LaporanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LaporanPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/laporan/laporan.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/laporan/laporan.module.ts ***!
      \*************************************************/

    /*! exports provided: LaporanPageModule */

    /***/
    function srcAppPagesLaporanLaporanModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LaporanPageModule", function () {
        return LaporanPageModule;
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


      var _laporan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./laporan-routing.module */
      "./src/app/pages/laporan/laporan-routing.module.ts");
      /* harmony import */


      var _formlaporan_formlaporan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formlaporan/formlaporan.page */
      "./src/app/pages/laporan/formlaporan/formlaporan.page.ts");
      /* harmony import */


      var _selecttime_selecttime_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./selecttime/selecttime.page */
      "./src/app/pages/laporan/selecttime/selecttime.page.ts");
      /* harmony import */


      var _selectdusun_selectdusun_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./selectdusun/selectdusun.page */
      "./src/app/pages/laporan/selectdusun/selectdusun.page.ts");
      /* harmony import */


      var _listlaporan_listlaporan_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./listlaporan/listlaporan.page */
      "./src/app/pages/laporan/listlaporan/listlaporan.page.ts");
      /* harmony import */


      var _viewlaporan_viewlaporan_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./viewlaporan/viewlaporan.page */
      "./src/app/pages/laporan/viewlaporan/viewlaporan.page.ts");
      /* harmony import */


      var _groups_groups_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./groups/groups.page */
      "./src/app/pages/laporan/groups/groups.page.ts");
      /* harmony import */


      var _selectperiode_selectperiode_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./selectperiode/selectperiode.page */
      "./src/app/pages/laporan/selectperiode/selectperiode.page.ts");
      /* harmony import */


      var _selectdusunonly_selectdusunonly_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./selectdusunonly/selectdusunonly.page */
      "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.ts");

      var LaporanPageModule = function LaporanPageModule() {
        _classCallCheck(this, LaporanPageModule);
      };

      LaporanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _laporan_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaporanPageRoutingModule"]],
        declarations: [_formlaporan_formlaporan_page__WEBPACK_IMPORTED_MODULE_6__["FormlaporanPage"], _selecttime_selecttime_page__WEBPACK_IMPORTED_MODULE_7__["SelecttimePage"], _selectdusun_selectdusun_page__WEBPACK_IMPORTED_MODULE_8__["SelectdusunPage"], _listlaporan_listlaporan_page__WEBPACK_IMPORTED_MODULE_9__["ListlaporanPage"], _viewlaporan_viewlaporan_page__WEBPACK_IMPORTED_MODULE_10__["ViewlaporanPage"], _groups_groups_page__WEBPACK_IMPORTED_MODULE_11__["GroupsPage"], _selectperiode_selectperiode_page__WEBPACK_IMPORTED_MODULE_12__["SelectperiodePage"], _selectdusunonly_selectdusunonly_page__WEBPACK_IMPORTED_MODULE_13__["SelectdusunonlyPage"]]
      })], LaporanPageModule);
      /***/
    },

    /***/
    "./src/app/pages/laporan/listlaporan/listlaporan.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/laporan/listlaporan/listlaporan.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLaporanListlaporanListlaporanPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9saXN0bGFwb3Jhbi9saXN0bGFwb3Jhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFVSTtFQUNJLGtCQUFBO0FBUFI7O0FBYUE7RUFDSSxvQ0FBQTtBQVZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9saXN0bGFwb3Jhbi9saXN0bGFwb3Jhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMzBweDtcclxuXHJcbiAgICAjbGlzdExhcG9yYW4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5sYWJlbC10aXRsZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/laporan/listlaporan/listlaporan.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/laporan/listlaporan/listlaporan.page.ts ***!
      \***************************************************************/

    /*! exports provided: ListlaporanPage */

    /***/
    function srcAppPagesLaporanListlaporanListlaporanPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListlaporanPage", function () {
        return ListlaporanPage;
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

      var ListlaporanPage = /*#__PURE__*/function () {
        function ListlaporanPage(route, NavController, apiService, toastController, alertController, router) {
          _classCallCheck(this, ListlaporanPage);

          this.route = route;
          this.NavController = NavController;
          this.apiService = apiService;
          this.toastController = toastController;
          this.alertController = alertController;
          this.router = router;
          this.title = 'Laporan ';
          this.lists = [];
          this.params = this.route.snapshot.params; // console.log(this.params);

          this.title = this.title + this.params.Type;
          this.geo_id = localStorage.getItem('geo_id');
        }

        _createClass(ListlaporanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getListLaporan();
          }
        }, {
          key: "alertToRelogin",
          value: function alertToRelogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this15 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
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

                            _this15.router.navigate(['front/']);
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
          key: "getListLaporan",
          value: function getListLaporan() {
            var _this16 = this;

            this.subscribe = this.apiService.get('v2/user_areas_list?type=' + this.params.Type + '&geo_id=' + this.geo_id, {}).subscribe(function (data) {
              _this16.lists = data;
            }, function (error) {
              if (error.status == 401) {
                _this16.alertToRelogin();
              }
            });
          }
        }, {
          key: "selectTime",
          value: function selectTime() {
            this.NavController.navigateForward(['/laporan/selecttime', {
              Type: this.params.Type
            }]);
          }
        }, {
          key: "gotoSelectDusun",
          value: function gotoSelectDusun(item) {
            var _this17 = this;

            this.subscribe = this.apiService.get('v2/user_areas_list_detail?glue=' + item.glue + '&geo_id=' + this.geo_id, {}).subscribe(function (data) {
              if (data.length > 0) {
                var ans_id_desa = '';
                var ans_id_dusun = '';
                var selectDesa = 0;
                var selectDesa_id_questionnaire = 0;
                var selectDusun = 0;
                var selectDusun_id_questionnaire = 0;
                var array = data;
                var label = '';
                var range = '';
                var value = '';

                for (var i = 0; i < array.length; i++) {
                  var element = array[i];
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

                var paramToDusun = {
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

                _this17.NavController.navigateForward(['/laporan/selectdusun', paramToDusun]);
              }
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/home'], {
              replaceUrl: true
            });
          }
        }]);

        return ListlaporanPage;
      }();

      ListlaporanPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ListlaporanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listlaporan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listlaporan.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/listlaporan/listlaporan.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./listlaporan.page.scss */
        "./src/app/pages/laporan/listlaporan/listlaporan.page.scss"))["default"]]
      })], ListlaporanPage);
      /***/
    },

    /***/
    "./src/app/pages/laporan/selectdusun/selectdusun.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/laporan/selectdusun/selectdusun.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLaporanSelectdusunSelectdusunPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content ion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3RkdXN1bi9zZWxlY3RkdXN1bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFVSTtFQUNJLGtCQUFBO0FBUFI7O0FBVUk7RUFFSSxnQ0FBQTtBQVRSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3RkdXN1bi9zZWxlY3RkdXN1bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMzBweDtcclxuXHJcbiAgICAjbGlzdExhcG9yYW4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/laporan/selectdusun/selectdusun.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/laporan/selectdusun/selectdusun.page.ts ***!
      \***************************************************************/

    /*! exports provided: SelectdusunPage */

    /***/
    function srcAppPagesLaporanSelectdusunSelectdusunPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectdusunPage", function () {
        return SelectdusunPage;
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

      var SelectdusunPage = /*#__PURE__*/function () {
        function SelectdusunPage(route, NavController, apiService, toastController, alertController, loadingController, actionSheetController) {
          _classCallCheck(this, SelectdusunPage);

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
          } else if (this.params.Type == 'Triwulan') {
            this.firstPathGlue = 'q-';
          }
        }

        _createClass(SelectdusunPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.presentLoading('Menyiapkan data...', 1000);
            this.getListDusun();
            this.checkIfDesaTemporarySave();
          }
        }, {
          key: "alertToOptionSavingReport",
          value: function alertToOptionSavingReport(target, item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this18 = this;

              var header, message, buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      header = 'Laporan Untuk Desa';
                      message = this.isDesaTemporarySave ? 'Anda menyimpan Laporan Sementara' : '';

                      if (target == 'dusun') {
                        header = item.name;
                        message = item.isTemporary ? 'Anda menyimpan Laporan Sementara' : '';
                      }

                      buttons = [{
                        text: 'Isi Kembali',
                        handler: function handler() {
                          _this18.gotoFormQuestion();
                        }
                      }, {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }];

                      if (item.isTemporary && target == 'dusun' || this.isDesaTemporarySave && target == 'desa') {
                        buttons.push({
                          text: 'Hapus Laporan Sementara',
                          role: 'destructive',
                          handler: function handler() {
                            _this18.removeFromTemporary();
                          }
                        });
                        buttons.push({
                          text: 'Kirim Laporan',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                                while (1) {
                                  switch (_context21.prev = _context21.next) {
                                    case 0:
                                      _context21.next = 2;
                                      return this.sendToServer();

                                    case 2:
                                    case "end":
                                      return _context21.stop();
                                  }
                                }
                              }, _callee21, this);
                            }));
                          }
                        });
                      }

                      if (item.version > 0 && target == 'dusun' || target == 'desa' && this.desaVersionSubmitToServer > 0) {
                        buttons.push({
                          text: 'Lihat Laporan',
                          handler: function handler() {
                            _this18.gotoViewLaporan();
                          }
                        });
                      }

                      _context22.next = 8;
                      return this.actionSheetController.create({
                        header: header,
                        cssClass: 'my-custom-class',
                        mode: 'ios',
                        buttons: buttons
                      });

                    case 8:
                      actionSheet = _context22.sent;
                      _context22.next = 11;
                      return actionSheet.present();

                    case 11:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(color, header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var toast;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.toastController.create({
                        header: header,
                        message: message,
                        color: color,
                        mode: "ios",
                        position: "middle",
                        duration: 3000
                      });

                    case 2:
                      toast = _context23.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var loading, _yield$loading$onDidD2, role, data;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: message,
                        mode: 'ios',
                        duration: duration
                      });

                    case 2:
                      loading = _context24.sent;
                      _context24.next = 5;
                      return loading.present();

                    case 5:
                      _context24.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD2 = _context24.sent;
                      role = _yield$loading$onDidD2.role;
                      data = _yield$loading$onDidD2.data;

                    case 10:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "alertToOptionSavingReport2",
          value: function alertToOptionSavingReport2(target, item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var _this19 = this;

              var header, message, buttons, alert;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      // console.log(item);
                      header = 'Laporan Untuk Desa';
                      message = this.isDesaTemporarySave ? 'Anda menyimpan Laporan Sementara' : '';

                      if (target == 'dusun') {
                        header = item.name;
                        message = item.isTemporary ? 'Anda menyimpan Laporan Sementara' : '';
                      }

                      buttons = [{
                        text: 'Isi Kembali',
                        handler: function handler() {
                          _this19.gotoFormQuestion();
                        }
                      }];

                      if (item.isTemporary && target == 'dusun' || this.isDesaTemporarySave && target == 'desa') {
                        buttons.push({
                          text: 'Hapus Laporan Sementara',
                          handler: function handler() {
                            _this19.removeFromTemporary();
                          }
                        });
                        buttons.push({
                          text: 'Kirim Laporan',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
                              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                                while (1) {
                                  switch (_context25.prev = _context25.next) {
                                    case 0:
                                      _context25.next = 2;
                                      return this.sendToServer();

                                    case 2:
                                    case "end":
                                      return _context25.stop();
                                  }
                                }
                              }, _callee25, this);
                            }));
                          }
                        });
                      }

                      if (item.version > 0 && target == 'dusun' || target == 'desa' && this.desaVersionSubmitToServer > 0) {
                        buttons.push({
                          text: 'Lihat Laporan',
                          handler: function handler() {
                            _this19.gotoViewLaporan();
                          }
                        });
                      }

                      _context26.next = 8;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: header,
                        message: message,
                        mode: "ios",
                        backdropDismiss: true,
                        buttons: buttons
                      });

                    case 8:
                      alert = _context26.sent;
                      _context26.next = 11;
                      return alert.present();

                    case 11:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "sendToServer",
          value: function sendToServer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var _this20 = this;

              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
                          var _this21 = this;

                          var dataAnswers, newParams, params;
                          return regeneratorRuntime.wrap(function _callee28$(_context28) {
                            while (1) {
                              switch (_context28.prev = _context28.next) {
                                case 0:
                                  this.presentLoading('Mengirim laporan...', 2000);
                                  _context28.next = 3;
                                  return this.setParamBeforeToSendServer();

                                case 3:
                                  dataAnswers = _context28.sent;
                                  newParams = localStorage.getItem('paramsToFormLaporan');
                                  newParams = JSON.parse(newParams);
                                  params = {
                                    ans_id: newParams['ans_id'],
                                    glue: newParams['glue'],
                                    user_area_id: newParams['user_area_id'],
                                    answer: JSON.stringify(dataAnswers)
                                  };
                                  this.subscribe = this.apiService.post('v2/user_area_questionnaire', params).subscribe(function (data) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                                      var _this22 = this;

                                      var geo_id, temporarySave, newTemp, index, element;
                                      return regeneratorRuntime.wrap(function _callee27$(_context27) {
                                        while (1) {
                                          switch (_context27.prev = _context27.next) {
                                            case 0:
                                              geo_id = localStorage.getItem('geo_id');
                                              temporarySave = localStorage.getItem('temporarySave_' + geo_id);
                                              temporarySave = JSON.parse(temporarySave);
                                              newTemp = [];

                                              for (index = 0; index < temporarySave.length; index++) {
                                                element = temporarySave[index];

                                                if (element != newParams['glue']) {
                                                  newTemp.push(element);
                                                }
                                              }

                                              localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp));
                                              this.getListDusun();
                                              this.checkIfDesaTemporarySave(); // console.log(data);

                                              setTimeout(function () {
                                                _this22.presentToast('success', 'Sukses', 'Data tersimpan');

                                                resolve('');
                                              }, 2000);

                                            case 9:
                                            case "end":
                                              return _context27.stop();
                                          }
                                        }
                                      }, _callee27, this);
                                    }));
                                  }, function (error) {
                                    // this.presentAlertConfirmError();
                                    console.log(error);

                                    _this21.presentToast('error', 'Gagal', 'Tidak tersimpan');

                                    reject(error);
                                  });

                                case 8:
                                case "end":
                                  return _context28.stop();
                              }
                            }
                          }, _callee28, this);
                        }));
                      });

                    case 2:
                      return _context29.abrupt("return", _context29.sent);

                    case 3:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29);
            }));
          }
        }, {
          key: "setParamBeforeToSendServer",
          value: function setParamBeforeToSendServer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var _this23 = this;

              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                          var newParams, glue, id_questionnaire, geo_id, data_answer, drafQuestions, answers, go_to_id, i, element, answer, a, element_answer, ans_id_question_opstion, c, c_e, newAns;
                          return regeneratorRuntime.wrap(function _callee30$(_context30) {
                            while (1) {
                              switch (_context30.prev = _context30.next) {
                                case 0:
                                  newParams = localStorage.getItem('paramsToFormLaporan');
                                  newParams = JSON.parse(newParams);
                                  glue = newParams['glue'];
                                  id_questionnaire = newParams['id_questionnaire'];
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
                                          ans_id: newParams['ans_id'],
                                          glue: glue,
                                          user_area_id: newParams['target'] == 'dusun' ? newParams['ans_id_dusun'] : 0,
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

                                case 13:
                                case "end":
                                  return _context30.stop();
                              }
                            }
                          }, _callee30);
                        }));
                      });

                    case 2:
                      return _context31.abrupt("return", _context31.sent);

                    case 3:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31);
            }));
          }
        }, {
          key: "removeFromTemporary",
          value: function removeFromTemporary() {
            // let pathGlue = (target == 'dusun') ? '-' + item.id : '';
            // let glue = this.firstPathGlue + this.params.value + pathGlue;
            var newParams = localStorage.getItem('paramsToFormLaporan');
            newParams = JSON.parse(newParams);
            var glue = newParams['glue'];
            localStorage.removeItem(glue);
            var geo_id = localStorage.getItem('geo_id');
            var temporarySave = localStorage.getItem('temporarySave_' + geo_id);
            temporarySave = JSON.parse(temporarySave);

            if (temporarySave.length > 0) {
              var newTemp = [];

              for (var i = 0; i < temporarySave.length; i++) {
                var element = temporarySave[i];

                if (element != glue) {
                  newTemp.push(element);
                }
              }

              localStorage.setItem('temporarySave_' + geo_id, JSON.stringify(newTemp));
              this.getListDusun();
              this.checkIfDesaTemporarySave();
            }
          }
        }, {
          key: "checkIfDesaTemporarySave",
          value: function checkIfDesaTemporarySave() {
            var _this24 = this;

            var geo_id = localStorage.getItem('geo_id');
            var temporarySave = localStorage.getItem('temporarySave_' + geo_id);

            if (temporarySave != null && temporarySave != '') {
              var dataTemp = JSON.parse(temporarySave);
              var glue = this.firstPathGlue + this.params.value;

              if (dataTemp.indexOf(glue) != -1) {
                this.isDesaTemporarySave = true;
              } else {
                this.isDesaTemporarySave = false;
              }
            } // get data dusun dari laporan server


            if (this.params.selectDesa == 1) {
              var ans_id_desa = this.params.ans_id_desa;
              var selectDesa_id_questionnaire = this.params.selectDesa_id_questionnaire;

              var _glue = this.firstPathGlue + this.params.value;

              this.subscribe = this.apiService.get('v2/user_area_reports_desa?ans_id=' + ans_id_desa + '&id_questionnaire=' + selectDesa_id_questionnaire + '&glue=' + _glue, {}).subscribe(function (data) {
                _this24.dataDesaFromServer = data.user_area_report[0];
                _this24.desaVersionSubmitToServer = _this24.dataDesaFromServer['version'];
              });
            }
          }
        }, {
          key: "getListDusun",
          value: function getListDusun() {
            var _this25 = this;

            this.arrDusun = [];
            var geo_id = localStorage.getItem('geo_id');
            var glue_header = this.firstPathGlue + this.params.value;
            this.subscribe = this.apiService.get('v2/user_areas?no_expand=user,geo&geo_id=' + geo_id + '&glue_header=' + glue_header, {}).subscribe(function (data) {
              _this25.arrDusun = data;
              var dataTemp = [];
              var geo_id = localStorage.getItem('geo_id');
              var temporarySave = localStorage.getItem('temporarySave_' + geo_id);

              if (temporarySave != null && temporarySave != '') {
                dataTemp = JSON.parse(temporarySave);
              }

              for (var i = 0; i < _this25.arrDusun.length; i++) {
                var element = _this25.arrDusun[i];
                _this25.arrDusun[i].isTemporary = false;
                var glue = _this25.firstPathGlue + _this25.params.value + '-' + element.id;

                if (dataTemp.indexOf(glue) != -1) {
                  _this25.arrDusun[i].isTemporary = true;
                }
              }
            });
          }
        }, {
          key: "checkBeforeToFormQuestion",
          value: function checkBeforeToFormQuestion(target, item) {
            var next = true;

            if (target == 'dusun') {
              if (item.isTemporary) {
                next = false;
              }

              if (item.version > 0) {
                next = false;
              }
            } else {
              if (this.isDesaTemporarySave) {
                next = false;
              }

              if (this.desaVersionSubmitToServer > 0) {
                next = false;
              }
            }

            var pathGlue = target == 'dusun' ? '-' + item.id : '';
            var newParams = {
              id_questionnaire: target == 'dusun' ? this.params.selectDusun_id_questionnaire : this.params.selectDesa_id_questionnaire,
              ans_id: target == 'dusun' ? this.params.ans_id_dusun : this.params.ans_id_desa,
              Type: this.params.Type,
              glue: this.firstPathGlue + this.params.value + pathGlue,
              label: this.params.label,
              ans_id_desa: this.params.ans_id_desa,
              ans_id_dusun: this.params.ans_id_dusun,
              user_area_id: target == 'dusun' ? item.id : 0,
              range: this.params.range,
              target: target,
              target_name: target == 'dusun' ? 'Dusun : ' + item.name : 'Laporan Untuk Desa',
              page_from: 'selectdusun'
            };
            localStorage.setItem('paramsToFormLaporan', JSON.stringify(newParams));

            if (next) {
              this.gotoFormQuestion();
            } else {
              this.alertToOptionSavingReport(target, item);
            }
          }
        }, {
          key: "gotoFormQuestion",
          value: function gotoFormQuestion() {
            var newParams = localStorage.getItem('paramsToFormLaporan');
            newParams = JSON.parse(newParams);
            localStorage.setItem('gotoSelectDusun', JSON.stringify(this.params));
            this.NavController.navigateForward(['/laporan/formlaporan', newParams]);
          }
        }, {
          key: "gotoViewLaporan",
          value: function gotoViewLaporan() {
            var newParams = localStorage.getItem('paramsToFormLaporan');
            newParams = JSON.parse(newParams);
            localStorage.setItem('gotoSelectDusun', JSON.stringify(this.params));
            this.NavController.navigateForward(['/laporan/viewlaporan', newParams]);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/laporan/listlaporan', {
              Type: this.params.Type
            }], {
              replaceUrl: true
            });
          }
        }]);

        return SelectdusunPage;
      }();

      SelectdusunPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }];
      };

      SelectdusunPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectdusun',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./selectdusun.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusun/selectdusun.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./selectdusun.page.scss */
        "./src/app/pages/laporan/selectdusun/selectdusun.page.scss"))["default"]]
      })], SelectdusunPage);
      /***/
    },

    /***/
    "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLaporanSelectdusunonlySelectdusunonlyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content ion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3RkdXN1bm9ubHkvc2VsZWN0ZHVzdW5vbmx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLHFCQUFBO0VBQ0EsY0FBQTtBQURSOztBQVVJO0VBQ0ksa0JBQUE7QUFQUjs7QUFVSTtFQUVJLGdDQUFBO0FBVFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvcmFuL3NlbGVjdGR1c3Vub25seS9zZWxlY3RkdXN1bm9ubHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogI2NhZWNlOTtcclxuICAgIC8vIC0tcGFkZGluZy10b3A6IDMwcHg7XHJcblxyXG4gICAgI2xpc3RMYXBvcmFuIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgICAgIC8vIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.ts ***!
      \***********************************************************************/

    /*! exports provided: SelectdusunonlyPage */

    /***/
    function srcAppPagesLaporanSelectdusunonlySelectdusunonlyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectdusunonlyPage", function () {
        return SelectdusunonlyPage;
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

      var SelectdusunonlyPage = /*#__PURE__*/function () {
        function SelectdusunonlyPage(route, NavController, apiService, actionSheetController, alertController, loadingController) {
          _classCallCheck(this, SelectdusunonlyPage);

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

        _createClass(SelectdusunonlyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.gotListDusun();
          }
        }, {
          key: "presentActionSheetInputFormDusun",
          value: function presentActionSheetInputFormDusun(newParams) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var _this26 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.actionSheetController.create({
                        header: 'Pilih Aksi',
                        cssClass: 'my-custom-class',
                        mode: 'ios',
                        buttons: [{
                          text: 'Lihat Laporan',
                          handler: function handler() {
                            _this26.gotoViewLaporan(newParams); // console.log('Share clicked');

                          }
                        }, {
                          text: 'Isi Kembali',
                          handler: function handler() {
                            _this26.presentAlertConfirmBeforeFillout(newParams);
                          }
                        }, {
                          text: 'Tutup',
                          role: 'cancel',
                          handler: function handler() {// console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context32.sent;
                      _context32.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "presentAlertConfirmBeforeFillout",
          value: function presentAlertConfirmBeforeFillout(newParams) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var _this27 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: newParams.target_name,
                        message: '<strong>' + newParams.label + '</strong>, mulai mengisi laporan ?',
                        mode: 'ios',
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Nanti',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            _this27.NavController.navigateForward(['/laporan/formlaporan', newParams]);
                          }
                        }]
                      });

                    case 2:
                      alert = _context33.sent;
                      _context33.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "gotListDusun",
          value: function gotListDusun() {
            var _this28 = this;

            var id_questionnaire = this.params.selectDusun_id_questionnaire;
            this.subscribe = this.apiService.get('v2/user_area_reports_listdusun?id_questionnaire=' + id_questionnaire + '&glue=' + this.params.glue, {}).subscribe(function (data) {
              _this28.arrDusun = data;
              console.log(data); // this.catecories = data.List;
            });
          }
        }, {
          key: "checkBeforeToFormQuestion",
          value: function checkBeforeToFormQuestion(item) {
            console.log(item);
            var newParams = {
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
            } else {
              this.presentAlertConfirmBeforeFillout(newParams);
            }
          }
        }, {
          key: "gotoViewLaporan",
          value: function gotoViewLaporan(newParams) {
            // let newParams = localStorage.getItem('paramsToFormLaporan');
            // newParams = JSON.parse(newParams);
            // localStorage.setItem('gotoSelectDusun', JSON.stringify(this.params));
            this.NavController.navigateForward(['/laporan/viewlaporan', newParams]);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            var gotoSelectDusun = localStorage.getItem('gotoselectperiode');
            var newParams = JSON.parse(gotoSelectDusun);
            this.NavController.navigateBack(['/laporan/selectperiode', newParams], {
              replaceUrl: true
            });
          }
        }]);

        return SelectdusunonlyPage;
      }();

      SelectdusunonlyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      SelectdusunonlyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectdusunonly',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./selectdusunonly.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./selectdusunonly.page.scss */
        "./src/app/pages/laporan/selectdusunonly/selectdusunonly.page.scss"))["default"]]
      })], SelectdusunonlyPage);
      /***/
    },

    /***/
    "./src/app/pages/laporan/selectperiode/selectperiode.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/laporan/selectperiode/selectperiode.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLaporanSelectperiodeSelectperiodePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\nion-content ion-item ion-label {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3RwZXJpb2RlL3NlbGVjdHBlcmlvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBVUk7RUFDSSxrQkFBQTtBQVBSOztBQVVJO0VBRUksZ0NBQUE7QUFUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhcG9yYW4vc2VsZWN0cGVyaW9kZS9zZWxlY3RwZXJpb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNjYWVjZTk7XHJcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuICAgICNsaXN0TGFwb3JhbiBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgICAgICAvLyBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/laporan/selectperiode/selectperiode.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/laporan/selectperiode/selectperiode.page.ts ***!
      \*******************************************************************/

    /*! exports provided: SelectperiodePage */

    /***/
    function srcAppPagesLaporanSelectperiodeSelectperiodePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectperiodePage", function () {
        return SelectperiodePage;
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


      var moment_locale_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment/locale/id */
      "./node_modules/moment/locale/id.js");
      /* harmony import */


      var moment_locale_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

      var SelectperiodePage = /*#__PURE__*/function () {
        function SelectperiodePage(route, NavController, apiService, alertController, loadingController, actionSheetController, router) {
          _classCallCheck(this, SelectperiodePage);

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
          this.target = this.params.target == 0 ? 'Dusun' : 'Desa';
          this.geo_id = localStorage.getItem('geo_id');

          if (this.params.type == 'Bulanan') {
            this.headerGlue = 'm-';
          } else if (this.params.type == 'Triwulan') {
            this.headerGlue = 'q-';
          }
        }

        _createClass(SelectperiodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.getListPeriode();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getListPeriode(); // if (this.params.refresh == 1) {
            //   this.getListPeriode();
            // }
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              var loading, _yield$loading$onDidD3, role, data;

              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Loading...',
                        mode: 'ios',
                        duration: 5000
                      });

                    case 2:
                      loading = _context34.sent;
                      _context34.next = 5;
                      return loading.present();

                    case 5:
                      _context34.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD3 = _context34.sent;
                      role = _yield$loading$onDidD3.role;
                      data = _yield$loading$onDidD3.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "presentAlertConfirmBeforeFillout",
          value: function presentAlertConfirmBeforeFillout(newParams) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var _this29 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Konfirmasi',
                        message: '<strong>' + newParams.label + '</strong>, mulai mengisi laporan ?',
                        mode: 'ios',
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Nanti',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            _this29.NavController.navigateForward(['/laporan/formlaporan', newParams]);
                          }
                        }]
                      });

                    case 2:
                      alert = _context35.sent;
                      _context35.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "presentActionSheetInputFormDesa",
          value: function presentActionSheetInputFormDesa(newParams) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var _this30 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return this.actionSheetController.create({
                        header: 'Pilih Aksi',
                        cssClass: 'my-custom-class',
                        mode: 'ios',
                        buttons: [{
                          text: 'Lihat Laporan',
                          handler: function handler() {
                            _this30.gotoViewLaporan(newParams); // console.log('Share clicked');

                          }
                        }, {
                          text: 'Isi Kembali',
                          handler: function handler() {
                            _this30.presentAlertConfirmBeforeFillout(newParams);
                          }
                        }, {
                          text: 'Tutup',
                          role: 'cancel',
                          handler: function handler() {// console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context36.sent;
                      _context36.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          }
        }, {
          key: "presentAlertNoQuestion",
          value: function presentAlertNoQuestion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var alert;
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      _context37.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Info !',
                        message: 'Belum ada pertanyaan yang diterbitkan',
                        mode: "ios",
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }]
                      });

                    case 2:
                      alert = _context37.sent;
                      _context37.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "getListPeriode",
          value: function getListPeriode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              var date, week, year, rangeStart, rangeEnd, newWeek, status, next, no, d, _newWeek, _status, initialDate, _next, _no, MomentFormat, Month, Year, MonthLabel, Start, End, newMonth, _status2, _initialDate, _next2, _no2, _MomentFormat, Quarter, _Year, _Start, _End, Value, newList, _status3;

              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      this.presentLoading();
                      this.listTime = []; // Mingguan

                      if (!(this.params.type == 'Mingguan')) {
                        _context38.next = 38;
                        break;
                      }

                      date = moment__WEBPACK_IMPORTED_MODULE_6__().year(this.params.range_year_start).week(this.params.range_start);
                      week = this.params.range_start;
                      year = date.endOf('isoWeek').format('YYYY');
                      rangeStart = date.startOf('isoWeek').format('DD MMM YYYY');
                      rangeEnd = date.endOf('isoWeek').format('DD MMM YYYY');
                      newWeek = {
                        label: 'Minggu ke : ' + week + ' - ' + year,
                        range: rangeStart + ' - ' + rangeEnd,
                        value: week + '-' + year,
                        checked: false,
                        glue: this.headerGlue + week + '-' + year,
                        sort: 1
                      };
                      _context38.next = 11;
                      return this.checkFill(newWeek);

                    case 11:
                      status = _context38.sent;
                      newWeek['status'] = status;
                      this.listTime.push(newWeek);
                      next = true;
                      no = 1;

                    case 16:
                      if (!next) {
                        _context38.next = 35;
                        break;
                      }

                      d = date.add('7', 'day');
                      week = d.startOf('isoWeek').week();
                      year = d.endOf('isoWeek').format('YYYY');
                      rangeStart = d.startOf('isoWeek').format('DD MMM YYYY');
                      rangeEnd = d.endOf('isoWeek').format('DD MMM YYYY');

                      if (!(week > this.params.range_end && year == this.params.range_year_end)) {
                        _context38.next = 27;
                        break;
                      }

                      next = false;
                      return _context38.abrupt("break", 35);

                    case 27:
                      _newWeek = {
                        label: 'Minggu ke : ' + week + ' - ' + year,
                        range: rangeStart + ' - ' + rangeEnd,
                        value: week + '-' + year,
                        checked: false,
                        glue: this.headerGlue + week + '-' + year,
                        sort: no += 1
                      };
                      _context38.next = 30;
                      return this.checkFill(_newWeek);

                    case 30:
                      _status = _context38.sent;
                      _newWeek['status'] = _status;
                      this.listTime.push(_newWeek);

                    case 33:
                      _context38.next = 16;
                      break;

                    case 35:
                      console.log(this.listTime);
                      _context38.next = 89;
                      break;

                    case 38:
                      if (!(this.params.type == 'Bulanan')) {
                        _context38.next = 65;
                        break;
                      }

                      // let mounth_start = parseInt(this.params.range_start) - 1;
                      initialDate = moment__WEBPACK_IMPORTED_MODULE_6__().month(parseInt(this.params.range_start) - 1).year(this.params.range_year_start);
                      _next = true;
                      _no = 0;

                    case 42:
                      if (!_next) {
                        _context38.next = 63;
                        break;
                      }

                      MomentFormat = _no == 0 ? initialDate : initialDate.add(1, 'month');
                      Month = MomentFormat.format('MM');
                      Year = MomentFormat.format('YYYY');
                      console.log('Month', _no, Month, parseInt(this.params.range_end) - 1);

                      if (!(parseInt(Month) > parseInt(this.params.range_end) && parseInt(Year) == this.params.range_year_end)) {
                        _context38.next = 52;
                        break;
                      }

                      _next = false;
                      return _context38.abrupt("break", 63);

                    case 52:
                      MonthLabel = MomentFormat.format('MMMM');
                      Start = MomentFormat.startOf('month').format('DD MMMM YYYY');
                      End = MomentFormat.endOf('month').format('DD MMMM YYYY');
                      newMonth = {
                        label: 'Bulan : ' + MonthLabel + ' - ' + Year,
                        range: Start + ' - ' + End,
                        value: Month + '-' + Year,
                        checked: false,
                        glue: this.headerGlue + Month + '-' + Year,
                        sort: _no += 1
                      };
                      _context38.next = 58;
                      return this.checkFill(newMonth);

                    case 58:
                      _status2 = _context38.sent;
                      newMonth['status'] = _status2;
                      this.listTime.push(newMonth);

                    case 61:
                      _context38.next = 42;
                      break;

                    case 63:
                      _context38.next = 89;
                      break;

                    case 65:
                      if (!(this.params.type == 'Triwulan')) {
                        _context38.next = 89;
                        break;
                      }

                      _initialDate = moment__WEBPACK_IMPORTED_MODULE_6__().quarter(this.params.range_start).year(this.params.range_year_start);
                      _next2 = true;
                      _no2 = 0;

                    case 69:
                      if (!_next2) {
                        _context38.next = 89;
                        break;
                      }

                      _MomentFormat = _no2 == 0 ? _initialDate : _initialDate.add(1, 'Q');
                      Quarter = _MomentFormat.quarter();
                      _Year = _MomentFormat.format('YYYY');

                      if (!(Quarter > parseInt(this.params.range_end) && parseInt(_Year) == parseInt(this.params.range_year_end))) {
                        _context38.next = 78;
                        break;
                      }

                      _next2 = false;
                      return _context38.abrupt("break", 89);

                    case 78:
                      _Start = _MomentFormat.startOf('quarter').format('DD MMMM YYYY');
                      _End = _MomentFormat.endOf('quarter').format('DD MMMM YYYY');
                      Value = Quarter + '-' + _Year;
                      newList = {
                        label: 'Triwulan : ' + Quarter + ' - ' + _Year,
                        range: _Start + ' - ' + _End,
                        value: Value,
                        checked: false,
                        glue: this.headerGlue + Value,
                        sort: _no2 += 1
                      };
                      _context38.next = 84;
                      return this.checkFill(newList);

                    case 84:
                      _status3 = _context38.sent;
                      newList['status'] = _status3;
                      this.listTime.push(newList);

                    case 87:
                      _context38.next = 69;
                      break;

                    case 89:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "sortDESCBy",
          value: function sortDESCBy(prop) {
            return this.listTime.sort(function (a, b) {
              return a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1;
            });
          }
        }, {
          key: "checkFill",
          value: function checkFill(paramsCheck) {
            var _this31 = this;

            return new Promise(function (resolve, reject) {
              _this31.subscribe = _this31.apiService.get('v2/check_report?id_questionnaire=' + _this31.params.id + '&glue=' + paramsCheck.glue + '&geo_id=' + _this31.geo_id + '&target=' + _this31.params.target, {}).subscribe(function (data) {
                resolve(data.status); // this.arrDusun = data;
                // console.log(data);
                // this.catecories = data.List;
              }, function (error) {
                resolve(0);
              });
            });
          }
        }, {
          key: "gotoFormLaporan",
          value: function gotoFormLaporan(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              var dataAnswerID, newParams;
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      _context39.prev = 0;
                      _context39.next = 3;
                      return this.gotAnswerID(item);

                    case 3:
                      dataAnswerID = _context39.sent;

                      // (this.params.target == 0)
                      if (this.params.target == 0) {
                        item.Type = this.params.type;
                        item.selectDusun = 1;
                        item.selectDusun_id_questionnaire = this.params.id;
                        item.selectDesa = 0;
                        item.selectDesa_id_questionnaire = 0;
                        this.NavController.navigateForward(['/laporan/selectdusunonly', item]);
                      } else {
                        newParams = {
                          id_questionnaire: this.params.id,
                          ans_id: this.params.target == 0 ? dataAnswerID.ans_id_dusun : dataAnswerID.ans_id_desa,
                          Type: this.params.type,
                          glue: item.glue,
                          label: item.label,
                          ans_id_desa: dataAnswerID.ans_id_desa,
                          ans_id_dusun: dataAnswerID.ans_id_dusun,
                          user_area_id: this.params.target == 0 ? 1 : 0,
                          range: item.range,
                          target: this.params.target == 0 ? 'dusun' : 'desa',
                          target_name: this.params.target == 0 ? 'Dusun : nama dusunnya' : 'Laporan Untuk Desa',
                          page_from: 'selectperiode'
                        };

                        if (item.status == 2) {
                          this.presentActionSheetInputFormDesa(newParams);
                        } else {
                          this.presentAlertConfirmBeforeFillout(newParams);
                        }
                      }

                      _context39.next = 10;
                      break;

                    case 7:
                      _context39.prev = 7;
                      _context39.t0 = _context39["catch"](0);
                      this.presentAlertNoQuestion();

                    case 10:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this, [[0, 7]]);
            }));
          }
        }, {
          key: "gotAnswerID",
          value: function gotAnswerID(item) {
            var _this32 = this;

            return new Promise(function (resolve, reject) {
              var params = {
                type: _this32.params.type,
                selectDusun: _this32.params.target == 0 ? 1 : 0,
                selectDusun_id_questionnaire: _this32.params.id,
                selectDesa: _this32.params.target == 0 ? 0 : 1,
                selectDesa_id_questionnaire: _this32.params.id,
                value: item.value,
                geo_id: _this32.geo_id,
                label: item.label,
                range: item.range,
                id_questionnaire: ''
              };
              _this32.subscribe = _this32.apiService.post('v2/user_area_reports_target', params).subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this32, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
                  return regeneratorRuntime.wrap(function _callee40$(_context40) {
                    while (1) {
                      switch (_context40.prev = _context40.next) {
                        case 0:
                          item.ans_id_dusun = data.ans_data.ans_id_dusun;
                          item.ans_id_desa = data.ans_data.ans_id_desa; // item.netwotkInformation = 'Online';
                          // this.NavController.navigateForward(['/laporan/selectdusun', newParams]);

                          resolve(item);

                        case 3:
                        case "end":
                          return _context40.stop();
                      }
                    }
                  }, _callee40);
                }));
              }, function (error) {
                // this.presentAlertConfirmError();
                reject('Gagal insert');
              });
            });
          }
        }, {
          key: "gotoViewLaporan",
          value: function gotoViewLaporan(newParams) {
            // let newParams = localStorage.getItem('paramsToFormLaporan');
            // newParams = JSON.parse(newParams);
            // localStorage.setItem('gotoSelectDusun', JSON.stringify(this.params));
            this.NavController.navigateForward(['/laporan/viewlaporan', newParams]);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/laporan/groups'], {
              replaceUrl: true
            });
          }
        }]);

        return SelectperiodePage;
      }();

      SelectperiodePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      SelectperiodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectperiode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./selectperiode.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selectperiode/selectperiode.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./selectperiode.page.scss */
        "./src/app/pages/laporan/selectperiode/selectperiode.page.scss"))["default"]]
      })], SelectperiodePage);
      /***/
    },

    /***/
    "./src/app/pages/laporan/selecttime/selecttime.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/laporan/selecttime/selecttime.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLaporanSelecttimeSelecttimePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content #listLaporan ion-card-content {\n  text-align: center;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi9zZWxlY3R0aW1lL3NlbGVjdHRpbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBVUk7RUFDSSxrQkFBQTtBQVBSOztBQWFBO0VBQ0ksb0NBQUE7QUFWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhcG9yYW4vc2VsZWN0dGltZS9zZWxlY3R0aW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNjYWVjZTk7XHJcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuICAgICNsaXN0TGFwb3JhbiBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/laporan/selecttime/selecttime.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/laporan/selecttime/selecttime.page.ts ***!
      \*************************************************************/

    /*! exports provided: SelecttimePage */

    /***/
    function srcAppPagesLaporanSelecttimeSelecttimePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelecttimePage", function () {
        return SelecttimePage;
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


      var moment_locale_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment/locale/id */
      "./node_modules/moment/locale/id.js");
      /* harmony import */


      var moment_locale_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

      var SelecttimePage = /*#__PURE__*/function () {
        function SelecttimePage(route, NavController, apiService, toastController, alertController, router) {
          _classCallCheck(this, SelecttimePage);

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
          this.params = this.route.snapshot.params; // console.log(this.params);

          this.title = 'Laporan ' + this.params.Type;
          this.geo_id = localStorage.getItem('geo_id');
          this.getTargetQuestion();
          this.getListExistingLaporan();
        }

        _createClass(SelecttimePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlertNoQuestion",
          value: function presentAlertNoQuestion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              var _this33 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Info !',
                        message: 'Belum ada pertanyaan yang diterbitkan',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Kembali',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            _this33.goBack();
                          }
                        }]
                      });

                    case 2:
                      alert = _context41.sent;
                      _context41.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }, {
          key: "alertToRelogin",
          value: function alertToRelogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var _this34 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
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

                            _this34.router.navigate(['front/']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context42.sent;
                      _context42.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "getTargetQuestion",
          value: function getTargetQuestion() {
            var _this35 = this;

            var netwotkInformation = localStorage.getItem('netwotkInformation');

            if (netwotkInformation == 'online') {
              this.subscribe = this.apiService.get('v2/user_area_reports_target?type=' + this.params.Type, {}).subscribe(function (data) {
                if (data.user_area_report.length > 0) {
                  // let q = data.user_area_report[0];
                  for (var i = 0; i < data.user_area_report.length; i++) {
                    var element = data.user_area_report[i];

                    if (element.target == 0) {
                      _this35.selectDusun = 1;
                      _this35.selectDusun_id_questionnaire = element.id;
                    } else if (element.target == 1) {
                      _this35.selectDesa = 1;
                      _this35.selectDesa_id_questionnaire = element.id;
                    }
                  }
                } else {
                  _this35.presentAlertNoQuestion();
                }
              });
            } else {
              var dataQuestionnaire = sessionStorage.getItem(this.geo_id + '_Questionnaire_' + this.params.Type);

              if (dataQuestionnaire != null && dataQuestionnaire != 'null' && dataQuestionnaire != '') {
                var d = JSON.parse(dataQuestionnaire);

                for (var i = 0; i < d.length; i++) {
                  var element = d[i];

                  if (element.target == 0) {
                    this.selectDusun = 1;
                    this.selectDusun_id_questionnaire = element.id;
                  } else if (element.target == 1) {
                    this.selectDesa = 1;
                    this.selectDesa_id_questionnaire = element.id;
                  }
                }
              } else {
                this.presentAlertNoQuestion();
              }
            }
          }
        }, {
          key: "getListExistingLaporan",
          value: function getListExistingLaporan() {
            var _this36 = this;

            this.subscribe = this.apiService.get('v2/user_areas_list?type=' + this.params.Type + '&geo_id=' + this.geo_id, {}).subscribe(function (data) {
              _this36.hideListTime = data;

              if (_this36.params.Type == 'Mingguan') {
                _this36.subtitle = 'Pilih Minggu';

                _this36.getRangeWeek(54);
              } else if (_this36.params.Type == 'Bulanan') {
                _this36.subtitle = 'Pilih Bulan';

                _this36.getBulan(12);
              } else if (_this36.params.Type == 'Triwulan') {
                _this36.subtitle = 'Pilih Triwulan';

                _this36.getTriwulan(5);
              }
            }, function (error) {
              if (error.status == 401) {
                _this36.alertToRelogin();
              }
            });
          }
        }, {
          key: "getRangeWeek",
          value: function getRangeWeek(length) {
            for (var i = 0; i <= length; i++) {
              var thisWeek = moment__WEBPACK_IMPORTED_MODULE_6__().startOf('isoWeek').week();
              var thisYear = moment__WEBPACK_IMPORTED_MODULE_6__().startOf('isoWeek').format('YYYY');
              var MomentFormat = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(i, 'weeks');
              var Week = MomentFormat.startOf('isoWeek').week();
              var Year = MomentFormat.endOf('isoWeek').format('YYYY');
              var Start = MomentFormat.startOf('isoWeek').format('DD MMMM YYYY');
              var End = MomentFormat.endOf('isoWeek').format('DD MMMM YYYY');
              var Value = Week + '-' + Year;

              if (this.searchInArray(Value)) {
                var checked = thisWeek == Week && thisYear == Year ? true : false;
                var newWeek = {
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
        }, {
          key: "getBulan",
          value: function getBulan(length) {
            for (var i = 0; i <= length; i++) {
              var thisMonth = moment__WEBPACK_IMPORTED_MODULE_6__().format('MM');
              var thisYear = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY');
              var MomentFormat = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(i, 'month');
              var Month = MomentFormat.format('MM');
              var MonthLabel = MomentFormat.format('MMMM');
              var Year = MomentFormat.format('YYYY');
              var Start = MomentFormat.startOf('month').format('DD MMMM YYYY');
              var End = MomentFormat.endOf('month').format('DD MMMM YYYY');
              var Value = Month + '-' + Year;

              if (this.searchInArray(Value)) {
                var checked = thisMonth == Month && thisYear == Year ? true : false;
                var newArr = {
                  label: 'Bulan : ' + MonthLabel + ' - ' + Year,
                  range: Start + ' - ' + End,
                  value: Value,
                  checked: checked
                };
                this.listTime.push(newArr);
              }
            } // console.log(this.listTime);

          }
        }, {
          key: "getTriwulan",
          value: function getTriwulan(length) {
            for (var i = 0; i <= length; i++) {
              // const element = array[i];
              var thisquarter = moment__WEBPACK_IMPORTED_MODULE_6__().quarter();
              var thisYear = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY');
              var MomentFormat = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(i, 'Q');
              var quarter = MomentFormat.quarter();
              var Year = MomentFormat.format('YYYY');
              var Start = MomentFormat.startOf('quarter').format('DD MMMM YYYY');
              var End = MomentFormat.endOf('quarter').format('DD MMMM YYYY');
              var Value = quarter + '-' + Year;

              if (this.searchInArray(Value)) {
                var checked = thisquarter == quarter && thisYear == Year ? true : false;
                var newArr = {
                  label: 'Triwulan ke : ' + quarter + ' - ' + Year,
                  range: Start + ' - ' + End,
                  value: Value,
                  checked: checked
                };
                this.listTime.push(newArr);
              }
            }
          }
        }, {
          key: "searchInArray",
          value: function searchInArray(value) {
            var result = true;
            var array = this.hideListTime;

            for (var i = 0; i < array.length; i++) {
              var element = array[i];
              var c_value = '';

              if (this.params.Type == 'Mingguan') {
                c_value = element.week + '-' + element.year;
              } else if (this.params.Type == 'Bulanan') {
                c_value = element.month + '-' + element.year;
              } else if (this.params.Type == 'Triwulan') {
                c_value = element.quarter + '-' + element.year;
              }

              if (value == c_value) {
                result = false;
                break;
              }
            }

            return result;
          }
        }, {
          key: "gotoSelectDusun",
          value: function gotoSelectDusun(newParams) {
            var _this37 = this;

            newParams.Type = this.params.Type;
            newParams.selectDusun = this.selectDusun;
            newParams.selectDusun_id_questionnaire = this.selectDusun_id_questionnaire;
            newParams.selectDesa = this.selectDesa;
            newParams.selectDesa_id_questionnaire = this.selectDesa_id_questionnaire;
            console.log(newParams);
            return false;
            var netwotkInformation = localStorage.getItem('netwotkInformation');

            if (netwotkInformation == 'online') {
              var params = {
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
              this.subscribe = this.apiService.post('v2/user_area_reports_target', params).subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this37, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
                  return regeneratorRuntime.wrap(function _callee43$(_context43) {
                    while (1) {
                      switch (_context43.prev = _context43.next) {
                        case 0:
                          newParams.ans_id_dusun = data.ans_data.ans_id_dusun;
                          newParams.ans_id_desa = data.ans_data.ans_id_desa;
                          newParams.netwotkInformation = 'Online';
                          this.NavController.navigateForward(['/laporan/selectdusun', newParams]);

                        case 4:
                        case "end":
                          return _context43.stop();
                      }
                    }
                  }, _callee43, this);
                }));
              }, function (error) {// this.presentAlertConfirmError();
              });
            } else {
              newParams.ans_id_dusun = '';
              newParams.ans_id_desa = '';
              newParams.netwotkInformation = 'Offline';
              console.log(newParams);
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/laporan/listlaporan', {
              Type: this.params.Type
            }], {
              replaceUrl: true
            });
          }
        }]);

        return SelecttimePage;
      }();

      SelecttimePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      SelecttimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selecttime',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./selecttime.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/selecttime/selecttime.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./selecttime.page.scss */
        "./src/app/pages/laporan/selecttime/selecttime.page.scss"))["default"]]
      })], SelecttimePage);
      /***/
    },

    /***/
    "./src/app/pages/laporan/viewlaporan/viewlaporan.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/laporan/viewlaporan/viewlaporan.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLaporanViewlaporanViewlaporanPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content ion-grid .boolean-1 div,\nion-content ion-grid .boolean-2 div {\n  background: #eaeaea;\n  border-radius: 5px;\n}\n\nion-content ion-grid .boolean-1 div.boolean-active,\nion-content ion-grid .boolean-2 div.boolean-active {\n  background: #ffffff;\n}\n\nion-content ion-grid .boolean-1 {\n  text-align: center;\n  background: #eaeaea;\n  border-top-left-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\n\nion-content ion-grid .boolean-2 {\n  text-align: center;\n  background: #eaeaea;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFwb3Jhbi92aWV3bGFwb3Jhbi92aWV3bGFwb3Jhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFXUTs7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0FBUlo7O0FBV1E7O0VBRUksbUJBQUE7QUFUWjs7QUFjUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBWlo7O0FBZVE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQWJaOztBQW9CQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QUFqQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvcmFuL3ZpZXdsYXBvcmFuL3ZpZXdsYXBvcmFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICMyZjk0OTU7XHJcblxyXG4gICAgaW9uLWdyaWQge1xyXG5cclxuICAgICAgICAuYm9vbGVhbi0xIGRpdixcclxuICAgICAgICAuYm9vbGVhbi0yIGRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib29sZWFuLTEgZGl2LmJvb2xlYW4tYWN0aXZlLFxyXG4gICAgICAgIC5ib29sZWFuLTIgZGl2LmJvb2xlYW4tYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLmJvb2xlYW4tMSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9vbGVhbi0yIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/laporan/viewlaporan/viewlaporan.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/laporan/viewlaporan/viewlaporan.page.ts ***!
      \***************************************************************/

    /*! exports provided: ViewlaporanPage */

    /***/
    function srcAppPagesLaporanViewlaporanViewlaporanPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewlaporanPage", function () {
        return ViewlaporanPage;
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

      var ViewlaporanPage = /*#__PURE__*/function () {
        function ViewlaporanPage(route, NavController, apiService) {
          _classCallCheck(this, ViewlaporanPage);

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

        _createClass(ViewlaporanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getQuestion",
          value: function getQuestion() {
            var _this38 = this;

            this.listQuestion = [];
            var glue = this.params.glue;
            var ans_id = this.params.ans_id;
            this.subscribe = this.apiService.get('v2/user_area_questionnaire?id_questionnaire=' + this.params.id_questionnaire + '&glue=' + glue + '&ans_id=' + ans_id, {}).subscribe(function (data) {
              // this.catecories = data.List;
              // console.log(data);
              if (data.user_area_report.length > 0) {
                var q = data.user_area_report[0];
                var geo_id = localStorage.getItem('geo_id');
                localStorage.setItem(_this38.params.id_questionnaire + '_drafQuestions_' + geo_id, JSON.stringify(q.Question));
                var newListQuestion = [];

                for (var index = 0; index < q.Question.length; index++) {
                  var element = q.Question[index];

                  if (element.id_question_type == 4 && element.Answers.length > 0) {
                    var newAnswer = [];

                    for (var m = 0; m < element.Answers.length; m++) {
                      var m_el = element.Answers[m];
                      newAnswer.push(m_el.id_question_option);
                    }

                    element.Answers = newAnswer;
                  }

                  newListQuestion.push(element);
                }

                _this38.listQuestion = newListQuestion;
                console.log(_this38.listQuestion);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            if (this.params.page_from == 'selectperiode') {
              var gotoselectperiode = localStorage.getItem('gotoselectperiode');
              var newParams = JSON.parse(gotoselectperiode);
              this.NavController.navigateBack(['/laporan/selectperiode', newParams], {
                replaceUrl: true
              });
            } else if (this.params.page_from == 'selectdusunonly') {
              var gotoselectdusunonly = localStorage.getItem('gotoselectdusunonly');

              var _newParams3 = JSON.parse(gotoselectdusunonly);

              this.NavController.navigateBack(['/laporan/selectdusunonly', _newParams3], {
                replaceUrl: true
              });
            } else {
              var gotoSelectDusun = localStorage.getItem('gotoSelectDusun');

              var _newParams4 = JSON.parse(gotoSelectDusun);

              this.NavController.navigateBack(['/laporan/selectdusun', _newParams4], {
                replaceUrl: true
              });
            }
          }
        }]);

        return ViewlaporanPage;
      }();

      ViewlaporanPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      };

      ViewlaporanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewlaporan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./viewlaporan.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laporan/viewlaporan/viewlaporan.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./viewlaporan.page.scss */
        "./src/app/pages/laporan/viewlaporan/viewlaporan.page.scss"))["default"]]
      })], ViewlaporanPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-laporan-laporan-module-es5.js.map