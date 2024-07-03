import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navBarData } from './nav-data';
import { sideNave } from '../interface/SideNavToggle';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})

export class SideNavComponent implements OnInit{
  @Output() onToggleSideNav: EventEmitter<sideNave> = new EventEmitter();
  screenWidth: number = 0;
  collapsed: boolean = false;
  navData = navBarData;
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  toggleCollapse():void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    })
  }
}
