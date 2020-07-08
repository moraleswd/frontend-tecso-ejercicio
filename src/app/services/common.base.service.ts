import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContentType } from '../utils/content-type.enum';
import { BaseService } from './base.service';

export abstract class CommonBaseService<T> extends BaseService<T> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  findAll(): Observable<Array<T>> {
    return super.get(this.getFullPathRequest('/findAll'), ContentType.JSON, null);
  }

  findById(id: number): Observable<T> {
    return super.get(this.getFullPathRequest('/findById/' + id), ContentType.JSON, null);
  }

  save(entity: T): Observable<T> {
    return super.post(entity, this.getFullPathRequest('/save'), ContentType.JSON, null);
  }

  deleteById(id: number): Observable<T> {
    return super.delete(this.getFullPathRequest('/delete/' + id), ContentType.JSON, null);
  }

  abstract getFullPathRequest(name: string): string;
}
