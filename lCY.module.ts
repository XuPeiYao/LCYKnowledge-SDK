import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {
    ArticleService,
    CommitService,
    LoginService,
    NewsService,
    NoticeService,
    RoleService,
    SessionService,
    StaticPageService,
    UserService,
    UserLevelNameService
} from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    ArticleService,
    CommitService,
    LoginService,
    NewsService,
    NoticeService,
    RoleService,
    SessionService,
    StaticPageService,
    UserService,
    UserLevelNameService
  ]
})
export class LCYModule {

}