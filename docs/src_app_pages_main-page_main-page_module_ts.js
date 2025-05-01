"use strict";
(self["webpackChunkangular_tour_of_heroes"] = self["webpackChunkangular_tour_of_heroes"] || []).push([["src_app_pages_main-page_main-page_module_ts"],{

/***/ 5060:
/*!******************************************!*\
  !*** ./src/app/pages/main-page/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "EXPORTS": () => (/* binding */ EXPORTS),
/* harmony export */   "IMPORTS": () => (/* binding */ IMPORTS),
/* harmony export */   "SERVICES": () => (/* binding */ SERVICES)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 3837);
/* harmony import */ var _main_page_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.routing */ 6091);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);



const COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent, _components__WEBPACK_IMPORTED_MODULE_0__.HeroComponent, _components__WEBPACK_IMPORTED_MODULE_0__.TwoColumnWithImageComponent, _components__WEBPACK_IMPORTED_MODULE_0__.FeaturesComponent, _components__WEBPACK_IMPORTED_MODULE_0__.TestimonialsComponent, _components__WEBPACK_IMPORTED_MODULE_0__.BlogSectionComponent];
const IMPORTS = [_main_page_routing__WEBPACK_IMPORTED_MODULE_1__.MainPageRouting, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule];
const SERVICES = [];
const EXPORTS = [];

/***/ }),

/***/ 2287:
/*!*****************************************************!*\
  !*** ./src/app/pages/main-page/main-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 5060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 2476);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hero/hero.component */ 760);
/* harmony import */ var _components_two_column_with_image_two_column_with_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/two-column-with-image/two-column-with-image.component */ 55);
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/features/features.component */ 2478);
/* harmony import */ var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/testimonials/testimonials.component */ 9772);
/* harmony import */ var _components_blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/blog-section/blog-section.component */ 8816);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);










class MainPageModule {}
MainPageModule.ɵfac = function MainPageModule_Factory(t) {
  return new (t || MainPageModule)();
};
MainPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: MainPageModule
});
MainPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [...___WEBPACK_IMPORTED_MODULE_0__.SERVICES],
  imports: [___WEBPACK_IMPORTED_MODULE_0__.IMPORTS]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MainPageModule, {
    declarations: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent, _components_two_column_with_image_two_column_with_image_component__WEBPACK_IMPORTED_MODULE_3__.TwoColumnWithImageComponent, _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__.FeaturesComponent, _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_5__.TestimonialsComponent, _components_blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_6__.BlogSectionComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  });
})();

/***/ }),

/***/ 6091:
/*!******************************************************!*\
  !*** ./src/app/pages/main-page/main-page.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRouting": () => (/* binding */ MainPageRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 3837);


/*const mainPageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'landing-page',
        children: [
          {
            path: ':slug',
            component: MainPageComponent
          }
        ]
      }, {
        path: '',
        component: MainPageComponent
      }
    ]
  }
];*/
const mainPageRoutes = [{
  path: '',
  children: [{
    path: ':slug',
    children: [{
      path: ':type',
      component: _components__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent
    }, {
      path: '',
      component: _components__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent
    }]
  }, {
    path: '',
    component: _components__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent
  }]
}];
const MainPageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(mainPageRoutes);

/***/ })

}]);
//# sourceMappingURL=src_app_pages_main-page_main-page_module_ts.js.map