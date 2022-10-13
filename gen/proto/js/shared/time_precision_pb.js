// source: shared/time_precision.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.shared.TimePrecision', null, global);
/**
 * @enum {number}
 */
proto.shared.TimePrecision = {
  TIME_PRECISION_UNSPECIFIED: 0,
  TIME_PRECISION_DAY: 1,
  TIME_PRECISION_WEEK: 2,
  TIME_PRECISION_MONTH: 3,
  TIME_PRECISION_QUARTER: 4,
  TIME_PRECISION_YEAR: 5,
  TIME_PRECISION_DECADE: 6
};

goog.object.extend(exports, proto.shared);
