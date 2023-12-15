// source: uptick/erc20/v1/tx.proto
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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

var ibc_core_client_v1_client_pb = require('../../../ibc/core/client/v1/client_pb.js');

goog.exportSymbol('proto.uptick.erc20.v1.MsgConvertCoin', null, global);
goog.exportSymbol('proto.uptick.erc20.v1.MsgConvertCoinResponse', null, global);
goog.exportSymbol('proto.uptick.erc20.v1.MsgConvertERC20', null, global);
goog.exportSymbol('proto.uptick.erc20.v1.MsgConvertERC20Response', null, global);
goog.exportSymbol('proto.uptick.erc20.v1.MsgTransferERC20', null, global);
goog.exportSymbol('proto.uptick.erc20.v1.MsgTransferERC20Response', null, global);
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
proto.uptick.erc20.v1.MsgConvertCoin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.erc20.v1.MsgConvertCoin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.erc20.v1.MsgConvertCoin.displayName = 'proto.uptick.erc20.v1.MsgConvertCoin';
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
proto.uptick.erc20.v1.MsgConvertCoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.erc20.v1.MsgConvertCoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.erc20.v1.MsgConvertCoinResponse.displayName = 'proto.uptick.erc20.v1.MsgConvertCoinResponse';
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
proto.uptick.erc20.v1.MsgConvertERC20 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.erc20.v1.MsgConvertERC20, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.erc20.v1.MsgConvertERC20.displayName = 'proto.uptick.erc20.v1.MsgConvertERC20';
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
proto.uptick.erc20.v1.MsgConvertERC20Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.erc20.v1.MsgConvertERC20Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.erc20.v1.MsgConvertERC20Response.displayName = 'proto.uptick.erc20.v1.MsgConvertERC20Response';
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
proto.uptick.erc20.v1.MsgTransferERC20 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.erc20.v1.MsgTransferERC20, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.erc20.v1.MsgTransferERC20.displayName = 'proto.uptick.erc20.v1.MsgTransferERC20';
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
proto.uptick.erc20.v1.MsgTransferERC20Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.erc20.v1.MsgTransferERC20Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.erc20.v1.MsgTransferERC20Response.displayName = 'proto.uptick.erc20.v1.MsgTransferERC20Response';
}



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
proto.uptick.erc20.v1.MsgConvertCoin.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.erc20.v1.MsgConvertCoin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.erc20.v1.MsgConvertCoin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgConvertCoin.toObject = function(includeInstance, msg) {
  var f, obj = {
    coin: (f = msg.getCoin()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    receiver: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.uptick.erc20.v1.MsgConvertCoin}
 */
proto.uptick.erc20.v1.MsgConvertCoin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.erc20.v1.MsgConvertCoin;
  return proto.uptick.erc20.v1.MsgConvertCoin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.erc20.v1.MsgConvertCoin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.erc20.v1.MsgConvertCoin}
 */
proto.uptick.erc20.v1.MsgConvertCoin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setCoin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
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
proto.uptick.erc20.v1.MsgConvertCoin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.erc20.v1.MsgConvertCoin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.erc20.v1.MsgConvertCoin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgConvertCoin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cosmos.base.v1beta1.Coin coin = 1;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.uptick.erc20.v1.MsgConvertCoin.prototype.getCoin = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 1));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.uptick.erc20.v1.MsgConvertCoin} returns this
*/
proto.uptick.erc20.v1.MsgConvertCoin.prototype.setCoin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.uptick.erc20.v1.MsgConvertCoin} returns this
 */
proto.uptick.erc20.v1.MsgConvertCoin.prototype.clearCoin = function() {
  return this.setCoin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.uptick.erc20.v1.MsgConvertCoin.prototype.hasCoin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string receiver = 2;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgConvertCoin.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgConvertCoin} returns this
 */
proto.uptick.erc20.v1.MsgConvertCoin.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sender = 3;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgConvertCoin.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgConvertCoin} returns this
 */
proto.uptick.erc20.v1.MsgConvertCoin.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.uptick.erc20.v1.MsgConvertCoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.erc20.v1.MsgConvertCoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.erc20.v1.MsgConvertCoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgConvertCoinResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.uptick.erc20.v1.MsgConvertCoinResponse}
 */
proto.uptick.erc20.v1.MsgConvertCoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.erc20.v1.MsgConvertCoinResponse;
  return proto.uptick.erc20.v1.MsgConvertCoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.erc20.v1.MsgConvertCoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.erc20.v1.MsgConvertCoinResponse}
 */
proto.uptick.erc20.v1.MsgConvertCoinResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.uptick.erc20.v1.MsgConvertCoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.erc20.v1.MsgConvertCoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.erc20.v1.MsgConvertCoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgConvertCoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.uptick.erc20.v1.MsgConvertERC20.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.erc20.v1.MsgConvertERC20.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.erc20.v1.MsgConvertERC20} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgConvertERC20.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    receiver: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.uptick.erc20.v1.MsgConvertERC20}
 */
proto.uptick.erc20.v1.MsgConvertERC20.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.erc20.v1.MsgConvertERC20;
  return proto.uptick.erc20.v1.MsgConvertERC20.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.erc20.v1.MsgConvertERC20} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.erc20.v1.MsgConvertERC20}
 */
proto.uptick.erc20.v1.MsgConvertERC20.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
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
proto.uptick.erc20.v1.MsgConvertERC20.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.erc20.v1.MsgConvertERC20.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.erc20.v1.MsgConvertERC20} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgConvertERC20.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgConvertERC20.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgConvertERC20} returns this
 */
proto.uptick.erc20.v1.MsgConvertERC20.prototype.setContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgConvertERC20.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgConvertERC20} returns this
 */
proto.uptick.erc20.v1.MsgConvertERC20.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string receiver = 3;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgConvertERC20.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgConvertERC20} returns this
 */
proto.uptick.erc20.v1.MsgConvertERC20.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sender = 4;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgConvertERC20.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgConvertERC20} returns this
 */
proto.uptick.erc20.v1.MsgConvertERC20.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.uptick.erc20.v1.MsgConvertERC20Response.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.erc20.v1.MsgConvertERC20Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.erc20.v1.MsgConvertERC20Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgConvertERC20Response.toObject = function(includeInstance, msg) {
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
 * @return {!proto.uptick.erc20.v1.MsgConvertERC20Response}
 */
proto.uptick.erc20.v1.MsgConvertERC20Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.erc20.v1.MsgConvertERC20Response;
  return proto.uptick.erc20.v1.MsgConvertERC20Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.erc20.v1.MsgConvertERC20Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.erc20.v1.MsgConvertERC20Response}
 */
proto.uptick.erc20.v1.MsgConvertERC20Response.deserializeBinaryFromReader = function(msg, reader) {
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
proto.uptick.erc20.v1.MsgConvertERC20Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.erc20.v1.MsgConvertERC20Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.erc20.v1.MsgConvertERC20Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgConvertERC20Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.uptick.erc20.v1.MsgTransferERC20.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.erc20.v1.MsgTransferERC20.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.erc20.v1.MsgTransferERC20} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgTransferERC20.toObject = function(includeInstance, msg) {
  var f, obj = {
    evmContractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sourcePort: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sourceChannel: jspb.Message.getFieldWithDefault(msg, 4, ""),
    evmSender: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cosmosReceiver: jspb.Message.getFieldWithDefault(msg, 6, ""),
    timeoutHeight: jspb.Message.getFieldWithDefault(msg, 7, 0),
    timeoutTimestamp: jspb.Message.getFieldWithDefault(msg, 8, 0),
    memo: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20}
 */
proto.uptick.erc20.v1.MsgTransferERC20.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.erc20.v1.MsgTransferERC20;
  return proto.uptick.erc20.v1.MsgTransferERC20.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.erc20.v1.MsgTransferERC20} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20}
 */
proto.uptick.erc20.v1.MsgTransferERC20.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvmContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcePort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceChannel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvmSender(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCosmosReceiver(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeoutHeight(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeoutTimestamp(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
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
proto.uptick.erc20.v1.MsgTransferERC20.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.erc20.v1.MsgTransferERC20.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.erc20.v1.MsgTransferERC20} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgTransferERC20.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvmContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSourcePort();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSourceChannel();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEvmSender();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCosmosReceiver();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTimeoutHeight();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTimeoutTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string evm_contract_address = 1;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getEvmContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setEvmContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string source_port = 3;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getSourcePort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setSourcePort = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string source_channel = 4;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getSourceChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setSourceChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string evm_sender = 5;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getEvmSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setEvmSender = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cosmos_receiver = 6;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getCosmosReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setCosmosReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 timeout_height = 7;
 * @return {number}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getTimeoutHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setTimeoutHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 timeout_timestamp = 8;
 * @return {number}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getTimeoutTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setTimeoutTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string memo = 9;
 * @return {string}
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20} returns this
 */
proto.uptick.erc20.v1.MsgTransferERC20.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.uptick.erc20.v1.MsgTransferERC20Response.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.erc20.v1.MsgTransferERC20Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.erc20.v1.MsgTransferERC20Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgTransferERC20Response.toObject = function(includeInstance, msg) {
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
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20Response}
 */
proto.uptick.erc20.v1.MsgTransferERC20Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.erc20.v1.MsgTransferERC20Response;
  return proto.uptick.erc20.v1.MsgTransferERC20Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.erc20.v1.MsgTransferERC20Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.erc20.v1.MsgTransferERC20Response}
 */
proto.uptick.erc20.v1.MsgTransferERC20Response.deserializeBinaryFromReader = function(msg, reader) {
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
proto.uptick.erc20.v1.MsgTransferERC20Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.erc20.v1.MsgTransferERC20Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.erc20.v1.MsgTransferERC20Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.erc20.v1.MsgTransferERC20Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.uptick.erc20.v1);
