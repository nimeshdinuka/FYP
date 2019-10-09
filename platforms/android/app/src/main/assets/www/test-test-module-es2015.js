(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"loadMenu()\">\n        <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list >\n    <ion-item *ngFor=\"let item of filter\" >\n      {{qty}} x {{item.foodname}} - {{item.foodprice}}\n      <ion-button (click)=\"increase(item)\">+</ion-button>\n      <ion-button (click)=\"decrease(item)\">-</ion-button>\n      <ion-button (click) = \"removeItem(item)\">Remove</ion-button>\n    </ion-item>\n    <ion-item>Total: {{total}}</ion-item>\n  </ion-list>\n  <ion-list>\n      <ion-radio-group>\n        <ion-item>\n          <ion-label>Dine in</ion-label>\n          <ion-radio slot=\"start\" value=\"dinein\"  (ionSelect)=\"dinein()\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Delivery</ion-label>\n          <ion-radio slot=\"start\" value=\"delivery\" (ionSelect)=\"delivery()\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  <ion-button color=\"main\" class=\"check\" (click)=\"loadPage()\">Checkout</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/test/test.page.ts");







const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]
    }
];
let TestPageModule = class TestPageModule {
};
TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "./src/app/test/test.page.scss":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopdiv {\n  width: 100%;\n  height: 100%;\n  max-height: 200px;\n}\n\n.shopdetails {\n  padding: 10px;\n}\n\nh4,\np {\n  margin: 0;\n}\n\n.segdata {\n  height: 30px;\n}\n\n.listimg {\n  width: 100%;\n  height: 100%;\n  max-width: 60px;\n}\n\n.listmenu {\n  margin-top: 30px;\n}\n\n.menulabel {\n  margin-left: 10px;\n}\n\nh6 {\n  margin: 0;\n}\n\nion-col {\n  padding: 3px;\n}\n\nh5 {\n  margin: 0;\n}\n\n.iconsize {\n  width: 40px;\n  height: 30px;\n}\n\n.cartdiv {\n  height: 100%;\n  width: 100%;\n}\n\nion-toolbar {\n  --background: url('title_background.png') no-repeat center center / cover;\n  --color: #fff;\n}\n\n.icn {\n  width: 30px;\n  height: 30px;\n}\n\nion-searchbar {\n  --background: rgba(0, 0, 0, 0.5);\n  --border-radius: 5px;\n  --color: #ddd;\n}\n\nion-content {\n  --background: url('b1.jpg') no-repeat center center / cover;\n  --color: #FFF;\n}\n\n.menudes {\n  margin-top: 15px;\n}\n\n.itemqty {\n  float: right;\n  --background: rgba(255, 123, 0, 0.7);\n  font-size: 15px;\n  font-weight: bold;\n  max-height: 30px;\n}\n\n.itemqty:hover {\n  --background: rgba(255, 255, 255, 0.85);\n  --color: #000;\n}\n\n.qtybtn {\n  width: 150px;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.btnlist {\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFx0ZXN0XFx0ZXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVzdC90ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTs7RUFFRSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsU0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBRENFO0VBQ0UsU0FBQTtBQ0VKOztBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUU7RUFDRSx5RUFBQTtFQUNBLGFBQUE7QUNHSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREU7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0lKOztBRERFO0VBQ0UsMkRBQUE7RUFDQSxhQUFBO0FDSUo7O0FEREU7RUFDRSxnQkFBQTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURERTtFQUNFLHVDQUFBO0VBQ0EsYUFBQTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDS0o7O0FERkU7RUFDRSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC90ZXN0L3Rlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3BkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNob3BkZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGg0LFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuc2VnZGF0YSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0aW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAubGlzdG1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnVsYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcbiAgaDUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuaWNvbnNpemUge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0ZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RpdGxlX2JhY2tncm91bmQucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmljbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1jb2xvcjogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2IxLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAgIC0tY29sb3IgOiAjRkZGO1xyXG59XHJcbiAgXHJcbiAgLm1lbnVkZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW1xdHkge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTIzLCAwLCAwLjcpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuaXRlbXF0eTpob3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgICAtLWNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAucXR5YnRuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bmxpc3Qge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICAiLCIuc2hvcGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2hvcGRldGFpbHMge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oNCxcbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zZWdkYXRhIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubGlzdGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNjBweDtcbn1cblxuLmxpc3RtZW51IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm1lbnVsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5oNiB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuaDUge1xuICBtYXJnaW46IDA7XG59XG5cbi5pY29uc2l6ZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jYXJ0ZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RpdGxlX2JhY2tncm91bmQucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG4uaWNuIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogI2RkZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2IxLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgLS1jb2xvcjogI0ZGRjtcbn1cblxuLm1lbnVkZXMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uaXRlbXF0eSB7XG4gIGZsb2F0OiByaWdodDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTIzLCAwLCAwLjcpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaXRlbXF0eTpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgLS1jb2xvcjogIzAwMDtcbn1cblxuLnF0eWJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bmxpc3Qge1xuICBoZWlnaHQ6IDcwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/test/test.page.ts":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");





let TestPage = class TestPage {
    constructor(alertCtrl, auth, nav, loadingController) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.loadingController = loadingController;
        this.qty = 1;
        this.total = 0;
        this.selectedItems = [];
        this.items = [];
        this.filter = [];
    }
    ngOnInit() {
        this.items = this.auth.getCart();
        console.log(this.items);
        const uniqueval = (value, index, self) => {
            return self.indexOf(value) === index;
        };
        this.filter = this.items.filter(uniqueval);
        console.log(this.filter);
    }
    loadMenu() {
        this.nav.navigateBack('/menu');
    }
    loadPage() {
        if (this.selectedRadio == 'dinein') {
            this.nav.navigateForward('/home');
        }
        else if (this.selectedRadio == 'delivery') {
            this.nav.navigateForward('/restaurants');
        }
    }
    dinein() {
        this.selectedRadio = "dinein";
        console.log(this.selectedRadio);
    }
    delivery() {
        this.selectedRadio = "delivery";
        console.log(this.selectedRadio);
    }
    increase(data) {
        this.qty++;
        this.total = this.filter.reduce((a, b) => a + (this.qty * b.foodprice), 0);
    }
    decrease(data) {
        this.qty--;
    }
    removeItem(post) {
        let index = this.selectedItems.indexOf(post);
        console.log(index);
        if (index > -1) {
            this.selectedItems.splice(index, 1);
            this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.foodprice), 0);
            console.log(this.selectedItems);
        }
    }
};
TestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(/*! raw-loader!./test.page.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.page.html"),
        styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/test/test.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], TestPage);



/***/ })

}]);
//# sourceMappingURL=test-test-module-es2015.js.map