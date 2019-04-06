import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../config';
import { Article, User, News, NewsStorage, ValueInfo, ArticleTagWithCount, PagingOfArticleWithUserState, ArticleWithUserState, UserBaseData, ArticleStorage, Commit, CommitStorage, PagingOfCommitWithScoreAndUserState, CommitWithScoreAndUserState, CommitWithScore, CommitScoreCount, PagingOfLogin, Login, PagingOfNewsWithPicture, NewsWithPicture, Role, UserAssignRole, AuthData, LoginData, PagingOfUser, UserLevelName } from '../models';
import clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
    constructor(private http: HttpClient) {}


    /**
     * 取得指定最新消息
     *
     * @param newsId 最新消息唯一識別號
     */
    get(
        newsId: number
        ): Observable<News> {
        let url = '/api/News/{newsId}';

        url = url.replace('{newsId}', (newsId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<News>(
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
     * 刪除最新消息
     *
     * @param newsId 文章唯一識別號
     */
    delete(
        newsId: number
        ): Observable<void> {
        let url = '/api/News/{newsId}';

        url = url.replace('{newsId}', (newsId).toString());
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
     * 取得文章列表分頁結果
     *
     * @param keyword 關鍵字
     * @param startTime 起始時間
     * @param endTime 結束時間
     * @param summaryLength 摘要長度
     * @param enable 
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listNews(
        keyword?: string,

        startTime?: number,

        endTime?: number,

        summaryLength: number=120,

        enable: boolean=true,

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfNewsWithPicture> {
        let url = '/api/News';
        const queryList = [];

        if (keyword !== null && keyword !== undefined) {
            queryList.push('keyword=' + encodeURIComponent(keyword.toString()));
        }
    
        if (startTime !== null && startTime !== undefined) {
            queryList.push('startTime=' + encodeURIComponent(startTime.toString()));
        }
    
        if (endTime !== null && endTime !== undefined) {
            queryList.push('endTime=' + encodeURIComponent(endTime.toString()));
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

        return this.http.get<PagingOfNewsWithPicture>(
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
     * 更新最新消息
     *
     * @param news 最新消息
     */
    update(
        news: News
        ): Observable<News> {
        let url = '/api/News';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<News>(
            url,
			
            news
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
     * 建立最新消息
     *
     * @param news 最新消息
     */
    create(
        news: News
        ): Observable<News> {
        let url = '/api/News';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<News>(
            url,
			
            news
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
        let url = '/api/News/storageType/all';
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
        let url = '/api/News/contentType/all';
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
     * 取得指定最新消息的檔案列表
     *
     * @param newsId 最新消息唯一識別號
     * @param type 類型過濾
     */
    listStorage(
        newsId: number,

        type?: string
        ): Observable<NewsStorage[]> {
        let url = '/api/News/{newsId}/storage';

        url = url.replace('{newsId}', (newsId).toString());
            const queryList = [];

        if (type !== null && type !== undefined) {
            queryList.push('type=' + encodeURIComponent(type.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<NewsStorage[]>(
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
     * 上傳檔案至指定最新消息中
     *
     * @param newsId 最新消息唯一識別號
     * @param type 類型
     * @param files 檔案
     */
    addStorage(
        newsId: number,

        type?: string,

        files?: File[]
        ): Observable<NewsStorage[]> {
        let url = '/api/News/{newsId}/storage';

        url = url.replace('{newsId}', (newsId).toString());
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
                return this.http.post<NewsStorage[]>(
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
     * 取得指定最新消息的指定檔案
     *
     * @param newsId 最新消息唯一識別號
     * @param storageId 檔案唯一識別號
     */
    getStorage(
        newsId: number,

        storageId: string
        ): Observable<NewsStorage> {
        let url = '/api/News/{newsId}/storage/{storageId}';

        url = url.replace('{newsId}', (newsId).toString());
    
        url = url.replace('{storageId}', (storageId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<NewsStorage>(
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
     * 刪除指定最新消息中的指定檔案
     *
     * @param newsId 最新消息唯一識別號
     * @param storageId 檔案唯一識別號
     */
    removeStorage(
        newsId: number,

        storageId: string
        ): Observable<void> {
        let url = '/api/News/{newsId}/storage/{storageId}';

        url = url.replace('{newsId}', (newsId).toString());
    
        url = url.replace('{storageId}', (storageId).toString());
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
    }