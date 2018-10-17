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

/***/ "./src/app/about-us/about/about.component.html":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about/about.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"global--page-title\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 offset-lg-4\">\r\n          <h1 class=\"no-mb\">About Us</h1>\r\n          <h4 class=\"muted no-mb\">Some information about our restaurant</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section>\r\n  <div class=\"about__content\">\r\n    <div class=\"clearfix\">\r\n      <div class=\"about__summary\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7 left about__bg-image\"></div>\r\n            <div class=\"col-md-5 offset-md-7\">\r\n              <div class=\"rate\">\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\"></fa-icon>\r\n              </div>\r\n              <h2>\r\n                The best food in London!\r\n              </h2>\r\n              <p class=\"lead\">\r\n                Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem….\r\n              </p>\r\n              <p>\r\n                Nam eleifend elementum sapien et bibendum. Nunc ac diam efficitur, ultrices lorem quis, consectetur odio. Nullam vulputate, eros quis accumsan cursus, elit lectus bibendum nulla, sed dapibus ligula tellus at purus. Fusce id eros id mi cursus semper. Quisque efficitur bibendum nunc a consectetur. Maecenas vitae quam iaculis, scelerisque purus nec, varius purus. Nullam eget varius elit. Donec eget facilisis nunc, non rutrum lorem.\r\n              </p>\r\n              <h6>Mark Johnson, Chef</h6>\r\n              <img class=\"about__sign\" src=\"assets/images/sign-1.png\" alt=\"\">\r\n              <h4>What people say about Us?</h4>\r\n              <a href=\"\" class=\"btn btn-outline-primary\">\r\n                <span>Check our reviews</span>\r\n              </a>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"about__footer\">\r\n        <div parallax [config]=\"{initialValue: -200, ratio: .2}\" class=\"about__footer__image\"></div>\r\n        <div class=\"container about__footer__text-content\">\r\n          <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-8 push-lg-2\">\r\n                <h2>Check our promo video!</h2>\r\n                <h5 class=\"muted\">Book a table right now or make an online order!</h5>\r\n                <a href=\"\" class=\"btn btn-primary\">Subscribe</a>\r\n                <a href=\"\" class=\"btn btn-outline-primary\">Submit</a>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/about-us/about/about.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about/about.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about__summary {\n  margin: 0 0 0 1.5rem; }\n\n.about__bg-image {\n  background-image: url('bg-chef-1.jpg');\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: 0; }\n\n.about__sign {\n  margin: 2rem 0; }\n\n.about__footer {\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n  color: #FFF;\n  position: relative; }\n\n.about__footer__image {\n    background-image: url('bg-croissant-1.jpg');\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    z-index: 0; }\n\n.about__footer__text-content {\n    text-align: center; }\n\n.about__footer a {\n    margin-left: 2rem; }\n\nh2 {\n  font-size: 4.5rem;\n  font-weight: 100;\n  margin-bottom: 2rem; }\n\nh6 {\n  margin-top: 2rem; }\n\nsection {\n  position: relative; }\n\n.active {\n  color: #ebd072; }\n\n.rate {\n  font-size: 1.3rem;\n  margin-bottom: 3rem; }\n\n.rate > fa-icon {\n    margin-right: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXGFwcFxcYWJvdXQtdXNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXF92YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLHFCQUFvQixFQUFHOztBQUV6QjtFQUNFLHVDQUE2RDtFQUM3RCxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxZQUFXO0VBQ1gsYUFBWTtFQUNaLGlDQUFnQztFQUNoQyx1QkFBc0I7RUFDdEIsNkJBQTRCO0VBQzVCLFdBQVUsRUFBRzs7QUFFZjtFQUNFLGVBQWMsRUFBRzs7QUFFbkI7RUFDRSxrQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLFlBQVc7RUFDWCxtQkFBa0IsRUFpQk07O0FBZnhCO0lBQ0UsNENBQWtFO0lBQ2xFLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTztJQUNQLFlBQVc7SUFDWCxhQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLDZCQUE0QjtJQUM1QixXQUFVLEVBQUc7O0FBRWY7SUFDRSxtQkFBa0IsRUFBRzs7QUFsQnhCO0lBcUJHLGtCQUFpQixFQUFHOztBQUUxQjtFQUNFLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQUc7O0FBRXhCO0VBQ0UsaUJBQWdCLEVBQUc7O0FBRXJCO0VBQ0UsbUJBQWtCLEVBQUc7O0FBRXZCO0VBQ0UsZUNyRGMsRURxREc7O0FBRW5CO0VBQ0Usa0JBQWlCO0VBQ2pCLG9CQUFtQixFQUdPOztBQUw1QjtJQUtJLG9CQUFtQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9fdmFyaWFibGVzJztcblxuLmFib3V0IHtcblxuICAmX19zdW1tYXJ5IHtcbiAgICBtYXJnaW46IDAgMCAwIDEuNXJlbTsgfVxuXG4gICZfX2JnLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctY2hlZi0xLmpwZycpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHotaW5kZXg6IDA7IH1cblxuICAmX19zaWduIHtcbiAgICBtYXJnaW46IDJyZW0gMDsgfVxuXG4gICZfX2Zvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDhyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhyZW07XG4gICAgY29sb3I6ICNGRkY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWNyb2lzc2FudC0xLmpwZycpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB6LWluZGV4OiAwOyB9XG5cbiAgICAmX190ZXh0LWNvbnRlbnQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbiAgICAmIGEge1xuICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07IH0gfSB9XG5cbmgyIHtcbiAgZm9udC1zaXplOiA0LjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07IH1cblxuaDYge1xuICBtYXJnaW4tdG9wOiAycmVtOyB9XG5cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAkYWN0aXZlOyB9XG5cbi5yYXRlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG5cbiAgJj4gZmEtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTsgfSB9XG4iLCIkbWFpbi1kYXJrOiAjMjgyYjJlO1xuJHRleHQtY29sb3I6ICMzODNjNDA7XG4kY2FydC1jb2xvcjogI2JiYzRjNjtcbiRsaWdodC1iZ2M6ICNmM2Y0ZjQ7XG4kYWN0aXZlOiAjZWJkMDcyO1xuJHByaW1hcnk6ICNkZGFlNzE7XG4kbGluay1iZzogIzNlNDA0MztcbiJdfQ== */"

/***/ }),

/***/ "./src/app/about-us/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/about-us/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about-us/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.sass */ "./src/app/about-us/about/about.component.sass")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about-us/faq/faq.component.html":
/*!*************************************************!*\
  !*** ./src/app/about-us/faq/faq.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n<div class=\"global--page-title\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 offset-lg-4\">\r\n        <h1 class=\"mb-0\">FAQ</h1>\r\n        <h4 class=\"muted\">Some information about our restaurant</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <div class=\"content wrapper\">\r\n    <div class=\"clearfix\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n            <nav class=\"side-nav pt-4\">\r\n              <h5>\r\n                <fa-icon class=\"mr-3\" [icon]=\"faAlignJustify\"></fa-icon>\r\n                Pick a content\r\n              </h5>\r\n              <!-- TODO: Loop through the sidenav -->\r\n              <ul class=\"nav nav--vertical\">\r\n                <li class=\"nav-item\">\r\n                  <a href=\"\" class=\"nav--link\">General</a>\r\n                  <ul>\r\n                    <li class=\"nav-item\"><a class=\"nav-link sub-link\" href=\"#\">How does it work?</a></li>\r\n                    <li class=\"nav-item\"><a class=\"nav-link sub-link\" href=\"#\">How long does it take</a></li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n\r\n          <!-- TODO: Remove Duplications. -->\r\n          <!-- TODO: Fix the looping implementation. -->\r\n\r\n            <div class=\"col-md-8 offset-md-1\">\r\n              <div *ngFor=\"let faq of faqs\">\r\n                <h3 class=\"faq__title\">\r\n                  <fa-icon class=\"mr-4\" [icon]=\"faq.icon\"></fa-icon>\r\n                  {{ faq.title }}\r\n                </h3>\r\n                <hr>\r\n                <div class=\"pb-5\">\r\n                  <h4 class=\"faq__title\" >How does it work?</h4>\r\n                  <p class=\"lead\">\r\n                    Vivamus non euismod dui. Curabitur rhoncus massa sit amet nisi molestie lobortis. Nam quis neque nec odio vestibulum pulvinar sit amet sed enim.\r\n                  </p>\r\n                  <p>\r\n                    Sed lacus lacus, tincidunt a posuere sed, varius ut sapien. Vivamus nulla odio, scelerisque eu orci ut, tincidunt consequat ligula. Etiam ante felis, consequat vel accumsan vitae, gravida nec mauris. Maecenas vitae lobortis nisl. Donec lorem libero, vulputate sed arcu nec, sollicitudin vestibulum nisi.\r\n                  </p>\r\n                </div>\r\n                <div class=\"pb-5\">\r\n                  <h4 class=\"faq__title\" >How long does it take?</h4>\r\n                  <p class=\"lead\">\r\n                    Vivamus non euismod dui. Curabitur rhoncus massa sit amet nisi molestie lobortis. Nam quis neque nec odio vestibulum pulvinar sit amet sed enim.\r\n                  </p>\r\n                  <p>\r\n                    Sed lacus lacus, tincidunt a posuere sed, varius ut sapien. Vivamus nulla odio, scelerisque eu orci ut, tincidunt consequat ligula. Etiam ante felis, consequat vel accumsan vitae, gravida nec mauris. Maecenas vitae lobortis nisl. Donec lorem libero, vulputate sed arcu nec, sollicitudin vestibulum nisi.\r\n                  </p>\r\n                </div>\r\n                <div class=\"pb-3\"></div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/about-us/faq/faq.component.sass":
/*!*************************************************!*\
  !*** ./src/app/about-us/faq/faq.component.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".global--page-title {\n  background-color: #f3f4f4; }\n\nfa-icon {\n  color: #ddae71; }\n\n.nav--vertical {\n  font-size: 1rem; }\n\n.nav--vertical > li:not(:last-child) {\n    border-bottom: 1px solid #e0e0e0; }\n\n.nav--vertical li a {\n    font-weight: 500;\n    padding: .75rem 0;\n    display: block; }\n\n.wrapper {\n  padding: 7rem 0; }\n\n.faq__title {\n  font-weight: 300;\n  margin-top: 0;\n  margin-bottom: 2rem; }\n\n.sub-link {\n  padding: 0.2rem 0 !important;\n  font-size: 0.9rem;\n  opacity: .5; }\n\nh5 {\n  font-size: 1.4rem;\n  font-weight: 200; }\n\nh4 {\n  font-size: 1.75rem; }\n\nh3 {\n  font-size: 2.5rem; }\n\nhr {\n  margin: 3rem 0; }\n\np {\n  font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvZmFxL0M6XFxVc2Vyc1xcQWhtZWRcXERlc2t0b3BcXFByb2plY3RzXFxzb3VwLXJlc3RhdXJhbnQvc3JjXFxhcHBcXGFib3V0LXVzXFxmYXFcXGZhcS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYWJvdXQtdXMvZmFxL0M6XFxVc2Vyc1xcQWhtZWRcXERlc2t0b3BcXFByb2plY3RzXFxzb3VwLXJlc3RhdXJhbnQvc3JjXFxfdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwwQkNBaUIsRURBYzs7QUFFakM7RUFDRSxlQ0RlLEVEQ0c7O0FBRXBCO0VBSUUsZ0JBQWUsRUFLTTs7QUFUdkI7SUFFSSxpQ0FBZ0MsRUFBRzs7QUFGdkM7SUFPSSxpQkFBZ0I7SUFDaEIsa0JBQWlCO0lBQ2pCLGVBQWMsRUFBRzs7QUFFckI7RUFDRSxnQkFBZSxFQUFHOztBQUdsQjtFQUNFLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isb0JBQW1CLEVBQUc7O0FBRTFCO0VBQ0UsNkJBQTRCO0VBQzVCLGtCQUFpQjtFQUNqQixZQUFXLEVBQUc7O0FBRWhCO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUFHOztBQUVyQjtFQUNFLG1CQUFrQixFQUFHOztBQUV2QjtFQUNFLGtCQUFpQixFQUFHOztBQUV0QjtFQUNFLGVBQWMsRUFBRzs7QUFFbkI7RUFDRSxpQkFBZ0IsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2ZhcS9mYXEuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9fdmFyaWFibGVzJztcblxuLmdsb2JhbC0tcGFnZS10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iZ2M7IH1cblxuZmEtaWNvbiB7XG4gIGNvbG9yOiAkcHJpbWFyeTsgfVxuXG4ubmF2LS12ZXJ0aWNhbCB7XG4gICY+IGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwOyB9XG5cbiAgZm9udC1zaXplOiAxcmVtO1xuXG4gICYgbGkgYSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfSB9XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogN3JlbSAwOyB9XG5cbi5mYXEge1xuICAmX190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07IH0gfVxuXG4uc3ViLWxpbmsge1xuICBwYWRkaW5nOiAwLjJyZW0gMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogLjU7IH1cblxuaDUge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDsgfVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTsgfVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi41cmVtOyB9XG5cbmhyIHtcbiAgbWFyZ2luOiAzcmVtIDA7IH1cblxucCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbiIsIiRtYWluLWRhcms6ICMyODJiMmU7XG4kdGV4dC1jb2xvcjogIzM4M2M0MDtcbiRjYXJ0LWNvbG9yOiAjYmJjNGM2O1xuJGxpZ2h0LWJnYzogI2YzZjRmNDtcbiRhY3RpdmU6ICNlYmQwNzI7XG4kcHJpbWFyeTogI2RkYWU3MTtcbiRsaW5rLWJnOiAjM2U0MDQzO1xuIl19 */"

/***/ }),

/***/ "./src/app/about-us/faq/faq.component.ts":
/*!***********************************************!*\
  !*** ./src/app/about-us/faq/faq.component.ts ***!
  \***********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
        this.faFile = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"];
        this.faAlignJustify = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAlignJustify"];
        this.faqs = [
            { title: 'General', icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"] },
            { title: 'Delivery', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCube"] },
            { title: 'Payments', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faWallet"] }
        ];
    }
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/about-us/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.sass */ "./src/app/about-us/faq/faq.component.sass")]
        })
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/about-us/gallery/gallery.component.html":
/*!*********************************************************!*\
  !*** ./src/app/about-us/gallery/gallery.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 push-lg-4\">\r\n      <h1 class=\"no-mb\">Gallery</h1>\r\n      <h4 class=\"muted\">Some information about our restaurant</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n  <div class=\"clearfix\">\r\n    <!-- Reserved for carousel  -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about-us/gallery/gallery.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/about-us/gallery/gallery.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/about-us/gallery/gallery.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/about-us/gallery/gallery.component.ts ***!
  \*******************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
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

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/about-us/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.sass */ "./src/app/about-us/gallery/gallery.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/about-us/reviews/reviews.component.html":
/*!*********************************************************!*\
  !*** ./src/app/about-us/reviews/reviews.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"bg-image\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 push-lg-4\">\r\n        <h1 class=\"no-mb\">Reviews</h1>\r\n        <h4 class=\"muted\">Some information about our site</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"clearfix\">\r\n  <article>\r\n    <div class=\"row-fluid\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"container\">\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col-xl-8 push-xl-2\">\r\n              <!-- Reserved for blockquote components -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row-fluid\">\r\n      <!-- Reserved for Parallax Footer Component -->\r\n    </div>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about-us/reviews/reviews.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/about-us/reviews/reviews.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/about-us/reviews/reviews.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/about-us/reviews/reviews.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
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

var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/about-us/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.sass */ "./src/app/about-us/reviews/reviews.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/about-us/services/services.component.html":
/*!***********************************************************!*\
  !*** ./src/app/about-us/services/services.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 offset-lg-4 global--page-title\">\r\n      <h1 class=\"no-mb\">Services</h1>\r\n      <h4 class=\"muted\">Services we provide at our restaurant</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section>\r\n  <div class=\"clearfix\">\r\n    <div class=\"container-fluid\">\r\n      <div *ngFor=\"let service of serviceList; let i = index\" class=\"row service\">\r\n            <div class=\"col-md-4\" [class.second]=\"isEven(i)\">\r\n              <h2>{{ service.title }}</h2>\r\n              <p>{{ service.text }}</p>\r\n              <a href=\"\" class=\"btn btn-outline-primary\">Book Service</a>\r\n            </div>\r\n            <div class=\" col-md-8\" [class.first]=\"isEven(i)\">\r\n              <div class=\"bg-image\" [ngStyle]=\"service.image\"></div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/about-us/services/services.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/about-us/services/services.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: 0; }\n\n.first {\n  order: 1; }\n\n.second {\n  order: 2; }\n\n.relative {\n  position: relative; }\n\n.service {\n  margin: 2rem 0;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvc2VydmljZXMvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXGFwcFxcYWJvdXQtdXNcXHNlcnZpY2VzXFxzZXJ2aWNlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUNBQWdDO0VBQ2hDLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsV0FBVSxFQUFHOztBQUVmO0VBQ0UsU0FBUSxFQUFHOztBQUViO0VBQ0UsU0FBUSxFQUFHOztBQUViO0VBQ0UsbUJBQWtCLEVBQUc7O0FBRXZCO0VBQ0UsZUFBYztFQUNkLG1CQUFrQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJnLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiAwOyB9XG5cbi5maXJzdCB7XG4gIG9yZGVyOiAxOyB9XG5cbi5zZWNvbmQge1xuICBvcmRlcjogMjsgfVxuXG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnNlcnZpY2Uge1xuICBtYXJnaW46IDJyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/about-us/services/services.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/about-us/services/services.component.ts ***!
  \*********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        this.serviceList = [
            { title: 'Birthdays', text: this.description, image: { 'background-image': "url('../../../assets/images/service-birthday.jpg')" } },
            { title: 'Engagements', text: this.description, image: { 'background-image': "url('../../../assets/images/service-engagement.jpg')" } },
            { title: 'Weddings', text: this.description, image: { 'background-image': "url('../../../assets/images/service-weddings.jpg')" } }
        ];
    }
    ServicesComponent.prototype.isEven = function (index) {
        if (index % 2 === 0 || index === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/about-us/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.sass */ "./src/app/about-us/services/services.component.sass")]
        })
    ], ServicesComponent);
    return ServicesComponent;
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"clearfix\">\r\n  <div class=\"content\">\r\n    <!-- <app-about></app-about> -->\r\n    <!-- <app-services></app-services> -->\r\n    <!-- <app-special-offers></app-special-offers> -->\r\n    <app-main></app-main>\r\n    <app-summary></app-summary>\r\n    <app-promo-video></app-promo-video>\r\n    <!-- <app-contact></app-contact> -->\r\n    <!-- <app-faq></app-faq> -->\r\n    <!-- <app-book-a-table></app-book-a-table> -->\r\n    <!-- <app-grid-navigation></app-grid-navigation> -->\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  overflow: inherit;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4iXX0= */"

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
        this.title = 'soup-restaurant';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
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
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-parallax */ "./node_modules/ngx-parallax/dist/bundle.js");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_parallax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/main/main.component */ "./src/app/home/main/main.component.ts");
/* harmony import */ var _home_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/summary/summary.component */ "./src/app/home/summary/summary.component.ts");
/* harmony import */ var _home_promo_video_promo_video_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/promo-video/promo-video.component */ "./src/app/home/promo-video/promo-video.component.ts");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _home_our_menu_our_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/our-menu/our-menu.component */ "./src/app/home/our-menu/our-menu.component.ts");
/* harmony import */ var _about_us_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us/about/about.component */ "./src/app/about-us/about/about.component.ts");
/* harmony import */ var _about_us_services_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-us/services/services.component */ "./src/app/about-us/services/services.component.ts");
/* harmony import */ var _about_us_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about-us/gallery/gallery.component */ "./src/app/about-us/gallery/gallery.component.ts");
/* harmony import */ var _about_us_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about-us/reviews/reviews.component */ "./src/app/about-us/reviews/reviews.component.ts");
/* harmony import */ var _about_us_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about-us/faq/faq.component */ "./src/app/about-us/faq/faq.component.ts");
/* harmony import */ var _more_book_a_table_book_a_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./more/book-a-table/book-a-table.component */ "./src/app/more/book-a-table/book-a-table.component.ts");
/* harmony import */ var _menu_grid_navigation_grid_navigation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu/grid-navigation/grid-navigation.component */ "./src/app/menu/grid-navigation/grid-navigation.component.ts");
/* harmony import */ var _menu_list_navigation_list_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu/list-navigation/list-navigation.component */ "./src/app/menu/list-navigation/list-navigation.component.ts");
/* harmony import */ var _more_blog_blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./more/blog/blogpost/blogpost.component */ "./src/app/more/blog/blogpost/blogpost.component.ts");
/* harmony import */ var _more_blog_blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./more/blog/blogs-page/blogs-page.component */ "./src/app/more/blog/blogs-page/blogs-page.component.ts");
/* harmony import */ var _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./special-offers/special-offers.component */ "./src/app/special-offers/special-offers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
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
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _home_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _home_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"],
                _home_promo_video_promo_video_component__WEBPACK_IMPORTED_MODULE_10__["PromoVideoComponent"],
                _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _home_our_menu_our_menu_component__WEBPACK_IMPORTED_MODULE_12__["OurMenuComponent"],
                _about_us_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _about_us_services_services_component__WEBPACK_IMPORTED_MODULE_14__["ServicesComponent"],
                _about_us_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__["GalleryComponent"],
                _about_us_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ReviewsComponent"],
                _about_us_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__["FaqComponent"],
                _more_book_a_table_book_a_table_component__WEBPACK_IMPORTED_MODULE_18__["BookATableComponent"],
                _menu_grid_navigation_grid_navigation_component__WEBPACK_IMPORTED_MODULE_19__["GridNavigationComponent"],
                _menu_list_navigation_list_navigation_component__WEBPACK_IMPORTED_MODULE_20__["ListNavigationComponent"],
                _more_blog_blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_21__["BlogpostComponent"],
                _more_blog_blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_22__["BlogsPageComponent"],
                _special_offers_special_offers_component__WEBPACK_IMPORTED_MODULE_23__["SpecialOffersComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                ngx_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"global--page-title\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 offset-lg-4\">\r\n          <h1 class=\"mb-0\">Contact</h1>\r\n          <h4 class=\"muted\">Some information about our restaurant</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"clearfix container\">\r\n    <div class=\"row-fluid full-width\">\r\n      <article>\r\n        <div class=\"col-sm-5 offset-lg-1 full-width\">\r\n          <div class=\"wrapper\">\r\n            <img class=\"mb-5\" src=\"assets/images/logo-horizontal-dark-1.png\" alt=\"Logo\">\r\n            <h4 class=\"mb-0\">Soup Restaurant</h4>\r\n            <span class=\"muted\">\r\n              Green Street 22, New York\r\n            </span>\r\n            <hr class=\"hr-md\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 mb-3 mb-sm-0\">\r\n                <h6 class=\"muted mb-1\">Phone:</h6>\r\n                +48 21200 2122 221\r\n              </div>\r\n              <div class=\"col-sm-6 mb-3 mb-sm-0\">\r\n                <h6 class=\"muted mb-1\">E-mail:</h6>\r\n                Example@example.com\r\n              </div>\r\n            </div>\r\n            <hr class=\"hr-md\">\r\n            <h6 class=\"muted mb-1\">Follow Us!</h6>\r\n            <a [href]=\"link.url\" class=\"icon__social {{ link.class }}\" *ngFor=\"let link of socialMedia\">\r\n              <fa-icon [icon]=\"link.icon\"></fa-icon>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6 custom-container full-width\">\r\n          <div class=\"google-maps\">\r\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.3822633516243!2d31.46230554969261!3d30.87596568149707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f78ff2481142c7%3A0xd44fbadb28395b3d!2sSobhy+Hashim+St%2C+El-Senbellawein+City%2C+El-Senbellawein%2C+Dakahlia+Governorate!5e0!3m2!1sen!2seg!4v1539506693257\" width=\"445\" height=\"500\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n          </div>\r\n        </div>\r\n      </article>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.sass":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".global--page-title {\n  background-color: #f3f4f4; }\n\nimg {\n  height: auto;\n  width: 130px; }\n\narticle {\n  padding-top: 40px;\n  margin-bottom: 6rem; }\n\n.full-width {\n  width: 100%; }\n\n.google-maps {\n  position: relative; }\n\n.custom-container {\n  padding-left: 15px;\n  padding-right: 110px;\n  display: inline-block;\n  top: 50px; }\n\n.offset-lg-1 {\n  padding: 80px 110px 0 20px;\n  margin-right: 0;\n  display: inline-block; }\n\n.wrapper {\n  align-items: center; }\n\n.icon {\n  padding: 0 15px;\n  width: 25%;\n  margin-bottom: 2.4rem; }\n\n.icon__social {\n    background-color: #bbc4c6;\n    color: #FFF;\n    height: 30px;\n    font-size: 12px;\n    border-radius: 50%;\n    text-align: center;\n    width: 30px;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    transition: all .2s ease-in-out;\n    margin-right: 4px; }\n\n.icon__social > fa-icon {\n      line-height: 30px; }\n\n.icon__social__facebook:hover {\n      background-color: #213553; }\n\n.icon__social__google:hover {\n      background-color: #d04f3e; }\n\n.icon__social__twitter:hover {\n      background-color: #3aa8db; }\n\n.icon__social__youtube:hover {\n      background-color: #ed4533; }\n\n.icon__social__instagram:hover {\n      background-color: #4f86ac; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEFobWVkXFxEZXNrdG9wXFxQcm9qZWN0c1xcc291cC1yZXN0YXVyYW50L3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb250YWN0L0M6XFxVc2Vyc1xcQWhtZWRcXERlc2t0b3BcXFByb2plY3RzXFxzb3VwLXJlc3RhdXJhbnQvc3JjXFxfdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwwQkNBaUIsRURBYzs7QUFFakM7RUFDRSxhQUFZO0VBQ1osYUFBWSxFQUFHOztBQUVqQjtFQUNFLGtCQUFpQjtFQUNqQixvQkFBbUIsRUFBRzs7QUFFeEI7RUFDRSxZQUFXLEVBQUc7O0FBRWhCO0VBQ0UsbUJBQWtCLEVBQUc7O0FBR3ZCO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixzQkFBcUI7RUFDckIsVUFBUyxFQUFHOztBQUVkO0VBQ0UsMkJBQTBCO0VBQzFCLGdCQUFlO0VBQ2Ysc0JBQXFCLEVBQUc7O0FBRTFCO0VBQ0Usb0JBQW1CLEVBQUc7O0FBRXhCO0VBQ0UsZ0JBQWU7RUFDZixXQUFVO0VBQ1Ysc0JBQXFCLEVBaUNtQjs7QUEvQnhDO0lBQ0UsMEJDdENnQjtJRHVDaEIsWUFBVztJQUNYLGFBQVk7SUFDWixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsdUJBQXNCO0lBQ3RCLGdDQUErQjtJQUMvQixrQkFBaUIsRUFtQm1COztBQS9CckM7TUFlRyxrQkFBaUIsRUFBRzs7QUFFckI7TUFFRywwQkFBeUIsRUFBRzs7QUFDL0I7TUFFRywwQkFBeUIsRUFBRzs7QUFDL0I7TUFFRywwQkFBeUIsRUFBRzs7QUFDL0I7TUFFRywwQkFBeUIsRUFBRzs7QUFDL0I7TUFFRywwQkFBeUIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL192YXJpYWJsZXMnO1xuXG4uZ2xvYmFsLS1wYWdlLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJnYzsgfVxuXG5pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMzBweDsgfVxuXG5hcnRpY2xlIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDZyZW07IH1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZ29vZ2xlLW1hcHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuXG4uY3VzdG9tLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdG9wOiA1MHB4OyB9XG5cbi5vZmZzZXQtbGctMSB7XG4gIHBhZGRpbmc6IDgwcHggMTEwcHggMCAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmljb24ge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcblxuICAmX19zb2NpYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJ0LWNvbG9yO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcblxuICAgICY+IGZhLWljb24ge1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7IH1cblxuICAgICZfX2ZhY2Vib29rIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzNTUzOyB9IH1cbiAgICAmX19nb29nbGUge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMDRmM2U7IH0gfVxuICAgICZfX3R3aXR0ZXIge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYWE4ZGI7IH0gfVxuICAgICZfX3lvdXR1YmUge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDQ1MzM7IH0gfVxuICAgICZfX2luc3RhZ3JhbSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRmODZhYzsgfSB9IH0gfVxuIiwiJG1haW4tZGFyazogIzI4MmIyZTtcbiR0ZXh0LWNvbG9yOiAjMzgzYzQwO1xuJGNhcnQtY29sb3I6ICNiYmM0YzY7XG4kbGlnaHQtYmdjOiAjZjNmNGY0O1xuJGFjdGl2ZTogI2ViZDA3MjtcbiRwcmltYXJ5OiAjZGRhZTcxO1xuJGxpbmstYmc6ICMzZTQwNDM7XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.socialMedia = [
            { class: 'icon__social__facebook', url: 'http://fb.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"] },
            { class: 'icon__social__google', url: 'http://gp.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGoogle"] },
            { class: 'icon__social__twitter', url: 'http://tw.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"] },
            { class: 'icon__social__youtube', url: 'http://yt.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"] },
            { class: 'icon__social__instagram', url: 'http://ins.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"] }
        ];
    }
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.sass */ "./src/app/contact/contact.component.sass")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"default logo\">\r\n          <a href=\"\">\r\n            <img src=\"{{ logoPath }}\" alt=\"Logo\" width=\"88\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-7\">\r\n        <nav class=\"left default\">\r\n          <ul class=\"nav\">\r\n            <li *ngFor=\"let item of list\" class=\"{{ item.class }}\" >\r\n              <div *ngIf=\"item.dropdownList; then dropdown else noDropdown\"></div>\r\n              <ng-template #dropdown><a href=\"\">{{ item.name }} <span><img class=\"arrow\" src=\"{{ arrowPath }}\" alt=\"Arrow pointing down\"></span></a></ng-template>\r\n              <ng-template #noDropdown><a href=\"\">{{ item.name }} </a></ng-template>\r\n\r\n                <div *ngIf=\"item.hasDropdown\" class=\"dropdown-container\">\r\n                  <ul>\r\n                    <li *ngFor=\"let dropdown of item.dropdownList\" class=\"menu-item list-item\">\r\n                      <a href=\"\">{{ dropdown }}</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <a class=\"default right\" href=\"\">\r\n          <div>\r\n            <span class=\"cart\">\r\n              <img class=\"cart-icon\" src=\"{{ cartPath }}\" alt=\"Shopping Cart\">\r\n              <span class=\"notification\">4</span>\r\n            </span>\r\n            <span class=\"cart-value\">$247.00</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<div class=\"cleafix\"></div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.sass":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: #FFF;\n  display: block;\n  position: relative;\n  width: 100%;\n  z-index: 999; }\n\nnav {\n  padding-top: 27.5px;\n  padding-bottom: 27.5px;\n  text-transform: uppercase;\n  margin-right: 1.5rem; }\n\nul {\n  font-family: \"Oswald\", sans-serif; }\n\nul > li:not(:last-child) {\n    margin-right: 1.5rem; }\n\nimg {\n  max-width: 150px; }\n\n.arrow {\n  width: 15px;\n  height: 12px;\n  opacity: .6; }\n\n.logo {\n  background-color: #282b2e;\n  position: absolute;\n  top: 0;\n  text-align: center;\n  padding: 5rem 2rem;\n  color: #FFF;\n  left: 15px;\n  right: 15px; }\n\n.default {\n  display: inline-block;\n  line-height: 45px; }\n\n.default:not(.logo) {\n    padding-top: 27.5px;\n    padding-bottom: 27.5px; }\n\n.dropdown-container {\n  top: calc(100% + 45px);\n  left: 0;\n  position: absolute;\n  background-color: #fff;\n  transition: all .25s ease-out;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n  color: #383c40;\n  opacity: 0;\n  visibility: hidden;\n  text-align: left; }\n\n.cart {\n  position: relative; }\n\n.cart-icon {\n  color: #bbc4c6;\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  opacity: .6; }\n\n.cart-value {\n  font-size: 1.4rem;\n  font-family: \"Oswald\", sans-serif;\n  border-left: 1px solid #e0e0e0;\n  margin-left: .5rem;\n  padding-left: .75rem;\n  transition: all .25s ease-out; }\n\n.notification {\n  position: absolute;\n  top: -.6rem;\n  right: 0;\n  background-color: #4aa36b;\n  color: #FFF;\n  font-weight: 600;\n  font-size: .7rem;\n  display: inline-block;\n  border-radius: 30px;\n  padding: 0.15rem 0.3rem 0.2rem 0.35rem;\n  line-height: 1; }\n\n.notification ul {\n    list-style: none;\n    padding: 5px;\n    margin: 0;\n    line-height: 1.5;\n    width: 200px;\n    background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcQWhtZWRcXERlc2t0b3BcXFByb2plY3RzXFxzb3VwLXJlc3RhdXJhbnQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXF92YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZLEVBQUc7O0FBRWpCO0VBQ0Usb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUN0QiwwQkFBeUI7RUFDekIscUJBQW9CLEVBQUc7O0FBRXpCO0VBQ0Usa0NBQWlDLEVBR047O0FBSjdCO0lBSUkscUJBQW9CLEVBQUc7O0FBRzNCO0VBQ0UsaUJBQWdCLEVBQUc7O0FBRXJCO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixZQUFXLEVBQUc7O0FBRWhCO0VBQ0UsMEJDL0JpQjtFRGdDakIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsWUFBVyxFQUFHOztBQUVoQjtFQUNFLHNCQUFxQjtFQUNyQixrQkFBaUIsRUFJWTs7QUFOL0I7SUFLSSxvQkFBbUI7SUFDbkIsdUJBQXNCLEVBQUc7O0FBRTdCO0VBQ0UsdUJBQXNCO0VBQ3RCLFFBQU87RUFDUCxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLDhCQUE2QjtFQUM3QixvQ0FBMkI7VUFBM0IsNEJBQTJCO0VBQzNCLGVDdERrQjtFRHVEbEIsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFBRzs7QUFFckI7RUFDRSxtQkFBa0IsRUFBRzs7QUFFdkI7RUFDRSxlQzlEa0I7RUQrRGxCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVcsRUFBRzs7QUFFaEI7RUFDRSxrQkFBaUI7RUFDakIsa0NBQWlDO0VBQ2pDLCtCQUE4QjtFQUM5QixtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLDhCQUE2QixFQUFHOztBQUVsQztFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsU0FBUTtFQUNSLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLHVDQUFzQztFQUN0QyxlQUFjLEVBUWU7O0FBbkIvQjtJQWNJLGlCQUFnQjtJQUNoQixhQUFZO0lBQ1osVUFBUztJQUNULGlCQUFnQjtJQUNoQixhQUFZO0lBQ1osdUJBQXNCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL192YXJpYWJsZXNcIjtcblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTsgfVxuXG5uYXYge1xuICBwYWRkaW5nLXRvcDogMjcuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjcuNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTsgfVxuXG51bCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuXG4gICY+bGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07IH0gfVxuXG5cbmltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7IH1cblxuLmFycm93IHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTJweDtcbiAgb3BhY2l0eTogLjY7IH1cblxuLmxvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1kYXJrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cmVtIDJyZW07XG4gIGNvbG9yOiAjRkZGO1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDsgfVxuXG4uZGVmYXVsdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG5cbiAgJjpub3QoLmxvZ28pIHtcbiAgICBwYWRkaW5nLXRvcDogMjcuNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNy41cHg7IH0gfVxuXG4uZHJvcGRvd24tY29udGFpbmVyIHtcbiAgdG9wOiBjYWxjKDEwMCUgKyA0NXB4KTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4uY2FydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uY2FydC1pY29uIHtcbiAgY29sb3I6ICRjYXJ0LWNvbG9yO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG9wYWNpdHk6IC42OyB9XG5cbi5jYXJ0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAuNzVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2Utb3V0OyB9XG5cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLS42cmVtO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhYTM2YjtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogLjdyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMC4xNXJlbSAwLjNyZW0gMC4ycmVtIDAuMzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfSB9XG4iLCIkbWFpbi1kYXJrOiAjMjgyYjJlO1xuJHRleHQtY29sb3I6ICMzODNjNDA7XG4kY2FydC1jb2xvcjogI2JiYzRjNjtcbiRsaWdodC1iZ2M6ICNmM2Y0ZjQ7XG4kYWN0aXZlOiAjZWJkMDcyO1xuJHByaW1hcnk6ICNkZGFlNzE7XG4kbGluay1iZzogIzNlNDA0MztcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.logoPath = 'assets/logo.svg';
        this.arrowPath = 'assets/arrow-down.svg';
        this.cartPath = 'assets/shopping-cart.svg';
        this.list = [
            {
                class: 'menu-item has-dropdown', name: 'home', hasDropdown: true, dropdownList: [
                    'home basic',
                    'home fullwidth slider',
                    'home home video'
                ]
            },
            { class: 'menu-item has-dropdown', name: 'about', hasDropdown: true, dropdownList: [
                    'about us',
                    'services',
                    'gallery',
                    'reviews',
                    'faq'
                ] },
            { class: 'menu-item has-dropdown', name: 'menu', hasDropdown: true, dropdownList: [
                    'list',
                    'grid'
                ] },
            { class: 'menu-item', name: 'offers', hasDropdown: false },
            { class: 'menu-item', name: 'contact', hasDropdown: false },
            { class: 'menu-item has-dropdown', name: 'more', hasDropdown: true, dropdownList: [
                    'book a table',
                    'blog',
                    'blog + sidebar',
                    'blog post'
                ] }
        ];
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/header/header.component.sass")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <div class=\"footer__first-row row\">\r\n      <div class=\"footer__icon\">\r\n        <div class=\"center\">\r\n          <a href=\"#\">\r\n            <img src=\"assets/images/logo-light.png\" alt=\"Logo\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer__entries\">\r\n        <h5>Latest News</h5>\r\n        <ul>\r\n          <li *ngFor=\"let item of newsList\">\r\n            <a href=\"#\" class=\"title\">{{ item.title }}</a>\r\n            <span class=\"date\">{{ item.date }}<fa-icon [icon]=\"faArrowRight\"></fa-icon></span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"footer__newsletter\">\r\n        <h5>Subscribe</h5>\r\n        <form method=\"post\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control footer__text\" placeholder=\"Type your E-mail...\">\r\n            <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-primary btn-submit footer__btn\" type=\"submit\" name=\"submit\">subscribe</button>\r\n            </span>\r\n          </div>\r\n        </form>\r\n        <h5 class=\"mb-3 mt-3\">Social Media</h5>\r\n        <a [href]=\"link.url\" class=\"footer__icon__social {{ link.class }}\" *ngFor=\"let link of socialMedia\">\r\n          <fa-icon [icon]=\"link.icon\"></fa-icon>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer__second-row\">\r\n      <span class=\"muted\">Copyright Soup 2017 ©. Made with love by ThemeBeer.</span>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/home/footer/footer.component.sass":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\nfooter {\n  background-color: #282b2e; }\n\nh5 {\n  color: rgba(243, 244, 244, 0.5);\n  font-size: 1.4rem;\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\n\nimg {\n  margin-bottom: 3rem;\n  margin-top: 3rem;\n  width: 6.2rem;\n  max-width: 100%; }\n\ninput {\n  font-weight: 300;\n  padding: 1rem;\n  border: 2px solid #e0e0e0;\n  box-shadow: inset 1px 1px 2px 0 rgba(40, 43, 46, 0.06);\n  border-radius: 0;\n  height: 47.5px; }\n\nli {\n  margin-bottom: 1.5rem;\n  line-height: 1.2; }\n\nli a {\n    color: #FFF;\n    font-size: 1rem;\n    display: block; }\n\nli span {\n    color: rgba(243, 244, 244, 0.5);\n    font-size: .85rem; }\n\nli span fa-icon {\n      margin-left: 8px; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.footer__btn {\n  margin: 0; }\n\n.footer__first-row {\n  padding-top: 5.5rem;\n  padding-bottom: 5.5rem; }\n\n.footer__second-row {\n  font-size: .9rem;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.12); }\n\n.footer__entries {\n  width: 33.3%;\n  padding: 0 15px;\n  margin-bottom: 2.4rem; }\n\n.footer__icon {\n  padding: 0 15px;\n  width: 25%;\n  margin-bottom: 2.4rem; }\n\n.footer__icon__social {\n    background-color: #3e4043;\n    color: #FFF;\n    height: 30px;\n    font-size: 12px;\n    border-radius: 50%;\n    text-align: center;\n    width: 30px;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    transition: all .2s ease-in-out;\n    margin-right: 4px; }\n\n.footer__icon__social > fa-icon {\n      line-height: 30px; }\n\n.footer__icon__social__facebook:hover {\n      background-color: #213553; }\n\n.footer__icon__social__google:hover {\n      background-color: #d04f3e; }\n\n.footer__icon__social__twitter:hover {\n      background-color: #3aa8db; }\n\n.footer__icon__social__youtube:hover {\n      background-color: #ed4533; }\n\n.footer__icon__social__instagram:hover {\n      background-color: #4f86ac; }\n\n.footer__newsletter {\n  padding: 0 15px;\n  width: 41.666667%;\n  margin-bottom: 2.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290ZXIvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXGFwcFxcaG9tZVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2hvbWUvZm9vdGVyL0M6XFxVc2Vyc1xcQWhtZWRcXERlc2t0b3BcXFByb2plY3RzXFxzb3VwLXJlc3RhdXJhbnQvc3JjXFxfdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBa0IsRUFBRzs7QUFFdkI7RUFDRSwwQkNOaUIsRURNYzs7QUFFakM7RUFDRSxnQ0NOaUI7RURPakIsa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQUc7O0FBRXJCO0VBQ0Usb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsZ0JBQWUsRUFBRzs7QUFFcEI7RUFDRSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLDBCQUF5QjtFQUN6Qix1REFBc0Q7RUFDdEQsaUJBQWdCO0VBQ2hCLGVBQWMsRUFBRzs7QUFFbkI7RUFDRSxzQkFBcUI7RUFDckIsaUJBQWdCLEVBV1c7O0FBYjdCO0lBS0ksWUFBVztJQUNYLGdCQUFlO0lBQ2YsZUFBYyxFQUFHOztBQVByQjtJQVNJLGdDQ25DZTtJRG9DZixrQkFBaUIsRUFHTTs7QUFiM0I7TUFhTSxpQkFBZ0IsRUFBRzs7QUFFekI7RUFDRSxpQkFBZ0I7RUFDaEIsVUFBUztFQUNULFdBQVUsRUFBRzs7QUFJYjtFQUNFLFVBQVMsRUFBRzs7QUFFZDtFQUNFLG9CQUFtQjtFQUNuQix1QkFBc0IsRUFBRzs7QUFFM0I7RUFDRSxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLHFCQUFvQjtFQUNwQixnREFBK0IsRUFBUzs7QUFFMUM7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUIsRUFBRzs7QUFFMUI7RUFDRSxnQkFBZTtFQUNmLFdBQVU7RUFDVixzQkFBcUIsRUFpQ21COztBQS9CeEM7SUFDRSwwQkNyRVc7SURzRVgsWUFBVztJQUNYLGFBQVk7SUFDWixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsdUJBQXNCO0lBQ3RCLGdDQUErQjtJQUMvQixrQkFBaUIsRUFtQm1COztBQS9CckM7TUFlRyxrQkFBaUIsRUFBRzs7QUFFckI7TUFFRywwQkFBeUIsRUFBRzs7QUFDL0I7TUFFRywwQkFBeUIsRUFBRzs7QUFDL0I7TUFFRywwQkFBeUIsRUFBRzs7QUFDL0I7TUFFRywwQkFBeUIsRUFBRzs7QUFDL0I7TUFFRywwQkFBeUIsRUFBRzs7QUFLcEM7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9fdmFyaWFibGVzXCI7XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tZGFyazsgfVxuXG5oNSB7XG4gIGNvbG9yOiByZ2JhKCAkbGlnaHQtYmdjLCAuNSApO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuXG5pbWcge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICB3aWR0aDogNi4ycmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7IH1cblxuaW5wdXQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAwIHJnYmEoNDAsIDQzLCA0NiwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogNDcuNXB4OyB9XG5cbmxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG4gIGEge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICBzcGFuIHtcbiAgICBjb2xvcjogcmdiYSgkbGlnaHQtYmdjLCAuNSk7XG4gICAgZm9udC1zaXplOiAuODVyZW07XG5cbiAgICBmYS1pY29uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH0gfSB9XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbi5mb290ZXIge1xuXG4gICZfX2J0biB7XG4gICAgbWFyZ2luOiAwOyB9XG5cbiAgJl9fZmlyc3Qtcm93IHtcbiAgICBwYWRkaW5nLXRvcDogNS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA1LjVyZW07IH1cblxuICAmX19zZWNvbmQtcm93IHtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKCNGRkYsIC4xMik7IH1cblxuICAmX19lbnRyaWVzIHtcbiAgICB3aWR0aDogMzMuMyU7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTsgfVxuXG4gICZfX2ljb24ge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcblxuICAgICZfX3NvY2lhbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluay1iZztcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuXG4gICAgICAmPiBmYS1pY29uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7IH1cblxuICAgICAgJl9fZmFjZWJvb2sge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzNTUzOyB9IH1cbiAgICAgICZfX2dvb2dsZSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMDRmM2U7IH0gfVxuICAgICAgJl9fdHdpdHRlciB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYWE4ZGI7IH0gfVxuICAgICAgJl9feW91dHViZSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDQ1MzM7IH0gfVxuICAgICAgJl9faW5zdGFncmFtIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRmODZhYzsgfSB9IH0gfVxuXG5cblxuXG4gICZfX25ld3NsZXR0ZXIge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICB3aWR0aDogNDEuNjY2NjY3JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07IH0gfVxuIiwiJG1haW4tZGFyazogIzI4MmIyZTtcbiR0ZXh0LWNvbG9yOiAjMzgzYzQwO1xuJGNhcnQtY29sb3I6ICNiYmM0YzY7XG4kbGlnaHQtYmdjOiAjZjNmNGY0O1xuJGFjdGl2ZTogI2ViZDA3MjtcbiRwcmltYXJ5OiAjZGRhZTcxO1xuJGxpbmstYmc6ICMzZTQwNDM7XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"];
        this.newsList = [
            { title: 'How to make perfect pasta?', date: 'May 21, 2017' },
            { title: 'How to make perfect pasta?', date: 'May 21, 2017' },
            { title: 'Delicious idea for your Sunday dessert', date: 'May 21, 2017' }
        ];
        this.socialMedia = [
            { class: 'footer__icon__social__facebook', url: 'http://fb.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"] },
            { class: 'footer__icon__social__google', url: 'http://gp.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGoogle"] },
            { class: 'footer__icon__social__twitter', url: 'http://tw.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"] },
            { class: 'footer__icon__social__youtube', url: 'http://yt.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"] },
            { class: 'footer__icon__social__instagram', url: 'http://ins.com', icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"] }
        ];
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/home/footer/footer.component.sass")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <ngu-carousel class=\"slide-container\" #myCarousel [inputs]=\"carouselTileConfig\" [dataSource]=\"carouselTileItems$ | async\">\r\n      <ngu-tile *nguCarouselDef=\"let item\">\r\n        <!-- [@slider]=\"ani\" PLease this animation to this tile to see animation. stackblitz have error with animations -->\r\n        <div class=\"tile\" [style.background]=\"'url('+item+')'\">\r\n        </div>\r\n      </ngu-tile>\r\n      <button NguCarouselPrev class=\"leftRs\">&lt;</button>\r\n      <button NguCarouselNext class=\"rightRs\">&gt;</button>\r\n    </ngu-carousel>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/main/main.component.sass":
/*!***********************************************!*\
  !*** ./src/app/home/main/main.component.sass ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  background-color: #282b2e;\n  color: #ddae71;\n  margin: 1rem; }\n\nsection {\n  position: relative;\n  background-color: #fff;\n  height: calc(100vh - 100px - 30px);\n  padding-top: 0;\n  padding-bottom: 0;\n  overflow: hidden; }\n\nsection > .container {\n    height: 100%; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  left: 0; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  right: 0; }\n\n.tile {\n  min-height: 600px;\n  background-color: #ccc;\n  background-size: cover; }\n\n.dark {\n  color: #FFF;\n  background-color: #282b2e; }\n\n.image {\n  right: 70px;\n  width: calc(1110px + ((100vw - 1110px) / 2) - 70px - 30px);\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluL0M6XFxVc2Vyc1xcQWhtZWRcXERlc2t0b3BcXFByb2plY3RzXFxzb3VwLXJlc3RhdXJhbnQvc3JjXFxhcHBcXGhvbWVcXG1haW5cXG1haW4uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2hvbWUvbWFpbi9DOlxcVXNlcnNcXEFobWVkXFxEZXNrdG9wXFxQcm9qZWN0c1xcc291cC1yZXN0YXVyYW50L3NyY1xcX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxhQUFZLEVBQUc7O0FBR2pCO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixtQ0FBa0M7RUFDbEMsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFHRzs7QUFUckI7SUFTSSxhQUFZLEVBQUc7O0FBRW5CO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixPQUFNO0VBQ04sVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZO0VBQ1osaURBQWdEO0VBQ2hELHFCQUFvQjtFQUNwQixRQUFPLEVBQUc7O0FBRVo7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLE9BQU07RUFDTixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixpREFBZ0Q7RUFDaEQscUJBQW9CO0VBQ3BCLFNBQVEsRUFBRzs7QUFFYjtFQUNFLGtCQUFpQjtFQUNqQix1QkFBc0I7RUFDdEIsdUJBQXNCLEVBQUc7O0FBRzNCO0VBQ0UsWUFBVztFQUNYLDBCQ2pEaUIsRURpRGM7O0FBU2pDO0VBSUUsWUFBVztFQUNYLDJEQUEwRDtFQUUxRCxpQkFBZ0IsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9tYWluLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vX3ZhcmlhYmxlcy5zYXNzJztcblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmIyZTtcbiAgY29sb3I6ICNkZGFlNzE7XG4gIG1hcmdpbjogMXJlbTsgfVxuXG5cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4IC0gMzBweCk7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmPiAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7IH0gfVxuXG4ubGVmdFJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBsZWZ0OiAwOyB9XG5cbi5yaWdodFJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICByaWdodDogMDsgfVxuXG4udGlsZSB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG5cblxuLmRhcmsge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tZGFyazsgfVxuXG4vLyAuc2xpZGUtY29udGFpbmVyXG4vL3Bvc2l0aW9uOiByZWxhdGl2ZVxuLy9oZWlnaHQ6IDEwMCVcbi8vZGlzcGxheTogZmxleFxuLy9hbGlnbi1pdGVtczogY2VudGVyXG4vL2p1c3RpZnktY29udGVudDogZmxleC1lbmRcblxuLmltYWdlIHtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlXG4gIC8vIHRvcDogMFxuICAvLyBib3R0b206IDBcbiAgcmlnaHQ6IDcwcHg7XG4gIHdpZHRoOiBjYWxjKDExMTBweCArICgoMTAwdncgLSAxMTEwcHgpIC8gMikgLSA3MHB4IC0gMzBweCk7XG4gIC8vIGN1cnNvcjogbW92ZVxuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi8vIC5pbWFnZVxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGVcbi8vICAgdG9wOiAwXG4vLyAgIGxlZnQ6IDBcbi8vICAgd2lkdGg6IDEwMCVcbi8vICAgaGVpZ2h0OiAxMDAlXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXJcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XG4vLyAgIHotaW5kZXg6IDBcbiIsIiRtYWluLWRhcms6ICMyODJiMmU7XG4kdGV4dC1jb2xvcjogIzM4M2M0MDtcbiRjYXJ0LWNvbG9yOiAjYmJjNGM2O1xuJGxpZ2h0LWJnYzogI2YzZjRmNDtcbiRhY3RpdmU6ICNlYmQwNzI7XG4kcHJpbWFyeTogI2RkYWU3MTtcbiRsaW5rLWJnOiAjM2U0MDQzO1xuIl19 */"

/***/ }),

/***/ "./src/app/home/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(cdr) {
        this.cdr = cdr;
        this.images = [
            'assets/images/slider-burger-1.jpg',
            'assets/images/slider-pasta-1.jpg',
            'assets/images/slider-dessert-1.jpg'
        ];
        this.carouselTileConfig = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            speed: 250,
            point: {
                visible: true
            },
            touch: true,
            loop: true,
            interval: { timing: 2000 },
            animation: 'lazy'
        };
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tempData = [];
        this.carouselTileItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.images.length - 1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) {
            var data = (_this.tempData = _this.tempData.concat([
                _this.images[val]
            ]));
            return data;
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MainComponent.prototype, "name", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/home/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.sass */ "./src/app/home/main/main.component.sass")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/home/our-menu/our-menu.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/our-menu/our-menu.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  our-menu works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/our-menu/our-menu.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/home/our-menu/our-menu.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3VyLW1lbnUvb3VyLW1lbnUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/home/our-menu/our-menu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/our-menu/our-menu.component.ts ***!
  \*****************************************************/
/*! exports provided: OurMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurMenuComponent", function() { return OurMenuComponent; });
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

var OurMenuComponent = /** @class */ (function () {
    function OurMenuComponent() {
    }
    OurMenuComponent.prototype.ngOnInit = function () {
    };
    OurMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-menu',
            template: __webpack_require__(/*! ./our-menu.component.html */ "./src/app/home/our-menu/our-menu.component.html"),
            styles: [__webpack_require__(/*! ./our-menu.component.sass */ "./src/app/home/our-menu/our-menu.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], OurMenuComponent);
    return OurMenuComponent;
}());



/***/ }),

/***/ "./src/app/home/promo-video/promo-video.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/promo-video/promo-video.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"promo__bg\" parallax [config]=\"{initialValue: -400, ratio: .2}\"></div>\r\n  <div class=\"promo__content container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-8 push-lg-2\">\r\n        <h2>Check our promo video!</h2>\r\n        <h5 class=\"muted\">Book a table right now or make an online order!</h5>\r\n        <button></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/promo-video/promo-video.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/home/promo-video/promo-video.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*[parallax] {\n  width: 100%;\n  height: 100%;\n  background-size: 100%; }\n\nsection {\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n  position: relative;\n  color: #FFF; }\n\nbutton {\n  padding: 0;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  font-size: 3.25rem;\n  width: 92px;\n  height: 92px;\n  border-radius: 50%; }\n\nh2 {\n  margin-bottom: 1rem;\n  font-size: 3.5rem;\n  font-weight: 100; }\n\n.promo__bg {\n  background-image: url('bg-croissant-1.jpg');\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: 0; }\n\n.promo__content {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9tby12aWRlby9DOlxcVXNlcnNcXEFobWVkXFxEZXNrdG9wXFxQcm9qZWN0c1xcc291cC1yZXN0YXVyYW50L3NyY1xcYXBwXFxob21lXFxwcm9tby12aWRlb1xccHJvbW8tdmlkZW8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQixFQUFHOztBQUUxQjtFQUNFLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLFlBQVcsRUFBRzs7QUFFaEI7RUFDRSxXQUFVO0VBQ1YsOEJBQTZCO0VBQzdCLGNBQWE7RUFDYixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCLEVBQUc7O0FBRXZCO0VBQ0Usb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFBRzs7QUFJbkI7RUFDRSw0Q0FBa0U7RUFDbEUsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsNkJBQTRCO0VBQzVCLFdBQVUsRUFBRzs7QUFFZjtFQUNFLG1CQUFrQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9tby12aWRlby9wcm9tby12aWRlby5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIipbcGFyYWxsYXhdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlOyB9XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDhyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNGRkY7IH1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMy4yNXJlbTtcbiAgd2lkdGg6IDkycHg7XG4gIGhlaWdodDogOTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG5cbmgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7IH1cblxuLnByb21vIHtcblxuICAmX19iZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWNyb2lzc2FudC0xLmpwZycpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHotaW5kZXg6IDA7IH1cblxuICAmX19jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/home/promo-video/promo-video.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/promo-video/promo-video.component.ts ***!
  \***********************************************************/
/*! exports provided: PromoVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoVideoComponent", function() { return PromoVideoComponent; });
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

var PromoVideoComponent = /** @class */ (function () {
    function PromoVideoComponent() {
    }
    PromoVideoComponent.prototype.ngOnInit = function () {
    };
    PromoVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promo-video',
            template: __webpack_require__(/*! ./promo-video.component.html */ "./src/app/home/promo-video/promo-video.component.html"),
            styles: [__webpack_require__(/*! ./promo-video.component.sass */ "./src/app/home/promo-video/promo-video.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PromoVideoComponent);
    return PromoVideoComponent;
}());



/***/ }),

/***/ "./src/app/home/summary/summary.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/summary/summary.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"section\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 push-md-6 right image\">\r\n          <div class=\"bg-image\"></div>\r\n        </div>\r\n        <div class=\"col-lg-5 col-md-9\">\r\n          <div class=\"rate\">\r\n            <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n            <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n            <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n            <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n            <fa-icon [icon]=\"faStar\"></fa-icon>\r\n          </div>\r\n          <h1>\r\n            The best food in London!\r\n          </h1>\r\n          <p class=\"muted lead\">\r\n            Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....\r\n          </p>\r\n          <blockquote class=\"block-quote block-quote--right\" >\r\n            <div class=\"block-quote__content block-quote__content--light\">\r\n              <div class=\"rate rate--sm\">\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\"></fa-icon>\r\n              </div>\r\n              <p class=\"block-quote__paragraph\">It was an amazing feeling for my belly!</p>\r\n            </div>\r\n            <footer class=\"block-quote__footer\">\r\n              <img class=\"avatar\" src=\"http://www.gravatar.com/avatar/3472757f6a3732d6470f98d7d7e9cece?s=32\" alt=\"Mark Johnson\">\r\n              <span>\r\n                Mark Johnson <span class=\"muted\">Google</span>\r\n              </span>\r\n            </footer>\r\n          </blockquote>\r\n          <blockquote class=\"block-quote block-quote--left\">\r\n            <div class=\"block-quote__content block-quote__content--dark\">\r\n              <div class=\"rate rate--sm\">\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\" class=\"active\"></fa-icon>\r\n                <fa-icon [icon]=\"faStar\"></fa-icon>\r\n              </div>\r\n              <p class=\"block-quote__paragraph\">It was an amazing feeling for my belly!</p>\r\n            </div>\r\n            <footer class=\"block-quote__footer\">\r\n              <img class=\"avatar\" src=\"http://www.gravatar.com/avatar/3472757f6a3732d6470f98d7d7e9cece?s=32\" alt=\"Mark Johnson\">\r\n              <span>\r\n                Mark Johnson <span class=\"muted\">Google</span>\r\n              </span>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n    <div class=\"myContainer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-11 offset-lg-1 options options--bg-dark\">\r\n          <div *ngFor=\"let item of optionsList\" class=\"col-md-4\">\r\n          <div class=\"options__feature\">\r\n            <fa-icon class=\"options__feature--icon\" [icon]=\"item.icon\"></fa-icon>\r\n            <div class=\"options__feature__content\">\r\n              <h4>{{ item.title }}</h4>\r\n              <p>{{ item.text }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/summary/summary.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/home/summary/summary.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: rgba(56, 60, 64, 0.8);\n  visibility: visible; }\n\n.block-quote {\n  position: relative;\n  border: none;\n  padding: 0;\n  margin-bottom: 1.5rem; }\n\n.block-quote--right {\n    margin-right: 4.5rem; }\n\n.block-quote--left {\n    margin-left: 4.5rem; }\n\n.block-quote__paragraph {\n    font-size: 1.75rem;\n    font-weight: 200;\n    line-height: 1.3;\n    margin-bottom: 0; }\n\n.block-quote__content {\n    position: relative;\n    padding: 2rem;\n    margin-bottom: 0.8rem; }\n\n.block-quote__content:after {\n      position: absolute;\n      top: 100%;\n      right: 0;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 20px 20px 0;\n      content: ' '; }\n\n.block-quote__content--light {\n      background-color: #f3f4f4;\n      color: inherit; }\n\n.block-quote__content--light:after {\n        border-color: transparent #f3f4f4 transparent transparent; }\n\n.block-quote__content--dark {\n      background-color: #282b2e;\n      color: #FFF; }\n\n.block-quote__content--dark:after {\n        border-color: transparent #282b2e transparent transparent; }\n\n.bg-image {\n  background-image: url('bg-food-1.jpg');\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: 0; }\n\n.lead {\n  font-size: 1.2rem; }\n\n.active {\n  color: #ebd072; }\n\n.section {\n  overflow: hidden;\n  padding-top: 0;\n  padding-bottom: 0;\n  width: 100%;\n  position: relative; }\n\n.right {\n  right: 0;\n  text-align: right; }\n\n.image {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  padding-left: 0;\n  padding-right: 0; }\n\n.rate {\n  font-size: 1.3rem;\n  margin-bottom: 3rem !important; }\n\n.rate--sm {\n    font-size: .8rem; }\n\n.rate > fa-icon {\n    margin-right: .5rem; }\n\n.wrapper {\n  text-align: left;\n  overflow: hidden; }\n\n.options {\n  padding-top: 5rem;\n  padding-bottom: 4rem;\n  padding-right: 18%;\n  padding-left: 3%;\n  left: 4%; }\n\n.options__feature {\n    margin-bottom: 30px;\n    display: block; }\n\n.options__feature--icon {\n      float: left;\n      color: #ddae71;\n      position: relative;\n      display: inline-block;\n      font-size: 40px;\n      width: 52px;\n      vertical-align: middle; }\n\n.options__feature__content {\n      padding-left: 65px;\n      padding-top: 1.5rem; }\n\n.options__feature__content > h4 {\n        margin-bottom: .5rem;\n        font-size: 1.75rem;\n        margin-top: 0;\n        font-weight: 200;\n        color: #FFF; }\n\n.options__feature__content > p {\n        color: rgba(255, 255, 255, 0.5);\n        margin-bottom: 0; }\n\n.options--bg-dark {\n    background-color: #282b2e;\n    display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdW1tYXJ5L0M6XFxVc2Vyc1xcQWhtZWRcXERlc2t0b3BcXFByb2plY3RzXFxzb3VwLXJlc3RhdXJhbnQvc3JjXFxhcHBcXGhvbWVcXHN1bW1hcnlcXHN1bW1hcnkuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2hvbWUvc3VtbWFyeS9DOlxcVXNlcnNcXEFobWVkXFxEZXNrdG9wXFxQcm9qZWN0c1xcc291cC1yZXN0YXVyYW50L3NyY1xcX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBQTJCO0VBQzNCLG9CQUFtQixFQUFHOztBQUV4QjtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osV0FBVTtFQUNWLHNCQUFxQixFQXdDc0Q7O0FBdEMzRTtJQUNFLHFCQUFvQixFQUFHOztBQUV6QjtJQUNFLG9CQUFtQixFQUFHOztBQUV4QjtJQUNFLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGlCQUFnQixFQUFHOztBQUVyQjtJQUNFLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isc0JBQXFCLEVBdUJrRDs7QUExQnhFO01BTUcsbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxTQUFRO01BQ1IsU0FBUTtNQUNSLFVBQVM7TUFDVCxvQkFBbUI7TUFDbkIsNEJBQTJCO01BQzNCLGFBQVksRUFBRzs7QUFFakI7TUFDRSwwQkNyQ2E7TURzQ2IsZUFBYyxFQUVxRDs7QUFKcEU7UUFJRywwREFBNEQsRUFBRzs7QUFFbkU7TUFDRSwwQkM5Q2E7TUQrQ2IsWUFBVyxFQUd3RDs7QUFMcEU7UUFLRywwREFBNEQsRUFBRzs7QUFJdkU7RUFDRSx1Q0FBNkQ7RUFDN0QsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsWUFBVztFQUNYLGFBQVk7RUFDWixpQ0FBZ0M7RUFDaEMsdUJBQXNCO0VBQ3RCLDZCQUE0QjtFQUM1QixXQUFVLEVBQUc7O0FBRWY7RUFDRSxrQkFBaUIsRUFBRzs7QUFFdEI7RUFDRSxlQ2xFYyxFRGtFRzs7QUFFbkI7RUFDRSxpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsbUJBQWtCLEVBQUc7O0FBRXZCO0VBQ0UsU0FBUTtFQUNSLGtCQUFpQixFQUFHOztBQUV0QjtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sVUFBUztFQUNULGdCQUFlO0VBQ2YsaUJBQWdCLEVBQUc7O0FBRXJCO0VBQ0Usa0JBQWlCO0VBQ2pCLCtCQUE4QixFQU1KOztBQUoxQjtJQUNFLGlCQUFnQixFQUFHOztBQUx2QjtJQVFJLG9CQUFtQixFQUFHOztBQUUxQjtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFBRzs7QUFFckI7RUFDRSxrQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsU0FBUSxFQWlDWTs7QUE5QnBCO0lBQ0Usb0JBQW1CO0lBQ25CLGVBQWMsRUF3QmE7O0FBdEIzQjtNQUNFLFlBQVc7TUFDWCxlQ2pIVztNRGtIWCxtQkFBa0I7TUFDbEIsc0JBQXFCO01BQ3JCLGdCQUFlO01BQ2YsWUFBVztNQUNYLHVCQUFzQixFQUFHOztBQUUzQjtNQUNFLG1CQUFrQjtNQUNsQixvQkFBbUIsRUFXSTs7QUFieEI7UUFLRyxxQkFBb0I7UUFDcEIsbUJBQWtCO1FBQ2xCLGNBQWE7UUFDYixpQkFBZ0I7UUFDaEIsWUFBVyxFQUFHOztBQVRqQjtRQVlHLGdDQUEyQjtRQUMzQixpQkFBZ0IsRUFBRzs7QUFFekI7SUFDRSwwQkM3SWU7SUQ4SWYsY0FBYSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9fdmFyaWFibGVzLnNhc3MnO1xuXG5oMSB7XG4gIGNvbG9yOiByZ2JhKDU2LCA2MCwgNjQsIC44KTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4uYmxvY2stcXVvdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuXG4gICYtLXJpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQuNXJlbTsgfVxuXG4gICYtLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiA0LjVyZW07IH1cblxuICAmX19wYXJhZ3JhcGgge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItd2lkdGg6IDAgMjBweCAyMHB4IDA7XG4gICAgICBjb250ZW50OiAnICc7IH1cblxuICAgICYtLWxpZ2h0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iZ2M7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRsaWdodC1iZ2MgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7IH0gfVxuXG4gICAgJi0tZGFyayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1kYXJrO1xuICAgICAgY29sb3I6ICNGRkY7XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRtYWluLWRhcmsgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7IH0gfSB9IH1cblxuXG5cbi5iZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1mb29kLTEuanBnJyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgei1pbmRleDogMDsgfVxuXG4ubGVhZCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XG5cbi5hY3RpdmUge1xuICBjb2xvcjogJGFjdGl2ZTsgfVxuXG4uc2VjdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ucmlnaHQge1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLmltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XG5cbi5yYXRlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcblxuICAmLS1zbSB7XG4gICAgZm9udC1zaXplOiAuOHJlbTsgfVxuXG4gICY+IGZhLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07IH0gfVxuXG4ud3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLm9wdGlvbnMge1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDE4JTtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgbGVmdDogNCU7XG5cblxuICAmX19mZWF0dXJlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgJi0taWNvbiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuXG4gICAgICAmPmg0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgY29sb3I6ICNGRkY7IH1cblxuICAgICAgJj5wIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9IH0gfVxuXG4gICYtLWJnLWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWRhcms7XG4gICAgZGlzcGxheTogZmxleDsgfSB9XG4iLCIkbWFpbi1kYXJrOiAjMjgyYjJlO1xuJHRleHQtY29sb3I6ICMzODNjNDA7XG4kY2FydC1jb2xvcjogI2JiYzRjNjtcbiRsaWdodC1iZ2M6ICNmM2Y0ZjQ7XG4kYWN0aXZlOiAjZWJkMDcyO1xuJHByaW1hcnk6ICNkZGFlNzE7XG4kbGluay1iZzogIzNlNDA0MztcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/summary/summary.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/summary/summary.component.ts ***!
  \***************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
        this.bgPath = 'assets/images/bg-food-1.jpg';
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.optionsList = [
            { title: 'Pick a dish', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShoppingCart"] },
            { title: 'Make a payment', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWallet"] },
            { title: 'Recieve your food!', text: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBox"] }
        ];
    }
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/home/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.sass */ "./src/app/home/summary/summary.component.sass")]
        })
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/menu/grid-navigation/grid-navigation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/menu/grid-navigation/grid-navigation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content global--page-title light\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 offset-lg-4\">\r\n        <h1 class=\"mb-0\">Menu List</h1>\r\n        <h4 class=\"muted\">Some information about our restaurant</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- TODO: Fix it for backend implementation -->\r\n<div class=\"clearfix page-content\">\r\n  <div class=\"container\">\r\n    <div *ngFor=\"let menu of menus\" class=\"row-fluid\">\r\n      <div class=\"col-sm-10 offset-sm-1\">\r\n        <div class=\"wrapper\">\r\n          <div class=\"menu-category\">\r\n            <div class=\"menu-category__title collapse-toggle\" (click)=\"collapse = !collapse\">\r\n              <div class=\"global--bg-image\" [ngStyle]=\"{'background-image': menu.image}\"></div>\r\n              <h2>{{ menu.name }}</h2>\r\n            </div>\r\n            <div class=\"menu-category__content collapsed\" [ngClass]=\"collapse? 'show' : null\">\r\n              <div *ngFor=\"let item of burgers\" class=\"menu-item menu-list-item\">\r\n                <div class=\"row align-items-center\">\r\n                  <div class=\"col-sm-6 mb-2 mb-sm-0\">\r\n                    <h6 class=\"mb-0\"><a href=\"#\">{{ item.name }}</a></h6>\r\n                    <span class=\"muted text-sm\">\r\n                      <p>{{ item.ingredients }}</p>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-sm-6 text-sm-right\">\r\n                    <span class=\"text-md mr-4\">\r\n                      <span class=\"muted\">From</span>\r\n                      <span class=\"price\"> $</span>\r\n                      {{ item.price }}\r\n                    </span>\r\n\r\n                    <!-- TODO: Fix the hover effect. -->\r\n\r\n                    <button class=\"btn btn-outline-secondary btn-sm\">\r\n                      <span>Add to Cart</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/grid-navigation/grid-navigation.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/menu/grid-navigation/grid-navigation.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-category {\n  margin-bottom: 2rem; }\n  .menu-category__title {\n    position: relative;\n    height: 35vh;\n    min-height: 160px;\n    color: #FFF;\n    padding: 3rem;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%); }\n  .menu-category__content {\n    border: 1px solid #e0e0e0;\n    background: #FFF; }\n  .menu-list-item {\n  padding: 1.25rem 1.5rem;\n  line-height: 1.2; }\n  .collapsed {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .25s ease-out; }\n  .show {\n  max-height: inherit; }\n  .collapse-toggle {\n  cursor: pointer;\n  height: 25vh;\n  transition: all .25s ease-out; }\n  .title {\n  position: absolute;\n  bottom: 3rem;\n  left: 4rem;\n  font-size: 5rem;\n  z-index: 2;\n  margin-bottom: 0; }\n  h2 {\n  position: absolute;\n  bottom: 3rem;\n  left: 4rem;\n  font-size: 5rem;\n  z-index: 2;\n  margin-bottom: 0;\n  font-weight: 100; }\n  h6 {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin-top: 0; }\n  p {\n  font-size: 1rem;\n  font-weight: 300;\n  margin-bottom: 2rem; }\n  .text-sm {\n  font-size: .95rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9ncmlkLW5hdmlnYXRpb24vQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXGFwcFxcbWVudVxcZ3JpZC1uYXZpZ2F0aW9uXFxncmlkLW5hdmlnYXRpb24uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBbUIsRUFhSTtFQVh2QjtJQUNFLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCxjQUFhO0lBQ2Isc0ZBQThFLEVBQUc7RUFHbkY7SUFDRSwwQkFBeUI7SUFDekIsaUJBQWdCLEVBQUc7RUFFdkI7RUFDRSx3QkFBdUI7RUFDdkIsaUJBQWdCLEVBQUc7RUFFckI7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLHFDQUFvQyxFQUFHO0VBRXpDO0VBQ0Usb0JBQW1CLEVBQUc7RUFFeEI7RUFDRSxnQkFBZTtFQUNmLGFBQVk7RUFDWiw4QkFBNkIsRUFBRztFQUVsQztFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osV0FBVTtFQUNWLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLGlCQUFnQixFQUFHO0VBRXJCO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUFHO0VBRXJCO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixjQUFhLEVBQUc7RUFFbEI7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFBRztFQUV4QjtFQUNFLGtCQUFpQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvbWVudS9ncmlkLW5hdmlnYXRpb24vZ3JpZC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vX3ZhcmlhYmxlcyc7XG5cbi5tZW51LWNhdGVnb3J5IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAmX190aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMzV2aDtcbiAgICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTsgfVxuXG5cbiAgJl9fY29udGVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGOyB9IH1cblxuLm1lbnUtbGlzdC1pdGVtIHtcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cblxuLmNvbGxhcHNlZCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjI1cyBlYXNlLW91dDsgfVxuXG4uc2hvdyB7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7IH1cblxuLmNvbGxhcHNlLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAyNXZoO1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDsgfVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogM3JlbTtcbiAgbGVmdDogNHJlbTtcbiAgZm9udC1zaXplOiA1cmVtO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbmgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDNyZW07XG4gIGxlZnQ6IDRyZW07XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAwOyB9XG5cbnAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07IH1cblxuLnRleHQtc20ge1xuICBmb250LXNpemU6IC45NXJlbTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/menu/grid-navigation/grid-navigation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/menu/grid-navigation/grid-navigation.component.ts ***!
  \*******************************************************************/
/*! exports provided: GridNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridNavigationComponent", function() { return GridNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridNavigationComponent = /** @class */ (function () {
    function GridNavigationComponent() {
        this.menus = [
            { name: 'Burgers', image: "url('../../../assets/images/menu-title-burgers-1.jpg')" },
            { name: 'Pasta', image: "url('../../../assets/images/menu-title-pasta-1.jpg')" },
            { name: 'Pizza', image: "url('../../../assets/images/menu-title-pizza-1.jpg')" },
            { name: 'Sushi', image: "url('../../../assets/images/menu-title-sushi-1.jpg')" },
            { name: 'Desserts', image: "url('../../../assets/images/menu-title-desserts-1.jpg')" },
            { name: 'Drinks', image: "url('../../../assets/images/menu-title-drinks-1.jpg')" }
        ];
        this.burgers = [
            { name: 'Nigiri Sushi', ingredients: 'Beef, cheese, fries, onion, potato' },
            { name: 'Chicken Wings', ingredients: 'Beef, cheese, fries, onion, potato' },
            { name: 'Creste de Galli', ingredients: 'Beef, cheese, fries, onion, potato' },
            { name: 'Broccoli', ingredients: 'Beef, cheese, fries, onion, potato' }
        ];
    }
    GridNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-navigation',
            template: __webpack_require__(/*! ./grid-navigation.component.html */ "./src/app/menu/grid-navigation/grid-navigation.component.html"),
            styles: [__webpack_require__(/*! ./grid-navigation.component.sass */ "./src/app/menu/grid-navigation/grid-navigation.component.sass")]
        })
    ], GridNavigationComponent);
    return GridNavigationComponent;
}());



/***/ }),

/***/ "./src/app/menu/list-navigation/list-navigation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/menu/list-navigation/list-navigation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 push-lg-4\">\r\n        <h1 class=\"no-mb\"></h1>\r\n        <h4 class=\"muted\"></h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- TODO: Make menu list reusable -->\r\n<!-- TODO: Also make it collapsable -->\r\n\r\n<div class=\"clearfix\">\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-md-3\">\r\n        <nav class=\"sticky\">\r\n          <ul class=\"nav nav-menu\">\r\n            <li><a href=\"\">Burgers</a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"col-md-9\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/list-navigation/list-navigation.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/menu/list-navigation/list-navigation.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbGlzdC1uYXZpZ2F0aW9uL2xpc3QtbmF2aWdhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/list-navigation/list-navigation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/menu/list-navigation/list-navigation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNavigationComponent", function() { return ListNavigationComponent; });
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

var ListNavigationComponent = /** @class */ (function () {
    function ListNavigationComponent() {
    }
    ListNavigationComponent.prototype.ngOnInit = function () {
    };
    ListNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-navigation',
            template: __webpack_require__(/*! ./list-navigation.component.html */ "./src/app/menu/list-navigation/list-navigation.component.html"),
            styles: [__webpack_require__(/*! ./list-navigation.component.sass */ "./src/app/menu/list-navigation/list-navigation.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ListNavigationComponent);
    return ListNavigationComponent;
}());



/***/ }),

/***/ "./src/app/more/blog/blogpost/blogpost.component.html":
/*!************************************************************!*\
  !*** ./src/app/more/blog/blogpost/blogpost.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <article class=\"post\">\r\n    <div class=\"blog__image\"></div>\r\n    <div class=\"container container-md\">\r\n      <div class=\"blog__content\">\r\n        <ul class=\"blog__metadata\">\r\n          <li>\r\n            <time class=\"blog__date\">May 21, 2017</time>\r\n          </li>\r\n          <li>by Johnatan Doe</li>\r\n        </ul>\r\n        <h1 class=\"blog__title\">How to make perfect pasta</h1>\r\n        <hr>\r\n        <p class=\"lead\">Integer commodo nisi nec hendrerit volutpat. Ut semper lacus felis, vitae malesuada orci dapibus at. Etiam bibendum sed quam vitae scelerisque. Mauris aliquet vulputate lorem ultrices porttitor. Vivamus lobortis nisl felis, laoreet tincidunt lectus bibendum id. </p>\r\n        <p>Etiam et lobortis turpis, blandit vestibulum nisl. Sed vel enim sit amet lectus mollis feugiat eget et augue. Nunc eu felis dignissim, malesuada mi at, tempor ex. Quisque quis elit non sem vehicula dictum at sed turpis. In dignissim sodales leo nec pharetra. Fusce a lectus quis lorem condimentum consectetur ac at turpis. Nunc pulvinar non nisl tempor blandit.</p>\r\n        <p>Cras non placerat mi. Sed condimentum tristique gravida. In egestas malesuada tempus. In quis orci eros. Sed risus ligula, scelerisque nec lacinia eu, rutrum a est. Cras sodales libero libero, sagittis tempor augue sollicitudin ut. In tortor nibh, aliquet sed rutrum sit amet, scelerisque sit amet odio. Nulla facilisi. Ut hendrerit justo eu eleifend volutpat.</p>\r\n        <p>Proin eu faucibus ante. Nunc euismod purus vel neque porta egestas. Nunc pellentesque enim felis, at egestas libero semper quis. Nullam non tristique metus. Cras ipsum justo, dignissim eu euismod id, fermentum eu lectus. Praesent malesuada dolor eu magna posuere, non pharetra est semper. Curabitur interdum lacinia justo ac posuere. Phasellus auctor tempus est, a tempor odio dictum id. Nulla at ullamcorper est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pulvinar tristique justo, sit amet rutrum lectus posuere et. Donec quis facilisis dolor, et molestie elit.</p>\r\n        <hr>\r\n        <div class=\"blog__add-comment\">\r\n          <h4>\r\n            <fa-icon></fa-icon>\r\n          </h4>\r\n          <form class=\"blog__form\">\r\n            <div class=\"row gutters-sm\">\r\n              <div class=\"col-md-6 form-group\">\r\n                <input type=\"text\" name=\"author\" value=\"\" placeholder=\"Name\">\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                <input type=\"email\" name=\"Email\" value=\"\" placeholder=\"E-mail\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <textarea placeholder=\"Comment\" name=\"\" id=\"\" cols=\"30\" rows=\"10\" required></textarea>\r\n            </div>\r\n            <p class=\"btn btn-primary blog__form__button\">\r\n              <input type=\"submit\" name=\"Submit\" value=\"Send a comment\">\r\n            </p>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/more/blog/blogpost/blogpost.component.sass":
/*!************************************************************!*\
  !*** ./src/app/more/blog/blogpost/blogpost.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vcmUvYmxvZy9ibG9ncG9zdC9ibG9ncG9zdC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/more/blog/blogpost/blogpost.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/more/blog/blogpost/blogpost.component.ts ***!
  \**********************************************************/
/*! exports provided: BlogpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostComponent", function() { return BlogpostComponent; });
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

var BlogpostComponent = /** @class */ (function () {
    function BlogpostComponent() {
    }
    BlogpostComponent.prototype.ngOnInit = function () {
    };
    BlogpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogpost',
            template: __webpack_require__(/*! ./blogpost.component.html */ "./src/app/more/blog/blogpost/blogpost.component.html"),
            styles: [__webpack_require__(/*! ./blogpost.component.sass */ "./src/app/more/blog/blogpost/blogpost.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogpostComponent);
    return BlogpostComponent;
}());



/***/ }),

/***/ "./src/app/more/blog/blogs-page/blogs-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/more/blog/blogs-page/blogs-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"title\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 push-lg-4\">\r\n          <h1 class=\"no-mb\">Blog</h1>\r\n          <h4 class=\"muted\">Some information about our restaurant</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-10 push-lg-1\">\r\n          <article class=\"post\">\r\n            <div class=\"post__image\"></div>\r\n            <div class=\"post__content\">\r\n              <ul class=\"post__date\">\r\n                <li>\r\n                  <time class=\"post__date__entry\">May 21, 2017</time>\r\n                </li>\r\n                <li>by Johnatan Doe</li>\r\n              </ul>\r\n              <h4><a href=\"\">How to make perfect pasta</a></h4>\r\n              <p class=\"lead\">Integer commodo nisi nec hendrerit volutpat. Ut semper lacus felis, vitae malesuada</p>\r\n            </div>\r\n          </article>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/more/blog/blogs-page/blogs-page.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/more/blog/blogs-page/blogs-page.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vcmUvYmxvZy9ibG9ncy1wYWdlL2Jsb2dzLXBhZ2UuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/more/blog/blogs-page/blogs-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/more/blog/blogs-page/blogs-page.component.ts ***!
  \**************************************************************/
/*! exports provided: BlogsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsPageComponent", function() { return BlogsPageComponent; });
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

var BlogsPageComponent = /** @class */ (function () {
    function BlogsPageComponent() {
    }
    BlogsPageComponent.prototype.ngOnInit = function () {
    };
    BlogsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogs-page',
            template: __webpack_require__(/*! ./blogs-page.component.html */ "./src/app/more/blog/blogs-page/blogs-page.component.html"),
            styles: [__webpack_require__(/*! ./blogs-page.component.sass */ "./src/app/more/blog/blogs-page/blogs-page.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogsPageComponent);
    return BlogsPageComponent;
}());



/***/ }),

/***/ "./src/app/more/book-a-table/book-a-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/more/book-a-table/book-a-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"clearfix\">\r\n        <div class=\"pt-pb-8\">\r\n          <div class=\"global--bg-image bg-image\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6 offset-lg-3\">\r\n                <div class=\"form-box\">\r\n                  <div class=\"form-box__header\">\r\n                    <div class=\"form-box__header-image\"></div>\r\n                    <div class=\"form-box__title\">\r\n                      <span><fa-icon [icon]=\"faBookmark\"></fa-icon></span>\r\n                      <h4 class=\"mb-0\">Book a table</h4>\r\n                      <p class=\"lead muted\">Details about your reservation.</p>\r\n                    </div>\r\n                  </div>\r\n                  <!-- TODO: Improve form structure -->\r\n                  <form action=\"\">\r\n                    <div class=\"form-box__content\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"\">Name and surname</label>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"\">E-mail</label>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"\">Phone</label>\r\n                        <input type=\"email\" class=\"form-control\">\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <div class=\"form-group\"\r\n                          ><label for=\"\">Date</label>\r\n                          <input type=\"date\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                        <div class=\"col-sm-6\">\r\n                          <div class=\"form-group\">\r\n                            <label for=\"\">Attends</label>\r\n                          <input type=\"text\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      </div>\r\n                    </div>\r\n                    <button class=\"btn btn-secondary btn-block form-box__button hvr-sweep-to-top\" type=\"submit\">\r\n                      <span class=\"form-box__button--desc\">Make Reservation</span>\r\n                    </button>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/more/book-a-table/book-a-table.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/more/book-a-table/book-a-table.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 1.5rem 3rem 1.75rem;\n  font-size: 1.2rem;\n  border-radius: 0;\n  border-width: 2px;\n  position: relative;\n  font-family: \"Oswald\", sans-serif;\n  font-weight: 400;\n  text-transform: uppercase;\n  transition: all .25s ease-out;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  border-color: #25282a;\n  background-color: #25282a;\n  color: #fff; }\n\nh4 {\n  font-size: 1.75rem;\n  font-weight: 300; }\n\n.bg-image {\n  background-image: url('form-bg-1.jpg'); }\n\n.pt-pb-8 {\n  padding: 8rem 0; }\n\n.form-box {\n  background-color: #FFF; }\n\n.form-box__title {\n    position: relative; }\n\n.form-box__title > span {\n      position: relative;\n      display: inline-block;\n      font-size: 40px;\n      width: 52px;\n      vertical-align: middle;\n      color: #ddae71; }\n\n.form-box__header {\n    padding: 2rem;\n    position: relative;\n    color: #FFF; }\n\n.form-box__header-image {\n      background-image: url('modal-review-1.jpg');\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-position: center center;\n      background-size: cover;\n      background-repeat: no-repeat;\n      z-index: 0; }\n\n.form-box__content {\n    padding: 2rem;\n    position: relative; }\n\n.form-control {\n  font-weight: 300;\n  padding: 1rem;\n  border: 2px solid #e0e0e0;\n  box-shadow: inset 1px 1px 2px 0 rgba(40, 43, 46, 0.06);\n  border-radius: 0;\n  min-height: 49.5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS9ib29rLWEtdGFibGUvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXGFwcFxcbW9yZVxcYm9vay1hLXRhYmxlXFxib29rLWEtdGFibGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL21vcmUvYm9vay1hLXRhYmxlL0M6XFxVc2Vyc1xcQWhtZWRcXERlc2t0b3BcXFByb2plY3RzXFxzb3VwLXJlc3RhdXJhbnQvc3JjXFxfdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkFBNEI7RUFDNUIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGtDQUFpQztFQUNqQyxpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLDhCQUE2QjtFQUM3QixpQ0FBd0I7VUFBeEIseUJBQXdCO0VBQ3hCLHNCQUFxQjtFQUNyQiwwQkFBeUI7RUFDekIsWUFBVyxFQUFHOztBQUVoQjtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFBRzs7QUFFckI7RUFDRSx1Q0FBNkQsRUFBRzs7QUFFbEU7RUFDRSxnQkFBZSxFQUFHOztBQUVwQjtFQUNFLHVCQUFzQixFQWdDRzs7QUE5QnpCO0lBQ0UsbUJBQWtCLEVBUUk7O0FBVHZCO01BSUcsbUJBQWtCO01BQ2xCLHNCQUFxQjtNQUNyQixnQkFBZTtNQUNmLFlBQVc7TUFDWCx1QkFBc0I7TUFDdEIsZUNsQ1csRURrQ087O0FBRXRCO0lBQ0UsY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixZQUFXLEVBWU07O0FBVmpCO01BQ0UsNENBQWtFO01BQ2xFLG1CQUFrQjtNQUNsQixPQUFNO01BQ04sUUFBTztNQUNQLFlBQVc7TUFDWCxhQUFZO01BQ1osbUNBQWtDO01BQ2xDLHVCQUFzQjtNQUN0Qiw2QkFBNEI7TUFDNUIsV0FBVSxFQUFHOztBQUVqQjtJQUNFLGNBQWE7SUFDYixtQkFBa0IsRUFBRzs7QUFHekI7RUFDTSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLDBCQUF5QjtFQUN6Qix1REFBc0Q7RUFDdEQsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvbW9yZS9ib29rLWEtdGFibGUvYm9vay1hLXRhYmxlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vX3ZhcmlhYmxlcyc7XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEuNXJlbSAzcmVtIDEuNzVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgYm9yZGVyLWNvbG9yOiAjMjUyODJhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODJhO1xuICBjb2xvcjogI2ZmZjsgfVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuXG4uYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9ybS1iZy0xLmpwZycpOyB9XG5cbi5wdC1wYi04IHtcbiAgcGFkZGluZzogOHJlbSAwOyB9XG5cbi5mb3JtLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG5cbiAgJl9fdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY+IHNwYW4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgd2lkdGg6IDUycHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgY29sb3I6ICRwcmltYXJ5OyB9IH1cblxuICAmX19oZWFkZXIge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjRkZGO1xuXG4gICAgJi1pbWFnZSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbW9kYWwtcmV2aWV3LTEuanBnJyk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB6LWluZGV4OiAwOyB9IH1cblxuICAmX19jb250ZW50IHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfSB9XG5cblxuLmZvcm0tY29udHJvbCB7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAwIHJnYmEoNDAsIDQzLCA0NiwgMC4wNik7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgbWluLWhlaWdodDogNDkuNXB4OyB9XG4iLCIkbWFpbi1kYXJrOiAjMjgyYjJlO1xuJHRleHQtY29sb3I6ICMzODNjNDA7XG4kY2FydC1jb2xvcjogI2JiYzRjNjtcbiRsaWdodC1iZ2M6ICNmM2Y0ZjQ7XG4kYWN0aXZlOiAjZWJkMDcyO1xuJHByaW1hcnk6ICNkZGFlNzE7XG4kbGluay1iZzogIzNlNDA0MztcbiJdfQ== */"

/***/ }),

/***/ "./src/app/more/book-a-table/book-a-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/more/book-a-table/book-a-table.component.ts ***!
  \*************************************************************/
/*! exports provided: BookATableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookATableComponent", function() { return BookATableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BookATableComponent = /** @class */ (function () {
    function BookATableComponent() {
        this.faBookmark = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBookmark"];
    }
    BookATableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-a-table',
            template: __webpack_require__(/*! ./book-a-table.component.html */ "./src/app/more/book-a-table/book-a-table.component.html"),
            styles: [__webpack_require__(/*! ./book-a-table.component.sass */ "./src/app/more/book-a-table/book-a-table.component.sass")]
        })
    ], BookATableComponent);
    return BookATableComponent;
}());



/***/ }),

/***/ "./src/app/special-offers/special-offers.component.html":
/*!**************************************************************!*\
  !*** ./src/app/special-offers/special-offers.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"title\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 offset-lg-4 global--page-title\">\r\n          <h1 class=\"no-mb\">Special Offers</h1>\r\n          <h4 class=\"muted\">Some informations about our restaurant</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Basic markup for the meal component -->\r\n<section>\r\n  <div class=\"container\">\r\n    <div class=\"row special-offer\">\r\n      <div class=\"row col-md-8 special-offer__image\">\r\n        <img src=\"{{ offerImage }}\" alt=\"\">\r\n      </div>\r\n      <div class=\"row col-md-6 offset-md-6 special-offer__content\">\r\n        <h2><a href=\"#\">Chip Friday</a></h2>\r\n        <h5 class=\"muted\">10% Off for all dishes!</h5>\r\n        <ul class=\"special-offer__check-list\">\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> Only on Friday</li>\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> All products</li>\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> Online order</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row special-offer\">\r\n      <div class=\"row col-md-8 special-offer__image\">\r\n        <img src=\"{{ offerImage }}\" alt=\"\">\r\n      </div>\r\n      <div class=\"row col-md-6 offset-md-6 special-offer__content\">\r\n        <h2><a href=\"#\">Chip Friday</a></h2>\r\n        <h5 class=\"muted\">10% Off for all dishes!</h5>\r\n        <ul class=\"special-offer__check-list\">\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> Only on Friday</li>\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> All products</li>\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> Online order</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row special-offer\">\r\n      <div class=\"row col-md-8 special-offer__image\">\r\n        <img src=\"{{ offerImage }}\" alt=\"\">\r\n      </div>\r\n      <div class=\"row col-md-6 offset-md-6 special-offer__content\">\r\n        <h2><a href=\"#\">Chip Friday</a></h2>\r\n        <h5 class=\"muted\">10% Off for all dishes!</h5>\r\n        <ul class=\"special-offer__check-list\">\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> Only on Friday</li>\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> All products</li>\r\n          <li><fa-icon [icon]=\"faCheck\"></fa-icon> Online order</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/special-offers/special-offers.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/special-offers/special-offers.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fa-icon {\n  color: #2ca238; }\n\nsection {\n  position: relative; }\n\n.special-offer {\n  position: relative;\n  table-layout: fixed;\n  margin-bottom: 2rem;\n  padding: 5rem 0; }\n\n.special-offer__image {\n    width: 100%;\n    height: auto;\n    z-index: 0; }\n\n.special-offer__check-list {\n    margin-bottom: 0;\n    font-size: 1.9rem;\n    font-weight: 300; }\n\n.special-offer__check-list > li {\n      margin-bottom: 1rem; }\n\n.special-offer__content {\n    width: 65%;\n    padding: 25px;\n    position: absolute;\n    background-color: #FFF;\n    line-height: 1;\n    z-index: 2;\n    box-shadow: -9px 10px 12px -2px rgba(0, 0, 0, 0.43);\n    top: 15%;\n    bottom: 15%; }\n\n.special-offer__content > h2 {\n      font-size: 4.4rem;\n      font-weight: 100;\n      margin-bottom: .5rem; }\n\n.special-offer__content > h5 {\n      margin-bottom: 3rem;\n      font-size: 2.5rem;\n      font-weight: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbC1vZmZlcnMvQzpcXFVzZXJzXFxBaG1lZFxcRGVza3RvcFxcUHJvamVjdHNcXHNvdXAtcmVzdGF1cmFudC9zcmNcXGFwcFxcc3BlY2lhbC1vZmZlcnNcXHNwZWNpYWwtb2ZmZXJzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYyxFQUFHOztBQUVuQjtFQUNFLG1CQUFrQixFQUFHOztBQUV2QjtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGdCQUFlLEVBb0NZOztBQWxDM0I7SUFDRSxZQUFXO0lBRVgsYUFBWTtJQUNaLFdBQVUsRUFBRzs7QUFFZjtJQUNFLGlCQUFnQjtJQUNoQixrQkFBaUI7SUFDakIsaUJBQWdCLEVBR1U7O0FBTjNCO01BTUcsb0JBQW1CLEVBQUc7O0FBRzFCO0lBQ0UsV0FBVTtJQUNWLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsdUJBQXNCO0lBRXRCLGVBQWM7SUFDZCxXQUFVO0lBQ1Ysb0RBQWdEO0lBQ2hELFNBQVE7SUFDUixZQUFXLEVBU1k7O0FBbkJ4QjtNQVlHLGtCQUFpQjtNQUNqQixpQkFBZ0I7TUFDaEIscUJBQW9CLEVBQUc7O0FBZDFCO01BaUJHLG9CQUFtQjtNQUNuQixrQkFBaUI7TUFDakIsaUJBQWdCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zcGVjaWFsLW9mZmVycy9zcGVjaWFsLW9mZmVycy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImZhLWljb24ge1xuICBjb2xvcjogIzJjYTIzODsgfVxuXG5zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zcGVjaWFsLW9mZmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nOiA1cmVtIDA7XG5cbiAgJl9faW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGhlaWdodDogYXV0bztcbiAgICB6LWluZGV4OiAwOyB9XG5cbiAgJl9fY2hlY2stbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuXG4gICAgJj4gbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfSB9XG5cblxuICAmX19jb250ZW50IHtcbiAgICB3aWR0aDogNjUlO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgLy8gcGFkZGluZzogMCAycmVtXG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAtOXB4IDEwcHggMTJweCAtMnB4IHJnYmEoMCwwLDAsMC40Myk7XG4gICAgdG9wOiAxNSU7XG4gICAgYm90dG9tOiAxNSU7XG4gICAgJj4gaDIge1xuICAgICAgZm9udC1zaXplOiA0LjRyZW07XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07IH1cblxuICAgICY+IGg1IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7IH0gfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/special-offers/special-offers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/special-offers/special-offers.component.ts ***!
  \************************************************************/
/*! exports provided: SpecialOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOffersComponent", function() { return SpecialOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SpecialOffersComponent = /** @class */ (function () {
    function SpecialOffersComponent() {
        this.offerImage = 'assets/images/post02-1.jpg';
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
    }
    SpecialOffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-special-offers',
            template: __webpack_require__(/*! ./special-offers.component.html */ "./src/app/special-offers/special-offers.component.html"),
            styles: [__webpack_require__(/*! ./special-offers.component.sass */ "./src/app/special-offers/special-offers.component.sass")]
        })
    ], SpecialOffersComponent);
    return SpecialOffersComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! C:\Users\Ahmed\Desktop\Projects\soup-restaurant\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map