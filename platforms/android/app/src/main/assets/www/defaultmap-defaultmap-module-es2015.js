(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defaultmap-defaultmap-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/defaultmap/defaultmap.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/defaultmap/defaultmap.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>defaultmap</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div #mapElement class=\"map\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/defaultmap/defaultmap.module.ts":
/*!*************************************************!*\
  !*** ./src/app/defaultmap/defaultmap.module.ts ***!
  \*************************************************/
/*! exports provided: DefaultmapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultmapPageModule", function() { return DefaultmapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _defaultmap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultmap.page */ "./src/app/defaultmap/defaultmap.page.ts");







const routes = [
    {
        path: '',
        component: _defaultmap_page__WEBPACK_IMPORTED_MODULE_6__["DefaultmapPage"]
    }
];
let DefaultmapPageModule = class DefaultmapPageModule {
};
DefaultmapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_defaultmap_page__WEBPACK_IMPORTED_MODULE_6__["DefaultmapPage"]]
    })
], DefaultmapPageModule);



/***/ }),

/***/ "./src/app/defaultmap/defaultmap.page.scss":
/*!*************************************************!*\
  !*** ./src/app/defaultmap/defaultmap.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdG1hcC9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxkZWZhdWx0bWFwXFxkZWZhdWx0bWFwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVmYXVsdG1hcC9kZWZhdWx0bWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHRtYXAvZGVmYXVsdG1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59IiwiLm1hcCB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/defaultmap/defaultmap.page.ts":
/*!***********************************************!*\
  !*** ./src/app/defaultmap/defaultmap.page.ts ***!
  \***********************************************/
/*! exports provided: DefaultmapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultmapPage", function() { return DefaultmapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefaultmapPage = class DefaultmapPage {
    constructor() { }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: 6.795125, lng: 79.887569 },
            zoom: 15
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DefaultmapPage.prototype, "mapElement", void 0);
DefaultmapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-defaultmap',
        template: __webpack_require__(/*! raw-loader!./defaultmap.page.html */ "./node_modules/raw-loader/index.js!./src/app/defaultmap/defaultmap.page.html"),
        styles: [__webpack_require__(/*! ./defaultmap.page.scss */ "./src/app/defaultmap/defaultmap.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DefaultmapPage);



/***/ })

}]);
//# sourceMappingURL=defaultmap-defaultmap-module-es2015.js.map