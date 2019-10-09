(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadRestaurants()\">\n        <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button  slot=\"end\" (click)=\"loadCart()\">\n        <ion-badge color=\"secondcolor\" *ngIf=\"cart.length > 0\">{{cart.length}}</ion-badge>\n        <ion-icon  name=\"cart\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let item of items\">\n        <ion-card (click)=\"addToCart(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.foodname}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <img src=\"{{item.foodpic}}\" />\n            <p>Rs: {{item.foodprice}}</p>\n            <p>{{item.description}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\n\n.icn {\n  width: 30px;\n  height: 30px;\n}\n\nion-card {\n  width: 100%;\n  max-height: 300px;\n  margin-top: 10px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 4px rgba(0, 0, 0, 0.19);\n  border-top: 3px solid blue;\n}\n\nimg {\n  width: 100%;\n  max-height: 120px;\n  min-height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBFQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuaWNuIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNHB4IHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIiwiaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG4uaWNuIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgYmx1ZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");





var MenuPage = /** @class */ (function () {
    function MenuPage(alertCtrl, auth, nav, loadingController) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.loadingController = loadingController;
        this.items = [];
        this.cart = [];
        this.createSuccess = false;
        this.sliderConfig = {
            slidesPerView: 1.4,
            centeredSlides: true,
            spaceBetween: 10
        };
        this.initializeItems();
        this.cart = this.auth.getCart();
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.prototype.initializeItems = function () {
        var _this = this;
        this.auth.getFoodItems().subscribe(function (food) {
            for (var i in food) {
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
    MenuPage.prototype.loadRestaurants = function () {
        this.nav.navigateBack('/restaurants');
    };
    MenuPage.prototype.presentLoadingWithOptions = function () {
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
    MenuPage.prototype.loadCart = function () {
        this.nav.navigateForward('/cart');
    };
    MenuPage.prototype.addToCart = function (tempdata) {
        console.log(tempdata);
        this.auth.addCart(tempdata);
        console.log(this.auth.getCart());
    };
    MenuPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es5.js.map