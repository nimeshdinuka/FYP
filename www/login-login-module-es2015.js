(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"main\">\n      <ion-buttons slot=\"end\">\n          <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n          SIGN IN\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed class=\"abtdiv\">\n      \n      <ion-row class=\"formrow\">\n          <ion-col class=\"col\">\n              <div class=\"logindiv\">\n                  <ion-item>\n                      <ion-label position=\"stacked\"><strong>Username*</strong></ion-label>\n                      <ion-input name=\"username\" placeholder=\"Enter your Username\"\n                          [(ngModel)]='loginCredentials.username'></ion-input>\n                  </ion-item>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col\">\n              <div class=\"logindiv\">\n                  <ion-item>\n                      <ion-label position=\"stacked\"><strong>Password*</strong></ion-label>\n                      <ion-input name=\"password\" placeholder=\"Enter your Password\"\n                          [(ngModel)]='loginCredentials.password'></ion-input>\n                  </ion-item>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row class=\"ezfoodlog\">\n          <ion-col class=\"col\">\n              <div class=\"d-flex justify-content-center \">\n                  <ion-button (click)=\"login()\" color=\"main\">\n                      <ion-icon slot=\"start\" name=\"beer\"></ion-icon>\n                      Login with EzFood\n                  </ion-button>\n              </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col\">\n              <div class=\"d-flex justify-content-center \">\n                  <a class=\"acolor\" href=\"/passwordreset\">Forgot Password ?</a>\n              </div>\n              <div class=\"d-flex justify-content-center \">\n                  <a class=\"acolor\" href=\"/register\">Not a Member ? </a>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logbtn {\n  width: 100%;\n  max-width: 160px;\n}\n\na {\n  font-size: 15px;\n  font-weight: bold;\n  color: black;\n}\n\n.sociallogs {\n  margin-top: 30px;\n}\n\n.ezfoodlog {\n  margin-top: 20px;\n}\n\n.createacnt {\n  width: 100%;\n  max-width: 335px;\n}\n\nion-toolbar {\n  --color: #FFF;\n}\n\nion-toolbar ion-title {\n  max-width: 200px;\n  float: left;\n  font-size: 15px;\n}\n\n.formrow {\n  margin-top: 30px;\n}\n\na {\n  font-size: 14px;\n}\n\n.acolor {\n  color: #ff7a29;\n  text-align: center;\n}\n\nh4 {\n  --ion-font-family:\"Astereiska\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXE5ldyBFemZvb2RcXGV6Zm9vZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREFJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VSOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2didG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNvY2lhbGxvZ3N7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZXpmb29kbG9ne1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNyZWF0ZWFjbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzM1cHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1jb2xvciA6ICNGRkY7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3Jtcm93e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuYXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmFjb2xvcntcclxuICAgIGNvbG9yOiAjZmY3YTI5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNHtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5OidBc3RlcmVpc2thJztcclxufSIsIi5sb2didG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNvY2lhbGxvZ3Mge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZXpmb29kbG9nIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNyZWF0ZWFjbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMzVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjRkZGO1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmZvcm1yb3cge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWNvbG9yIHtcbiAgY29sb3I6ICNmZjdhMjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDQge1xuICAtLWlvbi1mb250LWZhbWlseTpcIkFzdGVyZWlza2FcIjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");





let LoginPage = class LoginPage {
    constructor(alertCtrl, auth, nav, toastController) {
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.nav = nav;
        this.toastController = toastController;
        this.loginSuccess = false;
        this.loginCredentials = { username: '', password: '' };
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 1000
            });
            toast.present();
        });
    }
    ngOnInit() {
        this.username = this.auth.getUser();
        console.log(this.auth.getUser());
    }
    login() {
        if (this.loginCredentials.username !== '' && this.loginCredentials.password !== '') {
            this.auth.login(this.loginCredentials).subscribe(success => {
                if (success !== 'error') {
                    console.log(success);
                    if (success[0][7] == 'customer') {
                        this.presentToast('Login Successful');
                        this.auth.setUser(success[0][1]);
                        this.nav.navigateRoot('restaurants');
                    }
                    else if (success[0][7] == 'manager') {
                        this.presentToast('Login Successful');
                        this.auth.setShop(success[0][8]);
                        this.auth.setUser(success[0][1]);
                        this.nav.navigateRoot('manager');
                    }
                    else if (success[0][7] == 'admin') {
                        this.presentToast('Login Successful');
                        this.nav.navigateRoot('admin');
                    }
                    // this.loginSuccess = true;
                    // this.showPopup('Success', 'Login Successful.');
                }
                else {
                    this.presentToast('Invalid Credentials');
                }
            }, error => {
                this.presentToast('Error');
            });
        }
        else {
            this.presentToast('Please Enter Credentials');
        }
    }
    // async showPopup(title, text) {
    //   const alert = await this.alertCtrl.create({
    //     header: title,
    //     message: text,
    //     buttons: [
    //       {
    //         text: 'OK',
    //         handler: data => {
    //           if (this.loginSuccess) {
    //              //this.nav.navigateForward('/restaurants');
    //           }
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }
    loadRestaurant() {
        this.auth.setUser(this.username);
        this.nav.navigateForward('/restaurants');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map