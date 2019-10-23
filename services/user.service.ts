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
export class UserService {
    constructor(private http: HttpClient) {}


    /**
     * 取得列表分頁結果
     *
     * @param provider 登入方式
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
     * 取得目前使用者自訂設定，如未登入則回傳null
     *
     */
    getCurrentUserConfig(        ): Observable<string> {
        let url = '/api/User/current/config';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<string>(
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
     * 更新使用者自訂設定
     *
     * @param config 使用者自訂設定
     */
    updateCurrentUserConfig(
        config: string
        ): Observable<string> {
        let url = '/api/User/current/config';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        tmpOptions.headers['Content-Type'] = 'application/json';
			
        return this.http.post<string>(
            url,
			JSON.stringify(
            config
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
     * 刪除指定使用者
     *
     * @param deletedUserId 唯一識別號
     */
    delete(
        deletedUserId: string
        ): Observable<any> {
        let url = '/api/User/{deletedUserId}';

        url = url.replace('{deletedUserId}', (deletedUserId).toString());
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
    
    /**
     * 寄送 忘記密碼 的Email
     *
     * @param email 
     */
    sendForgetPwdEmail(
        email: string
        ): Observable<Blob> {
        let url = '/api/User/{email}/sendForgetPwdEmail';

        url = url.replace('{email}', (email).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<Blob>(
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
     * 重設密碼
     *
     * @param data 
     */
    resetPwd(
        data: ResetPwdData
        ): Observable<Blob> {
        let url = '/api/User/resetPwd';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<Blob>(
            url,
			
            data
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
     * 取得電子報訂閱狀態
     *
     */
    getSubscription(        ): Observable<boolean> {
        let url = '/api/User/subscription';
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
     * 更新電子報訂閱狀態
     *
     * @param value 
     */
    updateSubscription(
        value: boolean
        ): Observable<boolean> {
        let url = '/api/User/subscription';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        tmpOptions.headers['Content-Type'] = 'application/json';
			
        return this.http.put<boolean>(
            url,
			
            value
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
     * 退訂網址
     *
     * @param subscriptionId 
     */
    unSubscription(
        subscriptionId?: string
        ): Observable<Blob> {
        let url = '/api/User/unsubscription';
        const queryList = [];

        if (subscriptionId !== null && subscriptionId !== undefined) {
            queryList.push('subscriptionId=' + encodeURIComponent(subscriptionId.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<Blob>(
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
     * 發送電子報
     *
     */
    sendSubcribeUserEmail(        ): Observable<Blob> {
        let url = '/api/User/sendSubcribeUserEmail';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<Blob>(
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
     * 取得值星使用者列表
     *
     */
    listStarUsers(        ): Observable<UserBaseData[]> {
        let url = '/api/User/stars';
        const queryList = [];
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
     * 取得使用者積分排行分頁結果
     *
     * @param keyword 關鍵字
     * @param startTime 起始時間
     * @param endTime 結束時間
     * @param offset 起始索引
     * @param limit 取得筆數
     */
    listUserRank(
        keyword?: string,

        startTime?: number,

        endTime?: number,

        offset: number=0,

        limit: number=10
        ): Observable<PagingOfUserBaseDataWithScore> {
        let url = '/api/User/ranks';
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

        return this.http.get<PagingOfUserBaseDataWithScore>(
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