﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../config';
import { Article, User, ValueInfo, ArticleTagWithCount, PagingOfArticleWithUserState, ArticleWithUserState, UserBaseData, ArticleStorage, Commit, PagingOfCommitWithScoreAndUserState, CommitWithScoreAndUserState, CommitWithScore, CommitScoreCount, PagingOfLogin, Login, Role, UserAssignRole, AuthData, LoginData, PagingOfUser } from '../models';
import clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class CommitService {
    constructor(private http: HttpClient) {}


    /**
     * 取得指定回覆
     *
     * @param commitId 回覆唯一識別號
     */
    get(
        commitId: number
        ): Observable<Commit> {
        let url = '/api/Commit/{commitId}';

        url = url.replace('{commitId}', (commitId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<Commit>(
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
     * 刪除回覆 
     *
     * @param commitId 文章唯一識別號
     */
    delete(
        commitId: number
        ): Observable<void> {
        let url = '/api/Commit/{commitId}';

        url = url.replace('{commitId}', (commitId).toString());
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
     * 取得回覆列表分頁結果
     *
     * @param articleIds 文章唯一識別號
     * @param startTime 起始時間
     * @param endTime 結束時間
     * @param state 狀態，如未設定則自動複寫為Audited，但如果有管理權限則容許不過濾
<table><thead><tr><th>值</th><th>名稱</th><th>說明</th></tr></thead><tbody><tr><td>Blocked</td><td>屏蔽</td><td>屏蔽該回應，僅限後台管理人員可見，此狀態無法進行編輯</td></tr><tr><td>Publish</td><td>發布</td><td>公開顯示</td></tr></tbody></table>
     * @param order 排序
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listCommit(
        articleIds?: number[],

        startTime?: number,

        endTime?: number,

        state?: ('Blocked' | 'Publish'),

        order: ('Time_NewFirst' | 'Time_OldFirst' | 'Score')="Score",

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfCommitWithScoreAndUserState> {
        let url = '/api/Commit';
        const queryList = [];

        if(articleIds !== null && articleIds !== undefined){
            for(const item of articleIds){
                if (item) {
                    queryList.push('articleIds=' + encodeURIComponent((item).toString()));
                }
            }
        }
    
        if (startTime !== null && startTime !== undefined) {
            queryList.push('startTime=' + encodeURIComponent(startTime.toString()));
        }
    
        if (endTime !== null && endTime !== undefined) {
            queryList.push('endTime=' + encodeURIComponent(endTime.toString()));
        }
    
        if (state !== null && state !== undefined) {
            queryList.push('state=' + encodeURIComponent(state.toString()));
        }
    
        if (order !== null && order !== undefined) {
            queryList.push('order=' + encodeURIComponent(order.toString()));
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

        return this.http.get<PagingOfCommitWithScoreAndUserState>(
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
     * 更新回覆(不變更回覆狀態)
     *
     * @param commit 回覆
     */
    update(
        commit: Commit
        ): Observable<Commit> {
        let url = '/api/Commit';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<Commit>(
            url,
			
            commit
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
     * 建立回覆
     *
     * @param commit 回覆
     */
    create(
        commit: Commit
        ): Observable<Commit> {
        let url = '/api/Commit';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<Commit>(
            url,
			
            commit
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
     * 更新回覆狀態
     *
     * @param commitId 回覆唯一識別號
     * @param state 狀態
     */
    changeState(
        commitId: number,

        state: string
        ): Observable<Commit> {
        let url = '/api/Commit/{commitId}/state';

        url = url.replace('{commitId}', (commitId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        tmpOptions.headers['Content-Type'] = 'application/json';
			
        return this.http.put<Commit>(
            url,
			JSON.stringify(
            state
			),
            tmpOptions
        ).pipe(
          catchError((error: any, caught: Observable<any>) => {
            Config.onError.next({error: error, caught: caught});
            return null;
          })
        );
    }
    
    /**
     * 取得所有回文狀態類型列表
     *
     */
    getAllStates(        ): Observable<ValueInfo[]> {
        let url = '/api/Commit/state/all';
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
     * 取得所有回文格式類型列表
     *
     */
    getAllContentTypes(        ): Observable<ValueInfo[]> {
        let url = '/api/Commit/contentType/all';
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
     * 取得目前使用者所有回覆列表分頁結果
     *
     * @param articleIds 文章唯一識別號
     * @param startTime 起始時間
     * @param endTime 結束時間
     * @param state 狀態，如未設定則自動複寫為Audited，但如果有管理權限則容許不過濾
<table><thead><tr><th>值</th><th>名稱</th><th>說明</th></tr></thead><tbody><tr><td>Blocked</td><td>屏蔽</td><td>屏蔽該回應，僅限後台管理人員可見，此狀態無法進行編輯</td></tr><tr><td>Publish</td><td>發布</td><td>公開顯示</td></tr></tbody></table>
     * @param order 排序
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listMyCommit(
        articleIds?: number[],

        startTime?: number,

        endTime?: number,

        state?: ('Blocked' | 'Publish'),

        order: ('Time_NewFirst' | 'Time_OldFirst' | 'Score')="Score",

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfCommitWithScoreAndUserState> {
        let url = '/api/Commit/my';
        const queryList = [];

        if(articleIds !== null && articleIds !== undefined){
            for(const item of articleIds){
                if (item) {
                    queryList.push('articleIds=' + encodeURIComponent((item).toString()));
                }
            }
        }
    
        if (startTime !== null && startTime !== undefined) {
            queryList.push('startTime=' + encodeURIComponent(startTime.toString()));
        }
    
        if (endTime !== null && endTime !== undefined) {
            queryList.push('endTime=' + encodeURIComponent(endTime.toString()));
        }
    
        if (state !== null && state !== undefined) {
            queryList.push('state=' + encodeURIComponent(state.toString()));
        }
    
        if (order !== null && order !== undefined) {
            queryList.push('order=' + encodeURIComponent(order.toString()));
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

        return this.http.get<PagingOfCommitWithScoreAndUserState>(
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
     * 取得指定回覆目前獲得回覆成績細節
     *
     * @param commitId 回覆唯一識別號
     * @param articleId 
     */
    getScoreDetail(
        commitId: number,

        articleId: string
        ): Observable<CommitScoreCount[]> {
        let url = '/api/Commit/{articleId}/score/detail';

        url = url.replace('{commitId}', (commitId).toString());
    
        url = url.replace('{articleId}', (articleId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<CommitScoreCount[]>(
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
     * 取得指定回覆目前獲得回覆成績總分
     *
     * @param commitId 回覆唯一識別號
     */
    getScoreTotal(
        commitId: number
        ): Observable<number> {
        let url = '/api/Commit/{commitId}/score/total';

        url = url.replace('{commitId}', (commitId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<number>(
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
     * 取得指定回覆是否已經給過分數
     *
     * @param commitId 回覆唯一識別號
     */
    isGaveScore(
        commitId: number
        ): Observable<boolean> {
        let url = '/api/Commit/{commitId}/score';

        url = url.replace('{commitId}', (commitId).toString());
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
     * 給予分數
     *
     * @param commitId 文章唯一識別號
     */
    addScore(
        commitId: number
        ): Observable<void> {
        let url = '/api/Commit/{commitId}/score';

        url = url.replace('{commitId}', (commitId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<void>(
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
     * 收回分數
     *
     * @param commitId 文章唯一識別號
     */
    removeScore(
        commitId: number
        ): Observable<void> {
        let url = '/api/Commit/{commitId}/score';

        url = url.replace('{commitId}', (commitId).toString());
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