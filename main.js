(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Inject/HttpIntercept.ts":
/*!*****************************************!*\
  !*** ./src/app/Inject/HttpIntercept.ts ***!
  \*****************************************/
/*! exports provided: CustomHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpInterceptor", function() { return CustomHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomHttpInterceptor = /** @class */ (function () {
    function CustomHttpInterceptor() {
    }
    CustomHttpInterceptor.prototype.intercept = function (req, next) {
        // Clone the request to add the new header
        var clonedRequest = req.clone();
        // console.log('request interceptor', clonedRequest);
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
            // console.log('response interceptor', r);
            return r;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            var response = err;
            var status = response.status;
            var option;
            switch (status) {
                case 422:
                    var errors_1 = response.error.errors;
                    var msgs = Object.keys(errors_1)
                        .reduce(function (result, el) {
                        var _a;
                        return __assign({}, result, (_a = {}, _a[el] = errors_1[el][0], _a));
                    }, {});
                    var msg_html = Object.keys(errors_1)
                        .reduce(function (result, el) {
                        return result.concat("<br />" + errors_1[el][0] + "<br /> ");
                    }, '');
                    option = {
                        title: 'Validate Failed',
                        html: "<div class=\"error\">" + msg_html + "</div>",
                        type: 'warning'
                    };
                    break;
                case 500:
                    option = {
                        title: status,
                        text: err.error,
                        type: 'error'
                    };
                    break;
            }
            if (option !== null || option !== undefined) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2__["fire"](option);
            }
            return Promise.reject(err);
        }));
    };
    CustomHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomHttpInterceptor);
    return CustomHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/Models/review-user.ts":
/*!***************************************!*\
  !*** ./src/app/Models/review-user.ts ***!
  \***************************************/
/*! exports provided: ReviewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewUser", function() { return ReviewUser; });
var ReviewUser = /** @class */ (function () {
    function ReviewUser(name, icon, review, position, lastname, company) {
        if (name === void 0) { name = ''; }
        if (icon === void 0) { icon = ''; }
        if (review === void 0) { review = ''; }
        if (position === void 0) { position = ''; }
        if (lastname === void 0) { lastname = ''; }
        if (company === void 0) { company = ''; }
        this.name = name;
        this.icon = icon;
        this.review = review;
        this.position = position;
        this.lastname = lastname;
        this.company = company;
    }
    return ReviewUser;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_service_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/service/service.component */ "./src/app/pages/service/service.component.ts");
/* harmony import */ var _pages_solution_solution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/solution/solution.component */ "./src/app/pages/solution/solution.component.ts");
/* harmony import */ var _pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _pages_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/testimonial/testimonial.component */ "./src/app/pages/testimonial/testimonial.component.ts");
/* harmony import */ var _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contactus/contactus.component */ "./src/app/pages/contactus/contactus.component.ts");
/* harmony import */ var _pages_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found404/not-found404.component */ "./src/app/pages/not-found404/not-found404.component.ts");
/* harmony import */ var _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _pages_requestdemo_requestdemo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/requestdemo/requestdemo.component */ "./src/app/pages/requestdemo/requestdemo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'service',
        component: _pages_service_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"]
    },
    {
        path: 'solution',
        component: _pages_solution_solution_component__WEBPACK_IMPORTED_MODULE_4__["SolutionComponent"]
    },
    {
        path: 'pricing',
        component: _pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__["PricingComponent"]
    },
    {
        path: 'testimonial',
        component: _pages_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialComponent"]
    },
    {
        path: 'contactus',
        component: _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"]
    },
    {
        path: 'aboutus',
        component: _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"]
    },
    {
        path: 'requestdemo',
        component: _pages_requestdemo_requestdemo_component__WEBPACK_IMPORTED_MODULE_10__["RequestdemoComponent"]
    },
    {
        path: '404',
        component: _pages_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_8__["NotFound404Component"]
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(router) {
        window.scrollTo(0, 0);
        router.events.subscribe(function (route) {
            // console.log('enter',route)
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            }
        });
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'top',
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet (activate)=\"loader()\"></router-outlet>\n\n<app-footer></app-footer>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CUBETIQ';
    }
    AppComponent.prototype.loader = function () {
        // Remove old scripts
        // document.querySelector("script[src='scripts.js']").remove()
        // window.location.reload()
        // let h=location.hash
        // console.log("test");
        // switch(h) {
        //   case "#service":
        //     console.log(h);
        //     window.scrollTo(0, 1000);
        //     break;
        //   case "#why_us":
        //     console.log(h);
        //     break;
        //   default:
        //     window.scrollTo(0, 0);
        //     console.log("Invalit");
        // }
    };
    AppComponent.prototype.ngAfterContentInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/header/header.component */ "./src/app/layouts/header/header.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_service_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/service/service.component */ "./src/app/pages/service/service.component.ts");
/* harmony import */ var _pages_solution_solution_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/solution/solution.component */ "./src/app/pages/solution/solution.component.ts");
/* harmony import */ var _pages_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/testimonial/testimonial.component */ "./src/app/pages/testimonial/testimonial.component.ts");
/* harmony import */ var _pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/client/client.component */ "./src/app/pages/client/client.component.ts");
/* harmony import */ var _pages_reason_reason_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/reason/reason.component */ "./src/app/pages/reason/reason.component.ts");
/* harmony import */ var _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/contactus/contactus.component */ "./src/app/pages/contactus/contactus.component.ts");
/* harmony import */ var _pages_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/not-found404/not-found404.component */ "./src/app/pages/not-found404/not-found404.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Inject_HttpIntercept__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Inject/HttpIntercept */ "./src/app/Inject/HttpIntercept.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _pages_requestdemo_requestdemo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/requestdemo/requestdemo.component */ "./src/app/pages/requestdemo/requestdemo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_service_service_component__WEBPACK_IMPORTED_MODULE_10__["ServiceComponent"],
                _pages_solution_solution_component__WEBPACK_IMPORTED_MODULE_11__["SolutionComponent"],
                _pages_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"],
                _pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_13__["PricingComponent"],
                _pages_client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"],
                _pages_reason_reason_component__WEBPACK_IMPORTED_MODULE_15__["ReasonComponent"],
                _pages_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_16__["ContactusComponent"],
                _pages_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_17__["NotFound404Component"],
                _pages_project_project_component__WEBPACK_IMPORTED_MODULE_21__["ProjectComponent"],
                _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_22__["AboutusComponent"],
                _pages_requestdemo_requestdemo_component__WEBPACK_IMPORTED_MODULE_23__["RequestdemoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // FragmentPolyfillModule.forRoot({
                //     smooth: true
                // }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_4__["AvatarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_20__["ScrollToModule"].forRoot()
            ],
            providers: [
                {
                    multi: true,
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _Inject_HttpIntercept__WEBPACK_IMPORTED_MODULE_19__["CustomHttpInterceptor"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerBordy {\n  margin-top: 50px;\n  background-color: white;\n}\n\n.ftco-footer p {\n  color: #6B6B6B;\n}\n\n.ftco-footer .ftco-footer-widget h2 {\n  font-weight: normal;\n  color: #6B6B6B;\n  margin-bottom: 40px;\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.block-23 ul li span {\n  color: #6B6B6B;\n}\n\n.mb-5, .my-5 {\n  margin-bottom: .2rem !important;\n}\n\n.h4footer {\n  line-height: 1.5;\n  color: #6B6B6B !important;\n}\n\n.ftco-footer-social li a {\n  height: 30px;\n  width: 30px;\n  display: block;\n  float: left;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 50%;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlckJvcmR5IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mdGNvLWZvb3RlciBwIHtcbiAgY29sb3I6ICM2QjZCNkI7XG59XG5cbi5mdGNvLWZvb3RlciAuZnRjby1mb290ZXItd2lkZ2V0IGgyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM2QjZCNkI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJsb2NrLTIzIHVsIGxpIHNwYW4ge1xuICBjb2xvcjogIzZCNkI2Qjtcbn1cblxuLm1iLTUsIC5teS01IHtcbiAgbWFyZ2luLWJvdHRvbTogLjJyZW0gIWltcG9ydGFudDtcbn1cblxuLmg0Zm9vdGVyIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM2QjZCNkIgIWltcG9ydGFudDtcbn1cblxuLmZ0Y28tZm9vdGVyLXNvY2lhbCBsaSBhIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr style=\"background-color:#2cc3e9; height: 1.5px; margin-top: 20px;\">\n<footer class=\"ftco-footer ftco-bg-dark ftco-section footerBordy\" >\n  <div class=\"container\">\n\n    <div class=\"row mb-5\">\n      <div class=\"col-md-4\">\n        <div class=\"ftco-footer-widget mb-4\">\n<!--          <h2 class=\"ftco-heading-2\">CUBETIQ.</h2>-->\n          <img src=\"/assets/images/LOGO-Black.png\" alt=\"\" style=\"width: 70%\">\n          <p style=\"margin-top: 25px\">Mon-Sat: 8:00-17:00 <br> Close on Sunday.\n          </p>\n        </div>\n        <ul class=\"ftco-footer-social list-unstyled float-md-left float-lft \">\n          <li class=\"\"><a href=\"https://www.facebook.com/cubetiq/\"><img src=\"assets/ICON/fb.svg\" alt=\"\" width=\"100%\"></a></li>\n          <li class=\"\"><a href=\"https://www.linkedin.com/company/cubetiq/\"><img src=\"assets/ICON/linkedin.svg\" alt=\"\" width=\"100%\"></a></li>\n          <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\n        </ul>\n      </div>\n\n\n      <div class=\"col-md-4\">\n        <h4 class=\"font-weight-bold h4footer\">About CUBETIQ</h4>\n        <p>We specialize in: <br>\n          - Point of Sales (POS) System <br>\n          - Custom Enterprise System <br>\n          - Web Design & Development <br>\n          - eCommerce\n        </p>\n      </div>\n\n\n      <div class=\"col-md-4\">\n        <div class=\"ftco-footer-widget mb-4\">\n          <h4 class=\"font-weight-bold h4footer\">Contact Info</h4>\n          <div class=\"block-23 mb-3\">\n            <ul>\n              <li>\n                <a href=\"tel:+85587686800\" style=\"margin-bottom: 0px !important;\"><span class=\"icon icon-phone\" style=\"color: #268BB9;\"></span><span class=\"text\" style=\"color: #268BB9; \">(+855)-87686800</span></a>\n                <a href=\"tel:+855886860086\"><span class=\"icon icon-phone\" style=\"color: #268BB9;\"></span><span class=\"text\" style=\"color: #268BB9;\">(+855)-886860086 </span></a>\n              </li>\n\n              <li><a href=\"mailto:hi@cubetiqs.com\"><span class=\"icon icon-envelope\"></span><span class=\"text\">hi@cubetiqs.com</span></a></li>\n              <li><span class=\"icon icon-map-marker\"></span><span class=\"text\">10E0, St.528, Sangkat Boengkak 1, Khan Toul Kork, Phnom Penh, Cambodia.</span></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- Copyright -->\n    <div class=\"row\">\n      <div class=\"col-md-12 text-left\">\n        <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n          Copyright &copy;<script>document.write(new Date().getFullYear());</script> 2019 CUBETIQ. All rights reserved\n<!--          | This template is made with-->\n<!--          <i class=\"icon-heart\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>-->\n          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layouts/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layouts/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/header/header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ftco-navbar-light{\n  top:0px;\n  position:-webkit-sticky;\n  position:sticky;\n  /* background:white !important; */\n  font-family: lato;\n  padding-bottom: 0;\n}\n#ftco-navbar .navbar-brand{\n  width: 240px;\n  height: 50px;\n  background: url('/assets/images/LOGO-Black.png');\n  background-size: cover;\n  background-repeat: round;\n}\n.ftco-navbar-light .navbar-nav > .nav-item.cta > a{\n  border: solid 1px #2cc3e9 !important;\n  color: #2cc3e9 ;\n  border:solid;\n  /* background:#fff; */\n  /*border-color: #2cc3e9 !important;*/\n}\n.ftco-navbar-light  .btn-request span{\n  color: #2cc3e9 !important;\n}\n@media (max-width: 991px){\n  nav{\n    margin-top: 0px !important;\n  }\n  .ftco-navbar-light.scrolled .nav-link{\n    color: #fff !important;\n  }\n\n  .ftco-navbar-light.scrolled .navbar-toggler{\n    color: #fff !important;\n  }\n  #ftco-navbar .navbar-brand{\n    background: url('/assets/images/LOGO-White.png');\n    background-size: cover;\n  }\n\n  .ftco-navbar-light .navbar-nav > .nav-item .dropdown-menu {\n    background: #000;\n    text-indent: 50px;\n  }\n  .ftco-navbar-light .navbar-nav > .nav-item .dropdown-menu .dropdown-item{\n    color: #fff !important;\n  }\n  .ftco-navbar-light{\n    background:black !important;\n    padding-bottom: 10px;\n  }\n\n}\n.ftco-navbar-light  .btn-request:hover{\n  background: #2cc3e9 !important;\n}\n.ftco-navbar-light  .btn-request:hover span{\n  color:white !important;\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link:hover{\n  color:#2cc3e9 ;\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link {\n  font-size: 17px;\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link {\n  text-transform: none;\n}\n.ftco-navbar-light .navbar-nav > .nav-item.active > a {\n  color: #2cc3e9 !important;\n  /* text-decoration: underline; */\n  border-bottom: solid;\n }\n.ftco-navbar-light.scrolled .nav-item.cta > a {\n  color: #fff !important;\n  background: #fff;\n  border: none !important;\n  padding-top: .3rem;\n  padding-bottom: .4rem;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 6px !important;\n  border-radius: 30px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0VBQ1AsdUJBQWU7RUFBZixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0RBQWdEO0VBQ2hELHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0RBQWdEO0lBQ2hELHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLG9CQUFvQjtFQUN0Qjs7QUFFRjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnRjby1uYXZiYXItbGlnaHR7XG4gIHRvcDowcHg7XG4gIHBvc2l0aW9uOnN0aWNreTtcbiAgLyogYmFja2dyb3VuZDp3aGl0ZSAhaW1wb3J0YW50OyAqL1xuICBmb250LWZhbWlseTogbGF0bztcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4jZnRjby1uYXZiYXIgLm5hdmJhci1icmFuZHtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvTE9HTy1CbGFjay5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xufVxuXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0uY3RhID4gYXtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzJjYzNlOSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzJjYzNlOSA7XG4gIGJvcmRlcjpzb2xpZDtcbiAgLyogYmFja2dyb3VuZDojZmZmOyAqL1xuICAvKmJvcmRlci1jb2xvcjogIzJjYzNlOSAhaW1wb3J0YW50OyovXG59XG4uZnRjby1uYXZiYXItbGlnaHQgIC5idG4tcmVxdWVzdCBzcGFue1xuICBjb2xvcjogIzJjYzNlOSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KXtcbiAgbmF2e1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5mdGNvLW5hdmJhci1saWdodC5zY3JvbGxlZCAubmF2LWxpbmt7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mdGNvLW5hdmJhci1saWdodC5zY3JvbGxlZCAubmF2YmFyLXRvZ2dsZXJ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAjZnRjby1uYXZiYXIgLm5hdmJhci1icmFuZHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL0xPR08tV2hpdGUucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB0ZXh0LWluZGVudDogNTBweDtcbiAgfVxuICAuZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW17XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAuZnRjby1uYXZiYXItbGlnaHR7XG4gICAgYmFja2dyb3VuZDpibGFjayAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbn1cblxuLmZ0Y28tbmF2YmFyLWxpZ2h0ICAuYnRuLXJlcXVlc3Q6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICMyY2MzZTkgIWltcG9ydGFudDtcbn1cbi5mdGNvLW5hdmJhci1saWdodCAgLmJ0bi1yZXF1ZXN0OmhvdmVyIHNwYW57XG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazpob3ZlcntcbiAgY29sb3I6IzJjYzNlOSA7XG59XG5cbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtID4gLm5hdi1saW5rIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5hY3RpdmUgPiBhIHtcbiAgY29sb3I6ICMyY2MzZTkgIWltcG9ydGFudDtcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xuIH1cblxuLmZ0Y28tbmF2YmFyLWxpZ2h0LnNjcm9sbGVkIC5uYXYtaXRlbS5jdGEgPiBhIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAuM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IC40cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light mt-4 bg-white\" id=\"ftco-navbar\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\" (click)=\"ScrollToHome()\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\"  aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"icon icon-reorder\"></span> Menu\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n      <ul class=\"navbar-nav ml-auto\">\n\n        <li class=\"nav-item\"><a class=\"nav-link\"  routerLink=\"/\" fragment=\"service\" (click)=\"ScrollToService()\">Services</a></li>\n\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/\" fragment=\"why_us\" (click)=\"ScrollToWhyus()\">Why Us?</a></li>\n\n\n        <!-- <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" (click)=\"ScrollToProject()\">Projects</a></li> -->\n\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/aboutus\">About Us</a></li>\n\n        <li class=\"nav-item\"><a class=\"nav-link\"  routerLink=\"/contactus\">Contact Us</a></li>\n\n        <li class=\"nav-item cta\" >\n          <!-- <a class=\"nav-link border-2 btn-request\" routerLink=\"/requestdemo\" data-toggle=\"modal\" data-target=\"#modalRequest\">\n            <span>Request a Demo</span>\n          </a> -->\n          <a class=\"nav-link border-2 btn-request\" routerLink=\"/requestdemo\">\n            <span>Request a Demo</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- END nav -->\n\n"

/***/ }),

/***/ "./src/app/layouts/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    // constructor() { }
    function HeaderComponent(_scrollToService, helper) {
        this._scrollToService = _scrollToService;
        this.helper = helper;
        this.show_navbar = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        $('li.nav-item').click(function () {
            $('.navbar-toggler').click();
        });
        $('.nav-item').on('click', function () {
            $('.navbar-nav').find('.active').removeClass('active');
            $(this).addClass('active');
        });
        // let h=location.hash
        // switch(h) {
        //   case "#service":
        //     console.log(h);
        //     window.scrollTo(0, 1000);
        //     break;
        //   case "#why_us":
        //     console.log(h);
        //     break;
        //   default:
        //     window.scrollTo(0, 0);
        //     console.log("Invalit");
        // }
    };
    HeaderComponent.prototype.ScrollToService = function () {
        var _this = this;
        $('html, body').animate({
            'scrollTop': $('#service').offset().top - document.getElementById('ftco-navbar').offsetHeight - 20
        }, 1000, function () {
            _this.helper.setTitle('Services');
        });
    };
    HeaderComponent.prototype.ScrollToWhyus = function () {
        var _this = this;
        $('html, body').animate({
            'scrollTop': $('#why_us').offset().top - document.getElementById('ftco-navbar').offsetHeight - 20
        }, 1000, function () {
            _this.helper.setTitle('Why Us');
        });
    };
    HeaderComponent.prototype.ScrollToProject = function () {
        this.helper.setTitle('Home');
        $('html, body').animate({
            'scrollTop': $('#project').offset().top - document.getElementById('ftco-navbar').offsetHeight - 20
        }, 1000);
    };
    HeaderComponent.prototype.ScrollToHome = function () {
        $('html, body').animate({
            'scrollTop': $('#home').offset().top - document.getElementById('ftco-navbar').offsetHeight - 20
        }, 500);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layouts/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layouts/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_1__["ScrollToService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-inner {\n  height: auto;\n}\n\n\n.h1About {\n  font-size: 2.5rem;\n  color: #2cc3e9;\n  line-height: normal;\n  font-weight: 600;\n}\n\n\n.hrAbout{\n  background-color: #2cc3e9;\n  height: 1px;\n  width: 170px;\n}\n\n\n.contentAbout {\n\n}\n\n\n.carousel-indicators li {\n  /* position: relative; */\n  /* flex: 0 1 auto; */\n  width: 15px !important;\n  height: 15px !important;\n  border-radius: 0.5rem !important;\n  /* margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px; */\n  /* background-color: #2CC3E9; */\n}\n\n\n.carousel-indicators .active {\n  background-color: #2CC3E9 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTs7QUFFQTs7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDOzt3QkFFc0I7RUFDdEIsK0JBQStCO0FBQ2pDOzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWlubmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5oMUFib3V0IHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiAjMmNjM2U5O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi5ockFib3V0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNjM2U5O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4uY29udGVudEFib3V0IHtcblxufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgLyogZmxleDogMCAxIGF1dG87ICovXG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgLyogbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5cHg7ICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyQ0MzRTk7ICovXG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNDM0U5ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\n  <div class=\"container\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"/assets/images/about img (1).jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"/assets/images/about img (2).jpg\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"/assets/images/about img (3).jpg\" alt=\"Third slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div style=\"margin-bottom: 20px; margin-top: 50px;\">\n        <span class=\"h1About\">About Us</span>\n        <hr class=\"hrAbout\">\n    </div>\n\n    <span class=\"contentAbout\">\n        CUBETIQ, founded in 2017, is a new leading technology company that provide high quality software and solutions design as well as development for minor and major projects.\n        <br><br>\n        We have demonstrated experience in full life cycle software development, including business requirement gathering, system analysis, design, development, testing/quality assurance, implementation, documentation, and deployment of highly scalable distributed systems.\n        <br><br>\n        Over the years, we have developed an extensive and complete understanding of the entire software development environment and tools accompanied by up-to-date knowledge of modern software architecture. This positions us as the best fit to professional provide software solutions, guaranteed to boost revenue and organizational.\n        <br><br>\n        We specialize in:<br>\n        - Point of Sales (POS) System<br>\n        - Custom Enterprise System<br>\n        - Web Design & Development<br>\n        - eCommerce\n    </span>\n    <br><br>\n    <span style=\"font-weight: 600;\">\n      What is your goal to achieve success? Because our goal is your success.\n    </span>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.ts ***!
  \****************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(helper) {
        this.helper = helper;
    }
    AboutusComponent.prototype.ngOnInit = function () {
        this.helper.setTitle("About");
    };
    AboutusComponent.prototype.ngAfterViewInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/pages/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/pages/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/pages/client/client.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/client/client.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-owl .item .client-container{\n  width: auto;\n  height: 100%;\n}\n\n.client-owl .item .client-container img{\n  width: auto;\n  height: 100px;\n}\n\n.client-owl {\n  background: #F2F2F2;\n  margin: 0px;\n  padding: 50px !important;\n\n}\n\n.owl-carousel.client-owl .owl-stage-outer{\n  padding-left: 50px;\n  padding-right: 50px;\n  height: 100px;\n}\n\n.ftco-client .container{\n  max-width: 100% !important;\n  width:100% !important;\n  padding: 0px;\n}\n\n.ftco-client .client-nav{\n  width: 100% ;\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  height: 50%;\n  display: flex;\n  align-items: center;\n}\n\n.ftco-client .client-nav #prev{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  float: left;\n  font-size: 50pt;\n}\n\n.ftco-client .client-nav #next{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  float: right;\n  font-size: 50pt;\n  width: 100%;\n  text-align: right;\n}\n\n.ftco-client .client-nav .owl-dots{\n  visibility: hidden;\n  display: none;\n}\n\n.ftco-client .client-nav .owl-nav{\n  display: none;\n  visibility: hidden;\n}\n\n.ftco-client {\n  padding-bottom: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdCQUF3Qjs7QUFFMUI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBaUI7S0FBakIsc0JBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnQtb3dsIC5pdGVtIC5jbGllbnQtY29udGFpbmVye1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2xpZW50LW93bCAuaXRlbSAuY2xpZW50LWNvbnRhaW5lciBpbWd7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uY2xpZW50LW93bCB7XG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiA1MHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5vd2wtY2Fyb3VzZWwuY2xpZW50LW93bCAub3dsLXN0YWdlLW91dGVye1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5mdGNvLWNsaWVudCAuY29udGFpbmVye1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5mdGNvLWNsaWVudCAuY2xpZW50LW5hdntcbiAgd2lkdGg6IDEwMCUgO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mdGNvLWNsaWVudCAuY2xpZW50LW5hdiAjcHJldntcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDUwcHQ7XG59XG4uZnRjby1jbGllbnQgLmNsaWVudC1uYXYgI25leHR7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogNTBwdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZ0Y28tY2xpZW50IC5jbGllbnQtbmF2IC5vd2wtZG90c3tcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZnRjby1jbGllbnQgLmNsaWVudC1uYXYgLm93bC1uYXZ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5mdGNvLWNsaWVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/client/client.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/client/client.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ftco-section ftco-client mb-3\">\n\n  <div class=\"container text-center\">\n\n    <div class=\"row justify-content-center m-auto\">\n\n      <div class=\"col-md-7 text-center heading-section \" style=\"text-align: center !important;\">\n        <h1 class=\"mb-2 font-weight-bold\">OUR CLIENTS</h1>\n        <!--<span class=\"subheading\">Search Engine &amp; Social Media Optimization Experts</span>-->\n      </div>\n\n\n    </div>\n\n\n    <div class=\"owl-carousel owl-theme row text-center py-3 client-owl \" id=\"client-owl\">\n\n      <div  class=\"item \" *ngFor=\"let client of clients\">\n        <div class=\"client-container\">\n          <img [src]=\"config.ROOT+client.icon\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"client-nav px-3\" >\n      <h1 id=\"prev\" (click)=\"owlprev()\"><</h1>\n      <h1 id=\"next\" (click)=\"owlnext()\">></h1>\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/client/client.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/client/client.component.ts ***!
  \**************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientComponent = /** @class */ (function () {
    function ClientComponent(serviceData, config) {
        this.serviceData = serviceData;
        this.config = config;
        this.clients = [];
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceData.GetClient().subscribe(function (resp) {
            _this.clients = resp;
            setTimeout(function () {
                $('#client-owl').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: false,
                    dots: false,
                    navText: ['<', '>'],
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 2,
                        },
                        600: {
                            items: 2,
                        },
                        1000: {
                            items: 5,
                        }
                    }
                });
            }, 100);
        });
    };
    ClientComponent.prototype.owlnext = function () {
        $('.ftco-client .client-owl .owl-next').click();
    };
    ClientComponent.prototype.owlprev = function () {
        $('.ftco-client .client-owl .owl-prev').click();
    };
    ClientComponent.prototype.ngAfterViewInit = function () {
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/pages/client/client.component.html"),
            encapsulation: 2,
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/pages/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/pages/contactus/contactus.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/contactus/contactus.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\n  color : black;\n}\n\n.gmap_canvas {\n  overflow: visible;\n  background: none !important;\n  height: 400px;\n  width: 100%;\n}\n\n.contIcon {\n  width: 35px;\n  height: 35px;\n  margin-left: 20px;\n}\n\n#map{\n  margin-bottom: 100px;\n}\n\n.mapouter {\n  text-align: right;\n  height: 400px;\n  width: 100%;\n  /* padding: 0 10%; */\n}\n\nol, ul, dl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n.contectUl ul {\n  padding: 0;\n}\n\nul, menu, dir {\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  -webkit-padding-start: 40px;\n          padding-inline-start: 40px;\n}\n\n.contectUl ul li, .contectUl ul li > a {\n  display: table;\n  line-height: 1.5;\n  margin-bottom: 15px;\n}\n\n.ConH2{\n  color: #2cc3e9;\n  font-weight: 600;\n }\n\n.iconH3{\n  color: #2cc3e9;\n  font-weight: 600;\n  font-size: 2rem !important;\n  padding-left: 20px;\n}\n\n.formBox{\n  border: solid 2px #2cc3e9;\n  margin: 50px;\n  padding: 40px;\n}\n\n.formH1 {\n  font-weight: 600;\n  font-size: 2.3rem !important;\n  color: #2cc3e9;\n}\n\n.messageArea {\n  border: solid 1px #6B6B6B;\n  padding: 10px;\n}\n\n@media (max-width: 767px) {\n  .contectUl {\n    text-align: center;\n  }\n\n  .iconH3{\n    padding-left: 0px !important;\n  }\n\n  .mapouter {\n    text-align: center;\n    height: 100%;\n    width: 100%;\n    padding: 0 0px;\n    margin-top: 30px;\n  }\n\n  /* .gmap_canvas[_ngcontent-c3] {\n    overflow: visible;\n    background: none !important;\n    height: 100%;\n    width: 100%;\n  } */\n\n  .formBox{\n    border: solid 2px #2cc3e9;\n    margin: 0px;\n    padding: 20px;\n  }\n\n  .contIcon {\n    width: 35px;\n    height: 35px;\n    margin-left: 0;\n  }\n\n  .gmap_canvas {\n    overflow: visible;\n    background: none !important;\n    height: 300px;\n    width: 100%;\n}\n}\n\n/* .btn-primary {\n  background: #2CC3E9;\n  border: 1px solid #2CC3E9;\n  color: #fff;\n} */\n\n.form-control {\n  border-bottom: 1px solid black;\n}\n\n.btn-primary2 {\n  color: white;\n  background-color: #2CC3E9;\n  border-color: 1px #2CC3E9; }\n\n.btn-primary2:hover {\n    color: #2CC3E9;\n    background-color: white;\n    border-color: #2CC3E9;\n    fill: #2CC3E9; }\n\n.btn-primary2:focus, .btn-primary2.focus {\n    box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5); }\n\n.btn-primary2.disabled, .btn-primary2:disabled {\n    color: #212529;\n    background-color: #78d5ef;\n    border-color: #78d5ef; }\n\n.btn-primary2:not(:disabled):not(.disabled):active, .btn-primary2:not(:disabled):not(.disabled).active,\n  .show > .btn-primary2.dropdown-toggle {\n    color: #212529;\n    background-color: #4ac7ea;\n    border-color: #3fc3e8; }\n\n.btn-primary2:not(:disabled):not(.disabled):active:focus, .btn-primary2:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary2.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5); }\n\n.btn-primary2 path {\n  fill: white;\n}\n\n.btn-primary2:hover path{\n  fill: #2CC3E9;\n}\n\n.pl-5, .px-5 {\n  padding-left: 4rem !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwwQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDJCQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7Ozs7O0tBS0c7O0VBRUg7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBOztBQUdBOzs7O0dBSUc7O0FBR0g7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFFOztBQUMzQjtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGFBQWEsRUFBRTs7QUFDakI7SUFFRSxpREFBaUQsRUFBRTs7QUFDckQ7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFFOztBQUN6Qjs7SUFFRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFFOztBQUN2Qjs7TUFHRSxpREFBaUQsRUFBRTs7QUFJekQ7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue1xuICBjb2xvciA6IGJsYWNrO1xufVxuXG4uZ21hcF9jYW52YXMge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRJY29uIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNtYXB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4ubWFwb3V0ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIHBhZGRpbmc6IDAgMTAlOyAqL1xufVxuXG5cbm9sLCB1bCwgZGwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY29udGVjdFVsIHVsIHtcbiAgcGFkZGluZzogMDtcbn1cblxudWwsIG1lbnUsIGRpciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG5cbi5jb250ZWN0VWwgdWwgbGksIC5jb250ZWN0VWwgdWwgbGkgPiBhIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5Db25IMntcbiAgY29sb3I6ICMyY2MzZTk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gfVxuXG4uaWNvbkgze1xuICBjb2xvcjogIzJjYzNlOTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuXG4uZm9ybUJveHtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzJjYzNlOTtcbiAgbWFyZ2luOiA1MHB4O1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uZm9ybUgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyLjNyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICMyY2MzZTk7XG59XG5cbi5tZXNzYWdlQXJlYSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICM2QjZCNkI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVjdFVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaWNvbkgze1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWFwb3V0ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC8qIC5nbWFwX2NhbnZhc1tfbmdjb250ZW50LWMzXSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSAqL1xuXG4gIC5mb3JtQm94e1xuICAgIGJvcmRlcjogc29saWQgMnB4ICMyY2MzZTk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5jb250SWNvbiB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLmdtYXBfY2FudmFzIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbn1cblxuXG4vKiAuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMkNDM0U5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkNDM0U5O1xuICBjb2xvcjogI2ZmZjtcbn0gKi9cblxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYnRuLXByaW1hcnkyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNDM0U5O1xuICBib3JkZXItY29sb3I6IDFweCAjMkNDM0U5OyB9XG4gIC5idG4tcHJpbWFyeTI6aG92ZXIge1xuICAgIGNvbG9yOiAjMkNDM0U5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogIzJDQzNFOTtcbiAgICBmaWxsOiAjMkNDM0U5OyB9XG4gIC5idG4tcHJpbWFyeTI6Zm9jdXMsIC5idG4tcHJpbWFyeTIuZm9jdXMge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTIwLCAyMTMsIDIzOSwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMjAsIDIxMywgMjM5LCAwLjUpOyB9XG4gIC5idG4tcHJpbWFyeTIuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTI6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OGQ1ZWY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzhkNWVmOyB9XG4gIC5idG4tcHJpbWFyeTI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnkyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLXByaW1hcnkyLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhYzdlYTtcbiAgICBib3JkZXItY29sb3I6ICMzZmMzZTg7IH1cbiAgICAuYnRuLXByaW1hcnkyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Mjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLXByaW1hcnkyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEyMCwgMjEzLCAyMzksIDAuNSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMjAsIDIxMywgMjM5LCAwLjUpOyB9XG5cblxuXG4uYnRuLXByaW1hcnkyIHBhdGgge1xuICBmaWxsOiB3aGl0ZTtcbn1cbi5idG4tcHJpbWFyeTI6aG92ZXIgcGF0aHtcbiAgZmlsbDogIzJDQzNFOTtcbn1cblxuLnBsLTUsIC5weC01IHtcbiAgcGFkZGluZy1sZWZ0OiA0cmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/contactus/contactus.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/contactus/contactus.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url(/assets/images/bg_2.jpg);\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"row no-gutters d-flex slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\n      <div class=\"col-md-6  text-center\" data-scrollax=\" properties: { translateY: '70%' }\">\n        <p class=\"breadcrumbs\" data-scrollax=\"properties: { translateY: '30%', opacity: 1.6 }\"><span class=\"mr-2\"><a href=\"index.html\">Home</a></span> <span>Blog</span></p>\n        <h1 class=\"mb-3 bread\" data-scrollax=\"properties: { translateY: '30%', opacity: 1.6 }\">Our Blog</h1>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<!-- <section class=\"ftco-section contact-section ftco-degree-bg\">\n  <div class=\"container\">\n    <div class=\"row d-flex mb-5 contact-info\">\n      <div class=\"col-md-12 mb-4\">\n        <h2 class=\"h4\">Contact Information</h2>\n      </div>\n      <div class=\"w-100\"></div>\n      <div class=\"col-md-3\">\n        <p><span>Address:</span> 117BEo st.190 Phnom Penh</p>\n      </div>\n      <div class=\"col-md-3\">\n        <p><span>Phone:</span> <a href=\"tel://+85587686800\">+855(87) 6868 00</a></p>\n      </div>\n      <div class=\"col-md-3\">\n        <p><span>Email:</span> <a href=\"mailto:hi@cubetiqs.com\">hi@cubetiqs.com</a></p>\n      </div>\n\n    </div>\n    <div class=\"row block-9\">\n      <div class=\"col-md-6 pr-md-5\">\n        <form action=\"#\" #f=\"ngForm\" >\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" ngModel placeholder=\"Your Name\" required=\"\">\n            <small *ngIf=\"name.invalid && (name.touched || name.dirty)\" style=\"color: red;\">Invalid  Phone Number </small>\n\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Your Email\" ngModel  #email=\"ngModel\" required=\"\" [email]=\"true\" >\n            <small *ngIf=\"email.invalid && (email.touched || email.dirty)\" style=\"color: red;\">Invalid Email</small>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"tel\" class=\"form-control\" name=\"phone\" placeholder=\"Phone\" #phone=\"ngModel\" ngModel [minLength]=\"9\" [valueAsNumber] >\n            <small *ngIf=\"phone.invalid && (phone.touched || phone.dirty)\" style=\"color: red;\">Invalid  Phone Number </small>\n\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\" ngModel required=\"\" >\n          </div>\n          <div class=\"form-group\">\n            <textarea name=\"message\" id=\"\" cols=\"30\" rows=\"7\" class=\"form-control\" ngModel required=\"\" placeholder=\"Message\">\n            </textarea>\n          </div>\n\n\n          <div class=\"form-group\">\n            <input type=\"button\" (click)=\"submit(f)\" value=\"Send Message\" class=\"btn btn-primary py-3 px-5\">\n          </div>\n        </form>\n\n\n      </div>\n\n      <div class=\"col-md-6\" id=\"map\">\n\n        <div class=\"mapouter\">\n          <div class=\"gmap_canvas\">\n            <iframe width=\"500\" height=\"400\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=Cubetiq%20solution&t=&z=15&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n\n          </div><style>.mapouter{text-align:right;height:400px;width:600px;}.gmap_canvas {overflow:visible;background:none!important;height:400px;width:500px;}</style></div>\n        <a href=\"https://www.google.com/maps/place/CUBETIQ+Solution/@11.564552,104.8989938,17z/data=!3m1!4b1!4m5!3m4!1s0x3109510d1c8f7c2f:0x9a507eddce7fc28e!8m2!3d11.5645468!4d104.9011825\">See Us on Full Map</a>\n      </div>\n\n    </div>\n  </div>\n</section> -->\n\n\n\n\n<!-- test -->\n<section class=\"ftco-section contact-section ftco-degree-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"contectUl col-md-5\">\n        <!-- <div>\n          <ul>\n            <li>\n              <h3 class=\"ConH2\">Address</h3>\n              <span>Street 150, Sangkat Phar Depo 2, Khan Toul Kork, Phnom Penh, Cambodia.</span>\n            </li>\n            <li>\n              <h3 class=\"ConH2\">Email</h3>\n              <span>Street 150, Sangkat Phar Depo 2, Khan Toul Kork, Phnom Penh, Cambodia.</span>\n            </li>\n            <li>\n              <h3 class=\"ConH2\">Call Us</h3>\n              <a href=\"tel:+85587686800\"><span>(+855)-87686800 <br /> (+855)-876860086 </span></a>\n            </li>\n          </ul>\n        </div> -->\n\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n              <h3 class=\"icon-map-marker iconH3\" style=\"font-size: 2.5rem !important;\"></h3>\n          </div>\n          <div class=\"col-md-10\">\n              <h3 class=\"ConH2\">Address</h3>\n              <span>10E0, St.528, Sangkat Boengkak 1, Khan Toul Kork, Phnom Penh, Cambodia.</span>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n              <h3 class=\"icon-envelope iconH3\"></h3>\n          </div>\n          <div class=\"col-md-10\">\n              <h3 class=\"ConH2\">Email</h3>\n              <a href=\"mailto:hi@cubetiqs.com\"><span>hi@cubetiqs.com</span></a> <br>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-2 \">\n                <!-- <h3 class=\"icon-phone iconH3\"></h3> -->\n                <img src=\"assets/ICON/phone icon.svg\" alt=\"\" class=\"contIcon\">\n                <!-- <span></span> -->\n            </div>\n            <div class=\"col-md-10\">\n                <h3 class=\"ConH2\">Call Us</h3>\n                <a href=\"tel:+85587686800\"><span>(+855)-87686800</span></a> <br>\n                <a href=\"tel:+855886860086\"><span>(+855)-886860086</span></a>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"col-md-7 col-sm-12\" id=\"map\">\n        <div class=\"mapouter\">\n          <div class=\"gmap_canvas\">\n            <iframe width=\"100%\" height=\"100%\" id=\"gmap_canvas\"\n              src=\"https://maps.google.com/maps?q=Cubetiq%20solution&t=&z=15&ie=UTF8&iwloc=&output=embed\"\n              frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n\n          </div>\n          <style>\n\n          </style>\n        </div>\n        <a\n          href=\"https://www.google.com/maps/place/CUBETIQ+Solution/@11.564552,104.8989938,17z/data=!3m1!4b1!4m5!3m4!1s0x3109510d1c8f7c2f:0x9a507eddce7fc28e!8m2!3d11.5645468!4d104.9011825\">See\n          Us on Full Map</a>\n      </div>\n    </div>\n\n    <div class=\"\">\n      <div class=\"formBox shadow bg-white\">\n        <div style=\"padding-bottom: 50px;\">\n          <h1 class=\"formH1\">Let's get in touch!</h1>\n          <span style=\"\">Leave us a message, then we'll get back to you asap!</span>\n        </div>\n\n        <form action=\"#\" #f=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"form-group col-md-4\">\n              <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" ngModel placeholder=\"First Name\"\n                required=\"\">\n              <small *ngIf=\"name.invalid && (name.touched || name.dirty)\" style=\"color: red;\">Invalid First Name\n              </small>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Last Name\" #subject=\"ngModel\" ngModel required=\"\">\n              <small *ngIf=\"subject.invalid && (subject.touched || subject.dirty)\" style=\"color: red;\">Invalid Last Name\n              </small>\n            </div>\n            <div class=\"col-md-4\"></div>\n\n\n            <div class=\"form-group col-md-4\">\n              <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" ngModel #email=\"ngModel\"\n                required=\"\" [email]=\"true\">\n              <small *ngIf=\"email.invalid && (email.touched || email.dirty)\" style=\"color: red;\">Invalid Email</small>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <input type=\"tel\" class=\"form-control\" name=\"phone\" placeholder=\"Phone\" #phone=\"ngModel\" ngModel\n                [minLength]=\"9\" [valueAsNumber]>\n              <small *ngIf=\"phone.invalid && (phone.touched || phone.dirty)\" style=\"color: red;\">Invalid Phone Number</small>\n            </div>\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-12\" style=\"padding-top: 30px; padding-bottom: 30px;\">\n              <span>Preferred way to reach you? &nbsp; &nbsp; &nbsp; &nbsp;</span>\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" class=\"custom-control-input\" id=\"customRadio\" name=\"wayreach\" ngModel value=\"Phone\">\n                  <label class=\"custom-control-label\" for=\"customRadio\">Phone</label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" class=\"custom-control-input\" id=\"customRadio2\" name=\"wayreach\" ngModel value=\"Email\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">Email</label>\n                </div>\n            </div>\n          </div>\n\n          <h4 class=\"ConH2\">Message</h4>\n          <div class=\"form-group\" >\n            <textarea name=\"message\" id=\"\" cols=\"30\" rows=\"7\" class=\"form-control messageArea rounded\" ngModel required=\"\"\n              placeholder=\"Tell us about your business...\">\n              </textarea>\n          </div>\n\n          <div class=\"form-group d-flex justify-content-center\">\n            <!-- <input type=\"button\" (click)=\"submit(f)\" value=\"Send Message\"  class=\"btn btn-primary px-5\"> -->\n            <!-- <i class=\"icon icon-chevron-right\"></i> -->\n            <button type=\"button\" (click)=\"submit(f)\" class=\"btn btn-primary2 px-5 d-flex align-items-center\">Send &nbsp;\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"30px\" height=\"15px\" viewBox=\"0 0 208.12 128.551\" class=\"d-flex align-items-center\">\n                <defs>\n                  <linearGradient id=\"linear-gradient\" x1=\"0.96\" y1=\"0.5\" x2=\"0.251\" y2=\"0.5\" gradientUnits=\"objectBoundingBox\">\n                    <stop offset=\"0\" stop-color=\"#fff\"/>\n                    <stop offset=\"1\" stop-color=\"#ebebeb\"/>\n                  </linearGradient>\n                </defs>\n                <path id=\"send-icon\" class=\"btn-primary2 iconSend\" d=\"M-354,40.551l.012-.015,42.6-57.344,30.844-9.979-30.844-9.072L-354-88l208.12,61.212-208.1,67.333Z\" transform=\"translate(354 88)\" fill=\"url(#linear-gradient)\"/>\n              </svg>\n            </button>\n          </div>\n          <div style=\"text-align: center;\">\n            <img src=\"assets/ICON/design-msg-bottom.svg\" alt=\"\" width=\"70%\" >\n          </div>\n        </form>\n      </div>\n\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/contactus/contactus.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/contactus/contactus.component.ts ***!
  \********************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(http, config, helper) {
        this.http = http;
        this.config = config;
        this.helper = helper;
    }
    ContactusComponent.prototype.submit = function (f) {
        if (f.invalid) {
            return;
        }
        this.http.post(this.config.ROOT_API + "/contact", f.value)
            .subscribe(function (resp) {
            var options = {
                title: 'Success',
                text: 'Please Wait for we contact you !',
                type: 'success'
            };
            sweetalert2__WEBPACK_IMPORTED_MODULE_3__["fire"](options);
            f.resetForm({});
        });
        var a = document.createElement('a');
        // a.href = `mailto:hi@cubetiqs.com?subject=${f.value.email}&body=${encodeURI(f.controls.message.value)}`;
        //
        // a.href = `mailto:hi@cubetiqs.com?subject=${f.value.subject}&body=Hello%0D%0AWorld`;
        a.click();
    };
    ContactusComponent.prototype.ngOnInit = function () {
        this.helper.setTitle('Contact Us');
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/pages/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/pages/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-wrap .overlay{\n  /* background:white */\n}\n.ftco-section-2{\n  font-family: Karla;\n}\n.ftco-section-2 .overlay{\n  background:  #2cc3e9;\n}\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.3;\n  border-radius: .25rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n.border-2 {\n  border: solid 1.5px #2cc3e9 !important;\n}\n.hero-wrap .WholeTextBox{\n  /* padding-top: 200px; */\n}\n.one-fifth{\n  padding-left: 6%;\n}\n.alignL{\n  float: left;\n}\n.hero-wrap .button-demo a{\n   margin-bottom: 20px;\n   margin-right: 50px;\n}\n/*.hero-wrap .button-demo a:first-child{*/\n/*background: #2cc3e9;*/\n/*}*/\n.hero-wrap .button-demo{\n  text-align: center;\n}\n.hero-wrap .btn-outline-primary{\n  color:#2cc3e9\n}\n.hero-wrap .slider{\n  width: 60% !important;\n}\n.hero-wrap .container-fluid{\n  position: relative;\n\n}\n.slider-text {\n  height: 100%;\n}\n@media (max-width: 767px) {\n  .hero-wrap .slider{\n    width: 90% !important;\n  }\n\n  .hero-wrap .WholeTextBox{\n    padding-top: 0px;\n  }\n\n  .hero-wrap .container-fluid{\n    top: 0px;\n  }\n\n  .titleWeith{\n    width: 100% !important;\n  }\n\n  .one-fifth{\n    padding-left: 0%;\n  }\n  .alignL{\n    float: none;\n    width: 200px;\n  }\n\n  .hero-wrap .WholeTextBox{\n    padding-top: 40px;\n  }\n\n  .subContactHide2{\n    display: none;\n  }\n\n  .hero-wrap .button-demo a {\n    margin-bottom: 0px;\n    margin-right: 0px;\n  }\n\n  .slider-text {\n    height: auto;\n  }\n\n}\n@media (min-width: 767px) {\n  .titleWeith{\n    width: 40% !important;\n  }\n\n  .hero-wrap .slider{\n    width: 60% !important;\n  }\n}\n.hero-wrap .typewriter{\n  color :#2cc3e9;\n}\n.hero-wrap .btn-outline-primary:hover{\n  color:#fff;\n}\n.hero-wrap .button-demo .btn-request:hover{\n  color:#2cc3e9 !important;\n  background: #fff !important;\n}\n.hero-wrap .button-demo .btn-porfolio:hover{\n  background: #2cc3e9;\n  color: white;\n}\n.hero-wrap .button-demo a{\n  /* width: 177px; */\n  /* height: 50px; */\n  line-height: 33px;\n}\n.subTitle{\n  color: black;\n  font-weight: 600;\n}\n.subTitle2{\n  color: #2cc3e9;\n}\n.inSubtitle{\n  color: black;\n  font-size: 1.5rem;\n  opacity: 1;\n}\n.inSubtitle2{\n  font-size: 2rem;\n  color: #268BB9;\n  opacity: 1 !important;\n}\n.hero-wrap {\n  height: 100%;\n}\n.ftco-section.ftco-section-2 {\n  position: relative;\n  padding: 1em 0 !important;\n}\n.home-image {\n  background-image: url('bgHome.png');\n  background-color: white;\n  top: -100px;\n  /* height: 500px; */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* position: relative; */\n}\n.ftco-section .overlay2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: '';\n  opacity: .10;\n  background: #2f89fc;\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, #2f89fc), color-stop(100%, #55fbc2));\n  background: linear-gradient(135deg, #2f89fc 0%, #55fbc2 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f89fc', endColorstr='#00dc94', GradientType=1 );\n}\n.slider-text h1 {\n  font-size: 2rem !important;\n  color: #2f89fc;\n  line-height: 1.2;\n  font-weight: 400;\n}\n.h2SubContact {\n  line-height: 1.5;\n  color: #000;\n  font-weight: 700;\n}\n.btn-primary2 {\n  color: white;\n  background-color: #2CC3E9;\n  border-color: 1px #2CC3E9; }\n.btn-primary2:hover {\n    color: #2CC3E9;\n    background-color: rgba(0, 0, 0, 0);\n    border-color: #2CC3E9;\n    fill: #2CC3E9; }\n.btn-primary2:focus, .btn-primary2.focus {\n    box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5); }\n.btn-primary2.disabled, .btn-primary2:disabled {\n    color: #212529;\n    background-color: #78d5ef;\n    border-color: #78d5ef; }\n.btn-primary2:not(:disabled):not(.disabled):active, .btn-primary2:not(:disabled):not(.disabled).active,\n  .show > .btn-primary2.dropdown-toggle {\n    color: #212529;\n    background-color: #4ac7ea;\n    border-color: #3fc3e8; }\n.btn-primary2:not(:disabled):not(.disabled):active:focus, .btn-primary2:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary2.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5); }\n.btn-primary2 path {\n  fill: white;\n}\n.btn-primary2:hover path{\n  fill: #2CC3E9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFFdEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsd0RBQXdEO0VBQ3hELDhIQUE4SDtBQUNoSTtBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7R0FDRyxtQkFBbUI7R0FDbkIsa0JBQWtCO0FBQ3JCO0FBRUEseUNBQXlDO0FBQ3ZDLHVCQUF1QjtBQUN6QixJQUFJO0FBQ0o7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0FBQ0Y7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjtBQUdBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUY7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFJQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFHQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUdBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxtQ0FBaUQ7RUFDakQsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCO0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdHQUF3RztFQUN4Ryw2REFBNkQ7RUFDN0Qsb0hBQW9IO0FBQ3RIO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFFO0FBQzNCO0lBQ0UsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsYUFBYSxFQUFFO0FBQ2pCO0lBRUUsaURBQWlELEVBQUU7QUFDckQ7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFFO0FBQ3pCOztJQUVFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCLEVBQUU7QUFDdkI7O01BR0UsaURBQWlELEVBQUU7QUFHekQ7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8td3JhcCAub3ZlcmxheXtcbiAgLyogYmFja2dyb3VuZDp3aGl0ZSAqL1xufVxuLmZ0Y28tc2VjdGlvbi0ye1xuICBmb250LWZhbWlseTogS2FybGE7XG59XG4uZnRjby1zZWN0aW9uLTIgLm92ZXJsYXl7XG4gIGJhY2tncm91bmQ6ICAjMmNjM2U5O1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ib3JkZXItMiB7XG4gIGJvcmRlcjogc29saWQgMS41cHggIzJjYzNlOSAhaW1wb3J0YW50O1xufVxuXG4uaGVyby13cmFwIC5XaG9sZVRleHRCb3h7XG4gIC8qIHBhZGRpbmctdG9wOiAyMDBweDsgKi9cbn1cblxuLm9uZS1maWZ0aHtcbiAgcGFkZGluZy1sZWZ0OiA2JTtcbn1cbi5hbGlnbkx7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVyby13cmFwIC5idXR0b24tZGVtbyBhe1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLyouaGVyby13cmFwIC5idXR0b24tZGVtbyBhOmZpcnN0LWNoaWxkeyovXG4gIC8qYmFja2dyb3VuZDogIzJjYzNlOTsqL1xuLyp9Ki9cbi5oZXJvLXdyYXAgLmJ1dHRvbi1kZW1ve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZXJvLXdyYXAgLmJ0bi1vdXRsaW5lLXByaW1hcnl7XG4gIGNvbG9yOiMyY2MzZTlcbn1cblxuLmhlcm8td3JhcCAuc2xpZGVye1xuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG59XG5cbi5oZXJvLXdyYXAgLmNvbnRhaW5lci1mbHVpZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cblxuLnNsaWRlci10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlcm8td3JhcCAuc2xpZGVye1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5oZXJvLXdyYXAgLldob2xlVGV4dEJveHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG5cbiAgLmhlcm8td3JhcCAuY29udGFpbmVyLWZsdWlke1xuICAgIHRvcDogMHB4O1xuICB9XG5cbiAgLnRpdGxlV2VpdGh7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5vbmUtZmlmdGh7XG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgfVxuICAuYWxpZ25Me1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIC5oZXJvLXdyYXAgLldob2xlVGV4dEJveHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxuXG4gIC5zdWJDb250YWN0SGlkZTJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5oZXJvLXdyYXAgLmJ1dHRvbi1kZW1vIGEge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC5zbGlkZXItdGV4dCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC50aXRsZVdlaXRoe1xuICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5oZXJvLXdyYXAgLnNsaWRlcntcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5cbi5oZXJvLXdyYXAgLnR5cGV3cml0ZXJ7XG4gIGNvbG9yIDojMmNjM2U5O1xufVxuLmhlcm8td3JhcCAuYnRuLW91dGxpbmUtcHJpbWFyeTpob3ZlcntcbiAgY29sb3I6I2ZmZjtcbn1cblxuLmhlcm8td3JhcCAuYnV0dG9uLWRlbW8gLmJ0bi1yZXF1ZXN0OmhvdmVye1xuICBjb2xvcjojMmNjM2U5ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmhlcm8td3JhcCAuYnV0dG9uLWRlbW8gLmJ0bi1wb3Jmb2xpbzpob3ZlcntcbiAgYmFja2dyb3VuZDogIzJjYzNlOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlcm8td3JhcCAuYnV0dG9uLWRlbW8gYXtcbiAgLyogd2lkdGg6IDE3N3B4OyAqL1xuICAvKiBoZWlnaHQ6IDUwcHg7ICovXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xufVxuXG5cbi5zdWJUaXRsZXtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc3ViVGl0bGUye1xuICBjb2xvcjogIzJjYzNlOTtcbn1cblxuLmluU3VidGl0bGV7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG9wYWNpdHk6IDE7XG59XG4uaW5TdWJ0aXRsZTJ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICMyNjhCQjk7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuXG4uaGVyby13cmFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZnRjby1zZWN0aW9uLmZ0Y28tc2VjdGlvbi0yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxZW0gMCAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvYmdIb21lLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRvcDogLTEwMHB4O1xuICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbn1cblxuXG4uZnRjby1zZWN0aW9uIC5vdmVybGF5MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiAnJztcbiAgb3BhY2l0eTogLjEwO1xuICBiYWNrZ3JvdW5kOiAjMmY4OWZjO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICMyZjg5ZmMpLCBjb2xvci1zdG9wKDEwMCUsICM1NWZiYzIpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJmODlmYyAwJSwgIzU1ZmJjMiAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMyZjg5ZmMnLCBlbmRDb2xvcnN0cj0nIzAwZGM5NCcsIEdyYWRpZW50VHlwZT0xICk7XG59XG5cbi5zbGlkZXItdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzJmODlmYztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuXG4uaDJTdWJDb250YWN0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuLmJ0bi1wcmltYXJ5MiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQzNFOTtcbiAgYm9yZGVyLWNvbG9yOiAxcHggIzJDQzNFOTsgfVxuICAuYnRuLXByaW1hcnkyOmhvdmVyIHtcbiAgICBjb2xvcjogIzJDQzNFOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlci1jb2xvcjogIzJDQzNFOTtcbiAgICBmaWxsOiAjMkNDM0U5OyB9XG4gIC5idG4tcHJpbWFyeTI6Zm9jdXMsIC5idG4tcHJpbWFyeTIuZm9jdXMge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTIwLCAyMTMsIDIzOSwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMjAsIDIxMywgMjM5LCAwLjUpOyB9XG4gIC5idG4tcHJpbWFyeTIuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTI6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OGQ1ZWY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzhkNWVmOyB9XG4gIC5idG4tcHJpbWFyeTI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnkyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLXByaW1hcnkyLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhYzdlYTtcbiAgICBib3JkZXItY29sb3I6ICMzZmMzZTg7IH1cbiAgICAuYnRuLXByaW1hcnkyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Mjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLXByaW1hcnkyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEyMCwgMjEzLCAyMzksIDAuNSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMjAsIDIxMywgMjM5LCAwLjUpOyB9XG5cblxuLmJ0bi1wcmltYXJ5MiBwYXRoIHtcbiAgZmlsbDogd2hpdGU7XG59XG4uYnRuLXByaW1hcnkyOmhvdmVyIHBhdGh7XG4gIGZpbGw6ICMyQ0MzRTk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-wrap\" id=\"home\">\n  <div class=\"overlay home-image\"></div>\n  <div class=\"\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"slider-text d-md-flex align-items-center \" data-scrollax-parent=\"true\">\n      <div class=\"one-fifth align-self-md-center WholeTextBox titleWeith\"\n        data-scrollax=\" properties: { translateY: '50%' }\">\n        <h1 class=\"mb-4\">\n          <strong>\n            <span class=\"subTitle\">We are building <span class=\"subTitle2\">software</span> for your business</span>\n          </strong>\n        </h1>\n        <p class=\"mb-md-5 mb-sm-3\" data-scrollax=\"properties: { translateY: '50%', opacity: 1.6 }\">Design and\n          Development Partner for Startups and Enterprices.<br><br>Build the product with trending technologies!</p>\n\n        <p data-scrollax=\"properties: { translateY: '30%', opacity: 1.6 }\" class=\"button-demo alignL  \">\n          <a href=\"\"\n            routerLink=\"/requestdemo\"\n            class=\"btn btn-primary2  px-4 border-2 font-1 btn-request cubet-background shadow-sm d-flex align-items-center\"\n            style=\"color: white\"><span style=\"font-size:17px;\">Request a Demo</span> &nbsp;\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14px\" height=\"14px\" viewBox=\"0 0 105.986 105.986\">\n              <path id=\"Path_528\" data-name=\"Path 528\" d=\"M52.993,0,43.358,9.635,79.834,46.111H0V59.875H79.834L43.358,96.351l9.635,9.635,52.993-52.993Z\" fill=\"#fff\"/>\n            </svg>\n          </a>\n\n        </p>\n      </div>\n      <!-- image -->\n      <div class=\" one-half align-self-md-end align-self-sm-center slider\">\n        <div class=\"slider-carousel owl-carousel\">\n          <div class=\"item\">\n            <img src=\"assets/images/dashboard_full_1.png\" class=\"img-fluid img\" alt=\"\">\n          </div>\n          <div class=\"item\">\n            <img src=\"assets/images/dashboard_full_2.png\" class=\"img-fluid img\" alt=\"\">\n          </div>\n          <div class=\"item\">\n            <img src=\"assets/images/dashboard_full_3.png\" class=\"img-fluid img\" alt=\"\">\n          </div>\n        </div>\n      </div>\n      <!-- end image -->\n    </div>\n  </div>\n</div>\n\n<section class=\"ftco-section ftco-section-2\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <h3 class=\"heading-white\" >We provide high quality services!</h3>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-service></app-service>\n\n<app-reason></app-reason>\n\n<!-- <app-solution></app-solution> -->\n\n<app-testimonial></app-testimonial>\n\n<!-- <app-client></app-client> -->\n\n<!-- interest -->\n<!-- <div class=\"interest row\">\n  <div class=\"col-md-6\">\n    <h2>Interested in working with us?</h2>\n    <p>Hit the button below or give us a call!</p>\n    <p class=\"button-demo alignL\">\n      <a href=\"\" (click)=\"requestdemo()\"\n        class=\"btn btn-primary btn-outline-primary px-4 border-2 font-1 btn-request cubet-background shadow-out \"\n        style=\"color: white\"><span>Request a Demo</span> </a>\n    </p>\n  </div>\n  <div class=\"col-md-6\">\n    <h1>Call us now: (+855) 87686800</h1>\n  </div>\n</div> -->\n\n<section class=\"ftco-section ftco-section-2 subContactHide2\">\n  <div class=\"overlay2\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h2 class=\"h2SubContact\">Interested in working with us?</h2>\n        <p style=\"color: #6B6B6B;\">Hit the button below or give us a call!</p>\n\n        <p class=\"button-demo alignL\">\n          <a href=\"\" routerLink=\"/contactus\"\n            class=\"btn btn-primary2 d-flex align-items-center\"\n            style=\"font-size: 17px;\"><span>Contact Us</span> </a>\n        </p>\n      </div>\n      <div class=\"col-md-6 align-items-center\" style=\"padding: 4% 0;\">\n        <a href=\"tel:+85587686800\"><span class=\"inSubtitle\" style=\"font-weight: 600;\" >Call us now: <span class=\"inSubtitle2\">(+855) 87686800</span></span></a>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- <app-project></app-project> -->\n\n<!-- loader -->\n<div id=\"ftco-loader\" class=\"show fullscreen\"><svg class=\"circular\" width=\"48px\" height=\"48px\">\n    <circle class=\"path-bg\" cx=\"24\" cy=\"24\" r=\"22\" fill=\"none\" stroke-width=\"4\" stroke=\"#eeeeee\" />\n    <circle class=\"path\" cx=\"24\" cy=\"24\" r=\"22\" fill=\"none\" stroke-width=\"4\" stroke-miterlimit=\"10\" stroke=\"#F96D00\" />\n  </svg></div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(helper, router) {
        this.helper = helper;
        this.router = router;
        this.title = 'Home';
    }
    HomeComponent.prototype.requestdemo = function () {
        this.router.navigate(['/contactus', {}]);
        // this.router.navigateByUrl('/contactus')
        // new RouterLink().replaceUrl('/contactus')
    };
    HomeComponent.prototype.getquote = function () {
        var options = {
            text: "Please Contact us to get information",
            type: "info",
            title: "Get Quote"
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_3__["fire"](options);
    };
    // ngOnInit() {
    //   new Typewriter('#typewriter', {
    //     strings: ['CUBETIQ. ', 'The best innovation for your business.'],
    //     autoStart: true,
    //     loop: true,
    //   }).pauseFor(1000);
    // }
    HomeComponent.prototype.ngOnInit = function () {
        this.helper.setTitle('Home');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        if ($('#ftco-loader').length > 0) {
            $('#ftco-loader').removeClass('show');
        }
        $('.slider-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            center: true,
            loop: true,
            items: 1,
            margin: 0,
            stagePadding: 0,
            nav: false,
            dots: false,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        setTimeout(function () {
            var hash = location.hash;
            switch (hash) {
                case "#service":
                    $('html, body').animate({
                        'scrollTop': $('#service').offset().top - document.getElementById('ftco-navbar').offsetHeight - 20
                    }, 600);
                    break;
                case "#why_us":
                    $('html, body').animate({
                        'scrollTop': $('#why_us').offset().top - document.getElementById('ftco-navbar').offsetHeight - 20
                    }, 600);
                    break;
            }
        }, 1000);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found404/not-found404.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/not-found404/not-found404.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZDQwNC9ub3QtZm91bmQ0MDQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/not-found404/not-found404.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/not-found404/not-found404.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"w-100 text-center\">\n  Page Not Found\n</h1>\n"

/***/ }),

/***/ "./src/app/pages/not-found404/not-found404.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/not-found404/not-found404.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return NotFound404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFound404Component = /** @class */ (function () {
    function NotFound404Component() {
    }
    NotFound404Component.prototype.ngOnInit = function () {
    };
    NotFound404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found404',
            template: __webpack_require__(/*! ./not-found404.component.html */ "./src/app/pages/not-found404/not-found404.component.html"),
            styles: [__webpack_require__(/*! ./not-found404.component.css */ "./src/app/pages/not-found404/not-found404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFound404Component);
    return NotFound404Component;
}());



/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pricing-container .card-body{\n  background: #FCFCFC;\n  color: #000;\n  height: 200px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.pricing-container .card-header{\n  color: #FCFCFC;\n  font-size: 2rem;\n  /*text-transform: uppercase;*/\n}\n\n.pricing-container .card-footer{\n  background: #FCFCFC;\n}\n\n.pricing-container .card{\n  padding: 0px;\n  /*border-radius: 30px;*/\n  overflow: hidden;\n  font-family: Karla !important;\n}\n\n.pricing-container{\n  justify-content: space-evenly;\n}\n\n.pricing{\n  background: #F6FDFF;\n}\n\n.pricing-container .card-footer button:hover{\n color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7O0VBRWIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljaW5nLWNvbnRhaW5lciAuY2FyZC1ib2R5e1xuICBiYWNrZ3JvdW5kOiAjRkNGQ0ZDO1xuICBjb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAyMDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByaWNpbmctY29udGFpbmVyIC5jYXJkLWhlYWRlcntcbiAgY29sb3I6ICNGQ0ZDRkM7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgLyp0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyovXG59XG5cbi5wcmljaW5nLWNvbnRhaW5lciAuY2FyZC1mb290ZXJ7XG4gIGJhY2tncm91bmQ6ICNGQ0ZDRkM7XG59XG5cbi5wcmljaW5nLWNvbnRhaW5lciAuY2FyZHtcbiAgcGFkZGluZzogMHB4O1xuICAvKmJvcmRlci1yYWRpdXM6IDMwcHg7Ki9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IEthcmxhICFpbXBvcnRhbnQ7XG59XG5cbi5wcmljaW5nLWNvbnRhaW5lcntcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5wcmljaW5ne1xuICBiYWNrZ3JvdW5kOiAjRjZGREZGO1xufVxuLnByaWNpbmctY29udGFpbmVyIC5jYXJkLWZvb3RlciBidXR0b246aG92ZXJ7XG4gY29sb3I6ICNmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ftco-section ftco-pricing pricing\">\n\n  <div class=\"container\">\n\n    <div class=\"row justify-content-center m-auto\">\n      <div class=\"text-center heading-section \">\n        <h1 class=\"mb-2 font-weight-bold\"> Pricing Plan </h1>\n        <!--<span class=\"subheading\">Search Engine &amp; Social Media Optimization Experts</span>-->\n      </div>\n      <div class=\"col-md-7 m-4 text-center heading-section \">\n        <h5>Our Services adapted to your needs.</h5>\n      </div>\n\n\n    </div>\n\n\n    <div class=\"row pricing-container\">\n\n      <div *ngFor=\"let pricing of pricings\" (click)=\"cl(pricing.title)\" class=\"card mb-3 text-center col-lg-3 col-md-5 shadow-out\" >\n        <div class=\"card-header cubet-background \">{{pricing.title}}</div>\n        <div class=\"card-body \"  [innerHTML]=pricing.desc>\n          <!--<h5 class=\"card-title\">Secondary card title</h5>-->\n          <!--<p class=\"card-text\"></p>-->\n        </div>\n\n        <div class=\"card-footer border-0\">\n          <button class=\"btn btn-primary cubet-background px-5 text-center\" (click)=\"helper.link(pricing.link)\">Learn More</button>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricingComponent = /** @class */ (function () {
    function PricingComponent(priceservice, helper) {
        this.priceservice = priceservice;
        this.helper = helper;
        this.pricings = [];
        this.test = [];
        this.helper.setTitle("Pricing");
    }
    PricingComponent.prototype.ngOnInit = function () {
        this.pricings = this.priceservice.getPricing();
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pages/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pages/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/project/project.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/project/project.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hrProject {\n  height: 3px;\n  background-color: #2cc3e9;\n  text-align: center;\n  margin: 0 auto;\n  width: 10%;\n}\n\n.layoutProject{\n  padding: 10px;\n\n}\n\n.boxProject {\n  /* border: solid 2px black; */\n  background-color: #2cc3e9;\n  height: 100px;\n  margin: 20px;\n}\n\n@media (max-width: 767px) {\n  .hrProject{\n    height: 3px;\n    background-color: #2cc3e9;\n    text-align: center;\n    margin: 0 auto;\n    width: 70px;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFHQTtFQUNFO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7RUFDYjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhyUHJvamVjdCB7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNjM2U5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAlO1xufVxuXG4ubGF5b3V0UHJvamVjdHtcbiAgcGFkZGluZzogMTBweDtcblxufVxuXG4uYm94UHJvamVjdCB7XG4gIC8qIGJvcmRlcjogc29saWQgMnB4IGJsYWNrOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNjM2U5O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDIwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5oclByb2plY3R7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjYzNlOTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/project/project.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/project/project.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ftco-section ftco-services\">\n\n\n  <div class=\"container\" id=\"project\" #project>\n    <div class=\"row justify-content-center m-auto\">\n      <div class=\" text-center heading-section\" style=\"text-align: center !important;\">\n        <h1 class=\"mb-2 font-weight-bold\">Project</h1>\n        <hr class=\"hrProject\">\n        <!--<span class=\"subheading\">Search Engine &amp; Social Media Optimization Experts</span>-->\n      </div>\n    </div>\n    <div class=\"row layoutProject\">\n      <div class=\"col-md-4 col-sm-12\">\n        <div class=\"boxProject\">\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <div class=\"boxProject\">\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <div class=\"boxProject\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row layoutProject\">\n      <div class=\"col-md-4 col-sm-12\">\n        <div class=\"boxProject\">\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <div class=\"boxProject\">\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <div class=\"boxProject\">\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/pages/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/pages/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/reason/reason.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/reason/reason.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ftco-reason img{\n  width: 100%;\n  user-select: none;\n  -webkit-user-drag: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.reason-wrap .list-reason .icon{\n  background: #2cc3e9;\n}\n.ftco-reason  img{\n  width:auto;\n  height: 70px;\n}\n.ftco-reason .heading{\n  /*text-transform: uppercase;*/\n  font-weight: bold;\n  display:flex;\n  flex-direction:column;\n  justify-content: center;\n  /* height:50px; */\n  font-size: 15pt;\n  font-family: inherit;\n\n}\n.ftco-reason .description{\n  font-family: inherit;\n  font-size: 10pt;\n  /* font-style: italic; */\n  /*max-height:80px;*/\n  /*overflow: hidden;*/\n}\n.ftco-section {\n  padding-top:111px !important;\n}\n.reason-item-container{\n  flex-direction: column;\n  padding: 30px;\n}\n.reason{\n  display: flex;\n  flex-direction: row;\n  /*padding-left: 20px;*/\n  align-items:center ;\n}\n.reason-item-container .readmore{\n  position: absolute;\n  bottom: 0px;\n  background: #fffcfc63;\n  padding-right: 30px;\n  width: 100%;\n  text-align: center;\n  /*box-shadow: 0px 0px 100px 20px white;*/\n}\n.reason-item-container .readmore h3{\n\n  opacity: 1;\n  background: white;\n  float: right;\n  /*line-height: 15px;*/\n  /*max-height: 15px;*/\n}\n.reason-item-container .readmore h3 span{\n  padding-right: 30px;\n}\n.reason-item-container .readmore a{\n  float:right;\n  width: 100%;\n  /*text-decoration:underline;*/\n  font-family:Helvetica !important\n}\n@media (max-width: 767px) {\n  .icon{\n    padding-top: 15px !important;\n  }\n}\n@media (min-width: 767px) {\n  .boxReason {\n    width: 85%;\n  }\n  .boxReasonRigh{\n    width: 85%;\n    margin-left: 75px;\n  }\n}\n.shadow-out[_ngcontent-c5] {\n  -webkit-box-shadow: 0px 0px 1px 0px grey !important;\n}\n.mt-3, .my-3 {\n  /* height: 123px; */\n}\n.pb-5, .py-5 {\n  padding-bottom: 1.5rem !important;\n}\n.home-image2 {\n  background-image: url('bgHome2.png');\n  background-color: white;\n  /* height: 500px; */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* position: relative; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVhc29uL3JlYXNvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9COztBQUV0QjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQztBQUNBOztFQUVFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0I7QUFDRjtBQUlBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjtBQUdBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlDQUFpQztBQUNuQztBQUdBO0VBQ0Usb0NBQWtEO0VBQ2xELHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVhc29uL3JlYXNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ0Y28tcmVhc29uIGltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5yZWFzb24td3JhcCAubGlzdC1yZWFzb24gLmljb257XG4gIGJhY2tncm91bmQ6ICMyY2MzZTk7XG59XG4uZnRjby1yZWFzb24gIGltZ3tcbiAgd2lkdGg6YXV0bztcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uZnRjby1yZWFzb24gLmhlYWRpbmd7XG4gIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBoZWlnaHQ6NTBweDsgKi9cbiAgZm9udC1zaXplOiAxNXB0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcblxufVxuXG4uZnRjby1yZWFzb24gLmRlc2NyaXB0aW9ue1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMHB0O1xuICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXG4gIC8qbWF4LWhlaWdodDo4MHB4OyovXG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xufVxuXG4uZnRjby1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6MTExcHggIWltcG9ydGFudDtcbn1cblxuLnJlYXNvbi1pdGVtLWNvbnRhaW5lcntcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnJlYXNvbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLypwYWRkaW5nLWxlZnQ6IDIwcHg7Ki9cbiAgYWxpZ24taXRlbXM6Y2VudGVyIDtcbn1cblxuLnJlYXNvbi1pdGVtLWNvbnRhaW5lciAucmVhZG1vcmV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZjZmM2MztcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IDIwcHggd2hpdGU7Ki9cbn1cbi5yZWFzb24taXRlbS1jb250YWluZXIgLnJlYWRtb3JlIGgze1xuXG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qbGluZS1oZWlnaHQ6IDE1cHg7Ki9cbiAgLyptYXgtaGVpZ2h0OiAxNXB4OyovXG59XG5cbi5yZWFzb24taXRlbS1jb250YWluZXIgLnJlYWRtb3JlIGgzIHNwYW57XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4ucmVhc29uLWl0ZW0tY29udGFpbmVyIC5yZWFkbW9yZSBhe1xuICBmbG9hdDpyaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsqL1xuICBmb250LWZhbWlseTpIZWx2ZXRpY2EgIWltcG9ydGFudFxufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pY29ue1xuICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLmJveFJlYXNvbiB7XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxuICAuYm94UmVhc29uUmlnaHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICB9XG59XG5cbi5zaGFkb3ctb3V0W19uZ2NvbnRlbnQtYzVdIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggZ3JleSAhaW1wb3J0YW50O1xufVxuXG4ubXQtMywgLm15LTMge1xuICAvKiBoZWlnaHQ6IDEyM3B4OyAqL1xufVxuXG4ucGItNSwgLnB5LTUge1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cblxuLmhvbWUtaW1hZ2UyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9iZ0hvbWUyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIGhlaWdodDogNTAwcHg7ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/reason/reason.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/reason/reason.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ftco-section ftco-reason home-image2\" *ngIf=\"reasons\">\n\n\n  <div class=\"container\" id=\"why_us\" #why_us>\n    <div class=\"row justify-content-center pb-5\">\n      <div class=\" d-flex align-items-center  heading-section row\">\n        <!-- <h1 class=\"mb-2 font-weight-bold\">Why Choose Us  </h1> -->\n        <div style=\" padding-right: 20px; padding: 20px; \">\n          <hr style=\"width: 60px; text-align-last: center; height: 1px; background-color: #2cc3e9; \">\n        </div>\n        <div>\n          <h1 class=\"mb-2 font-weight-bold Reason\">Why Choose Us </h1>\n        </div>\n        <!--<span class=\"subheading\">Search Engine &amp; Social Media Optimization Experts</span>-->\n      </div>\n    </div>\n\n    <!-- <div class=\"row justify-content-center\">\n      <div class=\"col-sm-6 col-md-6 d-flex align-self-stretch reason-item-container\" (click)=\"helper.link(serv.link)\" *ngFor=\"let serv of reasons\" >\n        <div class=\"boxReason\">\n            <div class=\"media  reason row  text-left shadow-out h-100\">\n              <div class=\"col-sm-6 col-md-4\" >\n                <div class=\"icon text-center\">\n                  <img [src]=\"this.config.ROOT+serv.icon\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-8 media-body p-2 mt-3 \">\n                <h3 class=\"heading\">{{serv.heading}}</h3>\n                <p class=\"text-left description\">{{serv.summary}} ...</p>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div> -->\n\n    <!-- item -->\n    <div class=\"\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-sm-5 col-md-5 d-flex align-self-stretch reason-item-container\" (click)=\"helper.link(serv.link)\">\n          <div class=\"boxReason\">\n            <div class=\"media  reason row  text-left shadow bg-white rounded h-100\">\n              <div class=\"col-sm-6 col-md-4\">\n                <div class=\"icon text-center\">\n                  <img src=\"/assets/ICON/like.png\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-8 media-body mt-3 \">\n                <h3 class=\"heading\">Flexible Usability</h3>\n                <p class=\"text-left description\">All our products have high usability allowing users to easily operate\n                  the apps.</p>\n                <!-- <br> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-sm-5 col-md-5 d-flex align-self-stretch reason-item-container\" (click)=\"helper.link(serv.link)\">\n          <div class=\"boxReasonRigh\">\n            <div class=\"media  reason row  text-left shadow bg-white rounded h-100\">\n              <div class=\"col-sm-6 col-md-4\">\n                <div class=\"icon text-center\">\n                  <img src=\"/assets/ICON/hardware.png\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-8 media-body mt-3 \">\n                <h3 class=\"heading\">High Quality Hardware</h3>\n                <p class=\"text-left description\">We use top-notch hardware to develop the most efficient apps for our\n                  customers.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-sm-5 col-md-5 d-flex align-self-stretch reason-item-container\" (click)=\"helper.link(serv.link)\">\n          <div class=\"boxReasonRigh\">\n            <div class=\"media  reason row  text-left shadow bg-white rounded h-100\">\n              <div class=\"col-sm-6 col-md-4\">\n                <div class=\"icon text-center\">\n                  <img src=\"/assets/ICON/speed.png\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-8 media-body mt-3 \">\n                <h3 class=\"heading\">Agile and Fast</h3>\n                <p class=\"text-left description\">This type of approach to our work elps our specialists to quickly\n                  develop better apps.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-sm-5 col-md-5 d-flex align-self-stretch reason-item-container\" (click)=\"helper.link(serv.link)\">\n          <div class=\"boxReason\">\n            <div class=\"media  reason row  text-left shadow bg-white rounded h-100\">\n              <div class=\"col-sm-6 col-md-4\">\n                <div class=\"icon text-center\">\n                  <img src=\"/assets/ICON/Support.png\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-8 media-body mt-3 \">\n                <h3 class=\"heading\">Dedicated Support</h3>\n                <p class=\"text-left description\">You can rely on our tech support that will gladly solve any app issue\n                  you may have.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-sm-5 col-md-5 d-flex align-self-stretch reason-item-container\" (click)=\"helper.link(serv.link)\">\n          <div class=\"boxReason\">\n            <div class=\"media  reason row  text-left shadow bg-white rounded h-100\">\n              <div class=\"col-sm-6 col-md-4\">\n                <div class=\"icon text-center\">\n                  <img src=\"/assets/ICON/security.png\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-8 media-body mt-3 \">\n                <h3 class=\"heading\">High Security</h3>\n                <p class=\"text-left description\">The security of your money and personal data is our utmost priority.\n                </p>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\" id=\"why_us\" #why_us></div>\n        <div class=\"col-sm-5 col-md-5 d-flex align-self-stretch reason-item-container\" (click)=\"helper.link(serv.link)\">\n          <div class=\"boxReasonRigh\">\n            <div class=\"media  reason row  text-left shadow bg-white rounded h-100\">\n              <div class=\"col-sm-6 col-md-4\">\n                <div class=\"icon text-center\">\n                  <img src=\"/assets/ICON/store.png\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-8 media-body mt-3 \">\n                <h3 class=\"heading\">Scalable</h3>\n                <p class=\"text-left description\">Meeting the demands of a growing business, We can quickly deployed in\n                  one store as easily as it can be in thousands.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/reason/reason.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/reason/reason.component.ts ***!
  \**************************************************/
/*! exports provided: ReasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonComponent", function() { return ReasonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReasonComponent = /** @class */ (function () {
    function ReasonComponent(reasonService, helper, config) {
        this.reasonService = reasonService;
        this.helper = helper;
        this.config = config;
        this.reasons = [];
        this.helper.setTitle('Why Choose UIs');
    }
    ReasonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reasonService.getReason()
            .subscribe(function (resp) {
            _this.reasons = Object.values(resp);
        });
    };
    ReasonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reason',
            template: __webpack_require__(/*! ./reason.component.html */ "./src/app/pages/reason/reason.component.html"),
            styles: [__webpack_require__(/*! ./reason.component.css */ "./src/app/pages/reason/reason.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ReasonComponent);
    return ReasonComponent;
}());



/***/ }),

/***/ "./src/app/pages/requestdemo/requestdemo.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/requestdemo/requestdemo.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1Requ {\n  font-weight: 600;\n  margin-top: 50px;\n}\n\n.messageArea {\n  border: solid 1px #6B6B6B;\n  padding: 10px;\n\n  width: 100%;\n  /* height: 42px !important; */\n  background: #fff !important;\n  color: #000 !important;\n  font-size: 16px;\n  border-radius: 0px;\n  box-shadow: none !important;\n  border: 1px solid #268BB9;\n}\n\n.form-control {\n  height: 42px !important;\n  background: #fff !important;\n  color: #000 !important;\n  font-size: 16px;\n  border-radius: 0px;\n  padding-right: 0;\n  padding-left: 8px;\n  box-shadow: none !important;\n  border: 1px solid #268BB9;\n}\n\nlabel {\n  display: inline-block;\n  font-size: 13px;\n  margin-bottom: 0;\n  opacity: .8;\n}\n\n.btn-primary2 {\n  color: white;\n  background-color: #2CC3E9;\n  border-color: 1px #2CC3E9; }\n\n.btn-primary2:hover {\n    color: #2CC3E9;\n    background-color: white;\n    border-color: #2CC3E9;\n    fill: #2CC3E9; }\n\n.btn-primary2:focus, .btn-primary2.focus {\n    box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5); }\n\n.btn-primary2.disabled, .btn-primary2:disabled {\n    color: #212529;\n    background-color: #78d5ef;\n    border-color: #78d5ef; }\n\n.btn-primary2:not(:disabled):not(.disabled):active, .btn-primary2:not(:disabled):not(.disabled).active,\n  .show > .btn-primary2.dropdown-toggle {\n    color: #212529;\n    background-color: #4ac7ea;\n    border-color: #3fc3e8; }\n\n.btn-primary2:not(:disabled):not(.disabled):active:focus, .btn-primary2:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary2.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdGRlbW8vcmVxdWVzdGRlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTs7RUFFYixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFFOztBQUMzQjtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGFBQWEsRUFBRTs7QUFDakI7SUFFRSxpREFBaUQsRUFBRTs7QUFDckQ7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFFOztBQUN6Qjs7SUFFRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFFOztBQUN2Qjs7TUFHRSxpREFBaUQsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcXVlc3RkZW1vL3JlcXVlc3RkZW1vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDFSZXF1IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm1lc3NhZ2VBcmVhIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzZCNkI2QjtcbiAgcGFkZGluZzogMTBweDtcblxuICB3aWR0aDogMTAwJTtcbiAgLyogaGVpZ2h0OiA0MnB4ICFpbXBvcnRhbnQ7ICovXG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI2OEJCOTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNDJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjY4QkI5O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBvcGFjaXR5OiAuODtcbn1cblxuXG4uYnRuLXByaW1hcnkyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNDM0U5O1xuICBib3JkZXItY29sb3I6IDFweCAjMkNDM0U5OyB9XG4gIC5idG4tcHJpbWFyeTI6aG92ZXIge1xuICAgIGNvbG9yOiAjMkNDM0U5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogIzJDQzNFOTtcbiAgICBmaWxsOiAjMkNDM0U5OyB9XG4gIC5idG4tcHJpbWFyeTI6Zm9jdXMsIC5idG4tcHJpbWFyeTIuZm9jdXMge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTIwLCAyMTMsIDIzOSwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMjAsIDIxMywgMjM5LCAwLjUpOyB9XG4gIC5idG4tcHJpbWFyeTIuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTI6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OGQ1ZWY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzhkNWVmOyB9XG4gIC5idG4tcHJpbWFyeTI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnkyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLXByaW1hcnkyLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhYzdlYTtcbiAgICBib3JkZXItY29sb3I6ICMzZmMzZTg7IH1cbiAgICAuYnRuLXByaW1hcnkyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Mjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLXByaW1hcnkyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEyMCwgMjEzLCAyMzksIDAuNSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMjAsIDIxMywgMjM5LCAwLjUpOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/requestdemo/requestdemo.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/requestdemo/requestdemo.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\"></div>\n    <div class=\"col-md-6 text-center\">\n      <h1 class=\"h1Requ\">Request Demo</h1>\n      <span>Discover how CUBETIQ can help you amplify, manage and grow your business efficiently.</span>\n      <br><br><br>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img src=\"/assets/images/undraw_schedule_pnbk.svg\" width=\"100%\" alt=\"\">\n    </div>\n    <div class=\"col-md-6\">\n      <form class=\"row\" action=\"#\" #f=\"ngForm\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"firstname\">First Name</label>\n          <input type=\"text\" class=\"form-control rounded\" id=\"firstname\" name=\"firstname\" #firstname=\"ngModel\" ngModel>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"lastname\">Last Name</label>\n          <input type=\"text\" class=\"form-control rounded\" id=\"lastname\" name=\"lastname\" #lastname=\"ngModel\" ngModel>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"companyname\">Company Name</label>\n          <input type=\"text\" class=\"form-control rounded\" id=\"companyname\" name=\"companyname\" #companyname=\"ngModel\" ngModel>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"email\">Business Email</label>\n          <input type=\"email\" class=\"form-control rounded\" id=\"email\" name=\"email\" #email=\"ngModel\" ngModel>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"phone\">Phone Number</label>\n          <input type=\"text\" class=\"form-control rounded\" id=\"text\" name=\"phone\" #phone=\"ngModel\" ngModel>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"country\">Country</label>\n          <!-- <input type=\"text\" class=\"form-control rounded\" id=\"\" name=\"country\" #country=\"ngModel\" ngModel> -->\n          <select class=\"form-control rounded country\" id=\"country\" name=\"country\" #country=\"ngModel\" ngModel>\n            <option data-countryCode=\"KH\" value=\"855\" selected>Cambodia (+855)</option>\n            <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option>\n            <option data-countryCode=\"US\" value=\"1\">USA (+1)</option>\n            <optgroup label=\"Other countries\">\n              <option data-countryCode=\"DZ\" value=\"213\">Algeria (+213)</option>\n              <option data-countryCode=\"AD\" value=\"376\">Andorra (+376)</option>\n              <option data-countryCode=\"AO\" value=\"244\">Angola (+244)</option>\n              <option data-countryCode=\"AI\" value=\"1264\">Anguilla (+1264)</option>\n              <option data-countryCode=\"AG\" value=\"1268\">Antigua &amp; Barbuda (+1268)</option>\n              <option data-countryCode=\"AR\" value=\"54\">Argentina (+54)</option>\n              <option data-countryCode=\"AM\" value=\"374\">Armenia (+374)</option>\n              <option data-countryCode=\"AW\" value=\"297\">Aruba (+297)</option>\n              <option data-countryCode=\"AU\" value=\"61\">Australia (+61)</option>\n              <option data-countryCode=\"AT\" value=\"43\">Austria (+43)</option>\n              <option data-countryCode=\"AZ\" value=\"994\">Azerbaijan (+994)</option>\n              <option data-countryCode=\"BS\" value=\"1242\">Bahamas (+1242)</option>\n              <option data-countryCode=\"BH\" value=\"973\">Bahrain (+973)</option>\n              <option data-countryCode=\"BD\" value=\"880\">Bangladesh (+880)</option>\n              <option data-countryCode=\"BB\" value=\"1246\">Barbados (+1246)</option>\n              <option data-countryCode=\"BY\" value=\"375\">Belarus (+375)</option>\n              <option data-countryCode=\"BE\" value=\"32\">Belgium (+32)</option>\n              <option data-countryCode=\"BZ\" value=\"501\">Belize (+501)</option>\n              <option data-countryCode=\"BJ\" value=\"229\">Benin (+229)</option>\n              <option data-countryCode=\"BM\" value=\"1441\">Bermuda (+1441)</option>\n              <option data-countryCode=\"BT\" value=\"975\">Bhutan (+975)</option>\n              <option data-countryCode=\"BO\" value=\"591\">Bolivia (+591)</option>\n              <option data-countryCode=\"BA\" value=\"387\">Bosnia Herzegovina (+387)</option>\n              <option data-countryCode=\"BW\" value=\"267\">Botswana (+267)</option>\n              <option data-countryCode=\"BR\" value=\"55\">Brazil (+55)</option>\n              <option data-countryCode=\"BN\" value=\"673\">Brunei (+673)</option>\n              <option data-countryCode=\"BG\" value=\"359\">Bulgaria (+359)</option>\n              <option data-countryCode=\"BF\" value=\"226\">Burkina Faso (+226)</option>\n              <option data-countryCode=\"BI\" value=\"257\">Burundi (+257)</option>\n              <option data-countryCode=\"KH\" value=\"855\">Cambodia (+855)</option>\n              <option data-countryCode=\"CM\" value=\"237\">Cameroon (+237)</option>\n              <option data-countryCode=\"CA\" value=\"1\">Canada (+1)</option>\n              <option data-countryCode=\"CV\" value=\"238\">Cape Verde Islands (+238)</option>\n              <option data-countryCode=\"KY\" value=\"1345\">Cayman Islands (+1345)</option>\n              <option data-countryCode=\"CF\" value=\"236\">Central African Republic (+236)</option>\n              <option data-countryCode=\"CL\" value=\"56\">Chile (+56)</option>\n              <option data-countryCode=\"CN\" value=\"86\">China (+86)</option>\n              <option data-countryCode=\"CO\" value=\"57\">Colombia (+57)</option>\n              <option data-countryCode=\"KM\" value=\"269\">Comoros (+269)</option>\n              <option data-countryCode=\"CG\" value=\"242\">Congo (+242)</option>\n              <option data-countryCode=\"CK\" value=\"682\">Cook Islands (+682)</option>\n              <option data-countryCode=\"CR\" value=\"506\">Costa Rica (+506)</option>\n              <option data-countryCode=\"HR\" value=\"385\">Croatia (+385)</option>\n              <option data-countryCode=\"CU\" value=\"53\">Cuba (+53)</option>\n              <option data-countryCode=\"CY\" value=\"90392\">Cyprus North (+90392)</option>\n              <option data-countryCode=\"CY\" value=\"357\">Cyprus South (+357)</option>\n              <option data-countryCode=\"CZ\" value=\"42\">Czech Republic (+42)</option>\n              <option data-countryCode=\"DK\" value=\"45\">Denmark (+45)</option>\n              <option data-countryCode=\"DJ\" value=\"253\">Djibouti (+253)</option>\n              <option data-countryCode=\"DM\" value=\"1809\">Dominica (+1809)</option>\n              <option data-countryCode=\"DO\" value=\"1809\">Dominican Republic (+1809)</option>\n              <option data-countryCode=\"EC\" value=\"593\">Ecuador (+593)</option>\n              <option data-countryCode=\"EG\" value=\"20\">Egypt (+20)</option>\n              <option data-countryCode=\"SV\" value=\"503\">El Salvador (+503)</option>\n              <option data-countryCode=\"GQ\" value=\"240\">Equatorial Guinea (+240)</option>\n              <option data-countryCode=\"ER\" value=\"291\">Eritrea (+291)</option>\n              <option data-countryCode=\"EE\" value=\"372\">Estonia (+372)</option>\n              <option data-countryCode=\"ET\" value=\"251\">Ethiopia (+251)</option>\n              <option data-countryCode=\"FK\" value=\"500\">Falkland Islands (+500)</option>\n              <option data-countryCode=\"FO\" value=\"298\">Faroe Islands (+298)</option>\n              <option data-countryCode=\"FJ\" value=\"679\">Fiji (+679)</option>\n              <option data-countryCode=\"FI\" value=\"358\">Finland (+358)</option>\n              <option data-countryCode=\"FR\" value=\"33\">France (+33)</option>\n              <option data-countryCode=\"GF\" value=\"594\">French Guiana (+594)</option>\n              <option data-countryCode=\"PF\" value=\"689\">French Polynesia (+689)</option>\n              <option data-countryCode=\"GA\" value=\"241\">Gabon (+241)</option>\n              <option data-countryCode=\"GM\" value=\"220\">Gambia (+220)</option>\n              <option data-countryCode=\"GE\" value=\"7880\">Georgia (+7880)</option>\n              <option data-countryCode=\"DE\" value=\"49\">Germany (+49)</option>\n              <option data-countryCode=\"GH\" value=\"233\">Ghana (+233)</option>\n              <option data-countryCode=\"GI\" value=\"350\">Gibraltar (+350)</option>\n              <option data-countryCode=\"GR\" value=\"30\">Greece (+30)</option>\n              <option data-countryCode=\"GL\" value=\"299\">Greenland (+299)</option>\n              <option data-countryCode=\"GD\" value=\"1473\">Grenada (+1473)</option>\n              <option data-countryCode=\"GP\" value=\"590\">Guadeloupe (+590)</option>\n              <option data-countryCode=\"GU\" value=\"671\">Guam (+671)</option>\n              <option data-countryCode=\"GT\" value=\"502\">Guatemala (+502)</option>\n              <option data-countryCode=\"GN\" value=\"224\">Guinea (+224)</option>\n              <option data-countryCode=\"GW\" value=\"245\">Guinea - Bissau (+245)</option>\n              <option data-countryCode=\"GY\" value=\"592\">Guyana (+592)</option>\n              <option data-countryCode=\"HT\" value=\"509\">Haiti (+509)</option>\n              <option data-countryCode=\"HN\" value=\"504\">Honduras (+504)</option>\n              <option data-countryCode=\"HK\" value=\"852\">Hong Kong (+852)</option>\n              <option data-countryCode=\"HU\" value=\"36\">Hungary (+36)</option>\n              <option data-countryCode=\"IS\" value=\"354\">Iceland (+354)</option>\n              <option data-countryCode=\"IN\" value=\"91\">India (+91)</option>\n              <option data-countryCode=\"ID\" value=\"62\">Indonesia (+62)</option>\n              <option data-countryCode=\"IR\" value=\"98\">Iran (+98)</option>\n              <option data-countryCode=\"IQ\" value=\"964\">Iraq (+964)</option>\n              <option data-countryCode=\"IE\" value=\"353\">Ireland (+353)</option>\n              <option data-countryCode=\"IL\" value=\"972\">Israel (+972)</option>\n              <option data-countryCode=\"IT\" value=\"39\">Italy (+39)</option>\n              <option data-countryCode=\"JM\" value=\"1876\">Jamaica (+1876)</option>\n              <option data-countryCode=\"JP\" value=\"81\">Japan (+81)</option>\n              <option data-countryCode=\"JO\" value=\"962\">Jordan (+962)</option>\n              <option data-countryCode=\"KZ\" value=\"7\">Kazakhstan (+7)</option>\n              <option data-countryCode=\"KE\" value=\"254\">Kenya (+254)</option>\n              <option data-countryCode=\"KI\" value=\"686\">Kiribati (+686)</option>\n              <option data-countryCode=\"KP\" value=\"850\">Korea North (+850)</option>\n              <option data-countryCode=\"KR\" value=\"82\">Korea South (+82)</option>\n              <option data-countryCode=\"KW\" value=\"965\">Kuwait (+965)</option>\n              <option data-countryCode=\"KG\" value=\"996\">Kyrgyzstan (+996)</option>\n              <option data-countryCode=\"LA\" value=\"856\">Laos (+856)</option>\n              <option data-countryCode=\"LV\" value=\"371\">Latvia (+371)</option>\n              <option data-countryCode=\"LB\" value=\"961\">Lebanon (+961)</option>\n              <option data-countryCode=\"LS\" value=\"266\">Lesotho (+266)</option>\n              <option data-countryCode=\"LR\" value=\"231\">Liberia (+231)</option>\n              <option data-countryCode=\"LY\" value=\"218\">Libya (+218)</option>\n              <option data-countryCode=\"LI\" value=\"417\">Liechtenstein (+417)</option>\n              <option data-countryCode=\"LT\" value=\"370\">Lithuania (+370)</option>\n              <option data-countryCode=\"LU\" value=\"352\">Luxembourg (+352)</option>\n              <option data-countryCode=\"MO\" value=\"853\">Macao (+853)</option>\n              <option data-countryCode=\"MK\" value=\"389\">Macedonia (+389)</option>\n              <option data-countryCode=\"MG\" value=\"261\">Madagascar (+261)</option>\n              <option data-countryCode=\"MW\" value=\"265\">Malawi (+265)</option>\n              <option data-countryCode=\"MY\" value=\"60\">Malaysia (+60)</option>\n              <option data-countryCode=\"MV\" value=\"960\">Maldives (+960)</option>\n              <option data-countryCode=\"ML\" value=\"223\">Mali (+223)</option>\n              <option data-countryCode=\"MT\" value=\"356\">Malta (+356)</option>\n              <option data-countryCode=\"MH\" value=\"692\">Marshall Islands (+692)</option>\n              <option data-countryCode=\"MQ\" value=\"596\">Martinique (+596)</option>\n              <option data-countryCode=\"MR\" value=\"222\">Mauritania (+222)</option>\n              <option data-countryCode=\"YT\" value=\"269\">Mayotte (+269)</option>\n              <option data-countryCode=\"MX\" value=\"52\">Mexico (+52)</option>\n              <option data-countryCode=\"FM\" value=\"691\">Micronesia (+691)</option>\n              <option data-countryCode=\"MD\" value=\"373\">Moldova (+373)</option>\n              <option data-countryCode=\"MC\" value=\"377\">Monaco (+377)</option>\n              <option data-countryCode=\"MN\" value=\"976\">Mongolia (+976)</option>\n              <option data-countryCode=\"MS\" value=\"1664\">Montserrat (+1664)</option>\n              <option data-countryCode=\"MA\" value=\"212\">Morocco (+212)</option>\n              <option data-countryCode=\"MZ\" value=\"258\">Mozambique (+258)</option>\n              <option data-countryCode=\"MN\" value=\"95\">Myanmar (+95)</option>\n              <option data-countryCode=\"NA\" value=\"264\">Namibia (+264)</option>\n              <option data-countryCode=\"NR\" value=\"674\">Nauru (+674)</option>\n              <option data-countryCode=\"NP\" value=\"977\">Nepal (+977)</option>\n              <option data-countryCode=\"NL\" value=\"31\">Netherlands (+31)</option>\n              <option data-countryCode=\"NC\" value=\"687\">New Caledonia (+687)</option>\n              <option data-countryCode=\"NZ\" value=\"64\">New Zealand (+64)</option>\n              <option data-countryCode=\"NI\" value=\"505\">Nicaragua (+505)</option>\n              <option data-countryCode=\"NE\" value=\"227\">Niger (+227)</option>\n              <option data-countryCode=\"NG\" value=\"234\">Nigeria (+234)</option>\n              <option data-countryCode=\"NU\" value=\"683\">Niue (+683)</option>\n              <option data-countryCode=\"NF\" value=\"672\">Norfolk Islands (+672)</option>\n              <option data-countryCode=\"NP\" value=\"670\">Northern Marianas (+670)</option>\n              <option data-countryCode=\"NO\" value=\"47\">Norway (+47)</option>\n              <option data-countryCode=\"OM\" value=\"968\">Oman (+968)</option>\n              <option data-countryCode=\"PW\" value=\"680\">Palau (+680)</option>\n              <option data-countryCode=\"PA\" value=\"507\">Panama (+507)</option>\n              <option data-countryCode=\"PG\" value=\"675\">Papua New Guinea (+675)</option>\n              <option data-countryCode=\"PY\" value=\"595\">Paraguay (+595)</option>\n              <option data-countryCode=\"PE\" value=\"51\">Peru (+51)</option>\n              <option data-countryCode=\"PH\" value=\"63\">Philippines (+63)</option>\n              <option data-countryCode=\"PL\" value=\"48\">Poland (+48)</option>\n              <option data-countryCode=\"PT\" value=\"351\">Portugal (+351)</option>\n              <option data-countryCode=\"PR\" value=\"1787\">Puerto Rico (+1787)</option>\n              <option data-countryCode=\"QA\" value=\"974\">Qatar (+974)</option>\n              <option data-countryCode=\"RE\" value=\"262\">Reunion (+262)</option>\n              <option data-countryCode=\"RO\" value=\"40\">Romania (+40)</option>\n              <option data-countryCode=\"RU\" value=\"7\">Russia (+7)</option>\n              <option data-countryCode=\"RW\" value=\"250\">Rwanda (+250)</option>\n              <option data-countryCode=\"SM\" value=\"378\">San Marino (+378)</option>\n              <option data-countryCode=\"ST\" value=\"239\">Sao Tome &amp; Principe (+239)</option>\n              <option data-countryCode=\"SA\" value=\"966\">Saudi Arabia (+966)</option>\n              <option data-countryCode=\"SN\" value=\"221\">Senegal (+221)</option>\n              <option data-countryCode=\"CS\" value=\"381\">Serbia (+381)</option>\n              <option data-countryCode=\"SC\" value=\"248\">Seychelles (+248)</option>\n              <option data-countryCode=\"SL\" value=\"232\">Sierra Leone (+232)</option>\n              <option data-countryCode=\"SG\" value=\"65\">Singapore (+65)</option>\n              <option data-countryCode=\"SK\" value=\"421\">Slovak Republic (+421)</option>\n              <option data-countryCode=\"SI\" value=\"386\">Slovenia (+386)</option>\n              <option data-countryCode=\"SB\" value=\"677\">Solomon Islands (+677)</option>\n              <option data-countryCode=\"SO\" value=\"252\">Somalia (+252)</option>\n              <option data-countryCode=\"ZA\" value=\"27\">South Africa (+27)</option>\n              <option data-countryCode=\"ES\" value=\"34\">Spain (+34)</option>\n              <option data-countryCode=\"LK\" value=\"94\">Sri Lanka (+94)</option>\n              <option data-countryCode=\"SH\" value=\"290\">St. Helena (+290)</option>\n              <option data-countryCode=\"KN\" value=\"1869\">St. Kitts (+1869)</option>\n              <option data-countryCode=\"SC\" value=\"1758\">St. Lucia (+1758)</option>\n              <option data-countryCode=\"SD\" value=\"249\">Sudan (+249)</option>\n              <option data-countryCode=\"SR\" value=\"597\">Suriname (+597)</option>\n              <option data-countryCode=\"SZ\" value=\"268\">Swaziland (+268)</option>\n              <option data-countryCode=\"SE\" value=\"46\">Sweden (+46)</option>\n              <option data-countryCode=\"CH\" value=\"41\">Switzerland (+41)</option>\n              <option data-countryCode=\"SI\" value=\"963\">Syria (+963)</option>\n              <option data-countryCode=\"TW\" value=\"886\">Taiwan (+886)</option>\n              <option data-countryCode=\"TJ\" value=\"7\">Tajikstan (+7)</option>\n              <option data-countryCode=\"TH\" value=\"66\">Thailand (+66)</option>\n              <option data-countryCode=\"TG\" value=\"228\">Togo (+228)</option>\n              <option data-countryCode=\"TO\" value=\"676\">Tonga (+676)</option>\n              <option data-countryCode=\"TT\" value=\"1868\">Trinidad &amp; Tobago (+1868)</option>\n              <option data-countryCode=\"TN\" value=\"216\">Tunisia (+216)</option>\n              <option data-countryCode=\"TR\" value=\"90\">Turkey (+90)</option>\n              <option data-countryCode=\"TM\" value=\"7\">Turkmenistan (+7)</option>\n              <option data-countryCode=\"TM\" value=\"993\">Turkmenistan (+993)</option>\n              <option data-countryCode=\"TC\" value=\"1649\">Turks &amp; Caicos Islands (+1649)</option>\n              <option data-countryCode=\"TV\" value=\"688\">Tuvalu (+688)</option>\n              <option data-countryCode=\"UG\" value=\"256\">Uganda (+256)</option>\n              <!-- <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option> -->\n              <option data-countryCode=\"UA\" value=\"380\">Ukraine (+380)</option>\n              <option data-countryCode=\"AE\" value=\"971\">United Arab Emirates (+971)</option>\n              <option data-countryCode=\"UY\" value=\"598\">Uruguay (+598)</option>\n              <!-- <option data-countryCode=\"US\" value=\"1\">USA (+1)</option> -->\n              <option data-countryCode=\"UZ\" value=\"7\">Uzbekistan (+7)</option>\n              <option data-countryCode=\"VU\" value=\"678\">Vanuatu (+678)</option>\n              <option data-countryCode=\"VA\" value=\"379\">Vatican City (+379)</option>\n              <option data-countryCode=\"VE\" value=\"58\">Venezuela (+58)</option>\n              <option data-countryCode=\"VN\" value=\"84\">Vietnam (+84)</option>\n              <option data-countryCode=\"VG\" value=\"84\">Virgin Islands - British (+1284)</option>\n              <option data-countryCode=\"VI\" value=\"84\">Virgin Islands - US (+1340)</option>\n              <option data-countryCode=\"WF\" value=\"681\">Wallis &amp; Futuna (+681)</option>\n              <option data-countryCode=\"YE\" value=\"969\">Yemen (North)(+969)</option>\n              <option data-countryCode=\"YE\" value=\"967\">Yemen (South)(+967)</option>\n              <option data-countryCode=\"ZM\" value=\"260\">Zambia (+260)</option>\n              <option data-countryCode=\"ZW\" value=\"263\">Zimbabwe (+263)</option>\n            </optgroup>\n          </select>\n        </div>\n        <div class=\"form-group col-md-12\" >\n          <label for=\"about\">Tell us briefly about your business</label>\n          <textarea id=\"about\" cols=\"\" rows=\"4\" class=\"messageArea rounded\" required=\"\" name=\"about\" #about=\"ngModel\" ngModel\n            placeholder=\"I have a retail shop that sell clothes, accessories, etc...\"></textarea>\n        </div>\n        <div class=\"form-group text-right col-md-12\">\n          <button type=\"button\" (click)=\"submitRequest(f)\" class=\"btn btn-primary2 px-5 align-items-center\">Request Demo</button>\n        </div>\n      </form>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/requestdemo/requestdemo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/requestdemo/requestdemo.component.ts ***!
  \************************************************************/
/*! exports provided: RequestdemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestdemoComponent", function() { return RequestdemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestdemoComponent = /** @class */ (function () {
    function RequestdemoComponent(http, config, helper) {
        this.http = http;
        this.config = config;
        this.helper = helper;
    }
    RequestdemoComponent.prototype.submitRequest = function (f) {
        // if (f.invalid) {
        //   return;
        // }
        sweetalert2__WEBPACK_IMPORTED_MODULE_3__["fire"]({
            onBeforeOpen: function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3__["showLoading"]();
            },
            allowEscapeKey: false,
            allowOutsideClick: false,
            // text:"sdfs",
            showConfirmButton: false,
        });
        this.http.post(this.config.ROOT_API + "/requestdemo", f.value)
            .subscribe(function (resp) {
            var options = {
                title: 'Success',
                text: 'Please Wait for we contact you !',
                type: 'success'
            };
            sweetalert2__WEBPACK_IMPORTED_MODULE_3__["fire"](options);
            f.resetForm({});
        });
        var a = document.createElement('a');
        // a.href = `mailto:hi@cubetiqs.com?subject=${f.value.companyname}&body=${encodeURI(f.controls.about.value)}`;
        // a.href = `mailto:soungsokheang@gmail.com?subject=${f.value.companyname}&body=${encodeURI(f.controls.about.value)}`;
        // //
        // a.href = `mailto:hi@cubetiqs.com?subject=${f.value.subject}&body=Hello%0D%0AWorld`;
        a.click();
    };
    RequestdemoComponent.prototype.ngAfterViewInit = function () {
        $('.country option').each(function (index, element) {
            element.value = element.innerText;
        });
    };
    RequestdemoComponent.prototype.ngOnInit = function () {
        this.helper.setTitle('Request-Demo');
    };
    RequestdemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requestdemo',
            template: __webpack_require__(/*! ./requestdemo.component.html */ "./src/app/pages/requestdemo/requestdemo.component.html"),
            styles: [__webpack_require__(/*! ./requestdemo.component.css */ "./src/app/pages/requestdemo/requestdemo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], RequestdemoComponent);
    return RequestdemoComponent;
}());



/***/ }),

/***/ "./src/app/pages/service/service.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/service/service.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ftco-services img{\n  width: 100%;\n  user-select: none;\n  -webkit-user-drag: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.services-wrap .list-services .icon{\n  background: #2cc3e9;\n}\n.ftco-services  img{\n  width: auto;\n  height: 75px;\n}\n.ftco-services .heading{\n   /*text-transform: uppercase;*/\n   font-weight: bold;\n   display:flex;\n   flex-direction:column;\n   justify-content: center;\n   height:50px;\n\n }\n.ftco-services .description{\n  /* font-family: Roboto !important; */\n  font-size: 14px;\n  padding: 0 20px;\n}\n.ftco-section {\n  padding-top:50px !important;\n  padding-bottom: 10px !important;\n}\n.services-item-container{\n  flex-direction: column;\n  padding-top: 20px;\n}\n.services-item-container .readmore{\n  position: absolute;\n  bottom: 0px;\n  background: #fffcfc63;\n  padding-right: 30px;\n  width: 100%;\n  text-align: center;\n  /*box-shadow: 0px 0px 100px 20px white;*/\n}\n.services-item-container .readmore h3{\n  opacity: 1;\n  background: white;\n  float: right;\n  /*line-height: 15px;*/\n  /*max-height: 15px;*/\n}\n.services-item-container .readmore h3 span{\n  padding-right: 30px;\n}\n.services-item-container .readmore a{\n  float:right;\n  width: 100%;\n  /*text-decoration:underline;*/\n  font-family:Helvetica !important\n}\n.shadow-out {\n  box-shadow: 0px 1px 1px 0px grey !important;\n  -moz-box-shadow: 0px 1px 1px 0px grey !important;\n  -o-box-shadow: 0px 1px 1px 0px grey !important;\n  -webkit-box-shadow: 0px 0px 0px 0px grey !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFJQTtHQUNHLDZCQUE2QjtHQUM3QixpQkFBaUI7R0FDakIsWUFBWTtHQUNaLHFCQUFxQjtHQUNyQix1QkFBdUI7R0FDdkIsV0FBVzs7Q0FFYjtBQUNEO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0I7QUFDRjtBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGdEQUFnRDtFQUNoRCw4Q0FBOEM7RUFDOUMsbURBQW1EO0FBQ3JEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnRjby1zZXJ2aWNlcyBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc2VydmljZXMtd3JhcCAubGlzdC1zZXJ2aWNlcyAuaWNvbntcbiAgYmFja2dyb3VuZDogIzJjYzNlOTtcbn1cbi5mdGNvLXNlcnZpY2VzICBpbWd7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cblxuXG4uZnRjby1zZXJ2aWNlcyAuaGVhZGluZ3tcbiAgIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBkaXNwbGF5OmZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGhlaWdodDo1MHB4O1xuXG4gfVxuLmZ0Y28tc2VydmljZXMgLmRlc2NyaXB0aW9ue1xuICAvKiBmb250LWZhbWlseTogUm9ib3RvICFpbXBvcnRhbnQ7ICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmZ0Y28tc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOjUwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbi5zZXJ2aWNlcy1pdGVtLWNvbnRhaW5lcntcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uc2VydmljZXMtaXRlbS1jb250YWluZXIgLnJlYWRtb3Jle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmY2ZjNjM7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCAyMHB4IHdoaXRlOyovXG59XG4uc2VydmljZXMtaXRlbS1jb250YWluZXIgLnJlYWRtb3JlIGgze1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAvKmxpbmUtaGVpZ2h0OiAxNXB4OyovXG4gIC8qbWF4LWhlaWdodDogMTVweDsqL1xufVxuXG4uc2VydmljZXMtaXRlbS1jb250YWluZXIgLnJlYWRtb3JlIGgzIHNwYW57XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uc2VydmljZXMtaXRlbS1jb250YWluZXIgLnJlYWRtb3JlIGF7XG4gIGZsb2F0OnJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgLyp0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOyovXG4gIGZvbnQtZmFtaWx5OkhlbHZldGljYSAhaW1wb3J0YW50XG59XG5cbi5zaGFkb3ctb3V0IHtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggMHB4IGdyZXkgIWltcG9ydGFudDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDFweCAwcHggZ3JleSAhaW1wb3J0YW50O1xuICAtby1ib3gtc2hhZG93OiAwcHggMXB4IDFweCAwcHggZ3JleSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/service/service.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/service/service.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ftco-section ftco-services\" >\n\n\n  <div class=\"container\" id=\"service\" >\n    <div class=\"row justify-content-center pb-5\">\n      <div class=\"d-flex align-items-center heading-section row\">\n        <div style=\" padding-right: 20px; padding: 20px; \" >\n            <hr style=\"width: 60px; text-align-last: center; height: 1px; background-color: #2cc3e9; \">\n        </div>\n\n        <div>\n            <h1 class=\"mb-2 font-weight-bold\" >Our Services </h1>\n        </div>\n        <!--<span class=\"subheading\">Search Engine &amp; Social Media Optimization Experts</span>-->\n      </div>\n    </div>\n\n    <div class=\"row justify-content-center\" >\n      <!-- <div class=\"col-md-4 col-sm-6 d-flex align-self-stretch services-item-container  \" (click)=\"helper.link(serv.link)\" *ngFor=\"let serv of services\"> -->\n      <div class=\"col-md-4 col-sm-6 d-flex align-self-stretch services-item-container  \" *ngFor=\"let serv of services\">\n        <div class=\"media  services d-block text-center shadow-out pt-3 h-100\">\n          <div class=\"d-flex justify-content-center\" >\n            <div class=\"icon\">\n              <img [src]=\"this.config.ROOT +serv.icon\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"media-body p-2 mt-3\">\n            <h3 class=\"heading\">{{serv.heading}}</h3>\n            <p class=\"text-center description\">{{serv.summary}}.</p>\n          </div>\n        </div>\n\n        <!-- <div class=\"readmore text-center\">\n          &lt;!&ndash;<h3 class=\"text-right\"><span style=\"opacity: .3;font-family: Roboto\"> ... </span> </h3>&ndash;&gt;\n          <a href=\"\"> Read More </a>\n        </div> -->\n      </div>\n\n\n      <!--<div class=\"col-md-4 d-flex align-self-stretch \">-->\n        <!--<div class=\"media block-6 services d-block text-center\">-->\n          <!--<div class=\"d-flex justify-content-center\"><div class=\"icon\">-->\n            <!--<img src=\"/assets/images/services-2.jpg\" alt=\"\">-->\n          <!--</div></div>-->\n          <!--<div class=\"media-body p-2 mt-3\">-->\n            <!--<h3 class=\"heading\">Software development</h3>-->\n            <!--<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    </div>\n\n\n  </div>\n  <div></div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/pages/service/service.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/service/service.component.ts ***!
  \****************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(http, servService, helper, config) {
        this.http = http;
        this.servService = servService;
        this.helper = helper;
        this.config = config;
        this.services = null;
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servService.GetService()
            .subscribe(function (resp) {
            _this.services = resp;
        });
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/pages/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/pages/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/solution/solution.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/solution/solution.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".solution  img{\n  width: 100%;\n  height: auto;\n}\n.solution {\n  padding-top: 70px !important;\n}\n.solution .heading{\n  /*font-weight: bold;*/\n  color:#fff;\n  margin: auto;\n  font-size: 10pt;\n  line-height: 1;\n}\n.solution .heading-container{\n  border-radius: 10px;\n  background: #2cc3e9;\n  display: flex;\n  max-width: 210px;\n  box-shadow: 0px 0px 2px 0px grey;\n  -moz-box-shadow: 0px 0px 2px 0px grey;\n  -o-box-shadow: 0px 0px 2px 0px grey;\n  -webkit-box-shadow: 0px 0px 2px 0px grey;\n}\n.solution .icon{\n  height: 135px;\n  max-width: 135px;\n  display: flex;\n  border-radius: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 2px #2cc3e9 solid;\n  box-shadow: 0px 0px 2px 0px grey inset;\n}\n.ftco-navbar-light .navbar-toggler{\n  color:#fff !important;\n}\n.container{\n  max-width: 80%;\n}\n.solution .solution-item{\n  display: flex !important;\n  flex-direction: column;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29sdXRpb24vc29sdXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixzQ0FBc0M7QUFDeEM7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb2x1dGlvbi9zb2x1dGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvbHV0aW9uICBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc29sdXRpb24ge1xuICBwYWRkaW5nLXRvcDogNzBweCAhaW1wb3J0YW50O1xufVxuLnNvbHV0aW9uIC5oZWFkaW5ne1xuICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXG4gIGNvbG9yOiNmZmY7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxMHB0O1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnNvbHV0aW9uIC5oZWFkaW5nLWNvbnRhaW5lcntcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzJjYzNlOTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAyMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4IGdyZXk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4IGdyZXk7XG4gIC1vLWJveC1zaGFkb3c6IDBweCAwcHggMnB4IDBweCBncmV5O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMnB4IDBweCBncmV5O1xufVxuXG4uc29sdXRpb24gLmljb257XG4gIGhlaWdodDogMTM1cHg7XG4gIG1heC13aWR0aDogMTM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMnB4ICMyY2MzZTkgc29saWQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDBweCBncmV5IGluc2V0O1xufVxuXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVye1xuICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXJ7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG4uc29sdXRpb24gLnNvbHV0aW9uLWl0ZW17XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/solution/solution.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/solution/solution.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ftco-section ftco-solution solution\">\n\n  <div class=\"container\">\n    <div class=\"row justify-content-center pb-5\">\n      <div class=\" text-center heading-section row\">\n        <!-- <h1 class=\"mb-2 font-weight-bold\">Whom CUBETIQ is for?</h1>-->\n        <div style=\" padding-right: 20px; padding: 20px; \">\n            <hr style=\"width: 60px; text-align-last: center; height: 1px; background-color: #2cc3e9; \">\n        </div>\n        <div>\n            <h1 class=\"mb-2 font-weight-bold Our_Service\">Whom CUBETIQ is for?</h1>\n        </div>\n        <!--<span class=\"subheading\">Search Engine &amp; Social Media Optimization Experts</span>-->\n      </div>\n    </div>\n    <div  class=\"row justify-content-start \">\n\n        <div *ngFor=\"let solution of solutions\"  (click)=\"helper.link(solution.link)\" class=\"col-md-3 col-lg-2 col-6 d-flex align-self-stretch\" routerLink=\"/contactus\">\n          <div class=\"media block-6 services d-block text-center solution-item\">\n              <div class=\"d-flex justify-content-center img-contain\">\n                <div class=\"icon\">\n                <img  [src]=\"config.ROOT +solution.icon\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"media-body p-2 mt-3 w-100 heading-container\">\n              <h5 class=\"heading\">{{solution.heading}}</h5>\n            </div>\n          </div>\n        </div>\n\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/solution/solution.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/solution/solution.component.ts ***!
  \******************************************************/
/*! exports provided: SolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionComponent", function() { return SolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolutionComponent = /** @class */ (function () {
    function SolutionComponent(services, helper, config) {
        this.services = services;
        this.helper = helper;
        this.config = config;
        this.solutions = [];
        this.helper.setTitle('Solution');
    }
    SolutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getSolutions()
            .subscribe(function (resp) {
            _this.solutions = Object.values(resp);
        });
    };
    SolutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solution',
            template: __webpack_require__(/*! ./solution.component.html */ "./src/app/pages/solution/solution.component.html"),
            styles: [__webpack_require__(/*! ./solution.component.css */ "./src/app/pages/solution/solution.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], SolutionComponent);
    return SolutionComponent;
}());



/***/ }),

/***/ "./src/app/pages/testimonial/testimonial.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/testimonial/testimonial.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ftco-testimonial .heading-section{\n  /*border-bottom: 3px #2cc3e9 solid;*/\n}\n\n.testimonial-container .card .card-footer{\n  background: inherit !important;\n  border: none;\n}\n\n.testimonial-container .card{\n  border-radius: 10px;\n  overflow: hidden;\n}\n\nbutton.owl-dots{\n  border-radius: 50%;\n}\n\n.ftco-testimonial .btn-review:hover{\n  background: #2cc3e9;\n  color: white !important;\n\n}\n\n.item .quote-icon{\n  font-size: 45pt;\n  top: -30px;\n  left: 10%;\n  z-index: 2;\n}\n\n.owl-item:hover .card  *{\n  background: #2cc3e9 !important;\n  color: #fff !important;\n}\n\n.item:hover span{\n  color: #000 !important;\n}\n\nbutton.owl-dot span{\n  visibility: hidden;\n}\n\n.owl-carousel button.owl-dot{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.testimonial-container .owl-dot.active *{\n  background: #2cc3e9 !important;\n}\n\n.hrImonial {\n  height: 3px;\n  background-color: #2cc3e9;\n  text-align: center;\n  margin: 0 auto;\n  width: 22%;\n}\n\n.client-owl {\n  background: #F2F2F2;\n  margin: 0px;\n  padding: 50px !important;\n\n}\n\n.owl-carousel.client-owl .owl-stage-outer{\n  padding-left: 50px;\n  padding-right: 50px;\n  height: 100px;\n}\n\n.ftco-client .container{\n  max-width: 100%;\n  padding: 0px;\n}\n\n.ftco-testimonial .client-nav{\n  width: 100%;\n  position: absolute;\n  z-index: 0;\n  bottom: 0;\n  left:0%;\n  height: 50%;\n  display: flex;\n  align-items: center;\n}\n\n.ftco-testimonial .client-nav #prev{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  float: left;\n  font-size: 50pt;\n}\n\n.ftco-testimonial .client-nav #next{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  float: right;\n  font-size: 50pt;\n  width: 100%;\n  text-align: right;\n}\n\n.ftco-testimonial .client-nav .owl-dots{\n  visibility: hidden;\n  display: none;\n}\n\n.ftco-testimonial{\n  padding-top: 102px !important;\n}\n\n.ftco-testimonial .client-nav .owl-nav{\n  display: none;\n  visibility: hidden;\n}\n\n.ftco-testimonial .btn-review{\n  width: 180px;\n  height: 50px;\n  border-radius: 25%;\n  font-family: nexa-l !Important;\n  font-size: 18px;\n}\n\n.marBottom20 {\n  margin-bottom: 20px;\n}\n\n@media (max-width: 767px) {\n  div.hideT {\n    display: none !important;\n  }\n\n  .hrProject{\n    height: 3px;\n    background-color: #2cc3e9;\n    text-align: center;\n    margin: 0 auto;\n    width: 70px;\n}\n  .hrImonial {\n    height: 3px;\n    background-color: #2cc3e9;\n    text-align: center;\n    margin: 0 auto;\n    width: 190px;\n  }\n\n  .centerDeflix {\n    display: flex !important;\n    justify-content: center !important;\n  }\n\n}\n\nh5, .h5 {\n  font-size: 1rem !important;\n}\n\n.slider-text h1 {\n  font-size: 2.5rem !important;\n  color: #2f89fc;\n  line-height: 1.2;\n  font-weight: 400;\n}\n\n.rounded2 {\n  border-radius: 0.5rem !important;\n}\n\n.owl-carousel .owl-dots .owl-dot {\n  width: 10px;\n  height: 10px;\n  margin: 5px;\n  transform: rotate(45deg);\n  border-radius: 0.5rem !important;\n  border: 1px solid #cccccc;\n}\n\n/* create card1 */\n\n.card1 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #2cc3e9;\n  border-radius: 10px; }\n\n.card1 > hr {\n    margin-right: 0;\n    margin-left: 0; }\n\n.card1 > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n\n.card1 > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.card1-body {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  padding-top: 2rem;\n  height: 170px; }\n\n.card1-title {\n  margin-bottom: 0.75rem; }\n\n.card1-footer {\n    padding: 0.75rem 1.25rem;}\n\n.card1-footer:last-child {\n      border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n/* create card2 */\n\n.card2 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #2cc3e9;\n  border-radius: 10px; }\n\n.card2 > hr {\n    margin-right: 0;\n    margin-left: 0; }\n\n.card2 > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n\n.card2 > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.card2-body {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  padding-top: 2rem;\n  height: 170px; }\n\n.card2-title {\n  margin-bottom: 0.75rem; }\n\n.card2-footer {\n    padding: 0.75rem 1.25rem;}\n\n.card2-footer:last-child {\n      border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.error{\n  color:red\n}\n\n.btn-primary2 {\n  color: white;\n  background-color: #2CC3E9;\n  border-color: 1px #2CC3E9; }\n\n.btn-primary2:hover {\n    color: #2CC3E9;\n    background-color: rgba(0, 0, 0, 0);\n    border-color: #2CC3E9;\n    fill: #2CC3E9; }\n\n.btn-primary2:focus, .btn-primary2.focus {\n    box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5); }\n\n.btn-primary2.disabled, .btn-primary2:disabled {\n    color: #212529;\n    background-color: #78d5ef;\n    border-color: #78d5ef; }\n\n.btn-primary2:not(:disabled):not(.disabled):active, .btn-primary2:not(:disabled):not(.disabled).active,\n  .show > .btn-primary2.dropdown-toggle {\n    color: #212529;\n    background-color: #4ac7ea;\n    border-color: #3fc3e8; }\n\n.btn-primary2:not(:disabled):not(.disabled):active:focus, .btn-primary2:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary2.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUM7RUFDQyw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdCQUF3Qjs7QUFFMUI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBaUI7S0FBakIsc0JBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztBQUNmO0VBQ0U7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGtDQUFrQztFQUNwQzs7QUFFRjs7QUFHQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFHQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUVYLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQU1BLGlCQUFpQjs7QUFDakI7RUFDRSxrQkFBa0I7RUFHbEIsYUFBYTtFQUliLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFFOztBQUNyQjtJQUNFLGVBQWU7SUFDZixjQUFjLEVBQUU7O0FBQ2xCO0lBQ0UsK0JBQStCO0lBQy9CLGdDQUFnQyxFQUFFOztBQUNwQztJQUNFLG1DQUFtQztJQUNuQyxrQ0FBa0MsRUFBRTs7QUFFeEM7RUFHRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUU7O0FBRWpCO0VBQ0Usc0JBQXNCLEVBQUU7O0FBRXhCO0lBQ0Usd0JBQXdCLENBQUM7O0FBQ3pCO01BQ0UsMERBQTBELEVBQUU7O0FBSWxFLGlCQUFpQjs7QUFDakI7RUFDRSxrQkFBa0I7RUFHbEIsYUFBYTtFQUliLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFFOztBQUNyQjtJQUNFLGVBQWU7SUFDZixjQUFjLEVBQUU7O0FBQ2xCO0lBQ0UsK0JBQStCO0lBQy9CLGdDQUFnQyxFQUFFOztBQUNwQztJQUNFLG1DQUFtQztJQUNuQyxrQ0FBa0MsRUFBRTs7QUFFeEM7RUFHRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUU7O0FBRWpCO0VBQ0Usc0JBQXNCLEVBQUU7O0FBRXhCO0lBQ0Usd0JBQXdCLENBQUM7O0FBQ3pCO01BQ0UsMERBQTBELEVBQUU7O0FBRWxFO0VBQ0U7QUFDRjs7QUFHQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCLEVBQUU7O0FBQzNCO0lBQ0UsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsYUFBYSxFQUFFOztBQUNqQjtJQUVFLGlEQUFpRCxFQUFFOztBQUNyRDtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCLEVBQUU7O0FBQ3pCOztJQUVFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCLEVBQUU7O0FBQ3ZCOztNQUdFLGlEQUFpRCxFQUFFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdGNvLXRlc3RpbW9uaWFsIC5oZWFkaW5nLXNlY3Rpb257XG4gIC8qYm9yZGVyLWJvdHRvbTogM3B4ICMyY2MzZTkgc29saWQ7Ki9cbn1cblxuLnRlc3RpbW9uaWFsLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1mb290ZXJ7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGVzdGltb25pYWwtY29udGFpbmVyIC5jYXJke1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5idXR0b24ub3dsLWRvdHN7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZ0Y28tdGVzdGltb25pYWwgLmJ0bi1yZXZpZXc6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICMyY2MzZTk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXG59XG5cbi5pdGVtIC5xdW90ZS1pY29ue1xuICBmb250LXNpemU6IDQ1cHQ7XG4gIHRvcDogLTMwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgei1pbmRleDogMjtcbn1cblxuIC5vd2wtaXRlbTpob3ZlciAuY2FyZCAgKntcbiAgYmFja2dyb3VuZDogIzJjYzNlOSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLml0ZW06aG92ZXIgc3BhbntcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLm93bC1kb3Qgc3BhbntcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm93bC1jYXJvdXNlbCBidXR0b24ub3dsLWRvdHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4udGVzdGltb25pYWwtY29udGFpbmVyIC5vd2wtZG90LmFjdGl2ZSAqe1xuICBiYWNrZ3JvdW5kOiAjMmNjM2U5ICFpbXBvcnRhbnQ7XG59XG5cbi5ockltb25pYWwge1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjYzNlOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDIyJTtcbn1cblxuLmNsaWVudC1vd2wge1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogNTBweCAhaW1wb3J0YW50O1xuXG59XG4ub3dsLWNhcm91c2VsLmNsaWVudC1vd2wgLm93bC1zdGFnZS1vdXRlcntcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZnRjby1jbGllbnQgLmNvbnRhaW5lcntcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5mdGNvLXRlc3RpbW9uaWFsIC5jbGllbnQtbmF2e1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6MCU7XG4gIGhlaWdodDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZ0Y28tdGVzdGltb25pYWwgLmNsaWVudC1uYXYgI3ByZXZ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiA1MHB0O1xufVxuLmZ0Y28tdGVzdGltb25pYWwgLmNsaWVudC1uYXYgI25leHR7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogNTBwdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZ0Y28tdGVzdGltb25pYWwgLmNsaWVudC1uYXYgLm93bC1kb3Rze1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZnRjby10ZXN0aW1vbmlhbHtcbiAgcGFkZGluZy10b3A6IDEwMnB4ICFpbXBvcnRhbnQ7XG59XG4uZnRjby10ZXN0aW1vbmlhbCAuY2xpZW50LW5hdiAub3dsLW5hdntcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZnRjby10ZXN0aW1vbmlhbCAuYnRuLXJldmlld3tcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgZm9udC1mYW1pbHk6IG5leGEtbCAhSW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cblxuLm1hckJvdHRvbTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGRpdi5oaWRlVCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhyUHJvamVjdHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNjM2U5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNzBweDtcbn1cbiAgLmhySW1vbmlhbCB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjYzNlOTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDE5MHB4O1xuICB9XG5cbiAgLmNlbnRlckRlZmxpeCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG5cbmg1LCAuaDUge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuXG4uc2xpZGVyLXRleHQgaDEge1xuICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzJmODlmYztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnJvdW5kZWQyIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1kb3RzIC5vd2wtZG90IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xufVxuXG5cblxuXG5cbi8qIGNyZWF0ZSBjYXJkMSAqL1xuLmNhcmQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJjYzNlOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuICAuY2FyZDEgPiBociB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5jYXJkMSA+IC5saXN0LWdyb3VwOmZpcnN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07IH1cbiAgLmNhcmQxID4gLmxpc3QtZ3JvdXA6bGFzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07IH1cblxuLmNhcmQxLWJvZHkge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgaGVpZ2h0OiAxNzBweDsgfVxuXG4uY2FyZDEtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOyB9XG5cbiAgLmNhcmQxLWZvb3RlciB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO31cbiAgICAuY2FyZDEtZm9vdGVyOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIGNhbGMoMC4yNXJlbSAtIDFweCkgY2FsYygwLjI1cmVtIC0gMXB4KTsgfVxuXG5cblxuLyogY3JlYXRlIGNhcmQyICovXG4uY2FyZDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmNjM2U5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG4gIC5jYXJkMiA+IGhyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLmNhcmQyID4gLmxpc3QtZ3JvdXA6Zmlyc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTsgfVxuICAuY2FyZDIgPiAubGlzdC1ncm91cDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTsgfVxuXG4uY2FyZDItYm9keSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBoZWlnaHQ6IDE3MHB4OyB9XG5cbi5jYXJkMi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07IH1cblxuICAuY2FyZDItZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07fVxuICAgIC5jYXJkMi1mb290ZXI6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgY2FsYygwLjI1cmVtIC0gMXB4KSBjYWxjKDAuMjVyZW0gLSAxcHgpOyB9XG5cbi5lcnJvcntcbiAgY29sb3I6cmVkXG59XG5cblxuLmJ0bi1wcmltYXJ5MiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQzNFOTtcbiAgYm9yZGVyLWNvbG9yOiAxcHggIzJDQzNFOTsgfVxuICAuYnRuLXByaW1hcnkyOmhvdmVyIHtcbiAgICBjb2xvcjogIzJDQzNFOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlci1jb2xvcjogIzJDQzNFOTtcbiAgICBmaWxsOiAjMkNDM0U5OyB9XG4gIC5idG4tcHJpbWFyeTI6Zm9jdXMsIC5idG4tcHJpbWFyeTIuZm9jdXMge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTIwLCAyMTMsIDIzOSwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMjAsIDIxMywgMjM5LCAwLjUpOyB9XG4gIC5idG4tcHJpbWFyeTIuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTI6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OGQ1ZWY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzhkNWVmOyB9XG4gIC5idG4tcHJpbWFyeTI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnkyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLXByaW1hcnkyLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhYzdlYTtcbiAgICBib3JkZXItY29sb3I6ICMzZmMzZTg7IH1cbiAgICAuYnRuLXByaW1hcnkyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Mjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLXByaW1hcnkyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEyMCwgMjEzLCAyMzksIDAuNSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMjAsIDIxMywgMjM5LCAwLjUpOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/testimonial/testimonial.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/testimonial/testimonial.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ftco-section ftco-testimonial\" *ngIf=\"rand\">\n\n  <div class=\"container text-center\">\n\n    <div class=\"row justify-content-center m-auto\">\n      <div class=\" text-center heading-section\" style=\"text-align: center !important;\">\n        <h1 class=\"mb-2 font-weight-bold\">What Our Clients Say </h1>\n        <hr class=\"hrImonial\">\n        <!--<span class=\"subheading\">Search Engine &amp; Social Media Optimization Experts</span>-->\n      </div>\n      <div class=\"col-md-7 m-4 text-center  \">\n        <h5>Reviews from our happy clients</h5>\n      </div>\n\n    </div>\n\n    <!-- <div class=\"owl-carousel owl-theme row text-center testimonial-container\" id=\"testmonial-owl\">\n\n      <div class=\"item\" *ngFor=\"let testi of testimonials\">\n        <span class=\"ion-quote position-absolute quote-icon cubet-color\"></span>\n        <div class=\"card text-center mt-4 \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\" {{testi.comments}} \"</h5>\n          </div>\n          <div class=\"card-footer text-center d-flex align-items-center back-white justify-content-center\">\n\n            <ngx-avatar [src]=\"config.ROOT+ testi.avatar\" *ngIf=\"testi.avatar\"></ngx-avatar>\n            <ngx-avatar [name]=\"testi.name\" *ngIf=\"testi.avatar==null\"></ngx-avatar>\n            <div class=\"profile d-flex flex-column text-justify pl-2\">\n              <strong class=\"font-weight-bold\">{{testi.name}}</strong>\n              <span>{{testi.position}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"client-nav px-3\">\n      <h1 id=\"prev\" (click)=\"owlprev()\"><</h1>\n      <h1 id=\"next\" (click)=\"owlnext()\">></h1>\n    </div> -->\n\n    <div class=\"row\">\n      <div class=\"col-md-1 col-sm-1 d-flex align-items-center hideT\" style=\"padding-bottom: 40px;\">\n        <img src=\"assets/ICON/left arrow.png\" alt=\"\" style=\"width: 50%;\" (click)=\"owlprev()\" >\n      </div>\n      <div class=\"col-md-10 centerDeflix\">\n        <div class=\"owl-carousel owl-theme row text-center testimonial-container\" id=\"testmonial-owl\">\n\n          <div class=\"item\" *ngFor=\"let testi of testimonials; let i = index  \" style=\" padding: 0 15px;\">\n            <span *ngIf=\"i % 2 == 0\" class=\"ion-quote position-absolute quote-icon\" style=\"color: #2cc3e9 !important;\"></span>\n            <span *ngIf=\"i % 2\" class=\"ion-quote position-absolute quote-icon\"></span>\n\n            <!-- null -->\n            <div class=\"card1 text-center mt-4\" *ngIf=\"i % 2 == 0\">\n              <div class=\"card1-body\" style=\"text-align: left;\">\n                <h5 class=\"card1-title\">{{testi.comments}}</h5>\n              </div>\n              <div class=\"card1-footer text-center d-flex align-items-center back-white justify-content-start\">\n                <div class=\"border border-primary rounded-circle\" style=\"padding: 3px; \">\n                    <ngx-avatar [src]=\"config.ROOT+ testi.avatar\" *ngIf=\"testi.avatar\"></ngx-avatar>\n                    <ngx-avatar [name]=\"testi.name\" *ngIf=\"testi.avatar==null\"></ngx-avatar>\n                </div>\n\n                <div class=\"profile d-flex flex-column text-justify pl-2\">\n                  <strong class=\"font-weight-bold\">{{testi.name}} {{testi.lastname}}</strong>\n                  <span>{{testi.company}} - {{testi.position}}</span>\n                </div>\n              </div>\n            </div>\n\n            <!-- !null -->\n            <div class=\"card2 text-center mt-4\" *ngIf=\"i % 2\" style=\"background-color: #2cc3e9 !important; color: white;\">\n                <div class=\"card2-body\" style=\"text-align: left;\">\n                  <h5 class=\"card2-title\" style=\"color: white; border: 0px solid white !important;\">{{testi.comments}}</h5>\n                </div>\n                <div class=\"card2-footer text-center d-flex align-items-center back-white justify-content-start\"  >\n                    <div class=\"border border-primary rounded-circle\" style=\"padding: 3px; border: solid 1px white !important;\">\n                        <ngx-avatar [src]=\"config.ROOT+ testi.avatar\" *ngIf=\"testi.avatar\"></ngx-avatar>\n                        <ngx-avatar [name]=\"testi.name\" *ngIf=\"testi.avatar==null\"></ngx-avatar>\n                    </div>\n                  <div class=\"profile d-flex flex-column text-justify pl-2\" >\n                    <strong class=\"font-weight-bold\">{{testi.name}} {{testi.lastname}}</strong>\n                    <span style=\"color: white !important; \">{{testi.company}} - {{testi.position}}</span>\n                  </div>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1 col-sm-1 d-flex align-items-center hideT\" style=\"padding-bottom: 40px;\">\n          <img src=\"assets/ICON/right arrow.png\" alt=\"\" style=\"width: 50%;\" (click)=\"owlnext()\">\n      </div>\n    </div>\n\n\n\n    <a href=\"\" data-toggle=\"modal\" style=\"margin: 50px auto;\" data-target=\"#modalreview\"\n      class=\"btn-review cubet-color font-weight-bold border-2 rounded col-md-4 d-flex justify-content-center align-items-center\">\n      Write a Review\n    </a>\n\n\n  </div>\n</section>\n\n<!--Modal Review-->\n<div class=\"modal fade \" id=\"modalreview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalRequestLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalRequestLabel\">Writing a Review</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form action=\"#\" #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n\n          <div class=\"form-group\">\n            <input type=\"button\" (click)=\"uploadimage()\" value=\"Upload Image\" class=\"btn btn-primary2\">\n          </div>\n\n          <div class=\"avatar-icon\">\n            <ngx-avatar [src]=\"config.ROOT+ model.icon\" *ngIf=\"model.icon\"></ngx-avatar>\n            <input name=\"icon\" type=\"hidden\" [(ngModel)]=\"model.icon\">\n          </div>\n\n          <div class=\"form-group\">\n            <!-- <label for=\"appointment_name\" class=\"text-black\">Full Name</label> -->\n            <input type=\"text\" [(ngModel)]=\"model.name\" required minlength=\"3\" class=\"form-control\"\n              id=\"appointment_name\" name=\"name\" placeholder=\"First Name\">\n            <small class=\"error\" *ngIf=\"errs['name']\">{{errs['name']}}</small>\n          </div>\n          <div class=\"form-group\">\n            <!-- <label for=\"appointment_name\" class=\"text-black\">Full Name</label> -->\n            <input type=\"text\" [(ngModel)]=\"model.lastname\" required minlength=\"3\" class=\"form-control\"\n              id=\"appointment_lastname\" name=\"lastname\" placeholder=\"Last Name\">\n            <small class=\"error\" *ngIf=\"errs['lastname']\">{{errs['lastname']}}</small>\n          </div>\n\n          <div class=\"form-group\">\n            <!-- <label for=\"appointment_email\" class=\"text-black\">Email</label> -->\n            <input type=\"text\" [(ngModel)]=\"model.company\" class=\"form-control\" id=\"appointment_company\" name=\"company\"\n              placeholder=\"Company\">\n            <small class=\"error\" *ngIf=\"errs['company']\">{{errs['company']}}</small>\n          </div>\n          <div class=\"form-group\">\n            <!-- <label for=\"appointment_email\" class=\"text-black\">Email</label> -->\n            <input type=\"text\" [(ngModel)]=\"model.position\" class=\"form-control\" id=\"appointment_position\" name=\"position\"\n              placeholder=\"Position\">\n            <small class=\"error\" *ngIf=\"errs['position']\">{{errs['position']}}</small>\n          </div>\n\n\n          <!--          <div class=\"row\">-->\n          <!--            <div class=\"col-md-6\">-->\n          <!--              <div class=\"form-group\">-->\n          <!--                &lt;!&ndash; <label for=\"appointment_date\" class=\"text-black\">Date</label> &ndash;&gt;-->\n          <!--                <input type=\"text\" class=\"form-control\" id=\"appointment_date\" placeholder=\"Date\">-->\n          <!--              </div>-->\n          <!--            </div>-->\n          <!--            <div class=\"col-md-6\">-->\n          <!--              <div class=\"form-group\">-->\n          <!--                &lt;!&ndash; <label for=\"appointment_time\" class=\"text-black\">Time</label> &ndash;&gt;-->\n          <!--                <input type=\"text\" class=\"form-control\" id=\"appointment_time\" placeholder=\"Time\">-->\n          <!--              </div>-->\n          <!--            </div>-->\n          <!--          </div>-->\n\n\n          <div class=\"form-group\">\n            <small class=\"error\" *ngIf=\"errs['review']\">{{errs['review']}}</small>\n\n            <!-- <label for=\"appointment_message\" class=\"text-black\">Message</label> -->\n            <textarea id=\"appointment_message\" [(ngModel)]=\"model.review\" class=\"form-control\" name=\"review\" cols=\"30\"\n              rows=\"10\" placeholder=\"Reviews\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary2\">\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/testimonial/testimonial.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/testimonial/testimonial.component.ts ***!
  \************************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _Models_review_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/review-user */ "./src/app/Models/review-user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent(testimonialService, helper, http, config) {
        this.testimonialService = testimonialService;
        this.helper = helper;
        this.http = http;
        this.config = config;
        this.testimonials = [];
        this.model = new _Models_review_user__WEBPACK_IMPORTED_MODULE_3__["ReviewUser"]();
        this.errs = {};
        this.rand = true;
        this.helper.setTitle('Testimonial');
    }
    TestimonialComponent.prototype.owlnext = function () {
        $('.ftco-testimonial .owl-nav .owl-next').click();
    };
    TestimonialComponent.prototype.owlprev = function () {
        $('.ftco-testimonial .owl-nav .owl-prev').click();
    };
    TestimonialComponent.prototype.uploadimage = function () {
        var _this = this;
        // console.log('bef', fileinput);
        var fileinput = document.createElement('input');
        // fileinput.addAttribute('type','file');
        fileinput.type = 'file';
        fileinput.accept = "image/x-png,image/gif,image/jpeg";
        // fileinput.name = 'file';
        fileinput.onchange = function (e) {
            _this.model.icon = '';
            var formData = new FormData();
            formData.append('file', e['path'][0].files[0]);
            _this.http.post(_this.config.ROOT_API + "/media/save", formData)
                .subscribe(function (resp) {
                _this.model.icon = resp['location'];
            });
        };
        fileinput.click();
    };
    TestimonialComponent.prototype.validate = function () {
        this.errs = {};
        if (!this.model.name.trim()) {
            this.errs['name'] = 'Firstname Required';
            return false;
        }
        if (!this.model.name.trim()) {
            this.errs['lastname'] = 'Lastname Required';
            return false;
        }
        if (!this.model.position.trim()) {
            this.errs['position'] = 'Position Required';
            return false;
        }
        if (!this.model.review.trim()) {
            this.errs['review'] = 'Review Message Required';
            return false;
        }
        return true;
    };
    TestimonialComponent.prototype.submit = function (form) {
        // const model = new ReviewUser(...form.value);
        // console.log('submit',form)
        var _this = this;
        if (!this.validate()) {
            return;
        }
        this.http.post(this.config.ROOT_API + "/review", this.model)
            .subscribe(function (resp) {
            _this.rand = false;
            _this.model = new _Models_review_user__WEBPACK_IMPORTED_MODULE_3__["ReviewUser"]();
            setTimeout(function () {
                _this.rand = true;
                _this.ngOnInit();
            }, 100);
        });
    };
    TestimonialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testimonialService.GetReviews()
            .subscribe(function (resp) {
            _this.testimonials = resp;
            setTimeout(function () {
                $('#testmonial-owl').owlCarousel({
                    loop: false,
                    margin: 10,
                    nav: true,
                    navText: ['<', '>'],
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: false
                        },
                        600: {
                            items: 2,
                            nav: false
                        },
                        1000: {
                            items: 3,
                            nav: false,
                        }
                    }
                });
            }, 100);
        });
    };
    TestimonialComponent.prototype.ngAfterViewInit = function () {
        // ($('#modalreview') as any).modal('toggle');
        Array.from(document.querySelectorAll('.owl-dots button'), function (el) {
            el.innerHTML = '';
            el.style.borderRadius = '50%';
        });
    };
    TestimonialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/pages/testimonial/testimonial.component.html"),
            encapsulation: 2,
            styles: [__webpack_require__(/*! ./testimonial.component.css */ "./src/app/pages/testimonial/testimonial.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    // ROOT_API: String = 'http://api.test.com:8000';
    //
    // ROOT: String = 'http://api.test.com:8000';
    // ROOT_API: String = 'http://192.168.0.187:8000/api';
    //
    // ROOT: String = 'http://192.168.0.187:8000';
    // ROOT_API: String = 'http://192.168.0.168:8001/api';
    // ROOT: String = 'http://192.168.0.168:8001';
    function ConfigService() {
        //ROOT_API: String = 'http://localhost:8000/api';
        //ROOT: String = 'http://localhost:8000';
        this.ROOT_API = 'https://api.cubetiqs.com';
        this.ROOT = 'https://api.cubetiqs.com';
    }
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http, config) {
        this.http = http;
        this.config = config;
    }
    DataService.prototype.GetService = function () {
        return this.http.get(this.config.ROOT_API + "/services");
        // return [
        //   {
        //     id: 1,
        //     name: 'Mark Zurckerberg',
        //     position: 'Founder, Facebook',
        //     comment: 'We move at fast pace. I\'m always working on something I am excited about.',
        //     img: '/assets/images/mz.jpg'
        //   },
        //   {
        //     id: 2,
        //     name: 'Mark Zurckerberg',
        //     position: 'Founder, Facebook',
        //     comment: 'We move at fast pace. I\'m always working on something I am excited about.',
        //     img: '/assets/images/mz.jpg'
        //   },
        //   {
        //     id: 3,
        //     name: 'Mark Zurckerberg',
        //     position: 'Founder, Facebook',
        //     comment: 'We move at fast pace. I\'m always working on something I am excited about.',
        //     img: '/assets/images/mz.jpg'
        //   },
        //   {
        //     id: 3,
        //     name: 'Mark Zurckerberg',
        //     position: 'Founder, Facebook',
        //     comment: 'We move at fast pace. I\'m always working on something I am excited about.',
        //     img: '/assets/images/mz.jpg'
        //   },
        //   {
        //     id: 3,
        //     name: 'Mark Zurckerberg',
        //     position: 'Founder, Facebook',
        //     comment: 'We move at fast pace. I\'m always working on something I am excited about.',
        //     img: '/assets/images/mz.jpg'
        //   },
        //   {
        //     id: 3,
        //     name: 'Mark Zurckerberg',
        //     position: 'Founder, Facebook',
        //     comment: 'We move at fast pace. I\'m always working on something I am excited about.',
        //     img: '/assets/images/mz.jpg'
        //   },
        // ];
    };
    DataService.prototype.GetClient = function () {
        return this.http.get(this.config.ROOT_API + "/clients");
        // return [
        //   {
        //     heading: 'POS Solution',
        //     icon: '/assets/images/services-1.jpg',
        //   },
        //   {
        //     heading: 'Enterprise Software Development',
        //     icon: '/assets/images/services-2.jpg',
        //   },
        //   {
        //     heading: 'web development',
        //     icon: '/assets/images/services-3.jpg',
        //   },
        //   {
        //     heading: 'customization',
        //     icon: '/assets/images/services-4.jpg',
        //   },
        //   {
        //     heading: 'maintainance & support',
        //     icon: '/assets/images/services-5.jpg',
        //   },
        // ];
    };
    DataService.prototype.getSolutions = function () {
        return this.http.get(this.config.ROOT_API + "/solutions");
        // return await this.http.get(`${this.config.ROOT_API}/solutions`)
        // return [
        //   {name : 'Restaurant', src: '/assets/ICON/restaurant.png'},
        //   {name : 'CAFE', src: '/assets/ICON/cafe_1.png'},
        //   {name : 'Hotel', src: '/assets/ICON/hotel.png'},
        //   {name : 'Apartment & Condo', src: '/assets/ICON/Condo_1.png'},
        //   {name : 'School', src: '/assets/ICON/school.png'},
        //   {name : 'Clinic', src: '/assets/ICON/heart.png'},
        //   {name : 'Retail & Wholesale', src: '/assets/ICON/retail_1.png'},
        //   {name : 'Vehicles Dealerships', src: '/assets/ICON/car.png'},
        //   {name : 'Electronic Store', src: '/assets/ICON/electronic.png'},
        //   {name : 'Gym & Sports Club', src: '/assets/ICON/gym.png'},
        //   {name : 'Spa & Salon', src: '/assets/ICON/spa2.png'},
        //   {name : 'Pawn Shop', src: '/assets/ICON/pawnshop.png'},
        //   {name : 'Loan', src: '/assets/ICON/loan.png'},
        //   {name : 'Money Exchange', src: '/assets/ICON/money%20transfer_1.png'},
        //   {name : 'Production', src: '/assets/ICON/production_1.png'},
        //
        // ];
    };
    DataService.prototype.getReason = function () {
        return this.http.get(this.config.ROOT_API + "/reasons");
        // return [
        //   {
        //     heading: 'High Quality Hardware',
        //     icon: '/assets/ICON/hardware.png',
        //     summary: 'We use top-notch hardware to develop the most efficient apps for our customers',
        //     desc: ''
        //   },
        //   {
        //     heading: 'Dedicated Support',
        //     icon: '/assets/ICON/Support.png',
        //     summary: 'You can rely on our tech support that will gladly solve any app issue you may have',
        //     desc: ''
        //   },
        //   {
        //     heading: 'We Take Security Seriously',
        //     icon: '/assets/ICON/security.png',
        //     summary: 'The Security of Your money and personal data is our utmost priority',
        //     desc: ''
        //   },
        //   {
        //     heading: 'Agile and Fast Working Style',
        //     icon: '/assets/ICON/speed.png',
        //     summary: 'This type of approach to our work helps our specialists to quickly develop better apps',
        //     desc: ''
        //   },
        //   {
        //     heading: 'High Level of Usability',
        //     icon: '/assets/ICON/like.png',
        //     summary: 'All our products have high usability allowing users to easily operate the apps',
        //     desc: ''
        //   },
        //   {
        //     heading: 'Scalable',
        //     icon: '/assets/ICON/store.png',
        //     summary: 'Meeting the demands of a growing business, We can quickly deployed in one store as easily as it can be in thousands',
        //     desc: ''
        //   },
        // ];
    };
    DataService.prototype.getPricing = function () {
        return [
            {
                title: 'ONE-TIME',
                desc: 'One time payment for a lifetime license.'
            },
            {
                title: 'Monthly',
                desc: 'Monthly Subscription <hr />Free support and updates'
            }
        ];
    };
    DataService.prototype.GetReviews = function () {
        return this.http.get(this.config.ROOT_API + "/reviews");
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelperService = /** @class */ (function () {
    function HelperService(titleService, router) {
        this.titleService = titleService;
        this.router = router;
    }
    HelperService.prototype.setTitle = function (text) {
        this.titleService.setTitle(text + " - CUBETIQ: Software Solutions for successful owners");
    };
    HelperService.prototype.link = function (url, payload) {
        if (url === void 0) { url = "/"; }
        if (payload === void 0) { payload = {}; }
        this.router.navigate([url]);
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HelperService);
    return HelperService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/DATA/Development/Projects/cubetiqs.com/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map