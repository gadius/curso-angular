import { HttpRequest, HttpInterceptor, HttpHandler } from "@angular/common/http";

export class AuthInterceptorService{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log("Request is on its way");
    return next.handle(req); //Its like laravel middleware
  }
}
