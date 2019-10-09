(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewfood-viewfood-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/viewfood/viewfood.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewfood/viewfood.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadManager()\">\n        <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{item.foodname}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <img src=\"{{item.foodpic}}\" />\n          <p>{{item.description}}</p>\n          <p>{{item.foodprice}}</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/viewfood/viewfood.module.ts":
/*!*********************************************!*\
  !*** ./src/app/viewfood/viewfood.module.ts ***!
  \*********************************************/
/*! exports provided: ViewfoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewfoodPageModule", function() { return ViewfoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewfood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewfood.page */ "./src/app/viewfood/viewfood.page.ts");







var routes = [
    {
        path: '',
        component: _viewfood_page__WEBPACK_IMPORTED_MODULE_6__["ViewfoodPage"]
    }
];
var ViewfoodPageModule = /** @class */ (function () {
    function ViewfoodPageModule() {
    }
    ViewfoodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewfood_page__WEBPACK_IMPORTED_MODULE_6__["ViewfoodPage"]]
        })
    ], ViewfoodPageModule);
    return ViewfoodPageModule;
}());



/***/ }),

/***/ "./src/app/viewfood/viewfood.page.scss":
/*!*********************************************!*\
  !*** ./src/app/viewfood/viewfood.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\n\n.icn {\n  width: 30px;\n  height: 30px;\n}\n\nion-card {\n  width: 90%;\n  margin: auto;\n  border-top: 3px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2Zvb2QvRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxcdmlld2Zvb2RcXHZpZXdmb29kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld2Zvb2Qvdmlld2Zvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsYUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdmb29kL3ZpZXdmb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmljbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJke1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmx1ZTtcclxuICB9XHJcblxyXG4iLCJpb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5pY24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/viewfood/viewfood.page.ts":
/*!*******************************************!*\
  !*** ./src/app/viewfood/viewfood.page.ts ***!
  \*******************************************/
/*! exports provided: ViewfoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewfoodPage", function() { return ViewfoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");





var ViewfoodPage = /** @class */ (function () {
    function ViewfoodPage(alertCtrl, auth, nav, loadingController) {
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
    ViewfoodPage.prototype.ngOnInit = function () {
    };
    ViewfoodPage.prototype.initializeItems = function () {
        var _this = this;
        this.auth.viewFoodItems().subscribe(function (food) {
            for (var i in food) {
                console.log(food);
                var foodObj = {
                    foodid: food[i][0],
                    foodname: food[i][2],
                    description: food[i][3],
                    foodprice: food[i][4],
                    foodpic: food[i][5],
                    foodshop: food[i][1]
                };
                _this.items.push(foodObj);
                console.log(_this.items);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ViewfoodPage.prototype.loadManager = function () {
        this.nav.navigateBack('/manager');
        this.auth.setShop(this.shopid);
    };
    ViewfoodPage.prototype.presentLoadingWithOptions = function () {
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
    ViewfoodPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    ViewfoodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewfood',
            template: __webpack_require__(/*! raw-loader!./viewfood.page.html */ "./node_modules/raw-loader/index.js!./src/app/viewfood/viewfood.page.html"),
            styles: [__webpack_require__(/*! ./viewfood.page.scss */ "./src/app/viewfood/viewfood.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], ViewfoodPage);
    return ViewfoodPage;
}());



/***/ })

}]);
//# sourceMappingURL=viewfood-viewfood-module-es5.js.map