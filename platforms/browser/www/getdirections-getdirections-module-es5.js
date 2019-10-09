(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getdirections-getdirections-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/getdirections/getdirections.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/getdirections/getdirections.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>getdirections</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"directionForm\" (ngSubmit)=\"calculateAndDisplayRoute(directionForm.value)\">\n    <ion-item>\n      <ion-label position=\"floating\">Destination</ion-label>\n      <ion-input formControlName=\"destination\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!directionForm.valid\">Get Direction</ion-button>\n  </form>\n\n  <div #mappElement class=\"map\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/getdirections/getdirections.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/getdirections/getdirections.module.ts ***!
  \*******************************************************/
/*! exports provided: GetdirectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetdirectionsPageModule", function() { return GetdirectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _getdirections_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getdirections.page */ "./src/app/getdirections/getdirections.page.ts");








var routes = [
    {
        path: '',
        component: _getdirections_page__WEBPACK_IMPORTED_MODULE_7__["GetdirectionsPage"]
    }
];
var GetdirectionsPageModule = /** @class */ (function () {
    function GetdirectionsPageModule() {
    }
    GetdirectionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_getdirections_page__WEBPACK_IMPORTED_MODULE_7__["GetdirectionsPage"]],
            providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]]
        })
    ], GetdirectionsPageModule);
    return GetdirectionsPageModule;
}());



/***/ }),

/***/ "./src/app/getdirections/getdirections.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/getdirections/getdirections.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldGRpcmVjdGlvbnMvZ2V0ZGlyZWN0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/getdirections/getdirections.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/getdirections/getdirections.page.ts ***!
  \*****************************************************/
/*! exports provided: GetdirectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetdirectionsPage", function() { return GetdirectionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




var GetdirectionsPage = /** @class */ (function () {
    function GetdirectionsPage(fb, geolocation) {
        this.fb = fb;
        this.geolocation = geolocation;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.currentLocation = {
            lat: 0,
            lng: 0
        };
        this.createDirectionForm();
    }
    GetdirectionsPage.prototype.ngOnInit = function () {
    };
    GetdirectionsPage.prototype.createDirectionForm = function () {
        this.directionForm = this.fb.group({
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    GetdirectionsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLocation.lat = resp.coords.latitude;
            _this.currentLocation.lng = resp.coords.longitude;
        });
        var map = new google.maps.Map(this.mapNativeElements.nativeElement, {
            zoom: 7,
            center: { lat: -34.397, lng: 150.644 }
        });
        this.directionsDisplay.setMap(map);
    };
    GetdirectionsPage.prototype.calculateAndDisplayRoute = function (formValues) {
        var that = this;
        this.directionsService.route({
            origin: this.currentLocation,
            destination: formValues.destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                that.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    GetdirectionsPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mappElement', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GetdirectionsPage.prototype, "mapNativeElements", void 0);
    GetdirectionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getdirections',
            template: __webpack_require__(/*! raw-loader!./getdirections.page.html */ "./node_modules/raw-loader/index.js!./src/app/getdirections/getdirections.page.html"),
            styles: [__webpack_require__(/*! ./getdirections.page.scss */ "./src/app/getdirections/getdirections.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]])
    ], GetdirectionsPage);
    return GetdirectionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=getdirections-getdirections-module-es5.js.map