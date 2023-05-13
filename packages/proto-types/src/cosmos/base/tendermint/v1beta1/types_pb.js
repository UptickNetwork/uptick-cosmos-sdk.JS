// source: cosmos/base/tendermint/v1beta1/types.proto
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

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var tendermint_types_types_pb = require('../../../../tendermint/types/types_pb.js');
goog.object.extend(proto, tendermint_types_types_pb);
var tendermint_types_evidence_pb = require('../../../../tendermint/types/evidence_pb.js');
goog.object.extend(proto, tendermint_types_evidence_pb);
var tendermint_version_types_pb = require('../../../../tendermint/version/types_pb.js');
goog.object.extend(proto, tendermint_version_types_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.cosmos.base.tendermint.v1beta1.Block', null, global);
goog.exportSymbol('proto.cosmos.base.tendermint.v1beta1.Header', null, global);
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
proto.cosmos.base.tendermint.v1beta1.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.base.tendermint.v1beta1.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.tendermint.v1beta1.Block.displayName = 'proto.cosmos.base.tendermint.v1beta1.Block';
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
proto.cosmos.base.tendermint.v1beta1.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.base.tendermint.v1beta1.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.tendermint.v1beta1.Header.displayName = 'proto.cosmos.base.tendermint.v1beta1.Header';
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
proto.cosmos.base.tendermint.v1beta1.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.base.tendermint.v1beta1.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.tendermint.v1beta1.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.tendermint.v1beta1.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cosmos.base.tendermint.v1beta1.Header.toObject(includeInstance, f),
    data: (f = msg.getData()) && tendermint_types_types_pb.Data.toObject(includeInstance, f),
    evidence: (f = msg.getEvidence()) && tendermint_types_evidence_pb.EvidenceList.toObject(includeInstance, f),
    lastCommit: (f = msg.getLastCommit()) && tendermint_types_types_pb.Commit.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block}
 */
proto.cosmos.base.tendermint.v1beta1.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.base.tendermint.v1beta1.Block;
  return proto.cosmos.base.tendermint.v1beta1.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.tendermint.v1beta1.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block}
 */
proto.cosmos.base.tendermint.v1beta1.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cosmos.base.tendermint.v1beta1.Header;
      reader.readMessage(value,proto.cosmos.base.tendermint.v1beta1.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new tendermint_types_types_pb.Data;
      reader.readMessage(value,tendermint_types_types_pb.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = new tendermint_types_evidence_pb.EvidenceList;
      reader.readMessage(value,tendermint_types_evidence_pb.EvidenceList.deserializeBinaryFromReader);
      msg.setEvidence(value);
      break;
    case 4:
      var value = new tendermint_types_types_pb.Commit;
      reader.readMessage(value,tendermint_types_types_pb.Commit.deserializeBinaryFromReader);
      msg.setLastCommit(value);
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
proto.cosmos.base.tendermint.v1beta1.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.base.tendermint.v1beta1.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.tendermint.v1beta1.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.tendermint.v1beta1.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cosmos.base.tendermint.v1beta1.Header.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tendermint_types_types_pb.Data.serializeBinaryToWriter
    );
  }
  f = message.getEvidence();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tendermint_types_evidence_pb.EvidenceList.serializeBinaryToWriter
    );
  }
  f = message.getLastCommit();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tendermint_types_types_pb.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cosmos.base.tendermint.v1beta1.Header}
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.getHeader = function() {
  return /** @type{?proto.cosmos.base.tendermint.v1beta1.Header} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.base.tendermint.v1beta1.Header, 1));
};


/**
 * @param {?proto.cosmos.base.tendermint.v1beta1.Header|undefined} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block} returns this
*/
proto.cosmos.base.tendermint.v1beta1.Block.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional tendermint.types.Data data = 2;
 * @return {?proto.tendermint.types.Data}
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.getData = function() {
  return /** @type{?proto.tendermint.types.Data} */ (
    jspb.Message.getWrapperField(this, tendermint_types_types_pb.Data, 2));
};


/**
 * @param {?proto.tendermint.types.Data|undefined} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block} returns this
*/
proto.cosmos.base.tendermint.v1beta1.Block.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional tendermint.types.EvidenceList evidence = 3;
 * @return {?proto.tendermint.types.EvidenceList}
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.getEvidence = function() {
  return /** @type{?proto.tendermint.types.EvidenceList} */ (
    jspb.Message.getWrapperField(this, tendermint_types_evidence_pb.EvidenceList, 3));
};


/**
 * @param {?proto.tendermint.types.EvidenceList|undefined} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block} returns this
*/
proto.cosmos.base.tendermint.v1beta1.Block.prototype.setEvidence = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.clearEvidence = function() {
  return this.setEvidence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.hasEvidence = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional tendermint.types.Commit last_commit = 4;
 * @return {?proto.tendermint.types.Commit}
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.getLastCommit = function() {
  return /** @type{?proto.tendermint.types.Commit} */ (
    jspb.Message.getWrapperField(this, tendermint_types_types_pb.Commit, 4));
};


/**
 * @param {?proto.tendermint.types.Commit|undefined} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block} returns this
*/
proto.cosmos.base.tendermint.v1beta1.Block.prototype.setLastCommit = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Block} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.clearLastCommit = function() {
  return this.setLastCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.tendermint.v1beta1.Block.prototype.hasLastCommit = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.cosmos.base.tendermint.v1beta1.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.base.tendermint.v1beta1.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.tendermint.v1beta1.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.tendermint.v1beta1.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getVersion()) && tendermint_version_types_pb.Consensus.toObject(includeInstance, f),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastBlockId: (f = msg.getLastBlockId()) && tendermint_types_types_pb.BlockID.toObject(includeInstance, f),
    lastCommitHash: msg.getLastCommitHash_asB64(),
    dataHash: msg.getDataHash_asB64(),
    validatorsHash: msg.getValidatorsHash_asB64(),
    nextValidatorsHash: msg.getNextValidatorsHash_asB64(),
    consensusHash: msg.getConsensusHash_asB64(),
    appHash: msg.getAppHash_asB64(),
    lastResultsHash: msg.getLastResultsHash_asB64(),
    evidenceHash: msg.getEvidenceHash_asB64(),
    proposerAddress: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header}
 */
proto.cosmos.base.tendermint.v1beta1.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.base.tendermint.v1beta1.Header;
  return proto.cosmos.base.tendermint.v1beta1.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.tendermint.v1beta1.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header}
 */
proto.cosmos.base.tendermint.v1beta1.Header.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tendermint_version_types_pb.Consensus;
      reader.readMessage(value,tendermint_version_types_pb.Consensus.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 5:
      var value = new tendermint_types_types_pb.BlockID;
      reader.readMessage(value,tendermint_types_types_pb.BlockID.deserializeBinaryFromReader);
      msg.setLastBlockId(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLastCommitHash(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDataHash(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValidatorsHash(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextValidatorsHash(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConsensusHash(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAppHash(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLastResultsHash(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEvidenceHash(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposerAddress(value);
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
proto.cosmos.base.tendermint.v1beta1.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.base.tendermint.v1beta1.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.tendermint.v1beta1.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.tendermint.v1beta1.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tendermint_version_types_pb.Consensus.serializeBinaryToWriter
    );
  }
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastBlockId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tendermint_types_types_pb.BlockID.serializeBinaryToWriter
    );
  }
  f = message.getLastCommitHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getDataHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getValidatorsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getNextValidatorsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getConsensusHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
  f = message.getAppHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      11,
      f
    );
  }
  f = message.getLastResultsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = message.getEvidenceHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      13,
      f
    );
  }
  f = message.getProposerAddress();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional tendermint.version.Consensus version = 1;
 * @return {?proto.tendermint.version.Consensus}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getVersion = function() {
  return /** @type{?proto.tendermint.version.Consensus} */ (
    jspb.Message.getWrapperField(this, tendermint_version_types_pb.Consensus, 1));
};


/**
 * @param {?proto.tendermint.version.Consensus|undefined} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
*/
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string chain_id = 2;
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
*/
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional tendermint.types.BlockID last_block_id = 5;
 * @return {?proto.tendermint.types.BlockID}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getLastBlockId = function() {
  return /** @type{?proto.tendermint.types.BlockID} */ (
    jspb.Message.getWrapperField(this, tendermint_types_types_pb.BlockID, 5));
};


/**
 * @param {?proto.tendermint.types.BlockID|undefined} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
*/
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setLastBlockId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.clearLastBlockId = function() {
  return this.setLastBlockId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.hasLastBlockId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes last_commit_hash = 6;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getLastCommitHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes last_commit_hash = 6;
 * This is a type-conversion wrapper around `getLastCommitHash()`
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getLastCommitHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLastCommitHash()));
};


/**
 * optional bytes last_commit_hash = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLastCommitHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getLastCommitHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLastCommitHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setLastCommitHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes data_hash = 7;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getDataHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes data_hash = 7;
 * This is a type-conversion wrapper around `getDataHash()`
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getDataHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDataHash()));
};


/**
 * optional bytes data_hash = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDataHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getDataHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDataHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setDataHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes validators_hash = 8;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes validators_hash = 8;
 * This is a type-conversion wrapper around `getValidatorsHash()`
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getValidatorsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValidatorsHash()));
};


/**
 * optional bytes validators_hash = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValidatorsHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional bytes next_validators_hash = 9;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getNextValidatorsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes next_validators_hash = 9;
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getNextValidatorsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextValidatorsHash()));
};


/**
 * optional bytes next_validators_hash = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextValidatorsHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getNextValidatorsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextValidatorsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setNextValidatorsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional bytes consensus_hash = 10;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getConsensusHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes consensus_hash = 10;
 * This is a type-conversion wrapper around `getConsensusHash()`
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getConsensusHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConsensusHash()));
};


/**
 * optional bytes consensus_hash = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConsensusHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getConsensusHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConsensusHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setConsensusHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};


/**
 * optional bytes app_hash = 11;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getAppHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes app_hash = 11;
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getAppHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAppHash()));
};


/**
 * optional bytes app_hash = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAppHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getAppHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setAppHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 11, value);
};


/**
 * optional bytes last_results_hash = 12;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getLastResultsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes last_results_hash = 12;
 * This is a type-conversion wrapper around `getLastResultsHash()`
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getLastResultsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLastResultsHash()));
};


/**
 * optional bytes last_results_hash = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLastResultsHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getLastResultsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLastResultsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setLastResultsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 12, value);
};


/**
 * optional bytes evidence_hash = 13;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getEvidenceHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes evidence_hash = 13;
 * This is a type-conversion wrapper around `getEvidenceHash()`
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getEvidenceHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEvidenceHash()));
};


/**
 * optional bytes evidence_hash = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEvidenceHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getEvidenceHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEvidenceHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setEvidenceHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional string proposer_address = 14;
 * @return {string}
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.getProposerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.base.tendermint.v1beta1.Header} returns this
 */
proto.cosmos.base.tendermint.v1beta1.Header.prototype.setProposerAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


goog.object.extend(exports, proto.cosmos.base.tendermint.v1beta1);