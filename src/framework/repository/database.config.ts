// EXAMPLE
// import { ApiClient, ApiClientSchema } from '@/framework/repository/mongodb/schemas/api-client.schema';
// import { DatabaseConfigOptions } from '@atisiothings/laniakea-lib-database/dist/module/context.module';
// import { ApiClientOutPort } from '@/application/ports/out/api-client.out.port';
// import { ApiClientMongoDbRepository } from './mongodb/api-client.repository';

// export const authConfig: DatabaseConfigOptions = {  
//   connectName: process.env.MONGO_AUTH_CN_NAME as string,
//   dbName: 'central',
//   dbType: process.env.DATABASE_TYPE as string,
//   models: [
//     { name: ApiClient.name, schema: ApiClientSchema },
//   ],
//   outPortProviders: [
//     { provide: ApiClientOutPort, useClass: ApiClientMongoDbRepository },
//   ]
// }
