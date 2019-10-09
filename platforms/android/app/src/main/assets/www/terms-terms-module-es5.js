(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-terms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/terms/terms.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/terms/terms.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      TERMS & CONDITIONS\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed class=\"abtdiv\">\n    <ion-row>\n      <ion-col class=\"col\">\n        <div>\n          <p class=\"text-justify\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero deserunt, iure in, eligendi esse\n            neque assumenda deleniti tempora maiores atque unde! Illo ex dolores rem sunt amet maxime. Nobis dolores\n            iusto sit, est molestiae aperiam consequuntur amet modi hic accusamus? Quos, qui! Esse non asperiores\n            laborum, quis, porro corrupti quod fugiat sed alias voluptatibus </p> \n           <p class=\"text-justify\"> omnis ducimus voluptate, suscipit\n            assumenda? Dolorum, harum quasi officiis, adipisci, maiores temporibus quos accusamus beatae aspernatur\n            dignissimos optio vitae dolorem odio accusantium amet iusto commodi.</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/terms/terms.module.ts":
/*!***************************************!*\
  !*** ./src/app/terms/terms.module.ts ***!
  \***************************************/
/*! exports provided: TermsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms.page */ "./src/app/terms/terms.page.ts");







var routes = [
    {
        path: '',
        component: _terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"]
    }
];
var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"]]
        })
    ], TermsPageModule);
    return TermsPageModule;
}());



/***/ }),

/***/ "./src/app/terms/terms.page.scss":
/*!***************************************!*\
  !*** ./src/app/terms/terms.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toollogo {\n  height: 100%;\n  max-width: 100px;\n  float: left;\n}\n\n.toolimg {\n  width: 100%;\n  max-width: 100px;\n  border-radius: 10px;\n}\n\n.abtdiv {\n  margin-top: 20px;\n}\n\nh4 {\n  margin-top: 0;\n}\n\nh6 {\n  margin: 0;\n}\n\nion-toolbar {\n  --color: #FFF;\n}\n\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMvRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxcdGVybXNcXHRlcm1zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVybXMvdGVybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC90ZXJtcy90ZXJtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGxvZ297XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi50b29saW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmFidGRpdntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaDZ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1jb2xvciA6ICNGRkY7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi50b29sbG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50b29saW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5hYnRkaXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5oNCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNGRkY7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/terms/terms.page.ts":
/*!*************************************!*\
  !*** ./src/app/terms/terms.page.ts ***!
  \*************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsPage = /** @class */ (function () {
    function TermsPage() {
    }
    TermsPage.prototype.ngOnInit = function () {
    };
    TermsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! raw-loader!./terms.page.html */ "./node_modules/raw-loader/index.js!./src/app/terms/terms.page.html"),
            styles: [__webpack_require__(/*! ./terms.page.scss */ "./src/app/terms/terms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsPage);
    return TermsPage;
}());



/***/ })

}]);
//# sourceMappingURL=terms-terms-module-es5.js.map