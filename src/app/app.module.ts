import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NotificationComponent } from './events/notification/notification.component';
import { NorouteComponent } from './notfound/noroute/noroute.component';
import { SuperComponent } from './directive/super/super.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { CustompipeComponent } from "./pipe/custompipe/custompipe.component";
import { SuperstringPipe } from './custompipe/superstring.pipe';
//@ -> decorator
@NgModule(
  {
    declarations: [
                    RootComponent,
                    HomepageComponent,
                    HeaderComponent,
                    SidebarComponent,
                    NotificationComponent,
                    NorouteComponent,
                    SuperComponent,
                    InbuiltComponent,
                    CustompipeComponent,
                    SuperstringPipe
                  ],
    imports: [
                BrowserModule,
                AppRoutingModule
                
              ],
    providers: [],
    bootstrap: [RootComponent]

  })
export class RootModule { }
