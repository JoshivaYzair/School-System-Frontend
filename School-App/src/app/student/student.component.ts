import { Component, HostListener } from '@angular/core';
import { ActivatedRoute,Router, NavigationEnd } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  isPanelVisible: boolean = false;
  filterListVisible = false;

  element: PeriodicElement | null = null;

  // Paginación
  pageSize = 5;
  currentPage = 0;
  paginatedData: PeriodicElement[] = [];
  pageSizeSelector: number[] = [5,10,20,50]
  filterOptions: String[] = ["School", "Career"]

  constructor(private router: Router, private route:ActivatedRoute){

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isPanelVisible = event.url !== '/student';
      }
    });

  }
  ngOnInit() {
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.dataSource.slice(startIndex, endIndex);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.dataSource.length) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  changePageSize(event: Event) {
    const newSize = (event.target as HTMLSelectElement).value;
    this.pageSize = Number(newSize);
    this.currentPage = 0; 
    this.updatePaginatedData();
  }

  studentView(element: PeriodicElement) {
    this.isPanelVisible = true;
    this.element = element;
    this.router.navigate(['view', element.name],{relativeTo: this.route});
  }

  toggleFilterList() {
    this.filterListVisible = !this.filterListVisible;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const selectBox = document.querySelector('.select-box');
    const filterList = document.getElementById('filter-list');
    if (selectBox && !selectBox.contains(event.target as Node) && filterList && !filterList.contains(event.target as Node)) {
      this.filterListVisible = false;
    }
  }

}
