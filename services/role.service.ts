import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../config';
import { Article, User, Favorite, ValueInfo, ArticleTagWithCount, PagingOfArticleWithUserState, ArticleWithUserState, UserBaseData, ArticleStorage, Commit, PagingOfCommitWithScoreAndUserState, CommitWithScoreAndUserState, CommitWithScore, CommitScoreCount, PagingOfLogin, Login, Role, UserAssignRole, AuthData, LoginData, PagingOfUser } from '../models';
import clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
    constructor(private http: HttpClient) {}


    /**
     * 取得指定角色資訊
     *
     * @param roleId 角色唯一識別號
     */
    get(
        roleId: string
        ): Observable<Role> {
        let url = '/api/Role/{roleId}';

        url = url.replace('{roleId}', (roleId).toString());
            const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<Role>(
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
     * 刪除指定角色
     *
     * @param roleId 角色唯一識別號
     */
    delete(
        roleId: string
        ): Observable<void> {
        let url = '/api/Role/{roleId}';

        url = url.replace('{roleId}', (roleId).toString());
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
     * 取得所有角色列表
     *
     */
    listRoles(        ): Observable<Role[]> {
        let url = '/api/Role';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<Role[]>(
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
     * 更新角色
     *
     * @param role 角色資訊
     */
    update(
        role: Role
        ): Observable<Role> {
        let url = '/api/Role';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<Role>(
            url,
			
            role
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
     * 建立新角色
     *
     * @param role 角色資訊
     */
    create(
        role: Role
        ): Observable<Role> {
        let url = '/api/Role';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<Role>(
            url,
			
            role
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
     * 更新角色排序
     *
     * @param roleIds 依照順序排列的角色唯一識別號
     */
    sort(
        roleIds: string[]
        ): Observable<void> {
        let url = '/api/Role/sort';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.put<void>(
            url,
			
            roleIds
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
     * 取得委派列表
     *
     * @param roleId 角色唯一識別號
     */
    listUserAssignRole(
        roleId?: string
        ): Observable<UserAssignRole[]> {
        let url = '/api/Role/assign';
        const queryList = [];

        if (roleId !== null && roleId !== undefined) {
            queryList.push('roleId=' + encodeURIComponent(roleId.toString()));
        }
            window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<UserAssignRole[]>(
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
     * 加入委派
     *
     * @param assign 委派內容
     */
    assignUserRole(
        assign: UserAssignRole
        ): Observable<void> {
        let url = '/api/Role/assign';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        let tmpOptions = clone(Config.defaultOptions);


        return this.http.post<void>(
            url,
			
            assign
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
     * 刪除指定的角色委派
     *
     * @param assignId 委派唯一識別號
     */
    unassignUserRole(
        assignId: string
        ): Observable<void> {
        let url = '/api/Role/assign/{assignId}';

        url = url.replace('{assignId}', (assignId).toString());
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
     * 取得所有可授權的權限列表
     *
     */
    getAllPolicies(        ): Observable<ValueInfo[]> {
        let url = '/api/Role/policy/all';
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
     * 取得目前使用者擁有的作用中權限列表
     *
     */
    getCurrentUserPolicies(        ): Observable<string[]> {
        let url = '/api/Role/policy/current';
        const queryList = [];
        window['lastRequestTime'] = new Date().getTime();
        if(queryList.length > 0){
            url += '?'+ queryList.join('&');
        }

        return this.http.get<string[]>(
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