import { HttpRequest, HttpInterceptor, HttpHandler, HttpEventType } from "@angular/common/http";
import { tap } from 'rxjs/operator';

export class AuthInterceptorService{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log("Request is on its way");
    const modifiedRequest = req.clone({headers: req.headers.append('Auth','xyz')});

    //return next.handle(req); //Its like laravel middleware
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        console.log(event);
        if(event.type == HttpEventType.Response)
          console.log('Response arrived, body: data ');
          console.log(event.body);
      })
    );
  }
}
