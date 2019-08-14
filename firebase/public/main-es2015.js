(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event/event.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event/event.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n<button class=\"btn btn-primary my-3\" (click)='onclick()'>Submit</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"my-3 text-center\">{{p1}}</h2>\n\n<nav class=\"navbar navbar-light bg-warning navbar-expand-md\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar1\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbar1\" [style.font-size.px]='20'>\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item mx-2\">\n              <a class=\"nav-link\" routerLink = 'property' routerLinkActive = 'active'>{{a1}}</a>\n            </li>\n            <li class=\"nav-item mx-2\">\n              <a class=\"nav-link\" routerLink = 'event' routerLinkActive = 'active'>{{a2}}</a>\n            </li>\n            <li class=\"nav-item mx-2\">\n              <a class=\"nav-link\" routerLink = 'one-way' routerLinkActive = 'active'>{{a3}}</a>\n            </li>\n            <li class=\"nav-item mx-2\">\n              <a class=\"nav-link\" routerLink = 'two-way' routerLinkActive = 'active'>{{a4}}</a>\n            </li>\n          </ul>\n        </div>\n</nav>\n<router-outlet></router-outlet>\n<nav class=\"bg-secondary text-center py-3 text-white\">\n    {{p2}}\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/one-way/one-way.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/one-way/one-way.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div1\" class=\"m-0\">\n        <h2 class=\"py-5 text-center font-italic\">STUDENTS DETAILS</h2>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-3\"></div>\n                <form class=\"col-lg-4 col-md-6\" (ngSubmit)='add(contactForm.value)' name=\"contactForm\" #contactForm=\"ngForm\">\n                    <label class=\"text-white\" >Name</label>\n                    <input class=\"form-control\" placeholder=\"Name\" ngModel #name='ngModel' name=\"name\">\n                    <label class=\"text-white mt-2\">Email</label>\n                    <input class=\"form-control\" placeholder=\"Email\" ngModel #name='ngModel' name='email'>\n                    <label class=\"text-white mt-2\">Gender</label>\n                    <select class=\"form-control\" placeholder=\"Select\" ngModel #name='ngModel' name='gender'>\n                        <option>Male</option>\n                        <option>Female</option>\n                        <option>Other</option>\n                    </select>\n                    <label class=\"text-white mt-2\">Age</label>\n                    <input class=\"form-control\" placeholder=\"Age\" type=\"number\" ngModel #name='ngModel' name='age'>\n                    <label class=\"text-white mt-2\">Aadhar No :</label>\n                    <input class=\"form-control\" placeholder=\"Aadhar No\" ngModel #name='ngModel' name='aadhar'>\n                    <div class=\"text-center\">\n                        <button class=\"btn btn-primary my-3\">Submit</button>\n                    </div>\n                    <div class=\"bg-warning text-center\">\n                        <p>{{data.name}}</p>\n                        <p>{{data.email}}</p>\n                        <p>{{data.gender}}</p>\n                        <p>{{data.age}}</p>\n                        <p>{{data.aadhar}}</p>\n                    </div>\n                </form>\n                <div class=\"col-lg-4 col-md-3\"></div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n<h2 class=\"my-3 \">{{p1}}</h2>\n<p class=\"my-3\" [innerHtml]='p2'></p>\n</div>\n<div class=\"container\">\n    <div class='row'>\n        <div class=\"col-lg-3 col-md-3 p-0\">\n            <img src='{{img1}}' class=\"w-100\">\n        </div>\n        <div class=\"col-lg-3 col-md-3 p-0\">\n            <img src='{{img2}}' class=\"w-100\">\n        </div>\n        <div class=\"col-lg-3 col-md-3 p-0\">\n            <img src='{{img3}}' class=\"w-100\">\n        </div>\n        <div class=\"col-lg-3 col-md-3 p-0\">\n            <img src='{{img4}}' class=\"w-100\">\n        </div>\n    </div>\n    <div class=\"row mb-4\">\n        <div class=\"col-lg-3 col-md-3 p-0\">\n            <img src='{{img5}}' class=\"w-100\" height = '180px'>\n        </div>\n        <div class=\"col-lg-3 col-md-3 p-0\">\n            <img src='{{img6}}' class=\"w-100\" height=\"180px\">\n        </div>\n        <div class=\"col-lg-3 col-md-3 p-0\">\n            <img src='{{img7}}' class=\"w-100\" height=\"180px\">\n        </div>\n        <div class=\"col-lg-3 col-md-3 p-0\">\n            <img src='{{img8}}' class=\"w-100\" height=\"180px\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/two-way/two-way.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/two-way/two-way.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div1\" class=\"m-0\">\n        <h2 class=\"py-5 text-center font-italic\">STUDENTS DETAILS</h2>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-3\"></div>\n                <div class=\"col-lg-4 col-md-6\">\n                    <label class=\"text-white\">Name</label>\n                    <input class=\"form-control\" placeholder=\"Name\" [(ngModel)]='name'/>\n                    <label class=\"text-white mt-2\">Email</label>\n                    <input class=\"form-control\" placeholder=\"Email\" [(ngModel)]='email'>\n                    <label class=\"text-white mt-2\">Gender</label>\n                    <select class=\"form-control\" placeholder=\"Select\" [(ngModel)]='gender'>\n                        <option>Male</option>\n                        <option>Female</option>\n                        <option>Other</option>\n                    </select>\n                    <label class=\"text-white mt-2\">Age</label>\n                    <input class=\"form-control\" placeholder=\"Age\"[(ngModel)]='age'>\n                    <label class=\"text-white mt-2\">Aadhar No :</label>\n                    <input class=\"form-control\" placeholder=\"Aadhar No\"[(ngModel)]='aadhar'>\n                    <div class=\"bg-warning my-4 text-center\">\n                            <p>{{name}}</p>\n                            <p>{{email}}</p>\n                            <p>{{gender}}</p>\n                            <p>{{age}}</p>\n                            <p>{{aadhar}}</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-3\"></div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property/property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _one_way_one_way_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./one-way/one-way.component */ "./src/app/one-way/one-way.component.ts");
/* harmony import */ var _two_way_two_way_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./two-way/two-way.component */ "./src/app/two-way/two-way.component.ts");








const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [
            { path: 'property', component: _property_property_component__WEBPACK_IMPORTED_MODULE_3__["PropertyComponent"] },
            { path: 'event', component: _event_event_component__WEBPACK_IMPORTED_MODULE_5__["EventComponent"] },
            { path: 'one-way', component: _one_way_one_way_component__WEBPACK_IMPORTED_MODULE_6__["OneWayComponent"] },
            { path: 'two-way', component: _two_way_two_way_component__WEBPACK_IMPORTED_MODULE_7__["TwoWayComponent"] }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Binding';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property/property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _one_way_one_way_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./one-way/one-way.component */ "./src/app/one-way/one-way.component.ts");
/* harmony import */ var _two_way_two_way_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./two-way/two-way.component */ "./src/app/two-way/two-way.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _property_property_component__WEBPACK_IMPORTED_MODULE_6__["PropertyComponent"],
            _event_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"],
            _one_way_one_way_component__WEBPACK_IMPORTED_MODULE_8__["OneWayComponent"],
            _two_way_two_way_component__WEBPACK_IMPORTED_MODULE_9__["TwoWayComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventComponent = class EventComponent {
    constructor() { }
    ngOnInit() {
    }
    onclick() {
        alert("Successfully Done!");
    }
};
EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event',
        template: __webpack_require__(/*! raw-loader!./event.component.html */ "./node_modules/raw-loader/index.js!./src/app/event/event.component.html"),
        styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
    })
], EventComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.p1 = 'Data Binding';
        this.a1 = 'Property';
        this.a2 = 'Event';
        this.a3 = 'One-Way';
        this.a4 = 'Two-Way';
        this.p2 = "Copyright (C) 2013 -www.ieatcss.com";
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/one-way/one-way.component.css":
/*!***********************************************!*\
  !*** ./src/app/one-way/one-way.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div1{\r\n    background-image: -webkit-gradient(linear, left top, right top, from(red), to(yellow));\r\n    background-image: linear-gradient(to right, red, yellow);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25lLXdheS9vbmUtd2F5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzRkFBd0Q7SUFBeEQsd0RBQXdEO0FBQzVEIiwiZmlsZSI6InNyYy9hcHAvb25lLXdheS9vbmUtd2F5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGl2MXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmVkLCB5ZWxsb3cpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/one-way/one-way.component.ts":
/*!**********************************************!*\
  !*** ./src/app/one-way/one-way.component.ts ***!
  \**********************************************/
/*! exports provided: OneWayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneWayComponent", function() { return OneWayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OneWayComponent = class OneWayComponent {
    constructor() {
        this.data = {
            'name': '',
            'email': '',
            'gender': '',
            'age': '',
            'aadhar': ''
        };
    }
    ngOnInit() {
    }
    add(value) {
        this.data.name = value.name;
        this.data.email = value.email;
        this.data.gender = value.gender;
        this.data.age = value.age;
        this.data.aadhar = value.aadhar;
    }
};
OneWayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one-way',
        template: __webpack_require__(/*! raw-loader!./one-way.component.html */ "./node_modules/raw-loader/index.js!./src/app/one-way/one-way.component.html"),
        styles: [__webpack_require__(/*! ./one-way.component.css */ "./src/app/one-way/one-way.component.css")]
    })
], OneWayComponent);



/***/ }),

/***/ "./src/app/property/property.component.css":
/*!*************************************************!*\
  !*** ./src/app/property/property.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/property/property.component.ts":
/*!************************************************!*\
  !*** ./src/app/property/property.component.ts ***!
  \************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PropertyComponent = class PropertyComponent {
    constructor() {
        this.p1 = 'Upcoming university events';
        this.p2 = 'From a group of academic pioneers in 1901 to the Free Speech Movement in 1964, Bridge University.';
        this.img1 = "assets/img/study1.jpg";
        this.img2 = "assets/img/study2.jpg";
        this.img3 = "assets/img/study3.jpg";
        this.img4 = "assets/img/study4.jpg";
        this.img5 = "assets/img/study5.jpg";
        this.img6 = "assets/img/study6.jpg";
        this.img7 = "assets/img/study7.jpg";
        this.img8 = "assets/img/study8.jpg";
    }
    ngOnInit() {
    }
};
PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property',
        template: __webpack_require__(/*! raw-loader!./property.component.html */ "./node_modules/raw-loader/index.js!./src/app/property/property.component.html"),
        styles: [__webpack_require__(/*! ./property.component.css */ "./src/app/property/property.component.css")]
    })
], PropertyComponent);



/***/ }),

/***/ "./src/app/two-way/two-way.component.css":
/*!***********************************************!*\
  !*** ./src/app/two-way/two-way.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div1{\r\n    background-image: -webkit-gradient(linear, left top, right top, from(red), to(yellow));\r\n    background-image: linear-gradient(to right, red, yellow);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdvLXdheS90d28td2F5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzRkFBd0Q7SUFBeEQsd0RBQXdEO0FBQzVEIiwiZmlsZSI6InNyYy9hcHAvdHdvLXdheS90d28td2F5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGl2MXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmVkLCB5ZWxsb3cpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/two-way/two-way.component.ts":
/*!**********************************************!*\
  !*** ./src/app/two-way/two-way.component.ts ***!
  \**********************************************/
/*! exports provided: TwoWayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayComponent", function() { return TwoWayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TwoWayComponent = class TwoWayComponent {
    constructor() { }
    ngOnInit() {
    }
};
TwoWayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-two-way',
        template: __webpack_require__(/*! raw-loader!./two-way.component.html */ "./node_modules/raw-loader/index.js!./src/app/two-way/two-way.component.html"),
        styles: [__webpack_require__(/*! ./two-way.component.css */ "./src/app/two-way/two-way.component.css")]
    })
], TwoWayComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Angular\Task\Binding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map