(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\">\n          <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n          {{userName}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed class=\"abtdiv\">\n\n      <ion-row>\n          <ion-col class=\"col\">\n              <div class=\"logindiv\">\n                  <ion-item>\n                      <ion-label position=\"stacked\">First Name*</ion-label>\n                      <ion-input name=\"firstname\" placeholder=\"Enter your First Name\" [(ngModel)]='registerCredentials.firstname'></ion-input>\n                  </ion-item>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col\">\n              <div class=\"logindiv\">\n                  <ion-item>\n                      <ion-label position=\"stacked\">Last Name*</ion-label>\n                      <ion-input name=\"lastname\" placeholder=\"Enter your Last Name\" [(ngModel)]='registerCredentials.lastname'></ion-input>\n                  </ion-item>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col\">\n              <div class=\"logindiv\">\n                  <ion-item>\n                      <ion-label position=\"stacked\">Email*</ion-label>\n                      <ion-input name=\"email\" placeholder=\"Enter your Email\" [(ngModel)]='registerCredentials.email'></ion-input>\n                  </ion-item>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col\">\n              <div class=\"logindiv\">\n                  <ion-item>\n                      <ion-label position=\"stacked\">Mobile Number*</ion-label>\n                      <ion-input name=\"mobileno\" placeholder=\"Enter your Mobile No.\" [(ngModel)]='registerCredentials.mobileno'></ion-input>\n                  </ion-item>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col\">\n              <div class=\"logindiv\">\n                  <ion-item>\n                      <ion-label position=\"stacked\">Username*</ion-label>\n                      <ion-input name=\"password\" placeholder=\"Enter your Username\" [(ngModel)]='registerCredentials.username'></ion-input>\n                  </ion-item>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col\">\n              <div class=\"logindiv\">\n                  <ion-item>\n                      <ion-label position=\"stacked\">Password*</ion-label>\n                      <ion-input type='password' name=\"password\" placeholder=\"Enter your Password\" [(ngModel)]='registerCredentials.password'></ion-input>\n                  </ion-item>\n              </div>\n          </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ezfoodlog\">\n          <ion-col class=\"col\">\n              <div class=\"d-flex justify-content-center \">\n                  <ion-button color=\"success\" (click)='register()'>\n                      <ion-icon slot=\"start\" name=\"beer\"></ion-icon>\n                      Register with EzFood\n                  </ion-button>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toollogo {\n  height: 100%;\n  max-width: 100px;\n  float: left;\n}\n\n.toolimg {\n  width: 100%;\n  max-width: 100px;\n  border-radius: 10px;\n}\n\n.abtdiv {\n  margin-top: 20px;\n}\n\n.logbtn {\n  width: 100%;\n  max-width: 160px;\n}\n\na {\n  font-size: 12px;\n  color: black;\n}\n\n.sociallogs {\n  margin-top: 30px;\n}\n\n.ezfoodlog {\n  margin-top: 5px;\n}\n\n.createacnt {\n  width: 100%;\n  max-width: 335px;\n}\n\nion-toolbar {\n  --color: #fff;\n}\n\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\n\nion-input {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sbG9nb3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRvb2xpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYWJ0ZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxvZ2J0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuYXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNvY2lhbGxvZ3N7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZXpmb29kbG9ne1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY3JlYXRlYWNudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMzVweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbiIsIi50b29sbG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50b29saW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5hYnRkaXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubG9nYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTYwcHg7XG59XG5cbmEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNvY2lhbGxvZ3Mge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZXpmb29kbG9nIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY3JlYXRlYWNudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzNXB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pb24taW5wdXQge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");




let RegisterPage = class RegisterPage {
    constructor(alertCtrl, auth, nav) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.userName = "Nimesh";
        this.createSuccess = false;
        this.registerCredentials = { firstname: '', lastname: '', email: '', mobileno: '', username: '', password: '' };
    }
    ngOnInit() {
    }
    register() {
        if (this.registerCredentials.firstname !== '' && this.registerCredentials.lastname !== '' && this.registerCredentials.email !== '' && this.registerCredentials.mobileno !== '' && this.registerCredentials.username !== '' && this.registerCredentials.password !== '') {
            this.auth.register(this.registerCredentials).subscribe(success => {
                if (success) {
                    this.createSuccess = true;
                    this.showPopup('Success', 'Account created.');
                }
                else {
                    this.showPopup('Error', 'Problem creating account.');
                }
            }, error => {
                this.showPopup('Error', error);
            });
        }
        else {
            this.showPopup('Error', 'Please Fill All Details.');
        }
    }
    showPopup(title, text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: text,
                buttons: [
                    {
                        text: 'OK',
                        handler: data => {
                            if (this.createSuccess) {
                                this.nav.navigateForward('/login');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map