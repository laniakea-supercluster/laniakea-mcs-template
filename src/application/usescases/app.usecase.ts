import { Domain } from '@/domain/app.domain';

export interface AppUseCase {
  getDomain(): Domain;
}

export const AppUseCase = Symbol('AppUseCase');
