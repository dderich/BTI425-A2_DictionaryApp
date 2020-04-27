import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HeaderNavComponent } from './header-nav.component';
import { AddEnglishTermComponent } from './add-english-term.component';
import { EnglishTermDetailComponent } from './english-term-detail.component';
import { AboutComponent } from './about.component';
import { AddEnglishDefinitionComponent } from './add-english-definition.component';
import { NonEnglishTermDetailComponent } from './non-english-term-detail.component';
import { AddNonEnglishTermComponent } from './add-non-english-term.component';
import { AddNonEnglishDefinitionComponent } from './add-non-english-definition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    AddEnglishTermComponent,
    EnglishTermDetailComponent,
    AboutComponent,
    AddEnglishDefinitionComponent,
    NonEnglishTermDetailComponent,
    AddNonEnglishTermComponent,
    AddNonEnglishDefinitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
