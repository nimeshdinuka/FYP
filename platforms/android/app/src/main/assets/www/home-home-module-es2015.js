(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col class=\"col ion-no-padding\">\n        <div class=\"fooddiv\">\n          <img class=\"mx-auto d-block img-fluid topimg\" src=\"../../assets/images/ab.png\" alt=\"foodwall\">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid fixed class=\"slidegrid\">\n    <ion-row>\n      <ion-col class=\"col slidecol ion-no-padding\">\n        <!--<ion-card>-->\n        <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <ul class=\"carousel-indicators\">\n            <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n          </ul>\n          <!-- The slideshow -->\n          <div class=\"carousel-inner imgdiv  \">\n            <div class=\"carousel-item active \">\n              <img class=\"mx-auto d-block img-fluid imgdiv\" src=\"../../assets/images/burger king logo.png\"\n                alt=\"Los Angeles\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"mx-auto d-block img-fluid imgdiv\" src=\"../../assets/images/cdclogo.jpg\" alt=\"Chicago\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"mx-auto d-block img-fluid imgdiv\" src=\"../../assets/images/bubble.jpg\" alt=\"New York\">\n            </div>\n          </div>\n          <!-- Left and right controls -->\n          <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\"></span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\"></span>\n          </a>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button href=\"/login\" class=\"btn btnnav btnlist btn-block \" color=\"main\">\n          Explore Here\n        </ion-button>\n      </ion-col>\n    </ion-row> \n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fooddiv {\n  width: 100%;\n}\n\n.topimg {\n  max-height: 120px;\n  width: 100%;\n}\n\n.imgdiv {\n  max-height: 170px;\n  width: 100%;\n}\n\n.divv {\n  width: 100%;\n  height: 100%;\n}\n\n.btnlist {\n  --color: #fff;\n  height: 60px;\n  font-weight: bold;\n}\n\nion-button {\n  --color:#FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTmV3IEV6Zm9vZFxcZXpmb29kL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBRElBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kZGl2e1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvcGltZ3tcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nZGl2e1xuICAvL2hlaWdodDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDE3MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdnZ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIFxufVxuXG4uYnRubGlzdHtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgLS1jb2xvcjojRkZGO1xufSIsIi5mb29kZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b3BpbWcge1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWdkaXYge1xuICBtYXgtaGVpZ2h0OiAxNzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXZ2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0bmxpc3Qge1xuICAtLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1jb2xvcjojRkZGO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let HomePage = class HomePage {
    constructor(auth, nav) {
        this.auth = auth;
        this.nav = nav;
        this.username = this.auth.getUser();
        console.log(this.auth.getUser());
    }
    loadRestaurant() {
        this.auth.setUser(this.username);
        this.nav.navigateForward('/restaurants');
    }
};
HomePage.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map