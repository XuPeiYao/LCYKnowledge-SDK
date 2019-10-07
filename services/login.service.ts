import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../config';
import { Article, User, ValueInfo, ArticleTagWithCount, PagingOfArticleWithUserState, ArticleWithUserState, UserBaseData, ArticleStorage, Commit, PagingOfCommitWithScoreAndUserState, CommitWithScoreAndUserState, CommitWithScore, CommitScoreCount, CommitStorage, PagingOfLogin, Login, News, PagingOfNewsWithPicture, NewsWithPicture, NewsStorage, PagingOfNoticeWithUserBaseData, NoticeWithUserBaseData, Notice, Role, UserAssignRole, AuthData, LoginData, StaticPage, PagingOfStaticPage, StaticPageStorage, PagingOfUser, UserLevelName, ResetPwdData, PagingOfUserBaseDataWithScore, UserBaseDataWithScore } from '../models';
import clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {}


    /**
     * 取得列表分頁結果
     *
     * @param keyword 關鍵字
     * @param keyword_property 關鍵字
     * @param match 匹配模式(JSON格式)
     * @param order 排序方法
     * @param skip 起始索引
     * @param take 取得筆數
     */
    list(
        keyword?: string,

        keyword_property?: string[],

        match?: string,

        order?: string[],

        skip: number=0,

        take: number=10
        ): Observable<PagingOfLogin> {
        let url = '/api/Login';
        const queryList = [];

        if (keyword !== null && keyword !== undefined) {
            queryList.push('keyword=' + encodeURIComponent(keyword.toString()));
        }
    
        if(keyword_property !== null && keyword_property !== undefined){
            for(const item of keyword_property){
                if (item) {
                    queryList.push('keyword_property=' + encodeURIComponent((item).toString()));
                }
            }
        }
    
        if (match !== null && match !== undefined) {
            queryList.push('match=' + encodeURIComponent(match.toString()));
        }
    
        if(order !== null && order !== undefined){
            for(const item of order){
                if (item) {
                    queryList.push('order=' + encodeURIComponent((item).toString()));
                }
            }
        }
    
        if (skip !== null && skip !== undefined) {
            queryList.push('skip=' + encodeURIComponent(skip.toString()));
        }
    
        if (take !== null && take !== undefined) {
            queryList.push('take=' + encodeURIComponent(take.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<PagingOfLogin>(
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
     * @param instance 實例內容
     */
    update(
        instance: Login
        ): Observable<Login> {
        let url = '/api/Login';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<Login>(
            url,
			
            instance
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
     * 建立實例
     *
     * @param instance 實例內容
     */
    create(
        instance: Login
        ): Observable<Login> {
        let url = '/api/Login';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<Login>(
            url,
			
            instance
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
     * 判斷指定實例是否存在
     *
     * @param id 唯一識別號
     */
    exists(
        id: string
        ): Observable<boolean> {
        let url = '/api/Login/{id}/exists';

        url = url.replace('{id}', (id).toString());
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
     * 取得指定實例
     *
     * @param id 唯一識別號
     */
    get(
        id: string
        ): Observable<Login> {
        let url = '/api/Login/{id}';

        url = url.replace('{id}', (id).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<Login>(
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
     * 刪除指定實例
     *
     * @param id 唯一識別號
     */
    delete(
        id: string
        ): Observable<any> {
        let url = '/api/Login/{id}';

        url = url.replace('{id}', (id).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.delete<any>(
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