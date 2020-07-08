import { Injectable } from '@angular/core';
import { CommonBaseService } from './common.base.service';
import { CurrentAccount } from '../models/current-account.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CurrentAccountService extends CommonBaseService<CurrentAccount> {
  private requestMapping: string = 'currentAccount';
  
  constructor(http: HttpClient) {
    super(http);
  }

  getFullPathRequest(name: string): string {
    return environment.serverUrl + this.requestMapping + name;
  }
}