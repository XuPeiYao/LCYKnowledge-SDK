﻿import { Article } from './article';

import { User } from './user';

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

import { CommitStorage } from './commitStorage';

import { PagingOfLogin } from './pagingOfLogin';

import { Login } from './login';

import { News } from './news';

import { PagingOfNewsWithPicture } from './pagingOfNewsWithPicture';

import { NewsWithPicture } from './newsWithPicture';

import { NewsStorage } from './newsStorage';

import { PagingOfNoticeWithUserBaseData } from './pagingOfNoticeWithUserBaseData';

import { NoticeWithUserBaseData } from './noticeWithUserBaseData';

import { Notice } from './notice';

import { Role } from './role';

import { UserAssignRole } from './userAssignRole';

import { LoginData } from './loginData';

import { StaticPage } from './staticPage';

import { PagingOfStaticPage } from './pagingOfStaticPage';

import { StaticPageStorage } from './staticPageStorage';

import { PagingOfUser } from './pagingOfUser';

import { UserLevelName } from './userLevelName';

import { ResetPwdData } from './resetPwdData';

import { PagingOfUserBaseDataWithScore } from './pagingOfUserBaseDataWithScore';

import { UserBaseDataWithScore } from './userBaseDataWithScore';
export class AuthData {

    /**
     * 
     */
    token? : string;

    /**
     * 
     */
    user? : User;
}