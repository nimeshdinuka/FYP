(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewoffers-viewoffers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/viewoffers/viewoffers.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewoffers/viewoffers.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadManager()\">\n        <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{item.offername}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <img src=\"{{item.offerpic}}\" />\n          <p>{{item.offerdescription}}</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/viewoffers/viewoffers.module.ts":
/*!*************************************************!*\
  !*** ./src/app/viewoffers/viewoffers.module.ts ***!
  \*************************************************/
/*! exports provided: ViewoffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewoffersPageModule", function() { return ViewoffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewoffers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewoffers.page */ "./src/app/viewoffers/viewoffers.page.ts");







var routes = [
    {
        path: '',
        component: _viewoffers_page__WEBPACK_IMPORTED_MODULE_6__["ViewoffersPage"]
    }
];
var ViewoffersPageModule = /** @class */ (function () {
    function ViewoffersPageModule() {
    }
    ViewoffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewoffers_page__WEBPACK_IMPORTED_MODULE_6__["ViewoffersPage"]]
        })
    ], ViewoffersPageModule);
    return ViewoffersPageModule;
}());



/***/ }),

/***/ "./src/app/viewoffers/viewoffers.page.scss":
/*!*************************************************!*\
  !*** ./src/app/viewoffers/viewoffers.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\n\n.icn {\n  width: 30px;\n  height: 30px;\n}\n\nion-card {\n  width: 90%;\n  margin: auto;\n  border-top: 3px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld29mZmVycy9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFx2aWV3b2ZmZXJzXFx2aWV3b2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld29mZmVycy92aWV3b2ZmZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3b2ZmZXJzL3ZpZXdvZmZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuaWNuIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsdWU7XHJcbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5pY24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/viewoffers/viewoffers.page.ts":
/*!***********************************************!*\
  !*** ./src/app/viewoffers/viewoffers.page.ts ***!
  \***********************************************/
/*! exports provided: ViewoffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewoffersPage", function() { return ViewoffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");





var ViewoffersPage = /** @class */ (function () {
    function ViewoffersPage(alertCtrl, auth, nav, loadingController) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.loadingController = loadingController;
        this.items = [];
        this.createSuccess = false;
        this.initializeItems();
        this.presentLoadingWithOptions();
        this.shopid = this.auth.getShop();
    }
    ViewoffersPage.prototype.ngOnInit = function () {
    };
    ViewoffersPage.prototype.initializeItems = function () {
        var _this = this;
        this.auth.viewOffers().subscribe(function (offer) {
            for (var i in offer) {
                console.log(offer);
                var offerObj = {
                    offerid: offer[i][0],
                    offername: offer[i][1],
                    offerdescription: offer[i][2],
                    offerpic: offer[i][3],
                    offershop: offer[i][4]
                };
                _this.items.push(offerObj);
                console.log(_this.items);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ViewoffersPage.prototype.loadManager = function () {
        this.nav.navigateBack('/manager');
        this.auth.setShop(this.shopid);
    };
    ViewoffersPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: "bubbles",
                            duration: 1500,
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ViewoffersPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    ViewoffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewoffers',
            template: __webpack_require__(/*! raw-loader!./viewoffers.page.html */ "./node_modules/raw-loader/index.js!./src/app/viewoffers/viewoffers.page.html"),
            styles: [__webpack_require__(/*! ./viewoffers.page.scss */ "./src/app/viewoffers/viewoffers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], ViewoffersPage);
    return ViewoffersPage;
}());



/***/ })

}]);
//# sourceMappingURL=viewoffers-viewoffers-module-es5.js.map