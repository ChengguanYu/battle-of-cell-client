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
         * Properties of a PlayerRoomsReq.
         * @deprecated Use BattleOfCell.Message.PlayerRoomsReq.$Properties instead.
         */
        interface IPlayerRoomsReq extends BattleOfCell.Message.PlayerRoomsReq.$Properties {
        }

        /** 客户端 -> Gate 房间匹配入口（IRequest，由 Gate Handler 接收鉴权） */
        class PlayerRoomsReq {

            /**
             * Constructs a new PlayerRoomsReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.PlayerRoomsReq.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new PlayerRoomsReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerRoomsReq instance
             */
            static create(properties: BattleOfCell.Message.PlayerRoomsReq.$Shape): BattleOfCell.Message.PlayerRoomsReq & BattleOfCell.Message.PlayerRoomsReq.$Shape;
            static create(properties?: BattleOfCell.Message.PlayerRoomsReq.$Properties): BattleOfCell.Message.PlayerRoomsReq;

            /**
             * Encodes the specified PlayerRoomsReq message. Does not implicitly {@link BattleOfCell.Message.PlayerRoomsReq.verify|verify} messages.
             * @param message PlayerRoomsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.PlayerRoomsReq.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerRoomsReq message, length delimited. Does not implicitly {@link BattleOfCell.Message.PlayerRoomsReq.verify|verify} messages.
             * @param message PlayerRoomsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.PlayerRoomsReq.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerRoomsReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.PlayerRoomsReq & BattleOfCell.Message.PlayerRoomsReq.$Shape} PlayerRoomsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.PlayerRoomsReq & BattleOfCell.Message.PlayerRoomsReq.$Shape;

            /**
             * Decodes a PlayerRoomsReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.PlayerRoomsReq & BattleOfCell.Message.PlayerRoomsReq.$Shape} PlayerRoomsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.PlayerRoomsReq & BattleOfCell.Message.PlayerRoomsReq.$Shape;

            /**
             * Verifies a PlayerRoomsReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerRoomsReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerRoomsReq
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.PlayerRoomsReq;

            /**
             * Creates a plain object from a PlayerRoomsReq message. Also converts values to other types if specified.
             * @param message PlayerRoomsReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.PlayerRoomsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerRoomsReq to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PlayerRoomsReq
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PlayerRoomsReq {

            /** Properties of a PlayerRoomsReq. */
            interface $Properties {

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PlayerRoomsReq. */
            type $Shape = BattleOfCell.Message.PlayerRoomsReq.$Properties;
        }

        /**
         * Properties of a PlayerRoomsResp.
         * @deprecated Use BattleOfCell.Message.PlayerRoomsResp.$Properties instead.
         */
        interface IPlayerRoomsResp extends BattleOfCell.Message.PlayerRoomsResp.$Properties {
        }

        /** Represents a PlayerRoomsResp. */
        class PlayerRoomsResp {

            /**
             * Constructs a new PlayerRoomsResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.PlayerRoomsResp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PlayerRoomsResp meta. */
            meta?: (BattleOfCell.Message.MetaData.$Properties|null);

            /** PlayerRoomsResp error. */
            error: BattleOfCell.Message.RespError.$Properties[];

            /** 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段） */
            ok: boolean;

            /**
             * Creates a new PlayerRoomsResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerRoomsResp instance
             */
            static create(properties: BattleOfCell.Message.PlayerRoomsResp.$Shape): BattleOfCell.Message.PlayerRoomsResp & BattleOfCell.Message.PlayerRoomsResp.$Shape;
            static create(properties?: BattleOfCell.Message.PlayerRoomsResp.$Properties): BattleOfCell.Message.PlayerRoomsResp;

            /**
             * Encodes the specified PlayerRoomsResp message. Does not implicitly {@link BattleOfCell.Message.PlayerRoomsResp.verify|verify} messages.
             * @param message PlayerRoomsResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.PlayerRoomsResp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerRoomsResp message, length delimited. Does not implicitly {@link BattleOfCell.Message.PlayerRoomsResp.verify|verify} messages.
             * @param message PlayerRoomsResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.PlayerRoomsResp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerRoomsResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.PlayerRoomsResp & BattleOfCell.Message.PlayerRoomsResp.$Shape} PlayerRoomsResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.PlayerRoomsResp & BattleOfCell.Message.PlayerRoomsResp.$Shape;

            /**
             * Decodes a PlayerRoomsResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.PlayerRoomsResp & BattleOfCell.Message.PlayerRoomsResp.$Shape} PlayerRoomsResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.PlayerRoomsResp & BattleOfCell.Message.PlayerRoomsResp.$Shape;

            /**
             * Verifies a PlayerRoomsResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerRoomsResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerRoomsResp
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.PlayerRoomsResp;

            /**
             * Creates a plain object from a PlayerRoomsResp message. Also converts values to other types if specified.
             * @param message PlayerRoomsResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.PlayerRoomsResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerRoomsResp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PlayerRoomsResp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PlayerRoomsResp {

            /** Properties of a PlayerRoomsResp. */
            interface $Properties {

                /** PlayerRoomsResp meta */
                meta?: (BattleOfCell.Message.MetaData.$Properties|null);

                /** PlayerRoomsResp error */
                error?: (BattleOfCell.Message.RespError.$Properties[]|null);

                /** 业务是否成功（与 meta 同级；true 时 LightProto 会写出该字段） */
                ok?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PlayerRoomsResp. */
            type $Shape = BattleOfCell.Message.PlayerRoomsResp.$Properties;
        }

        /**
         * Properties of a G2Rooms_PlayerRoomsReq.
         * @deprecated Use BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties instead.
         */
        interface IG2Rooms_PlayerRoomsReq extends BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties {
        }

        /** Rooms Scene 业务处理此协议；Gate 鉴权后 roaming.Call 并回填 PlayerRoomsResp */
        class G2Rooms_PlayerRoomsReq {

            /**
             * Constructs a new G2Rooms_PlayerRoomsReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new G2Rooms_PlayerRoomsReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns G2Rooms_PlayerRoomsReq instance
             */
            static create(properties: BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape): BattleOfCell.Message.G2Rooms_PlayerRoomsReq & BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape;
            static create(properties?: BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties): BattleOfCell.Message.G2Rooms_PlayerRoomsReq;

            /**
             * Encodes the specified G2Rooms_PlayerRoomsReq message. Does not implicitly {@link BattleOfCell.Message.G2Rooms_PlayerRoomsReq.verify|verify} messages.
             * @param message G2Rooms_PlayerRoomsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified G2Rooms_PlayerRoomsReq message, length delimited. Does not implicitly {@link BattleOfCell.Message.G2Rooms_PlayerRoomsReq.verify|verify} messages.
             * @param message G2Rooms_PlayerRoomsReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a G2Rooms_PlayerRoomsReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.G2Rooms_PlayerRoomsReq & BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape} G2Rooms_PlayerRoomsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.G2Rooms_PlayerRoomsReq & BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape;

            /**
             * Decodes a G2Rooms_PlayerRoomsReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.G2Rooms_PlayerRoomsReq & BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape} G2Rooms_PlayerRoomsReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.G2Rooms_PlayerRoomsReq & BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Shape;

            /**
             * Verifies a G2Rooms_PlayerRoomsReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a G2Rooms_PlayerRoomsReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns G2Rooms_PlayerRoomsReq
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.G2Rooms_PlayerRoomsReq;

            /**
             * Creates a plain object from a G2Rooms_PlayerRoomsReq message. Also converts values to other types if specified.
             * @param message G2Rooms_PlayerRoomsReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.G2Rooms_PlayerRoomsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this G2Rooms_PlayerRoomsReq to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for G2Rooms_PlayerRoomsReq
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace G2Rooms_PlayerRoomsReq {

            /** Properties of a G2Rooms_PlayerRoomsReq. */
            interface $Properties {

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a G2Rooms_PlayerRoomsReq. */
            type $Shape = BattleOfCell.Message.G2Rooms_PlayerRoomsReq.$Properties;
        }

        /**
         * Properties of a Rooms2G_PlayerRoomsResp.
         * @deprecated Use BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties instead.
         */
        interface IRooms2G_PlayerRoomsResp extends BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties {
        }

        /** Represents a Rooms2G_PlayerRoomsResp. */
        class Rooms2G_PlayerRoomsResp {

            /**
             * Constructs a new Rooms2G_PlayerRoomsResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Rooms2G_PlayerRoomsResp meta. */
            meta?: (BattleOfCell.Message.MetaData.$Properties|null);

            /** Rooms2G_PlayerRoomsResp error. */
            error: BattleOfCell.Message.RespError.$Properties[];

            /** Rooms2G_PlayerRoomsResp ok. */
            ok: boolean;

            /**
             * Creates a new Rooms2G_PlayerRoomsResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Rooms2G_PlayerRoomsResp instance
             */
            static create(properties: BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape): BattleOfCell.Message.Rooms2G_PlayerRoomsResp & BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape;
            static create(properties?: BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties): BattleOfCell.Message.Rooms2G_PlayerRoomsResp;

            /**
             * Encodes the specified Rooms2G_PlayerRoomsResp message. Does not implicitly {@link BattleOfCell.Message.Rooms2G_PlayerRoomsResp.verify|verify} messages.
             * @param message Rooms2G_PlayerRoomsResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Rooms2G_PlayerRoomsResp message, length delimited. Does not implicitly {@link BattleOfCell.Message.Rooms2G_PlayerRoomsResp.verify|verify} messages.
             * @param message Rooms2G_PlayerRoomsResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Rooms2G_PlayerRoomsResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.Rooms2G_PlayerRoomsResp & BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape} Rooms2G_PlayerRoomsResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.Rooms2G_PlayerRoomsResp & BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape;

            /**
             * Decodes a Rooms2G_PlayerRoomsResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.Rooms2G_PlayerRoomsResp & BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape} Rooms2G_PlayerRoomsResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.Rooms2G_PlayerRoomsResp & BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Shape;

            /**
             * Verifies a Rooms2G_PlayerRoomsResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Rooms2G_PlayerRoomsResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Rooms2G_PlayerRoomsResp
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.Rooms2G_PlayerRoomsResp;

            /**
             * Creates a plain object from a Rooms2G_PlayerRoomsResp message. Also converts values to other types if specified.
             * @param message Rooms2G_PlayerRoomsResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.Rooms2G_PlayerRoomsResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Rooms2G_PlayerRoomsResp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Rooms2G_PlayerRoomsResp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Rooms2G_PlayerRoomsResp {

            /** Properties of a Rooms2G_PlayerRoomsResp. */
            interface $Properties {

                /** Rooms2G_PlayerRoomsResp meta */
                meta?: (BattleOfCell.Message.MetaData.$Properties|null);

                /** Rooms2G_PlayerRoomsResp error */
                error?: (BattleOfCell.Message.RespError.$Properties[]|null);

                /** Rooms2G_PlayerRoomsResp ok */
                ok?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Rooms2G_PlayerRoomsResp. */
            type $Shape = BattleOfCell.Message.Rooms2G_PlayerRoomsResp.$Properties;
        }
    }
}
