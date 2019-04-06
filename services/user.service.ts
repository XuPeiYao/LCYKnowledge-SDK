import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../config';
import { Article, User, ValueInfo, ArticleTagWithCount, PagingOfArticleWithUserState, ArticleWithUserState, UserBaseData, ArticleStorage, Commit, CommitStorage, PagingOfCommitWithScoreAndUserState, CommitWithScoreAndUserState, CommitWithScore, CommitScoreCount, PagingOfLogin, Login, News, NewsStorage, PagingOfNewsWithPicture, NewsWithPicture, Role, UserAssignRole, AuthData, LoginData, PagingOfUser, UserLevelName } from '../models';
import clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}


    /**
     * 取得列表分頁結果
     *
     * @param provider 
     * @param enable 是否啟用
     * @param keyword 關鍵字
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    list(
        provider?: ('Google' | 'Facebook' | 'Line' | 'Password'),

        enable?: boolean,

        keyword?: string,

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfUser> {
        let url = '/api/User';
        const queryList = [];

        if (provider !== null && provider !== undefined) {
            queryList.push('provider=' + encodeURIComponent(provider.toString()));
        }
    
        if (enable !== null && enable !== undefined) {
            queryList.push('enable=' + encodeURIComponent(enable.toString()));
        }
    
        if (keyword !== null && keyword !== undefined) {
            queryList.push('keyword=' + encodeURIComponent(keyword.toString()));
        }
    
        if (offset !== null && offset !== undefined) {
            queryList.push('offset=' + encodeURIComponent(offset.toString()));
        }
    
        if (limit !== null && limit !== undefined) {
            queryList.push('limit=' + encodeURIComponent(limit.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<PagingOfUser>(
            url,
            Config.defaultOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    
    /**
     * 更新實例
     *
     * @param loginData 實例內容
     */
    update(
        loginData: LoginData
        ): Observable<User> {
        let url = '/api/User';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<User>(
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
    
    /**
     * 建立使用者(註冊使用者資料)
     *
     * @param loginData 登入資料
     */
    create(
        loginData: LoginData
        ): Observable<User> {
        let url = '/api/User';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<User>(
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
    
    /**
     * 判斷指定使用者是否存在
     *
     * @param userId 唯一識別號
     */
    exists(
        userId: string
        ): Observable<boolean> {
        let url = '/api/User/{userId}/exists';

        url = url.replace('{userId}', (userId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<boolean>(
            url,
            Config.defaultOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    
    /**
     * 取得目前使用者資訊
     *
     */
    getCurrentUser(        ): Observable<User> {
        let url = '/api/User/current';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<User>(
            url,
            Config.defaultOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    
    /**
     * 取得指定使用者
     *
     * @param userId 唯一識別號
     */
    get(
        userId: string
        ): Observable<User> {
        let url = '/api/User/{userId}';

        url = url.replace('{userId}', (userId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<User>(
            url,
            Config.defaultOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    
    /**
     * 刪除指定使用者
     *
     * @param userId 唯一識別號
     */
    delete(
        userId: string
        ): Observable<void> {
        let url = '/api/User/{userId}';

        url = url.replace('{userId}', (userId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.delete<void>(
            url,
            Config.defaultOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    
    /**
     * 上傳使用者大頭照
     *
     * @param userId 
     * @param files 
     */
    uploadAvatar(
        userId: string,

        files?: File[]
        ): Observable<string> {
        let url = '/api/User/{userId}/avatar';

        url = url.replace('{userId}', (userId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        const formData = new FormData();

        for(var item of files){
            formData.append('files', item);
        }
                return this.http.post<string>(
            url,
            formData,
            Config.defaultOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    
    /**
     * 取得指定使用者目前等級資訊
     *
     * @param userId 使用者唯一識別號
     */
    getUserLevelInfo(
        userId: string
        ): Observable<UserLevelName> {
        let url = '/api/User/{userId}/levelInfo';

        url = url.replace('{userId}', (userId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<UserLevelName>(
            url,
            Config.defaultOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    }