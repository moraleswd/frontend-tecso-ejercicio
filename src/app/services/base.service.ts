import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentType } from '../utils/content-type.enum';
import { HttpOptions } from '../utils/http-options';
import { Observable } from 'rxjs';
import { RequestType } from '../utils/request-type.enum';

export abstract class BaseService<T> {
    public parameter: any;
  
    constructor(private http: HttpClient) {}
  
    buildHeaders(contentType: ContentType, options: HttpOptions): HttpHeaders {
      if (options.headers == null) {
        let headers = new HttpHeaders();
        options.headers = headers;
      }
      if (contentType === ContentType.JSON) {
        options.headers = options.headers.append('Content-type', 'application/json');
      }
      return options.headers;
    }
  
    private getResponse(method: string, parameters: any, options: any, requestType: string): Observable<any> {
      let request: Observable<any>;
      if (requestType === RequestType.GET) {
        request = this.http.get(method, options);
      } else if (requestType === RequestType.POST) {
        request = this.http.post(method, parameters, options);
      } else if (requestType === RequestType.DELETE) {
        request = this.http.delete(method, options);
      }
      return request;
    }
  
    private request(
      params: any,
      request: string,
      requestType: string,
      contentType: ContentType,
      options: HttpOptions
    ): Observable<any> {
      if (options == null) {
        // Se inicializan options con valores NULL
        options = { headers: null, observe: null, responseType: null };
      }
      options.headers = this.buildHeaders(contentType, options);
      return this.getResponse(request, params, options, requestType);
    }
  
    protected post(params: any, request: string, contentType: ContentType, options: HttpOptions) {
      return this.request(params, request, RequestType.POST, contentType, options);
    }
  
    protected get(request: string, contentType: ContentType, options: HttpOptions): Observable<any> {
      return this.request(null, request, RequestType.GET, contentType, options);
    }
  
    protected delete(request: string, contentType: ContentType, options: HttpOptions): Observable<any> {
      return this.request(null, request, RequestType.DELETE, contentType, options);
    }
}