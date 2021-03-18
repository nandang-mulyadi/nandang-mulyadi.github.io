(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-front-front-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form1/form1.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form1/form1.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFrontForm1Form1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content mode=\"ios\">\n\n  <ion-row fixed=\"true\">\n    <ion-col size=\"4\" class=\"step step-active\"></ion-col>\n    <ion-col size=\"4\" class=\"step\"></ion-col>\n    <ion-col size=\"4\" class=\"step\"></ion-col>\n  </ion-row>\n\n\n\n\n  <div id=\"container\">\n    <h3 class=\"welcoming\">Apakah anda Kepala Desa?</h3>\n\n    <div style=\"margin-top: 30px;padding-left: 20px;padding-right: 20px;\">\n      <ion-segment color=\"dark\" (ionChange)=\"segmentChanged($event)\" value=\"{{ isKepalaDesa }}\">\n        <ion-segment-button value=\"0\">\n          <ion-label><strong class=\"welcoming-text\">Tidak</strong></ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"1\">\n          <ion-label><strong class=\"welcoming-text\">Ya</strong></ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n\n  </div>\n\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" (click)=\"goBack()\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" (click)=\"goNext()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Berikutnya</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form2/form2.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form2/form2.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFrontForm2Form2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content mode=\"ios\">\n\n  <ion-row fixed=\"true\">\n    <ion-col size=\"4\" class=\"step step-active\"></ion-col>\n    <ion-col size=\"4\" class=\"step step-active\"></ion-col>\n    <ion-col size=\"4\" class=\"step\"></ion-col>\n  </ion-row>\n\n  <div id=\"container\">\n    <h3 class=\"welcoming\">{{ labelKepalaDesa }}</h3>\n    <p class=\"welcoming-text\">{{ labelQuestion }}</p>\n\n    <div style=\"margin-top: 30px;padding-left: 20px;padding-right: 20px;\">\n      <ion-segment color=\"success\" (ionChange)=\"segmentChanged($event)\" value=\"{{ isReadOnly }}\">\n        <ion-segment-button value=\"1\">\n          <ion-label><strong class=\"welcoming-text\">Tidak</strong></ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"0\">\n          <ion-label><strong class=\"welcoming-text\">Ya</strong></ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n\n  </div>\n\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" (click)=\"goBack()\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" (click)=\"goNext()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Berikutnya</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form3/form3.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form3/form3.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFrontForm3Form3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-row fixed=\"true\">\n    <ion-col size=\"4\" class=\"step step-active\"></ion-col>\n    <ion-col size=\"4\" class=\"step step-active\"></ion-col>\n    <ion-col size=\"4\" class=\"step step-active\"></ion-col>\n  </ion-row>\n\n\n\n  <div id=\"container\">\n\n    <h3 class=\"welcoming\">Registrasi</h3>\n\n    <p class=\"welcoming-text\">Desa Anda terletak di Propinsi apa?</p>\n    <div class=\"block-answer\" (click)=\"showPicker(1)\">\n      <span *ngIf=\"idPropisi==0\">Pilih Propinsi...</span>\n      <span *ngIf=\"idPropisi!=0\">{{ viewPropisi }}</span>\n      <ion-icon name=\"caret-down-outline\"></ion-icon>\n    </div>\n\n    <p class=\"welcoming-text\">Desa Anda terletak di Kota / Kabupaten apa?</p>\n    <div class=\"block-answer\" (click)=\"showPicker(2)\">\n      <span *ngIf=\"idKabupaten==0\">Pilih Kota / Kabupaten...</span>\n      <span *ngIf=\"idKabupaten!=0\">{{ viewKabupaten }}</span>\n      <ion-icon name=\"caret-down-outline\"></ion-icon>\n    </div>\n\n    <p class=\"welcoming-text\">Desa Anda terletak di Kecamatan apa?</p>\n    <div class=\"block-answer\" (click)=\"showPicker(3)\">\n      <span *ngIf=\"idKecamatan==0\">Pilih Kecamatan...</span>\n      <span *ngIf=\"idKecamatan!=0\">{{ viewKecamatan }}</span>\n      <ion-icon name=\"caret-down-outline\"></ion-icon>\n    </div>\n\n    <p class=\"welcoming-text\">Apa Desa Anda?</p>\n    <div class=\"block-answer\" (click)=\"showPicker(4)\">\n      <span *ngIf=\"idDesa==0\">Pilih Desa...</span>\n      <span *ngIf=\"idDesa!=0\">{{ viewDesa }}</span>\n      <ion-icon name=\"caret-down-outline\"></ion-icon>\n    </div>\n\n\n\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" (click)=\"goBack()\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" (click)=\"goNext()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Berikutnya</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form4/form4.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form4/form4.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFrontForm4Form4PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content mode=\"ios\">\n\n  <div id=\"container\">\n\n\n    <ion-card>\n\n\n      <ion-item lines=\"full\" style=\"--background: #eaeaea;\">\n        <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Formulir Registrasi</ion-label>\n\n      </ion-item>\n\n      <ion-card-header>\n        <ion-card-subtitle>Username</ion-card-subtitle>\n        <ion-card-title>{{ username }}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        Username akan digunakan untuk login, mohon ingat dengan baik.\n      </ion-card-content>\n\n      <ion-card-content>\n\n        <ion-item lines=\"none\">\n          <ion-input [(ngModel)]=\"fullname\" placeholder=\"Nama Lengkap...\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label>\n            +62\n          </ion-label>\n          <ion-input [(ngModel)]=\"phoneNumber\" type=\"number\" placeholder=\"Nomor HP...\"></ion-input>\n        </ion-item>\n        <p class=\"input-helper\">Contoh Nomor Hp : 812xxxxxxxx</p>\n\n        <ion-item lines=\"none\">\n          <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password...\"></ion-input>\n        </ion-item>\n        <p class=\"input-helper\">Password minimal 6 karakter</p>\n\n        <ion-item lines=\"none\" style=\"margin-bottom: 5px;\">\n          <ion-input type=\"password\" [(ngModel)]=\"repassword\" placeholder=\"Re-Password...\"></ion-input>\n        </ion-item>\n        <p *ngIf=\"errorPassword\" class=\"input-helper\" style=\"color: red;\">*) Re-password tidak cocok dengan Password</p>\n\n        <div style=\"text-align: right;margin-top: 20px;\">\n          <ion-button (click)=\"confirmation()\" shape=\"round\" color=\"warning\" fill=\"solid\">\n            Kirim</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/home/home.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/home/home.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFrontHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" moda=\"ios\" class=\"bg-image no-scroll\">\n\n  <!-- <img src=\"./assets/bg.png\" style=\"height: 100%;\" /> -->\n\n\n  <!-- <h3 class=\"welcoming\">Selamat Datang di Aplikasi\n    Kemendes untuk Relawan/Gugus Tugas COVID-19\n  </h3>\n  <br />\n  <p class=\"welcoming-text\">Aplikasi ini hanya bisa di gunakan oleh aparat desa yang termasuk Relawan/Gugus COVID-19\n  </p> -->\n\n\n\n  <div id=\"container\">\n    <h3 class=\"welcoming\">Selamat Datang di Aplikasi untuk Relawan/Gugus Tugas COVID-19\n    </h3>\n    <br />\n    <p class=\"welcoming-text\">Aplikasi ini hanya bisa di gunakan oleh aparat desa yang termasuk Relawan/Gugus COVID-19\n    </p>\n\n    <br /><br />\n\n    <ion-button expand=\"block\" [routerLink]=\"['/front/login']\" size=\"large\" shape=\"round\" color=\"warning\" fill=\"solid\">\n      Login</ion-button>\n\n    <br />\n\n    <ion-button expand=\"block\" [routerLink]=\"['/front/form1']\" size=\"large\" shape=\"round\" color=\"light\" fill=\"solid\">\n      Registrasi</ion-button>\n\n  </div>\n\n\n  <!-- <ion-slides pager=\"true\" (ionSlidesDidLoad)=\"slidesDidLoad(slider)\" (ionSlideTouchEnd)=\"slideChanged(slider)\">\n\n    <ion-slide>\n      <div class=\"slide\">\n        <img src=\"./assets/1.png\" />\n        <h2>Welcome</h2>\n        <p class=\"welcoming-text\">The <b>ionic conference app</b> is a practical preview of the ionic framework in\n          action, and a demonstration\n          of\n          proper code use.</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./slide-2.png\" />\n      <h2>What is Ionic?</h2>\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web\n        technologies like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./slide-3.png\" />\n      <h2>What is Ionic Appflow?</h2>\n      <p><b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a\n        totally new level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./slide-4.png\" />\n      <h2>Ready to Play?</h2>\n      <ion-button fill=\"clear\">Continue <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n\n  </ion-slides> -->\n\n\n\n\n</ion-content>\n\n<!-- <ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-button expand=\"block\" [routerLink]=\"['/front/login']\" sizr=\"small\" shape=\"round\" color=\"warning\"\n          fill=\"solid\">\n          Login</ion-button>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-button expand=\"block\" [routerLink]=\"['/front/form1']\" color=\"light\" fill=\"clear\">Lanjut Sebagai Relawan\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer> -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/login/login.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/login/login.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFrontLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons color=\"\" slot=\"start\">\n      <ion-buttons slot=\"start\" (click)=\"goBack()\">\n        <ion-button color=\"light\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </ion-button>\n        Kembali\n      </ion-buttons>\n      <ion-title>Okechat</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content mode=\"ios\">\n\n  <div id=\"container\">\n    <ion-card>\n\n      <img src=\"./assets/edmc_login.png\" />\n\n      <ion-card-content>\n\n        <ion-item lines=\"none\">\n          <ion-label>\n            <ion-icon name=\"person-outline\"></ion-icon>\n          </ion-label>\n          <ion-input autofocus=\"true\" [(ngModel)]=\"username\" placeholder=\"Username\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label>\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\n          </ion-label>\n          <ion-input placeholder=\"Password\" type=\"{{type}}\" [(ngModel)]=\"password\"></ion-input>\n          <ion-icon name=\"{{icon}}\" (click)=\"showPassword()\" color=\"{{iconColor}}\" slot=\"end\"></ion-icon>\n          <!-- <ion-checkbox (ionChange)=\"changeCk($event)\" color=\"success\"></ion-checkbox> -->\n        </ion-item>\n\n        <div style=\"text-align: right;\">\n          <ion-button (click)=\"loginUser()\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n            Masuk</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n\n</ion-content>\n\n<!-- <ion-footer class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" [routerLink]=\"['/front']\" color=\"light\" fill=\"clear\">\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon> Kembali\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button expand=\"block\" [routerLink]=\"['/home']\" sizr=\"small\" shape=\"round\" color=\"warning\" fill=\"solid\">\n          Masuk</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer> -->";
      /***/
    },

    /***/
    "./src/app/_services/api.service.ts":
    /*!******************************************!*\
      !*** ./src/app/_services/api.service.ts ***!
      \******************************************/

    /*! exports provided: ApiService */

    /***/
    function srcApp_servicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ApiService = /*#__PURE__*/function () {
        // basepath = '/api';
        function ApiService(http, _platform) {
          _classCallCheck(this, ApiService);

          // if(this._platform.is('cordova'))
          this.http = http;
          this._platform = _platform;
        }

        _createClass(ApiService, [{
          key: "setHeader",
          value: function setHeader() {
            var currentUser = localStorage.getItem('currentUser');
            var headerOption = {
              'accept-language': 'id',
              'Content-Type': 'application/x-www-form-urlencoded'
            };

            if (currentUser != null && currentUser !== "undefined") {
              var d = JSON.parse(currentUser);

              if (d.api_key != '') {
                headerOption['x-api-key'] = d.api_key;
              }
            }

            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerOption);
          }
        }, {
          key: "find",
          value: function find(endpoint, params) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + endpoint, {
              headers: this.setHeader(),
              params: params
            });
          }
        }, {
          key: "get",
          value: function get(endpoint, params) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + endpoint, {
              headers: this.setHeader(),
              params: params
            });
          }
        }, {
          key: "post",
          value: function post(endpoint, params) {
            var body = this.genrateParam(params);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + endpoint), body, {
              headers: this.setHeader()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "put",
          value: function put(endpoint, params) {
            var body = this.genrateParam(params);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + endpoint), body, {
              headers: this.setHeader()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "patch",
          value: function patch(endpoint, params) {
            var body = this.genrateParam(params);
            return this.http.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + endpoint), body, {
              headers: this.setHeader()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(endpoint, params) {
            var body = this.genrateParam(params);
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + endpoint), {
              headers: this.setHeader(),
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "genrateParam",
          value: function genrateParam(params) {
            var paramsKey = Object.keys(params);
            var body = '';

            for (var i = 0; i < paramsKey.length; i++) {
              var spr = i == 0 ? '' : '&';
              body = body + spr + paramsKey[i] + '=' + params[paramsKey[i]];
            }

            return body;
          }
        }, {
          key: "post2",
          value: function post2(endpoint, data) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + endpoint, data, {
              headers: this.setHeader()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "./src/app/pages/front/form1/form1.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/front/form1/form1.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFrontForm1Form1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #ffffff;\n  text-align: center;\n}\nion-content #container {\n  padding: 25px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .welcoming {\n  color: #2e9998;\n  font-weight: 600;\n}\nion-content .welcoming-text {\n  color: #2e9998;\n}\nion-content .step-active {\n  background-color: #2f9495 !important;\n  color: #ffffff !important;\n}\nion-content .step {\n  background-color: #b2e2de;\n  color: #2e9998;\n  height: 7px;\n}\nion-footer ion-toolbar {\n  --background: #008080 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJvbnQvZm9ybTEvZm9ybTEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UscUJBQUE7RUFPQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7RUFFQSxnQkFBQTtBQVZKO0FBYUU7RUFDRSxjQUFBO0FBWEo7QUFlRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFiSjtBQWVFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWJKO0FBbUJFO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtBQWhCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zyb250L2Zvcm0xL2Zvcm0xLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLyAtLWJhY2tncm91bmQ6ICNjYWVjZTk7XHJcblxyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgLy8gLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8vIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICNjb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgLndlbGNvbWluZyB7XHJcbiAgICBjb2xvcjogIzJlOTk5ODtcclxuICAgIC8vIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC53ZWxjb21pbmctdGV4dCB7XHJcbiAgICBjb2xvcjogIzJlOTk5ODtcclxuICAgIC8vIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjk0OTUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zdGVwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmUyZGU7XHJcbiAgICBjb2xvcjogIzJlOTk5ODtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwODA4MCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/front/form1/form1.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/front/form1/form1.page.ts ***!
      \*************************************************/

    /*! exports provided: Form1Page */

    /***/
    function srcAppPagesFrontForm1Form1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Form1Page", function () {
        return Form1Page;
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

      var Form1Page = /*#__PURE__*/function () {
        function Form1Page(route, NavController) {
          _classCallCheck(this, Form1Page);

          this.route = route;
          this.NavController = NavController;
          var getisKepalaDesa = this.route.snapshot.paramMap.get('isKepalaDesa');
          this.isKepalaDesa = getisKepalaDesa != null ? getisKepalaDesa : 0;
        }

        _createClass(Form1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            // console.log('Segment changed', ev);
            this.isKepalaDesa = ev.detail.value;
          }
        }, {
          key: "goNext",
          value: function goNext() {
            // this.NavController.navigateForward(['/front/form2', { isKepalaDesa: this.isKepalaDesa }]);
            this.NavController.navigateForward(['/front/form3', {
              isKepalaDesa: this.isKepalaDesa,
              isReadOnly: 0
            }]);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/front'], {
              replaceUrl: true
            });
          }
        }]);

        return Form1Page;
      }();

      Form1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      Form1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form1/form1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form1.page.scss */
        "./src/app/pages/front/form1/form1.page.scss"))["default"]]
      })], Form1Page);
      /***/
    },

    /***/
    "./src/app/pages/front/form2/form2.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/front/form2/form2.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFrontForm2Form2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #ffffff;\n  text-align: center;\n}\nion-content #container {\n  padding: 25px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .welcoming {\n  color: #2e9998;\n  font-weight: 600;\n}\nion-content p {\n  font-size: 17px;\n}\nion-content .welcoming-text {\n  color: #2e9998;\n}\nion-content .step-active {\n  background-color: #2f9495 !important;\n  color: #ffffff !important;\n}\nion-content .step {\n  background-color: #b2e2de;\n  color: #2e9998;\n  height: 7px;\n}\nion-footer ion-toolbar {\n  --background: #008080 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJvbnQvZm9ybTIvZm9ybTIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UscUJBQUE7RUFFQSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUpKO0FBT0U7RUFDRSxlQUFBO0FBTEo7QUFRRTtFQUNFLGNBQUE7QUFOSjtBQVNFO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQVBKO0FBZUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBYko7QUFtQkU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FBaEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZnJvbnQvZm9ybTIvZm9ybTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC8vIC0tYmFja2dyb3VuZDogI2NhZWNlOTtcclxuXHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICNjb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgLndlbGNvbWluZyB7XHJcbiAgICBjb2xvcjogIzJlOTk5ODtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC53ZWxjb21pbmctdGV4dCB7XHJcbiAgICBjb2xvcjogIzJlOTk5ODtcclxuICB9XHJcblxyXG4gIC5zdGVwLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY5NDk1ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvLyAuc3RlcCB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJlMmRlO1xyXG4gIC8vICAgcGFkZGluZzogMTBweDtcclxuICAvLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAvLyAgIGNvbG9yOiAjMmU5OTk4O1xyXG4gIC8vIH1cclxuICAuc3RlcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJlMmRlO1xyXG4gICAgY29sb3I6ICMyZTk5OTg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDgwODAgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/front/form2/form2.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/front/form2/form2.page.ts ***!
      \*************************************************/

    /*! exports provided: Form2Page */

    /***/
    function srcAppPagesFrontForm2Form2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Form2Page", function () {
        return Form2Page;
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

      var Form2Page = /*#__PURE__*/function () {
        function Form2Page(route, NavController, alertController) {
          _classCallCheck(this, Form2Page);

          this.route = route;
          this.NavController = NavController;
          this.alertController = alertController;
          this.isKepalaDesa = this.route.snapshot.paramMap.get('isKepalaDesa');
          var getisReadOnly = this.route.snapshot.paramMap.get('isReadOnly');
          this.isReadOnly = getisReadOnly != null ? getisReadOnly : 1;

          if (this.isKepalaDesa == 1) {
            this.labelKepalaDesa = 'Anda sebagai Kepala Desa';
            this.labelQuestion = 'Apakah anda ingin menjadi satu-satunya orang yang bertanggung jawab memasukkan data dan laporan dari desa Anda?';
          } else {
            this.labelKepalaDesa = 'Anda bukan Kepala Desa';
            this.labelQuestion = 'Apakah Kepala Desa telah menugasi Anda sebagai satu-satunya orang yang dapat menambahkan data?';
          }
        }

        _createClass(Form2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            // console.log('Segment changed', ev);
            this.isReadOnly = ev.detail.value; // console.log(this.isReadOnly);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
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
                        header: 'Akses Terbatas',
                        message: 'Anda memiliki akses yang terbatas, yaitu Baca-saja, pada aplikasi ini. Anda dapat membaca data yang telah diisi oleh pengisi data di Desa Anda, tanpa dapat mengubah data tersebut.',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Lanjutkan',
                          handler: function handler() {
                            _this.goNextSubmit();
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
          key: "goNext",
          value: function goNext() {
            if (this.isReadOnly == 1) {
              this.presentAlertConfirm();
            } else {
              this.goNextSubmit();
            }
          }
        }, {
          key: "goNextSubmit",
          value: function goNextSubmit() {
            this.NavController.navigateForward(['/front/form3', {
              isKepalaDesa: this.isKepalaDesa,
              isReadOnly: this.isReadOnly
            }]);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/front/form1', {
              isKepalaDesa: this.isKepalaDesa
            }], {
              replaceUrl: true
            });
          }
        }]);

        return Form2Page;
      }();

      Form2Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      Form2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form2/form2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form2.page.scss */
        "./src/app/pages/front/form2/form2.page.scss"))["default"]]
      })], Form2Page);
      /***/
    },

    /***/
    "./src/app/pages/front/form3/form3.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/front/form3/form3.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFrontForm3Form3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #ffffff;\n  text-align: center;\n}\nion-content #container {\n  padding: 25px;\n  text-align: center;\n  margin-left: 15px;\n  margin-right: 15px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .welcoming {\n  color: #2e9998;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\nion-content p {\n  font-size: 17px;\n}\nion-content .welcoming-text {\n  color: #2e9998;\n  margin-bottom: 3px;\n  margin-top: 11px;\n  text-align: left;\n}\nion-content .step-active {\n  background-color: #2f9495 !important;\n  color: #ffffff !important;\n}\nion-content .step {\n  background-color: #b2e2de;\n  color: #2e9998;\n  height: 7px;\n}\nion-content .block-answer {\n  background-color: #baddda38;\n  border-radius: 11px;\n  text-align: left;\n  padding: 15px;\n  color: #7abab4;\n}\nion-content .block-answer ion-icon {\n  float: right;\n}\nion-footer ion-toolbar {\n  --background: #008080 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJvbnQvZm9ybTMvZm9ybTMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFFQSxrQkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxlQUFBO0FBSko7QUFPRTtFQUNFLGNBQUE7RUFDSSxrQkFBQTtFQUNKLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQVFFO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQU5KO0FBY0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBWko7QUFlRTtFQUVFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBZEo7QUFnQkk7RUFDSSxZQUFBO0FBZFI7QUFxQkU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FBbEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZnJvbnQvZm9ybTMvZm9ybTMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gIC53ZWxjb21pbmcge1xyXG4gICAgY29sb3I6ICMyZTk5OTg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLndlbGNvbWluZy10ZXh0IHtcclxuICAgIGNvbG9yOiAjMmU5OTk4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjk0OTUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8vIC5zdGVwIHtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNiMmUyZGU7XHJcbiAgLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8vICAgY29sb3I6ICMyZTk5OTg7XHJcbiAgLy8gfVxyXG4gIC5zdGVwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmUyZGU7XHJcbiAgICBjb2xvcjogIzJlOTk5ODtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gIH1cclxuXHJcbiAgLmJsb2NrLWFuc3dlciB7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFkZGRhMzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogIzdhYmFiNDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwODA4MCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/front/form3/form3.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/front/form3/form3.page.ts ***!
      \*************************************************/

    /*! exports provided: Form3Page */

    /***/
    function srcAppPagesFrontForm3Form3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Form3Page", function () {
        return Form3Page;
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

      var Form3Page = /*#__PURE__*/function () {
        function Form3Page(pickerController, route, NavController, alertController, apiService, toastController, loadingController) {
          _classCallCheck(this, Form3Page);

          this.pickerController = pickerController;
          this.route = route;
          this.NavController = NavController;
          this.alertController = alertController;
          this.apiService = apiService;
          this.toastController = toastController;
          this.loadingController = loadingController;
          this.animals = ["Tiger", "Lion", "Elephant", "Fox", "Wolf"];
          this.idPropisi = 0;
          this.viewPropisi = '';
          this.idKabupaten = 0;
          this.viewKabupaten = '';
          this.idKecamatan = 0;
          this.viewKecamatan = '';
          this.idDesa = 0;
          this.viewDesa = '';
          this.listDaerah = [];
          this.isKepalaDesa = this.route.snapshot.paramMap.get('isKepalaDesa');
          var getisReadOnly = this.route.snapshot.paramMap.get('isReadOnly');
          this.isReadOnly = getisReadOnly != null ? getisReadOnly : 0;
        }

        _createClass(Form3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Loading...',
                        mode: "ios",
                        duration: 3000
                      });

                    case 2:
                      this.loading = _context2.sent;
                      this.loading.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(color, header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        header: header,
                        message: message,
                        color: color,
                        mode: "ios",
                        position: "middle",
                        duration: 3000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlertErrorVerify",
          value: function presentAlertErrorVerify(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: header,
                        message: message,
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
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
          key: "presentAlertVerifyCodeDesa",
          value: function presentAlertVerifyCodeDesa() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this2 = this;

              var header, message, alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      header = this.isKepalaDesa == 1 ? 'Masukan Kode Kepala Desa' : 'Masukan Kode Relawan Desa';
                      message = this.isKepalaDesa == 1 ? 'Anda dapat memperoleh kode Desa dari Admin Kecamatan' : 'Anda dapat memperoleh kode Desa dari Kepala Desa atau Admin Kecamatan';
                      _context5.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: header,
                        message: message,
                        mode: "ios",
                        backdropDismiss: false,
                        inputs: [{
                          name: 'confirmationCode',
                          placeholder: 'Input kode ...',
                          type: "text",
                          value: ''
                        }],
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Verifikasi Kode',
                          handler: function handler(data) {
                            _this2.verifyCode(data.confirmationCode);
                          }
                        }]
                      });

                    case 4:
                      alert = _context5.sent;
                      _context5.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "verifyCode",
          value: function verifyCode(confirmationCode) {
            var _this3 = this;

            this.presentLoading(); // console.log(this.idDesa, confirmationCode);

            this.isKepalaDesa;
            var params = {
              isKepalaDesa: this.isKepalaDesa,
              geo_id: this.idDesa,
              geo_auth_code: confirmationCode
            };
            this.subscribe = this.apiService.post('geos/checkgeoscode', params).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        this.loading.dismiss();
                        console.log(data);
                        this.NavController.navigateForward(['/front/form4', {
                          isKepalaDesa: this.isKepalaDesa,
                          isReadOnly: this.isReadOnly,
                          username: data.username,
                          geo_id: this.idDesa,
                          geo_auth_code: confirmationCode
                        }]);

                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            }, function (error) {
              if (error.error.status == -1) {
                _this3.presentAlertErrorVerify('Warning!', 'Kode yang Anda masukan salah');
              } else if (error.error.status == -2) {
                _this3.presentAlertErrorVerify('Warning, Anda menggunakan Kode Kepala Desa', 'Kode yang digunakan sudah teregistrasi');
              } else if (error.error.status == -3) {
                _this3.presentAlertErrorVerify('Warning!', 'Mohon masukan Kode Kepala Desa');
              } else if (error.error.status == -4) {
                _this3.presentAlertErrorVerify('Warning!', 'Mohon masukan Kode Relawan Desa');
              } // this.loading.dismiss();
              // this.presentToast('danger', 'Warning', 'Kode yang di masukan salah');
              // this.presentAlertVerifyCodeDesa();

            });
          }
        }, {
          key: "getDaerah",
          value: function getDaerah(idType) {
            var _this4 = this;

            this.presentLoading();
            return new Promise(function (resolve, rejects) {
              var param = '';

              if (idType == 2) {
                param = '/' + _this4.idPropisi;
              } else if (idType == 3) {
                param = '/' + _this4.idKabupaten;
              } else if (idType == 4) {
                param = '/' + _this4.idKecamatan;
              }

              _this4.listDaerah = [];
              _this4.subscribe = _this4.apiService.get('geos' + param, {}).subscribe(function (data) {
                var result = [];

                if (idType != 1) {
                  result = data.geo;
                } else {
                  result = data;
                }

                _this4.listDaerah = result;
                resolve(result);

                _this4.loading.dismiss();
              });
            });
          }
        }, {
          key: "showPicker",
          value: function showPicker(idType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this5 = this;

              var columns, options, picker;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.getColumnOptions(idType);

                    case 2:
                      _context7.t0 = _context7.sent;
                      _context7.t1 = {
                        name: 'Daerah',
                        options: _context7.t0
                      };
                      columns = [_context7.t1];
                      options = {
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: "Tutup",
                          role: 'cancel'
                        }, {
                          text: 'Pilih',
                          handler: function handler(v) {
                            if (idType == 2) {
                              _this5.idKabupaten = v.Daerah.value;
                              _this5.viewKabupaten = v.Daerah.text;
                              _this5.idKecamatan = 0;
                              _this5.idDesa = 0;
                            } else if (idType == 3) {
                              _this5.idKecamatan = v.Daerah.value;
                              _this5.viewKecamatan = v.Daerah.text;
                              _this5.idDesa = 0;
                            } else if (idType == 4) {
                              _this5.idDesa = v.Daerah.value;
                              _this5.viewDesa = v.Daerah.text;
                            } else {
                              _this5.idPropisi = v.Daerah.value;
                              _this5.viewPropisi = v.Daerah.text;
                              _this5.idKabupaten = 0;
                              _this5.idKecamatan = 0;
                              _this5.idDesa = 0;
                            }
                          }
                        }],
                        columns: columns
                      };
                      _context7.next = 8;
                      return this.pickerController.create(options);

                    case 8:
                      picker = _context7.sent;
                      picker.present();

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getColumnOptions",
          value: function getColumnOptions(idType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var options;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      options = [];
                      _context8.next = 3;
                      return this.getDaerah(idType);

                    case 3:
                      this.listDaerah.forEach(function (x) {
                        options.push({
                          text: x.name,
                          value: x.id
                        });
                      });
                      return _context8.abrupt("return", options);

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "goNext",
          value: function goNext() {
            if (this.idPropisi != 0 && this.idKabupaten != 0 && this.idKecamatan != 0 && this.idDesa != 0) {
              if (this.isReadOnly == 0) {
                this.presentAlertVerifyCodeDesa();
              } else {}
            } else {
              this.presentToast('danger', 'Warning', 'Mohon isi semua formulir');
            } // this.NavController.navigateRoot('/home', { replaceUrl: true });

          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/front/form1', {
              isKepalaDesa: this.isKepalaDesa,
              isReadOnly: this.isReadOnly
            }], {
              replaceUrl: true
            }); // this.NavController.navigateBack(['/front/form2', { isKepalaDesa: this.isKepalaDesa, isReadOnly: this.isReadOnly }], { replaceUrl: true });
          }
        }]);

        return Form3Page;
      }();

      Form3Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      Form3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form3/form3.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form3.page.scss */
        "./src/app/pages/front/form3/form3.page.scss"))["default"]]
      })], Form3Page);
      /***/
    },

    /***/
    "./src/app/pages/front/form4/form4.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/front/form4/form4.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFrontForm4Form4PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #2f9495;\n  --color:#ffffff;\n}\nion-toolbar ion-title {\n  --color:#ffffff;\n}\nion-content {\n  --background: #2f9495;\n}\nion-content #container {\n  padding: 25px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content ion-card-title {\n  color: #2f9495;\n}\nion-content ion-card-content ion-item {\n  border: 1px solid #eaeaea;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\nion-content .input-helper {\n  text-align: left;\n  margin-bottom: 12px;\n  margin-top: 0px;\n  margin-left: 10px;\n  font-size: 13px;\n  color: #9e9e9eb3;\n}\nion-footer ion-toolbar {\n  --background: #008080 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJvbnQvZm9ybTQvZm9ybTQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7QUFDUjtBQUdBO0VBQ0UscUJBQUE7QUFBRjtBQUNHO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKO0FBR0k7RUFDRSxjQUFBO0FBRE47QUFJRTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSFI7QUFRRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zyb250L2Zvcm00L2Zvcm00LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgIC0tY29sb3I6I2ZmZmZmZjtcclxuXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIC0tY29sb3I6I2ZmZmZmZjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgI2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgY29sb3I6ICMyZjk0OTU7XHJcbiAgICB9XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWhlbHBlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM5ZTllOWViMztcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA4MDgwICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/front/form4/form4.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/front/form4/form4.page.ts ***!
      \*************************************************/

    /*! exports provided: Form4Page */

    /***/
    function srcAppPagesFrontForm4Form4PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Form4Page", function () {
        return Form4Page;
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


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/authentication.service */
      "./src/app/_services/authentication.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/api.service */
      "./src/app/_services/api.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var Form4Page = /*#__PURE__*/function () {
        function Form4Page(NavController, route, toastController, alertController, apiService, authService, loadingController) {
          _classCallCheck(this, Form4Page);

          this.NavController = NavController;
          this.route = route;
          this.toastController = toastController;
          this.alertController = alertController;
          this.apiService = apiService;
          this.authService = authService;
          this.loadingController = loadingController;
          this.username = '';
          this.fullname = '';
          this.phoneNumber = '';
          this.password = '';
          this.repassword = '';
          this.errorPassword = false;
          this.params = this.route.snapshot.params;
          this.isKepalaDesa = this.params.isKepalaDesa;
          this.username = this.params.username;
          var getisReadOnly = this.params.isReadOnly;
          this.isReadOnly = getisReadOnly != null ? getisReadOnly : 0;
        }

        _createClass(Form4Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Loading...',
                        mode: "ios",
                        duration: 5000
                      });

                    case 2:
                      this.loading = _context9.sent;
                      this.loading.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(color, header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var toast;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toastController.create({
                        header: header,
                        message: message,
                        color: color,
                        mode: "ios",
                        position: "middle",
                        duration: 3000
                      });

                    case 2:
                      toast = _context10.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Konfirmasi !',
                        message: 'Pastikan data yang Anda masukan benar !',
                        mode: 'ios',
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Kirim',
                          handler: function handler() {
                            _this6.submitRegistration();
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
          key: "presentAlertConfirmError",
          value: function presentAlertConfirmError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Username sudah digunakan',
                        message: 'Anda akan di kembalikan ke halaman sebelumnya',
                        mode: 'ios',
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Oke',
                          handler: function handler() {
                            _this7.goBack();
                          }
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
          key: "confirmation",
          value: function confirmation() {
            var _this8 = this;

            if (this.username != '' && this.fullname != '' && this.phoneNumber != '' && this.password != '' && this.repassword != '') {
              if (this.password.length >= 6) {
                if (this.password == this.repassword) {
                  this.presentAlertConfirm();
                } else {
                  this.errorPassword = true;
                  setTimeout(function () {
                    _this8.errorPassword = false;
                  }, 10000);
                  this.presentToast('danger', 'Re-Password', 'Re-Password tidak cocok');
                }
              } else {
                this.presentToast('danger', 'Password', 'Password minimal 6 karakter');
              }
            } else {
              this.presentToast('danger', 'Warning', 'Mohon isi semua data');
            }
          }
        }, {
          key: "submitRegistration",
          value: function submitRegistration() {
            var _this9 = this;

            this.presentLoading(); // this.params

            var params = {
              email: this.username,
              password: this.password,
              name: this.fullname,
              phone_number: this.phoneNumber,
              geo_id: this.params.geo_id,
              geo_auth_code: this.params.geo_auth_code,
              position: this.isKepalaDesa
            };
            this.subscribe = this.apiService.post('users', params).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        this.loginToApps();

                      case 1:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            }, function (error) {
              _this9.presentAlertConfirmError();
            });
          }
        }, {
          key: "loginToApps",
          value: function loginToApps() {
            var _this10 = this;

            this.subsLogin = this.authService.loginUser(this.username, this.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
              _this10.loading.dismiss(); // console.log(data);          


              _this10.NavController.navigateRoot('/home', {
                replaceUrl: true
              });
            }, function (error) {// this.presentAlertConfirm();
              // console.log(error);
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.NavController.navigateBack(['/front/form3', {
              isKepalaDesa: this.isKepalaDesa,
              isReadOnly: this.isReadOnly
            }]);
          }
        }]);

        return Form4Page;
      }();

      Form4Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      Form4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form4.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/form4/form4.page.html"))["default"],
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form4.page.scss */
        "./src/app/pages/front/form4/form4.page.scss"))["default"]]
      })], Form4Page);
      /***/
    },

    /***/
    "./src/app/pages/front/front-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/front/front-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: FrontPageRoutingModule */

    /***/
    function srcAppPagesFrontFrontRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FrontPageRoutingModule", function () {
        return FrontPageRoutingModule;
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


      var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.page */
      "./src/app/pages/front/home/home.page.ts");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.page */
      "./src/app/pages/front/login/login.page.ts");
      /* harmony import */


      var _form1_form1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form1/form1.page */
      "./src/app/pages/front/form1/form1.page.ts");
      /* harmony import */


      var _form2_form2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form2/form2.page */
      "./src/app/pages/front/form2/form2.page.ts");
      /* harmony import */


      var _form3_form3_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./form3/form3.page */
      "./src/app/pages/front/form3/form3.page.ts");
      /* harmony import */


      var _form4_form4_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./form4/form4.page */
      "./src/app/pages/front/form4/form4.page.ts"); // import('./home/home.module')


      var routes = [{
        path: '',
        component: _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }, {
        path: 'login',
        component: _login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]
      }, {
        path: 'form1',
        component: _form1_form1_page__WEBPACK_IMPORTED_MODULE_5__["Form1Page"]
      }, {
        path: 'form2',
        component: _form2_form2_page__WEBPACK_IMPORTED_MODULE_6__["Form2Page"]
      }, {
        path: 'form3',
        component: _form3_form3_page__WEBPACK_IMPORTED_MODULE_7__["Form3Page"]
      }, {
        path: 'form4',
        component: _form4_form4_page__WEBPACK_IMPORTED_MODULE_8__["Form4Page"]
      }];

      var FrontPageRoutingModule = function FrontPageRoutingModule() {
        _classCallCheck(this, FrontPageRoutingModule);
      };

      FrontPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FrontPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/front/front.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/front/front.module.ts ***!
      \*********************************************/

    /*! exports provided: FrontPageModule */

    /***/
    function srcAppPagesFrontFrontModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FrontPageModule", function () {
        return FrontPageModule;
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


      var _front_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./front-routing.module */
      "./src/app/pages/front/front-routing.module.ts");
      /* harmony import */


      var _home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home/home.page */
      "./src/app/pages/front/home/home.page.ts");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.page */
      "./src/app/pages/front/login/login.page.ts");
      /* harmony import */


      var _form1_form1_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./form1/form1.page */
      "./src/app/pages/front/form1/form1.page.ts");
      /* harmony import */


      var _form2_form2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./form2/form2.page */
      "./src/app/pages/front/form2/form2.page.ts");
      /* harmony import */


      var _form3_form3_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./form3/form3.page */
      "./src/app/pages/front/form3/form3.page.ts");
      /* harmony import */


      var _form4_form4_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./form4/form4.page */
      "./src/app/pages/front/form4/form4.page.ts");

      var FrontPageModule = function FrontPageModule() {
        _classCallCheck(this, FrontPageModule);
      };

      FrontPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _front_routing_module__WEBPACK_IMPORTED_MODULE_5__["FrontPageRoutingModule"]],
        declarations: [_home_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _form1_form1_page__WEBPACK_IMPORTED_MODULE_8__["Form1Page"], _form2_form2_page__WEBPACK_IMPORTED_MODULE_9__["Form2Page"], _form3_form3_page__WEBPACK_IMPORTED_MODULE_10__["Form3Page"], _form4_form4_page__WEBPACK_IMPORTED_MODULE_11__["Form4Page"]]
      })], FrontPageModule);
      /***/
    },

    /***/
    "./src/app/pages/front/home/home.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/front/home/home.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFrontHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-image {\n  background: url(\"/assets/bg.png\") no-repeat center center fixed;\n}\n\nion-content {\n  --background: url(\"/assets/bg.png\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\nion-content ion-slides {\n  height: 65%;\n  --bullet-background: #4caf50;\n  --bullet-background-active: #008080;\n}\n\nion-content ion-slides .swiper-slide img {\n  max-width: 250px;\n}\n\nion-footer ion-toolbar {\n  --background: #008080 !important;\n  min-height: 70px;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n#container {\n  padding: 25px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container .welcoming {\n  color: #ffffff;\n  font-weight: 600;\n}\n\n#container .welcoming-text {\n  color: #ffffff;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJvbnQvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLCtEQUFBO0FBTEo7O0FBV0E7RUFFRSwyREFBQTtFQUdBLHNCQUFBO0VBR0Esa0JBQUE7QUFYRjs7QUFtQkU7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDRCxtQ0FBQTtBQWpCSDs7QUFtQkk7RUFDRSxnQkFBQTtBQWpCTjs7QUE4QkU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FBM0JKOztBQWdDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUE3QkY7O0FBZ0NBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQTlCRjs7QUFpQ0E7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7QUEvQkY7O0FBa0NBO0VBRUUsY0FBQTtBQWhDRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UscUJBQUE7QUFsQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mcm9udC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC5iZy1pbWFnZSB7XHJcbi8vICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvYmcucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbi8vICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vICB9XHJcblxyXG4uYmctaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgLy8gLS1wYWRkaW5nLWJvdHRvbSA6IDBweDtcclxuICAvLyAtLXBhZGRpbmctZW5kIDogMjVweDtcclxuICAvLyAtLXBhZGRpbmctc3RhcnQgOiAyNXB4O1xyXG4gIC8vIC0tcGFkZGluZy10b3AgOiAyMHB4O1xyXG4gIFxyXG5cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogNjUlO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzRjYWY1MDtcclxuICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMwMDgwODA7XHJcblxyXG4gICAgLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICB9XHJcblxyXG4gIFxyXG5cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwODA4MCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi5yaXBwbGUtcGFyZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciAud2VsY29taW5nIHtcclxuICAvLyBjb2xvcjogIzJlOTk5ODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIC53ZWxjb21pbmctdGV4dCB7XHJcbiAgLy8gY29sb3I6ICMyZTk5OTg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/front/home/home.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/front/home/home.page.ts ***!
      \***********************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesFrontHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // import { IonContent, ModalController, NavController, AlertController, LoadingController } from '@ionic/angular';


      var HomePage = /*#__PURE__*/function () {
        function HomePage(loadingController, alertCtrl, platform) {
          _classCallCheck(this, HomePage);

          // this.presentLoading();
          this.loadingController = loadingController;
          this.alertCtrl = alertCtrl;
          this.platform = platform;
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Menyiapkan halaman...',
                        mode: "ios",
                        duration: 2000
                      });

                    case 2:
                      loading = _context14.sent;
                      _context14.next = 5;
                      return loading.present();

                    case 5:
                      _context14.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context14.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "slidesDidLoad",
          value: function slidesDidLoad(slides) {// slides.startAutoplay();
          }
        }, {
          key: "slideChanged",
          value: function slideChanged(slides) {// slides.startAutoplay();
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/front/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "./src/app/pages/front/login/login.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/front/login/login.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFrontLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #caece9;\n}\n\nion-content {\n  --background: #2f9495;\n}\n\nion-content #container {\n  padding: 5px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nion-content ion-item {\n  border: 1px solid #eaeaea;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\nion-footer ion-toolbar {\n  --background: #008080 !important;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJvbnQvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBRUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFPRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zyb250L2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICNjYWVjZTk7XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA4MDgwICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/front/login/login.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/front/login/login.page.ts ***!
      \*************************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesFrontLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/authentication.service */
      "./src/app/_services/authentication.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(authService, NavController, httpClient, loadingController, alertController) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
          this.NavController = NavController;
          this.httpClient = httpClient;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.type = 'password';
          this.icon = 'eye-off-outline';
          this.iconColor = 'medium';
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.loadingPresent = true;
                      _context15.next = 3;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Loading...',
                        mode: "ios",
                        duration: 2000
                      });

                    case 3:
                      this.loading = _context15.sent;
                      _context15.next = 6;
                      return this.loading.present();

                    case 6:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var alert;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Gagal Login',
                        message: 'Username dan Password Anda Tidak Cocok',
                        mode: "ios",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Tutup',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
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
          key: "loginUser",
          value: function loginUser() {
            var _this11 = this;

            this.presentLoading();
            this.subsLogin = this.authService.loginUser(this.username, this.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              // console.log(data);          
              _this11.NavController.navigateRoot('/home', {
                replaceUrl: true
              });
            }, function (error) {
              _this11.presentAlertConfirm(); // console.log(error);

            });
          }
        }, {
          key: "showPassword",
          value: function showPassword() {
            if (this.type == 'password') {
              this.type = 'text';
              this.icon = 'eye-outline';
              this.iconColor = 'primary';
            } else {
              this.type = 'password';
              this.icon = 'eye-off-outline';
              this.iconColor = 'medium';
            }
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/front/login/login.page.html"))["default"],
        providers: [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/front/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-front-front-module-es5.js.map