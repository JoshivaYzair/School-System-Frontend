import { Component,OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.scss'
})
export class StudentViewComponent implements OnInit,OnDestroy{

  elementName: String | null = '';
  private routeSub: Subscription | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  ngOnInit() {
    this.routeSub  = this.route.paramMap.subscribe(params =>{
      this.elementName = params.get('name');
    });
    
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  closePanel() {
    this.router.navigate(['./'], { relativeTo: this.route.parent });
    this.ngOnDestroy();
  }
}
