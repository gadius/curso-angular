import { HttpRequest, HttpInterceptor, HttpHandler } from "@angular/common/http";

export class AuthInterceptorService{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log("Request is on its way");
    const modifiedRequest = req.clone({headers: req.headers.append('Auth','xyz')});

    //return next.handle(req); //Its like laravel middleware
    return next.handle(modifiedRequest);
  }
}
