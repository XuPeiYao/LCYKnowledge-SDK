import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../config';
import { Article, User, ValueInfo, ArticleTagWithCount, PagingOfArticleWithUserState, ArticleWithUserState, UserBaseData, ArticleStorage, Commit, PagingOfCommitWithScoreAndUserState, CommitWithScoreAndUserState, CommitWithScore, CommitScoreCount, PagingOfLogin, Login, Role, UserAssignRole, AuthData, LoginData, PagingOfUser } from '../models';
import clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
    constructor(private http: HttpClient) {}


    /**
     * 更新 Token
     *
     */
    refreshToken(        ): Observable<string> {
        let url = '/api/Session/token';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<string>(
            url,
			
            {}
			,
            tmpOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    
    /**
     * 登入系統並取得TOKEN
     *
     * @param loginData 登入資訊
     */
    getToken(
        loginData: LoginData
        ): Observable<AuthData> {
        let url = '/api/Session/token';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<AuthData>(
            url,
			
            loginData
			,
            tmpOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    }