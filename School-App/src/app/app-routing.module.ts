import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  { path: 'student', 
    component: StudentComponent,
    children:[
      {path: 'view/:name', component: StudentViewComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
