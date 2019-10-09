(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passwordreset-passwordreset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/passwordreset/passwordreset.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/passwordreset/passwordreset.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-title>\n      <div class=\"titlename\"> Password reset</div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"formrow\">\n      <ion-col class=\"col\">\n        <div class=\"logindiv\">\n          <ion-item>\n            <ion-label position=\"stacked\">Email*</ion-label>\n            <ion-input placeholder=\"Enter your Email\"></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ezfoodlog\">\n      <ion-col class=\"col\">\n        <div class=\"d-flex justify-content-center \">\n          <ion-button class=\"rstbtn\" color=\"success\">\n            <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>\n            Reset\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/passwordreset/passwordreset.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/passwordreset/passwordreset.module.ts ***!
  \*******************************************************/
/*! exports provided: PasswordresetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetPageModule", function() { return PasswordresetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _passwordreset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passwordreset.page */ "./src/app/passwordreset/passwordreset.page.ts");







const routes = [
    {
        path: '',
        component: _passwordreset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordresetPage"]
    }
];
let PasswordresetPageModule = class PasswordresetPageModule {
};
PasswordresetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_passwordreset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordresetPage"]]
    })
], PasswordresetPageModule);



/***/ }),

/***/ "./src/app/passwordreset/passwordreset.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/passwordreset/passwordreset.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toollogo {\n  height: 100%;\n  max-width: 100px;\n  float: left;\n}\n\nion-toolbar {\n  --color: #fff;\n}\n\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n}\n\n.ezfoodlog {\n  margin-top: 20px;\n}\n\n.rstbtn {\n  max-width: 150px;\n}\n\nion-grid {\n  margin-top: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmRyZXNldC9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxwYXNzd29yZHJlc2V0XFxwYXNzd29yZHJlc2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFzc3dvcmRyZXNldC9wYXNzd29yZHJlc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURBSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0VOOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNJLGdCQUFBO0FDQ047O0FERUU7RUFDSSxpQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmRyZXNldC9wYXNzd29yZHJlc2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lemZvb2Rsb2cge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJzdGJ0bntcclxuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWdyaWR7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIH0iLCIudG9vbGxvZ28ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmV6Zm9vZGxvZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yc3RidG4ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/passwordreset/passwordreset.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/passwordreset/passwordreset.page.ts ***!
  \*****************************************************/
/*! exports provided: PasswordresetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetPage", function() { return PasswordresetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasswordresetPage = class PasswordresetPage {
    constructor() { }
    ngOnInit() {
    }
};
PasswordresetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-passwordreset',
        template: __webpack_require__(/*! raw-loader!./passwordreset.page.html */ "./node_modules/raw-loader/index.js!./src/app/passwordreset/passwordreset.page.html"),
        styles: [__webpack_require__(/*! ./passwordreset.page.scss */ "./src/app/passwordreset/passwordreset.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PasswordresetPage);



/***/ })

}]);
//# sourceMappingURL=passwordreset-passwordreset-module-es2015.js.map