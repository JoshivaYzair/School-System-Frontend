import { Component } from '@angular/core';
import { sideNave } from './interface/SideNavToggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: sideNave): void{
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
