(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadMenu()\">\n        <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list *ngFor=\"let item of selectedItems\" >\n    <ion-card  >\n        <ion-card-header>\n          <ion-card-title>{{item.foodname}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <h3>Rs: {{item.foodprice}} x {{item.count}}</h3>\n          <ion-button size=\"small\" color=\"main\" class=\"qtybtns\" (click)=\"decrease(item)\">\n              <ion-icon name=\"arrow-dropleft-circle\"></ion-icon>\n          </ion-button>\n          <h4></h4>\n          <ion-button size=\"small\" color=\"main\" class=\"qtybtns\" (click)=\"increase(item)\">\n              <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\n          </ion-button>\n          <ion-button size=\"small\" class=\"qtybtns closebtn\" color=\"danger\" (click) = \"removeItem(item)\">\n              <ion-icon  slot=\"icon-only\" name=\"remove-circle-outline\"></ion-icon>\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <h2 class=\"totalcls\">Total:</h2><h2 class=\"total\">Rs: {{total}}</h2> \n  <ion-button color=\"main\" class=\"check\" (click)=\"loadPage()\">Checkout</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icn {\n  width: 30px;\n  height: 30px;\n}\n\n.check {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n  height: 50px;\n}\n\n.qtybtns {\n  --border-radius:50px;\n  float: left;\n}\n\nion-item {\n  font-weight: bold;\n  font-size: 15px;\n}\n\nion-card {\n  width: 90%;\n  margin: auto;\n  border-top: 3px solid blue;\n}\n\nion-card-content {\n  padding: 10px;\n  padding-top: 0;\n}\n\nion-card-header {\n  padding: 10px;\n}\n\nh4, h3 {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.closebtn {\n  float: right;\n}\n\n.totalcls {\n  float: left;\n  margin-left: 10px;\n}\n\n.total {\n  float: right;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxjYXJ0XFxjYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNoZWNre1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnF0eWJ0bnN7XHJcbiAgLS1ib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgXHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsdWU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmg0LGgze1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNsb3NlYnRue1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvdGFsY2xze1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4udG90YWx7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4iLCIuaWNuIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNoZWNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5xdHlidG5zIHtcbiAgLS1ib3JkZXItcmFkaXVzOjUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgYmx1ZTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oNCwgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2VidG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50b3RhbGNscyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRvdGFsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");





// import { Key } from 'protractor';
// import { S_IFDIR } from 'constants';

var CartPage = /** @class */ (function () {
    function CartPage(actionSheetController, alertCtrl, auth, nav, loadingController) {
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.loadingController = loadingController;
        this.total = 0;
        this.selectedItems = [];
        this.items = [];
    }
    CartPage.prototype.ngOnInit = function () {
        this.items = this.auth.getCart();
        var selected = {};
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (selected[obj.foodid]) {
                selected[obj.foodid].count++;
            }
            else {
                selected[obj.foodid] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, { count: 1 });
            }
        }
        this.selectedItems = Object.keys(selected).map(function (key) { return selected[key]; });
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.foodprice); }, 0);
        console.log(this.selectedItems);
    };
    CartPage.prototype.loadMenu = function () {
        this.nav.navigateBack('/menu');
    };
    CartPage.prototype.loadPage = function () {
        this.presentActionSheet();
    };
    CartPage.prototype.increase = function (data) {
        console.log(data);
        console.log(this.selectedItems);
        var tem = {
            foodid: data.foodid,
            foodname: data.foodname,
            foodprice: data.foodprice,
            description: data.description,
            foodshop: data.foodshop,
            foodpic: data.foodpic
        };
        this.auth.addCart(tem);
        data.count++;
        console.log(this.items);
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.foodprice); }, 0);
    };
    CartPage.prototype.decrease = function (data) {
        console.log(data.foodid);
        if (data.count > 1) {
            data.count--;
            this.decreaseArray(data);
        }
        console.log(this.selectedItems);
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.foodprice); }, 0);
    };
    CartPage.prototype.decreaseArray = function (data) {
        console.log(this.items);
        console.log(data.foodid);
        var i;
        for (i in this.items) {
            if (this.items[i].foodid == data.foodid) {
                console.log(i);
                console.log(this.items[i].foodid);
                console.log(data.foodid);
                this.items.splice(i, 1);
                console.log(this.items);
                break;
            }
            else {
                console.log(this.items[i].foodid);
                console.log(data.foodid);
                console.log("no data");
            }
        }
        return this.items;
    };
    CartPage.prototype.removeItem = function (data) {
        var index = this.selectedItems.indexOf(data);
        console.log(index);
        if (index > -1) {
            this.selectedItems.splice(index, 1);
            console.log(data.count);
            console.log(this.selectedItems);
            console.log(this.items);
        }
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].foodid === data.foodid) {
                this.items.splice(i, 1);
                i = i - 1;
            }
        }
        console.log(this.items);
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.foodprice); }, 0);
        console.log(this.selectedItems);
    };
    CartPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Your Option',
                            buttons: [{
                                    text: 'Dine In',
                                    icon: 'pizza',
                                    handler: function () {
                                        _this.nav.navigateForward('home');
                                    }
                                }, {
                                    text: 'Delivery',
                                    icon: 'car',
                                    handler: function () {
                                        _this.nav.navigateForward('login');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es5.js.map