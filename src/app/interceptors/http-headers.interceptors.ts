import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements  HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '758cce0dd8msh636d5c39a14c7acp1ebdf0jsn1766567d6fe0',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
      },
      setParams: {
        key: '19cea721cc324bd29769234f2d6625e2',
      }
    });
    return next.handle(req);
  }
}
