(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addoffer-addoffer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addoffer/addoffer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addoffer/addoffer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadManager()\">\n          <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Title*</ion-label>\n            <ion-input name=\"title\" placeholder=\"Enter Title\" [(ngModel)]='addOfferCredentials.title'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Description*</ion-label>\n            <ion-input name=\"description\" placeholder=\"Enter the Description\" [(ngModel)]='addOfferCredentials.description'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class=\"col\">\n            <div class=\"d-flex justify-content-center \">\n              <ion-button color=\"main\" (click)=\"addOffer()\">\n                Add\n              </ion-button>\n            </div>\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addoffer/addoffer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/addoffer/addoffer.module.ts ***!
  \*********************************************/
/*! exports provided: AddofferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddofferPageModule", function() { return AddofferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addoffer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addoffer.page */ "./src/app/addoffer/addoffer.page.ts");







var routes = [
    {
        path: '',
        component: _addoffer_page__WEBPACK_IMPORTED_MODULE_6__["AddofferPage"]
    }
];
var AddofferPageModule = /** @class */ (function () {
    function AddofferPageModule() {
    }
    AddofferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addoffer_page__WEBPACK_IMPORTED_MODULE_6__["AddofferPage"]]
        })
    ], AddofferPageModule);
    return AddofferPageModule;
}());



/***/ }),

/***/ "./src/app/addoffer/addoffer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/addoffer/addoffer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\nion-input {\n  padding-top: 0;\n  padding-bottom: 0;\n}\nion-label {\n  font-size: 18px;\n  font-weight: bold;\n}\n.icn {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkb2ZmZXIvRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxcYWRkb2ZmZXJcXGFkZG9mZmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkb2ZmZXIvYWRkb2ZmZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQ0RGO0FERUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQVI7QURLQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FES0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2FkZG9mZmVyL2FkZG9mZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmljbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufSIsImlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/addoffer/addoffer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/addoffer/addoffer.page.ts ***!
  \*******************************************/
/*! exports provided: AddofferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddofferPage", function() { return AddofferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");




var AddofferPage = /** @class */ (function () {
    function AddofferPage(alertCtrl, auth, nav) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.createSuccess = false;
        this.addOfferCredentials = { title: '', description: '', shop: 0 };
        console.log(this.auth.getShop());
        this.addOfferCredentials.shop = this.auth.getShop();
    }
    AddofferPage.prototype.ngOnInit = function () {
    };
    AddofferPage.prototype.addOffer = function () {
        var _this = this;
        this.auth.addOffer(this.addOfferCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup('Success', 'Offer Added Successfully.');
            }
            else {
                _this.showPopup('Error', 'Problem adding Offer.');
            }
        }, function (error) {
            _this.showPopup('Error', error);
        });
    };
    AddofferPage.prototype.loadManager = function () {
        this.nav.navigateBack('/manager');
        this.auth.setShop(this.addOfferCredentials.shop);
    };
    AddofferPage.prototype.showPopup = function (title, text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: text,
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function (data) {
                                        if (_this.createSuccess) {
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddofferPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    AddofferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addoffer',
            template: __webpack_require__(/*! raw-loader!./addoffer.page.html */ "./node_modules/raw-loader/index.js!./src/app/addoffer/addoffer.page.html"),
            styles: [__webpack_require__(/*! ./addoffer.page.scss */ "./src/app/addoffer/addoffer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AddofferPage);
    return AddofferPage;
}());



/***/ })

}]);
//# sourceMappingURL=addoffer-addoffer-module-es5.js.map