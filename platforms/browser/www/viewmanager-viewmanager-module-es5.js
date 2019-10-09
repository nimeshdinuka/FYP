(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewmanager-viewmanager-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/viewmanager/viewmanager.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewmanager/viewmanager.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" href=\"/admin\">\n          <ion-icon class=\"icn\" slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list *ngFor=\"let item of items\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{item.managerfirstname}} {{item.managerlastname}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>Mobile: {{item.managermobile}}</p>\n          <p>Email: {{item.manageremail}}</p>\n          <p>Shop: {{item.managershopname}}</p>\n        </ion-card-content>\n      </ion-card>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/viewmanager/viewmanager.module.ts":
/*!***************************************************!*\
  !*** ./src/app/viewmanager/viewmanager.module.ts ***!
  \***************************************************/
/*! exports provided: ViewmanagerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmanagerPageModule", function() { return ViewmanagerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewmanager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewmanager.page */ "./src/app/viewmanager/viewmanager.page.ts");







var routes = [
    {
        path: '',
        component: _viewmanager_page__WEBPACK_IMPORTED_MODULE_6__["ViewmanagerPage"]
    }
];
var ViewmanagerPageModule = /** @class */ (function () {
    function ViewmanagerPageModule() {
    }
    ViewmanagerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewmanager_page__WEBPACK_IMPORTED_MODULE_6__["ViewmanagerPage"]]
        })
    ], ViewmanagerPageModule);
    return ViewmanagerPageModule;
}());



/***/ }),

/***/ "./src/app/viewmanager/viewmanager.page.scss":
/*!***************************************************!*\
  !*** ./src/app/viewmanager/viewmanager.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --color: #fff;\n}\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\n.icn {\n  width: 35px;\n  height: 35px;\n}\nion-card {\n  width: 90%;\n  margin: auto;\n  border-top: 3px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld21hbmFnZXIvRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxcdmlld21hbmFnZXJcXHZpZXdtYW5hZ2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld21hbmFnZXIvdmlld21hbmFnZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURFRTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdtYW5hZ2VyL3ZpZXdtYW5hZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY24ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZHtcclxuICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICBtYXJnaW46YXV0bztcclxuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsdWU7XHJcbiAgfSIsImlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5pY24ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/viewmanager/viewmanager.page.ts":
/*!*************************************************!*\
  !*** ./src/app/viewmanager/viewmanager.page.ts ***!
  \*************************************************/
/*! exports provided: ViewmanagerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmanagerPage", function() { return ViewmanagerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");




var ViewmanagerPage = /** @class */ (function () {
    function ViewmanagerPage(alertCtrl, auth, nav) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.items = [];
        this.createSuccess = false;
        this.initializeItems();
    }
    ViewmanagerPage.prototype.ngOnInit = function () {
    };
    ViewmanagerPage.prototype.initializeItems = function () {
        var _this = this;
        this.auth.viewManagers().subscribe(function (manager) {
            console.log(manager);
            for (var i in manager) {
                var mgrObj = {
                    managerid: manager[i][0],
                    managerfirstname: manager[i][2],
                    managerlastname: manager[i][3],
                    managermobile: manager[i][4],
                    manageremail: manager[i][5],
                    managerusername: manager[i][1],
                    managershopid: manager[i][8],
                    managershopname: ''
                };
                _this.items.push(mgrObj);
                console.log(_this.items);
            }
        }, function (error) {
            console.log(error);
        });
        this.auth.getShops().subscribe(function (shops) {
            console.log(shops);
            console.log(_this.items);
            for (var i in _this.items) {
                for (var j in shops) {
                    console.log(i);
                    console.log(j);
                    console.log(_this.items[i].managershopid);
                    console.log(shops[j][0]);
                    if (_this.items[i].managershopid == shops[j][0]) {
                        _this.items[i].managershopname = shops[j][1];
                    }
                }
            }
        });
    };
    ViewmanagerPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    ViewmanagerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewmanager',
            template: __webpack_require__(/*! raw-loader!./viewmanager.page.html */ "./node_modules/raw-loader/index.js!./src/app/viewmanager/viewmanager.page.html"),
            styles: [__webpack_require__(/*! ./viewmanager.page.scss */ "./src/app/viewmanager/viewmanager.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ViewmanagerPage);
    return ViewmanagerPage;
}());



/***/ })

}]);
//# sourceMappingURL=viewmanager-viewmanager-module-es5.js.map