(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      ADMIN\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"main\" href=\"/addmanager\" class=\"d-flex flex-wrap align-content-center\" >\n          Add Managers\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"main\" href=\"/viewmanager\" class=\"d-flex flex-wrap align-content-center\" >\n          View Managers\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.page */ "./src/app/admin/admin.page.ts");







const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]
    }
];
let AdminPageModule = class AdminPageModule {
};
AdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
    })
], AdminPageModule);



/***/ }),

/***/ "./src/app/admin/admin.page.scss":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\nion-grid {\n  margin-top: 50px;\n}\nion-button {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n  height: 50px;\n  margin: auto;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxcYWRtaW5cXGFkbWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsYUFBQTtBQ0NKO0FEQUk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRU47QURFRTtFQUNFLGdCQUFBO0FDQ0o7QURFRTtFQUNFLDJFQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi10b29sYmFyIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tZ3JpZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDEwcHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfSIsImlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin.page.ts":
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPage = class AdminPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.page.html"),
        styles: [__webpack_require__(/*! ./admin.page.scss */ "./src/app/admin/admin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminPage);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map