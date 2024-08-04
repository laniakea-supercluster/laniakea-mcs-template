import { IIdentifier } from './app.interface';

export class Domain implements IIdentifier<string> {
  constructor(public readonly id: string, public name: string) {}
}
