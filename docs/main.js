"use strict";
(self["webpackChunkangular_tour_of_heroes"] = self["webpackChunkangular_tour_of_heroes"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'angular-starter-buttercms';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 2050);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.module */ 4805);
/* harmony import */ var _pages_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/not-found/not-found.module */ 6470);










const _orig_prepareExternalUrl = _angular_common__WEBPACK_IMPORTED_MODULE_4__.PathLocationStrategy.prototype.prepareExternalUrl;
_angular_common__WEBPACK_IMPORTED_MODULE_4__.PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
  const url = _orig_prepareExternalUrl.call(this, internal);
  if (url === '') {
    return url;
  }
  if (url.includes('search/?') && url.endsWith('%2F')) {
    return url.slice(0, -3);
  }
  if (url.includes('search?')) {
    return url.replace('search?', 'search/?');
  }
  if (url.endsWith('/')) {
    return url;
  }
  return url + '/';
};
_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location.stripTrailingSlash = function (url) {
  const match = url.match(/#|\?|$/);
  const pathEndIdx = match && match.index || url.length;
  const droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
  const first = url.slice(0, droppedSlashIdx);
  const last = url.slice(pathEndIdx);
  return first + '/' + last;
};
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [...___WEBPACK_IMPORTED_MODULE_0__.SERVICES],
  imports: [___WEBPACK_IMPORTED_MODULE_0__.IMPORTS]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _pages_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__.NotFoundModule]
  });
})();

/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRouting": () => (/* binding */ appRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_not_found_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/not-found/components */ 732);


const mainRoutes = [{
  path: '404',
  component: _pages_not_found_components__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
}, {
  path: '**',
  redirectTo: '/404'
}];
const appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(mainRoutes);

/***/ }),

/***/ 2050:
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "IMPORTS": () => (/* binding */ IMPORTS),
/* harmony export */   "SERVICES": () => (/* binding */ SERVICES)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.module */ 4805);
/* harmony import */ var _pages_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/not-found/not-found.module */ 6470);






const COMPONENTS = [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent];
const IMPORTS = [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.appRouting, _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule, _pages_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__.NotFoundModule];
const SERVICES = [];

/***/ }),

/***/ 2223:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scroll-top/scroll-top.component */ 8693);



function FooterComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.label);
  }
}
class FooterComponent {
  constructor() {}
  get menuItems() {
    if (this.menuData) {
      return this.menuData.data.data.navigation_menu[0].menu_items;
    }
    return [];
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  inputs: {
    menuData: "menuData"
  },
  decls: 38,
  vars: 1,
  consts: [[1, "footer", "pt-120"], [1, "container"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6", "col-sm-10"], [1, "footer-widget"], [1, "logo"], ["href", "https://buttercms.com"], ["width", "200", "src", "https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6", "alt", "logo", "loading", "lazy"], [1, "desc"], [1, "social-links"], ["href", "#0"], [1, "lni", "lni-facebook"], [1, "lni", "lni-linkedin"], [1, "lni", "lni-instagram"], [1, "lni", "lni-twitter"], [1, "col-xl-5", "col-lg-4", "col-md-12", "col-sm-12", "offset-xl-1"], [1, "links"], [4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-lg-4", "col-md-6"], ["action", "#"], ["type", "email", "placeholder", "Email"], [1, "main-btn", "btn-hover"], [1, "page-scroll", "active", 3, "href"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ButterCMS is your content backend. Build better with Butter.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 9)(11, "li")(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15)(24, "div", 4)(25, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, FooterComponent_ng_container_28_Template, 4, 2, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18)(30, "div", 4)(31, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Subscribe Newsletter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "form", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "app-scroll-top");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_0__.ScrollTopComponent],
  encapsulation: 2
});

/***/ }),

/***/ 2176:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["navbarArea"];
const _c1 = function (a0) {
  return [a0];
};
const _c2 = function () {
  return ["active"];
};
function HeaderComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15)(2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_16_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onMenuItemClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.isActive(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, "/" + item_r2.url)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
  }
}
const _c3 = function (a1) {
  return {
    "navbar-toggler": true,
    "active": a1
  };
};
class HeaderComponent {
  constructor(router) {
    this.router = router;
    this.isSticky = false;
    this.toggler = false;
    this.onScroll();
  }
  ngOnInit() {
    this.activeUrl = this.router.url;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(event => {
      this.activeUrl = event.url;
    });
  }
  get menuItems() {
    if (this.menuData) {
      return this.menuData.data.data.navigation_menu[0].menu_items;
    }
    return [];
  }
  isActive(url) {
    if (url) {
      return url[0] === this.activeUrl;
    }
    return false;
  }
  onScroll() {
    if (this.navbarArea) {
      const sticky = this.navbarArea.nativeElement.offsetTop;
      this.isSticky = window.pageYOffset > sticky;
    } else {
      this.isSticky = false;
    }
    const sections = document.querySelectorAll('.page-scroll');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const de = document.documentElement;
    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const currLinkHref = currLink.getAttribute('href');
      const val = currLinkHref.replace('/', '');
      const refElement = document.querySelector(val);
      if (refElement) {
        const box = refElement.getBoundingClientRect();
        const top = box.top + window.pageYOffset - de.clientTop;
        const scrollTopMinus = scrollPos + 73;
        const h = refElement.getBoundingClientRect().height;
        if (refElement && top <= scrollTopMinus && top + h > scrollTopMinus) {
          this.activeUrl = '/' + currLinkHref;
        }
      }
    }
  }
  onTogglerClick() {
    this.toggler = !this.toggler;
  }
  onMenuItemClick() {
    this.toggler = false;
  }
  get isTogglerActive() {
    return this.toggler;
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarArea = _t.first);
    }
  },
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    menuData: "menuData"
  },
  decls: 17,
  vars: 8,
  consts: [[1, "header"], ["id", "", 1, "navbar-area"], ["navbarArea", ""], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-12"], [1, "navbar", "navbar-expand-lg"], [1, "navbar-brand"], ["src", "assets/images/LOGO/logo-2.png", "alt", "Logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 3, "ngClass", "click"], [1, "toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "sub-menu-bar"], [1, "ms-auto"], ["id", "nav", 1, "navbar-nav", "ms-auto"], [4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "page-scroll", 3, "routerLinkActive", "href", "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1, 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() {
        return ctx.onTogglerClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10)(11, "span", 10)(12, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "ul", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_ng_container_16_Template, 4, 8, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sticky", ctx.isSticky);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, ctx.isTogglerActive));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isTogglerActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  encapsulation: 2
});

/***/ }),

/***/ 8543:
/*!********************************************!*\
  !*** ./src/app/layout/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* reexport safe */ _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent),
/* harmony export */   "LayoutComponent": () => (/* reexport safe */ _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent),
/* harmony export */   "NoApiTokenComponent": () => (/* reexport safe */ _no_api_token_no_api_token_component__WEBPACK_IMPORTED_MODULE_4__.NoApiTokenComponent),
/* harmony export */   "ScrollTopComponent": () => (/* reexport safe */ _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__.ScrollTopComponent)
/* harmony export */ });
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 6144);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2176);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 2223);
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ 8693);
/* harmony import */ var _no_api_token_no_api_token_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-api-token/no-api-token.component */ 4479);






/***/ }),

/***/ 6144:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/layout/layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_buttercmssdk_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/buttercmssdk.service */ 4144);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 2176);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 2223);





class LayoutComponent {
  constructor(bCMSSDKService) {
    this.bCMSSDKService = bCMSSDKService;
  }
  ngOnInit() {
    this.menuData = {
      "data": {
        "data": {
          "navigation_menu": [{
            "menu_items": [{
              "label": "Home",
              "url": "/"
            }, {
              "label": "About Us",
              "url": "/About us"
            }, {
              "label": "Products",
              "url": "/products"
            }, {
              "label": "Contact Us",
              "url": "/contact"
            }, {
              "label": "Downloads",
              "url": "/downloads"
            }, {
              "label": "Carriers",
              "url": "/carrier"
            }]
          }]
        }
      }
    };
  }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_buttercmssdk_service__WEBPACK_IMPORTED_MODULE_0__.ButtercmssdkService));
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  decls: 13,
  vars: 2,
  consts: [["lang", "", 1, "no-js"], ["charset", "utf-8"], ["http-equiv", "x-ua-compatible", "content", "ie=edge"], ["name", "description", "content", "Sample Landing Page with Components - powered by ButterCMS"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [3, "menuData"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "html", 0)(1, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "meta", 1)(3, "meta", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sample Landing Page with Components - powered by ButterCMS");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "meta", 3)(7, "meta", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-header", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-footer", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuData", ctx.menuData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuData", ctx.menuData);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
  encapsulation: 2
});

/***/ }),

/***/ 4479:
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/no-api-token/no-api-token.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoApiTokenComponent": () => (/* binding */ NoApiTokenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NoApiTokenComponent {
  constructor() {}
  ngOnInit() {}
}
NoApiTokenComponent.ɵfac = function NoApiTokenComponent_Factory(t) {
  return new (t || NoApiTokenComponent)();
};
NoApiTokenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NoApiTokenComponent,
  selectors: [["app-no-api-token"]],
  decls: 17,
  vars: 0,
  consts: [["id", "home", 1, "hero-section"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-6", "col-lg-6", "col-md-10"], [1, "hero-content"], ["target", "_blank", "href", "https://buttercms.com/join/", 1, "main-btn", "btn-hover"], [1, "col-xxl-6", "col-xl-6", "col-lg-6"], ["width", "300", "src", "https://cdn.buttercms.com/9bPtzdJ6QSWkySNjlmyR", "alt", ""], [1, "hero-image", "text-center", "text-lg-end"]],
  template: function NoApiTokenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Configure your ButterCMS API Token");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please add your API token to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".env");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " file as NG_APP_ANGULAR_BUTTER_CMS_API_KEY.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Get your free API token");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7)(16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 8693:
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/scroll-top/scroll-top.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTopComponent": () => (/* binding */ ScrollTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


class ScrollTopComponent {
  constructor() {
    this.isVisible = false;
    this.onScroll();
  }
  getStyle() {
    return {
      display: this.isVisible ? 'flex' : 'none'
    };
  }
  onScroll() {
    this.isVisible = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
  }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) {
  return new (t || ScrollTopComponent)();
};
ScrollTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ScrollTopComponent,
  selectors: [["app-scroll-top"]],
  hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 2,
  vars: 1,
  consts: [["href", "#", 1, "scroll-top", "btn-hover", 3, "ngStyle"], [1, "lni", "lni-chevron-up"]],
  template: function ScrollTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getStyle());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  encapsulation: 2
});

/***/ }),

/***/ 328:
/*!*********************************!*\
  !*** ./src/app/layout/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "EXPORTS": () => (/* binding */ EXPORTS),
/* harmony export */   "IMPORTS": () => (/* binding */ IMPORTS),
/* harmony export */   "SERVICES": () => (/* binding */ SERVICES)
/* harmony export */ });
/* harmony import */ var _layout_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.routing */ 7532);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 8543);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _components__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ScrollTopComponent, _components__WEBPACK_IMPORTED_MODULE_1__.NoApiTokenComponent];
const IMPORTS = [_layout_routing__WEBPACK_IMPORTED_MODULE_0__.layoutRouting, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
const SERVICES = [];
const EXPORTS = [];

/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/layout.component */ 6144);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 2176);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 2223);
/* harmony import */ var _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scroll-top/scroll-top.component */ 8693);
/* harmony import */ var _components_no_api_token_no_api_token_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/no-api-token/no-api-token.component */ 4479);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);









class LayoutModule {}
LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};
LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [..._index__WEBPACK_IMPORTED_MODULE_0__.SERVICES],
  imports: [_index__WEBPACK_IMPORTED_MODULE_0__.IMPORTS]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__.ScrollTopComponent, _components_no_api_token_no_api_token_component__WEBPACK_IMPORTED_MODULE_5__.NoApiTokenComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
  });
})();

/***/ }),

/***/ 7532:
/*!******************************************!*\
  !*** ./src/app/layout/layout.routing.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layoutRouting": () => (/* binding */ layoutRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 8543);
/* harmony import */ var _pages_main_page_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/main-page/components */ 3837);



const layoutRoutes = [{
  path: '',
  component: _components__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  children: [{
    path: '',
    component: _pages_main_page_components__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
  }, {
    path: '',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_main-page_main-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/main-page/main-page.module */ 2287)).then(x => x.MainPageModule)
  }, {
    path: 'alldownloads',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_blog_blog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/blog/blog.module */ 6238)).then(x => x.BlogModule)
  }]
}];
const layoutRouting = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(layoutRoutes);

/***/ }),

/***/ 8816:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/blog-section/blog-section.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogSectionComponent": () => (/* binding */ BlogSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function BlogSectionComponent_ng_container_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", post_r1.featured_image_alt);
  }
}
function BlogSectionComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlogSectionComponent_ng_container_13_div_3_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10)(5, "h5", 11)(6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14)(10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogSectionComponent_ng_container_13_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const post_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onClick(post_r1.slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r1.featured_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", post_r1.summary, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
class BlogSectionComponent {
  constructor(router) {
    this.router = router;
  }
  onClick(slug) {
    this.router.navigate(['alldownloads', slug]);
  }
}
BlogSectionComponent.ɵfac = function BlogSectionComponent_Factory(t) {
  return new (t || BlogSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
BlogSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BlogSectionComponent,
  selectors: [["app-blog-section"]],
  inputs: {
    posts: "posts"
  },
  decls: 14,
  vars: 1,
  consts: [["id", "blog", 1, "blog-section"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-10"], [1, "section-title", "text-center"], ["routerLink", "alldownloads", 1, "main-btn", "btn-hover", "mt-5"], [4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-8", "col-sm-10"], [1, "single-blog"], ["class", "blog-header", 4, "ngIf"], [1, "blog-body"], [1, "package-name"], ["href", "#"], ["className", "single-post-body", 3, "innerHTML"], [1, "blog-footer"], [1, "main-btn", "btn-hover", 3, "click"], [1, "blog-header"], ["loading", "lazy", 1, "img-fluid", 3, "src", "alt"]],
  template: function BlogSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Latest Blog Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Butter also has a built in blog engine which makes it dead simple to launch a new company blog. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p")(10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View All Downloads ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BlogSectionComponent_ng_container_13_Template, 12, 3, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts.data.data);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 2478:
/*!***************************************************************************!*\
  !*** ./src/app/pages/main-page/components/features/features.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function FeaturesComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8)(2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", feature_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r1.description);
  }
}
class FeaturesComponent {
  constructor() {}
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) {
  return new (t || FeaturesComponent)();
};
FeaturesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FeaturesComponent,
  selectors: [["app-features"]],
  inputs: {
    fields: "fields"
  },
  decls: 12,
  vars: 4,
  consts: [[1, "feature-section", 3, "id"], [1, "container"], [1, "row"], [1, "col-lg-5", "col-md-10"], [1, "section-title", "mb-60"], [1, "mb-20"], [1, "col-lg-7"], [4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-6"], [1, "single-feature"], [1, "feature-icon"], ["alt", "", 3, "src"], [1, "feature-content"]],
  template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FeaturesComponent_ng_container_11_Template, 10, 3, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.fields.scroll_anchor_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fields.headline);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fields.subheadline);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields.features);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  encapsulation: 2
});

/***/ }),

/***/ 760:
/*!*******************************************************************!*\
  !*** ./src/app/pages/main-page/components/hero/hero.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroComponent": () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeroComponent {
  constructor() {}
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) {
  return new (t || HeroComponent)();
};
HeroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeroComponent,
  selectors: [["app-hero"]],
  inputs: {
    fields: "fields"
  },
  decls: 14,
  vars: 6,
  consts: [[1, "hero-section", 3, "id"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-6", "col-lg-6", "col-md-10"], [1, "hero-content"], ["target", "_blank", 1, "main-btn", "btn-hover", 3, "href"], [1, "col-xxl-6", "col-xl-6", "col-lg-6"], [1, "hero-image", "text-center", "text-lg-end"], ["alt", "", 3, "src"]],
  template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.fields.scroll_anchor_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fields.headline);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fields.subheadline);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.fields.button_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fields.button_label);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fields.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 3837:
/*!*****************************************************!*\
  !*** ./src/app/pages/main-page/components/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogSectionComponent": () => (/* reexport safe */ _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_1__.BlogSectionComponent),
/* harmony export */   "FeaturesComponent": () => (/* reexport safe */ _features_features_component__WEBPACK_IMPORTED_MODULE_2__.FeaturesComponent),
/* harmony export */   "HeroComponent": () => (/* reexport safe */ _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__.HeroComponent),
/* harmony export */   "MainPageComponent": () => (/* reexport safe */ _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent),
/* harmony export */   "TestimonialsComponent": () => (/* reexport safe */ _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_4__.TestimonialsComponent),
/* harmony export */   "TwoColumnWithImageComponent": () => (/* reexport safe */ _two_column_with_image_two_column_with_image_component__WEBPACK_IMPORTED_MODULE_5__.TwoColumnWithImageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page/main-page.component */ 2476);
/* harmony import */ var _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-section/blog-section.component */ 8816);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/features.component */ 2478);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero/hero.component */ 760);
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonials/testimonials.component */ 9772);
/* harmony import */ var _two_column_with_image_two_column_with_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./two-column-with-image/two-column-with-image.component */ 55);







/***/ }),

/***/ 2476:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/main-page/components/main-page/main-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/loader/loader.component */ 605);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero/hero.component */ 760);
/* harmony import */ var _two_column_with_image_two_column_with_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../two-column-with-image/two-column-with-image.component */ 55);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/features.component */ 2478);
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../testimonials/testimonials.component */ 9772);
/* harmony import */ var _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blog-section/blog-section.component */ 8816);








function MainPageComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-hero", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bodyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", bodyItem_r4.fields);
  }
}
function MainPageComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-two-column-with-image", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bodyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", bodyItem_r4.fields);
  }
}
function MainPageComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-features", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bodyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", bodyItem_r4.fields);
  }
}
function MainPageComponent_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-testimonials", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bodyItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", bodyItem_r4.fields);
  }
}
function MainPageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MainPageComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MainPageComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MainPageComponent_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, MainPageComponent_ng_container_1_ng_container_5_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const bodyItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", bodyItem_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "hero");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "two_column_with_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "products");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "testimonials");
  }
}
function MainPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-blog-section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("posts", ctx_r1.posts);
  }
}
function MainPageComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader");
  }
}
class MainPageComponent {
  ngOnInit() {
    // Hardcoded page content (sample structure matching your components):
    this.pageData = {
      body: [{
        type: 'hero',
        fields: {
          scroll_anchor_id: 'home',
          headline: 'Welcome to AS MANUFACTURING SOLUTIONS',
          subheadline: 'Building Trust Through Engineering Excellence and Precision Manufacturing.',
          button_url: '/inquiry',
          button_label: 'Inquiry Us',
          image: "assets/images/LOGO/logo-2.png"
        }
      }, {
        type: 'two_column_with_image',
        fields: {
          headline: 'About Us',
          subheadline: 'At AS Manufacturing Solutions, we believe that precision and innovation are the foundations of lasting success. Built on a deep commitment to engineering excellence, we deliver cutting-edge manufacturing solutions tailored to the evolving needs of modern industries. Our advanced facilities, expert craftsmanship, and customer-first approach enable us to turn complex ideas into reliable, high-quality products that drive performance and growth.Every solution we provide is a reflection of our core values — quality, precision, and partnership. From intricate machining components to large-scale production systems, we ensure that every detail meets the highest standards. Our team of skilled professionals works closely with clients to understand their challenges, innovate around their goals, and deliver solutions that empower their future.At AS Manufacturing Solutions, we are more than just manufacturers — we are collaborators, innovators, and problem-solvers, dedicated to helping industries build a stronger, smarter tomorrow.',
          image: "assets/images/LOGO/logo-2.png",
          button_url: '/inquiry',
          button_label: 'Know More'
        }
      }, {
        type: 'products',
        fields: {
          features: [{
            title: 'Feature One',
            description: 'Description of feature one.'
          }, {
            title: 'Feature Two',
            description: 'Description of feature two.'
          }, {
            title: 'Feature Three',
            description: 'Description of feature three.'
          }]
        }
      }, {
        type: 'testimonials',
        fields: {
          testimonials: [{
            quote: '“This product changed my life!”',
            author: 'Alice'
          }, {
            quote: '“Excellent service and support.”',
            author: 'Bob'
          }]
        }
      }
      // Note: We exclude 'blog_section' here because we handle it separately below.
      ]
    };
    // Hardcoded latest blog posts (2 sample posts):
    this.posts = {
      data: {
        data: [{
          title: 'Sample Post 1',
          slug: 'sample-post-1',
          summary: 'This is the first sample blog post summary.',
          featured_image: 'assets/post1.jpg',
          published: '2025-01-01'
        }, {
          title: 'Sample Post 2',
          slug: 'sample-post-2',
          summary: 'This is the second sample blog post summary.',
          featured_image: 'assets/post2.jpg',
          published: '2025-02-15'
        }]
      }
    };
  }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
  return new (t || MainPageComponent)();
};
MainPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MainPageComponent,
  selectors: [["app-main-page"]],
  decls: 5,
  vars: 2,
  consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["loading", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "fields"], [3, "posts"]],
  template: function MainPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MainPageComponent_ng_container_1_Template, 6, 5, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MainPageComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MainPageComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.pageData.body);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.posts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent, _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__.HeroComponent, _two_column_with_image_two_column_with_image_component__WEBPACK_IMPORTED_MODULE_2__.TwoColumnWithImageComponent, _features_features_component__WEBPACK_IMPORTED_MODULE_3__.FeaturesComponent, _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_4__.TestimonialsComponent, _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_5__.BlogSectionComponent],
  encapsulation: 2
});

/***/ }),

/***/ 9772:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/testimonials/testimonials.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsComponent": () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider */ 1977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function TestimonialsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.quote);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
  }
}
class TestimonialsComponent {
  constructor() {}
  ngAfterViewInit() {
    (0,tiny_slider__WEBPACK_IMPORTED_MODULE_0__.tns)({
      container: '.testimonial-active',
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 0,
      nav: false,
      navPosition: 'bottom',
      controls: true,
      controlsText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
      items: 1
    });
  }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) {
  return new (t || TestimonialsComponent)();
};
TestimonialsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TestimonialsComponent,
  selectors: [["app-testimonials"]],
  inputs: {
    fields: "fields"
  },
  decls: 10,
  vars: 3,
  consts: [[1, "testimonial-section", "mt-100", 3, "id"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-7", "col-lg-9"], [1, "testimonial-active-wrapper"], [1, "section-title", "text-center"], [1, "mb-20"], [1, "testimonial-active"], ["class", "single-testimonial", 4, "ngFor", "ngForOf"], [1, "single-testimonial"], [1, "quote"], [1, "lni", "lni-quotation"], [1, "content"], [1, "info"]],
  template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestimonialsComponent_div_9_Template, 11, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.fields.scroll_anchor_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fields.headline);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fields.testimonial);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  encapsulation: 2
});

/***/ }),

/***/ 55:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/two-column-with-image/two-column-with-image.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoColumnWithImageComponent": () => (/* binding */ TwoColumnWithImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TwoColumnWithImageComponent {
  constructor() {}
}
TwoColumnWithImageComponent.ɵfac = function TwoColumnWithImageComponent_Factory(t) {
  return new (t || TwoColumnWithImageComponent)();
};
TwoColumnWithImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TwoColumnWithImageComponent,
  selectors: [["app-two-column-with-image"]],
  inputs: {
    fields: "fields"
  },
  decls: 14,
  vars: 9,
  consts: [[1, "cta-section", 3, "id"], [1, "container"], [1, "row"], [1, "col-lg-6", "order-last", "order-lg-first"], [1, "cta-image", "left-image"], ["alt", "", 3, "src"], [1, "col-lg-6"], [1, "cta-content-wrapper"], [1, "section-title"], [1, "mb-20"], [3, "innerHTML"], ["target", "_blank", 1, "main-btn", "btn-hover", "border-btn", "mt-30", 3, "href"]],
  template: function TwoColumnWithImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.fields.scroll_anchor_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cta-image ", ctx.fields.image_position + "-image", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fields.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fields.headline);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.fields.subheadline, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.fields.button_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fields.button_label);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 732:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/components/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* reexport safe */ _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ 4547);


/***/ }),

/***/ 4547:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/not-found/components/not-found/not-found.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NotFoundComponent {
  constructor() {}
  ngOnInit() {
    console.error('Your Butter token might be set to an invalid value. Please verify your token is correct.');
  }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 12,
  vars: 0,
  consts: [["id", "home", 1, "hero-section"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-6", "col-lg-6", "col-md-10"], [1, "hero-content"], [1, "col-xxl-6", "col-xl-6", "col-lg-6"], ["width", "300", "src", "https://cdn.buttercms.com/9bPtzdJ6QSWkySNjlmyR", "alt", ""], [1, "hero-image", "text-center", "text-lg-end"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404 Page not found");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Check that your API token is correct and that the requested URL is valid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 8923:
/*!******************************************!*\
  !*** ./src/app/pages/not-found/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "EXPORTS": () => (/* binding */ EXPORTS),
/* harmony export */   "IMPORTS": () => (/* binding */ IMPORTS),
/* harmony export */   "SERVICES": () => (/* binding */ SERVICES)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 732);


const COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent];
const IMPORTS = [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule];
const SERVICES = [];
const EXPORTS = [];

/***/ }),

/***/ 6470:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 8923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 4547);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);




class NotFoundModule {}
NotFoundModule.ɵfac = function NotFoundModule_Factory(t) {
  return new (t || NotFoundModule)();
};
NotFoundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: NotFoundModule
});
NotFoundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [...___WEBPACK_IMPORTED_MODULE_0__.SERVICES],
  imports: [___WEBPACK_IMPORTED_MODULE_0__.IMPORTS]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NotFoundModule, {
    declarations: [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent],
    imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 4144:
/*!**************************************************!*\
  !*** ./src/app/services/buttercmssdk.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtercmssdkService": () => (/* binding */ ButtercmssdkService)
/* harmony export */ });
/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buttercms */ 7545);
/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class ButtercmssdkService {
  constructor(router) {
    this.router = router;
  }
  getButterCMS() {
    const butterCmsPreview =  false ? 0 : !( true || 0);
    return buttercms__WEBPACK_IMPORTED_MODULE_0___default()("sssssssssssss", butterCmsPreview);
  }
  navigateToNotFound() {
    this.router.navigate(['404']);
  }
}
ButtercmssdkService.ɵfac = function ButtercmssdkService_Factory(t) {
  return new (t || ButtercmssdkService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ButtercmssdkService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ButtercmssdkService,
  factory: ButtercmssdkService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7667:
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* reexport safe */ _loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent)
/* harmony export */ });
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/loader.component */ 605);


/***/ }),

/***/ 605:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoaderComponent {
  constructor() {}
  ngOnInit() {}
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)();
};
LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  decls: 9,
  vars: 0,
  consts: [[1, "preloader"], [1, "loader"], [1, "spinner"], [1, "spinner-container"], [1, "spinner-rotator"], [1, "spinner-left"], [1, "spinner-circle"], [1, "spinner-right"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "EXPORTS": () => (/* binding */ EXPORTS),
/* harmony export */   "IMPORTS": () => (/* binding */ IMPORTS),
/* harmony export */   "SERVICES": () => (/* binding */ SERVICES)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 7667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent];
const IMPORTS = [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule];
const SERVICES = [];
const EXPORTS = [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _components__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent];

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 1679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loader/loader.component */ 605);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [...___WEBPACK_IMPORTED_MODULE_0__.SERVICES],
  imports: [___WEBPACK_IMPORTED_MODULE_0__.IMPORTS, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map