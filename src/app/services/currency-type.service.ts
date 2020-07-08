import { Injectable } from '@angular/core';
import { CommonBaseService } from './common.base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CurrencyType } from '../models/currency-type';

@Injectable()
export class CurrencyTypeService extends CommonBaseService<CurrencyType> {
  private requestMapping: string = 'currencyType';
  
  constructor(http: HttpClient) {
    super(http);
  }

  getFullPathRequest(name: string): string {
    return environment.serverUrl + this.requestMapping + name;
  }
}