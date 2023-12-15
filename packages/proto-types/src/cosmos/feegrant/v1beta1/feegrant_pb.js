// source: cosmos/feegrant/v1beta1/feegrant.proto
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

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

goog.exportSymbol('proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance', null, global);
goog.exportSymbol('proto.cosmos.feegrant.v1beta1.BasicAllowance', null, global);
goog.exportSymbol('proto.cosmos.feegrant.v1beta1.Grant', null, global);
goog.exportSymbol('proto.cosmos.feegrant.v1beta1.PeriodicAllowance', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.feegrant.v1beta1.BasicAllowance.repeatedFields_, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.BasicAllowance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.BasicAllowance.displayName = 'proto.cosmos.feegrant.v1beta1.BasicAllowance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.feegrant.v1beta1.PeriodicAllowance.repeatedFields_, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.PeriodicAllowance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.PeriodicAllowance.displayName = 'proto.cosmos.feegrant.v1beta1.PeriodicAllowance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.repeatedFields_, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.displayName = 'proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.feegrant.v1beta1.Grant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.Grant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.Grant.displayName = 'proto.cosmos.feegrant.v1beta1.Grant';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.BasicAllowance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.BasicAllowance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.toObject = function(includeInstance, msg) {
  var f, obj = {
    spendLimitList: jspb.Message.toObjectList(msg.getSpendLimitList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    expiration: (f = msg.getExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.feegrant.v1beta1.BasicAllowance}
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.BasicAllowance;
  return proto.cosmos.feegrant.v1beta1.BasicAllowance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.BasicAllowance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.BasicAllowance}
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addSpendLimit(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.BasicAllowance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.BasicAllowance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpendLimitList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated cosmos.base.v1beta1.Coin spend_limit = 1;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.getSpendLimitList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 1));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.cosmos.feegrant.v1beta1.BasicAllowance} returns this
*/
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.setSpendLimitList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.addSpendLimit = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.feegrant.v1beta1.BasicAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.clearSpendLimitList = function() {
  return this.setSpendLimitList([]);
};


/**
 * optional google.protobuf.Timestamp expiration = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.getExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.BasicAllowance} returns this
*/
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.BasicAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.BasicAllowance.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.PeriodicAllowance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.toObject = function(includeInstance, msg) {
  var f, obj = {
    basic: (f = msg.getBasic()) && proto.cosmos.feegrant.v1beta1.BasicAllowance.toObject(includeInstance, f),
    period: (f = msg.getPeriod()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    periodSpendLimitList: jspb.Message.toObjectList(msg.getPeriodSpendLimitList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    periodCanSpendList: jspb.Message.toObjectList(msg.getPeriodCanSpendList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    periodReset: (f = msg.getPeriodReset()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.PeriodicAllowance;
  return proto.cosmos.feegrant.v1beta1.PeriodicAllowance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cosmos.feegrant.v1beta1.BasicAllowance;
      reader.readMessage(value,proto.cosmos.feegrant.v1beta1.BasicAllowance.deserializeBinaryFromReader);
      msg.setBasic(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPeriod(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addPeriodSpendLimit(value);
      break;
    case 4:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addPeriodCanSpend(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPeriodReset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.PeriodicAllowance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cosmos.feegrant.v1beta1.BasicAllowance.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPeriodSpendLimitList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getPeriodCanSpendList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getPeriodReset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional BasicAllowance basic = 1;
 * @return {?proto.cosmos.feegrant.v1beta1.BasicAllowance}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.getBasic = function() {
  return /** @type{?proto.cosmos.feegrant.v1beta1.BasicAllowance} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.feegrant.v1beta1.BasicAllowance, 1));
};


/**
 * @param {?proto.cosmos.feegrant.v1beta1.BasicAllowance|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
*/
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.setBasic = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.clearBasic = function() {
  return this.setBasic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.hasBasic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration period = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.getPeriod = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
*/
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.setPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated cosmos.base.v1beta1.Coin period_spend_limit = 3;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.getPeriodSpendLimitList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
*/
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.setPeriodSpendLimitList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.addPeriodSpendLimit = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.clearPeriodSpendLimitList = function() {
  return this.setPeriodSpendLimitList([]);
};


/**
 * repeated cosmos.base.v1beta1.Coin period_can_spend = 4;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.getPeriodCanSpendList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 4));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
*/
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.setPeriodCanSpendList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.addPeriodCanSpend = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.clearPeriodCanSpendList = function() {
  return this.setPeriodCanSpendList([]);
};


/**
 * optional google.protobuf.Timestamp period_reset = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.getPeriodReset = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
*/
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.setPeriodReset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.PeriodicAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.clearPeriodReset = function() {
  return this.setPeriodReset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.PeriodicAllowance.prototype.hasPeriodReset = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowance: (f = msg.getAllowance()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    allowedMessagesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance}
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance;
  return proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance}
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getAllowedMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Any allowance = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.getAllowance = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance} returns this
*/
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string allowed_messages = 2;
 * @return {!Array<string>}
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.getAllowedMessagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.setAllowedMessagesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.addAllowedMessages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance} returns this
 */
proto.cosmos.feegrant.v1beta1.AllowedMsgAllowance.prototype.clearAllowedMessagesList = function() {
  return this.setAllowedMessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.Grant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.Grant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.Grant.toObject = function(includeInstance, msg) {
  var f, obj = {
    granter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantee: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowance: (f = msg.getAllowance()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.feegrant.v1beta1.Grant}
 */
proto.cosmos.feegrant.v1beta1.Grant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.Grant;
  return proto.cosmos.feegrant.v1beta1.Grant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.Grant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.Grant}
 */
proto.cosmos.feegrant.v1beta1.Grant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGranter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantee(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.Grant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.Grant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.Grant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGranter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantee();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string granter = 1;
 * @return {string}
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.getGranter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.feegrant.v1beta1.Grant} returns this
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.setGranter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string grantee = 2;
 * @return {string}
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.getGrantee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.feegrant.v1beta1.Grant} returns this
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.setGrantee = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Any allowance = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.getAllowance = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.Grant} returns this
*/
proto.cosmos.feegrant.v1beta1.Grant.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.Grant} returns this
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.Grant.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.cosmos.feegrant.v1beta1);
