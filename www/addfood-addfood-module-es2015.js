(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addfood-addfood-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addfood/addfood.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addfood/addfood.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadManager()\">\n          <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col class=\"col\">\n      <div class=\"logindiv\">\n        <ion-item>\n          <ion-label position=\"stacked\">Item Name*</ion-label>\n          <ion-input name=\"itemname\" placeholder=\"Enter Item Name\" [(ngModel)]='addFoodCredentials.itemname'>\n          </ion-input>\n        </ion-item>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"col\">\n      <div class=\"logindiv\">\n        <ion-item>\n          <ion-label position=\"stacked\">Description*</ion-label>\n          <ion-input name=\"description\" placeholder=\"Enter the Description\" [(ngModel)]='addFoodCredentials.description'>\n          </ion-input>\n        </ion-item>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"col\">\n      <div class=\"logindiv\">\n        <ion-item>\n          <ion-label position=\"stacked\">Price*</ion-label>\n          <ion-input name=\"price\" placeholder=\"Enter Price\" [(ngModel)]='addFoodCredentials.price'>\n          </ion-input>\n        </ion-item>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col class=\"col\">\n          <div class=\"d-flex justify-content-center \">\n            <ion-button color=\"main\" (click)=\"addFood()\">\n              Add\n            </ion-button>\n          </div>\n        </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addfood/addfood.module.ts":
/*!*******************************************!*\
  !*** ./src/app/addfood/addfood.module.ts ***!
  \*******************************************/
/*! exports provided: AddfoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfoodPageModule", function() { return AddfoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addfood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addfood.page */ "./src/app/addfood/addfood.page.ts");







const routes = [
    {
        path: '',
        component: _addfood_page__WEBPACK_IMPORTED_MODULE_6__["AddfoodPage"]
    }
];
let AddfoodPageModule = class AddfoodPageModule {
};
AddfoodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addfood_page__WEBPACK_IMPORTED_MODULE_6__["AddfoodPage"]]
    })
], AddfoodPageModule);



/***/ }),

/***/ "./src/app/addfood/addfood.page.scss":
/*!*******************************************!*\
  !*** ./src/app/addfood/addfood.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\n.icn {\n  width: 30px;\n  height: 30px;\n}\nion-input {\n  padding-top: 0;\n  padding-bottom: 0;\n}\nion-label {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkZm9vZC9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxhZGRmb29kXFxhZGRmb29kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkZm9vZC9hZGRmb29kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRmb29kL2FkZGZvb2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmljbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaWNuIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addfood/addfood.page.ts":
/*!*****************************************!*\
  !*** ./src/app/addfood/addfood.page.ts ***!
  \*****************************************/
/*! exports provided: AddfoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfoodPage", function() { return AddfoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");




let AddfoodPage = class AddfoodPage {
    constructor(alertCtrl, auth, nav) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.createSuccess = false;
        this.addFoodCredentials = { itemname: '', description: '', price: '', shop: 0 };
        console.log(this.auth.getShop());
        this.addFoodCredentials.shop = this.auth.getShop();
    }
    ngOnInit() {
    }
    addFood() {
        this.auth.addFood(this.addFoodCredentials).subscribe(success => {
            if (success) {
                this.createSuccess = true;
                this.showPopup('Success', 'Food Added Successfully.');
            }
            else {
                this.showPopup('Error', 'Problem adding Food.');
            }
        }, error => {
            this.showPopup('Error', error);
        });
    }
    loadManager() {
        this.nav.navigateBack('/manager');
        this.auth.setShop(this.addFoodCredentials.shop);
    }
    showPopup(title, text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: text,
                buttons: [
                    {
                        text: 'OK',
                        handler: data => {
                            if (this.createSuccess) {
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AddfoodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AddfoodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addfood',
        template: __webpack_require__(/*! raw-loader!./addfood.page.html */ "./node_modules/raw-loader/index.js!./src/app/addfood/addfood.page.html"),
        styles: [__webpack_require__(/*! ./addfood.page.scss */ "./src/app/addfood/addfood.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], AddfoodPage);



/***/ })

}]);
//# sourceMappingURL=addfood-addfood-module-es2015.js.map