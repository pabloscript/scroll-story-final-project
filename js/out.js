/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var pl = ["Cześć, jestem Paweł. <br><br> Poklikaj sobie, jeśli chcesz się dowiedzieć, jak zostałem programistą front-end.", "Ukończyłem psychologię na Uniwersytecie Warszawskim w 2011 roku.", "Jeszcze na studiach zacząłem pracę dla jednej z największych firm technologicznych świata, gdzie przez ponad 6 lat rekrutowałem inżynierów.", "Następnie przez prawie 1,5 roku w tej samej firmie dbałem o jej wizerunek jako specjalista ds. komunikacji, głównie pisząc i redagując teksty po polsku i po angielsku.", "W połowie 2017 roku trafiłem na bootcamp programistyczny w Coders Lab, gdzie - w bardzo intensywny i skondensowany sposób - nauczyłem się: <br><br> HTML, CSS, JavaScript (w tym ES6), jQuery, React.", "Teraz jestem gotowy, żeby dalej rozwijać się jako Front-End Developer i uczyć nowych rzeczy. <br><br> Chcesz się ze mną skontaktować? Nic prostszego! <br><br> pe.kozicki (at) gmail.com"];

var en = ["Hi, I'm Paweł. <br><br> Click around the website to learn how I managed to become a front-end developer.", "I graduated from the University of Warsaw, faculty of Psychology, in 2011.", "During my studies I started working for one of the biggest digital industrial companies in the world, where for over 6 years I recruited engineers.", "Then I switched positions within the same company where for over a year, as a communications specialist, I was focused on copywriting and proofreading in Polish and English.", "In the mid 2017 I attended a software dev bootcamp at Coders Lab where - in a very intensive and condensed manner - I learned: <br><br> HTML, CSS, JavaScript (including ES6), jQuery, React.", "Now I'm ready to further develop as a developer and learn new things. <br><br> If you wish to contact me - don't hesitate! <br><br> pe.kozicki (at) gmail.com"];

var plMenu = ["Cześć", "Edukacja", "Rekruter", "Copywriter", "Programista", "Kontakt"];

var enMenu = ["Hello", "Education", "Recruiter", "Copywriter", "Developer", "Contact"];

exports.pl = pl;
exports.en = en;
exports.plMenu = plMenu;
exports.enMenu = enMenu;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lang = __webpack_require__(0);

$(function () {

    // Smooth scroll to anchors from menu:
    $(document).on('click', 'a[href^="#"]', function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    // Variables for up and down arrows events:
    var containerDivs = $(".container");
    var upArrow = $("#up");
    var downArrow = $("#down");
    var vheight = $(window).height();

    // Scroll up to previous container function:
    var scrollUp = function scrollUp() {
        $('html, body').animate({
            scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight
        }, 400);
    };

    // Scroll down to next container function:
    var scrollDown = function scrollDown() {
        $('html, body').animate({
            scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
        }, 400);
    };

    // Down arrow click event for scrolling down:
    downArrow.click(function () {
        event.preventDefault();
        scrollDown();
    });

    // Up arrow click event for scrolling up:
    upArrow.click(function () {
        event.preventDefault();
        scrollUp();
    });

    // Smooth scroll through viewport on mouse wheel scrolling (temporarily turned off, because it hangs up the browser)
    // $(window).on("wheel", (event) => {
    //     let delta = event.originalEvent.deltaY;
    //     if (delta > 0) {
    //         scrollDown();
    //     }
    //     else {
    //         scrollUp();
    //     }
    // });

    // Mobile menu show
    var mobileMenuBtn = $("#mobile-menu-button");
    var fullMenuMobile = $("#full-menu-mobile");

    mobileMenuBtn.on("click", function () {
        fullMenuMobile.slideToggle(500);
        fullMenuMobile.css("display", "flex");
    });

    fullMenuMobile.find("a").on("click", function () {
        event.preventDefault();
        fullMenuMobile.slideToggle(710);
    });

    // Language change
    var plButton = $("#lang").find("#pl");
    var enButton = $("#lang").find("#en");
    var text = $(".text");
    var nav = $("#full-menu a");
    var navMobile = $("#full-menu-mobile a");

    plButton.click(function () {
        text.each(function (i) {
            $(this).html(_lang.pl[i]);
        });
        nav.each(function (i) {
            $(this).text(_lang.plMenu[i]);
        });
        navMobile.each(function (i) {
            $(this).text(_lang.plMenu[i]);
        });
    });

    enButton.click(function () {
        text.each(function (i) {
            $(this).html(_lang.en[i]);
        });
        nav.each(function (i) {
            $(this).text(_lang.enMenu[i]);
        });
        navMobile.each(function (i) {
            $(this).text(_lang.enMenu[i]);
        });
    });
});

/***/ })
/******/ ]);