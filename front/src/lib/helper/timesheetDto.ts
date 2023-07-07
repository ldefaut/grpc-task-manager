import type {Timesheet} from "../stubs/timesheet/v1_alpha/timesheet";

export interface ITimesheet {
    id: number;
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
}

export const toJson = (time: Timesheet): ITimesheet => ({
    id: time.id,
    title: time.title,
    description: time.description,
    startDate: time.startDate,
    endDate: time.endDate,
    location: time.location,
});
