(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcashier-addcashier-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addcashier/addcashier.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addcashier/addcashier.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadManager()\">\n          <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed class=\"abtdiv\">\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">First Name*</ion-label>\n            <ion-input name=\"firstname\" placeholder=\"Enter your First Name\" [(ngModel)]='addCashierCredentials.firstname'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Last Name*</ion-label>\n            <ion-input name=\"lastname\" placeholder=\"Enter your Last Name\" [(ngModel)]='addCashierCredentials.lastname'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Email*</ion-label>\n            <ion-input name=\"email\" placeholder=\"Enter your Email\" [(ngModel)]='addCashierCredentials.email'></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Mobile Number*</ion-label>\n            <ion-input name=\"mobileno\" placeholder=\"Enter your Mobile No.\" [(ngModel)]='addCashierCredentials.mobileno'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Username*</ion-label>\n            <ion-input name=\"password\" placeholder=\"Enter your Username\" [(ngModel)]='addCashierCredentials.username'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Password*</ion-label>\n            <ion-input type='password' name=\"password\" placeholder=\"Enter your Password\"\n              [(ngModel)]='addCashierCredentials.password'></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ezfoodlog\">\n      <ion-col class=\"col\">\n        <div class=\"d-flex justify-content-center \">\n          <ion-button color=\"main\" (click)='addCashier()'>\n            Add \n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/addcashier/addcashier.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addcashier/addcashier.module.ts ***!
  \*************************************************/
/*! exports provided: AddcashierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcashierPageModule", function() { return AddcashierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcashier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcashier.page */ "./src/app/addcashier/addcashier.page.ts");







var routes = [
    {
        path: '',
        component: _addcashier_page__WEBPACK_IMPORTED_MODULE_6__["AddcashierPage"]
    }
];
var AddcashierPageModule = /** @class */ (function () {
    function AddcashierPageModule() {
    }
    AddcashierPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addcashier_page__WEBPACK_IMPORTED_MODULE_6__["AddcashierPage"]]
        })
    ], AddcashierPageModule);
    return AddcashierPageModule;
}());



/***/ }),

/***/ "./src/app/addcashier/addcashier.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addcashier/addcashier.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\nion-input {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.icn {\n  width: 35px;\n  height: 35px;\n}\nion-label {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkY2FzaGllci9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxhZGRjYXNoaWVyXFxhZGRjYXNoaWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkY2FzaGllci9hZGRjYXNoaWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRjYXNoaWVyL2FkZGNhc2hpZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmljbiB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjZmZmO1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaWNuIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/addcashier/addcashier.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addcashier/addcashier.page.ts ***!
  \***********************************************/
/*! exports provided: AddcashierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcashierPage", function() { return AddcashierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");




var AddcashierPage = /** @class */ (function () {
    function AddcashierPage(alertCtrl, auth, nav) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.createSuccess = false;
        this.addCashierCredentials = { firstname: '', lastname: '', email: '', mobileno: '', username: '', password: '', shop: 0 };
        this.addCashierCredentials.shop = this.auth.getShop();
        console.log(this.addCashierCredentials.shop);
    }
    AddcashierPage.prototype.ngOnInit = function () {
    };
    AddcashierPage.prototype.addCashier = function () {
        var _this = this;
        this.auth.addCashier(this.addCashierCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup('Success', 'Cashier Added Successfully.');
            }
            else {
                _this.showPopup('Error', 'Problem adding Cashier.');
            }
        }, function (error) {
            _this.showPopup('Error', error);
        });
    };
    AddcashierPage.prototype.loadManager = function () {
        this.nav.navigateBack('/manager');
        this.auth.setShop(this.addCashierCredentials.shop);
    };
    AddcashierPage.prototype.showPopup = function (title, text) {
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
    AddcashierPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    AddcashierPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcashier',
            template: __webpack_require__(/*! raw-loader!./addcashier.page.html */ "./node_modules/raw-loader/index.js!./src/app/addcashier/addcashier.page.html"),
            styles: [__webpack_require__(/*! ./addcashier.page.scss */ "./src/app/addcashier/addcashier.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AddcashierPage);
    return AddcashierPage;
}());



/***/ })

}]);
//# sourceMappingURL=addcashier-addcashier-module-es5.js.map