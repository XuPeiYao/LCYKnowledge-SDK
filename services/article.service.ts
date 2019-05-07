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
export class ArticleService {
    constructor(private http: HttpClient) {}


    /**
     * 取得指定文章
     *
     * @param articleId 文章唯一識別號
     */
    get(
        articleId: number
        ): Observable<Article> {
        let url = '/api/Article/{articleId}';

        url = url.replace('{articleId}', (articleId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<Article>(
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
     * 刪除文章 
     *
     * @param articleId 文章唯一識別號
     */
    delete(
        articleId: number
        ): Observable<void> {
        let url = '/api/Article/{articleId}';

        url = url.replace('{articleId}', (articleId).toString());
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
     * 取得目前登入使用者的草稿，前端發文可調用此方法產生或取得實例
     *
     */
    getCurrentDraftArticle(        ): Observable<Article> {
        let url = '/api/Article/currentDraft';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<Article>(
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
     * @param tags 標籤
     * @param keyword 關鍵字
     * @param startTime 起始時間
     * @param endTime 結束時間
     * @param summaryLength 摘要長度
     * @param state 狀態，如未設定則自動複寫為Audited，但如果有管理權限則容許不過濾
<table><thead><tr><th>值</th><th>名稱</th><th>說明</th></tr></thead><tbody><tr><td>Audited</td><td>已審核</td><td>文章審核通過即公開</td></tr><tr><td>AuditedHidden</td><td>已審核但隱藏</td><td>文章審核通過但隱藏</td></tr><tr><td>Unaudited</td><td>未審核</td><td>當文章送出時切換到此狀態等候審核</td></tr><tr><td>Reject</td><td>駁回</td><td>當審核未通過將設為此狀態</td></tr><tr><td>Draft</td><td>草稿</td><td>文章初始狀態</td></tr></tbody></table>
     * @param order 排序
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listArticle(
        tags?: string[],

        keyword?: string,

        startTime?: number,

        endTime?: number,

        summaryLength: number=120,

        state: ('Audited' | 'AuditedHidden' | 'Unaudited' | 'Reject' | 'Draft')="Audited",

        order: ('Time_NewFirst' | 'Time_OldFirst' | 'CommitCount_MassFirst' | 'CommitCount_LessFirst')="Time_NewFirst",

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfArticleWithUserState> {
        let url = '/api/Article';
        const queryList = [];

        if(tags !== null && tags !== undefined){
            for(const item of tags){
                if (item) {
                    queryList.push('tags=' + encodeURIComponent((item).toString()));
                }
            }
        }
    
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

        return this.http.get<PagingOfArticleWithUserState>(
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
     * 更新文章(不變更文章狀態)
     *
     * @param article 文章
     */
    update(
        article: Article
        ): Observable<Article> {
        let url = '/api/Article';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<Article>(
            url,
			
            article
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
     * 建立文章草稿，請改用GetCurrentDraftArticle()
     *
     * @param article 文章
     */
    create(
        article: Article
        ): Observable<Article> {
        let url = '/api/Article';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<Article>(
            url,
			
            article
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
     * 更新文章狀態，普通使用者可將狀態改為Unaudited即為待審核
     *
     * @param articleId 文章唯一識別號
     * @param state 狀態
<table><thead><tr><th>值</th><th>名稱</th><th>說明</th></tr></thead><tbody><tr><td>Audited</td><td>已審核</td><td>文章審核通過即公開</td></tr><tr><td>AuditedHidden</td><td>已審核但隱藏</td><td>文章審核通過但隱藏</td></tr><tr><td>Unaudited</td><td>未審核</td><td>當文章送出時切換到此狀態等候審核</td></tr><tr><td>Reject</td><td>駁回</td><td>當審核未通過將設為此狀態</td></tr><tr><td>Draft</td><td>草稿</td><td>文章初始狀態</td></tr></tbody></table>
     */
    changeState(
        articleId: number,

        state: string
        ): Observable<Article> {
        let url = '/api/Article/{articleId}/state';

        url = url.replace('{articleId}', (articleId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        tmpOptions.headers['Content-Type'] = 'application/json';
			
        return this.http.put<Article>(
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
     * 取得所有文章狀態類型列表
     *
     */
    getAllStates(        ): Observable<ValueInfo[]> {
        let url = '/api/Article/state/all';
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
     * 取得所有列表排序方法列表
     *
     */
    getAllOrder(        ): Observable<ValueInfo[]> {
        let url = '/api/Article/order/all';
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
     * 取得所有StorageType列表
     *
     */
    getAllStorageType(        ): Observable<ValueInfo[]> {
        let url = '/api/Article/storageType/all';
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
     * 取得所有文章格式類型列表
     *
     */
    getAllContentTypes(        ): Observable<ValueInfo[]> {
        let url = '/api/Article/contentType/all';
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
     * 取得指定文章是否已經收藏
     *
     * @param articleId 文章唯一識別號
     */
    isFavorite(
        articleId: number
        ): Observable<boolean> {
        let url = '/api/Article/{articleId}/favorite';

        url = url.replace('{articleId}', (articleId).toString());
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
     * 加入使用者收藏
     *
     * @param articleId 文章唯一識別號
     */
    addFavorite(
        articleId: number
        ): Observable<void> {
        let url = '/api/Article/{articleId}/favorite';

        url = url.replace('{articleId}', (articleId).toString());
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
     * 取消使用者收藏
     *
     * @param articleId 文章唯一識別號
     */
    removeFavorite(
        articleId: number
        ): Observable<void> {
        let url = '/api/Article/{articleId}/favorite';

        url = url.replace('{articleId}', (articleId).toString());
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
     * 取得所有作用中的標籤與使用次數資訊
     *
     * @param keyword 關鍵字
     * @param startTime 起始時間
     * @param endTime 結束時間
     * @param state 狀態，如未設定則自動複寫為Audited，但如果有管理權限則容許不過濾
<table><thead><tr><th>值</th><th>名稱</th><th>說明</th></tr></thead><tbody><tr><td>Audited</td><td>已審核</td><td>文章審核通過即公開</td></tr><tr><td>AuditedHidden</td><td>已審核但隱藏</td><td>文章審核通過但隱藏</td></tr><tr><td>Unaudited</td><td>未審核</td><td>當文章送出時切換到此狀態等候審核</td></tr><tr><td>Reject</td><td>駁回</td><td>當審核未通過將設為此狀態</td></tr><tr><td>Draft</td><td>草稿</td><td>文章初始狀態</td></tr></tbody></table>
     */
    listTags(
        keyword?: string,

        startTime?: number,

        endTime?: number,

        state: ('Audited' | 'AuditedHidden' | 'Unaudited' | 'Reject' | 'Draft')="Audited"
        ): Observable<ArticleTagWithCount[]> {
        let url = '/api/Article/tags';
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
    
        if (state !== null && state !== undefined) {
            queryList.push('state=' + encodeURIComponent(state.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<ArticleTagWithCount[]>(
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
     * 取得收藏文章作用中的標籤與使用次數資訊
     *
     * @param keyword 關鍵字
     * @param startTime 起始時間
     * @param endTime 結束時間
     */
    listFavoriteTags(
        keyword?: string,

        startTime?: number,

        endTime?: number
        ): Observable<ArticleTagWithCount[]> {
        let url = '/api/Article/favorites/tags';
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
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<ArticleTagWithCount[]>(
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
     * 取得收藏文章列表分頁結果
     *
     * @param tags 標籤
     * @param keyword 關鍵字
     * @param startTime 起始時間
     * @param endTime 結束時間
     * @param summaryLength 摘要長度
     * @param order 排序
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listFavoriteArticle(
        tags?: string[],

        keyword?: string,

        startTime?: number,

        endTime?: number,

        summaryLength: number=120,

        order: ('Time_NewFirst' | 'Time_OldFirst' | 'CommitCount_MassFirst' | 'CommitCount_LessFirst')="Time_NewFirst",

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfArticleWithUserState> {
        let url = '/api/Article/favorites';
        const queryList = [];

        if(tags !== null && tags !== undefined){
            for(const item of tags){
                if (item) {
                    queryList.push('tags=' + encodeURIComponent((item).toString()));
                }
            }
        }
    
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

        return this.http.get<PagingOfArticleWithUserState>(
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
     * 取得指定文章的討論者列表
     *
     * @param articleId 文章唯一識別號
     * @param keyword 關鍵字
     */
    listArticleDiscusser(
        articleId: number,

        keyword?: string
        ): Observable<UserBaseData[]> {
        let url = '/api/Article/{articleId}/discusser';

        url = url.replace('{articleId}', (articleId).toString());
            const queryList = [];

        if (keyword !== null && keyword !== undefined) {
            queryList.push('keyword=' + encodeURIComponent(keyword.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<UserBaseData[]>(
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
     * 取得目前使用者文章列表分頁結果
     *
     * @param tags 標籤
     * @param keyword 關鍵字
     * @param startTime 起始時間
     * @param endTime 結束時間
     * @param summaryLength 摘要長度
     * @param state 狀態
<table><thead><tr><th>值</th><th>名稱</th><th>說明</th></tr></thead><tbody><tr><td>Audited</td><td>已審核</td><td>文章審核通過即公開</td></tr><tr><td>AuditedHidden</td><td>已審核但隱藏</td><td>文章審核通過但隱藏</td></tr><tr><td>Unaudited</td><td>未審核</td><td>當文章送出時切換到此狀態等候審核</td></tr><tr><td>Reject</td><td>駁回</td><td>當審核未通過將設為此狀態</td></tr><tr><td>Draft</td><td>草稿</td><td>文章初始狀態</td></tr></tbody></table>
     * @param order 排序
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listMyArticle(
        tags?: string[],

        keyword?: string,

        startTime?: number,

        endTime?: number,

        summaryLength: number=120,

        state?: ('Audited' | 'AuditedHidden' | 'Unaudited' | 'Reject' | 'Draft'),

        order: ('Time_NewFirst' | 'Time_OldFirst' | 'CommitCount_MassFirst' | 'CommitCount_LessFirst')="Time_NewFirst",

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfArticleWithUserState> {
        let url = '/api/Article/my';
        const queryList = [];

        if(tags !== null && tags !== undefined){
            for(const item of tags){
                if (item) {
                    queryList.push('tags=' + encodeURIComponent((item).toString()));
                }
            }
        }
    
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

        return this.http.get<PagingOfArticleWithUserState>(
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
     * 取得指定文章的檔案列表
     *
     * @param articleId 文章唯一識別號
     * @param type 類型過濾
     */
    listStorage(
        articleId: number,

        type?: string
        ): Observable<ArticleStorage[]> {
        let url = '/api/Article/{articleId}/storage';

        url = url.replace('{articleId}', (articleId).toString());
            const queryList = [];

        if (type !== null && type !== undefined) {
            queryList.push('type=' + encodeURIComponent(type.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<ArticleStorage[]>(
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
     * 上傳檔案至指定文章中
     *
     * @param articleId 文章唯一識別號
     * @param type 類型
     * @param files 檔案
     */
    addStorage(
        articleId: number,

        type?: string,

        files?: File[]
        ): Observable<ArticleStorage[]> {
        let url = '/api/Article/{articleId}/storage';

        url = url.replace('{articleId}', (articleId).toString());
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
                return this.http.post<ArticleStorage[]>(
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
     * 取得指定文章的指定檔案
     *
     * @param articleId 文章唯一識別號
     * @param storageId 檔案唯一識別號
     */
    getStorage(
        articleId: number,

        storageId: string
        ): Observable<ArticleStorage> {
        let url = '/api/Article/{articleId}/storage/{storageId}';

        url = url.replace('{articleId}', (articleId).toString());
    
        url = url.replace('{storageId}', (storageId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<ArticleStorage>(
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
     * 刪除指定文章中的指定檔案
     *
     * @param articleId 文章唯一識別號
     * @param storageId 檔案唯一識別號
     */
    removeStorage(
        articleId: number,

        storageId: string
        ): Observable<void> {
        let url = '/api/Article/{articleId}/storage/{storageId}';

        url = url.replace('{articleId}', (articleId).toString());
    
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