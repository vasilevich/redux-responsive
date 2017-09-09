var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// third party imports
import MediaQuery from 'mediaquery';
// local imports
import CALCULATE_RESPONSIVE_STATE from '../actions/types/CALCULATE_RESPONSIVE_STATE';

// default breakpoints
export var defaultBreakpoints = {
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
export function getOrderMap(bps) {
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
export function getLessThan(currentMediaType, breakpointOrder) {
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
export function getIs(currentMediaType, breakpoints) {
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
export function getGreaterThan(currentMediaType, breakpointOrder) {
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
export default (function (breakpoints) {
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
    var mediaQueries = MediaQuery.asObject(breakpoints);
    // figure out the ordering
    var mediaOrdering = getOrderMap(breakpoints);

    // return reducer for handling the responsive state
    return function (state, _ref2) {
        var type = _ref2.type,
            matchMedia = _ref2.matchMedia;

        // if told to recalculate state or state has not yet been initialized
        if (type === CALCULATE_RESPONSIVE_STATE || typeof state === 'undefined') {
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