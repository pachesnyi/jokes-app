import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';
import { JokesListItemComponent } from './components/jokes-list-item/jokes-list-item.component';
import { JokeDetailsPageComponent } from './pages/joke-details-page/joke-details-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JokesListComponent,
    JokesListItemComponent,
    JokeDetailsPageComponent,
    HeaderComponent,
    CustomPaginationComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
