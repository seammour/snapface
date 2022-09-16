import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService : AuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // ajouter dans la properité Authorization token 
    const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${this.authService.getToken()}`);
    // les paramères red, next sont immutable et donc pour modifier le header des requettes
    // on doit la cloner puis injecter le header voulue
    const modifiedReq = req.clone({ headers });
    // retoruner la vouvelle requette ce qui permet à la requette de continuer son chemin
    return next.handle(modifiedReq);
        return next.handle(modifiedReq);

    }
}