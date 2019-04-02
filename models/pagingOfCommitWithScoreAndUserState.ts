﻿import { Article } from './article';

import { User } from './user';

import { ValueInfo } from './valueInfo';

import { ArticleTagWithCount } from './articleTagWithCount';

import { PagingOfArticleWithUserState } from './pagingOfArticleWithUserState';

import { ArticleWithUserState } from './articleWithUserState';

import { UserBaseData } from './userBaseData';

import { ArticleStorage } from './articleStorage';

import { Commit } from './commit';

import { CommitStorage } from './commitStorage';

import { CommitWithScoreAndUserState } from './commitWithScoreAndUserState';

import { CommitWithScore } from './commitWithScore';

import { CommitScoreCount } from './commitScoreCount';

import { PagingOfLogin } from './pagingOfLogin';

import { Login } from './login';

import { Role } from './role';

import { UserAssignRole } from './userAssignRole';

import { AuthData } from './authData';

import { LoginData } from './loginData';

import { PagingOfUser } from './pagingOfUser';
export class PagingOfCommitWithScoreAndUserState {

    /**
     * 
     */
    skip? : number;

    /**
     * 
     */
    take? : number;

    /**
     * 
     */
    totalCount? : number;

    /**
     * 
     */
    currentPageIndex? : number;

    /**
     * 
     */
    totalPageCount? : number;

    /**
     * 
     */
    hasPreviousPage? : boolean;

    /**
     * 
     */
    hasNextPage? : boolean;

    /**
     * 
     */
    result? : CommitWithScoreAndUserState[];
}