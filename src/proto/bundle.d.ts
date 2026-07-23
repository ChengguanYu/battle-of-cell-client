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

        /** Op enum. */
        enum Op {

            /** SPAWN value */
            SPAWN = 0,

            /** LAUNCH value */
            LAUNCH = 1
        }

        /**
         * Properties of a vec2d.
         * @deprecated Use BattleOfCell.Message.vec2d.$Properties instead.
         */
        interface Ivec2d extends BattleOfCell.Message.vec2d.$Properties {
        }

        /** Represents a vec2d. */
        class vec2d {

            /**
             * Constructs a new vec2d.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.vec2d.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** vec2d x. */
            x: (number|Long);

            /** vec2d y. */
            y: (number|Long);

            /**
             * Creates a new vec2d instance using the specified properties.
             * @param [properties] Properties to set
             * @returns vec2d instance
             */
            static create(properties: BattleOfCell.Message.vec2d.$Shape): BattleOfCell.Message.vec2d & BattleOfCell.Message.vec2d.$Shape;
            static create(properties?: BattleOfCell.Message.vec2d.$Properties): BattleOfCell.Message.vec2d;

            /**
             * Encodes the specified vec2d message. Does not implicitly {@link BattleOfCell.Message.vec2d.verify|verify} messages.
             * @param message vec2d message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.vec2d.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified vec2d message, length delimited. Does not implicitly {@link BattleOfCell.Message.vec2d.verify|verify} messages.
             * @param message vec2d message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.vec2d.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a vec2d message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.vec2d & BattleOfCell.Message.vec2d.$Shape} vec2d
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.vec2d & BattleOfCell.Message.vec2d.$Shape;

            /**
             * Decodes a vec2d message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.vec2d & BattleOfCell.Message.vec2d.$Shape} vec2d
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.vec2d & BattleOfCell.Message.vec2d.$Shape;

            /**
             * Verifies a vec2d message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a vec2d message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns vec2d
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.vec2d;

            /**
             * Creates a plain object from a vec2d message. Also converts values to other types if specified.
             * @param message vec2d
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.vec2d, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this vec2d to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for vec2d
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace vec2d {

            /** Properties of a vec2d. */
            interface $Properties {

                /** vec2d x */
                x?: (number|Long|null);

                /** vec2d y */
                y?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a vec2d. */
            type $Shape = BattleOfCell.Message.vec2d.$Properties;
        }

        /**
         * Properties of a position2d.
         * @deprecated Use BattleOfCell.Message.position2d.$Properties instead.
         */
        interface Iposition2d extends BattleOfCell.Message.position2d.$Properties {
        }

        /** Represents a position2d. */
        class position2d {

            /**
             * Constructs a new position2d.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.position2d.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** position2d x. */
            x: number;

            /** position2d y. */
            y: number;

            /**
             * Creates a new position2d instance using the specified properties.
             * @param [properties] Properties to set
             * @returns position2d instance
             */
            static create(properties: BattleOfCell.Message.position2d.$Shape): BattleOfCell.Message.position2d & BattleOfCell.Message.position2d.$Shape;
            static create(properties?: BattleOfCell.Message.position2d.$Properties): BattleOfCell.Message.position2d;

            /**
             * Encodes the specified position2d message. Does not implicitly {@link BattleOfCell.Message.position2d.verify|verify} messages.
             * @param message position2d message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.position2d.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified position2d message, length delimited. Does not implicitly {@link BattleOfCell.Message.position2d.verify|verify} messages.
             * @param message position2d message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.position2d.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a position2d message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.position2d & BattleOfCell.Message.position2d.$Shape} position2d
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.position2d & BattleOfCell.Message.position2d.$Shape;

            /**
             * Decodes a position2d message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.position2d & BattleOfCell.Message.position2d.$Shape} position2d
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.position2d & BattleOfCell.Message.position2d.$Shape;

            /**
             * Verifies a position2d message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a position2d message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns position2d
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.position2d;

            /**
             * Creates a plain object from a position2d message. Also converts values to other types if specified.
             * @param message position2d
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.position2d, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this position2d to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for position2d
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace position2d {

            /** Properties of a position2d. */
            interface $Properties {

                /** position2d x */
                x?: (number|null);

                /** position2d y */
                y?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a position2d. */
            type $Shape = BattleOfCell.Message.position2d.$Properties;
        }

        /**
         * Properties of a player.
         * @deprecated Use BattleOfCell.Message.player.$Properties instead.
         */
        interface Iplayer extends BattleOfCell.Message.player.$Properties {
        }

        /** Represents a player. */
        class player {

            /**
             * Constructs a new player.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.player.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** player direction. */
            direction?: (BattleOfCell.Message.vec2d.$Properties|null);

            /** player speed. */
            speed: (number|Long);

            /** player position. */
            position?: (BattleOfCell.Message.position2d.$Properties|null);

            /** player eid. */
            eid: number;

            /**
             * Creates a new player instance using the specified properties.
             * @param [properties] Properties to set
             * @returns player instance
             */
            static create(properties: BattleOfCell.Message.player.$Shape): BattleOfCell.Message.player & BattleOfCell.Message.player.$Shape;
            static create(properties?: BattleOfCell.Message.player.$Properties): BattleOfCell.Message.player;

            /**
             * Encodes the specified player message. Does not implicitly {@link BattleOfCell.Message.player.verify|verify} messages.
             * @param message player message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.player.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified player message, length delimited. Does not implicitly {@link BattleOfCell.Message.player.verify|verify} messages.
             * @param message player message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.player.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a player message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.player & BattleOfCell.Message.player.$Shape} player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.player & BattleOfCell.Message.player.$Shape;

            /**
             * Decodes a player message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.player & BattleOfCell.Message.player.$Shape} player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.player & BattleOfCell.Message.player.$Shape;

            /**
             * Verifies a player message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a player message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns player
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.player;

            /**
             * Creates a plain object from a player message. Also converts values to other types if specified.
             * @param message player
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.player, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this player to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for player
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace player {

            /** Properties of a player. */
            interface $Properties {

                /** player direction */
                direction?: (BattleOfCell.Message.vec2d.$Properties|null);

                /** player speed */
                speed?: (number|Long|null);

                /** player position */
                position?: (BattleOfCell.Message.position2d.$Properties|null);

                /** player eid */
                eid?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a player. */
            type $Shape = BattleOfCell.Message.player.$Properties;
        }

        /**
         * Properties of a frame.
         * @deprecated Use BattleOfCell.Message.frame.$Properties instead.
         */
        interface Iframe extends BattleOfCell.Message.frame.$Properties {
        }

        /** Represents a frame. */
        class frame {

            /**
             * Constructs a new frame.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.frame.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** frame op. */
            op: BattleOfCell.Message.Op;

            /** frame data. */
            data?: (BattleOfCell.Message.player.$Properties|null);

            /**
             * Creates a new frame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns frame instance
             */
            static create(properties: BattleOfCell.Message.frame.$Shape): BattleOfCell.Message.frame & BattleOfCell.Message.frame.$Shape;
            static create(properties?: BattleOfCell.Message.frame.$Properties): BattleOfCell.Message.frame;

            /**
             * Encodes the specified frame message. Does not implicitly {@link BattleOfCell.Message.frame.verify|verify} messages.
             * @param message frame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.frame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified frame message, length delimited. Does not implicitly {@link BattleOfCell.Message.frame.verify|verify} messages.
             * @param message frame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.frame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a frame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.frame & BattleOfCell.Message.frame.$Shape} frame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.frame & BattleOfCell.Message.frame.$Shape;

            /**
             * Decodes a frame message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.frame & BattleOfCell.Message.frame.$Shape} frame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.frame & BattleOfCell.Message.frame.$Shape;

            /**
             * Verifies a frame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a frame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns frame
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.frame;

            /**
             * Creates a plain object from a frame message. Also converts values to other types if specified.
             * @param message frame
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.frame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this frame to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for frame
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace frame {

            /** Properties of a frame. */
            interface $Properties {

                /** frame op */
                op?: (BattleOfCell.Message.Op|null);

                /** frame data */
                data?: (BattleOfCell.Message.player.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a frame. */
            type $Shape = BattleOfCell.Message.frame.$Properties;
        }

        /**
         * Properties of a server_frame.
         * @deprecated Use BattleOfCell.Message.server_frame.$Properties instead.
         */
        interface Iserver_frame extends BattleOfCell.Message.server_frame.$Properties {
        }

        /** Represents a server_frame. */
        class server_frame {

            /**
             * Constructs a new server_frame.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.server_frame.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** server_frame frames. */
            frames: BattleOfCell.Message.frame.$Properties[];

            /** server_frame frameNumber. */
            frameNumber: (number|Long);

            /** server_frame randomSeed. */
            randomSeed: number;

            /** server_frame meta. */
            meta?: (BattleOfCell.Message.MetaData.$Properties|null);

            /**
             * Creates a new server_frame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns server_frame instance
             */
            static create(properties: BattleOfCell.Message.server_frame.$Shape): BattleOfCell.Message.server_frame & BattleOfCell.Message.server_frame.$Shape;
            static create(properties?: BattleOfCell.Message.server_frame.$Properties): BattleOfCell.Message.server_frame;

            /**
             * Encodes the specified server_frame message. Does not implicitly {@link BattleOfCell.Message.server_frame.verify|verify} messages.
             * @param message server_frame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.server_frame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified server_frame message, length delimited. Does not implicitly {@link BattleOfCell.Message.server_frame.verify|verify} messages.
             * @param message server_frame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.server_frame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a server_frame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.server_frame & BattleOfCell.Message.server_frame.$Shape} server_frame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.server_frame & BattleOfCell.Message.server_frame.$Shape;

            /**
             * Decodes a server_frame message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.server_frame & BattleOfCell.Message.server_frame.$Shape} server_frame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.server_frame & BattleOfCell.Message.server_frame.$Shape;

            /**
             * Verifies a server_frame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a server_frame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns server_frame
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.server_frame;

            /**
             * Creates a plain object from a server_frame message. Also converts values to other types if specified.
             * @param message server_frame
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.server_frame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this server_frame to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for server_frame
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace server_frame {

            /** Properties of a server_frame. */
            interface $Properties {

                /** server_frame frames */
                frames?: (BattleOfCell.Message.frame.$Properties[]|null);

                /** server_frame frameNumber */
                frameNumber?: (number|Long|null);

                /** server_frame randomSeed */
                randomSeed?: (number|null);

                /** server_frame meta */
                meta?: (BattleOfCell.Message.MetaData.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a server_frame. */
            type $Shape = BattleOfCell.Message.server_frame.$Properties;
        }

        /**
         * Properties of a client_frame.
         * @deprecated Use BattleOfCell.Message.client_frame.$Properties instead.
         */
        interface Iclient_frame extends BattleOfCell.Message.client_frame.$Properties {
        }

        /** Represents a client_frame. */
        class client_frame {

            /**
             * Constructs a new client_frame.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.client_frame.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** client_frame frames. */
            frames: BattleOfCell.Message.frame.$Properties[];

            /** client_frame frameNumber. */
            frameNumber: (number|Long);

            /**
             * Creates a new client_frame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns client_frame instance
             */
            static create(properties: BattleOfCell.Message.client_frame.$Shape): BattleOfCell.Message.client_frame & BattleOfCell.Message.client_frame.$Shape;
            static create(properties?: BattleOfCell.Message.client_frame.$Properties): BattleOfCell.Message.client_frame;

            /**
             * Encodes the specified client_frame message. Does not implicitly {@link BattleOfCell.Message.client_frame.verify|verify} messages.
             * @param message client_frame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.client_frame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified client_frame message, length delimited. Does not implicitly {@link BattleOfCell.Message.client_frame.verify|verify} messages.
             * @param message client_frame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.client_frame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a client_frame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.client_frame & BattleOfCell.Message.client_frame.$Shape} client_frame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.client_frame & BattleOfCell.Message.client_frame.$Shape;

            /**
             * Decodes a client_frame message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.client_frame & BattleOfCell.Message.client_frame.$Shape} client_frame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.client_frame & BattleOfCell.Message.client_frame.$Shape;

            /**
             * Verifies a client_frame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a client_frame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns client_frame
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.client_frame;

            /**
             * Creates a plain object from a client_frame message. Also converts values to other types if specified.
             * @param message client_frame
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.client_frame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this client_frame to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for client_frame
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace client_frame {

            /** Properties of a client_frame. */
            interface $Properties {

                /** client_frame frames */
                frames?: (BattleOfCell.Message.frame.$Properties[]|null);

                /** client_frame frameNumber */
                frameNumber?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a client_frame. */
            type $Shape = BattleOfCell.Message.client_frame.$Properties;
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

            /** 匹配成功后的房间 ID；失败时为 0 */
            roomId: (number|Long);

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

                /** 匹配成功后的房间 ID；失败时为 0 */
                roomId?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PlayerMatchResp. */
            type $Shape = BattleOfCell.Message.PlayerMatchResp.$Properties;
        }
    }
}
