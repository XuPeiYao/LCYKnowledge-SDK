import { Article } from './article';

import { User } from './user';

import { ValueInfo } from './valueInfo';

import { ArticleTagWithCount } from './articleTagWithCount';

import { PagingOfArticleWithUserState } from './pagingOfArticleWithUserState';

import { ArticleWithUserState } from './articleWithUserState';

import { UserBaseData } from './userBaseData';

import { Commit } from './commit';

import { PagingOfCommitWithScoreAndUserState } from './pagingOfCommitWithScoreAndUserState';

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
export class ArticleStorage {

    /**
     * 
     */
    id? : string;

    /**
     * 
     */
    articleId? : number;

    /**
     * 
     */
    fileName? : string;

    /**
     * 
     */
    objectName? : string;

    /**
     * 
     */
    type? : string;

    /**
     * 
     */
    time? : number;

    /**
     * 
     */
    size? : number;

    /**
     * 網址
     */
    url? : string;
}