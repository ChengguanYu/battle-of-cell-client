/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array, $Boolean = $util.global.Boolean, $Number = $util.global.Number, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt;

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

        Message.EntryHomeResp = (function() {

            /**
             * Properties of an EntryHomeResp.
             * @typedef {Object} BattleOfCell.Message.EntryHomeResp.$Properties
             * @property {BattleOfCell.Message.MetaData.$Properties|null} [meta] EntryHomeResp meta
             * @property {Array.<BattleOfCell.Message.RespError.$Properties>|null} [error] EntryHomeResp error
             * @property {boolean|null} [ok] 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段）
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an EntryHomeResp.
             * @memberof BattleOfCell.Message
             * @interface IEntryHomeResp
             * @augments BattleOfCell.Message.EntryHomeResp.$Properties
             * @deprecated Use BattleOfCell.Message.EntryHomeResp.$Properties instead.
             */

            /**
             * Shape of an EntryHomeResp.
             * @typedef {BattleOfCell.Message.EntryHomeResp.$Properties} BattleOfCell.Message.EntryHomeResp.$Shape
             */

            /**
             * Constructs a new EntryHomeResp.
             * @memberof BattleOfCell.Message
             * @classdesc Represents an EntryHomeResp.
             * @constructor
             * @param {BattleOfCell.Message.EntryHomeResp.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const EntryHomeResp = function (properties) {
                this.error = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * EntryHomeResp meta.
             * @member {BattleOfCell.Message.MetaData.$Properties|null|undefined} meta
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @instance
             */
            EntryHomeResp.prototype.meta = null;

            /**
             * EntryHomeResp error.
             * @member {Array.<BattleOfCell.Message.RespError.$Properties>} error
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @instance
             */
            EntryHomeResp.prototype.error = $util.emptyArray;

            /**
             * 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段）
             * @member {boolean} ok
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @instance
             */
            EntryHomeResp.prototype.ok = false;

            /**
             * Creates a new EntryHomeResp instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {BattleOfCell.Message.EntryHomeResp.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.EntryHomeResp} EntryHomeResp instance
             * @type {{
             *   (properties: BattleOfCell.Message.EntryHomeResp.$Shape): BattleOfCell.Message.EntryHomeResp & BattleOfCell.Message.EntryHomeResp.$Shape;
             *   (properties?: BattleOfCell.Message.EntryHomeResp.$Properties): BattleOfCell.Message.EntryHomeResp;
             * }}
             */
            EntryHomeResp.create = function(properties) {
                return new EntryHomeResp(properties);
            };

            /**
             * Encodes the specified EntryHomeResp message. Does not implicitly {@link BattleOfCell.Message.EntryHomeResp.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {BattleOfCell.Message.EntryHomeResp.$Properties} message EntryHomeResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntryHomeResp.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta"))
                    $root.BattleOfCell.Message.MetaData.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.error != null && message.error.length)
                    for (let i = 0; i < message.error.length; ++i)
                        $root.BattleOfCell.Message.RespError.encode(message.error[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok") && message.ok !== false)
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ok);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified EntryHomeResp message, length delimited. Does not implicitly {@link BattleOfCell.Message.EntryHomeResp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {BattleOfCell.Message.EntryHomeResp.$Properties} message EntryHomeResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntryHomeResp.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an EntryHomeResp message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.EntryHomeResp & BattleOfCell.Message.EntryHomeResp.$Shape} EntryHomeResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntryHomeResp.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.EntryHomeResp(), value;
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
                            message.meta = $root.BattleOfCell.Message.MetaData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.meta);
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.error && message.error.length))
                                message.error = [];
                            message.error.push($root.BattleOfCell.Message.RespError.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.ok = value;
                            else
                                delete message.ok;
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
             * Decodes an EntryHomeResp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.EntryHomeResp & BattleOfCell.Message.EntryHomeResp.$Shape} EntryHomeResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntryHomeResp.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EntryHomeResp message.
             * @function verify
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntryHomeResp.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta")) {
                    let error = $root.BattleOfCell.Message.MetaData.verify(message.meta, _depth + 1);
                    if (error)
                        return "meta." + error;
                }
                if (message.error != null && $Object.hasOwnProperty.call(message, "error")) {
                    if (!$Array.isArray(message.error))
                        return "error: array expected";
                    for (let i = 0; i < message.error.length; ++i) {
                        let error = $root.BattleOfCell.Message.RespError.verify(message.error[i], _depth + 1);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                return null;
            };

            /**
             * Creates an EntryHomeResp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.EntryHomeResp} EntryHomeResp
             */
            EntryHomeResp.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.EntryHomeResp)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.EntryHomeResp: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.EntryHomeResp();
                if (object.meta != null) {
                    if (!$util.isObject(object.meta))
                        throw $TypeError(".BattleOfCell.Message.EntryHomeResp.meta: object expected");
                    message.meta = $root.BattleOfCell.Message.MetaData.fromObject(object.meta, _depth + 1);
                }
                if (object.error) {
                    if (!$Array.isArray(object.error))
                        throw $TypeError(".BattleOfCell.Message.EntryHomeResp.error: array expected");
                    message.error = $Array(object.error.length);
                    for (let i = 0; i < object.error.length; ++i) {
                        if (!$util.isObject(object.error[i]))
                            throw $TypeError(".BattleOfCell.Message.EntryHomeResp.error: object expected");
                        message.error[i] = $root.BattleOfCell.Message.RespError.fromObject(object.error[i], _depth + 1);
                    }
                }
                if (object.ok != null)
                    if (object.ok)
                        message.ok = $Boolean(object.ok);
                return message;
            };

            /**
             * Creates a plain object from an EntryHomeResp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {BattleOfCell.Message.EntryHomeResp} message EntryHomeResp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntryHomeResp.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.error = [];
                if (options.defaults) {
                    object.meta = null;
                    object.ok = false;
                }
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta"))
                    object.meta = $root.BattleOfCell.Message.MetaData.toObject(message.meta, options, _depth + 1);
                if (message.error && message.error.length) {
                    object.error = $Array(message.error.length);
                    for (let j = 0; j < message.error.length; ++j)
                        object.error[j] = $root.BattleOfCell.Message.RespError.toObject(message.error[j], options, _depth + 1);
                }
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    object.ok = message.ok;
                return object;
            };

            /**
             * Converts this EntryHomeResp to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntryHomeResp.prototype.toJSON = function() {
                return EntryHomeResp.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for EntryHomeResp
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.EntryHomeResp
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            EntryHomeResp.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.EntryHomeResp";
            };

            return EntryHomeResp;
        })();

        Message.MetaData = (function() {

            /**
             * Properties of a MetaData.
             * @typedef {Object} BattleOfCell.Message.MetaData.$Properties
             * @property {number|null} [statusCode] MetaData statusCode
             * @property {number|Long|null} [timestamp] MetaData timestamp
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a MetaData.
             * @memberof BattleOfCell.Message
             * @interface IMetaData
             * @augments BattleOfCell.Message.MetaData.$Properties
             * @deprecated Use BattleOfCell.Message.MetaData.$Properties instead.
             */

            /**
             * Shape of a MetaData.
             * @typedef {BattleOfCell.Message.MetaData.$Properties} BattleOfCell.Message.MetaData.$Shape
             */

            /**
             * Constructs a new MetaData.
             * @memberof BattleOfCell.Message
             * @classdesc Represents a MetaData.
             * @constructor
             * @param {BattleOfCell.Message.MetaData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const MetaData = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * MetaData statusCode.
             * @member {number} statusCode
             * @memberof BattleOfCell.Message.MetaData
             * @instance
             */
            MetaData.prototype.statusCode = 0;

            /**
             * MetaData timestamp.
             * @member {number|Long} timestamp
             * @memberof BattleOfCell.Message.MetaData
             * @instance
             */
            MetaData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new MetaData instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {BattleOfCell.Message.MetaData.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.MetaData} MetaData instance
             * @type {{
             *   (properties: BattleOfCell.Message.MetaData.$Shape): BattleOfCell.Message.MetaData & BattleOfCell.Message.MetaData.$Shape;
             *   (properties?: BattleOfCell.Message.MetaData.$Properties): BattleOfCell.Message.MetaData;
             * }}
             */
            MetaData.create = function(properties) {
                return new MetaData(properties);
            };

            /**
             * Encodes the specified MetaData message. Does not implicitly {@link BattleOfCell.Message.MetaData.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {BattleOfCell.Message.MetaData.$Properties} message MetaData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MetaData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.statusCode != null && $Object.hasOwnProperty.call(message, "statusCode") && message.statusCode !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.statusCode);
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp") && (typeof message.timestamp === "object" ? message.timestamp.low || message.timestamp.high : message.timestamp !== 0))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified MetaData message, length delimited. Does not implicitly {@link BattleOfCell.Message.MetaData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {BattleOfCell.Message.MetaData.$Properties} message MetaData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MetaData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a MetaData message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.MetaData & BattleOfCell.Message.MetaData.$Shape} MetaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MetaData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.MetaData(), value;
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
                                message.statusCode = value;
                            else
                                delete message.statusCode;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.timestamp = value;
                            else
                                delete message.timestamp;
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
             * Decodes a MetaData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.MetaData & BattleOfCell.Message.MetaData.$Shape} MetaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MetaData.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MetaData message.
             * @function verify
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MetaData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.statusCode != null && $Object.hasOwnProperty.call(message, "statusCode"))
                    if (!$util.isInteger(message.statusCode))
                        return "statusCode: integer expected";
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a MetaData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.MetaData} MetaData
             */
            MetaData.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.MetaData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.MetaData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.MetaData();
                if (object.statusCode != null)
                    if ($Number(object.statusCode) !== 0)
                        message.statusCode = object.statusCode >>> 0;
                if (object.timestamp != null)
                    if (typeof object.timestamp === "object" ? object.timestamp.low || object.timestamp.high : $Number(object.timestamp) !== 0)
                        if ($util.Long)
                            message.timestamp = $util.Long.fromValue(object.timestamp, false);
                        else if (typeof object.timestamp === "string")
                            message.timestamp = $parseInt(object.timestamp, 10);
                        else if (typeof object.timestamp === "number")
                            message.timestamp = object.timestamp;
                        else if (typeof object.timestamp === "object")
                            message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a MetaData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {BattleOfCell.Message.MetaData} message MetaData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MetaData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.statusCode = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.timestamp = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.statusCode != null && $Object.hasOwnProperty.call(message, "statusCode"))
                    object.statusCode = message.statusCode;
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.timestamp = typeof message.timestamp === "number" ? $BigInt(message.timestamp) : $util.Long.fromBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0, false).toBigInt();
                    else if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === $String ? $String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === $Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                return object;
            };

            /**
             * Converts this MetaData to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.MetaData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MetaData.prototype.toJSON = function() {
                return MetaData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MetaData
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.MetaData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MetaData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.MetaData";
            };

            return MetaData;
        })();

        Message.RespError = (function() {

            /**
             * Properties of a RespError.
             * @typedef {Object} BattleOfCell.Message.RespError.$Properties
             * @property {string|null} [message] RespError message
             * @property {Array.<string>|null} [args] RespError args
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a RespError.
             * @memberof BattleOfCell.Message
             * @interface IRespError
             * @augments BattleOfCell.Message.RespError.$Properties
             * @deprecated Use BattleOfCell.Message.RespError.$Properties instead.
             */

            /**
             * Shape of a RespError.
             * @typedef {BattleOfCell.Message.RespError.$Properties} BattleOfCell.Message.RespError.$Shape
             */

            /**
             * Constructs a new RespError.
             * @memberof BattleOfCell.Message
             * @classdesc Represents a RespError.
             * @constructor
             * @param {BattleOfCell.Message.RespError.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const RespError = function (properties) {
                this.args = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * RespError message.
             * @member {string} message
             * @memberof BattleOfCell.Message.RespError
             * @instance
             */
            RespError.prototype.message = "";

            /**
             * RespError args.
             * @member {Array.<string>} args
             * @memberof BattleOfCell.Message.RespError
             * @instance
             */
            RespError.prototype.args = $util.emptyArray;

            /**
             * Creates a new RespError instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {BattleOfCell.Message.RespError.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.RespError} RespError instance
             * @type {{
             *   (properties: BattleOfCell.Message.RespError.$Shape): BattleOfCell.Message.RespError & BattleOfCell.Message.RespError.$Shape;
             *   (properties?: BattleOfCell.Message.RespError.$Properties): BattleOfCell.Message.RespError;
             * }}
             */
            RespError.create = function(properties) {
                return new RespError(properties);
            };

            /**
             * Encodes the specified RespError message. Does not implicitly {@link BattleOfCell.Message.RespError.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {BattleOfCell.Message.RespError.$Properties} message RespError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RespError.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.message != null && $Object.hasOwnProperty.call(message, "message") && message.message !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.args != null && message.args.length)
                    for (let i = 0; i < message.args.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.args[i]);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RespError message, length delimited. Does not implicitly {@link BattleOfCell.Message.RespError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {BattleOfCell.Message.RespError.$Properties} message RespError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RespError.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a RespError message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.RespError & BattleOfCell.Message.RespError.$Shape} RespError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RespError.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.RespError(), value;
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
                                message.message = value;
                            else
                                delete message.message;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.args && message.args.length))
                                message.args = [];
                            message.args.push(reader.stringVerify());
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
             * Decodes a RespError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.RespError & BattleOfCell.Message.RespError.$Shape} RespError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RespError.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RespError message.
             * @function verify
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RespError.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.args != null && $Object.hasOwnProperty.call(message, "args")) {
                    if (!$Array.isArray(message.args))
                        return "args: array expected";
                    for (let i = 0; i < message.args.length; ++i)
                        if (!$util.isString(message.args[i]))
                            return "args: string[] expected";
                }
                return null;
            };

            /**
             * Creates a RespError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.RespError} RespError
             */
            RespError.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.RespError)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.RespError: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.RespError();
                if (object.message != null)
                    if (typeof object.message !== "string" || object.message.length)
                        message.message = $String(object.message);
                if (object.args) {
                    if (!$Array.isArray(object.args))
                        throw $TypeError(".BattleOfCell.Message.RespError.args: array expected");
                    message.args = $Array(object.args.length);
                    for (let i = 0; i < object.args.length; ++i)
                        message.args[i] = $String(object.args[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a RespError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {BattleOfCell.Message.RespError} message RespError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RespError.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.args = [];
                if (options.defaults)
                    object.message = "";
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    object.message = message.message;
                if (message.args && message.args.length) {
                    object.args = $Array(message.args.length);
                    for (let j = 0; j < message.args.length; ++j)
                        object.args[j] = message.args[j];
                }
                return object;
            };

            /**
             * Converts this RespError to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.RespError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RespError.prototype.toJSON = function() {
                return RespError.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RespError
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.RespError
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RespError.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.RespError";
            };

            return RespError;
        })();

        Message.SessionHeartbeatPing = (function() {

            /**
             * Properties of a SessionHeartbeatPing.
             * @typedef {Object} BattleOfCell.Message.SessionHeartbeatPing.$Properties
             * @property {number|Long|null} [timestamp] SessionHeartbeatPing timestamp
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SessionHeartbeatPing.
             * @memberof BattleOfCell.Message
             * @interface ISessionHeartbeatPing
             * @augments BattleOfCell.Message.SessionHeartbeatPing.$Properties
             * @deprecated Use BattleOfCell.Message.SessionHeartbeatPing.$Properties instead.
             */

            /**
             * Shape of a SessionHeartbeatPing.
             * @typedef {BattleOfCell.Message.SessionHeartbeatPing.$Properties} BattleOfCell.Message.SessionHeartbeatPing.$Shape
             */

            /**
             * Constructs a new SessionHeartbeatPing.
             * @memberof BattleOfCell.Message
             * @classdesc 客户端心跳。sequence 在单次连接内从 1 开始递增，0 保留。
             * @constructor
             * @param {BattleOfCell.Message.SessionHeartbeatPing.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SessionHeartbeatPing = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SessionHeartbeatPing timestamp.
             * @member {number|Long} timestamp
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @instance
             */
            SessionHeartbeatPing.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SessionHeartbeatPing instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {BattleOfCell.Message.SessionHeartbeatPing.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.SessionHeartbeatPing} SessionHeartbeatPing instance
             * @type {{
             *   (properties: BattleOfCell.Message.SessionHeartbeatPing.$Shape): BattleOfCell.Message.SessionHeartbeatPing & BattleOfCell.Message.SessionHeartbeatPing.$Shape;
             *   (properties?: BattleOfCell.Message.SessionHeartbeatPing.$Properties): BattleOfCell.Message.SessionHeartbeatPing;
             * }}
             */
            SessionHeartbeatPing.create = function(properties) {
                return new SessionHeartbeatPing(properties);
            };

            /**
             * Encodes the specified SessionHeartbeatPing message. Does not implicitly {@link BattleOfCell.Message.SessionHeartbeatPing.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {BattleOfCell.Message.SessionHeartbeatPing.$Properties} message SessionHeartbeatPing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionHeartbeatPing.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp") && (typeof message.timestamp === "object" ? message.timestamp.low || message.timestamp.high : message.timestamp !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SessionHeartbeatPing message, length delimited. Does not implicitly {@link BattleOfCell.Message.SessionHeartbeatPing.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {BattleOfCell.Message.SessionHeartbeatPing.$Properties} message SessionHeartbeatPing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionHeartbeatPing.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SessionHeartbeatPing message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.SessionHeartbeatPing & BattleOfCell.Message.SessionHeartbeatPing.$Shape} SessionHeartbeatPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionHeartbeatPing.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.SessionHeartbeatPing(), value;
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
                            if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                                message.timestamp = value;
                            else
                                delete message.timestamp;
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
             * Decodes a SessionHeartbeatPing message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.SessionHeartbeatPing & BattleOfCell.Message.SessionHeartbeatPing.$Shape} SessionHeartbeatPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionHeartbeatPing.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionHeartbeatPing message.
             * @function verify
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionHeartbeatPing.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a SessionHeartbeatPing message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.SessionHeartbeatPing} SessionHeartbeatPing
             */
            SessionHeartbeatPing.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.SessionHeartbeatPing)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.SessionHeartbeatPing: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.SessionHeartbeatPing();
                if (object.timestamp != null)
                    if (typeof object.timestamp === "object" ? object.timestamp.low || object.timestamp.high : $Number(object.timestamp) !== 0)
                        if ($util.Long)
                            message.timestamp = $util.Long.fromValue(object.timestamp, true);
                        else if (typeof object.timestamp === "string")
                            message.timestamp = $parseInt(object.timestamp, 10);
                        else if (typeof object.timestamp === "number")
                            message.timestamp = object.timestamp;
                        else if (typeof object.timestamp === "object")
                            message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SessionHeartbeatPing message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {BattleOfCell.Message.SessionHeartbeatPing} message SessionHeartbeatPing
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionHeartbeatPing.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.timestamp = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.timestamp = typeof message.timestamp === "number" ? $BigInt(message.timestamp) : $util.Long.fromBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0, true).toBigInt();
                    else if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === $String ? $String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === $Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };

            /**
             * Converts this SessionHeartbeatPing to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionHeartbeatPing.prototype.toJSON = function() {
                return SessionHeartbeatPing.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SessionHeartbeatPing
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.SessionHeartbeatPing
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SessionHeartbeatPing.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.SessionHeartbeatPing";
            };

            return SessionHeartbeatPing;
        })();

        Message.SessionHeartbeatPong = (function() {

            /**
             * Properties of a SessionHeartbeatPong.
             * @typedef {Object} BattleOfCell.Message.SessionHeartbeatPong.$Properties
             * @property {number|Long|null} [timestamp] SessionHeartbeatPong timestamp
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SessionHeartbeatPong.
             * @memberof BattleOfCell.Message
             * @interface ISessionHeartbeatPong
             * @augments BattleOfCell.Message.SessionHeartbeatPong.$Properties
             * @deprecated Use BattleOfCell.Message.SessionHeartbeatPong.$Properties instead.
             */

            /**
             * Shape of a SessionHeartbeatPong.
             * @typedef {BattleOfCell.Message.SessionHeartbeatPong.$Properties} BattleOfCell.Message.SessionHeartbeatPong.$Shape
             */

            /**
             * Constructs a new SessionHeartbeatPong.
             * @memberof BattleOfCell.Message
             * @classdesc 服务端心跳确认。sequence 原样回显 SessionHeartbeatPing.sequence。
             * @constructor
             * @param {BattleOfCell.Message.SessionHeartbeatPong.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SessionHeartbeatPong = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SessionHeartbeatPong timestamp.
             * @member {number|Long} timestamp
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @instance
             */
            SessionHeartbeatPong.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SessionHeartbeatPong instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {BattleOfCell.Message.SessionHeartbeatPong.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.SessionHeartbeatPong} SessionHeartbeatPong instance
             * @type {{
             *   (properties: BattleOfCell.Message.SessionHeartbeatPong.$Shape): BattleOfCell.Message.SessionHeartbeatPong & BattleOfCell.Message.SessionHeartbeatPong.$Shape;
             *   (properties?: BattleOfCell.Message.SessionHeartbeatPong.$Properties): BattleOfCell.Message.SessionHeartbeatPong;
             * }}
             */
            SessionHeartbeatPong.create = function(properties) {
                return new SessionHeartbeatPong(properties);
            };

            /**
             * Encodes the specified SessionHeartbeatPong message. Does not implicitly {@link BattleOfCell.Message.SessionHeartbeatPong.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {BattleOfCell.Message.SessionHeartbeatPong.$Properties} message SessionHeartbeatPong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionHeartbeatPong.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp") && (typeof message.timestamp === "object" ? message.timestamp.low || message.timestamp.high : message.timestamp !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SessionHeartbeatPong message, length delimited. Does not implicitly {@link BattleOfCell.Message.SessionHeartbeatPong.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {BattleOfCell.Message.SessionHeartbeatPong.$Properties} message SessionHeartbeatPong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionHeartbeatPong.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SessionHeartbeatPong message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.SessionHeartbeatPong & BattleOfCell.Message.SessionHeartbeatPong.$Shape} SessionHeartbeatPong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionHeartbeatPong.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.SessionHeartbeatPong(), value;
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
                            if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                                message.timestamp = value;
                            else
                                delete message.timestamp;
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
             * Decodes a SessionHeartbeatPong message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.SessionHeartbeatPong & BattleOfCell.Message.SessionHeartbeatPong.$Shape} SessionHeartbeatPong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionHeartbeatPong.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionHeartbeatPong message.
             * @function verify
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionHeartbeatPong.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a SessionHeartbeatPong message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.SessionHeartbeatPong} SessionHeartbeatPong
             */
            SessionHeartbeatPong.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.SessionHeartbeatPong)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.SessionHeartbeatPong: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.SessionHeartbeatPong();
                if (object.timestamp != null)
                    if (typeof object.timestamp === "object" ? object.timestamp.low || object.timestamp.high : $Number(object.timestamp) !== 0)
                        if ($util.Long)
                            message.timestamp = $util.Long.fromValue(object.timestamp, true);
                        else if (typeof object.timestamp === "string")
                            message.timestamp = $parseInt(object.timestamp, 10);
                        else if (typeof object.timestamp === "number")
                            message.timestamp = object.timestamp;
                        else if (typeof object.timestamp === "object")
                            message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SessionHeartbeatPong message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {BattleOfCell.Message.SessionHeartbeatPong} message SessionHeartbeatPong
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionHeartbeatPong.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.timestamp = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.timestamp = typeof message.timestamp === "number" ? $BigInt(message.timestamp) : $util.Long.fromBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0, true).toBigInt();
                    else if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === $String ? $String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === $Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };

            /**
             * Converts this SessionHeartbeatPong to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionHeartbeatPong.prototype.toJSON = function() {
                return SessionHeartbeatPong.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SessionHeartbeatPong
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.SessionHeartbeatPong
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SessionHeartbeatPong.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.SessionHeartbeatPong";
            };

            return SessionHeartbeatPong;
        })();

        Message.PlayerRoomsReq = (function() {

            /**
             * Properties of a PlayerRoomsReq.
             * @typedef {Object} BattleOfCell.Message.PlayerRoomsReq.$Properties
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PlayerRoomsReq.
             * @memberof BattleOfCell.Message
             * @interface IPlayerRoomsReq
             * @augments BattleOfCell.Message.PlayerRoomsReq.$Properties
             * @deprecated Use BattleOfCell.Message.PlayerRoomsReq.$Properties instead.
             */

            /**
             * Shape of a PlayerRoomsReq.
             * @typedef {BattleOfCell.Message.PlayerRoomsReq.$Properties} BattleOfCell.Message.PlayerRoomsReq.$Shape
             */

            /**
             * Constructs a new PlayerRoomsReq.
             * @memberof BattleOfCell.Message
             * @classdesc 客户端 -> Gate 房间匹配入口（IRequest，由 Gate Handler 接收鉴权）
             * @constructor
             * @param {BattleOfCell.Message.PlayerRoomsReq.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PlayerRoomsReq = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Creates a new PlayerRoomsReq instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {BattleOfCell.Message.PlayerRoomsReq.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.PlayerRoomsReq} PlayerRoomsReq instance
             * @type {{
             *   (properties: BattleOfCell.Message.PlayerRoomsReq.$Shape): BattleOfCell.Message.PlayerRoomsReq & BattleOfCell.Message.PlayerRoomsReq.$Shape;
             *   (properties?: BattleOfCell.Message.PlayerRoomsReq.$Properties): BattleOfCell.Message.PlayerRoomsReq;
             * }}
             */
            PlayerRoomsReq.create = function(properties) {
                return new PlayerRoomsReq(properties);
            };

            /**
             * Encodes the specified PlayerRoomsReq message. Does not implicitly {@link BattleOfCell.Message.PlayerRoomsReq.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {BattleOfCell.Message.PlayerRoomsReq.$Properties} message PlayerRoomsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerRoomsReq.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PlayerRoomsReq message, length delimited. Does not implicitly {@link BattleOfCell.Message.PlayerRoomsReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {BattleOfCell.Message.PlayerRoomsReq.$Properties} message PlayerRoomsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerRoomsReq.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PlayerRoomsReq message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.PlayerRoomsReq & BattleOfCell.Message.PlayerRoomsReq.$Shape} PlayerRoomsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerRoomsReq.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.PlayerRoomsReq();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    reader.skipType(tag & 7, _depth, tag);
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
             * Decodes a PlayerRoomsReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.PlayerRoomsReq & BattleOfCell.Message.PlayerRoomsReq.$Shape} PlayerRoomsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerRoomsReq.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerRoomsReq message.
             * @function verify
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerRoomsReq.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                return null;
            };

            /**
             * Creates a PlayerRoomsReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.PlayerRoomsReq} PlayerRoomsReq
             */
            PlayerRoomsReq.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.PlayerRoomsReq)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.PlayerRoomsReq: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                return new $root.BattleOfCell.Message.PlayerRoomsReq();
            };

            /**
             * Creates a plain object from a PlayerRoomsReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {BattleOfCell.Message.PlayerRoomsReq} message PlayerRoomsReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerRoomsReq.toObject = function () {
                return {};
            };

            /**
             * Converts this PlayerRoomsReq to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerRoomsReq.prototype.toJSON = function() {
                return PlayerRoomsReq.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PlayerRoomsReq
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.PlayerRoomsReq
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PlayerRoomsReq.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.PlayerRoomsReq";
            };

            return PlayerRoomsReq;
        })();

        Message.PlayerRoomsResp = (function() {

            /**
             * Properties of a PlayerRoomsResp.
             * @typedef {Object} BattleOfCell.Message.PlayerRoomsResp.$Properties
             * @property {BattleOfCell.Message.MetaData.$Properties|null} [meta] PlayerRoomsResp meta
             * @property {Array.<BattleOfCell.Message.RespError.$Properties>|null} [error] PlayerRoomsResp error
             * @property {boolean|null} [ok] 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段）
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PlayerRoomsResp.
             * @memberof BattleOfCell.Message
             * @interface IPlayerRoomsResp
             * @augments BattleOfCell.Message.PlayerRoomsResp.$Properties
             * @deprecated Use BattleOfCell.Message.PlayerRoomsResp.$Properties instead.
             */

            /**
             * Shape of a PlayerRoomsResp.
             * @typedef {BattleOfCell.Message.PlayerRoomsResp.$Properties} BattleOfCell.Message.PlayerRoomsResp.$Shape
             */

            /**
             * Constructs a new PlayerRoomsResp.
             * @memberof BattleOfCell.Message
             * @classdesc Represents a PlayerRoomsResp.
             * @constructor
             * @param {BattleOfCell.Message.PlayerRoomsResp.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PlayerRoomsResp = function (properties) {
                this.error = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PlayerRoomsResp meta.
             * @member {BattleOfCell.Message.MetaData.$Properties|null|undefined} meta
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @instance
             */
            PlayerRoomsResp.prototype.meta = null;

            /**
             * PlayerRoomsResp error.
             * @member {Array.<BattleOfCell.Message.RespError.$Properties>} error
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @instance
             */
            PlayerRoomsResp.prototype.error = $util.emptyArray;

            /**
             * 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段）
             * @member {boolean} ok
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @instance
             */
            PlayerRoomsResp.prototype.ok = false;

            /**
             * Creates a new PlayerRoomsResp instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {BattleOfCell.Message.PlayerRoomsResp.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.PlayerRoomsResp} PlayerRoomsResp instance
             * @type {{
             *   (properties: BattleOfCell.Message.PlayerRoomsResp.$Shape): BattleOfCell.Message.PlayerRoomsResp & BattleOfCell.Message.PlayerRoomsResp.$Shape;
             *   (properties?: BattleOfCell.Message.PlayerRoomsResp.$Properties): BattleOfCell.Message.PlayerRoomsResp;
             * }}
             */
            PlayerRoomsResp.create = function(properties) {
                return new PlayerRoomsResp(properties);
            };

            /**
             * Encodes the specified PlayerRoomsResp message. Does not implicitly {@link BattleOfCell.Message.PlayerRoomsResp.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {BattleOfCell.Message.PlayerRoomsResp.$Properties} message PlayerRoomsResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerRoomsResp.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta"))
                    $root.BattleOfCell.Message.MetaData.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.error != null && message.error.length)
                    for (let i = 0; i < message.error.length; ++i)
                        $root.BattleOfCell.Message.RespError.encode(message.error[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok") && message.ok !== false)
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ok);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PlayerRoomsResp message, length delimited. Does not implicitly {@link BattleOfCell.Message.PlayerRoomsResp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {BattleOfCell.Message.PlayerRoomsResp.$Properties} message PlayerRoomsResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerRoomsResp.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PlayerRoomsResp message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.PlayerRoomsResp & BattleOfCell.Message.PlayerRoomsResp.$Shape} PlayerRoomsResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerRoomsResp.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.PlayerRoomsResp(), value;
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
                            message.meta = $root.BattleOfCell.Message.MetaData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.meta);
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.error && message.error.length))
                                message.error = [];
                            message.error.push($root.BattleOfCell.Message.RespError.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.ok = value;
                            else
                                delete message.ok;
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
             * Decodes a PlayerRoomsResp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.PlayerRoomsResp & BattleOfCell.Message.PlayerRoomsResp.$Shape} PlayerRoomsResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerRoomsResp.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerRoomsResp message.
             * @function verify
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerRoomsResp.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta")) {
                    let error = $root.BattleOfCell.Message.MetaData.verify(message.meta, _depth + 1);
                    if (error)
                        return "meta." + error;
                }
                if (message.error != null && $Object.hasOwnProperty.call(message, "error")) {
                    if (!$Array.isArray(message.error))
                        return "error: array expected";
                    for (let i = 0; i < message.error.length; ++i) {
                        let error = $root.BattleOfCell.Message.RespError.verify(message.error[i], _depth + 1);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                return null;
            };

            /**
             * Creates a PlayerRoomsResp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.PlayerRoomsResp} PlayerRoomsResp
             */
            PlayerRoomsResp.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.PlayerRoomsResp)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.PlayerRoomsResp: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.PlayerRoomsResp();
                if (object.meta != null) {
                    if (!$util.isObject(object.meta))
                        throw $TypeError(".BattleOfCell.Message.PlayerRoomsResp.meta: object expected");
                    message.meta = $root.BattleOfCell.Message.MetaData.fromObject(object.meta, _depth + 1);
                }
                if (object.error) {
                    if (!$Array.isArray(object.error))
                        throw $TypeError(".BattleOfCell.Message.PlayerRoomsResp.error: array expected");
                    message.error = $Array(object.error.length);
                    for (let i = 0; i < object.error.length; ++i) {
                        if (!$util.isObject(object.error[i]))
                            throw $TypeError(".BattleOfCell.Message.PlayerRoomsResp.error: object expected");
                        message.error[i] = $root.BattleOfCell.Message.RespError.fromObject(object.error[i], _depth + 1);
                    }
                }
                if (object.ok != null)
                    if (object.ok)
                        message.ok = $Boolean(object.ok);
                return message;
            };

            /**
             * Creates a plain object from a PlayerRoomsResp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {BattleOfCell.Message.PlayerRoomsResp} message PlayerRoomsResp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerRoomsResp.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.error = [];
                if (options.defaults) {
                    object.meta = null;
                    object.ok = false;
                }
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta"))
                    object.meta = $root.BattleOfCell.Message.MetaData.toObject(message.meta, options, _depth + 1);
                if (message.error && message.error.length) {
                    object.error = $Array(message.error.length);
                    for (let j = 0; j < message.error.length; ++j)
                        object.error[j] = $root.BattleOfCell.Message.RespError.toObject(message.error[j], options, _depth + 1);
                }
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    object.ok = message.ok;
                return object;
            };

            /**
             * Converts this PlayerRoomsResp to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerRoomsResp.prototype.toJSON = function() {
                return PlayerRoomsResp.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PlayerRoomsResp
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.PlayerRoomsResp
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PlayerRoomsResp.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.PlayerRoomsResp";
            };

            return PlayerRoomsResp;
        })();

        Message.G2Rooms_PlayerRoomsReq = (function() {

            /**
             * Properties of a G2Rooms_PlayerRoomsReq.
             * @typedef {Object} BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a G2Rooms_PlayerRoomsReq.
             * @memberof BattleOfCell.Message
             * @interface IG2Rooms_PlayerRoomsReq
             * @augments BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties
             * @deprecated Use BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties instead.
             */

            /**
             * Shape of a G2Rooms_PlayerRoomsReq.
             * @typedef {BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties} BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape
             */

            /**
             * Constructs a new G2Rooms_PlayerRoomsReq.
             * @memberof BattleOfCell.Message
             * @classdesc Rooms Scene 业务处理此协议；Gate 鉴权后 roaming.Call 并回填 PlayerRoomsResp
             * @constructor
             * @param {BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const G2Rooms_PlayerRoomsReq = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Creates a new G2Rooms_PlayerRoomsReq instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.G2Rooms_PlayerRoomsReq} G2Rooms_PlayerRoomsReq instance
             * @type {{
             *   (properties: BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape): BattleOfCell.Message.G2Rooms_PlayerRoomsReq & BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape;
             *   (properties?: BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties): BattleOfCell.Message.G2Rooms_PlayerRoomsReq;
             * }}
             */
            G2Rooms_PlayerRoomsReq.create = function(properties) {
                return new G2Rooms_PlayerRoomsReq(properties);
            };

            /**
             * Encodes the specified G2Rooms_PlayerRoomsReq message. Does not implicitly {@link BattleOfCell.Message.G2Rooms_PlayerRoomsReq.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties} message G2Rooms_PlayerRoomsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            G2Rooms_PlayerRoomsReq.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified G2Rooms_PlayerRoomsReq message, length delimited. Does not implicitly {@link BattleOfCell.Message.G2Rooms_PlayerRoomsReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties} message G2Rooms_PlayerRoomsReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            G2Rooms_PlayerRoomsReq.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a G2Rooms_PlayerRoomsReq message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.G2Rooms_PlayerRoomsReq & BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape} G2Rooms_PlayerRoomsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            G2Rooms_PlayerRoomsReq.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.G2Rooms_PlayerRoomsReq();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    reader.skipType(tag & 7, _depth, tag);
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
             * Decodes a G2Rooms_PlayerRoomsReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.G2Rooms_PlayerRoomsReq & BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape} G2Rooms_PlayerRoomsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            G2Rooms_PlayerRoomsReq.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a G2Rooms_PlayerRoomsReq message.
             * @function verify
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            G2Rooms_PlayerRoomsReq.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                return null;
            };

            /**
             * Creates a G2Rooms_PlayerRoomsReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.G2Rooms_PlayerRoomsReq} G2Rooms_PlayerRoomsReq
             */
            G2Rooms_PlayerRoomsReq.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.G2Rooms_PlayerRoomsReq)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.G2Rooms_PlayerRoomsReq: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                return new $root.BattleOfCell.Message.G2Rooms_PlayerRoomsReq();
            };

            /**
             * Creates a plain object from a G2Rooms_PlayerRoomsReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {BattleOfCell.Message.G2Rooms_PlayerRoomsReq} message G2Rooms_PlayerRoomsReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            G2Rooms_PlayerRoomsReq.toObject = function () {
                return {};
            };

            /**
             * Converts this G2Rooms_PlayerRoomsReq to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            G2Rooms_PlayerRoomsReq.prototype.toJSON = function() {
                return G2Rooms_PlayerRoomsReq.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for G2Rooms_PlayerRoomsReq
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.G2Rooms_PlayerRoomsReq
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            G2Rooms_PlayerRoomsReq.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.G2Rooms_PlayerRoomsReq";
            };

            return G2Rooms_PlayerRoomsReq;
        })();

        Message.Rooms2G_PlayerRoomsResp = (function() {

            /**
             * Properties of a Rooms2G_PlayerRoomsResp.
             * @typedef {Object} BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties
             * @property {BattleOfCell.Message.MetaData.$Properties|null} [meta] Rooms2G_PlayerRoomsResp meta
             * @property {Array.<BattleOfCell.Message.RespError.$Properties>|null} [error] Rooms2G_PlayerRoomsResp error
             * @property {boolean|null} [ok] Rooms2G_PlayerRoomsResp ok
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Rooms2G_PlayerRoomsResp.
             * @memberof BattleOfCell.Message
             * @interface IRooms2G_PlayerRoomsResp
             * @augments BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties
             * @deprecated Use BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties instead.
             */

            /**
             * Shape of a Rooms2G_PlayerRoomsResp.
             * @typedef {BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties} BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape
             */

            /**
             * Constructs a new Rooms2G_PlayerRoomsResp.
             * @memberof BattleOfCell.Message
             * @classdesc Represents a Rooms2G_PlayerRoomsResp.
             * @constructor
             * @param {BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Rooms2G_PlayerRoomsResp = function (properties) {
                this.error = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Rooms2G_PlayerRoomsResp meta.
             * @member {BattleOfCell.Message.MetaData.$Properties|null|undefined} meta
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @instance
             */
            Rooms2G_PlayerRoomsResp.prototype.meta = null;

            /**
             * Rooms2G_PlayerRoomsResp error.
             * @member {Array.<BattleOfCell.Message.RespError.$Properties>} error
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @instance
             */
            Rooms2G_PlayerRoomsResp.prototype.error = $util.emptyArray;

            /**
             * Rooms2G_PlayerRoomsResp ok.
             * @member {boolean} ok
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @instance
             */
            Rooms2G_PlayerRoomsResp.prototype.ok = false;

            /**
             * Creates a new Rooms2G_PlayerRoomsResp instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.Rooms2G_PlayerRoomsResp} Rooms2G_PlayerRoomsResp instance
             * @type {{
             *   (properties: BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape): BattleOfCell.Message.Rooms2G_PlayerRoomsResp & BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape;
             *   (properties?: BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties): BattleOfCell.Message.Rooms2G_PlayerRoomsResp;
             * }}
             */
            Rooms2G_PlayerRoomsResp.create = function(properties) {
                return new Rooms2G_PlayerRoomsResp(properties);
            };

            /**
             * Encodes the specified Rooms2G_PlayerRoomsResp message. Does not implicitly {@link BattleOfCell.Message.Rooms2G_PlayerRoomsResp.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties} message Rooms2G_PlayerRoomsResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rooms2G_PlayerRoomsResp.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta"))
                    $root.BattleOfCell.Message.MetaData.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.error != null && message.error.length)
                    for (let i = 0; i < message.error.length; ++i)
                        $root.BattleOfCell.Message.RespError.encode(message.error[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok") && message.ok !== false)
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ok);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Rooms2G_PlayerRoomsResp message, length delimited. Does not implicitly {@link BattleOfCell.Message.Rooms2G_PlayerRoomsResp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties} message Rooms2G_PlayerRoomsResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rooms2G_PlayerRoomsResp.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Rooms2G_PlayerRoomsResp message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.Rooms2G_PlayerRoomsResp & BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape} Rooms2G_PlayerRoomsResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rooms2G_PlayerRoomsResp.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.Rooms2G_PlayerRoomsResp(), value;
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
                            message.meta = $root.BattleOfCell.Message.MetaData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.meta);
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.error && message.error.length))
                                message.error = [];
                            message.error.push($root.BattleOfCell.Message.RespError.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.bool())
                                message.ok = value;
                            else
                                delete message.ok;
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
             * Decodes a Rooms2G_PlayerRoomsResp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.Rooms2G_PlayerRoomsResp & BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape} Rooms2G_PlayerRoomsResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rooms2G_PlayerRoomsResp.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Rooms2G_PlayerRoomsResp message.
             * @function verify
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Rooms2G_PlayerRoomsResp.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta")) {
                    let error = $root.BattleOfCell.Message.MetaData.verify(message.meta, _depth + 1);
                    if (error)
                        return "meta." + error;
                }
                if (message.error != null && $Object.hasOwnProperty.call(message, "error")) {
                    if (!$Array.isArray(message.error))
                        return "error: array expected";
                    for (let i = 0; i < message.error.length; ++i) {
                        let error = $root.BattleOfCell.Message.RespError.verify(message.error[i], _depth + 1);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                return null;
            };

            /**
             * Creates a Rooms2G_PlayerRoomsResp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.Rooms2G_PlayerRoomsResp} Rooms2G_PlayerRoomsResp
             */
            Rooms2G_PlayerRoomsResp.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.Rooms2G_PlayerRoomsResp)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.Rooms2G_PlayerRoomsResp: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.Rooms2G_PlayerRoomsResp();
                if (object.meta != null) {
                    if (!$util.isObject(object.meta))
                        throw $TypeError(".BattleOfCell.Message.Rooms2G_PlayerRoomsResp.meta: object expected");
                    message.meta = $root.BattleOfCell.Message.MetaData.fromObject(object.meta, _depth + 1);
                }
                if (object.error) {
                    if (!$Array.isArray(object.error))
                        throw $TypeError(".BattleOfCell.Message.Rooms2G_PlayerRoomsResp.error: array expected");
                    message.error = $Array(object.error.length);
                    for (let i = 0; i < object.error.length; ++i) {
                        if (!$util.isObject(object.error[i]))
                            throw $TypeError(".BattleOfCell.Message.Rooms2G_PlayerRoomsResp.error: object expected");
                        message.error[i] = $root.BattleOfCell.Message.RespError.fromObject(object.error[i], _depth + 1);
                    }
                }
                if (object.ok != null)
                    if (object.ok)
                        message.ok = $Boolean(object.ok);
                return message;
            };

            /**
             * Creates a plain object from a Rooms2G_PlayerRoomsResp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {BattleOfCell.Message.Rooms2G_PlayerRoomsResp} message Rooms2G_PlayerRoomsResp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Rooms2G_PlayerRoomsResp.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.error = [];
                if (options.defaults) {
                    object.meta = null;
                    object.ok = false;
                }
                if (message.meta != null && $Object.hasOwnProperty.call(message, "meta"))
                    object.meta = $root.BattleOfCell.Message.MetaData.toObject(message.meta, options, _depth + 1);
                if (message.error && message.error.length) {
                    object.error = $Array(message.error.length);
                    for (let j = 0; j < message.error.length; ++j)
                        object.error[j] = $root.BattleOfCell.Message.RespError.toObject(message.error[j], options, _depth + 1);
                }
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    object.ok = message.ok;
                return object;
            };

            /**
             * Converts this Rooms2G_PlayerRoomsResp to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Rooms2G_PlayerRoomsResp.prototype.toJSON = function() {
                return Rooms2G_PlayerRoomsResp.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Rooms2G_PlayerRoomsResp
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.Rooms2G_PlayerRoomsResp
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Rooms2G_PlayerRoomsResp.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.Rooms2G_PlayerRoomsResp";
            };

            return Rooms2G_PlayerRoomsResp;
        })();

        return Message;
    })();

    return BattleOfCell;
})();

export {
  $root as default
};
