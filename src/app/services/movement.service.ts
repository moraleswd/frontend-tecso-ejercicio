import { Injectable } from '@angular/core';
import { CommonBaseService } from './common.base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movement } from '../models/movement.model';
import { Observable } from 'rxjs';
import { ContentType } from '../utils/content-type.enum';

@Injectable()
export class MovementService extends CommonBaseService<Movement> {
  private requestMapping: string = 'movement';
  
  constructor(http: HttpClient) {
    super(http);
  }

  getFullPathRequest(name: string): string {
    return environment.serverUrl + this.requestMapping + name;
  }

  findMovementsByAccount(idAccount: number): Observable<Array<Movement>> {
    return super.get(this.getFullPathRequest('/findMovementsByAccount/' + idAccount), ContentType.JSON, null);
  }
}