// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import {
    TaskServiceClient,
    UsageServiceClient,
    FieldServiceClient
} from '$lib/stubs/Field/v1beta/task.client';
import type {AuthServiceClient} from './lib/stubs/auth/v1alpha/service.client';
import type {UserServiceClient} from './lib/stubs/user/v1alpha/service.client';
import type {MediaServiceClient} from "./lib/stubs/media/v1alpha/media.client";
import {TimesheetCRUDServiceClient} from "./lib/stubs/timesheet/v1_alpha/timesheet.client";

// and what to do when importing types
declare global {
    namespace App {
        interface Locals {
            taskClients: {
                crudClient: TaskServiceClient;
                fieldClient: FieldServiceClient;
                usageClient: UsageServiceClient;
            };
            mediaClient: MediaServiceClient;
            authClient: AuthServiceClient;
            userClient: UserServiceClient;
            timesheetClient: TimesheetCRUDServiceClient;
        }
    }
}

export {};
