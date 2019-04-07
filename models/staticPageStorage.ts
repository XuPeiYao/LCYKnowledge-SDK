import { Article } from './article';

import { User } from './user';

import { ValueInfo } from './valueInfo';

import { ArticleTagWithCount } from './articleTagWithCount';

import { PagingOfArticleWithUserState } from './pagingOfArticleWithUserState';

import { ArticleWithUserState } from './articleWithUserState';

import { UserBaseData } from './userBaseData';

import { ArticleStorage } from './articleStorage';

import { Commit } from './commit';

import { CommitStorage } from './commitStorage';

import { PagingOfCommitWithScoreAndUserState } from './pagingOfCommitWithScoreAndUserState';

import { CommitWithScoreAndUserState } from './commitWithScoreAndUserState';

import { CommitWithScore } from './commitWithScore';

import { CommitScoreCount } from './commitScoreCount';

import { PagingOfLogin } from './pagingOfLogin';

import { Login } from './login';

import { News } from './news';

import { PagingOfNewsWithPicture } from './pagingOfNewsWithPicture';

import { NewsWithPicture } from './newsWithPicture';

import { NewsStorage } from './newsStorage';

import { Role } from './role';

import { UserAssignRole } from './userAssignRole';

import { AuthData } from './authData';

import { LoginData } from './loginData';

import { StaticPage } from './staticPage';

import { PagingOfStaticPage } from './pagingOfStaticPage';

import { PagingOfUser } from './pagingOfUser';

import { UserLevelName } from './userLevelName';
export class StaticPageStorage {

    /**
     * 網址
     */
    url? : string;

    /**
     * 
     */
    id? : string;

    /**
     * 
     */
    staticPageId? : string;

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
}