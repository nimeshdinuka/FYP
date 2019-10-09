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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _getdirections_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getdirections.page */ "./src/app/getdirections/getdirections.page.ts");








const routes = [
    {
        path: '',
        component: _getdirections_page__WEBPACK_IMPORTED_MODULE_7__["GetdirectionsPage"]
    }
];
let GetdirectionsPageModule = class GetdirectionsPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




let GetdirectionsPage = class GetdirectionsPage {
    constructor(fb, geolocation) {
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
    ngOnInit() {
    }
    createDirectionForm() {
        this.directionForm = this.fb.group({
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngAfterViewInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.currentLocation.lat = resp.coords.latitude;
            this.currentLocation.lng = resp.coords.longitude;
        });
        const map = new google.maps.Map(this.mapNativeElements.nativeElement, {
            zoom: 7,
            center: { lat: -34.397, lng: 150.644 }
        });
        this.directionsDisplay.setMap(map);
    }
    calculateAndDisplayRoute(formValues) {
        const that = this;
        this.directionsService.route({
            origin: this.currentLocation,
            destination: formValues.destination,
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                that.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
};
GetdirectionsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] }
];
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



/***/ })

}]);
//# sourceMappingURL=getdirections-getdirections-module-es2015.js.map