(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manager-manager-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      MANAGER\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"main\" (click)='loadAddCashier()' class=\"d-flex flex-wrap align-content-center\" >\n          Add Cashiers\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"main\" (click)='loadCashiers()' class=\"d-flex flex-wrap align-content-center\">\n          View Cashiers\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"main\" (click)='loadAddFood()' class=\"d-flex flex-wrap align-content-center\" >\n          Add items\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"main\"  (click)='loadFood()' class=\"d-flex flex-wrap align-content-center\">\n          View items\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"main\" (click)='loadAddOffer()' class=\"d-flex flex-wrap align-content-center\" >\n          Add offers\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"main\" (click)='loadOffer()' class=\"d-flex flex-wrap align-content-center\">\n          View offers\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/manager/manager.module.ts":
/*!*******************************************!*\
  !*** ./src/app/manager/manager.module.ts ***!
  \*******************************************/
/*! exports provided: ManagerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerPageModule", function() { return ManagerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manager.page */ "./src/app/manager/manager.page.ts");







const routes = [
    {
        path: '',
        component: _manager_page__WEBPACK_IMPORTED_MODULE_6__["ManagerPage"]
    }
];
let ManagerPageModule = class ManagerPageModule {
};
ManagerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_manager_page__WEBPACK_IMPORTED_MODULE_6__["ManagerPage"]]
    })
], ManagerPageModule);



/***/ }),

/***/ "./src/app/manager/manager.page.scss":
/*!*******************************************!*\
  !*** ./src/app/manager/manager.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\nion-grid {\n  margin-top: 50px;\n}\nion-button {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n  height: 50px;\n  width: 90%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxtYW5hZ2VyXFxtYW5hZ2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFuYWdlci9tYW5hZ2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERUE7RUFDSSxnQkFBQTtBQ0NKO0FERUE7RUFDSSwyRUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlci9tYW5hZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDEwcHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjZmZmO1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW9uLWdyaWQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/manager/manager.page.ts":
/*!*****************************************!*\
  !*** ./src/app/manager/manager.page.ts ***!
  \*****************************************/
/*! exports provided: ManagerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerPage", function() { return ManagerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");




let ManagerPage = class ManagerPage {
    constructor(alertCtrl, auth, nav) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.items = [];
        this.shopId = this.auth.getShop();
        console.log("on back---" + this.shopId);
        this.initializeItems();
    }
    ngOnInit() {
    }
    initializeItems() {
        this.auth.getManagers().subscribe(manager => {
            console.log(manager);
            console.log(this.auth.getShop());
            console.log(this.auth.getUser());
        }, error => {
            console.log(error);
        });
    }
    loadAddFood() {
        this.nav.navigateForward('addfood');
    }
    loadAddCashier() {
        this.nav.navigateForward('addcashier');
    }
    loadCashiers() {
        this.nav.navigateForward('viewcashier');
    }
    loadFood() {
        this.nav.navigateForward('viewfood');
    }
    loadAddOffer() {
        this.nav.navigateForward('addoffer');
    }
    loadOffer() {
        this.nav.navigateForward('viewoffers');
    }
};
ManagerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ManagerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager',
        template: __webpack_require__(/*! raw-loader!./manager.page.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager.page.html"),
        styles: [__webpack_require__(/*! ./manager.page.scss */ "./src/app/manager/manager.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ManagerPage);



/***/ })

}]);
//# sourceMappingURL=manager-manager-module-es2015.js.map