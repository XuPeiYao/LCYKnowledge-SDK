import { Article } from './article';

import { ValueInfo } from './valueInfo';

import { ArticleTagWithCount } from './articleTagWithCount';

import { PagingOfArticleWithUserState } from './pagingOfArticleWithUserState';

import { ArticleWithUserState } from './articleWithUserState';

import { UserBaseData } from './userBaseData';

import { ArticleStorage } from './articleStorage';

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
export class User {

    /**
     * 
     */
    id? : string;

    /**
     * 
     */
    name? : string;

    /**
     * 
     */
    pictureDataId? : string;

    /**
     * 
     */
    email? : string;

    /**
     * 
     */
    enable? : boolean;

    /**
     * 
     */
    lastReadNoticeTime? : number;

    /**
     * 
     */
    createTime? : number;

    /**
     * 
     */
    modifyTime? : number;
}