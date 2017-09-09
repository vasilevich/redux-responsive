var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// third party imports
import { createStore } from 'redux';
import { combineReducers as immutableCombine } from 'redux-immutablejs';
// local imports
import createReducer, { computeOrder, getLessThan, getGreaterThan, getIs, getOrderMap } from './createReducer';

var possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789';
function randomString(length) {
    var result = '';
    for (var i = 0; i < length; i++) {
        result += possibleChars[Math.floor(possibleChars.length * Math.random())];
    }
    return result;
}

describe('createReducer', function () {
    describe('with default breakpoints', function () {
        // assigned in `beforeEach`
        var reducer = void 0;

        beforeEach(function () {
            reducer = createReducer();
        });

        it('returns a function', function () {
            expect(typeof reducer === 'undefined' ? 'undefined' : _typeof(reducer)).toBe('function');
        });
    });

    describe('with custom breakpoints', function () {
        // number of breakpoints to randomly generate
        var numBreakpoints = Math.floor(10 * Math.random());
        // maximum length of randomly generated media type strings
        var mediaTypeMaxLength = 50;
        // maximum value for randomly generated breakpoint values
        var breakpointMaxValue = 10000;

        // assigned in `beforeEach`
        var reducer = void 0;
        var breakpoints = void 0;

        beforeEach(function () {
            // randomly generate breakpoints object
            breakpoints = {};
            for (var i = 0; i < numBreakpoints; i++) {
                var mediaType = randomString(Math.ceil(mediaTypeMaxLength * Math.random()));
                var breakpoint = Math.floor(breakpointMaxValue * Math.random());

                breakpoints[mediaType] = breakpoint;
            }
            // create reducer based on random breakpoints
            reducer = createReducer(breakpoints);
        });

        describe('the reducer', function () {
            // maximum length of randomly generated action type strings
            var actionTypeMaxLength = 50;

            it('is a function', function () {
                expect(typeof reducer === 'undefined' ? 'undefined' : _typeof(reducer)).toBe('function');
            });

            it('returns the input state for unknown actions and state !== undefined', function () {
                // randomly generate an action
                var action = {
                    type: randomString(Math.ceil(actionTypeMaxLength * Math.random()))
                };
                // non-undefined input state
                var state = Math.random();

                // should return unaltered state
                expect(reducer(state, action)).toBe(state);
            });
        });
        it('correctly orders two breakpoints', function () {
            // the breakpoints to test against
            var breakpointOrdering = getOrderMap({
                small: 500,
                medium: 800,
                large: 1000,
                foo: 'bar'
            });

            // figure out the ordering for the smaller one
            var smallerOrder = breakpointOrdering['small'];
            // figure out the ordering for the larger one
            var largerOrder = breakpointOrdering['large'];

            // make sure the larger order is bigger than the smaller
            expect(breakpointOrdering).toEqual({
                small: 0,
                medium: 1,
                large: 2,
                foo: 3
            });
        });
    });

    describe('reducer factory', function () {

        var breakpoints = {
            small: 500,
            medium: 1000,
            large: 15000
        };

        it('correctly injects initial state', function () {
            // create a reducer with the initial state
            var reducer = createReducer(breakpoints, {
                initialMediaType: 'small'
            });

            // create a redux store with the reducer
            var store = createStore(reducer);

            // the expected value for the lessThan object
            var expectedLessThan = {
                small: false,
                medium: true,
                large: true,
                infinity: true
            };

            // make sure we were able to correctly inject the initial state
            expect(store.getState().lessThan).toEqual(expectedLessThan);
        });

        it('correctly injects initialMediaType into immutable reducer', function () {
            // create a reducer with the initial state
            var reducer = createReducer(breakpoints, {
                initialMediaType: 'small'
            });

            // create a redux store with the reducer
            var store = createStore(immutableCombine({
                browser: reducer
            }));

            // the expected value for the lessThan object
            var expectedLessThan = {
                small: false,
                medium: true,
                large: true,
                infinity: true
            };

            // make sure we were able to correctly inject the initial state
            expect(store.getState().get('browser').lessThan).toEqual(expectedLessThan);
        });
    });

    // the breakpoints to test against
    var breakpoints = {
        small: 0,
        medium: 1,
        large: 2,
        foo: 'bar'
    };
    // the current media type
    var currentType = 'medium';

    it('can compute the less than object', function () {
        // the expectation lessThan
        var expected = {
            small: false,
            medium: false,
            large: true,
            foo: false
        };
        // make sure the computed lessThan object matches exepctation
        expect(getLessThan(currentType, breakpoints)).toEqual(expected);
    });

    it('can compute the greater than object', function () {
        // the expectation lessThan
        var expected = {
            small: true,
            medium: false,
            large: false,
            foo: false
        };
        // make sure the computed lessThan object matches exepctation
        expect(getGreaterThan(currentType, breakpoints)).toEqual(expected);
    });

    it('can compute the is object', function () {
        // the expectation lessThan
        var expected = {
            small: false,
            medium: true,
            large: false,
            foo: false
        };
        // make sure the computed lessThan object matches exepctation
        expect(getIs(currentType, breakpoints)).toEqual(expected);
    });
});