// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "media/v1alpha/media.proto" (package "media.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { MediaService } from "./media";
import type { DeleteMediaResponse } from "./media";
import type { DeleteMediaRequest } from "./media";
import type { ListMediasResponse } from "./media";
import type { ListMediasRequest } from "./media";
import type { GetMediaResponse } from "./media";
import type { GetMediaRequest } from "./media";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MediaResponse } from "./media";
import type { MediaRequest } from "./media";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * MediaService is a microservice that manages media files associated with Kanban cards.
 *
 * @generated from protobuf service media.v1alpha.MediaService
 */
export interface IMediaServiceClient {
    /**
     * CreateMedia creates a new media file.
     *
     * @generated from protobuf rpc: CreateMedia(media.v1alpha.MediaRequest) returns (media.v1alpha.MediaResponse);
     */
    createMedia(input: MediaRequest, options?: RpcOptions): UnaryCall<MediaRequest, MediaResponse>;
    /**
     * GetMedia retrieves a media file by its ID.
     *
     * @generated from protobuf rpc: GetMedia(media.v1alpha.GetMediaRequest) returns (media.v1alpha.GetMediaResponse);
     */
    getMedia(input: GetMediaRequest, options?: RpcOptions): UnaryCall<GetMediaRequest, GetMediaResponse>;
    /**
     * ListMedia retrieves all media files.
     *
     * @generated from protobuf rpc: ListMediaForTask(media.v1alpha.ListMediasRequest) returns (media.v1alpha.ListMediasResponse);
     */
    listMediaForTask(input: ListMediasRequest, options?: RpcOptions): UnaryCall<ListMediasRequest, ListMediasResponse>;
    /**
     * DeleteMedia deletes a media file by its ID.
     *
     * @generated from protobuf rpc: DeleteMedia(media.v1alpha.DeleteMediaRequest) returns (media.v1alpha.DeleteMediaResponse);
     */
    deleteMedia(input: DeleteMediaRequest, options?: RpcOptions): UnaryCall<DeleteMediaRequest, DeleteMediaResponse>;
}
/**
 * MediaService is a microservice that manages media files associated with Kanban cards.
 *
 * @generated from protobuf service media.v1alpha.MediaService
 */
export class MediaServiceClient implements IMediaServiceClient, ServiceInfo {
    typeName = MediaService.typeName;
    methods = MediaService.methods;
    options = MediaService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * CreateMedia creates a new media file.
     *
     * @generated from protobuf rpc: CreateMedia(media.v1alpha.MediaRequest) returns (media.v1alpha.MediaResponse);
     */
    createMedia(input: MediaRequest, options?: RpcOptions): UnaryCall<MediaRequest, MediaResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MediaRequest, MediaResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetMedia retrieves a media file by its ID.
     *
     * @generated from protobuf rpc: GetMedia(media.v1alpha.GetMediaRequest) returns (media.v1alpha.GetMediaResponse);
     */
    getMedia(input: GetMediaRequest, options?: RpcOptions): UnaryCall<GetMediaRequest, GetMediaResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetMediaRequest, GetMediaResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListMedia retrieves all media files.
     *
     * @generated from protobuf rpc: ListMediaForTask(media.v1alpha.ListMediasRequest) returns (media.v1alpha.ListMediasResponse);
     */
    listMediaForTask(input: ListMediasRequest, options?: RpcOptions): UnaryCall<ListMediasRequest, ListMediasResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListMediasRequest, ListMediasResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteMedia deletes a media file by its ID.
     *
     * @generated from protobuf rpc: DeleteMedia(media.v1alpha.DeleteMediaRequest) returns (media.v1alpha.DeleteMediaResponse);
     */
    deleteMedia(input: DeleteMediaRequest, options?: RpcOptions): UnaryCall<DeleteMediaRequest, DeleteMediaResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteMediaRequest, DeleteMediaResponse>("unary", this._transport, method, opt, input);
    }
}
