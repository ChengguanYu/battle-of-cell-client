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

        Message.PlayerMatchReq = (function() {

            /**
             * Properties of a PlayerMatchReq.
             * @typedef {Object} BattleOfCell.Message.PlayerMatchReq.$Properties
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PlayerMatchReq.
             * @memberof BattleOfCell.Message
             * @interface IPlayerMatchReq
             * @augments BattleOfCell.Message.PlayerMatchReq.$Properties
             * @deprecated Use BattleOfCell.Message.PlayerMatchReq.$Properties instead.
             */

            /**
             * Shape of a PlayerMatchReq.
             * @typedef {BattleOfCell.Message.PlayerMatchReq.$Properties} BattleOfCell.Message.PlayerMatchReq.$Shape
             */

            /**
             * Constructs a new PlayerMatchReq.
             * @memberof BattleOfCell.Message
             * @classdesc 客户端发起匹配请求
             * @constructor
             * @param {BattleOfCell.Message.PlayerMatchReq.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PlayerMatchReq = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Creates a new PlayerMatchReq instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {BattleOfCell.Message.PlayerMatchReq.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.PlayerMatchReq} PlayerMatchReq instance
             * @type {{
             *   (properties: BattleOfCell.Message.PlayerMatchReq.$Shape): BattleOfCell.Message.PlayerMatchReq & BattleOfCell.Message.PlayerMatchReq.$Shape;
             *   (properties?: BattleOfCell.Message.PlayerMatchReq.$Properties): BattleOfCell.Message.PlayerMatchReq;
             * }}
             */
            PlayerMatchReq.create = function(properties) {
                return new PlayerMatchReq(properties);
            };

            /**
             * Encodes the specified PlayerMatchReq message. Does not implicitly {@link BattleOfCell.Message.PlayerMatchReq.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {BattleOfCell.Message.PlayerMatchReq.$Properties} message PlayerMatchReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerMatchReq.encode = function (message, writer, _depth) {
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
             * Encodes the specified PlayerMatchReq message, length delimited. Does not implicitly {@link BattleOfCell.Message.PlayerMatchReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {BattleOfCell.Message.PlayerMatchReq.$Properties} message PlayerMatchReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerMatchReq.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PlayerMatchReq message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.PlayerMatchReq & BattleOfCell.Message.PlayerMatchReq.$Shape} PlayerMatchReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerMatchReq.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.PlayerMatchReq();
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
             * Decodes a PlayerMatchReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.PlayerMatchReq & BattleOfCell.Message.PlayerMatchReq.$Shape} PlayerMatchReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerMatchReq.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerMatchReq message.
             * @function verify
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerMatchReq.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                return null;
            };

            /**
             * Creates a PlayerMatchReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.PlayerMatchReq} PlayerMatchReq
             */
            PlayerMatchReq.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.PlayerMatchReq)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.PlayerMatchReq: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                return new $root.BattleOfCell.Message.PlayerMatchReq();
            };

            /**
             * Creates a plain object from a PlayerMatchReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {BattleOfCell.Message.PlayerMatchReq} message PlayerMatchReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerMatchReq.toObject = function () {
                return {};
            };

            /**
             * Converts this PlayerMatchReq to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerMatchReq.prototype.toJSON = function() {
                return PlayerMatchReq.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PlayerMatchReq
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.PlayerMatchReq
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PlayerMatchReq.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.PlayerMatchReq";
            };

            return PlayerMatchReq;
        })();

        Message.PlayerMatchResp = (function() {

            /**
             * Properties of a PlayerMatchResp.
             * @typedef {Object} BattleOfCell.Message.PlayerMatchResp.$Properties
             * @property {BattleOfCell.Message.MetaData.$Properties|null} [meta] PlayerMatchResp meta
             * @property {Array.<BattleOfCell.Message.RespError.$Properties>|null} [error] PlayerMatchResp error
             * @property {boolean|null} [ok] 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段）
             * @property {number|Long|null} [roomId] 匹配成功后的房间 ID；失败时为 0
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PlayerMatchResp.
             * @memberof BattleOfCell.Message
             * @interface IPlayerMatchResp
             * @augments BattleOfCell.Message.PlayerMatchResp.$Properties
             * @deprecated Use BattleOfCell.Message.PlayerMatchResp.$Properties instead.
             */

            /**
             * Shape of a PlayerMatchResp.
             * @typedef {BattleOfCell.Message.PlayerMatchResp.$Properties} BattleOfCell.Message.PlayerMatchResp.$Shape
             */

            /**
             * Constructs a new PlayerMatchResp.
             * @memberof BattleOfCell.Message
             * @classdesc Represents a PlayerMatchResp.
             * @constructor
             * @param {BattleOfCell.Message.PlayerMatchResp.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PlayerMatchResp = function (properties) {
                this.error = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PlayerMatchResp meta.
             * @member {BattleOfCell.Message.MetaData.$Properties|null|undefined} meta
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @instance
             */
            PlayerMatchResp.prototype.meta = null;

            /**
             * PlayerMatchResp error.
             * @member {Array.<BattleOfCell.Message.RespError.$Properties>} error
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @instance
             */
            PlayerMatchResp.prototype.error = $util.emptyArray;

            /**
             * 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段）
             * @member {boolean} ok
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @instance
             */
            PlayerMatchResp.prototype.ok = false;

            /**
             * 匹配成功后的房间 ID；失败时为 0
             * @member {number|Long} roomId
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @instance
             */
            PlayerMatchResp.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PlayerMatchResp instance using the specified properties.
             * @function create
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {BattleOfCell.Message.PlayerMatchResp.$Properties=} [properties] Properties to set
             * @returns {BattleOfCell.Message.PlayerMatchResp} PlayerMatchResp instance
             * @type {{
             *   (properties: BattleOfCell.Message.PlayerMatchResp.$Shape): BattleOfCell.Message.PlayerMatchResp & BattleOfCell.Message.PlayerMatchResp.$Shape;
             *   (properties?: BattleOfCell.Message.PlayerMatchResp.$Properties): BattleOfCell.Message.PlayerMatchResp;
             * }}
             */
            PlayerMatchResp.create = function(properties) {
                return new PlayerMatchResp(properties);
            };

            /**
             * Encodes the specified PlayerMatchResp message. Does not implicitly {@link BattleOfCell.Message.PlayerMatchResp.verify|verify} messages.
             * @function encode
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {BattleOfCell.Message.PlayerMatchResp.$Properties} message PlayerMatchResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerMatchResp.encode = function (message, writer, _depth) {
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
                if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && (typeof message.roomId === "object" ? message.roomId.low || message.roomId.high : message.roomId !== 0))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.roomId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PlayerMatchResp message, length delimited. Does not implicitly {@link BattleOfCell.Message.PlayerMatchResp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {BattleOfCell.Message.PlayerMatchResp.$Properties} message PlayerMatchResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerMatchResp.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PlayerMatchResp message from the specified reader or buffer.
             * @function decode
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.PlayerMatchResp & BattleOfCell.Message.PlayerMatchResp.$Shape} PlayerMatchResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerMatchResp.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.BattleOfCell.Message.PlayerMatchResp(), value;
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
                    case 5: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.roomId = value;
                            else
                                delete message.roomId;
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
             * Decodes a PlayerMatchResp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.PlayerMatchResp & BattleOfCell.Message.PlayerMatchResp.$Shape} PlayerMatchResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerMatchResp.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerMatchResp message.
             * @function verify
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerMatchResp.verify = function (message, _depth) {
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
                if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                    if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                        return "roomId: integer|Long expected";
                return null;
            };

            /**
             * Creates a PlayerMatchResp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {BattleOfCell.Message.PlayerMatchResp} PlayerMatchResp
             */
            PlayerMatchResp.fromObject = function (object, _depth) {
                if (object instanceof $root.BattleOfCell.Message.PlayerMatchResp)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".BattleOfCell.Message.PlayerMatchResp: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.BattleOfCell.Message.PlayerMatchResp();
                if (object.meta != null) {
                    if (!$util.isObject(object.meta))
                        throw $TypeError(".BattleOfCell.Message.PlayerMatchResp.meta: object expected");
                    message.meta = $root.BattleOfCell.Message.MetaData.fromObject(object.meta, _depth + 1);
                }
                if (object.error) {
                    if (!$Array.isArray(object.error))
                        throw $TypeError(".BattleOfCell.Message.PlayerMatchResp.error: array expected");
                    message.error = $Array(object.error.length);
                    for (let i = 0; i < object.error.length; ++i) {
                        if (!$util.isObject(object.error[i]))
                            throw $TypeError(".BattleOfCell.Message.PlayerMatchResp.error: object expected");
                        message.error[i] = $root.BattleOfCell.Message.RespError.fromObject(object.error[i], _depth + 1);
                    }
                }
                if (object.ok != null)
                    if (object.ok)
                        message.ok = $Boolean(object.ok);
                if (object.roomId != null)
                    if (typeof object.roomId === "object" ? object.roomId.low || object.roomId.high : $Number(object.roomId) !== 0)
                        if ($util.Long)
                            message.roomId = $util.Long.fromValue(object.roomId, false);
                        else if (typeof object.roomId === "string")
                            message.roomId = $parseInt(object.roomId, 10);
                        else if (typeof object.roomId === "number")
                            message.roomId = object.roomId;
                        else if (typeof object.roomId === "object")
                            message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PlayerMatchResp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {BattleOfCell.Message.PlayerMatchResp} message PlayerMatchResp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerMatchResp.toObject = function (message, options, _depth) {
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
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.roomId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.roomId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
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
                if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.roomId = typeof message.roomId === "number" ? $BigInt(message.roomId) : $util.Long.fromBits(message.roomId.low >>> 0, message.roomId.high >>> 0, false).toBigInt();
                    else if (typeof message.roomId === "number")
                        object.roomId = options.longs === $String ? $String(message.roomId) : message.roomId;
                    else
                        object.roomId = options.longs === $String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === $Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
                return object;
            };

            /**
             * Converts this PlayerMatchResp to JSON.
             * @function toJSON
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerMatchResp.prototype.toJSON = function() {
                return PlayerMatchResp.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PlayerMatchResp
             * @function getTypeUrl
             * @memberof BattleOfCell.Message.PlayerMatchResp
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PlayerMatchResp.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/BattleOfCell.Message.PlayerMatchResp";
            };

            return PlayerMatchResp;
        })();

        return Message;
    })();

    return BattleOfCell;
})();

export {
  $root as default
};
