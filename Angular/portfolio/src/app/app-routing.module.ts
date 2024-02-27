import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ContavtComponent } from './contact/contavt.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [

  {path:'', component:HomeComponent},//empty or anything after /
  {path:'home', component:HomeComponent, children:[
    {path:'project', component:ProjectComponent},
    {path:'contact', component:ContavtComponent},
  ]},
  {path:'about', component:AboutComponent},
  {path:'project', component:ProjectComponent},
  {path:'contact', component:ContavtComponent},
  {path:'**', component:NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
