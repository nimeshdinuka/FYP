(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewcashier-viewcashier-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/viewcashier/viewcashier.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewcashier/viewcashier.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadManager()\">\n          <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{item.cashierfirstname}} {{item.cashierlastname}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <h6>Contact Details:</h6>\n          <p>Mobile: {{item.cashiermobile}}</p>\n          <p>Email: {{item.cashieremail}}</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/viewcashier/viewcashier.module.ts":
/*!***************************************************!*\
  !*** ./src/app/viewcashier/viewcashier.module.ts ***!
  \***************************************************/
/*! exports provided: ViewcashierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcashierPageModule", function() { return ViewcashierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewcashier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewcashier.page */ "./src/app/viewcashier/viewcashier.page.ts");







const routes = [
    {
        path: '',
        component: _viewcashier_page__WEBPACK_IMPORTED_MODULE_6__["ViewcashierPage"]
    }
];
let ViewcashierPageModule = class ViewcashierPageModule {
};
ViewcashierPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_viewcashier_page__WEBPACK_IMPORTED_MODULE_6__["ViewcashierPage"]]
    })
], ViewcashierPageModule);



/***/ }),

/***/ "./src/app/viewcashier/viewcashier.page.scss":
/*!***************************************************!*\
  !*** ./src/app/viewcashier/viewcashier.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\n.icn {\n  width: 35px;\n  height: 35px;\n}\nion-card {\n  width: 90%;\n  margin: auto;\n  border-top: 3px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2Nhc2hpZXIvRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxcdmlld2Nhc2hpZXJcXHZpZXdjYXNoaWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld2Nhc2hpZXIvdmlld2Nhc2hpZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdjYXNoaWVyL3ZpZXdjYXNoaWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmljbiB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibHVlO1xyXG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjZmZmO1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmljbiB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgYmx1ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/viewcashier/viewcashier.page.ts":
/*!*************************************************!*\
  !*** ./src/app/viewcashier/viewcashier.page.ts ***!
  \*************************************************/
/*! exports provided: ViewcashierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcashierPage", function() { return ViewcashierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");




let ViewcashierPage = class ViewcashierPage {
    constructor(alertCtrl, auth, nav) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.items = [];
        this.shops = [];
        this.createSuccess = false;
        this.initializeItems();
        this.shopid = this.auth.getShop();
    }
    ngOnInit() {
    }
    initializeItems() {
        this.auth.viewCashiers().subscribe(cashier => {
            console.log(cashier);
            for (let i in cashier) {
                var foodObj = {
                    cashierid: cashier[i][0],
                    cashierfirstname: cashier[i][2],
                    cashierlastname: cashier[i][3],
                    cashiermobile: cashier[i][4],
                    cashieremail: cashier[i][5],
                    cashierusername: cashier[i][1],
                    cashiershopid: cashier[i][8]
                };
                this.items.push(foodObj);
                console.log(this.items);
            }
        }, error => {
            console.log(error);
        });
    }
    loadManager() {
        this.nav.navigateBack('/manager');
        this.auth.setShop(this.shopid);
    }
};
ViewcashierPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ViewcashierPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewcashier',
        template: __webpack_require__(/*! raw-loader!./viewcashier.page.html */ "./node_modules/raw-loader/index.js!./src/app/viewcashier/viewcashier.page.html"),
        styles: [__webpack_require__(/*! ./viewcashier.page.scss */ "./src/app/viewcashier/viewcashier.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ViewcashierPage);



/***/ })

}]);
//# sourceMappingURL=viewcashier-viewcashier-module-es2015.js.map