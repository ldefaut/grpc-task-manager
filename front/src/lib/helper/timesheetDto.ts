import {Timestamp} from '../stubs/google/protobuf/timestamp';
import {User} from '../stubs/user/v1alpha/message';
import type {Timesheet} from "../stubs/timesheet/v1_alpha/timesheet";

export interface ITimesheet {
    id: number;
    title: string;
    description: string;
    locatioon: string;
    startDate: Date;
    endDate: Date;
}

export const toJson = (time: Timesheet): ITimesheet => ({
    id: time.id,
    title: time.title,
    description: time.description,
    endDate: Timestamp.toDate(user.createdAt as Timestamp), ,
    startDate,
    locatioon
});

export const toPb = (user: Partial<IUser>) =>
    User.create({
        ...user,
        createdAt: user.createdAt && Timestamp.fromDate(user.createdAt),
        updatedAt: user.updatedAt && Timestamp.fromDate(user.updatedAt)
    });
