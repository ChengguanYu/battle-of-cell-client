import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace BattleOfCell. */
export namespace BattleOfCell {

    /** Namespace Message. */
    namespace Message {

        /**
         * Properties of an EntryHomeReq.
         * @deprecated Use BattleOfCell.Message.EntryHomeReq.$Properties instead.
         */
        interface IEntryHomeReq extends BattleOfCell.Message.EntryHomeReq.$Properties {
        }

        /** 客户端进家园请求 */
        class EntryHomeReq {

            /**
             * Constructs a new EntryHomeReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.EntryHomeReq.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EntryHomeReq token. */
            token: string;

            /**
             * Creates a new EntryHomeReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntryHomeReq instance
             */
            static create(properties: BattleOfCell.Message.EntryHomeReq.$Shape): BattleOfCell.Message.EntryHomeReq & BattleOfCell.Message.EntryHomeReq.$Shape;
            static create(properties?: BattleOfCell.Message.EntryHomeReq.$Properties): BattleOfCell.Message.EntryHomeReq;

            /**
             * Encodes the specified EntryHomeReq message. Does not implicitly {@link BattleOfCell.Message.EntryHomeReq.verify|verify} messages.
             * @param message EntryHomeReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.EntryHomeReq.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntryHomeReq message, length delimited. Does not implicitly {@link BattleOfCell.Message.EntryHomeReq.verify|verify} messages.
             * @param message EntryHomeReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.EntryHomeReq.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntryHomeReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.EntryHomeReq & BattleOfCell.Message.EntryHomeReq.$Shape} EntryHomeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.EntryHomeReq & BattleOfCell.Message.EntryHomeReq.$Shape;

            /**
             * Decodes an EntryHomeReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.EntryHomeReq & BattleOfCell.Message.EntryHomeReq.$Shape} EntryHomeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.EntryHomeReq & BattleOfCell.Message.EntryHomeReq.$Shape;

            /**
             * Verifies an EntryHomeReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntryHomeReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntryHomeReq
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.EntryHomeReq;

            /**
             * Creates a plain object from an EntryHomeReq message. Also converts values to other types if specified.
             * @param message EntryHomeReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.EntryHomeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntryHomeReq to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EntryHomeReq
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EntryHomeReq {

            /** Properties of an EntryHomeReq. */
            interface $Properties {

                /** EntryHomeReq token */
                token?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EntryHomeReq. */
            type $Shape = BattleOfCell.Message.EntryHomeReq.$Properties;
        }

        /**
         * Properties of an EntryHomeResp.
         * @deprecated Use BattleOfCell.Message.EntryHomeResp.$Properties instead.
         */
        interface IEntryHomeResp extends BattleOfCell.Message.EntryHomeResp.$Properties {
        }

        /** Represents an EntryHomeResp. */
        class EntryHomeResp {

            /**
             * Constructs a new EntryHomeResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.EntryHomeResp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EntryHomeResp meta. */
            meta?: (BattleOfCell.Message.MetaData.$Properties|null);

            /** EntryHomeResp error. */
            error: BattleOfCell.Message.RespError.$Properties[];

            /** 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段） */
            ok: boolean;

            /**
             * Creates a new EntryHomeResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntryHomeResp instance
             */
            static create(properties: BattleOfCell.Message.EntryHomeResp.$Shape): BattleOfCell.Message.EntryHomeResp & BattleOfCell.Message.EntryHomeResp.$Shape;
            static create(properties?: BattleOfCell.Message.EntryHomeResp.$Properties): BattleOfCell.Message.EntryHomeResp;

            /**
             * Encodes the specified EntryHomeResp message. Does not implicitly {@link BattleOfCell.Message.EntryHomeResp.verify|verify} messages.
             * @param message EntryHomeResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.EntryHomeResp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntryHomeResp message, length delimited. Does not implicitly {@link BattleOfCell.Message.EntryHomeResp.verify|verify} messages.
             * @param message EntryHomeResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.EntryHomeResp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntryHomeResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.EntryHomeResp & BattleOfCell.Message.EntryHomeResp.$Shape} EntryHomeResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.EntryHomeResp & BattleOfCell.Message.EntryHomeResp.$Shape;

            /**
             * Decodes an EntryHomeResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.EntryHomeResp & BattleOfCell.Message.EntryHomeResp.$Shape} EntryHomeResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.EntryHomeResp & BattleOfCell.Message.EntryHomeResp.$Shape;

            /**
             * Verifies an EntryHomeResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntryHomeResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntryHomeResp
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.EntryHomeResp;

            /**
             * Creates a plain object from an EntryHomeResp message. Also converts values to other types if specified.
             * @param message EntryHomeResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.EntryHomeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntryHomeResp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EntryHomeResp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EntryHomeResp {

            /** Properties of an EntryHomeResp. */
            interface $Properties {

                /** EntryHomeResp meta */
                meta?: (BattleOfCell.Message.MetaData.$Properties|null);

                /** EntryHomeResp error */
                error?: (BattleOfCell.Message.RespError.$Properties[]|null);

                /** 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段） */
                ok?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EntryHomeResp. */
            type $Shape = BattleOfCell.Message.EntryHomeResp.$Properties;
        }

        /**
         * Properties of a MetaData.
         * @deprecated Use BattleOfCell.Message.MetaData.$Properties instead.
         */
        interface IMetaData extends BattleOfCell.Message.MetaData.$Properties {
        }

        /** Represents a MetaData. */
        class MetaData {

            /**
             * Constructs a new MetaData.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.MetaData.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MetaData statusCode. */
            statusCode: number;

            /** MetaData timestamp. */
            timestamp: (number|Long);

            /**
             * Creates a new MetaData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MetaData instance
             */
            static create(properties: BattleOfCell.Message.MetaData.$Shape): BattleOfCell.Message.MetaData & BattleOfCell.Message.MetaData.$Shape;
            static create(properties?: BattleOfCell.Message.MetaData.$Properties): BattleOfCell.Message.MetaData;

            /**
             * Encodes the specified MetaData message. Does not implicitly {@link BattleOfCell.Message.MetaData.verify|verify} messages.
             * @param message MetaData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.MetaData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MetaData message, length delimited. Does not implicitly {@link BattleOfCell.Message.MetaData.verify|verify} messages.
             * @param message MetaData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.MetaData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetaData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.MetaData & BattleOfCell.Message.MetaData.$Shape} MetaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.MetaData & BattleOfCell.Message.MetaData.$Shape;

            /**
             * Decodes a MetaData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.MetaData & BattleOfCell.Message.MetaData.$Shape} MetaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.MetaData & BattleOfCell.Message.MetaData.$Shape;

            /**
             * Verifies a MetaData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MetaData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MetaData
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.MetaData;

            /**
             * Creates a plain object from a MetaData message. Also converts values to other types if specified.
             * @param message MetaData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.MetaData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetaData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MetaData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MetaData {

            /** Properties of a MetaData. */
            interface $Properties {

                /** MetaData statusCode */
                statusCode?: (number|null);

                /** MetaData timestamp */
                timestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MetaData. */
            type $Shape = BattleOfCell.Message.MetaData.$Properties;
        }

        /**
         * Properties of a RespError.
         * @deprecated Use BattleOfCell.Message.RespError.$Properties instead.
         */
        interface IRespError extends BattleOfCell.Message.RespError.$Properties {
        }

        /** Represents a RespError. */
        class RespError {

            /**
             * Constructs a new RespError.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.RespError.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** RespError message. */
            message: string;

            /** RespError args. */
            args: string[];

            /**
             * Creates a new RespError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RespError instance
             */
            static create(properties: BattleOfCell.Message.RespError.$Shape): BattleOfCell.Message.RespError & BattleOfCell.Message.RespError.$Shape;
            static create(properties?: BattleOfCell.Message.RespError.$Properties): BattleOfCell.Message.RespError;

            /**
             * Encodes the specified RespError message. Does not implicitly {@link BattleOfCell.Message.RespError.verify|verify} messages.
             * @param message RespError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.RespError.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RespError message, length delimited. Does not implicitly {@link BattleOfCell.Message.RespError.verify|verify} messages.
             * @param message RespError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.RespError.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RespError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.RespError & BattleOfCell.Message.RespError.$Shape} RespError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.RespError & BattleOfCell.Message.RespError.$Shape;

            /**
             * Decodes a RespError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.RespError & BattleOfCell.Message.RespError.$Shape} RespError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.RespError & BattleOfCell.Message.RespError.$Shape;

            /**
             * Verifies a RespError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RespError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RespError
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.RespError;

            /**
             * Creates a plain object from a RespError message. Also converts values to other types if specified.
             * @param message RespError
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.RespError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RespError to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RespError
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RespError {

            /** Properties of a RespError. */
            interface $Properties {

                /** RespError message */
                message?: (string|null);

                /** RespError args */
                args?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RespError. */
            type $Shape = BattleOfCell.Message.RespError.$Properties;
        }

        /**
         * Properties of a SessionHeartbeatPing.
         * @deprecated Use BattleOfCell.Message.SessionHeartbeatPing.$Properties instead.
         */
        interface ISessionHeartbeatPing extends BattleOfCell.Message.SessionHeartbeatPing.$Properties {
        }

        /** 客户端心跳。sequence 在单次连接内从 1 开始递增，0 保留。 */
        class SessionHeartbeatPing {

            /**
             * Constructs a new SessionHeartbeatPing.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.SessionHeartbeatPing.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SessionHeartbeatPing timestamp. */
            timestamp: (number|Long);

            /**
             * Creates a new SessionHeartbeatPing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SessionHeartbeatPing instance
             */
            static create(properties: BattleOfCell.Message.SessionHeartbeatPing.$Shape): BattleOfCell.Message.SessionHeartbeatPing & BattleOfCell.Message.SessionHeartbeatPing.$Shape;
            static create(properties?: BattleOfCell.Message.SessionHeartbeatPing.$Properties): BattleOfCell.Message.SessionHeartbeatPing;

            /**
             * Encodes the specified SessionHeartbeatPing message. Does not implicitly {@link BattleOfCell.Message.SessionHeartbeatPing.verify|verify} messages.
             * @param message SessionHeartbeatPing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.SessionHeartbeatPing.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SessionHeartbeatPing message, length delimited. Does not implicitly {@link BattleOfCell.Message.SessionHeartbeatPing.verify|verify} messages.
             * @param message SessionHeartbeatPing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.SessionHeartbeatPing.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SessionHeartbeatPing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.SessionHeartbeatPing & BattleOfCell.Message.SessionHeartbeatPing.$Shape} SessionHeartbeatPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.SessionHeartbeatPing & BattleOfCell.Message.SessionHeartbeatPing.$Shape;

            /**
             * Decodes a SessionHeartbeatPing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.SessionHeartbeatPing & BattleOfCell.Message.SessionHeartbeatPing.$Shape} SessionHeartbeatPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.SessionHeartbeatPing & BattleOfCell.Message.SessionHeartbeatPing.$Shape;

            /**
             * Verifies a SessionHeartbeatPing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SessionHeartbeatPing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SessionHeartbeatPing
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.SessionHeartbeatPing;

            /**
             * Creates a plain object from a SessionHeartbeatPing message. Also converts values to other types if specified.
             * @param message SessionHeartbeatPing
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.SessionHeartbeatPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SessionHeartbeatPing to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SessionHeartbeatPing
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SessionHeartbeatPing {

            /** Properties of a SessionHeartbeatPing. */
            interface $Properties {

                /** SessionHeartbeatPing timestamp */
                timestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SessionHeartbeatPing. */
            type $Shape = BattleOfCell.Message.SessionHeartbeatPing.$Properties;
        }

        /**
         * Properties of a SessionHeartbeatPong.
         * @deprecated Use BattleOfCell.Message.SessionHeartbeatPong.$Properties instead.
         */
        interface ISessionHeartbeatPong extends BattleOfCell.Message.SessionHeartbeatPong.$Properties {
        }

        /** 服务端心跳确认。sequence 原样回显 SessionHeartbeatPing.sequence。 */
        class SessionHeartbeatPong {

            /**
             * Constructs a new SessionHeartbeatPong.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.SessionHeartbeatPong.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SessionHeartbeatPong timestamp. */
            timestamp: (number|Long);

            /**
             * Creates a new SessionHeartbeatPong instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SessionHeartbeatPong instance
             */
            static create(properties: BattleOfCell.Message.SessionHeartbeatPong.$Shape): BattleOfCell.Message.SessionHeartbeatPong & BattleOfCell.Message.SessionHeartbeatPong.$Shape;
            static create(properties?: BattleOfCell.Message.SessionHeartbeatPong.$Properties): BattleOfCell.Message.SessionHeartbeatPong;

            /**
             * Encodes the specified SessionHeartbeatPong message. Does not implicitly {@link BattleOfCell.Message.SessionHeartbeatPong.verify|verify} messages.
             * @param message SessionHeartbeatPong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.SessionHeartbeatPong.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SessionHeartbeatPong message, length delimited. Does not implicitly {@link BattleOfCell.Message.SessionHeartbeatPong.verify|verify} messages.
             * @param message SessionHeartbeatPong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.SessionHeartbeatPong.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SessionHeartbeatPong message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.SessionHeartbeatPong & BattleOfCell.Message.SessionHeartbeatPong.$Shape} SessionHeartbeatPong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.SessionHeartbeatPong & BattleOfCell.Message.SessionHeartbeatPong.$Shape;

            /**
             * Decodes a SessionHeartbeatPong message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.SessionHeartbeatPong & BattleOfCell.Message.SessionHeartbeatPong.$Shape} SessionHeartbeatPong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.SessionHeartbeatPong & BattleOfCell.Message.SessionHeartbeatPong.$Shape;

            /**
             * Verifies a SessionHeartbeatPong message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SessionHeartbeatPong message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SessionHeartbeatPong
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.SessionHeartbeatPong;

            /**
             * Creates a plain object from a SessionHeartbeatPong message. Also converts values to other types if specified.
             * @param message SessionHeartbeatPong
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.SessionHeartbeatPong, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SessionHeartbeatPong to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SessionHeartbeatPong
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SessionHeartbeatPong {

            /** Properties of a SessionHeartbeatPong. */
            interface $Properties {

                /** SessionHeartbeatPong timestamp */
                timestamp?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SessionHeartbeatPong. */
            type $Shape = BattleOfCell.Message.SessionHeartbeatPong.$Properties;
        }

        /**
         * Properties of a PlayerMatchReq.
         * @deprecated Use BattleOfCell.Message.PlayerMatchReq.$Properties instead.
         */
        interface IPlayerMatchReq extends BattleOfCell.Message.PlayerMatchReq.$Properties {
        }

        /** 客户端发起匹配请求 */
        class PlayerMatchReq {

            /**
             * Constructs a new PlayerMatchReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.PlayerMatchReq.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new PlayerMatchReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerMatchReq instance
             */
            static create(properties: BattleOfCell.Message.PlayerMatchReq.$Shape): BattleOfCell.Message.PlayerMatchReq & BattleOfCell.Message.PlayerMatchReq.$Shape;
            static create(properties?: BattleOfCell.Message.PlayerMatchReq.$Properties): BattleOfCell.Message.PlayerMatchReq;

            /**
             * Encodes the specified PlayerMatchReq message. Does not implicitly {@link BattleOfCell.Message.PlayerMatchReq.verify|verify} messages.
             * @param message PlayerMatchReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.PlayerMatchReq.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerMatchReq message, length delimited. Does not implicitly {@link BattleOfCell.Message.PlayerMatchReq.verify|verify} messages.
             * @param message PlayerMatchReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.PlayerMatchReq.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerMatchReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.PlayerMatchReq & BattleOfCell.Message.PlayerMatchReq.$Shape} PlayerMatchReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.PlayerMatchReq & BattleOfCell.Message.PlayerMatchReq.$Shape;

            /**
             * Decodes a PlayerMatchReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.PlayerMatchReq & BattleOfCell.Message.PlayerMatchReq.$Shape} PlayerMatchReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.PlayerMatchReq & BattleOfCell.Message.PlayerMatchReq.$Shape;

            /**
             * Verifies a PlayerMatchReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerMatchReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerMatchReq
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.PlayerMatchReq;

            /**
             * Creates a plain object from a PlayerMatchReq message. Also converts values to other types if specified.
             * @param message PlayerMatchReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.PlayerMatchReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerMatchReq to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PlayerMatchReq
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PlayerMatchReq {

            /** Properties of a PlayerMatchReq. */
            interface $Properties {

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PlayerMatchReq. */
            type $Shape = BattleOfCell.Message.PlayerMatchReq.$Properties;
        }

        /**
         * Properties of a PlayerMatchResp.
         * @deprecated Use BattleOfCell.Message.PlayerMatchResp.$Properties instead.
         */
        interface IPlayerMatchResp extends BattleOfCell.Message.PlayerMatchResp.$Properties {
        }

        /** Represents a PlayerMatchResp. */
        class PlayerMatchResp {

            /**
             * Constructs a new PlayerMatchResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.PlayerMatchResp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PlayerMatchResp meta. */
            meta?: (BattleOfCell.Message.MetaData.$Properties|null);

            /** PlayerMatchResp error. */
            error: BattleOfCell.Message.RespError.$Properties[];

            /** 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段） */
            ok: boolean;

            /**
             * Creates a new PlayerMatchResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerMatchResp instance
             */
            static create(properties: BattleOfCell.Message.PlayerMatchResp.$Shape): BattleOfCell.Message.PlayerMatchResp & BattleOfCell.Message.PlayerMatchResp.$Shape;
            static create(properties?: BattleOfCell.Message.PlayerMatchResp.$Properties): BattleOfCell.Message.PlayerMatchResp;

            /**
             * Encodes the specified PlayerMatchResp message. Does not implicitly {@link BattleOfCell.Message.PlayerMatchResp.verify|verify} messages.
             * @param message PlayerMatchResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.PlayerMatchResp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerMatchResp message, length delimited. Does not implicitly {@link BattleOfCell.Message.PlayerMatchResp.verify|verify} messages.
             * @param message PlayerMatchResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.PlayerMatchResp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerMatchResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.PlayerMatchResp & BattleOfCell.Message.PlayerMatchResp.$Shape} PlayerMatchResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.PlayerMatchResp & BattleOfCell.Message.PlayerMatchResp.$Shape;

            /**
             * Decodes a PlayerMatchResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.PlayerMatchResp & BattleOfCell.Message.PlayerMatchResp.$Shape} PlayerMatchResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.PlayerMatchResp & BattleOfCell.Message.PlayerMatchResp.$Shape;

            /**
             * Verifies a PlayerMatchResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerMatchResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerMatchResp
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.PlayerMatchResp;

            /**
             * Creates a plain object from a PlayerMatchResp message. Also converts values to other types if specified.
             * @param message PlayerMatchResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.PlayerMatchResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerMatchResp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PlayerMatchResp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PlayerMatchResp {

            /** Properties of a PlayerMatchResp. */
            interface $Properties {

                /** PlayerMatchResp meta */
                meta?: (BattleOfCell.Message.MetaData.$Properties|null);

                /** PlayerMatchResp error */
                error?: (BattleOfCell.Message.RespError.$Properties[]|null);

                /** 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段） */
                ok?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PlayerMatchResp. */
            type $Shape = BattleOfCell.Message.PlayerMatchResp.$Properties;
        }
    }
}
