(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/aboutus/aboutus.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/aboutus/aboutus.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      ABOUT US\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed class=\"abtdiv\">\n    <ion-row>\n      <ion-col class=\"col\">\n        <div>\n          <h4 class=\"text-center font-weight-bold\">\"Everything for the betterment of our Customer\"</h4>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div>\n          <p class=\"text-justify\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero deserunt, iure in, eligendi esse\n            neque assumenda deleniti tempora maiores atque unde! Illo ex dolores rem sunt amet maxime. Nobis dolores\n            iusto sit, est molestiae aperiam consequuntur amet modi hic accusamus? Quos, qui! Esse non asperiores\n            laborum, quis, porro corrupti quod fugiat sed alias voluptatibus omnis ducimus voluptate, suscipit\n            assumenda? Dolorum, harum quasi officiis, adipisci, maiores temporibus quos accusamus beatae aspernatur\n            dignissimos optio vitae dolorem odio accusantium amet iusto commodi.</p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div>\n          <h4 class=\"text-center font-weight-bold\">Contact Us</h4>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <div class=\"text-center contactdiv\">\n         <h6>Hotline : 0112 456456</h6>\n         <h6>Email : kzonfood@hotmail.com</h6>\n         <h6>Location : Katubedda,Moratuwa,Sri Lanka.</h6>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/aboutus/aboutus.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.module.ts ***!
  \*******************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");







var routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]
    }
];
var AboutusPageModule = /** @class */ (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());



/***/ }),

/***/ "./src/app/aboutus/aboutus.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-top: 0;\n}\n\nh6 {\n  margin: 0;\n}\n\nion-toolbar {\n  --color: #fff;\n}\n\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxhYm91dHVzXFxhYm91dHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbmg2e1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaDYge1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.page.ts":
/*!*****************************************!*\
  !*** ./src/app/aboutus/aboutus.page.ts ***!
  \*****************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutusPage = /** @class */ (function () {
    function AboutusPage() {
    }
    AboutusPage.prototype.ngOnInit = function () {
    };
    AboutusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! raw-loader!./aboutus.page.html */ "./node_modules/raw-loader/index.js!./src/app/aboutus/aboutus.page.html"),
            styles: [__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/aboutus/aboutus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutusPage);
    return AboutusPage;
}());



/***/ })

}]);
//# sourceMappingURL=aboutus-aboutus-module-es5.js.map