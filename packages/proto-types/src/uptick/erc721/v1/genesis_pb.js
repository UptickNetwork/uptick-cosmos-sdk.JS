// source: uptick/erc721/v1/genesis.proto
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
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var uptick_erc721_v1_erc721_pb = require('../../../uptick/erc721/v1/erc721_pb.js');

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');

goog.exportSymbol('proto.uptick.erc721.v1.GenesisState', null, global);
goog.exportSymbol('proto.uptick.erc721.v1.Params', null, global);
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
proto.uptick.erc721.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.uptick.erc721.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.uptick.erc721.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.erc721.v1.GenesisState.displayName = 'proto.uptick.erc721.v1.GenesisState';
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
proto.uptick.erc721.v1.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.erc721.v1.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.erc721.v1.Params.displayName = 'proto.uptick.erc721.v1.Params';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.uptick.erc721.v1.GenesisState.repeatedFields_ = [2];



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
proto.uptick.erc721.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.erc721.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.erc721.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc721.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && proto.uptick.erc721.v1.Params.toObject(includeInstance, f),
    tokenPairsList: jspb.Message.toObjectList(msg.getTokenPairsList(),
    uptick_erc721_v1_erc721_pb.TokenPair.toObject, includeInstance)
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
 * @return {!proto.uptick.erc721.v1.GenesisState}
 */
proto.uptick.erc721.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.erc721.v1.GenesisState;
  return proto.uptick.erc721.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.erc721.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.erc721.v1.GenesisState}
 */
proto.uptick.erc721.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.uptick.erc721.v1.Params;
      reader.readMessage(value,proto.uptick.erc721.v1.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new uptick_erc721_v1_erc721_pb.TokenPair;
      reader.readMessage(value,uptick_erc721_v1_erc721_pb.TokenPair.deserializeBinaryFromReader);
      msg.addTokenPairs(value);
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
proto.uptick.erc721.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.erc721.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.erc721.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc721.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.uptick.erc721.v1.Params.serializeBinaryToWriter
    );
  }
  f = message.getTokenPairsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      uptick_erc721_v1_erc721_pb.TokenPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.uptick.erc721.v1.Params}
 */
proto.uptick.erc721.v1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.uptick.erc721.v1.Params} */ (
    jspb.Message.getWrapperField(this, proto.uptick.erc721.v1.Params, 1));
};


/**
 * @param {?proto.uptick.erc721.v1.Params|undefined} value
 * @return {!proto.uptick.erc721.v1.GenesisState} returns this
*/
proto.uptick.erc721.v1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.uptick.erc721.v1.GenesisState} returns this
 */
proto.uptick.erc721.v1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.uptick.erc721.v1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TokenPair token_pairs = 2;
 * @return {!Array<!proto.uptick.erc721.v1.TokenPair>}
 */
proto.uptick.erc721.v1.GenesisState.prototype.getTokenPairsList = function() {
  return /** @type{!Array<!proto.uptick.erc721.v1.TokenPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, uptick_erc721_v1_erc721_pb.TokenPair, 2));
};


/**
 * @param {!Array<!proto.uptick.erc721.v1.TokenPair>} value
 * @return {!proto.uptick.erc721.v1.GenesisState} returns this
*/
proto.uptick.erc721.v1.GenesisState.prototype.setTokenPairsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.uptick.erc721.v1.TokenPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.uptick.erc721.v1.TokenPair}
 */
proto.uptick.erc721.v1.GenesisState.prototype.addTokenPairs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.uptick.erc721.v1.TokenPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.uptick.erc721.v1.GenesisState} returns this
 */
proto.uptick.erc721.v1.GenesisState.prototype.clearTokenPairsList = function() {
  return this.setTokenPairsList([]);
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
proto.uptick.erc721.v1.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.erc721.v1.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.erc721.v1.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc721.v1.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableErc721: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    enableEvmHook: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.uptick.erc721.v1.Params}
 */
proto.uptick.erc721.v1.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.erc721.v1.Params;
  return proto.uptick.erc721.v1.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.erc721.v1.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.erc721.v1.Params}
 */
proto.uptick.erc721.v1.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableErc721(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableEvmHook(value);
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
proto.uptick.erc721.v1.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.erc721.v1.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.erc721.v1.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc721.v1.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableErc721();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEnableEvmHook();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool enable_erc721 = 1;
 * @return {boolean}
 */
proto.uptick.erc721.v1.Params.prototype.getEnableErc721 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.uptick.erc721.v1.Params} returns this
 */
proto.uptick.erc721.v1.Params.prototype.setEnableErc721 = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool enable_evm_hook = 2;
 * @return {boolean}
 */
proto.uptick.erc721.v1.Params.prototype.getEnableEvmHook = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.uptick.erc721.v1.Params} returns this
 */
proto.uptick.erc721.v1.Params.prototype.setEnableEvmHook = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.uptick.erc721.v1);
