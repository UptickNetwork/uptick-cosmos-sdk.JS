// source: irismod/random/tx.proto
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

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
goog.exportSymbol('proto.irismod.random.MsgRequestRandom', null, global);
goog.exportSymbol('proto.irismod.random.MsgRequestRandomResponse', null, global);
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
proto.irismod.random.MsgRequestRandom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irismod.random.MsgRequestRandom.repeatedFields_, null);
};
goog.inherits(proto.irismod.random.MsgRequestRandom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.random.MsgRequestRandom.displayName = 'proto.irismod.random.MsgRequestRandom';
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
proto.irismod.random.MsgRequestRandomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.random.MsgRequestRandomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.random.MsgRequestRandomResponse.displayName = 'proto.irismod.random.MsgRequestRandomResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irismod.random.MsgRequestRandom.repeatedFields_ = [4];



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
proto.irismod.random.MsgRequestRandom.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.random.MsgRequestRandom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.random.MsgRequestRandom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.random.MsgRequestRandom.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockInterval: jspb.Message.getFieldWithDefault(msg, 1, 0),
    consumer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    oracle: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    serviceFeeCapList: jspb.Message.toObjectList(msg.getServiceFeeCapList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance)
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
 * @return {!proto.irismod.random.MsgRequestRandom}
 */
proto.irismod.random.MsgRequestRandom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.random.MsgRequestRandom;
  return proto.irismod.random.MsgRequestRandom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.random.MsgRequestRandom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.random.MsgRequestRandom}
 */
proto.irismod.random.MsgRequestRandom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockInterval(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumer(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOracle(value);
      break;
    case 4:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addServiceFeeCap(value);
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
proto.irismod.random.MsgRequestRandom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.random.MsgRequestRandom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.random.MsgRequestRandom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.random.MsgRequestRandom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockInterval();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getConsumer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOracle();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getServiceFeeCapList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 block_interval = 1;
 * @return {number}
 */
proto.irismod.random.MsgRequestRandom.prototype.getBlockInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.random.MsgRequestRandom} returns this
 */
proto.irismod.random.MsgRequestRandom.prototype.setBlockInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string consumer = 2;
 * @return {string}
 */
proto.irismod.random.MsgRequestRandom.prototype.getConsumer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.random.MsgRequestRandom} returns this
 */
proto.irismod.random.MsgRequestRandom.prototype.setConsumer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool oracle = 3;
 * @return {boolean}
 */
proto.irismod.random.MsgRequestRandom.prototype.getOracle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.irismod.random.MsgRequestRandom} returns this
 */
proto.irismod.random.MsgRequestRandom.prototype.setOracle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated cosmos.base.v1beta1.Coin service_fee_cap = 4;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.irismod.random.MsgRequestRandom.prototype.getServiceFeeCapList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 4));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.irismod.random.MsgRequestRandom} returns this
*/
proto.irismod.random.MsgRequestRandom.prototype.setServiceFeeCapList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.random.MsgRequestRandom.prototype.addServiceFeeCap = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.random.MsgRequestRandom} returns this
 */
proto.irismod.random.MsgRequestRandom.prototype.clearServiceFeeCapList = function() {
  return this.setServiceFeeCapList([]);
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
proto.irismod.random.MsgRequestRandomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.random.MsgRequestRandomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.random.MsgRequestRandomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.random.MsgRequestRandomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.irismod.random.MsgRequestRandomResponse}
 */
proto.irismod.random.MsgRequestRandomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.random.MsgRequestRandomResponse;
  return proto.irismod.random.MsgRequestRandomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.random.MsgRequestRandomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.random.MsgRequestRandomResponse}
 */
proto.irismod.random.MsgRequestRandomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.irismod.random.MsgRequestRandomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.random.MsgRequestRandomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.random.MsgRequestRandomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.random.MsgRequestRandomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.irismod.random);
