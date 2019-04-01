import { Article } from './article';

import { User } from './user';

import { Favorite } from './favorite';

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

import { AuthData } from './authData';

import { LoginData } from './loginData';

import { PagingOfUser } from './pagingOfUser';
export class UserAssignRole {

    /**
     * 
     */
    id? : string;

    /**
     * 
     */
    userId? : string;

    /**
     * 
     */
    roleId? : string;

    /**
     * 
     */
    startTime? : number;

    /**
     * 
     */
    endTime? : number;

    /**
     * 
     */
    enable? : boolean;
}