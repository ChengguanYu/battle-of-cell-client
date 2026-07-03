import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Fantasy. */
export namespace Fantasy {

    /** Namespace Network. */
    namespace Network {

        /** Namespace Message. */
        namespace Message {

            /**
             * Properties of a C2G_TestMessage.
             * @deprecated Use Fantasy.Network.Message.C2G_TestMessage.$Properties instead.
             */
            interface IC2G_TestMessage extends Fantasy.Network.Message.C2G_TestMessage.$Properties {
            }

            /** Represents a C2G_TestMessage. */
            class C2G_TestMessage {

                /**
                 * Constructs a new C2G_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.C2G_TestMessage.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** C2G_TestMessage Tag. */
                Tag: string;

                /**
                 * Creates a new C2G_TestMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestMessage instance
                 */
                static create(properties: Fantasy.Network.Message.C2G_TestMessage.$Shape): Fantasy.Network.Message.C2G_TestMessage & Fantasy.Network.Message.C2G_TestMessage.$Shape;
                static create(properties?: Fantasy.Network.Message.C2G_TestMessage.$Properties): Fantasy.Network.Message.C2G_TestMessage;

                /**
                 * Encodes the specified C2G_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @param message C2G_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: Fantasy.Network.Message.C2G_TestMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @param message C2G_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: Fantasy.Network.Message.C2G_TestMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestMessage & Fantasy.Network.Message.C2G_TestMessage.$Shape} C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestMessage & Fantasy.Network.Message.C2G_TestMessage.$Shape;

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestMessage & Fantasy.Network.Message.C2G_TestMessage.$Shape} C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestMessage & Fantasy.Network.Message.C2G_TestMessage.$Shape;

                /**
                 * Verifies a C2G_TestMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestMessage
                 */
                static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestMessage;

                /**
                 * Creates a plain object from a C2G_TestMessage message. Also converts values to other types if specified.
                 * @param message C2G_TestMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: Fantasy.Network.Message.C2G_TestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestMessage to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for C2G_TestMessage
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace C2G_TestMessage {

                /** Properties of a C2G_TestMessage. */
                interface $Properties {

                    /** C2G_TestMessage Tag */
                    Tag?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a C2G_TestMessage. */
                type $Shape = Fantasy.Network.Message.C2G_TestMessage.$Properties;
            }

            /**
             * Properties of a C2G_TestRequest.
             * @deprecated Use Fantasy.Network.Message.C2G_TestRequest.$Properties instead.
             */
            interface IC2G_TestRequest extends Fantasy.Network.Message.C2G_TestRequest.$Properties {
            }

            /** Represents a C2G_TestRequest. */
            class C2G_TestRequest {

                /**
                 * Constructs a new C2G_TestRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.C2G_TestRequest.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** C2G_TestRequest Tag. */
                Tag: string;

                /**
                 * Creates a new C2G_TestRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestRequest instance
                 */
                static create(properties: Fantasy.Network.Message.C2G_TestRequest.$Shape): Fantasy.Network.Message.C2G_TestRequest & Fantasy.Network.Message.C2G_TestRequest.$Shape;
                static create(properties?: Fantasy.Network.Message.C2G_TestRequest.$Properties): Fantasy.Network.Message.C2G_TestRequest;

                /**
                 * Encodes the specified C2G_TestRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @param message C2G_TestRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: Fantasy.Network.Message.C2G_TestRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @param message C2G_TestRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: Fantasy.Network.Message.C2G_TestRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestRequest & Fantasy.Network.Message.C2G_TestRequest.$Shape} C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRequest & Fantasy.Network.Message.C2G_TestRequest.$Shape;

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestRequest & Fantasy.Network.Message.C2G_TestRequest.$Shape} C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestRequest & Fantasy.Network.Message.C2G_TestRequest.$Shape;

                /**
                 * Verifies a C2G_TestRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestRequest
                 */
                static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestRequest;

                /**
                 * Creates a plain object from a C2G_TestRequest message. Also converts values to other types if specified.
                 * @param message C2G_TestRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: Fantasy.Network.Message.C2G_TestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestRequest to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for C2G_TestRequest
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace C2G_TestRequest {

                /** Properties of a C2G_TestRequest. */
                interface $Properties {

                    /** C2G_TestRequest Tag */
                    Tag?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a C2G_TestRequest. */
                type $Shape = Fantasy.Network.Message.C2G_TestRequest.$Properties;
            }

            /**
             * Properties of a G2C_TestResponse.
             * @deprecated Use Fantasy.Network.Message.G2C_TestResponse.$Properties instead.
             */
            interface IG2C_TestResponse extends Fantasy.Network.Message.G2C_TestResponse.$Properties {
            }

            /** Represents a G2C_TestResponse. */
            class G2C_TestResponse {

                /**
                 * Constructs a new G2C_TestResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.G2C_TestResponse.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** G2C_TestResponse Tag. */
                Tag: string;

                /**
                 * Creates a new G2C_TestResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_TestResponse instance
                 */
                static create(properties: Fantasy.Network.Message.G2C_TestResponse.$Shape): Fantasy.Network.Message.G2C_TestResponse & Fantasy.Network.Message.G2C_TestResponse.$Shape;
                static create(properties?: Fantasy.Network.Message.G2C_TestResponse.$Properties): Fantasy.Network.Message.G2C_TestResponse;

                /**
                 * Encodes the specified G2C_TestResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @param message G2C_TestResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: Fantasy.Network.Message.G2C_TestResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_TestResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @param message G2C_TestResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: Fantasy.Network.Message.G2C_TestResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_TestResponse & Fantasy.Network.Message.G2C_TestResponse.$Shape} G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_TestResponse & Fantasy.Network.Message.G2C_TestResponse.$Shape;

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_TestResponse & Fantasy.Network.Message.G2C_TestResponse.$Shape} G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_TestResponse & Fantasy.Network.Message.G2C_TestResponse.$Shape;

                /**
                 * Verifies a G2C_TestResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_TestResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_TestResponse
                 */
                static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_TestResponse;

                /**
                 * Creates a plain object from a G2C_TestResponse message. Also converts values to other types if specified.
                 * @param message G2C_TestResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: Fantasy.Network.Message.G2C_TestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_TestResponse to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for G2C_TestResponse
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace G2C_TestResponse {

                /** Properties of a G2C_TestResponse. */
                interface $Properties {

                    /** G2C_TestResponse Tag */
                    Tag?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a G2C_TestResponse. */
                type $Shape = Fantasy.Network.Message.G2C_TestResponse.$Properties;
            }
        }
    }
}
