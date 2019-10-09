(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacypolicy-privacypolicy-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/privacypolicy/privacypolicy.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/privacypolicy/privacypolicy.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      PRIVACY POLICY\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed class=\"abtdiv\">\n      <ion-row>\n        <ion-col class=\"col\">\n          <div>\n            <p class=\"text-justify\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero deserunt, iure in, eligendi esse\n              neque assumenda deleniti tempora maiores atque unde! Illo ex dolores rem sunt amet maxime. Nobis dolores\n              iusto sit, est molestiae aperiam consequuntur amet modi hic accusamus? Quos, qui! Esse non asperiores\n              laborum, quis, porro corrupti quod fugiat sed alias voluptatibus </p> \n              \n             <p class=\"text-justify\"> omnis ducimus voluptate, suscipit\n              assumenda? Dolorum, harum quasi officiis, adipisci, maiores temporibus quos accusamus beatae aspernatur\n              dignissimos optio vitae dolorem odio accusantium amet iusto commodi.</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/privacypolicy/privacypolicy.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.module.ts ***!
  \*******************************************************/
/*! exports provided: PrivacypolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPageModule", function() { return PrivacypolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacypolicy.page */ "./src/app/privacypolicy/privacypolicy.page.ts");







var routes = [
    {
        path: '',
        component: _privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacypolicyPage"]
    }
];
var PrivacypolicyPageModule = /** @class */ (function () {
    function PrivacypolicyPageModule() {
    }
    PrivacypolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacypolicyPage"]]
        })
    ], PrivacypolicyPageModule);
    return PrivacypolicyPageModule;
}());



/***/ }),

/***/ "./src/app/privacypolicy/privacypolicy.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".abtdiv {\n  margin-top: 20px;\n}\n\n.toollogo {\n  height: 100%;\n  max-width: 100px;\n  float: left;\n}\n\n.toolimg {\n  width: 100%;\n  max-width: 100px;\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --color: #FFF;\n}\n\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeXBvbGljeS9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxwcml2YWN5cG9saWN5XFxwcml2YWN5cG9saWN5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpdmFjeXBvbGljeS9wcml2YWN5cG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREhJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvcHJpdmFjeXBvbGljeS9wcml2YWN5cG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnRkaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50b29sbG9nb3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4udG9vbGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWNvbG9yIDogI0ZGRjtcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLnRleHQtanVzdGlmeXtcclxuLy8gICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnS2lvbmFSZWd1bGFyJyAhaW1wb3J0YW50O1xyXG4vLyB9IiwiLmFidGRpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50b29sbG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50b29saW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogI0ZGRjtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/privacypolicy/privacypolicy.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.page.ts ***!
  \*****************************************************/
/*! exports provided: PrivacypolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPage", function() { return PrivacypolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacypolicyPage = /** @class */ (function () {
    function PrivacypolicyPage() {
    }
    PrivacypolicyPage.prototype.ngOnInit = function () {
    };
    PrivacypolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacypolicy',
            template: __webpack_require__(/*! raw-loader!./privacypolicy.page.html */ "./node_modules/raw-loader/index.js!./src/app/privacypolicy/privacypolicy.page.html"),
            styles: [__webpack_require__(/*! ./privacypolicy.page.scss */ "./src/app/privacypolicy/privacypolicy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacypolicyPage);
    return PrivacypolicyPage;
}());



/***/ })

}]);
//# sourceMappingURL=privacypolicy-privacypolicy-module-es5.js.map