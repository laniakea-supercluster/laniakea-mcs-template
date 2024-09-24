// EXAMPLE
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';
// import * as moment from 'moment'

// import * as entityType from '@atisiothings/laniakea-lib-core/dist/entity.type';
// import { ApiClientOutPort } from '@/application/ports/out/api-client.out.port';
// import { ApiClient } from '@/framework/repository/mongodb/schemas/api-client.schema';

// @Injectable()
// export class ApiClientMongoDbRepository implements ApiClientOutPort {

//     constructor(
//         @InjectModel(ApiClient.name, process.env.MONGO_AUTH_CN_NAME) 
//         private domainModel: Model<ApiClient>
//     ) {}

//     private setTrace<T extends entityType.IIdentifier<any> & entityType.ITrackable>(o: T, isNew: boolean = false) {
//         const now = moment();
//         if(isNew) o.createdOn = now.toDate();
//         o.changedOn = now.toDate();
//         o.signature = uuidv4();
//         return o;
//     }

//     async save(domain: ApiClient): Promise<ApiClient> {
//         const e = this.setTrace(domain, true);
//         console.log(e);
    
//         const domainModel = new this.domainModel(e);
//         const r = await domainModel.save();
//         console.log(r);
//         return r;    
//     }

//     findAll(project: ApiClient | {}): Promise<ApiClient[]> {
//         return this.domainModel.find({}, project).exec();
//     }

//     findById(id: string, project: ApiClient | {}): Promise<ApiClient | null> {
//         return this.domainModel.findById(id, project).exec();
//     }

//     async updateById(id: string, domain: ApiClient): Promise<ApiClient | null> {
//         const e = this.setTrace(domain);
//         const filter  = { _id: id };
//         const domainModel = new this.domainModel(e);
//         const x = await this.domainModel.findByIdAndUpdate(filter, {...domain}, {new: true}).exec();
//         console.log(x);
//         return x;
//     }

//     async deleteById(id: string): Promise<void> {
//         const filter  = { _id: id };
//         await this.domainModel.findByIdAndDelete(filter);
//     }
// }
