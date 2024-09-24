// EXMPLE
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
// import { IApiPermission, IAppClient, ICredentials } from '@atisiothings/laniakea-lib-central/dist/central';

// export type CredentialsDocumentType = HydratedDocument<Credentials>;

// export class Credentials implements ICredentials {
//     @Prop({ required: true })
//     clientId: string;

//     @Prop({ required: true })
//     secretId: string;
// }

// export const CredentialsSchema = SchemaFactory.createForClass(Credentials);

// export type ApiClientDocumentType = HydratedDocument<ApiClient>;

// @Schema({ collection: 'apiClients' })
// export class ApiClient implements IAppClient {

//     _id: string;

//     @Prop({ required: true, index: true, unique: true, default: () => new Date().toISOString() })
//     createdOn: Date;

//     @Prop({ required: true, index: true, unique: true, default: () => new Date().toISOString() })
//     changedOn: Date;

//     @Prop({ required: true })
//     signature: string;

//     @Prop({ required: true, index: true, unique: true })
//     name: string;

//     @Prop({ type: CredentialsSchema })
//     credentials: ICredentials;

//     @Prop()
//     apis: IApiPermission[];

// }

// export const ApiClientSchema = SchemaFactory.createForClass(ApiClient);
// // ApiClientSchema.index({});
