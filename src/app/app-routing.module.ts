import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FatherComponent } from './father/father.component';
import { ForComponent } from './for/for.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDataComponent } from './post-data/post-data.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SonComponent } from './son/son.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'templateForm', component:  TemplateDrivenFormComponent},
  { path: 'reactiveForm', component:  ReactiveFormComponent},
  { path: 'getData', component:  GetDataComponent},
  { path: 'postData', component:  PostDataComponent},
  { path: 'father', component:  FatherComponent},
  { path: 'son', component:  SonComponent},
  { path: '', component: HomeComponent },
  { path: 'for', component: ForComponent },
  { path: 'QrCode', component: QrCodeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
