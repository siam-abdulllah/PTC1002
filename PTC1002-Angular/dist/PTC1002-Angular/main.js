(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\ITSB\PTC1002\PTC1002-Angular\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8612/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Kb57":
/*!**************************************************!*\
  !*** ./src/app/shared/models/randmoNumberDto.ts ***!
  \**************************************************/
/*! exports provided: RandomNumberDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomNumberDto", function() { return RandomNumberDto; });
class RandomNumberDto {
    constructor() {
        this.alphaCounter = 0;
        this.floatCounter = 0;
        this.numCounter = 0;
        this.fileSize = 0;
    }
}


/***/ }),

/***/ "SrBD":
/*!***************************************************!*\
  !*** ./src/app/_services/randomNumberServices.ts ***!
  \***************************************************/
/*! exports provided: RandomNumberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomNumberService", function() { return RandomNumberService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



// import { environment } from 'src/environments/environment.prod';
class RandomNumberService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'NumberGenerator/';
    }
    generateRandomNumber(fileSize) {
        return this.http.get(this.baseUrl + 'generateRandomNumber/' + fileSize).toPromise();
    }
}
RandomNumberService.??fac = function RandomNumberService_Factory(t) { return new (t || RandomNumberService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RandomNumberService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: RandomNumberService, factory: RandomNumberService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'PTC1002-Angular';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VHW1":
/*!*********************************************************!*\
  !*** ./src/app/reandomNumber/randomNumber.component.ts ***!
  \*********************************************************/
/*! exports provided: RandomNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomNumberComponent", function() { return RandomNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_models_randmoNumberDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/randmoNumberDto */ "Kb57");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_randomNumberServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/randomNumberServices */ "SrBD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class RandomNumberComponent {
    constructor(randomNumberService) {
        this.randomNumberService = randomNumberService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.n = 1;
        this.floatCounter = 0;
        this.numCounter = 0;
        this.alphaCounter = 0;
        this.randomNumberDto = new _shared_models_randmoNumberDto__WEBPACK_IMPORTED_MODULE_1__["RandomNumberDto"]();
    }
    ngOnInit() {
    }
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.n = 1;
            while (this.n == 1) {
                //debugger;
                this.process = yield this.randomNumberService.generateRandomNumber(this.fileSize).catch(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).then(resp => {
                    this.randomNumberDto = resp;
                    this.alphaCounter = this.randomNumberDto.alphaCounter + this.alphaCounter;
                    this.floatCounter = this.randomNumberDto.floatCounter + this.floatCounter;
                    this.numCounter = this.randomNumberDto.numCounter + this.numCounter;
                }, error => {
                    console.log(error);
                });
                if (this.fileSize != null && this.fileSize != 0 && this.fileSize != undefined) {
                    if (parseFloat(this.fileSize) * 1024 <= this.randomNumberDto.fileSize) {
                        alert("File Size is exceeded");
                        break;
                    }
                }
            }
        });
    }
    stop() {
        this.n = 2;
    }
}
RandomNumberComponent.??fac = function RandomNumberComponent_Factory(t) { return new (t || RandomNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_randomNumberServices__WEBPACK_IMPORTED_MODULE_5__["RandomNumberService"])); };
RandomNumberComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: RandomNumberComponent, selectors: [["app-randomNumber"]], decls: 72, vars: 4, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-1"], [1, "col-md-3"], ["type", "checkbox", "id", "numeric", "name", "numeric", "value", "numeric"], ["for", "vehicle1"], ["type", "checkbox", "id", "alphanumeric", "name", "alphanumeric", "value", "alphanumeric"], ["for", "vehicle2"], ["type", "checkbox", "id", "float", "name", "float", "value", "float"], ["for", "vehicle3"], ["for", "application-no", 1, "control-label", "required"], ["type", "text", "id", "fileSize", "name", "fileSize", "placeholder", "Size of the output file", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-embossed", "btn-add-product", 2, "float", "right", "margin-right", "5px", 3, "click"], [1, "fa", "fa-play"], ["type", "button", 1, "btn", "btn-sm", "btn-embossed", "btn-danger", "btn-add-product", 2, "float", "right", 3, "click"], [1, "fa", "fa-stop", 2, "color", "white"], ["for", "counter1"], ["type", "text", "id", "numCounter", "name", "numCounter", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "counter2"], ["type", "text", "id", "alphaCounter", "name", "alphaCounter", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "floatCounter", "name", "floatCounter", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-2"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-sm", "btn-success", "btn-embossed"], [1, "fa", "fa-bar-chart"]], template: function RandomNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, " Numeric");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, " Alphanumeric");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, " Float");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, "Size of the output file (KB)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function RandomNumberComponent_Template_input_ngModelChange_22_listener($event) { return ctx.fileSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RandomNumberComponent_Template_button_click_28_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](30, "\u00A0\u00A0Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RandomNumberComponent_Template_button_click_32_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](33, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](34, "\u00A0\u00A0Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, " Counter 1 (Numberic)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function RandomNumberComponent_Template_input_ngModelChange_43_listener($event) { return ctx.numCounter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](50, " Counter 2 (Alphanumberic)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function RandomNumberComponent_Template_input_ngModelChange_53_listener($event) { return ctx.alphaCounter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](60, " Counter 3 (Float)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](63, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function RandomNumberComponent_Template_input_ngModelChange_63_listener($event) { return ctx.floatCounter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](69, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](70, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](71, "\u00A0\u00A0Generate Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.fileSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.numCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.alphaCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.floatCounter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYW5kb21OdW1iZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _reandomNumber_randomNumber_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reandomNumber/randomNumber.component */ "VHW1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _reandomNumber_randomNumber_component__WEBPACK_IMPORTED_MODULE_5__["RandomNumberComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.??fac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 5, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Access Denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _reandomNumber_randomNumber_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reandomNumber/randomNumber.component */ "VHW1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { LoginComponent } from './login/login.component';




const appRoutes = [
    { path: '', component: _reandomNumber_randomNumber_component__WEBPACK_IMPORTED_MODULE_2__["RandomNumberComponent"] },
    // {path: 'login', component: LoginComponent},
    { path: 'pagenotfound', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"] },
    { path: 'randomNumber', component: _reandomNumber_randomNumber_component__WEBPACK_IMPORTED_MODULE_2__["RandomNumberComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map