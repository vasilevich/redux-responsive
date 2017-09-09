(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["redux-responsive"] = factory();
	else
		root["redux-responsive"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculateResponsiveState__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__calculateResponsiveState__["a"]; });



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CALCULATE_RESPONSIVE_STATE__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CALCULATE_RESPONSIVE_STATE__["a"]; });



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('redux-responsive/CALCULATE_RESPONSIVE_STATE');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =  __webpack_require__(12);



/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers__ = __webpack_require__(11);
// local imports


/**
 * Creates a store enhancer based off an (optional) throttle time.
 * @arg {object} [options={calculateInitialState}] - Options object.
 * @arg {boolean} [options.calculateInitialState=true] - True if the responsive
 * state must be calculated initially, false otherwise.
 * @returns {function} - The store enhancer (which adds event listeners to
 * dispatch actions on window resize).
 */
/* harmony default export */ __webpack_exports__["a"] = (function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$calculateInitial = _ref.calculateInitialState,
        calculateInitialState = _ref$calculateInitial === undefined ? true : _ref$calculateInitial;

    // return the store enhancer (an enhanced version of `createStore`)
    return function (createStore) {
        return function () {
            // create the store
            var store = createStore.apply(undefined, arguments);
            // if there is a `window`
            if (typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined') {
                // add the handlers that only fire when the responsive state changes
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__handlers__["a" /* default */])({ store: store, window: window, calculateInitialState: calculateInitialState });
            }

            // return the store so that the call is transparent
            return store;
        };
    };
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mediaquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mediaquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_types_CALCULATE_RESPONSIVE_STATE__ = __webpack_require__(2);
/* unused harmony export defaultBreakpoints */
/* unused harmony export getOrderMap */
/* unused harmony export getLessThan */
/* unused harmony export getIs */
/* unused harmony export getGreaterThan */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// third party imports

// local imports


// default breakpoints
var defaultBreakpoints = {
    extraSmall: 480,
    small: 768,
    medium: 992,
    large: 1200
};
// media type to default to when no `window` present
var defaultMediaType = 'infinity';
// orientation to default to when no `window` present
var defaultOrientation = null;

// a lightweight version of lodash.transform
var transform = function transform(obj, f) {
    // a place to mutate
    var internal = {};
    // basically we have to reduce the keys down to an object and pass the k/v pairs to each f
    Object.keys(obj).forEach(function (key) {
        return f(internal, obj[key], key);
    });
    // return the object we've been building up
    return internal;
};

/**
 * Compute a mapping of media type to its ordering where ordering is defined
 * such that large > medium > small.
 * @args (object) breakpoints - the breakpoint object
 */
function getOrderMap(bps) {
    // grab the keys in the appropriate order
    var keys = Object.keys(bps).sort(function (a, b) {
        // get the associated values
        var valueA = bps[a];
        var valueB = bps[b];

        // if a is a number and b is a string
        if (typeof valueA === 'number' && typeof valueB === 'string') {
            // put the number first
            return -1;
        } else if (typeof valueB === 'number' && typeof valueA === 'string') {
            // return the number first
            return 1;
        }

        // otherwise treat it like normal
        return valueA >= valueB ? 1 : -1;
    });

    // map the original breakpoint object
    return transform(bps, function (result, breakpoint, mediaType) {
        // figure out the index of the mediatype
        var index = keys.indexOf(mediaType);

        // if there is an entry in the sort for this
        if (index !== -1) {
            // to its index in the sorted list
            result[mediaType] = index;
        }
    });
}

/**
 * Compute the `lessThan` object based on the browser width.
 * @arg {number} browserWidth - Width of the browser.
 * @arg {object} breakpoints - The breakpoints object.
 * @arg {currentMediaType} breakpoints - The curent media type.
 * @returns {object} The `lessThan` object.  Its keys are the same as the
 * keys of the breakpoints object.  The value for each key indicates whether
 * or not the browser width is less than the breakpoint.
 */
function getLessThan(currentMediaType, breakpointOrder) {
    // get the ordering of the current media type
    var currentOrder = breakpointOrder[currentMediaType];

    return transform(breakpointOrder, function (result, breakpoint, mediaType) {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number' && breakpointOrder[mediaType]) {
            // store wether or not it is less than the breakpoint
            result[mediaType] = currentOrder < breakpointOrder[mediaType];
            // handle non numerical breakpoints specially
        } else {
            result[mediaType] = false;
        }
    });
}

/**
 * Compute the `lessThan` object based on the browser width.
 * @arg {object} breakpoints - The breakpoints object.
 * @arg {currentMediaType} breakpoints - The curent media type.
 * @returns {object} The `lessThan` object.  Its keys are the same as the
 * keys of the breakpoints object.  The value for each key indicates whether
 * or not the browser width is less than the breakpoint.
 */
function getIs(currentMediaType, breakpoints) {
    return transform(breakpoints, function (result, breakpoint, mediaType) {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number' && breakpoints[mediaType]) {
            // store wether or not it is less than the breakpoint
            result[mediaType] = mediaType === currentMediaType;
            // handle non numerical breakpoints specially
        } else {
            result[mediaType] = false;
        }
    });
}

/**
 * Compute the `greaterThan` object based on the browser width.
 * @arg {number} browserWidth - Width of the browser.
 * @arg {object} breakpoints - The breakpoints object.
 * @returns {object} The `greaterThan` object.  Its keys are the same as the
 * keys of the breakpoints object.  The value for each key indicates whether
 * or not the browser width is greater than the breakpoint.
 */
function getGreaterThan(currentMediaType, breakpointOrder) {
    // get the ordering of the current media type
    var currentOrder = breakpointOrder[currentMediaType];

    return transform(breakpointOrder, function (result, breakpoint, mediaType) {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number') {
            // store wether or not it is less than the breakpoint
            result[mediaType] = currentOrder > breakpointOrder[mediaType];
            // handle non numerical breakpoints specially
        } else {
            result[mediaType] = false;
        }
    });
}

/**
 * Gets the current media type from the global `window`.
 * @arg {object} mediaQueries - The media queries object.
 * @arg {string} infinityMediaType - The infinity media type.
 * @returns {string} The window's current media type.  This is the key of the
 * breakpoint that is the next breakpoint larger than the window.
 */
function getMediaType(matchMedia, mediaQueries, infinityMediaType) {
    // if there's no window
    if (typeof matchMedia === 'undefined') {
        // return the infinity media type
        return infinityMediaType;
    }

    // there is a window, so compute the true media type
    return Object.keys(mediaQueries).reduce(function (result, query) {
        // return the new type if the query matches otherwise the previous one
        return matchMedia(mediaQueries[query]).matches ? query : result;
        // use the infinity media type
    }, infinityMediaType);
}

/**
 * Gets the current media type from the global `window`.
 * @arg {object} mediaQueries - The media queries object.
 * @returns {string} The window's current media type.  This is the key of the
 * breakpoint that is the next breakpoint larger than the window.
 */
function getOrientation(matchMedia) {
    // if there's no window
    if (typeof matchMedia === 'undefined') {
        // return the default
        return defaultOrientation;
    }

    var mediaQueries = {
        portrait: '(orientation: portrait)',
        landscape: '(orientation: landscape)'
    };

    // there is a window, so compute the true orientation
    return Object.keys(mediaQueries).reduce(function (result, query) {
        // return the new type if the query matches otherwise the previous one
        return matchMedia(mediaQueries[query]).matches ? query : result;
        // use the default orientation
    }, defaultOrientation);
}

// export the reducer factory
/* harmony default export */ __webpack_exports__["a"] = (function (breakpoints) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        initialMediaType = _ref.initialMediaType,
        _ref$infinity = _ref.infinity,
        infinity = _ref$infinity === undefined ? defaultMediaType : _ref$infinity,
        _ref$extraFields = _ref.extraFields,
        extraFields = _ref$extraFields === undefined ? function () {
        return {};
    } : _ref$extraFields;

    // accept null values
    if (!breakpoints) {
        breakpoints = defaultBreakpoints; // eslint-disable-line
    }

    // add `infinity` breakpoint for upper bound
    breakpoints[infinity] = Infinity;
    // media queries associated with the breakpoints
    var mediaQueries = __WEBPACK_IMPORTED_MODULE_0_mediaquery___default.a.asObject(breakpoints);
    // figure out the ordering
    var mediaOrdering = getOrderMap(breakpoints);

    // return reducer for handling the responsive state
    return function (state, _ref2) {
        var type = _ref2.type,
            matchMedia = _ref2.matchMedia;

        // if told to recalculate state or state has not yet been initialized
        if (type === __WEBPACK_IMPORTED_MODULE_1__actions_types_CALCULATE_RESPONSIVE_STATE__["a" /* default */] || typeof state === 'undefined') {
            // if the state has never been set before and we have an initial type
            var mediaType = !state && initialMediaType
            // use it
            ? initialMediaType
            // otherwise figure out the media type from the browser
            : getMediaType(matchMedia, mediaQueries, infinity);
            // the current orientation
            var orientation = getOrientation(matchMedia);
            // build the responsive state
            var responsiveState = {
                _responsiveState: true,
                lessThan: getLessThan(mediaType, mediaOrdering),
                greaterThan: getGreaterThan(mediaType, mediaOrdering),
                is: getIs(mediaType, breakpoints),
                mediaType: mediaType,
                orientation: orientation,
                breakpoints: breakpoints
            };

            // return calculated state
            return _extends({}, responsiveState, extraFields(responsiveState));
        }
        // otherwise return the previous state
        return state;
    };
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(1);
// action type


/**
 * Action creator taking window-like object and returning action to calculate
 * responsive state.
 * @arg {object} window - Any window-like object (has keys `innerWidth` and
 * `matchMedia`).
 * @arg {number} window.innerWidth - The value for the browser width (to pass to
 * the responsive state reducer logic).  See browser global `window.innerWidth`.
 * @arg {function} window.matchMedia - The method with which to match media
 * queries (to pass to the responsive sate reducer logic).  See global
 * `window.matchMedia`.
 * @returns {object} The resulting action.  Action will have type
 * `CALCULATE_RESPONSIVE_STATE`, and will be directly given the two keys taken
 * from the `window` argument.
 */
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      innerWidth = _ref.innerWidth,
      innerHeight = _ref.innerHeight,
      matchMedia = _ref.matchMedia;

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* CALCULATE_RESPONSIVE_STATE */],
    innerWidth: innerWidth,
    innerHeight: innerHeight,
    matchMedia: matchMedia
  };
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_createReducer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_createEnhancer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_types__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CALCULATE_RESPONSIVE_STATE", function() { return __WEBPACK_IMPORTED_MODULE_2__actions_types__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_creators__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "calculateResponsiveState", function() { return __WEBPACK_IMPORTED_MODULE_3__actions_creators__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResponsiveStateReducer", function() { return createResponsiveStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResponsiveStoreEnhancer", function() { return createResponsiveStoreEnhancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveStateReducer", function() { return responsiveStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveStoreEnhancer", function() { return responsiveStoreEnhancer; });
// local imports





// external API
var createResponsiveStateReducer = __WEBPACK_IMPORTED_MODULE_0__util_createReducer__["a" /* default */];
var createResponsiveStoreEnhancer = __WEBPACK_IMPORTED_MODULE_1__util_createEnhancer__["a" /* default */];
// provide default responsive state reducer/enhancers
var responsiveStateReducer = createResponsiveStateReducer();
var responsiveStoreEnhancer = createResponsiveStoreEnhancer();

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Searches through the given redux store and returns the breakpoints found inside.
 * @arg {object} - The redux state.
 * @returns {object} - The breakpoints associated with the responsive state inside the store.
 */
function getBreakpoints(store) {
    // grab the current state of the store
    var storeState = store.getState();

    var responsiveStateKey = void 0;
    // if the redux state root is an Immutable.js Iterable
    if (storeState['@@__IMMUTABLE_ITERABLE__@@'] === true) {
        responsiveStateKey = storeState.findKey(function (stateBranch) {
            return stateBranch._responsiveState;
        });
    } else {
        // go through every reducer at the root of the project
        responsiveStateKey = Object.keys(storeState).reduce(function (prev, current) {
            return (
                // if the reducer contains the responsive state marker then keep it
                storeState[current] && storeState[current]._responsiveState ? current : prev
                // otherwise the value should be at least falsey

            );
        }, false);
    }

    // if we couldn't find a responsive reducer at the root of the project
    if (!responsiveStateKey) {
        throw new Error('Could not find responsive state reducer. Currently, redux-responsive can only' + 'be used if the responsive reducer is at the root of your reducer tree.' + 'If you are still running into trouble, please open a ticket on github.');
    }

    // return the breakpoints in the redux store
    return storeState['@@__IMMUTABLE_ITERABLE__@@'] ? storeState.get(responsiveStateKey).breakpoints : storeState[responsiveStateKey].breakpoints;
}

/* harmony default export */ __webpack_exports__["a"] = (getBreakpoints);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mediaquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mediaquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_creators__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getBreakpoints__ = __webpack_require__(10);
// see: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries

// external imports

// local imports



// this function adds event handlers to the window that only tirgger
// when the responsive state changes
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var store = _ref.store,
        window = _ref.window,
        calculateInitialState = _ref.calculateInitialState;

    // the function to call when calculating the new responsive state
    var refreshResponsiveState = function refreshResponsiveState() {
        return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions_creators__["a" /* calculateResponsiveState */])(window));
    };

    // get the object of media queries corresponding to the breakpoints in the store
    var mediaQueries = __WEBPACK_IMPORTED_MODULE_0_mediaquery___default.a.asObject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getBreakpoints__["a" /* default */])(store));

    // for every breakpoint range
    Object.keys(mediaQueries).forEach(function (breakpoint) {
        // create a media query list for the breakpoint
        var mediaQueryList = window.matchMedia(mediaQueries[breakpoint]);

        /* eslint-disable no-loop-func */

        // whenever any of the media query lists status changes
        mediaQueryList.addListener(function (query) {
            // if a new query was matched
            if (query.matches) {
                // recaulate the state
                refreshResponsiveState();
            }
        });
    });

    // make sure we update the responsive state when the browser changes orientation
    window.addEventListener('orientationchange', refreshResponsiveState);

    // if we are supposed to calculate the initial state
    if (calculateInitialState) {
        // then do so
        refreshResponsiveState();
    }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var MQ = {

  asArray: function asArray(obj) {
    var bp = this.getBreakPoints(obj);
    var custom = this.getCustomQueries(obj);

    return this._translate(this._makeSteps(this._toSortedArray(bp)))
      .concat(this._objToArr(custom));
  },

  asObject: function asObject(obj) {
    return this._arrToObj(this.asArray(obj));
  },

  getBreakPoints: function getBreakPoints(obj) {
    return Object.keys(obj).reduce(function (prev, next) {
      if (typeof obj[next] === 'number') {
        prev[next] = obj[next];
      }
      return prev;
    }, {});
  },

  getCustomQueries: function getCustomQueries(obj) {
    return Object.keys(obj).reduce(function (prev, next) {
      if (typeof obj[next] === 'string') {
        prev[next] = obj[next];
      }
      return prev;
    }, {});
  },

  _toSortedArray: function _toSortedArray(obj) {
    return Object.keys(obj).map(function (el) {
      return [el, obj[el]];
    }).sort(function (a, b) {
      return a[1] - b[1];
    });
  },

  _makeSteps: function _makeSteps(arr) {
    return (arr[arr.length - 1][1] === Infinity)?
      arr
      : arr.concat([Infinity]);
  },

  _translate: function _translate(arr) {
    return arr.map(function (el, index) {
      return (index === 0)?
        [el[0], 'screen and (max-width: ' + el[1] + 'px)']
        : (index === arr.length - 1)?
          [(el[0] || 'default'), 'screen and (min-width: ' +
            (arr[index - 1][1] + 1) + 'px)']
          : [el[0], 'screen and (min-width: ' + (arr[index-1][1] + 1) +
            'px) and (max-width: ' + el[1] + 'px)'];
    });
  },

  _objToArr: function _objToArr(obj) {
    return Object.keys(obj).map(function (el) {
      return [el, obj[el]];
    });
  },

  _arrToObj: function _arrToObj(arr) {
    return arr.reduce(function (prev, next) {
      prev[next[0]] = next[1];
      return prev;
    }, {});
  }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = MQ;
} else {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return MQ;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else {
    window.MQ = MQ;
  }
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map