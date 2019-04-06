import { Article } from './article';

import { News } from './news';

import { NewsStorage } from './newsStorage';

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

import { PagingOfNewsWithPicture } from './pagingOfNewsWithPicture';

import { NewsWithPicture } from './newsWithPicture';

import { Role } from './role';

import { UserAssignRole } from './userAssignRole';

import { AuthData } from './authData';

import { LoginData } from './loginData';

import { PagingOfUser } from './pagingOfUser';

import { UserLevelName } from './userLevelName';
export class User {

    /**
     * 大頭照網址
     */
    pictureUrl? : string;

    /**
     * 稱號圖片網址
     */
    levelImageUrl? : string;

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

    /**
     * 
     */
    news? : News[];
}