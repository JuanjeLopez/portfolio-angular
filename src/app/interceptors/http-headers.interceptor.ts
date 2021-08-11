import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '9cdb4b394emsheac93ab15c92684p1ecd37jsnfe144cd32724',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: '77bd86c29783492e867c0a9b82c8704f',
            }
        });

        return next.handle(req);
    }
}