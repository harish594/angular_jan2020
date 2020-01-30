import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NotificationComponent } from './events/notification/notification.component';
import { NorouteComponent } from './notfound/noroute/noroute.component';
import { SuperComponent } from './directive/super/super.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { CustompipeComponent } from './pipe/custompipe/custompipe.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';


const routes: Routes = [
  
  {
    path:'',
    redirectTo:'notify',
    pathMatch:'full'
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'notify',
    component:NotificationComponent
  } ,
  {
    path:'directive',
    component:SuperComponent
  },
  {
    path:'inbuiltpipe',
    component:InbuiltComponent
  },
  {
    path:'custompipe',
    component:CustompipeComponent
  },
  {
    path:'templateform',
    component:TemplateformComponent
  },
  {
    path:'**',
    component:NorouteComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
