(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react-redux"], factory);
	else if(typeof exports === 'object')
		exports["redux-responsive"] = factory(require("react-redux"));
	else
		root["redux-responsive"] = factory(root["react-redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parsePattern */
/* unused harmony export browserMatches */
/* unused harmony export sortKeys */
/* unused harmony export transformStyle */
/* unused harmony export mapStateToPropsFactory */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// external imports

/*
 styles are passed as objects with the following form:
    elementName: {
        ...normal styles,
        _lessThan_medium: {
            backgroundColor: 'blue'
        },
        _greaterThan_large: {
            color: 'red,'
        },
        _equal_medium: {
            border: '1px solid black',
        }
    },
    anotherElement: {...},

 */

// retrieve the data for the given pattern
var parsePattern = function parsePattern(pattern) {
    // separate out the various bits of data
    var _pattern$split$slice = pattern.split('_').slice(1),
        _pattern$split$slice2 = _slicedToArray(_pattern$split$slice, 2),
        comparison = _pattern$split$slice2[0],
        size = _pattern$split$slice2[1];
    // return the results


    return { comparison: comparison, size: size };
};

// this function returns true if the browser state matches the one
// designated by the pattern.
//
// patterns are of the form _(comparison)_(size). ie: _lessThan_medium
var browserMatches = function browserMatches(browser, pattern) {
    var _parsePattern = parsePattern(pattern),
        comparison = _parsePattern.comparison,
        size = _parsePattern.size;
    // return the value of the appropriate entry in the browser state


    try {
        return comparison === 'equal' ? browser.mediaType === size : browser[comparison][size] || false;
        // if anything goes wrong
    } catch (e) {
        return false;
    }
};

// this function sorts the style keys so they are applied in the correct order
// for less than criteria, the styles are sorted highest to lowest
// for greater than criteria, the styles are storted lowest to highest
var sortKeys = function sortKeys(keys, breakpoints) {
    // sort the keys
    var mapped = keys.map(function (key) {
        // if the key is a custom style
        if (key[0] !== '_') {
            // deal with it first
            return { key: key, sort: 0 };
        }
        // otherwise the key is a responsive style

        // grab the data for the style

        var _parsePattern2 = parsePattern(key),
            comparison = _parsePattern2.comparison,
            size = _parsePattern2.size;
        // DRY


        var nBreakpoints = breakpoints.length;
        // start off sorting by ascending order to match breakpoints
        var sortValue = breakpoints.indexOf(size) + nBreakpoints;

        // make sure equals checks come last
        if (comparison === 'equal') {
            // offset it by a lot
            /* eslint-disable space-infix-ops, space-unary-ops */
            sortValue = +3 * nBreakpoints;
            /* eslint-enable space-infix-ops space-unary-ops */
            // make sure lessThans come after greaterThans
        } else if (comparison === 'lessThan') {
            // by offsetting them all and inverting the placement
            sortValue = 2 * nBreakpoints - sortValue;
        }

        // return the sort index
        return { key: key, sort: sortValue };
    });

    return mapped.sort(function (_ref, _ref2) {
        var sortA = _ref.sort;
        var sortB = _ref2.sort;
        return sortA - sortB;
    }).map(function (_ref3) {
        var key = _ref3.key;
        return key;
    });
};

// this function takes the current state of the browser and
// returns a function that creates a stylesheet to match
var transformStyle = function transformStyle(browser) {
    return function (style) {
        // the stylesheet
        var stylesheet = {};
        // sort the breakpoints
        var breakpoints = Object.keys(browser.breakpoints).sort(
        // in ascending order
        function (a, b) {
            return browser.breakpoints[a] - browser.breakpoints[b];
        });
        // sort the keys in reverse alphabetical order so we see modifiers last
        var keys = sortKeys(Object.keys(style), breakpoints);
        // go over every key in the provided sheet
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                // if the is not a special one
                if (key[0] !== '_') {
                    // add the key to the one we're building up
                    stylesheet[key] = style[key];
                    // otherwise we have to process the stylesheet
                    // check if the browser matches the state designated by the string
                } else if (browserMatches(browser, key)) {
                    // merge the contents of the sub-style into the parent
                    Object.assign(stylesheet, style[key]);
                }
            }
            // return the stylesheet we've created
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return stylesheet;
    };
};

// this function calculates the current stylesheet based on the responsive
// state of the reducer
var mapStateToPropsFactory = function mapStateToPropsFactory(stylesheet) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
        reducerName = _ref4.reducerName;

    return function (state, props) {
        // find the relevant state in the reducer
        var browser = state[reducerName];

        // if we are passed a functional stylesheet, hand it the component props, otherwise just use the object
        var sheet = typeof stylesheet === 'function' ? stylesheet(browser, props) : stylesheet;

        // the function to mutate values
        var transformValue = transformStyle(browser);

        // the stylesheet only differs by values of
        return {
            styles: Object.keys(sheet).reduce(function (prev, key) {
                return _extends({}, prev, _defineProperty({}, key, transformValue(sheet[key])));
            }, {})
        };
    };
};

// the default options
var defaultOptions = {
    reducerName: 'browser'
};

// export a higher order component
/* harmony default export */ __webpack_exports__["a"] = (function (stylesheet, opts) {
    return function (component) {
        return __webpack_require__(13).connect( // eslint-disable-line no-undef
        mapStateToPropsFactory(stylesheet, _extends({}, defaultOptions, opts)))(component);
    };
});

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_stylesheet__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return __WEBPACK_IMPORTED_MODULE_0__components_stylesheet__["a"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=react.js.map