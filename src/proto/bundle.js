/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Number = $util.global.Number;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const BattleOfCell = $root.BattleOfCell = (() => {

    /**
     * Namespace BattleOfCell.
     * @exports BattleOfCell
     * @namespace
     */
    const BattleOfCell = {};

    BattleOfCell.Message = (function() {

        /**
         * Namespace Message.
         * @memberof BattleOfCell
         * @namespace
         */
        const Message = {};

        Message.EntryHomeReq = (function() {

            /**
             * Properties of an EntryHomeReq.
             * @typedef {Object} BattleOfCell.Message.EntryHomeReq.$Properties
             * @property {string|null} [token] EntryHomeReq token
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an EntryHomeReq.
             * @memberof BattleOfCell.Message
             * @interface IEntryHomeReq
             * @augments BattleOfCell.Message.EntryHomeReq.$Properties
             * @deprecated Use BattleOfCell.Message.EntryHomeReq.$Properties instead.
             */

            /**
             * Shape of an EntryHomeReq.
             * @typedef {BattleOfCell.Message.EntryHomeReq.$Properties} BattleOfCell.Message.EntryHomeReq.$Shape
             */

            /**
             * Constructs a new EntryHomeReq.
             * @memberof BattleOfCell.Message
             * @classdesc 客户端进家园请求
             * @constructor
             * @param {BattleOfCell.Message.EntryHomeReq.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const EntryHomeReq = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * EntryHomeReq token.
             * @member {string} token
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @instance
             */
            EntryHomeReq.prototype.token = "";

            /**
             * Creates a new EntryHomeReq instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {BattleOfCell.Message.EntryHomeReq.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.EntryHomeReq} EntryHomeReq instance
             * @type {{
             *   (properties: BattleOfCell.Message.EntryHomeReq.$Shape): BattleOfCell.Message.EntryHomeReq & BattleOfCell.Message.EntryHomeReq.$Shape;
             *   (properties?: BattleOfCell.Message.EntryHomeReq.$Properties): BattleOfCell.Message.EntryHomeReq;
             * }}
             */
            EntryHomeReq.create = function(properties) {
                return new EntryHomeReq(properties);
            };

            /**
             * Encodes the specified EntryHomeReq message. Does not implicitly {@link BattleOfCell.Message.EntryHomeReq.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {BattleOfCell.Message.EntryHomeReq.$Properties} message EntryHomeReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntryHomeReq.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.token != null && $Object.hasOwnProperty.call(message, "token") && message.token !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified EntryHomeReq message, length delimited. Does not implicitly {@link BattleOfCell.Message.EntryHomeReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {BattleOfCell.Message.EntryHomeReq.$Properties} message EntryHomeReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntryHomeReq.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an EntryHomeReq message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.EntryHomeReq & BattleOfCell.Message.EntryHomeReq.$Shape} EntryHomeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntryHomeReq.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.EntryHomeReq(), value;
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
                                message.token = value;
                            else
                                delete message.token;
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
             * Decodes an EntryHomeReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.EntryHomeReq & BattleOfCell.Message.EntryHomeReq.$Shape} EntryHomeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntryHomeReq.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EntryHomeReq message.
             * @function verify
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntryHomeReq.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };

            /**
             * Creates an EntryHomeReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.EntryHomeReq} EntryHomeReq
             */
            EntryHomeReq.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.EntryHomeReq)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.EntryHomeReq: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.EntryHomeReq();
                if (object.token != null)
                    if (typeof object.token !== "string" || object.token.length)
                        message.token = $String(object.token);
                return message;
            };

            /**
             * Creates a plain object from an EntryHomeReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {BattleOfCell.Message.EntryHomeReq} message EntryHomeReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntryHomeReq.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.token = "";
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    object.token = message.token;
                return object;
            };

            /**
             * Converts this EntryHomeReq to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntryHomeReq.prototype.toJSON = function() {
                return EntryHomeReq.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for EntryHomeReq
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.EntryHomeReq
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            EntryHomeReq.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.EntryHomeReq";
            };

            return EntryHomeReq;
        })();

        Message.EntryHomeRes = (function() {

            /**
             * Properties of an EntryHomeRes.
             * @typedef {Object} BattleOfCell.Message.EntryHomeRes.$Properties
             * @property {number|null} [status] EntryHomeRes status
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an EntryHomeRes.
             * @memberof BattleOfCell.Message
             * @interface IEntryHomeRes
             * @augments BattleOfCell.Message.EntryHomeRes.$Properties
             * @deprecated Use BattleOfCell.Message.EntryHomeRes.$Properties instead.
             */

            /**
             * Shape of an EntryHomeRes.
             * @typedef {BattleOfCell.Message.EntryHomeRes.$Properties} BattleOfCell.Message.EntryHomeRes.$Shape
             */

            /**
             * Constructs a new EntryHomeRes.
             * @memberof BattleOfCell.Message
             * @classdesc 客户端进家园响应
             * @constructor
             * @param {BattleOfCell.Message.EntryHomeRes.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const EntryHomeRes = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * EntryHomeRes status.
             * @member {number} status
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @instance
             */
            EntryHomeRes.prototype.status = 0;

            /**
             * Creates a new EntryHomeRes instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {BattleOfCell.Message.EntryHomeRes.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.EntryHomeRes} EntryHomeRes instance
             * @type {{
             *   (properties: BattleOfCell.Message.EntryHomeRes.$Shape): BattleOfCell.Message.EntryHomeRes & BattleOfCell.Message.EntryHomeRes.$Shape;
             *   (properties?: BattleOfCell.Message.EntryHomeRes.$Properties): BattleOfCell.Message.EntryHomeRes;
             * }}
             */
            EntryHomeRes.create = function(properties) {
                return new EntryHomeRes(properties);
            };

            /**
             * Encodes the specified EntryHomeRes message. Does not implicitly {@link BattleOfCell.Message.EntryHomeRes.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {BattleOfCell.Message.EntryHomeRes.$Properties} message EntryHomeRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntryHomeRes.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified EntryHomeRes message, length delimited. Does not implicitly {@link BattleOfCell.Message.EntryHomeRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {BattleOfCell.Message.EntryHomeRes.$Properties} message EntryHomeRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntryHomeRes.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an EntryHomeRes message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.EntryHomeRes & BattleOfCell.Message.EntryHomeRes.$Shape} EntryHomeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntryHomeRes.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.EntryHomeRes(), value;
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
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.status = value;
                            else
                                delete message.status;
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
             * Decodes an EntryHomeRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.EntryHomeRes & BattleOfCell.Message.EntryHomeRes.$Shape} EntryHomeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntryHomeRes.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EntryHomeRes message.
             * @function verify
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntryHomeRes.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };

            /**
             * Creates an EntryHomeRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.EntryHomeRes} EntryHomeRes
             */
            EntryHomeRes.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.EntryHomeRes)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.EntryHomeRes: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.EntryHomeRes();
                if (object.status != null)
                    if ($Number(object.status) !== 0)
                        message.status = object.status >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an EntryHomeRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {BattleOfCell.Message.EntryHomeRes} message EntryHomeRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntryHomeRes.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.status = 0;
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this EntryHomeRes to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntryHomeRes.prototype.toJSON = function() {
                return EntryHomeRes.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for EntryHomeRes
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.EntryHomeRes
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            EntryHomeRes.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.EntryHomeRes";
            };

            return EntryHomeRes;
        })();

        return Message;
    })();

    return BattleOfCell;
})();

export {
  $root as default
};
