import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {
    ArticleService,
    CommitService,
    LoginService,
    RoleService,
    SessionService,
    UserService
} from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    ArticleService,
    CommitService,
    LoginService,
    RoleService,
    SessionService,
    UserService
  ]
})
export class LCYModule {

}
