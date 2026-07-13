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
         * Properties of an EntryHomeRes.
         * @deprecated Use BattleOfCell.Message.EntryHomeRes.$Properties instead.
         */
        interface IEntryHomeRes extends BattleOfCell.Message.EntryHomeRes.$Properties {
        }

        /** 客户端进家园响应 */
        class EntryHomeRes {

            /**
             * Constructs a new EntryHomeRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: BattleOfCell.Message.EntryHomeRes.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EntryHomeRes status. */
            status: number;

            /**
             * Creates a new EntryHomeRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntryHomeRes instance
             */
            static create(properties: BattleOfCell.Message.EntryHomeRes.$Shape): BattleOfCell.Message.EntryHomeRes & BattleOfCell.Message.EntryHomeRes.$Shape;
            static create(properties?: BattleOfCell.Message.EntryHomeRes.$Properties): BattleOfCell.Message.EntryHomeRes;

            /**
             * Encodes the specified EntryHomeRes message. Does not implicitly {@link BattleOfCell.Message.EntryHomeRes.verify|verify} messages.
             * @param message EntryHomeRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: BattleOfCell.Message.EntryHomeRes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntryHomeRes message, length delimited. Does not implicitly {@link BattleOfCell.Message.EntryHomeRes.verify|verify} messages.
             * @param message EntryHomeRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: BattleOfCell.Message.EntryHomeRes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntryHomeRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {BattleOfCell.Message.EntryHomeRes & BattleOfCell.Message.EntryHomeRes.$Shape} EntryHomeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleOfCell.Message.EntryHomeRes & BattleOfCell.Message.EntryHomeRes.$Shape;

            /**
             * Decodes an EntryHomeRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {BattleOfCell.Message.EntryHomeRes & BattleOfCell.Message.EntryHomeRes.$Shape} EntryHomeRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleOfCell.Message.EntryHomeRes & BattleOfCell.Message.EntryHomeRes.$Shape;

            /**
             * Verifies an EntryHomeRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntryHomeRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntryHomeRes
             */
            static fromObject(object: { [k: string]: any }): BattleOfCell.Message.EntryHomeRes;

            /**
             * Creates a plain object from an EntryHomeRes message. Also converts values to other types if specified.
             * @param message EntryHomeRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: BattleOfCell.Message.EntryHomeRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntryHomeRes to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EntryHomeRes
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EntryHomeRes {

            /** Properties of an EntryHomeRes. */
            interface $Properties {

                /** EntryHomeRes status */
                status?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EntryHomeRes. */
            type $Shape = BattleOfCell.Message.EntryHomeRes.$Properties;
        }
    }
}
