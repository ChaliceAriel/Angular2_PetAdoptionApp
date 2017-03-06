import { Injectable } from '@angular/core';

import { Pet } from './pet';
import { PETS } from './mock-pets-data';

@Injectable()
export class PetsService {
  
  //Update to return a promise
  getPets(): Promise<Pet[]> {
    return Promise.resolve(PETS);
  }
}