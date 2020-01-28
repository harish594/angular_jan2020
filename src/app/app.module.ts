import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NotificationComponent } from './events/notification/notification.component';

//@ -> decorator
@NgModule(
  {
    declarations: [
                    RootComponent,
                    HomepageComponent,
                    HeaderComponent,
                    SidebarComponent,
                    NotificationComponent
                  ],
    imports: [
                BrowserModule,
                AppRoutingModule
                
              ],
    providers: [],
    bootstrap: [RootComponent]

  })
export class RootModule { }
