import {GrpcTransport} from '@protobuf-ts/grpc-transport';
import {ChannelCredentials} from '@grpc/grpc-js';
import {
    FieldServiceClient,
    TaskServiceClient,
    UsageServiceClient
} from '$lib/stubs/task/v1beta/task.client';
import fs from 'fs';
import {UserServiceClient} from '$src/lib/stubs/user/v1alpha/service.client';
import {AuthServiceClient} from '$src/lib/stubs/auth/v1alpha/service.client';
import {MediaServiceClient} from '$src/lib/stubs/media/v1alpha/media.client';
import {env} from '$env/dynamic/private';
import {TimesheetCRUDServiceClient} from "../stubs/timesheet/v1_alpha/timesheet.client";

const credentials = ChannelCredentials.createInsecure();

const taskTransport = new GrpcTransport({
    host: env.TASK_API_URL as string,
    channelCredentials: credentials
});
const userTransport = new GrpcTransport({
    host: env.USER_API_URL as string,
    channelCredentials: credentials
});
const authTransport = new GrpcTransport({
    host: env.AUTH_API_URL as string,
    channelCredentials: credentials
});
const mediaTransport = new GrpcTransport({
    host: env.MEDIA_API_URL as string,
    channelCredentials: credentials
});
const timesheetTransport = new GrpcTransport({
    host: env.TIMESHEET_API_URL as string,
    channelCredentials: credentials
})

export const taskClients = {
    crudClient: new TaskServiceClient(taskTransport),
    fieldClient: new FieldServiceClient(taskTransport),
    usageClient: new UsageServiceClient(taskTransport)
};
export const userClient = new UserServiceClient(userTransport);
export const authClient = new AuthServiceClient(authTransport);
export const mediaClient = new MediaServiceClient(mediaTransport);
export const timesheetClient = new TimesheetCRUDServiceClient(timesheetTransport);