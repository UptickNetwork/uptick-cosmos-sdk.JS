// source: ibc/core/channel/v1/genesis.proto
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

var ibc_core_channel_v1_channel_pb = require('../../../../ibc/core/channel/v1/channel_pb.js');

goog.exportSymbol('proto.ibc.core.channel.v1.GenesisState', null, global);
goog.exportSymbol('proto.ibc.core.channel.v1.PacketSequence', null, global);
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
proto.ibc.core.channel.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ibc.core.channel.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.ibc.core.channel.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.core.channel.v1.GenesisState.displayName = 'proto.ibc.core.channel.v1.GenesisState';
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
proto.ibc.core.channel.v1.PacketSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ibc.core.channel.v1.PacketSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.core.channel.v1.PacketSequence.displayName = 'proto.ibc.core.channel.v1.PacketSequence';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ibc.core.channel.v1.GenesisState.repeatedFields_ = [1,2,3,4,5,6,7];



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
proto.ibc.core.channel.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.core.channel.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.core.channel.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.core.channel.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelsList: jspb.Message.toObjectList(msg.getChannelsList(),
    ibc_core_channel_v1_channel_pb.IdentifiedChannel.toObject, includeInstance),
    acknowledgementsList: jspb.Message.toObjectList(msg.getAcknowledgementsList(),
    ibc_core_channel_v1_channel_pb.PacketState.toObject, includeInstance),
    commitmentsList: jspb.Message.toObjectList(msg.getCommitmentsList(),
    ibc_core_channel_v1_channel_pb.PacketState.toObject, includeInstance),
    receiptsList: jspb.Message.toObjectList(msg.getReceiptsList(),
    ibc_core_channel_v1_channel_pb.PacketState.toObject, includeInstance),
    sendSequencesList: jspb.Message.toObjectList(msg.getSendSequencesList(),
    proto.ibc.core.channel.v1.PacketSequence.toObject, includeInstance),
    recvSequencesList: jspb.Message.toObjectList(msg.getRecvSequencesList(),
    proto.ibc.core.channel.v1.PacketSequence.toObject, includeInstance),
    ackSequencesList: jspb.Message.toObjectList(msg.getAckSequencesList(),
    proto.ibc.core.channel.v1.PacketSequence.toObject, includeInstance),
    nextChannelSequence: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.ibc.core.channel.v1.GenesisState}
 */
proto.ibc.core.channel.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.core.channel.v1.GenesisState;
  return proto.ibc.core.channel.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.core.channel.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.core.channel.v1.GenesisState}
 */
proto.ibc.core.channel.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ibc_core_channel_v1_channel_pb.IdentifiedChannel;
      reader.readMessage(value,ibc_core_channel_v1_channel_pb.IdentifiedChannel.deserializeBinaryFromReader);
      msg.addChannels(value);
      break;
    case 2:
      var value = new ibc_core_channel_v1_channel_pb.PacketState;
      reader.readMessage(value,ibc_core_channel_v1_channel_pb.PacketState.deserializeBinaryFromReader);
      msg.addAcknowledgements(value);
      break;
    case 3:
      var value = new ibc_core_channel_v1_channel_pb.PacketState;
      reader.readMessage(value,ibc_core_channel_v1_channel_pb.PacketState.deserializeBinaryFromReader);
      msg.addCommitments(value);
      break;
    case 4:
      var value = new ibc_core_channel_v1_channel_pb.PacketState;
      reader.readMessage(value,ibc_core_channel_v1_channel_pb.PacketState.deserializeBinaryFromReader);
      msg.addReceipts(value);
      break;
    case 5:
      var value = new proto.ibc.core.channel.v1.PacketSequence;
      reader.readMessage(value,proto.ibc.core.channel.v1.PacketSequence.deserializeBinaryFromReader);
      msg.addSendSequences(value);
      break;
    case 6:
      var value = new proto.ibc.core.channel.v1.PacketSequence;
      reader.readMessage(value,proto.ibc.core.channel.v1.PacketSequence.deserializeBinaryFromReader);
      msg.addRecvSequences(value);
      break;
    case 7:
      var value = new proto.ibc.core.channel.v1.PacketSequence;
      reader.readMessage(value,proto.ibc.core.channel.v1.PacketSequence.deserializeBinaryFromReader);
      msg.addAckSequences(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNextChannelSequence(value);
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
proto.ibc.core.channel.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.core.channel.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.core.channel.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.core.channel.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      ibc_core_channel_v1_channel_pb.IdentifiedChannel.serializeBinaryToWriter
    );
  }
  f = message.getAcknowledgementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      ibc_core_channel_v1_channel_pb.PacketState.serializeBinaryToWriter
    );
  }
  f = message.getCommitmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      ibc_core_channel_v1_channel_pb.PacketState.serializeBinaryToWriter
    );
  }
  f = message.getReceiptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      ibc_core_channel_v1_channel_pb.PacketState.serializeBinaryToWriter
    );
  }
  f = message.getSendSequencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.ibc.core.channel.v1.PacketSequence.serializeBinaryToWriter
    );
  }
  f = message.getRecvSequencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.ibc.core.channel.v1.PacketSequence.serializeBinaryToWriter
    );
  }
  f = message.getAckSequencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.ibc.core.channel.v1.PacketSequence.serializeBinaryToWriter
    );
  }
  f = message.getNextChannelSequence();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * repeated IdentifiedChannel channels = 1;
 * @return {!Array<!proto.ibc.core.channel.v1.IdentifiedChannel>}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.getChannelsList = function() {
  return /** @type{!Array<!proto.ibc.core.channel.v1.IdentifiedChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, ibc_core_channel_v1_channel_pb.IdentifiedChannel, 1));
};


/**
 * @param {!Array<!proto.ibc.core.channel.v1.IdentifiedChannel>} value
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
*/
proto.ibc.core.channel.v1.GenesisState.prototype.setChannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ibc.core.channel.v1.IdentifiedChannel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.channel.v1.IdentifiedChannel}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.addChannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ibc.core.channel.v1.IdentifiedChannel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
 */
proto.ibc.core.channel.v1.GenesisState.prototype.clearChannelsList = function() {
  return this.setChannelsList([]);
};


/**
 * repeated PacketState acknowledgements = 2;
 * @return {!Array<!proto.ibc.core.channel.v1.PacketState>}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.getAcknowledgementsList = function() {
  return /** @type{!Array<!proto.ibc.core.channel.v1.PacketState>} */ (
    jspb.Message.getRepeatedWrapperField(this, ibc_core_channel_v1_channel_pb.PacketState, 2));
};


/**
 * @param {!Array<!proto.ibc.core.channel.v1.PacketState>} value
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
*/
proto.ibc.core.channel.v1.GenesisState.prototype.setAcknowledgementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ibc.core.channel.v1.PacketState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.channel.v1.PacketState}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.addAcknowledgements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ibc.core.channel.v1.PacketState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
 */
proto.ibc.core.channel.v1.GenesisState.prototype.clearAcknowledgementsList = function() {
  return this.setAcknowledgementsList([]);
};


/**
 * repeated PacketState commitments = 3;
 * @return {!Array<!proto.ibc.core.channel.v1.PacketState>}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.getCommitmentsList = function() {
  return /** @type{!Array<!proto.ibc.core.channel.v1.PacketState>} */ (
    jspb.Message.getRepeatedWrapperField(this, ibc_core_channel_v1_channel_pb.PacketState, 3));
};


/**
 * @param {!Array<!proto.ibc.core.channel.v1.PacketState>} value
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
*/
proto.ibc.core.channel.v1.GenesisState.prototype.setCommitmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ibc.core.channel.v1.PacketState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.channel.v1.PacketState}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.addCommitments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ibc.core.channel.v1.PacketState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
 */
proto.ibc.core.channel.v1.GenesisState.prototype.clearCommitmentsList = function() {
  return this.setCommitmentsList([]);
};


/**
 * repeated PacketState receipts = 4;
 * @return {!Array<!proto.ibc.core.channel.v1.PacketState>}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.getReceiptsList = function() {
  return /** @type{!Array<!proto.ibc.core.channel.v1.PacketState>} */ (
    jspb.Message.getRepeatedWrapperField(this, ibc_core_channel_v1_channel_pb.PacketState, 4));
};


/**
 * @param {!Array<!proto.ibc.core.channel.v1.PacketState>} value
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
*/
proto.ibc.core.channel.v1.GenesisState.prototype.setReceiptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ibc.core.channel.v1.PacketState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.channel.v1.PacketState}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.addReceipts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ibc.core.channel.v1.PacketState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
 */
proto.ibc.core.channel.v1.GenesisState.prototype.clearReceiptsList = function() {
  return this.setReceiptsList([]);
};


/**
 * repeated PacketSequence send_sequences = 5;
 * @return {!Array<!proto.ibc.core.channel.v1.PacketSequence>}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.getSendSequencesList = function() {
  return /** @type{!Array<!proto.ibc.core.channel.v1.PacketSequence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ibc.core.channel.v1.PacketSequence, 5));
};


/**
 * @param {!Array<!proto.ibc.core.channel.v1.PacketSequence>} value
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
*/
proto.ibc.core.channel.v1.GenesisState.prototype.setSendSequencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ibc.core.channel.v1.PacketSequence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.channel.v1.PacketSequence}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.addSendSequences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ibc.core.channel.v1.PacketSequence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
 */
proto.ibc.core.channel.v1.GenesisState.prototype.clearSendSequencesList = function() {
  return this.setSendSequencesList([]);
};


/**
 * repeated PacketSequence recv_sequences = 6;
 * @return {!Array<!proto.ibc.core.channel.v1.PacketSequence>}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.getRecvSequencesList = function() {
  return /** @type{!Array<!proto.ibc.core.channel.v1.PacketSequence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ibc.core.channel.v1.PacketSequence, 6));
};


/**
 * @param {!Array<!proto.ibc.core.channel.v1.PacketSequence>} value
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
*/
proto.ibc.core.channel.v1.GenesisState.prototype.setRecvSequencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ibc.core.channel.v1.PacketSequence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.channel.v1.PacketSequence}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.addRecvSequences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ibc.core.channel.v1.PacketSequence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
 */
proto.ibc.core.channel.v1.GenesisState.prototype.clearRecvSequencesList = function() {
  return this.setRecvSequencesList([]);
};


/**
 * repeated PacketSequence ack_sequences = 7;
 * @return {!Array<!proto.ibc.core.channel.v1.PacketSequence>}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.getAckSequencesList = function() {
  return /** @type{!Array<!proto.ibc.core.channel.v1.PacketSequence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ibc.core.channel.v1.PacketSequence, 7));
};


/**
 * @param {!Array<!proto.ibc.core.channel.v1.PacketSequence>} value
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
*/
proto.ibc.core.channel.v1.GenesisState.prototype.setAckSequencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.ibc.core.channel.v1.PacketSequence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.channel.v1.PacketSequence}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.addAckSequences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ibc.core.channel.v1.PacketSequence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
 */
proto.ibc.core.channel.v1.GenesisState.prototype.clearAckSequencesList = function() {
  return this.setAckSequencesList([]);
};


/**
 * optional uint64 next_channel_sequence = 8;
 * @return {number}
 */
proto.ibc.core.channel.v1.GenesisState.prototype.getNextChannelSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ibc.core.channel.v1.GenesisState} returns this
 */
proto.ibc.core.channel.v1.GenesisState.prototype.setNextChannelSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
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
proto.ibc.core.channel.v1.PacketSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.core.channel.v1.PacketSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.core.channel.v1.PacketSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.core.channel.v1.PacketSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    portId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ibc.core.channel.v1.PacketSequence}
 */
proto.ibc.core.channel.v1.PacketSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.core.channel.v1.PacketSequence;
  return proto.ibc.core.channel.v1.PacketSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.core.channel.v1.PacketSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.core.channel.v1.PacketSequence}
 */
proto.ibc.core.channel.v1.PacketSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.ibc.core.channel.v1.PacketSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.core.channel.v1.PacketSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.core.channel.v1.PacketSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.core.channel.v1.PacketSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChannelId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string port_id = 1;
 * @return {string}
 */
proto.ibc.core.channel.v1.PacketSequence.prototype.getPortId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.core.channel.v1.PacketSequence} returns this
 */
proto.ibc.core.channel.v1.PacketSequence.prototype.setPortId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string channel_id = 2;
 * @return {string}
 */
proto.ibc.core.channel.v1.PacketSequence.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.core.channel.v1.PacketSequence} returns this
 */
proto.ibc.core.channel.v1.PacketSequence.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 sequence = 3;
 * @return {number}
 */
proto.ibc.core.channel.v1.PacketSequence.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ibc.core.channel.v1.PacketSequence} returns this
 */
proto.ibc.core.channel.v1.PacketSequence.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.ibc.core.channel.v1);
