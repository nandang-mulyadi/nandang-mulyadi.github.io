(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-media-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/category/category.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/category/category.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Pelajari dan Bagikan</ion-title>\n  </ion-toolbar>\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">{{ params.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div *ngIf=\"Catecories.length > 0\">\n\n    <ion-item *ngFor=\"let sub of Catecories\" (click)=\"getDetailSubCategory(sub)\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"sub.thumbnail_url\"></ion-img>\n      </ion-thumbnail>\n      <ion-label class=\"label-title\">{{ sub.name }}</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/list/list.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/list/list.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Pelajari dan Bagikan</ion-title>\n  </ion-toolbar>\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{ params.category_name }} <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      {{ params.subcategory_name }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n  \n  <div *ngIf=\"medias.length > 0\">\n\n    <ion-item *ngFor=\"let item of medias\" (click)=\"presentActionSheetOptionMedia(item)\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"item.thumbnail_url\"></ion-img>\n      </ion-thumbnail>\n      <ion-label class=\"label-title\">{{ item.name }}</ion-label>\n\n      <ion-button slot=\"end\" color=\"medium\">{{ checkExtention(item.url) }}</ion-button>\n\n\n    </ion-item>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/media.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/media.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Pelajari dan Bagikan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n\n  <div *ngIf=\"catecories.length > 0\">\n\n    <ion-item *ngFor=\"let category of catecories\" (click)=\"actionSubCategory(category)\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{category.thumbnail_url}}\" />\n\n      </ion-thumbnail>\n      <ion-label class=\"label-title\">{{ category.name }}</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"chevron-forward-outline\"></ion-icon>\n\n\n    </ion-item>\n\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/showing/showing.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/showing/showing.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"goBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Pelajari dan Bagikan</ion-title>\n  </ion-toolbar>\n  <ion-toolbar style=\"--background: #eaeaea;color: #333333;\">\n    <ion-title size=\"small\" style=\"padding-bottom: 7px;\">\n      {{ params.category_name }} <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      {{ params.subcategory_name }} <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      {{ params.media_name }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div *ngIf=\"extension=='img'\">\n    <ion-img [src]=\"params.media_url\"></ion-img>\n  </div>\n\n  <div *ngIf=\"extension=='mp4'\">\n    <video controls class=\"video_content\">\n      <source [src]=\"params.media_url\" type='video/mp4' />\n    </video>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/media/category/category.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/media/category/category.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content {\n  --padding-top: 30px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9tZWRpYS9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFLQTtFQUVJLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxvQ0FBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9tZWRpYS9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjY2FlY2U5O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/media/category/category.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/home/media/category/category.page.ts ***!
  \************************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let CategoryPage = class CategoryPage {
    constructor(apiService, route, NavController) {
        this.apiService = apiService;
        this.route = route;
        this.NavController = NavController;
        this.Catecories = [];
        this.params = this.route.snapshot.params;
        // console.log(this.params);
    }
    ngOnInit() {
        this.getListCategory();
    }
    getListCategory() {
        this.Catecories = [];
        this.subsCategory = this.apiService.get('medias?summary=1&category_id=' + this.params.id, {}).subscribe(data => {
            // console.log(data);
            this.Catecories = data;
        });
    }
    getDetailSubCategory(category) {
        var newParams = {
            category_id: this.params.id,
            category_name: this.params.name,
            subcategory_id: category.id,
            subcategory_name: category.name,
        };
        this.NavController.navigateForward(['/home/media/list', newParams]);
    }
    goBack() {
        this.NavController.navigateBack(['/home/media'], { replaceUrl: true });
    }
};
CategoryPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/category/category.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/home/media/category/category.page.scss")).default]
    })
], CategoryPage);



/***/ }),

/***/ "./src/app/pages/home/media/list/list.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/home/media/list/list.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content {\n  --padding-top: 30px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9tZWRpYS9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUscUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBS0E7RUFFSSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksb0NBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbWVkaWEvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNjYWVjZTk7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/media/list/list.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/home/media/list/list.page.ts ***!
  \****************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");







let ListPage = class ListPage {
    constructor(apiService, route, NavController, InAppBrowser, alertController, actionSheetController, socialSharing) {
        this.apiService = apiService;
        this.route = route;
        this.NavController = NavController;
        this.InAppBrowser = InAppBrowser;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.socialSharing = socialSharing;
        this.medias = [];
        this.text = 'Flamenco';
        this.imgurl = 'https://cdn.movvillagetaskforce.com/media/files/Apa_Itu_COVID.jpg';
        this.link = 'https://link.medium.com/JA4amAHFJ5';
        this.params = this.route.snapshot.params;
        console.log(this.params);
    }
    ngOnInit() {
        this.getListMedia();
    }
    getListMedia() {
        this.medias = [];
        this.subscribe = this.apiService.get('medias?category_id=' +
            this.params.category_id + '&subcategory_id=' + this.params.subcategory_id, {}).subscribe(data => {
            // console.log(data);
            this.medias = data;
        });
    }
    getDetailMedia(medias) {
        var newParams = {
            category_id: this.params.category_id,
            category_name: this.params.category_name,
            subcategory_id: this.params.subcategory_id,
            subcategory_name: this.params.subcategory_name,
            media_id: medias.id,
            media_url: medias.url,
            media_name: medias.name
        };
        let extension = this.checkExtention(medias.url);
        if (extension == 'pdf') {
            let framePDF = 'https://docs.google.com/viewerng/viewer?url=' + medias.url + '&embedded=true';
            this.InAppBrowser.create(framePDF, '_system');
            // this.NavController.navigateForward(['/home/media/showing', newParams]);
        }
        else if (extension == 'img') {
            this.NavController.navigateForward(['/home/media/showing', newParams]);
        }
        else if (extension == 'mp4') {
            this.NavController.navigateForward(['/home/media/showing', newParams]);
        }
        else {
            alert(extension);
        }
    }
    presentActionSheetShareWith(medias, extension) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let buttons = [];
            if (extension == 'img') {
                buttons.push({
                    text: 'Whatsapp',
                    handler: () => {
                        this.ShareWhatsapp(medias);
                    }
                }, {
                    text: 'Facebook',
                    handler: () => {
                        this.ShareFacebook(medias);
                    }
                }, {
                    text: 'Instagram',
                    handler: () => {
                        this.SendInstagram(medias);
                    }
                }, {
                    text: 'Twitter',
                    handler: () => {
                        this.SendTwitter(medias);
                    }
                });
            }
            else if (extension == 'pdf') {
                buttons.push({
                    text: 'Whatsapp',
                    handler: () => {
                        this.ShareWhatsapp(medias);
                    }
                });
            }
            buttons.push({
                text: 'Share Link',
                handler: () => {
                    this.sharingMedia(medias);
                }
            }, {
                text: 'Tutup',
                role: 'cancel',
                handler: () => {
                }
            });
            const actionSheet = yield this.actionSheetController.create({
                header: medias.name,
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: buttons
            });
            yield actionSheet.present();
        });
    }
    presentActionSheetOptionMedia(medias) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: medias.name,
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: [{
                        text: 'Buka',
                        handler: () => {
                            this.getDetailMedia(medias);
                        }
                    }, {
                        text: 'Bagikan',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let extension = yield this.checkFileExtention(medias.url);
                            this.presentActionSheetShareWith(medias, extension);
                        })
                    }, 
                    //  {
                    //   text: 'Download',
                    //   handler: () => {
                    //     console.log('Play clicked');
                    //   }
                    // },
                    {
                        text: 'Tutup',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    checkExtention(media_url) {
        let split_media = media_url.split('.');
        let image_extension = ['jpg', 'jpeg', 'png'];
        let extension = (image_extension.includes((split_media[split_media.length - 1])))
            ? 'img' : split_media[split_media.length - 1];
        return extension;
    }
    checkFileExtention(media_url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, rejected) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    let split_media = media_url.split('.');
                    let image_extension = ['jpg', 'jpeg', 'png'];
                    let extension = (image_extension.includes((split_media[split_media.length - 1])))
                        ? 'img' : split_media[split_media.length - 1];
                    resolve(extension);
                }
                catch (Error) {
                    rejected(Error);
                }
            }));
        });
    }
    sharingMedia(medias) {
        var options = {
            message: medias.name,
            url: medias.url,
        };
        this.socialSharing.shareWithOptions(options);
    }
    ShareWhatsapp(medias) {
        // this.text, this.imgurl, this.link
        this.socialSharing.shareViaWhatsApp(medias.name, medias.url, medias.url);
    }
    ShareFacebook(medias) {
        this.socialSharing.shareViaFacebookWithPasteMessageHint(medias.name, medias.url, null /* url */, 'Berhasil dibagikan!');
    }
    SendInstagram(medias) {
        this.socialSharing.shareViaInstagram(medias.name, medias.url);
    }
    SendTwitter(medias) {
        //(this.text, this.imgurl, this.link)
        this.socialSharing.shareViaTwitter(medias.name, medias.url, medias.url);
    }
    goBack() {
        var params = {
            id: this.params.category_id,
            name: this.params.category_name
        };
        // , { replaceUrl: true }
        this.NavController.navigateBack(['/home/media/category', params]);
    }
};
ListPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] }
];
ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/list/list.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/home/media/list/list.page.scss")).default]
    })
], ListPage);



/***/ }),

/***/ "./src/app/pages/home/media/media-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/media/media-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: MediaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPageRoutingModule", function() { return MediaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media.page */ "./src/app/pages/home/media/media.page.ts");
/* harmony import */ var _category_category_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.page */ "./src/app/pages/home/media/category/category.page.ts");
/* harmony import */ var _list_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.page */ "./src/app/pages/home/media/list/list.page.ts");
/* harmony import */ var _showing_showing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showing/showing.page */ "./src/app/pages/home/media/showing/showing.page.ts");







const routes = [
    {
        path: '',
        component: _media_page__WEBPACK_IMPORTED_MODULE_3__["MediaPage"]
    },
    { path: 'category', component: _category_category_page__WEBPACK_IMPORTED_MODULE_4__["CategoryPage"] },
    { path: 'list', component: _list_list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"] },
    { path: 'showing', component: _showing_showing_page__WEBPACK_IMPORTED_MODULE_6__["ShowingPage"] }
];
let MediaPageRoutingModule = class MediaPageRoutingModule {
};
MediaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MediaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/media/media.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/home/media/media.module.ts ***!
  \**************************************************/
/*! exports provided: MediaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPageModule", function() { return MediaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _media_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media-routing.module */ "./src/app/pages/home/media/media-routing.module.ts");
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media.page */ "./src/app/pages/home/media/media.page.ts");
/* harmony import */ var _category_category_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.page */ "./src/app/pages/home/media/category/category.page.ts");
/* harmony import */ var _list_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.page */ "./src/app/pages/home/media/list/list.page.ts");
/* harmony import */ var _showing_showing_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./showing/showing.page */ "./src/app/pages/home/media/showing/showing.page.ts");










let MediaPageModule = class MediaPageModule {
};
MediaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _media_routing_module__WEBPACK_IMPORTED_MODULE_5__["MediaPageRoutingModule"]
        ],
        declarations: [_media_page__WEBPACK_IMPORTED_MODULE_6__["MediaPage"], _category_category_page__WEBPACK_IMPORTED_MODULE_7__["CategoryPage"], _list_list_page__WEBPACK_IMPORTED_MODULE_8__["ListPage"], _showing_showing_page__WEBPACK_IMPORTED_MODULE_9__["ShowingPage"]]
    })
], MediaPageModule);



/***/ }),

/***/ "./src/app/pages/home/media/media.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/home/media/media.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content {\n  --padding-top: 30px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9tZWRpYS9tZWRpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFNQTtFQUVJLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxvQ0FBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9tZWRpYS9tZWRpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDogIzJmOTQ5NTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogI2NhZWNlOTtcclxuICAgIC0tcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5sYWJlbC10aXRsZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/media/media.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/media/media.page.ts ***!
  \************************************************/
/*! exports provided: MediaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPage", function() { return MediaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");





let MediaPage = class MediaPage {
    constructor(NavController, apiService, alertController, router) {
        this.NavController = NavController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.router = router;
        this.catecories = [];
    }
    ngOnInit() {
        this.getListCategory();
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
    getListCategory() {
        this.catecories = [];
        this.subsCategory = this.apiService.get('medias?summary=1', {}).subscribe(data => {
            this.catecories = data;
        }, error => {
            if (error.status == 401) {
                this.alertToRelogin();
            }
        });
    }
    actionSubCategory(params) {
        // alert(id);
        this.NavController.navigateForward(['/home/media/category', params]);
    }
    goBack() {
        this.NavController.navigateBack(['/home'], { replaceUrl: true });
    }
};
MediaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MediaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-media',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./media.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/media.page.html")).default,
        providers: [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./media.page.scss */ "./src/app/pages/home/media/media.page.scss")).default]
    })
], MediaPage);



/***/ }),

/***/ "./src/app/pages/home/media/showing/showing.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/home/media/showing/showing.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #2f9495;\n  color: #ffffff;\n}\n\nion-content {\n  --padding-top: 30px;\n}\n\n.label-title {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9tZWRpYS9zaG93aW5nL3Nob3dpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUscUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBS0E7RUFFSSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksb0NBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbWVkaWEvc2hvd2luZy9zaG93aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmY5NDk1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNjYWVjZTk7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/media/showing/showing.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/media/showing/showing.page.ts ***!
  \**********************************************************/
/*! exports provided: ShowingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowingPage", function() { return ShowingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ShowingPage = class ShowingPage {
    constructor(route, NavController) {
        this.route = route;
        this.NavController = NavController;
        this.extension = '';
        this.params = this.route.snapshot.params;
        let media_url = this.params.media_url;
        let split_media = media_url.split('.');
        let image_extension = ['jpg', 'jpeg', 'png'];
        this.extension = (image_extension.includes((split_media[split_media.length - 1])))
            ? 'img' : split_media[split_media.length - 1];
        this.externalLink = 'https://docs.google.com/viewerng/viewer?url=' + media_url + '&embedded=true';
        console.log(this.externalLink);
        // if (this.extension == 'pdf') {
        // }
    }
    ngOnInit() {
    }
    goBack() {
        this.NavController.navigateBack(['/home/media/list', this.params]);
    }
};
ShowingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ShowingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./showing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/media/showing/showing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./showing.page.scss */ "./src/app/pages/home/media/showing/showing.page.scss")).default]
    })
], ShowingPage);



/***/ })

}]);
//# sourceMappingURL=media-media-module-es2015.js.map