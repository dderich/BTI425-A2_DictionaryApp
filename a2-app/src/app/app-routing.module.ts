import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./home.component";
import { AddEnglishTermComponent } from './add-english-term.component';
import { EnglishTermDetailComponent } from './english-term-detail.component';
import { AboutComponent } from './about.component';
import { AddEnglishDefinitionComponent } from './add-english-definition.component';
import { NonEnglishTermDetailComponent } from './non-english-term-detail.component';
import { AddNonEnglishTermComponent} from './add-non-english-term.component'
import { AddNonEnglishDefinitionComponent } from './add-non-english-definition.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },


  { path: 'englishTerm/:id', component: EnglishTermDetailComponent },
  { path: 'addEnglishTerm', component: AddEnglishTermComponent },
  { path: 'addEnglishDefinition/:id', component: AddEnglishDefinitionComponent },


  { path: 'nonEnglishTerm/:id', component: NonEnglishTermDetailComponent },
  { path: 'addNonEnglishTerm/:id', component: AddNonEnglishTermComponent },
  { path: 'addNonEnglishDefinition/:id', component: AddNonEnglishDefinitionComponent },

  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
