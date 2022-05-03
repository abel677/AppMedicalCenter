import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { User } from "../interface/user.interface";
import { UserResposeI } from "../interface/userResponse.interface";



@Injectable({
    providedIn: 'root'
})

export class LoginService {

    url = "http://127.0.0.1:8000/api/login";
    helper = new JwtHelperService();

    constructor(private httpClient: HttpClient) { }


    postLogin(form: User): Observable<UserResposeI | void> {
        // let params = new HttpParams()
        //     .set('email', form.email)
        //     .set('password', form.password);


        return this.httpClient.post<UserResposeI>(this.url, form)
            .pipe(
                map((res: UserResposeI) => {
                    this.saveToken(res.acces_token);
                    return res;
                }),
                catchError(this.handleError<UserResposeI>())
            );
    }
    logout() {
        localStorage.removeItem('acces_token');
    }
    private checkToken(): void {
        const userToken = localStorage.getItem('acces_token');
        alert(localStorage.getItem('acces_token'));

        const isExpired = this.helper.isTokenExpired(userToken);
        console.log('isExpired->', isExpired);
        alert(userToken);
    }

    private saveToken(token: string) {
        localStorage.setItem('acces_token', token);
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
