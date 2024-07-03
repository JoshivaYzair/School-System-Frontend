import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
import { StudentComponent } from './student/student.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentViewComponent } from './student-view/student-view.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BodyComponent,
    StudentComponent,
    NavBarComponent,
    StudentViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
