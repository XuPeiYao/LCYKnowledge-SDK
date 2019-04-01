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

import { UserAssignRole } from './userAssignRole';

import { AuthData } from './authData';

import { PagingOfUser } from './pagingOfUser';
export class LoginData {

    /**
     * 
     */
    provider? : string;

    /**
     * 
     */
    id? : string;

    /**
     * 
     */
    email? : string;

    /**
     * 
     */
    name? : string;

    /**
     * 
     */
    image? : string;

    /**
     * 
     */
    token? : string;

    /**
     * 
     */
    idToken? : string;

    /**
     * 
     */
    secretCode? : string;

    /**
     * 
     */
    oldSecretCode? : string;
}