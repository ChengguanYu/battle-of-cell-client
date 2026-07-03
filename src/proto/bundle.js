/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Fantasy = $root.Fantasy = (() => {

    /**
     * Namespace Fantasy.
     * @exports Fantasy
     * @namespace
     */
    const Fantasy = {};

    Fantasy.Network = (function() {

        /**
         * Namespace Network.
         * @memberof Fantasy
         * @namespace
         */
        const Network = {};

        Network.Message = (function() {

            /**
             * Namespace Message.
             * @memberof Fantasy.Network
             * @namespace
             */
            const Message = {};

            Message.C2G_TestMessage = (function() {

                /**
                 * Properties of a C2G_TestMessage.
                 * @typedef {Object} Fantasy.Network.Message.C2G_TestMessage.$Properties
                 * @property {string|null} [Tag] C2G_TestMessage Tag
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a C2G_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestMessage
                 * @augments Fantasy.Network.Message.C2G_TestMessage.$Properties
                 * @deprecated Use Fantasy.Network.Message.C2G_TestMessage.$Properties instead.
                 */

                /**
                 * Shape of a C2G_TestMessage.
                 * @typedef {Fantasy.Network.Message.C2G_TestMessage.$Properties} Fantasy.Network.Message.C2G_TestMessage.$Shape
                 */

                /**
                 * Constructs a new C2G_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2G_TestMessage.
                 * @constructor
                 * @param {Fantasy.Network.Message.C2G_TestMessage.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const C2G_TestMessage = function (properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * C2G_TestMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @instance
                 */
                C2G_TestMessage.prototype.Tag = "";

                /**
                 * Creates a new C2G_TestMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestMessage.$Properties=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestMessage} C2G_TestMessage instance
                 * @type {{
                 *   (properties: Fantasy.Network.Message.C2G_TestMessage.$Shape): Fantasy.Network.Message.C2G_TestMessage & Fantasy.Network.Message.C2G_TestMessage.$Shape;
                 *   (properties?: Fantasy.Network.Message.C2G_TestMessage.$Properties): Fantasy.Network.Message.C2G_TestMessage;
                 * }}
                 */
                C2G_TestMessage.create = function(properties) {
                    return new C2G_TestMessage(properties);
                };

                /**
                 * Encodes the specified C2G_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestMessage.$Properties} message C2G_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestMessage.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag") && message.Tag !== "")
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (let i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestMessage.$Properties} message C2G_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestMessage.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestMessage & Fantasy.Network.Message.C2G_TestMessage.$Shape} C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestMessage.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Fantasy.Network.Message.C2G_TestMessage(), value;
                    while (reader.pos < end) {
                        let start = reader.pos;
                        let tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        let wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.Tag = value;
                                else
                                    delete message.Tag;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestMessage & Fantasy.Network.Message.C2G_TestMessage.$Shape} C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestMessage.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestMessage.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2G_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestMessage} C2G_TestMessage
                 */
                C2G_TestMessage.fromObject = function (object, _depth) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".Fantasy.Network.Message.C2G_TestMessage: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let message = new $root.Fantasy.Network.Message.C2G_TestMessage();
                    if (object.Tag != null)
                        if (typeof object.Tag !== "string" || object.Tag.length)
                            message.Tag = $String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2G_TestMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestMessage} message C2G_TestMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestMessage.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2G_TestMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestMessage.prototype.toJSON = function() {
                    return C2G_TestMessage.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for C2G_TestMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                C2G_TestMessage.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/Fantasy.Network.Message.C2G_TestMessage";
                };

                return C2G_TestMessage;
            })();

            Message.C2G_TestRequest = (function() {

                /**
                 * Properties of a C2G_TestRequest.
                 * @typedef {Object} Fantasy.Network.Message.C2G_TestRequest.$Properties
                 * @property {string|null} [Tag] C2G_TestRequest Tag
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a C2G_TestRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestRequest
                 * @augments Fantasy.Network.Message.C2G_TestRequest.$Properties
                 * @deprecated Use Fantasy.Network.Message.C2G_TestRequest.$Properties instead.
                 */

                /**
                 * Shape of a C2G_TestRequest.
                 * @typedef {Fantasy.Network.Message.C2G_TestRequest.$Properties} Fantasy.Network.Message.C2G_TestRequest.$Shape
                 */

                /**
                 * Constructs a new C2G_TestRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2G_TestRequest.
                 * @constructor
                 * @param {Fantasy.Network.Message.C2G_TestRequest.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const C2G_TestRequest = function (properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * C2G_TestRequest Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @instance
                 */
                C2G_TestRequest.prototype.Tag = "";

                /**
                 * Creates a new C2G_TestRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestRequest.$Properties=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestRequest} C2G_TestRequest instance
                 * @type {{
                 *   (properties: Fantasy.Network.Message.C2G_TestRequest.$Shape): Fantasy.Network.Message.C2G_TestRequest & Fantasy.Network.Message.C2G_TestRequest.$Shape;
                 *   (properties?: Fantasy.Network.Message.C2G_TestRequest.$Properties): Fantasy.Network.Message.C2G_TestRequest;
                 * }}
                 */
                C2G_TestRequest.create = function(properties) {
                    return new C2G_TestRequest(properties);
                };

                /**
                 * Encodes the specified C2G_TestRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestRequest.$Properties} message C2G_TestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRequest.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag") && message.Tag !== "")
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (let i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestRequest.$Properties} message C2G_TestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRequest.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestRequest & Fantasy.Network.Message.C2G_TestRequest.$Shape} C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRequest.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Fantasy.Network.Message.C2G_TestRequest(), value;
                    while (reader.pos < end) {
                        let start = reader.pos;
                        let tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        let wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.Tag = value;
                                else
                                    delete message.Tag;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestRequest & Fantasy.Network.Message.C2G_TestRequest.$Shape} C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRequest.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestRequest.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2G_TestRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestRequest} C2G_TestRequest
                 */
                C2G_TestRequest.fromObject = function (object, _depth) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".Fantasy.Network.Message.C2G_TestRequest: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let message = new $root.Fantasy.Network.Message.C2G_TestRequest();
                    if (object.Tag != null)
                        if (typeof object.Tag !== "string" || object.Tag.length)
                            message.Tag = $String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2G_TestRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestRequest} message C2G_TestRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestRequest.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2G_TestRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestRequest.prototype.toJSON = function() {
                    return C2G_TestRequest.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for C2G_TestRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                C2G_TestRequest.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/Fantasy.Network.Message.C2G_TestRequest";
                };

                return C2G_TestRequest;
            })();

            Message.G2C_TestResponse = (function() {

                /**
                 * Properties of a G2C_TestResponse.
                 * @typedef {Object} Fantasy.Network.Message.G2C_TestResponse.$Properties
                 * @property {string|null} [Tag] G2C_TestResponse Tag
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a G2C_TestResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_TestResponse
                 * @augments Fantasy.Network.Message.G2C_TestResponse.$Properties
                 * @deprecated Use Fantasy.Network.Message.G2C_TestResponse.$Properties instead.
                 */

                /**
                 * Shape of a G2C_TestResponse.
                 * @typedef {Fantasy.Network.Message.G2C_TestResponse.$Properties} Fantasy.Network.Message.G2C_TestResponse.$Shape
                 */

                /**
                 * Constructs a new G2C_TestResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_TestResponse.
                 * @constructor
                 * @param {Fantasy.Network.Message.G2C_TestResponse.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                const G2C_TestResponse = function (properties) {
                    if (properties)
                        for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * G2C_TestResponse Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @instance
                 */
                G2C_TestResponse.prototype.Tag = "";

                /**
                 * Creates a new G2C_TestResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_TestResponse.$Properties=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_TestResponse} G2C_TestResponse instance
                 * @type {{
                 *   (properties: Fantasy.Network.Message.G2C_TestResponse.$Shape): Fantasy.Network.Message.G2C_TestResponse & Fantasy.Network.Message.G2C_TestResponse.$Shape;
                 *   (properties?: Fantasy.Network.Message.G2C_TestResponse.$Properties): Fantasy.Network.Message.G2C_TestResponse;
                 * }}
                 */
                G2C_TestResponse.create = function(properties) {
                    return new G2C_TestResponse(properties);
                };

                /**
                 * Encodes the specified G2C_TestResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_TestResponse.$Properties} message G2C_TestResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_TestResponse.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag") && message.Tag !== "")
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (let i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified G2C_TestResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_TestResponse.$Properties} message G2C_TestResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_TestResponse.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_TestResponse & Fantasy.Network.Message.G2C_TestResponse.$Shape} G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_TestResponse.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Fantasy.Network.Message.G2C_TestResponse(), value;
                    while (reader.pos < end) {
                        let start = reader.pos;
                        let tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        let wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.Tag = value;
                                else
                                    delete message.Tag;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_TestResponse & Fantasy.Network.Message.G2C_TestResponse.$Shape} G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_TestResponse.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_TestResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_TestResponse.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a G2C_TestResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_TestResponse} G2C_TestResponse
                 */
                G2C_TestResponse.fromObject = function (object, _depth) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_TestResponse)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".Fantasy.Network.Message.G2C_TestResponse: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let message = new $root.Fantasy.Network.Message.G2C_TestResponse();
                    if (object.Tag != null)
                        if (typeof object.Tag !== "string" || object.Tag.length)
                            message.Tag = $String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a G2C_TestResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_TestResponse} message G2C_TestResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_TestResponse.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    let object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && $Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this G2C_TestResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_TestResponse.prototype.toJSON = function() {
                    return G2C_TestResponse.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for G2C_TestResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                G2C_TestResponse.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/Fantasy.Network.Message.G2C_TestResponse";
                };

                return G2C_TestResponse;
            })();

            return Message;
        })();

        return Network;
    })();

    return Fantasy;
})();

export {
  $root as default
};
