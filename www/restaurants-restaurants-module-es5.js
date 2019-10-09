(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurants-restaurants-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/restaurants/restaurants.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/restaurants/restaurants.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-title>\n      <div> {{userName}}</div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar placeholder=\"Search Restaurant\" showCancelButton=\"focus\"></ion-searchbar>\n  <ion-list *ngFor=\"let item of items\">\n      <ion-card (click)=\"loadMenu(item.shopid)\" >\n        <ion-card-header>\n          <ion-card-title>{{item.shopname}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <img src=\"{{item.shoppic}}\"/>\n          <!-- <p>{{item.description}}</p> -->\n        </ion-card-content>\n      </ion-card>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/restaurants/restaurants.module.ts":
/*!***************************************************!*\
  !*** ./src/app/restaurants/restaurants.module.ts ***!
  \***************************************************/
/*! exports provided: RestaurantsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPageModule", function() { return RestaurantsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restaurants_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurants.page */ "./src/app/restaurants/restaurants.page.ts");







var routes = [
    {
        path: '',
        component: _restaurants_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantsPage"]
    }
];
var RestaurantsPageModule = /** @class */ (function () {
    function RestaurantsPageModule() {
    }
    RestaurantsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_restaurants_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantsPage"]]
        })
    ], RestaurantsPageModule);
    return RestaurantsPageModule;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurants.page.scss":
/*!***************************************************!*\
  !*** ./src/app/restaurants/restaurants.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 15px;\n  margin: auto;\n  width: 75%;\n  text-align: center;\n  margin-top: 5px;\n}\n\nion-toolbar {\n  --color: #fff;\n}\n\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\n\nion-searchbar {\n  --border-radius: 25px;\n}\n\nion-item, ion-list {\n  margin: auto;\n  padding: 0;\n}\n\n.rest_btn {\n  float: right;\n}\n\nimg {\n  width: 75%;\n  display: block;\n  margin: auto;\n  max-height: 150px;\n}\n\nion-card {\n  width: 90%;\n  margin: auto;\n  margin-top: 10px;\n  padding-bottom: 30px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n  border-top: 3px solid blue;\n  border-bottom: 3px solid darkgray;\n}\n\nion-card-content {\n  padding: 0;\n}\n\nion-card-header {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudHMvRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxccmVzdGF1cmFudHNcXHJlc3RhdXJhbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVzdGF1cmFudHMvcmVzdGF1cmFudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FEQUk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRU47O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURDRTtFQUNJLFlBQUE7QUNFTjs7QURDRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyRUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUNFSjs7QURDRTtFQUNFLFVBQUE7QUNFSjs7QURDRTtFQUNFLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRzL3Jlc3RhdXJhbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0saW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnJlc3RfYnRue1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCAxMHB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmx1ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBkYXJrZ3JheTtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9IiwicCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjZmZmO1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaW9uLWl0ZW0sIGlvbi1saXN0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucmVzdF9idG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsdWU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBkYXJrZ3JheTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/restaurants/restaurants.page.ts":
/*!*************************************************!*\
  !*** ./src/app/restaurants/restaurants.page.ts ***!
  \*************************************************/
/*! exports provided: RestaurantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPage", function() { return RestaurantsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");





var RestaurantsPage = /** @class */ (function () {
    function RestaurantsPage(alertCtrl, auth, nav, loadingController) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.loadingController = loadingController;
        this.items = [];
        this.userName = this.auth.getUser();
        console.log(this.auth.getUser());
        this.initializeItems();
    }
    RestaurantsPage.prototype.ngOnInit = function () {
    };
    RestaurantsPage.prototype.initializeItems = function () {
        var _this = this;
        this.auth.getShops().subscribe(function (shop) {
            console.log(shop);
            for (var i in shop) {
                var itemObj = {
                    shopid: shop[i][0],
                    shopname: shop[i][1],
                    description: shop[i][2],
                    shoppic: shop[i][3]
                };
                _this.items.push(itemObj);
                console.log(_this.items);
            }
        }, function (error) {
            console.log(error);
        });
    };
    RestaurantsPage.prototype.loadMenu = function (shopid) {
        console.log(shopid);
        this.auth.setShop(shopid);
        this.nav.navigateForward('menu');
    };
    RestaurantsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    RestaurantsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurants',
            template: __webpack_require__(/*! raw-loader!./restaurants.page.html */ "./node_modules/raw-loader/index.js!./src/app/restaurants/restaurants.page.html"),
            styles: [__webpack_require__(/*! ./restaurants.page.scss */ "./src/app/restaurants/restaurants.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], RestaurantsPage);
    return RestaurantsPage;
}());



/***/ })

}]);
//# sourceMappingURL=restaurants-restaurants-module-es5.js.map