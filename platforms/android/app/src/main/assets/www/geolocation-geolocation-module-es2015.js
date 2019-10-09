(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geolocation-geolocation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/geolocation/geolocation.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/geolocation/geolocation.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>geolocation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapElements class=\"map\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/geolocation/geolocation.module.ts":
/*!***************************************************!*\
  !*** ./src/app/geolocation/geolocation.module.ts ***!
  \***************************************************/
/*! exports provided: GeolocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function() { return GeolocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geolocation.page */ "./src/app/geolocation/geolocation.page.ts");








const routes = [
    {
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_7__["GeolocationPage"]
    }
];
let GeolocationPageModule = class GeolocationPageModule {
};
GeolocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_7__["GeolocationPage"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]]
    })
], GeolocationPageModule);



/***/ }),

/***/ "./src/app/geolocation/geolocation.page.scss":
/*!***************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvbG9jYXRpb24vRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxcZ2VvbG9jYXRpb25cXGdlb2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ2VvbG9jYXRpb24vZ2VvbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZ2VvbG9jYXRpb24vZ2VvbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/geolocation/geolocation.page.ts":
/*!*************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.ts ***!
  \*************************************************/
/*! exports provided: GeolocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPage", function() { return GeolocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");



let GeolocationPage = class GeolocationPage {
    constructor(geolocation) {
        this.geolocation = geolocation;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            console.log(this.latitude);
            console.log(this.longitude);
            const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 15
            });
            //const infoWindow = new google.maps.InfoWindow;
            const pos = {
                lat: this.latitude,
                lng: this.longitude
            };
            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Location found.');
            // infoWindow.open(map);
            map.setCenter(pos);
            const icon = {
                url: 'assets/icon/marker.png',
                scaledSize: new google.maps.Size(50, 50)
            };
            const marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'EzFood',
                icon: icon
            });
            const contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                '<div id="bodyContent">' +
                '<img src="assets/icon/kzon.jpg" width="200">' +
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the ' +
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
                'south west of the nearest large town, Alice Springs; 450&#160;km ' +
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
                'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
                'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
                'Aboriginal people of the area. It has many springs, waterholes, ' +
                'rock caves and ancient paintings. Uluru is listed as a World ' +
                'Heritage Site.</p>' +
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                '(last visited June 22, 2009).</p>' +
                '</div>' +
                '</div>';
            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 400
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
};
GeolocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElements', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GeolocationPage.prototype, "mapNativeElement", void 0);
GeolocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geolocation',
        template: __webpack_require__(/*! raw-loader!./geolocation.page.html */ "./node_modules/raw-loader/index.js!./src/app/geolocation/geolocation.page.html"),
        styles: [__webpack_require__(/*! ./geolocation.page.scss */ "./src/app/geolocation/geolocation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
], GeolocationPage);



/***/ })

}]);
//# sourceMappingURL=geolocation-geolocation-module-es2015.js.map