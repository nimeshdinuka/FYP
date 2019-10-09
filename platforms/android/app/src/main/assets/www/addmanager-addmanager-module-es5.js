(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addmanager-addmanager-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addmanager/addmanager.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addmanager/addmanager.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" href=\"/admin\">\n          <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed >\n    <ion-row>\n      <ion-col>\n        <ion-list>\n            <ion-label>Restaurant</ion-label>\n            <ion-select placeholder=\"Select One\" [(ngModel)]='addManagerCredentials.shop' >\n              <ion-select-option *ngFor=\"let item of items\" value=\"{{item.shopid}}\">{{item.shopname}}</ion-select-option>\n            </ion-select>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">First Name*</ion-label>\n            <ion-input name=\"firstname\" placeholder=\"Enter your First Name\" [(ngModel)]='addManagerCredentials.firstname'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Last Name*</ion-label>\n            <ion-input name=\"lastname\" placeholder=\"Enter your Last Name\" [(ngModel)]='addManagerCredentials.lastname'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Email*</ion-label>\n            <ion-input name=\"email\" placeholder=\"Enter your Email\" [(ngModel)]='addManagerCredentials.email'></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Mobile Number*</ion-label>\n            <ion-input name=\"mobileno\" placeholder=\"Enter your Mobile No.\" [(ngModel)]='addManagerCredentials.mobileno'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Username*</ion-label>\n            <ion-input name=\"password\" placeholder=\"Enter your Username\" [(ngModel)]='addManagerCredentials.username'>\n            </ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Password*</ion-label>\n            <ion-input type='password' name=\"password\" placeholder=\"Enter your Password\"\n              [(ngModel)]='addManagerCredentials.password'></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ezfoodlog\">\n      <ion-col class=\"col\">\n        <div class=\"d-flex justify-content-center \">\n          <ion-button color=\"main\" (click)='addManager()'>\n            Add \n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/addmanager/addmanager.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addmanager/addmanager.module.ts ***!
  \*************************************************/
/*! exports provided: AddmanagerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmanagerPageModule", function() { return AddmanagerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addmanager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addmanager.page */ "./src/app/addmanager/addmanager.page.ts");







var routes = [
    {
        path: '',
        component: _addmanager_page__WEBPACK_IMPORTED_MODULE_6__["AddmanagerPage"]
    }
];
var AddmanagerPageModule = /** @class */ (function () {
    function AddmanagerPageModule() {
    }
    AddmanagerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addmanager_page__WEBPACK_IMPORTED_MODULE_6__["AddmanagerPage"]]
        })
    ], AddmanagerPageModule);
    return AddmanagerPageModule;
}());



/***/ }),

/***/ "./src/app/addmanager/addmanager.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addmanager/addmanager.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\nion-input {\n  padding-top: 0;\n  padding-bottom: 0;\n}\nion-label {\n  font-size: 18px;\n  font-weight: bold;\n}\n.icn {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkbWFuYWdlci9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxhZGRtYW5hZ2VyXFxhZGRtYW5hZ2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkbWFuYWdlci9hZGRtYW5hZ2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRtYW5hZ2VyL2FkZG1hbmFnZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pY24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pb24taW5wdXQge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addmanager/addmanager.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addmanager/addmanager.page.ts ***!
  \***********************************************/
/*! exports provided: AddmanagerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmanagerPage", function() { return AddmanagerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");




var AddmanagerPage = /** @class */ (function () {
    function AddmanagerPage(alertCtrl, auth) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.items = [];
        this.createSuccess = false;
        this.addManagerCredentials = { firstname: '', lastname: '', email: '', mobileno: '', username: '', password: '', shop: '' };
        this.initializeItems();
    }
    AddmanagerPage.prototype.ngOnInit = function () {
    };
    AddmanagerPage.prototype.initializeItems = function () {
        var _this = this;
        this.auth.getShops().subscribe(function (shop) {
            console.log(shop);
            for (var i in shop) {
                console.log(i);
                var itemObj = {
                    shopid: shop[i][0],
                    shopname: shop[i][1]
                };
                _this.items.push(itemObj);
                console.log(_this.items);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddmanagerPage.prototype.addManager = function () {
        var _this = this;
        this.auth.addManager(this.addManagerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup('Success', 'Manager Added Successfully.');
            }
            else {
                _this.showPopup('Error', 'Problem adding Cashier.');
            }
        }, function (error) {
            _this.showPopup('Error', error);
        });
    };
    AddmanagerPage.prototype.showPopup = function (title, text) {
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
    AddmanagerPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    AddmanagerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmanager',
            template: __webpack_require__(/*! raw-loader!./addmanager.page.html */ "./node_modules/raw-loader/index.js!./src/app/addmanager/addmanager.page.html"),
            styles: [__webpack_require__(/*! ./addmanager.page.scss */ "./src/app/addmanager/addmanager.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AddmanagerPage);
    return AddmanagerPage;
}());



/***/ })

}]);
//# sourceMappingURL=addmanager-addmanager-module-es5.js.map