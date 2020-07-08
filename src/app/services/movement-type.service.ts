import { Injectable } from '@angular/core';
import { CommonBaseService } from './common.base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovementType } from '../models/movement-type';

@Injectable()
export class MovementTypeService extends CommonBaseService<MovementType> {
  private requestMapping: string = 'movementType';
  
  constructor(http: HttpClient) {
    super(http);
  }

  getFullPathRequest(name: string): string {
    return environment.serverUrl + this.requestMapping + name;
  }
}