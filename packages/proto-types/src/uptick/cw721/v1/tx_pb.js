// source: uptick/cw721/v1/tx.proto
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
goog.object.extend(proto, google_api_annotations_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.uptick.cw721.v1.MsgConvertCW721', null, global);
goog.exportSymbol('proto.uptick.cw721.v1.MsgConvertCW721Response', null, global);
goog.exportSymbol('proto.uptick.cw721.v1.MsgConvertNFT', null, global);
goog.exportSymbol('proto.uptick.cw721.v1.MsgConvertNFTResponse', null, global);
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
proto.uptick.cw721.v1.MsgConvertNFT = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.uptick.cw721.v1.MsgConvertNFT.repeatedFields_, null);
};
goog.inherits(proto.uptick.cw721.v1.MsgConvertNFT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.cw721.v1.MsgConvertNFT.displayName = 'proto.uptick.cw721.v1.MsgConvertNFT';
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
proto.uptick.cw721.v1.MsgConvertNFTResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.cw721.v1.MsgConvertNFTResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.cw721.v1.MsgConvertNFTResponse.displayName = 'proto.uptick.cw721.v1.MsgConvertNFTResponse';
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
proto.uptick.cw721.v1.MsgConvertCW721 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.uptick.cw721.v1.MsgConvertCW721.repeatedFields_, null);
};
goog.inherits(proto.uptick.cw721.v1.MsgConvertCW721, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.cw721.v1.MsgConvertCW721.displayName = 'proto.uptick.cw721.v1.MsgConvertCW721';
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
proto.uptick.cw721.v1.MsgConvertCW721Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.uptick.cw721.v1.MsgConvertCW721Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.uptick.cw721.v1.MsgConvertCW721Response.displayName = 'proto.uptick.cw721.v1.MsgConvertCW721Response';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.uptick.cw721.v1.MsgConvertNFT.repeatedFields_ = [2,6];



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
proto.uptick.cw721.v1.MsgConvertNFT.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.cw721.v1.MsgConvertNFT.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.cw721.v1.MsgConvertNFT} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.cw721.v1.MsgConvertNFT.toObject = function(includeInstance, msg) {
  var f, obj = {
    classId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nftIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    receiver: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contractAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tokenIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT}
 */
proto.uptick.cw721.v1.MsgConvertNFT.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.cw721.v1.MsgConvertNFT;
  return proto.uptick.cw721.v1.MsgConvertNFT.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.cw721.v1.MsgConvertNFT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT}
 */
proto.uptick.cw721.v1.MsgConvertNFT.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addNftIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokenIds(value);
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
proto.uptick.cw721.v1.MsgConvertNFT.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.cw721.v1.MsgConvertNFT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.cw721.v1.MsgConvertNFT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.cw721.v1.MsgConvertNFT.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClassId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNftIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTokenIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string class_id = 1;
 * @return {string}
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.getClassId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.setClassId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string nft_ids = 2;
 * @return {!Array<string>}
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.getNftIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.setNftIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.addNftIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.clearNftIdsList = function() {
  return this.setNftIdsList([]);
};


/**
 * optional string receiver = 3;
 * @return {string}
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sender = 4;
 * @return {string}
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string contract_address = 5;
 * @return {string}
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.setContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string token_ids = 6;
 * @return {!Array<string>}
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.getTokenIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.setTokenIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.addTokenIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.uptick.cw721.v1.MsgConvertNFT} returns this
 */
proto.uptick.cw721.v1.MsgConvertNFT.prototype.clearTokenIdsList = function() {
  return this.setTokenIdsList([]);
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
proto.uptick.cw721.v1.MsgConvertNFTResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.cw721.v1.MsgConvertNFTResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.cw721.v1.MsgConvertNFTResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.cw721.v1.MsgConvertNFTResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.uptick.cw721.v1.MsgConvertNFTResponse}
 */
proto.uptick.cw721.v1.MsgConvertNFTResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.cw721.v1.MsgConvertNFTResponse;
  return proto.uptick.cw721.v1.MsgConvertNFTResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.cw721.v1.MsgConvertNFTResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.cw721.v1.MsgConvertNFTResponse}
 */
proto.uptick.cw721.v1.MsgConvertNFTResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.uptick.cw721.v1.MsgConvertNFTResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.cw721.v1.MsgConvertNFTResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.cw721.v1.MsgConvertNFTResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.cw721.v1.MsgConvertNFTResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.uptick.cw721.v1.MsgConvertCW721.repeatedFields_ = [2,6];



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
proto.uptick.cw721.v1.MsgConvertCW721.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.cw721.v1.MsgConvertCW721.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.cw721.v1.MsgConvertCW721} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.cw721.v1.MsgConvertCW721.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tokenIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    receiver: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 4, ""),
    classId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nftIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721}
 */
proto.uptick.cw721.v1.MsgConvertCW721.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.cw721.v1.MsgConvertCW721;
  return proto.uptick.cw721.v1.MsgConvertCW721.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.cw721.v1.MsgConvertCW721} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721}
 */
proto.uptick.cw721.v1.MsgConvertCW721.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addTokenIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addNftIds(value);
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
proto.uptick.cw721.v1.MsgConvertCW721.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.cw721.v1.MsgConvertCW721.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.cw721.v1.MsgConvertCW721} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.cw721.v1.MsgConvertCW721.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
  f = message.getClassId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNftIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.setContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string token_ids = 2;
 * @return {!Array<string>}
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.getTokenIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.setTokenIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.addTokenIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.clearTokenIdsList = function() {
  return this.setTokenIdsList([]);
};


/**
 * optional string receiver = 3;
 * @return {string}
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sender = 4;
 * @return {string}
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string class_id = 5;
 * @return {string}
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.getClassId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.setClassId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string nft_ids = 6;
 * @return {!Array<string>}
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.getNftIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.setNftIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.addNftIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721} returns this
 */
proto.uptick.cw721.v1.MsgConvertCW721.prototype.clearNftIdsList = function() {
  return this.setNftIdsList([]);
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
proto.uptick.cw721.v1.MsgConvertCW721Response.prototype.toObject = function(opt_includeInstance) {
  return proto.uptick.cw721.v1.MsgConvertCW721Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.uptick.cw721.v1.MsgConvertCW721Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.cw721.v1.MsgConvertCW721Response.toObject = function(includeInstance, msg) {
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
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721Response}
 */
proto.uptick.cw721.v1.MsgConvertCW721Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.uptick.cw721.v1.MsgConvertCW721Response;
  return proto.uptick.cw721.v1.MsgConvertCW721Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.uptick.cw721.v1.MsgConvertCW721Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.uptick.cw721.v1.MsgConvertCW721Response}
 */
proto.uptick.cw721.v1.MsgConvertCW721Response.deserializeBinaryFromReader = function(msg, reader) {
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
proto.uptick.cw721.v1.MsgConvertCW721Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.uptick.cw721.v1.MsgConvertCW721Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.uptick.cw721.v1.MsgConvertCW721Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.uptick.cw721.v1.MsgConvertCW721Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.uptick.cw721.v1);
