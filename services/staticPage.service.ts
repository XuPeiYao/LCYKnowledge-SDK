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
export class StaticPageService {
    constructor(private http: HttpClient) {}


    /**
     * 取得指定靜態頁
     *
     * @param staticPageId 靜態頁唯一識別號
     */
    get(
        staticPageId: string
        ): Observable<StaticPage> {
        let url = '/api/StaticPage/{staticPageId}';

        url = url.replace('{staticPageId}', (staticPageId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<StaticPage>(
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
     * 刪除靜態頁
     *
     * @param staticPageId 靜態頁唯一識別號
     */
    delete(
        staticPageId: string
        ): Observable<any> {
        let url = '/api/StaticPage/{staticPageId}';

        url = url.replace('{staticPageId}', (staticPageId).toString());
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
    
    /**
     * 取得靜態頁列表分頁結果
     *
     * @param keyword 關鍵字
     * @param summaryLength 摘要長度
     * @param enable 
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listNews(
        keyword?: string,

        summaryLength: number=120,

        enable: boolean=true,

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfStaticPage> {
        let url = '/api/StaticPage';
        const queryList = [];

        if (keyword !== null && keyword !== undefined) {
            queryList.push('keyword=' + encodeURIComponent(keyword.toString()));
        }
    
        if (summaryLength !== null && summaryLength !== undefined) {
            queryList.push('summaryLength=' + encodeURIComponent(summaryLength.toString()));
        }
    
        if (enable !== null && enable !== undefined) {
            queryList.push('enable=' + encodeURIComponent(enable.toString()));
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

        return this.http.get<PagingOfStaticPage>(
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
     * 更新靜態頁
     *
     * @param staticPage 靜態頁
     */
    update(
        staticPage: StaticPage
        ): Observable<StaticPage> {
        let url = '/api/StaticPage';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<StaticPage>(
            url,
			
            staticPage
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
     * 建立靜態頁
     *
     * @param staticPage 靜態頁
     */
    create(
        staticPage: StaticPage
        ): Observable<StaticPage> {
        let url = '/api/StaticPage';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<StaticPage>(
            url,
			
            staticPage
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
     * 取得所有StorageType列表
     *
     */
    getAllStorageType(        ): Observable<ValueInfo[]> {
        let url = '/api/StaticPage/storageType/all';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<ValueInfo[]>(
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
     * 取得所有最新消息格式類型列表
     *
     */
    getAllContentTypes(        ): Observable<ValueInfo[]> {
        let url = '/api/StaticPage/contentType/all';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<ValueInfo[]>(
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
     * 取得指定靜態頁的檔案列表
     *
     * @param staticPageId 靜態頁唯一識別號
     * @param type 類型過濾
     */
    listStorage(
        staticPageId: string,

        type?: string
        ): Observable<StaticPageStorage[]> {
        let url = '/api/StaticPage/{staticPageId}/storage';

        url = url.replace('{staticPageId}', (staticPageId).toString());
            const queryList = [];

        if (type !== null && type !== undefined) {
            queryList.push('type=' + encodeURIComponent(type.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<StaticPageStorage[]>(
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
     * 上傳檔案至指定靜態頁中
     *
     * @param staticPageId 靜態頁唯一識別號
     * @param type 類型
     * @param files 檔案
     */
    addStorage(
        staticPageId: string,

        type?: string,

        files?: File[]
        ): Observable<StaticPageStorage[]> {
        let url = '/api/StaticPage/{staticPageId}/storage';

        url = url.replace('{staticPageId}', (staticPageId).toString());
            const queryList = [];

        if (type !== null && type !== undefined) {
            queryList.push('type=' + encodeURIComponent(type.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        const formData = new FormData();

        for(var item of files){
            formData.append('files', item);
        }
                return this.http.post<StaticPageStorage[]>(
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
     * 取得指定靜態頁的指定檔案
     *
     * @param staticPageId 靜態頁唯一識別號
     * @param storageId 檔案唯一識別號
     */
    getStorage(
        staticPageId: string,

        storageId: string
        ): Observable<StaticPageStorage> {
        let url = '/api/StaticPage/{staticPageId}/storage/{storageId}';

        url = url.replace('{staticPageId}', (staticPageId).toString());
    
        url = url.replace('{storageId}', (storageId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<StaticPageStorage>(
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
     * 刪除指定靜態頁中的指定檔案
     *
     * @param staticPageId 靜態頁唯一識別號
     * @param storageId 檔案唯一識別號
     */
    removeStorage(
        staticPageId: string,

        storageId: string
        ): Observable<any> {
        let url = '/api/StaticPage/{staticPageId}/storage/{storageId}';

        url = url.replace('{staticPageId}', (staticPageId).toString());
    
        url = url.replace('{storageId}', (storageId).toString());
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