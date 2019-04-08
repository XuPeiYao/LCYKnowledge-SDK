import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../config';
import { Article, User, ValueInfo, ArticleTagWithCount, PagingOfArticleWithUserState, ArticleWithUserState, UserBaseData, ArticleStorage, Commit, CommitStorage, PagingOfCommitWithScoreAndUserState, CommitWithScoreAndUserState, CommitWithScore, CommitScoreCount, PagingOfLogin, Login, News, PagingOfNewsWithPicture, NewsWithPicture, NewsStorage, PagingOfNotice, Notice, Role, UserAssignRole, AuthData, LoginData, StaticPage, PagingOfStaticPage, StaticPageStorage, PagingOfUser, UserLevelName } from '../models';
import clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class UserLevelNameService {
    constructor(private http: HttpClient) {}


    /**
     * 取得指定使用者稱號
     *
     * @param userLevelId 稱號唯一識別號
     */
    get(
        userLevelId: string
        ): Observable<UserLevelName> {
        let url = '/api/UserLevelName/{userLevelId}';

        url = url.replace('{userLevelId}', (userLevelId).toString());
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
    
    /**
     * 刪除指定使用者稱號
     *
     * @param userLevelId 稱號唯一識別號
     */
    delete(
        userLevelId: string
        ): Observable<void> {
        let url = '/api/UserLevelName/{userLevelId}';

        url = url.replace('{userLevelId}', (userLevelId).toString());
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
     * 取得所有使用者稱號等級列表
     *
     */
    list(        ): Observable<UserLevelName[]> {
        let url = '/api/UserLevelName';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<UserLevelName[]>(
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
     * 更新使用者稱號
     *
     * @param userLevel 使用者稱號
     */
    update(
        userLevel: UserLevelName
        ): Observable<UserLevelName> {
        let url = '/api/UserLevelName';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<UserLevelName>(
            url,
			
            userLevel
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
     * 建立新的使用者稱號
     *
     * @param userLevel 使用者稱號
     */
    create(
        userLevel: UserLevelName
        ): Observable<UserLevelName> {
        let url = '/api/UserLevelName';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<UserLevelName>(
            url,
			
            userLevel
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
     * 建立新的使用者稱號並同時上傳圖示
     *
     * @param userLevel 使用者稱號物件JSON字串
     * @param file 圖示檔案
     */
    createWithImage(
        userLevel?: string,

        file?: File
        ): Observable<UserLevelName> {
        let url = '/api/UserLevelName/createWithImage';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        const formData = new FormData();

        formData.append('userLevel', userLevel);
        
        formData.append('file', file);
                return this.http.post<UserLevelName>(
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
     * 更新使用者稱號圖示
     *
     * @param userLevelId 稱號唯一識別號
     * @param file 
     */
    updateImage(
        userLevelId: string,

        file?: File
        ): Observable<UserLevelName> {
        let url = '/api/UserLevelName/{userLevelId}/image';

        url = url.replace('{userLevelId}', (userLevelId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        const formData = new FormData();

        formData.append('file', file);
                return this.http.put<UserLevelName>(
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
    }