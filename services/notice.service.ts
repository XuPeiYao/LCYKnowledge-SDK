import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../config';
import { Article, User, ValueInfo, ArticleTagWithCount, PagingOfArticleWithUserState, ArticleWithUserState, UserBaseData, ArticleStorage, Commit, PagingOfCommitWithScoreAndUserState, CommitWithScoreAndUserState, CommitWithScore, CommitScoreCount, CommitStorage, PagingOfLogin, Login, News, PagingOfNewsWithPicture, NewsWithPicture, NewsStorage, PagingOfNoticeWithUserBaseData, NoticeWithUserBaseData, Notice, Role, UserAssignRole, AuthData, LoginData, StaticPage, PagingOfStaticPage, StaticPageStorage, PagingOfUser, UserLevelName, PagingOfUserBaseDataWithScore, UserBaseDataWithScore } from '../models';
import clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
    constructor(private http: HttpClient) {}


    /**
     * 將通知設為已讀
     *
     * @param noticeId 
     */
    setReaded(
        noticeId: string
        ): Observable<void> {
        let url = '/api/Notice/{noticeId}/readed';

        url = url.replace('{noticeId}', (noticeId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<void>(
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
     * 將全部通知設為已讀
     *
     * @param noticeId 
     */
    setAllReaded(
        noticeId?: string
        ): Observable<void> {
        let url = '/api/Notice/readed';
        const queryList = [];

        if (noticeId !== null && noticeId !== undefined) {
            queryList.push('noticeId=' + encodeURIComponent(noticeId.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<void>(
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
     * 取得未讀通知
     *
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listUnReadNotice(
        offset: number=0,

        limit: number=10
        ): Observable<PagingOfNoticeWithUserBaseData> {
        let url = '/api/Notice';
        const queryList = [];

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

        return this.http.get<PagingOfNoticeWithUserBaseData>(
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