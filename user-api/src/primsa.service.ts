import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Timestamp } from './stubs/google/protobuf/timestamp';
import { UserRole } from './stubs/user/v1alpha/message';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
    this.$use(async (params, next) => {
      if (
        params.model === 'User' &&
        ['create', 'update'].includes(params.action)
      ) {
        const user = params.args.data;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        params.args.data = user;
      }
      return next(params);
    });
    this.$use(async (params, next) => {
      const result = await next(params);
      if (params.model !== 'User') return result;

      const mapToProto = (result) => {
        if (
          params?.model === 'User' &&
          params?.args?.select?.password !== true
        ) {
          delete result.password;
        }
        result.id = result.id + '';

        result.createdAt = Timestamp.fromDate(result.createdAt);
        result.createdAt = {
          nanos: result.createdAt.nanos,
          seconds: result.createdAt.seconds + '',
        };
        result.updatedAt = Timestamp.fromDate(result.updatedAt);
        result.updatedAt = {
          nanos: result.updatedAt.nanos,
          seconds: result.updatedAt.seconds + '',
        };

        switch (result.role) {
          case Role.BASIC:
            result.role = UserRole.BASIC;
            break;
          case Role.ADMIN:
            result.role = UserRole.ADMIN;
            break;

          default:
            result.role = UserRole.BASIC;
            break;
        }

        return result;
      };
      if (!result) {
        return result;
      }
      if (result?.length > -1) {
        return result.map(mapToProto);
      }
      return mapToProto(result);
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
